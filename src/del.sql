IF Object_id ('tempdb..#temptable1') IS NOT NULL 
  DROP TABLE #temptable1 
IF Object_id ('tempdb..#temptable2') IS NOT NULL 
  DROP TABLE #temptable2 
IF Object_id ('tempdb..#temptable3') IS NOT NULL 
  DROP TABLE #temptable3 
IF Object_id ('tempdb..#temptable4') IS NOT NULL 
  DROP TABLE #temptable4 
IF Object_id ('tempdb..#temptable5') IS NOT NULL 
  DROP TABLE #temptable5 
IF Object_id ('tempdb..#temptable6') IS NOT NULL 
  DROP TABLE #temptable6 
  
/*
#temptable

T2.  -> select most recent pap test in past 5 years
T1.  -> pull all Pap tests done in last 5 years
T3   -> pull female patients age 23-64 seen for medical visit in period
T4.  -> select most recent visit in period
T5.  -> pull all surgical histories with hyster in time
T6.  -> elect one entry per patient from surgical history
FINAL-> was Pat conpliant at time of most rec enc
*/   


DECLARE @start_date DATE 
DECLARE @end_date DATE 

--here the person running the report puts the start & end dates of the reporting period 
SET @start_date = '2020-01-01' 
SET @end_date= '2020-12-31' 

--create a temporary date variable of june 30th of the year  
--of the end date of the reporting period for use in age calculation 
DECLARE @june30_end_date_year DATE = 
    CONVERT(DATETIME, Concat(Year(@end_date), '-06-30') )
 
-- pull all paps in past 5 years 
SELECT p.controlno, 
       p.pid, 
       e.date, 
       l.reportid, 
       i.itemname, 
       l.received, 
       l.result 
INTO   #temptable1 
FROM   items i, 
       labdata l, 
       enc e, 
       users u, 
       patients p
WHERE  p.pid = u.uid 
       AND p.pid = e.patientid 
       AND e.encounterid = l.encounterid 
       AND i.itemid = l.itemid 
       AND l.deleteflag = 0 
       AND l.itemid IN ( '321308', '291027', '290852', '290955', 
                         '290919', '291062', '302524', '290991', 
                         '320535', '290885', '290282', '237961', 
                         '237944', '250315', '239891', '217630', 
                         '251864', '251810', '252331' ) 
       AND e.date BETWEEN Dateadd(year, -5, @start_date) AND @end_date 
       AND ( l.result <> '' 
              OR l.received = '1' ) 

-- select most recent pap in past 5 years 
SELECT DISTINCT t.* 
INTO   #temptable2 
FROM   #temptable1 t 
       INNER JOIN (SELECT pid, 
                          Max(date) date 
                   FROM   #temptable1 
                   GROUP  BY pid) b 
               ON t.pid = b.pid 
                  AND t.date = b.date 

-- pull female patients age 23-64 seen for medical visit in period 
SELECT DISTINCT p.pid, 
                p.controlno, 
                u.ufname, 
                u.ulname, 
                d.printname                                  AS provider_seen, 
                CONVERT(DATE, u.ptdob)                       AS DOB, 
                Datediff(hour, u.ptdob, @june30_end_date_year) / 8766 AS Age, 
                e.date 
INTO   #temptable3 
FROM   users u, 
      patients p ,
	         enc e
        LEFT JOIN doctors d 
              ON e.doctorid = d.doctorid 
WHERE  p.pid = u.uid 
       AND p.pid = e.patientid 
       AND e.date BETWEEN @start_date AND @end_date 
       AND u.sex = 'Female' 
       AND e.status = 'CHK' 
       AND Datediff(hour, u.ptdob, @june30_end_date_year) / 8766 >= 23 
       AND Datediff(hour, u.ptdob, @june30_end_date_year) / 8766 <= 64 
       AND e.visittype IN ( 'adult-fu', 'adult-new', 'adult-pe', 'adult-urg', 
                            'deaf-fu', 'deaf-new', 'gyn-fu', 'gyn-new', 
                            'gyn-urg', 'mat', 'ped-prenat', 'peds-fu', 
                            'peds-pe', 'peds-urg', 'rcm-off','med-audio','med-tv','mat-audio') 

-- select most recent visit in period 
SELECT DISTINCT t.* 
INTO   #temptable4 
FROM   #temptable3 t 
       INNER JOIN (SELECT pid, 
                          Max(date) date 
                   FROM   #temptable3 
                   GROUP  BY pid) b 
               ON t.pid = b.pid 
                  AND t.date = b.date 

--pull all surgical histories with hyster in them 
SELECT e.patientid                     AS pid, 
       p.controlno, 
       sh.encounterid, 
       CONVERT(VARCHAR(35), sh.reason) AS reason 
INTO   #temptable5 
FROM   enc e, 
       patients p, 
       surgicalhistory sh 
WHERE  e.patientid = p.pid 
       AND sh.encounterid = e.encounterid 
       AND sh.reason LIKE '%hys%' 

--select one entry per patient from surgical history 
SELECT DISTINCT t.* 
INTO   #temptable6 
FROM   #temptable5 t 
       INNER JOIN (SELECT pid, 
                          Max(reason) reason 
                   FROM   #temptable5 
                   GROUP  BY pid) b 
               ON t.pid = b.pid 
                  AND t.reason = b.reason 

--was patient compliant at time of most recent visit 
SELECT DISTINCT t4.controlno, 
                t4.ufname, 
                t4.ulname, 
                t4.dob, 
                t4.provider_seen, 
                t4.age, 
                t6.reason, 
                CONVERT(DATE, t4.date)                 AS date_most_recent_enc, 
                CONVERT(DATE, t2.date)                 AS date_most_recent_PAP, 
                t2.itemname, 
                Datediff(mm, t2.date, t4.date)         AS months_since_last_pap, 
                Datediff(hour, t4.dob, t2.date) / 8766 AS age_at_Pap, 
                CASE 
                  WHEN Charindex('HPV', t2.itemname) IS NULL THEN NULL 
                  WHEN Charindex('HPV', t2.itemname) = 0 THEN 'without HPV' 
                  ELSE 'with HPV' 
                END                                    AS HPV, 
                CASE 
                  WHEN t6.reason IS NOT NULL THEN 'excluded' 
                  WHEN ( t2.date IS NOT NULL 
                         AND Datediff(hour, t4.dob, t2.date) / 8766 >= 30 
                         AND Datediff(mm, t2.date, t4.date) <= 60 
                         AND Charindex('HPV', t2.itemname) >= 1 ) THEN 
                  'compliant' 
                  WHEN ( t2.date IS NOT NULL 
                         AND Datediff(mm, t2.date, t4.date) <= 36 ) THEN 
                  'compliant' 
                  ELSE 'not compliant' 
                END                                    AS compliant 
FROM   #temptable4 t4 
       LEFT JOIN #temptable2 t2 
              ON t4.pid = t2.pid 
       LEFT JOIN #temptable6 t6 
              ON t6.pid = t4.pid 

