// PATH: /Users/nielssmith/sometimequotatable/src/Quotes.js

// Don't forget:
// 1. ID is capitalized
// 2. source & quote are both lowercase

// NOTES
// -> I need to figure out how to make line breaks \n  strings work in React

// Things I just realized by chance:
// -> Selecting a string of characters and hitting: SHIFT + "
// ---> Will wrap the text in quotation "marks"/parenthesis.
// ----> Crazy.

//TODO
// Add in a Quote adding function/submission
// Add in a filter(higher order function)!
// Add a progress bar to show progress? (cool idea)

/*jshint esversion: 6 */
const Quotes = [
  {
    //https://www.goodreads.com/author/quotes/5350.L_M_Montgomery
    ID: 1,
    quote:
      "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
    source: "Lucy Maud Montgomery O.B.E.",
    // sourcelink: "https://www.goodreads.com/author/quotes/5350.L_M_Montgomery",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 2,
    quote: "My car goes in reverse not my life",
    source: "Viola the Uber driver",
    sourcelink: "",
    motiv: true,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 3,
    quote: "Aren't we all always thinkin' about somewhere else?",
    source: "Moni",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 4,
    quote: "She may forget how much she loves her sister",
    source: "Woman on phone at DC Amtrak station",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 5,
    quote: "The water be swimming",
    source: "Nicole - Race Equity Workshop",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 6,
    quote: "I'm a rebel without a cause who has a personal cause",
    source: "Karen Hansen-Smith - librarian, Mother, Dane",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 7,
    quote: "English is my second language",
    source: "Karen Hansen-Smith - librarian, Mother, Dane",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 8,
    quote: "The love of your life wouldn't have given up on you",
    source: "/r/breakups - Reddit",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 9,
    quote: "They already starting with the madness",
    source: "Leslie Jones (Watching Olympic figure skating)",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 10,
    quote: "I have no special talent. I am only passionately curious.",
    source: "Albert Einstein",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 11,
    quote: "Sittin' on your biscuit, too 'fraid to risk it",
    source: "Elyse (FunHaus)",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 12,
    quote:
      "If you can’t explain it simply, you don’t understand it well enough.",
    source: "Albert Einstein",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },
  // // too sad
  // {
  //   ID: 13,
  //   quote: "I'm sorry, but this means you aren't drug naive",
  //   source: "Faria Amjad, MD",
  //   }
  {
    ID: 14,
    quote: "That's the worst thing that's ever happened to me",
    source: "Simon Amstell",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 15,
    quote:
      "With the black kids, I wasn't constantly trying to be. With the black kids, I just was",
    source:
      "Trevor Noah (On growing up mixed race in South Africa) - Born a Crime",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 16,
    quote: "They did you a favor",
    source: "Mal Blum's Lionel Richie & breakups story",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: true,
    bigBrain: true,
  },

  {
    ID: 17,
    quote: "God, you're pretty",
    source: "Collin Ferrell (In Bruges)",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 18,
    quote: "Why be timid; death is coming",
    source: "Simon Amstell",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 19,
    quote: "When your day is a museum of disappointments",
    source: "Rudy Francisco",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 20,
    quote:
      "It's just not that much fun having fun when you don't want to have fun, mom",
    source: "Sabrina B. - 'Explaining my depression to my mother' ",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 21,
    quote: "Begin again",
    source: "James Baldwin",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 22,
    quote:
      "After I see a movie, I like to get a piece of pie and talk about the movie",
    source: "Alabama (Patrica Arquette) - True Romance",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 23,
    quote: "Being nice isn't easy sometimes",
    source: "Genevie - BFTC Trans Info Meeting",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 24,
    quote: "My religion is kindness",
    source: "Dalai Lama",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 25,
    quote: "Half-merican Army",
    source: "Jess - Coffee Meets Bagel",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 26,
    quote: "Filler text",
    source: "Phil T.",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 27,
    quote: "I had not sufficiently appreciated it",
    source: "Joan Didion",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 28,
    quote: "I love you more than one more day",
    source: "Joan Didion",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: true,
  },

  {
    ID: 29,
    quote: "Aggressively mediocre white guy",
    source: "Hank (David Duchovny - Californication",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 30,
    quote: "You're not going to be this angry forever",
    source: " Doug Gardner (Michael Rapaport)- Atypical (S2E5)",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 31,
    quote: "She helped me trust myself",
    source: "Lloyd Dobler - Say Anything",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 32,
    quote:
      "Diane Court : No one thinks this will work do they? Lloyd Dobler: You just described the beginning of every great success story",
    source: "Say Anything",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 33,
    quote: "She is a lovely person. A living breathing sunrise",
    source: "u/if_horses_could_draw - Reddit ",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    // This one makes little to no sense
    ID: 34,
    quote: "Sometimes life gives you lizards",
    source: "Niels Smith",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 35,
    quote:
      "If you can't laugh at yourself, life's going to seem a whole lot longer than you'd like... What do you do? You laugh, you know? I'm not saying I don't cry, but in-between, I laugh.",
    source: "Natalie Portman - Garden State",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 36,
    quote: "Live it, dream it, fuck it",
    source: "Tyler Coe - RT",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 37,
    quote: "Don't you forget about me",
    source: "Last song in the Breakfast Club",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 38,
    quote: "Some people have dreams, and some people have goals",
    source: "u/magnetic_couch - Reddit ",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 39,
    quote: "I like to feed my eyes",
    source: "Moni",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 40,
    quote:
      "A: If I could time travel, I'd go back to the night we met. B: What would you change? A: Nothing",
    source: "Daniel Radcliff - What If ",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 41,
    quote:
      "On a scale of one to ten, how are you today?...(response)..Why isn't it lower?",
    source: "Anonymous",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 42,
    quote: "'No' is a complete sentence",
    source: "CASHI Meeting",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 43,
    quote: "What matters to you?",
    source: "Jessica Perlo",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 44,
    quote: "I'm just having an allergic reaction to the universe",
    source: "Seth Cohen - The OC",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 45,
    quote: "Say what you mean, mean what you say, and don't say it mean",
    source: "Al-Anon",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 46,
    quote:
      "The universe doesn't give you what you ask for with your thoughts -- it gives you what you demand with your actions",
    source: "Steve Maraboli",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 47,
    quote: "Don't threaten me with a good time",
    source: "Panic at the Disco",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 48,
    quote:
      "Well done girl. Find someone who cherishes you, and wants to have sex with you not from you",
    source: "u/klassz - Reddit",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 49,
    quote: "Sometimes the juice is worth the squeeze",
    source: "Timothy Olyphant - Girl Next Door",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 50,
    quote: "I've been told I wake up happy",
    source: "Tinder woman in Baltimore",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 51,
    quote: "She's jokes man. She's quality",
    source: "? - Too Hot to Handle",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 52,
    quote: "Let's just leave this conversation, okay?",
    source: "Kem - Love Island",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 53,
    quote: "There is only one thing I dread, not to be worthy of my suffering",
    source: "Dostoevski",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 54,
    quote:
      "I'm terrified at the moral apathy, the death of the heart, which is happening in my country. These people have deluded themselves for so long that they really don't think I'm human. I base this on their conduct not on what they say. And this means that they have become in themselves moral monsters",
    source: "James Baldwin",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 55,
    quote: "If the door doesn't open, it's not your door",
    source: "Candace Plattot",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 56,
    quote: "...yesterday finally came.",
    source: "u/? - Reddit",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 57,
    quote: "On a scale of 1 to 'Not', could you?",
    source: "Jeremey - Achievement Hunter",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 58,
    quote:
      "Looks make you pretty, but your personality and your character decide for how long",
    source: "Reddit u/sanket_srivastava",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: true,
  },

  {
    ID: 59,
    quote:
      "I want to have so much behind me, I'm not a slave to what's in front of me",
    source: "Annie (Allison Brie) - Community",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 60,
    quote:
      "The Doctor put her hands over my liver. She told me my resentment’s getting smaller",
    source: "Phobe BrIDgers - Garden Song",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 61,
    quote:
      "The question you've got to ask yourself, the white population of America's gotta ask itself, is why it was necessary to have a nigger in the first place. I'm not a nigger, but if you think I'm a nigger, it means you need it.",
    source: "James Baldwin",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 62,
    quote:
      "But the only way I’d fall is if I jumped. That’s why you’re afraid to come over here. Because a tiny part of you wants to jump. Because it would be so easy. But, I don’t want to jump, so, I’m not afraid. I would never do that. I’m having too good of a time.",
    source: "Parker Posey - Louie S03E04",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 63,
    quote:
      "I am the Saudi Arabia of unhappiness. I have so many reserves of misery that you wouldn’t understand. I actually think that’s part of why I connect with Canadians. I think they understand grinding misery underneath",
    source: "Craig Ferguson",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 64,
    quote:
      "But when exactly can we say that someone is over complicating things? A good rule of thumb is when you’re writing code that solves problems you don’t have.",
    source: "Daan - Blogger on Medium",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 65,
    quote: "Det är ingen ko på isen så länge halva är på land.",
    source:
      "There is no cow on the ice as long as half of it is on land. \n - Translated from Swedish",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 66,
    quote: "I missed you all",
    source: "Seven - Umbrella Academy",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 67,
    quote: "Your passion is waiting for your courage to catch up.",
    source: "Isabelle Lafleche",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 68,
    quote:
      "Sucking at something is the first step to being kinda good at something",
    source: "Jake - Adventure Time",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 69,
    quote:
      "She walked away and I got the first wave of a sensation that would become familiar to me; \n Missing her.",
    source: "David Mitchell on first meeting his wife (Victoria Coren)",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 70,
    quote:
      "On the eve of hesitation, ask yourself how much courage you dare to miss today",
    source: "Tommy Tabermann",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 71,
    quote: "The only person I'd run through an airport for is you",
    source: "The Sister - Fleabag SE2E6",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 72,
    quote: "I have brain damage, nothing I do counts",
    source: "Pierce Hawthorne - Community",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 73,
    quote:
      "Her new boyfriend has a long neck. Just thinking about giraffes makes me angry",
    source: "Oliver Tate",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 74,
    quote: "Well, you’re sitting, eating, and breathing, so the other thing.",
    source: "Wayne - Letterkenny",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },
  // I deleted that long ass David Foster Wallace (RIP) post. It was ID 75
  {
    ID: 76,
    quote: "What's the most important step a person can take? \n The next one.",
    source: "Dalinar Kholin",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 77,
    quote: "and here you are living \n despite it all",
    source: "Rupi Kapur",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 78,
    quote: "America can, should, and must blow up the moon",
    source: "David Cross - The Man Show",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 79,
    quote:
      "When everything is going right, we don’t notice. But when things fall apart, we react. Maybe the key to happiness is just noticing.",
    source: "Shen - Owlturd",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 80,
    quote: "'I don't care' I say, caringly, as I care deeply",
    source: "chavvesty - Tumblr",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 81,
    quote: "You'll believe it a little more if it's followed by applause",
    source: "Anonymous",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 82,
    quote:
      "I’ve spent my life trying to undo habits – especially habits of thinking. They narrow your interaction with the world. They’re the phrases that come easily to your mind, like: ‘I know what I think,’ or ‘I know what I like,’ or ‘I know what’s going to happen today.’ If you just replace ‘know’ with ‘don’t know,’ then you start to move into the unknown. And that’s where the interesting stuff happens.",
    source: "Stylish elderly woman - Humans of New York",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 83,
    quote:
      "So plant your own gardens and decorate your own soul, instead of waiting for someone to bring you flowers.",
    source: "Jorge Luis Borges",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 84,
    quote:
      "I believe that the way you feel about your life will eventually show up on your face",
    source: "Anonymous",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 85,
    quote: "The cost of procrastination is the life you could've lived",
    source: "Gershona Annor @herapatra - Twitter",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 86,
    quote:
      "We have yet to understand: that if I am starving, you are in danger",
    source: "James Baldwin",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 88,
    quote:
      "You can do anything you want, as long as you know what that is. For me, it's Lucky Charms and TV",
    source: "Abed (Danny Pudi) - Community",
    sourcelink: "",
    motiv: true,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 89,
    quote: "You have a place in my space",
    source: "u/autterpopp - Reddit",
    sourcelink: "",
    motiv: false,
    comedy: false,
    romantic: true,
    bigBrain: false,
  },

  {
    ID: 91,
    quote:
      "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
    source: "Ernest Hemingway",
    sourcelink: "",
    motiv: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 92,
    quote: "Life is far too important a thing ever to talk seriously about.",
    source: "Oscar Wilde",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 93,
    quote: "He has no enemies, but is intensely disliked by his friends.",
    source: "Oscar Wilde",
    sourcelink: "",
    motiv: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 94,
    quote:
      "Travel and tell no one, live a true love story and tell no one, live happily and tell no one, people ruin beautiful things.",
    source: "Kahlil Gibran",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: true,
    bigBrain: true,
  },

  {
    ID: 95,
    quote:
      "It's okay if you fall apart sometimes; tacos fall apart and we still love them",
    source: "Gabriel Inglesis",
    sourcelink: "",
    motive: true,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 96,
    quote: "Fuck all the way off, motherfuckers",
    source: "Felicia C. Sullivan - Medium",
    sourcelink: "",
    motive: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 97,
    quote: "Never giving up is how you win",
    source: "@Adamjk",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 98,
    quote: "Chill! Your failures are going to make your TED talk longer",
    source: "Anonymous - Reddit",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 99,
    quote:
      "Being shot is not as bad as I thought it might be. As long as you can keep the fear from your mind, but I guess you could say that about most anything in life. It's not so bad, as long as you can keep the fear from your life.",
    source: "Agent Dale Cooper (Kyle MacLachlan) - Twin Peaks",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  // One of my favorite quotes
  {
    ID: 100,
    quote: "What I regret most in my life are failures of kindness",
    source: "George Saunders",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 101,
    quote: "That's outta pocket.",
    source: "McClymonds High School - West Oakland",
    sourcelink: "",
    motive: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 102,
    quote:
      "Kill your darlings, kill your darlings, even when it breaks your egocentric little scribbler’s heart, kill your darlings.",
    source: "Stephen King",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 103,
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    source: "Ralph Waldo Emerson",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 104,
    quote:
      "When there is overwhelming complexity in a proposed architecture or solution, I always like to take a step back, re-evaluate what we’re really trying to solve/build and think if there is a much simpler way to get to the same goal. Sometimes, you’ll realize",
    source: "Jacky Wong - Medium",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 105,
    quote: "Do not, under any circumstances, depend on a partial feeling.",
    source: "Miyamoto Musashi - Dokkōdō (The Path of Aloneness) ",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 106,
    quote:
      "That's the bar we're trying to clear now? You could fucking tunnel over that bar.",
    source: "u/JTCMuehlenkamp - Reddit",
    sourcelink: "",
    motive: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 107,
    quote: "What does your ideal day look like?",
    source: "someone - Medium",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 108,
    quote:
      "When suffering knocks at your door and you say there is no seat for him, he tells you not to worry because he has brought his own stool.",
    source: "Chinua Achebe",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 109,
    quote: "You have to make a habit of challenging yourself.",
    source: "Szymon Adamiak - Medium",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 111,
    quote:
      "Religion is like a blind man looking in a black room for a black cat that isn't there, and finding it.",
    source: "Oscar Wilde",
    sourcelink: "",
    motive: false,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 112,
    quote:
      "An optimist will tell you the glass is half-full; the pessimist, half-empty; and the engineer will tell you the glass is twice the size it needs to be.",
    source: "Oscar Wilde",
    sourcelink: "",
    motive: false,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 113,
    quote: "What seems to us as bitter trials are often blessings in disguise",
    source: "Oscar Wilde",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 114,
    quote:
      "A pessimist is somebody who complains about the noise when opportunity knocks.",
    source: "Oscar Wilde",
    sourcelink: "",
    motive: true,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 115,
    quote: "The best way to enjoy your job is to imagine yourself without one",
    source: "Oscar Wilde",
    sourcelink: "",
    motive: true,
    comedy: true,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 116,
    quote: "You can't fix people",
    source: "Karen Hansen-Smith - librarian, Mother, Dane",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 117,
    quote:
      "...That means she gets it (Not the exact quote. I need to rewatch this to find it..",
    source:
      "Ralph Fiennes - somewhere in the 2nd half of The Grand Budapest Hotel",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 118,
    quote:
      "Life isn’t Jeopardy — you don’t have to jump in with an answer the first chance you get",
    source: "Michael Thompson - Medium",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 119,
    quote: "Dream big dreams. Small dreams have no magic",
    source: "Dottie Boreyko",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 120,
    quote:
      "Oh, it's cool how you found a way for a compliment to shake me to my core. ",
    source: "Missy (Ayo Edebiri) - Big Mouth",
    sourcelink: "",
    motive: false,
    comedy: true,
    romantic: false,
    bigBrain: false,
  },

  {
    ID: 121,
    quote:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to change the world.",
    source: "Harriet Tubman",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 122,
    quote: "Whether you think you can, or you think you can't -- you're right.",
    source: "Henry Ford",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },

  {
    ID: 123,
    quote: "I can do this, I thought. Then: And even if I can't, I have to",
    source: "Anonymous",
    sourcelink: "",
    motive: true,
    comedy: false,
    romantic: false,
    bigBrain: true,
  },
  {
    ID: 124,
    quote: "Text",
    source: "Speaker",
    sourcelink: "",
    motive: false,
    comedy: false,
    romantic: false,
    bigBrain: false,
  },
  // {
  //   ID: 125,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 126,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 127,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 128,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 129,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },

  // {
  //   ID: 130,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 131,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 132,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 133,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 134,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 135,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 136,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },  // {
  //   ID: 137 ,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 138,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 139,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 140,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 141,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 142,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 143,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 144,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 145,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 146,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 147,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 148,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 149,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 150,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 151,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 152,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 153,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 154,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 155,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID:156 ,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
  
  // {
  //   ID: 157,
  //   quote: "Text",
  //   source: "Speaker",
  //   sourcelink: "",
  //   motive: false,
  //   comedy: false,
  //   romantic: false,
  //   bigBrain: false,
  // },
];

export default Quotes;
