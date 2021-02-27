if object_id('tempdb..#temptable1') is not null drop table #temptable1
if object_id('tempdb..#temptable2') is not null drop table #temptable2
if object_id('tempdb..#temptable3') is not null drop table #temptable3
if object_id('tempdb..#temptable4') is not null drop table #temptable4
if object_id('tempdb..#temptable5') is not null drop table #temptable5
if object_id('tempdb..#temptable6') is not null drop table #temptable6

/*
T1.  -> pull all Pap tests done in last 5 years
T2.  -> select most recent pap test in past 5 years
T3   -> pull female patients age 23-64 seen for medical visit in period
T4.  -> select most recent visit in period
T5.  -> pull all surgical histories with hyster in time
T6.  -> select one entry per patient from surgical history
FINAL->
*/

DECLARE @start_date DATE
declare @end_date DATE

set @start_date = '2020/01/01'
set @end_date = '2020/12/31'

--create a temporary date variable of june 30th of the year  
--of the end date of the reporting period for use in age calculation 
DECLARE @june30_end_date_year date 
    = convert(datetime, concat(year(@end_date), '-06-30'))

-- pull all Pap tests done in last 5 years
select p.controlno,
       p.pid,
       e.date,
       l.reportid,
       l.itemname,
       l.received,
       l.result
into   #temptable1
FROM   items i,
       labdata l,
       enc e,
       users u,
       patients p
where  p.pid = u.uid
and p.pid = e.patientid
and e.encounterid  = l.encounterid
and i.itemid = i.itemid
and l.deleteflag = 0
AND l.itemid IN ( '321308', '291027', '290852', '290955', 
                         '290919', '291062', '302524', '290991', 
                         '320535', '290885', '290282', '237961', 
                         '237944', '250315', '239891', '217630', 
                         '251864', '251810', '252331' ) 
and e.date between dateadd(year, -5, @start_date) and @end_date 
-- not empty or 1 (entered?)
and (l.result <> ''
    or l.received = '1')

--select most recent pap test in past 5 years
select distinct t.*
into #temptable2
from #temptable1 t
    inner join (select pid,
                      max(date) DATE 
                from #temptable1
                group by pid) b
            on t.pid = b.pid 
                and t.date = b.date 

-- pull female patients age 23-64 seen for medical visit in period
select distinct p.pid,
                p.controlno,
                u.ufname,
                u.ulname,
                d.printname as provider_name,
                convert(date, u.ptdob) as DOB,
                datediff(hour, u.ptdob, @june30_end_date_year) / 8766 as Age,
                e.date 
into #temptable3
from users u,
     patients p,
     enc e
     left join doctors d
        on e.doctorid = d.doctorid
where p.pid = u.uid
    and p.pid = e.patientid
    and e.date between @start_date and @end_date
    and u.sex='female'
    and e.status='chk'
    and (datediff(hour, u.ptdob, @june) / 8766) between 23 and 64
    AND e.visittype IN ( 'adult-fu', 'adult-new', 'adult-pe', 'adult-urg', 
                            'deaf-fu', 'deaf-new', 'gyn-fu', 'gyn-new', 
                            'gyn-urg', 'mat', 'ped-prenat', 'peds-fu', 
                            'peds-pe', 'peds-urg', 'rcm-off','med-audio','med-tv','mat-audio') 

-- select most recent visit in period
select distinct t.*
into #temptable4
from #temptable3 t
    inner join (select pid,
                max(date) date
            from #temptable3
            group by pid) b
        on t.pid = b.pid and t.date = b.date
            
--pull all surgical histories with hyster in time
select e.patientid as pid
       p.controlno,
       sh.encounterid,
       convert(varchar(35), sh.reason) as reason
into #temptable5
from enc e,
     patients p,
     surgicalhistory sh
where e.patientid = p.pid
      and sh.encounterid = e.encounterid
      and sh.reason like '%hys%'

-- select one entry per patient from surgical history
select distinct t.*
into #temptable6
from #temptable5
    inner join (select pid,
            max(reason) reason
            from #temptable5
            group by pid) b 
        on t.pid=b.pid and t.reason=b.reason 
    
-- was pat compliant at time of most recent visit
select distinct t4.controlno,
                t4.ufname,
                t4.ulname,
                t4.dob,
                t4.provider_seen,
                t4.age,
                t6.reason,
                convert(date, t4.date) as date_most_rec_enc,
                convert(date, t2.date) as date_most_rec_pap,
                t2.itemname,
                datediff(mm, t2.date) as months_since_last_pap,
                datediff(hout, t4.date) / 8766 as age_at_pap,
                case 
                    when charindex('hpv', t2.itemname) is not null then null
                    when charindex('hpv', t2.itemname) = 0 then 'without HPV'
                    else 'with HPV'
                END as HPV,
                case 
                    when t6.reason is not null then 'excluded'

                    when (t2.date is not null
                            and dateduff(hout, t4.dob, t2.date) / 8766  between 30 and 60
                            and charindex('HPV', t2.itemname) >= 1 ) THEN 'compliant'
                            when (t2.date is not null and datediff(mm, t2.date, t4.date) <= 36) then 'compliant'
                            else 'not compliant'
                            end as compliant
            from #temptable4 t4 
                left join #temptable2 t2
                    on t4.pid = t2.pid
                left join #temptable6 t6
                    on  t6.pid = t4.pid
