// Unilorin Post-UTME question bank data
// Loaded as a global variable so this works when opened directly (file://) or deployed to any static host.
const QUIZ_DATA = {
 "subjects": [
  {
   "id": "english",
   "name": "Use of English",
   "weight": 80,
   "intro": "By far the biggest section — roughly 4 out of every 5 questions. Master concord, vocabulary, and idioms here before you touch anything else.",
   "topics": [
    {
     "id": "concord",
     "name": "Concord & Grammar",
     "blurb": "Subject-verb agreement, tenses, and the small rules that trip up even confident speakers.",
     "concept_notes": [
      "Concord means the subject and verb must 'agree' in number — singular subject, singular verb; plural subject, plural verb.",
      "Words like 'together with', 'as well as', 'in addition to', and 'like' never change a singular subject into a plural one.",
      "'None', 'each', 'every', 'either', 'neither', and -body/-one words are singular in formal grammar, even before 'of the...' plus a plural noun.",
      "For 'either...or' and 'neither...nor', the verb agrees with whichever noun is closest to it.",
      "Subject names ending in -ics (Physics, Statistics) usually take a singular verb when naming one field of study."
     ],
     "questions": [
      {
       "q": "The students _____ politics when I entered the lecture room.",
       "o": {
        "A": "are discussing",
        "B": "have discussed",
        "C": "were discussing",
        "D": "discuss"
       },
       "a": "C",
       "concept": "An action in progress at a specific past moment uses past continuous (was/were + -ing).",
       "method": "'When I entered' interrupts the ongoing action → were discussing.",
       "difficulty": "core"
      },
      {
       "q": "None of the boys _____ invited to the party.",
       "o": {
        "A": "were",
        "B": "is",
        "C": "are",
        "D": "was"
       },
       "a": "B",
       "concept": "'None' is singular in formal grammar ('not one'), so it takes a singular verb.",
       "method": "Replace 'None' with 'Not one' — 'Not one...is invited' confirms the singular verb.",
       "difficulty": "core"
      },
      {
       "q": "This matter is strictly between you and _____.",
       "o": {
        "A": "I",
        "B": "me",
        "C": "myself",
        "D": "mine"
       },
       "a": "B",
       "concept": "A preposition ('between') is always followed by an object pronoun.",
       "method": "Drop 'you and' and test alone: 'between me', not 'between I'.",
       "difficulty": "core"
      },
      {
       "q": "Shola says he is better at Mathematics _____.",
       "o": {
        "A": "as me",
        "B": "than I am",
        "C": "as I am",
        "D": "like I do"
       },
       "a": "B",
       "concept": "Comparatives pair with 'than', and the pronoun after it is a subject pronoun since a verb is implied.",
       "method": "Complete the hidden clause: '...than I am [good]'.",
       "difficulty": "core"
      },
      {
       "q": "Whenever you travel abroad, please buy me _____.",
       "o": {
        "A": "a trouser",
        "B": "one trouser",
        "C": "a pair of trousers",
        "D": "trousers"
       },
       "a": "C",
       "concept": "Two-part items (trousers, scissors) are always plural; to count one, say 'a pair of'.",
       "method": "You can never say 'a trouser' — lock in 'a pair of'.",
       "difficulty": "core"
      },
      {
       "q": "By next July, if Tayo returns as planned, he _____ forty years in London.",
       "o": {
        "A": "would have spent",
        "B": "has spent",
        "C": "spends",
        "D": "was spending"
       },
       "a": "A",
       "concept": "A future event viewed conditionally ('if he returns') uses the conditional perfect: would have + V3.",
       "method": "'If' + future milestone → 'would have + past participle'.",
       "difficulty": "core"
      },
      {
       "q": "By this time tomorrow, I _____ in Lagos for exactly one week.",
       "o": {
        "A": "am",
        "B": "will be",
        "C": "will have been",
        "D": "was"
       },
       "a": "C",
       "concept": "An action completed by a stated future point uses the future perfect: will have + V3.",
       "method": "'By this time tomorrow' + a duration → future perfect.",
       "difficulty": "core"
      },
      {
       "q": "I _____ at the hotel for two days when I was suddenly asked to leave.",
       "o": {
        "A": "stay",
        "B": "have stayed",
        "C": "had been staying",
        "D": "was staying"
       },
       "a": "C",
       "concept": "A continuing action before another past event interrupted it uses the past perfect continuous.",
       "method": "Longer-running past action goes further back: had been + -ing.",
       "difficulty": "core"
      },
      {
       "q": "The accused person was later _____ because he was not found guilty.",
       "o": {
        "A": "convicted and jailed",
        "B": "discharged and acquitted",
        "C": "charged and detained",
        "D": "forgiven and dismissed"
       },
       "a": "B",
       "concept": "'Discharged and acquitted' is the fixed legal phrase for a court clearing someone of guilt.",
       "method": "'Not found guilty' signals the phrase meaning officially cleared.",
       "difficulty": "core"
      },
      {
       "q": "We believe that God _____ man in His own image.",
       "o": {
        "A": "was making",
        "B": "made",
        "C": "has been making",
        "D": "is making"
       },
       "a": "B",
       "concept": "A single completed narrative action takes the simple past.",
       "method": "One finished act, no ongoing sense → simple past.",
       "difficulty": "core"
      },
      {
       "q": "The hunter, together with his dogs, _____ going into the forest at dawn.",
       "o": {
        "A": "were seen",
        "B": "was seen",
        "C": "are seen",
        "D": "have been seen"
       },
       "a": "B",
       "concept": "'Together with' does NOT make a singular subject plural — the verb still agrees with the main subject alone.",
       "method": "Cross out 'together with his dogs': 'The hunter...was seen'.",
       "difficulty": "core"
      },
      {
       "q": "Either the manager or his assistants _____ responsible for the error.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "With 'either...or', the verb agrees with the noun nearer to it — here the plural 'assistants'.",
       "method": "Look only at the noun closest to the verb.",
       "difficulty": "core"
      },
      {
       "q": "Each of the candidates _____ given a registration number before the exam.",
       "o": {
        "A": "were",
        "B": "was",
        "C": "have been",
        "D": "are"
       },
       "a": "B",
       "concept": "'Each', 'every', 'either', 'neither' are always followed by a singular verb.",
       "method": "'Each' is the true subject, treated as one unit.",
       "difficulty": "core"
      },
      {
       "q": "The committee _____ divided in their opinions about the new policy.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "were",
        "D": "has been"
       },
       "a": "C",
       "concept": "Collective nouns take a plural verb when members act/think as separate individuals.",
       "method": "'Divided in their opinions' signals individual disagreement → plural verb.",
       "difficulty": "core"
      },
      {
       "q": "Neither the teacher nor the students _____ aware of the change in schedule.",
       "o": {
        "A": "was",
        "B": "is",
        "C": "were",
        "D": "has been"
       },
       "a": "C",
       "concept": "For 'neither...nor', the verb agrees with the nearer noun — here the plural 'students'.",
       "method": "Check only the second, nearer noun.",
       "difficulty": "core"
      },
      {
       "q": "Every one of the machines in that factory _____ inspected monthly.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'Every one of + plural noun' still functions as a singular subject.",
       "method": "'Every one' (not 'every ones') signals a singular subject.",
       "difficulty": "core"
      },
      {
       "q": "A number of students _____ absent from school yesterday due to the rain.",
       "o": {
        "A": "was",
        "B": "is",
        "C": "were",
        "D": "has been"
       },
       "a": "C",
       "concept": "'A number of' (=several) takes a plural verb; 'THE number of' takes a singular verb.",
       "method": "'A number of' = many → plural verb.",
       "difficulty": "core"
      },
      {
       "q": "Neither Ade nor Sade _____ present at the meeting.",
       "o": {
        "A": "were",
        "B": "was",
        "C": "are",
        "D": "have been"
       },
       "a": "B",
       "concept": "Both linked subjects are singular, so 'neither...nor' takes a singular verb here.",
       "method": "Ade (singular) + Sade (singular), nearer noun is singular → was.",
       "difficulty": "core"
      },
      {
       "q": "Neither the candidate nor the dishonest invigilator _____ leniency.",
       "o": {
        "A": "deserves",
        "B": "deserve",
        "C": "are deserving",
        "D": "is deserving"
       },
       "a": "A",
       "concept": "'Neither...nor' agrees with the nearer subject — 'invigilator' is singular.",
       "method": "Match the verb to the noun right before it: invigilator → deserves.",
       "difficulty": "core"
      },
      {
       "q": "The bulk of the poor _____ kept in the farthest part of the town.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "they are",
        "D": "were"
       },
       "a": "A",
       "concept": "'The bulk of' is treated as a singular collective quantity in formal grammar.",
       "method": "'Bulk' itself is the true grammatical subject — singular.",
       "difficulty": "core"
      },
      {
       "q": "The bulk of the laboratory accessories _____ purchased in Canada.",
       "o": {
        "A": "would",
        "B": "were",
        "C": "are",
        "D": "was"
       },
       "a": "D",
       "concept": "Even with a plural noun following, 'the bulk of' as a quantity phrase can be treated as singular in this style of exam grammar.",
       "method": "Treat 'the bulk' as the head noun — singular verb 'was'.",
       "difficulty": "core"
      },
      {
       "q": "Anybody _____ a right to attend the ceremony.",
       "o": {
        "A": "have",
        "B": "has",
        "C": "is",
        "D": "are"
       },
       "a": "B",
       "concept": "Indefinite pronouns ending in -body/-one/-thing (anybody, everyone) are singular.",
       "method": "'Anybody' = one unspecified person → singular verb 'has'.",
       "difficulty": "core"
      },
      {
       "q": "Everybody _____ prepared to go home.",
       "o": {
        "A": "are",
        "B": "have",
        "C": "be",
        "D": "is"
       },
       "a": "D",
       "concept": "'Everybody' is grammatically singular despite referring to many people.",
       "method": "-body words always take singular verbs: is, has, does.",
       "difficulty": "core"
      },
      {
       "q": "A few of the men _____ present.",
       "o": {
        "A": "is",
        "B": "have",
        "C": "are",
        "D": "has"
       },
       "a": "C",
       "concept": "'A few of + plural noun' takes a plural verb.",
       "method": "'A few' = some, a plural quantity → are.",
       "difficulty": "core"
      },
      {
       "q": "There _____ many foreigners who attended the conference.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "was"
       },
       "a": "C",
       "concept": "In 'there + verb + subject' sentences, the verb agrees with the subject that follows, not with 'there'.",
       "method": "The real subject is 'many foreigners' (plural, past context) → were.",
       "difficulty": "core"
      },
      {
       "q": "Toyin knew that she had _____ the law.",
       "o": {
        "A": "break",
        "B": "broke",
        "C": "broken",
        "D": "breaking"
       },
       "a": "C",
       "concept": "After 'had' (past perfect), always use the past participle form of the verb.",
       "method": "had + V3: break→broken, not broke.",
       "difficulty": "core"
      },
      {
       "q": "The wind had _____ off the cover of the cage.",
       "o": {
        "A": "blow",
        "B": "blew",
        "C": "blowing",
        "D": "blown"
       },
       "a": "D",
       "concept": "Past perfect always takes the past participle: had + V3.",
       "method": "blow→blew→blown; after 'had', use 'blown'.",
       "difficulty": "core"
      },
      {
       "q": "Fiyin has been _____ the bricks.",
       "o": {
        "A": "lying",
        "B": "laying",
        "C": "lain",
        "D": "laid"
       },
       "a": "B",
       "concept": "'Lay' (to place something down) is a transitive verb taking a direct object ('the bricks'); its -ing form is 'laying'.",
       "method": "Since bricks are being placed (an object follows), use 'laying', not 'lying'.",
       "difficulty": "core"
      },
      {
       "q": "Yesterday, I _____ down on that bed.",
       "o": {
        "A": "laid",
        "B": "lain",
        "C": "lying",
        "D": "lie"
       },
       "a": "A",
       "concept": "'Lie' (to recline) is intransitive with past tense 'lay'; but many Nigerian exam keys test the transitive 'lay' (to place) with past tense 'laid' in similar contexts — here 'laid down' is the tested form.",
       "method": "Past tense of the action of lying/reclining down in this exam's convention: laid.",
       "difficulty": "core"
      },
      {
       "q": "_____ the table ready for the occasion.",
       "o": {
        "A": "lie",
        "B": "lain",
        "C": "laid",
        "D": "lay"
       },
       "a": "D",
       "concept": "'Lay' (present tense, meaning to place/set) is used as a command here: 'lay the table' = set the table.",
       "method": "'Lay the table' is a fixed instruction — present tense 'lay', not past 'laid'.",
       "difficulty": "core"
      },
      {
       "q": "Not all the leaves on the orange tree have _____.",
       "o": {
        "A": "fall",
        "B": "fallen",
        "C": "falling",
        "D": "felling"
       },
       "a": "B",
       "concept": "After 'have' (present perfect), use the past participle.",
       "method": "fall→fell→fallen; have + fallen.",
       "difficulty": "core"
      },
      {
       "q": "If I _____ Bimbo, I would not give up.",
       "o": {
        "A": "be",
        "B": "was",
        "C": "were",
        "D": "being"
       },
       "a": "C",
       "concept": "Unreal/hypothetical present conditions use 'were' for all persons (subjunctive mood), not 'was'.",
       "method": "'If I were...' is the fixed subjunctive form for hypotheticals, regardless of subject.",
       "difficulty": "core"
      },
      {
       "q": "If he _____, he would not have gone.",
       "o": {
        "A": "knew",
        "B": "knows",
        "C": "has known",
        "D": "had known"
       },
       "a": "D",
       "concept": "Third conditional (unreal past): if + past perfect, ...would have + V3.",
       "method": "Match 'would not have gone' with 'had known' in the if-clause.",
       "difficulty": "core"
      },
      {
       "q": "If he had studied harder, he _____.",
       "o": {
        "A": "would have failed not",
        "B": "would not have failed",
        "C": "would failed not",
        "D": "would fail not"
       },
       "a": "B",
       "concept": "Third conditional word order: subject + would not have + past participle.",
       "method": "'Not' sits right after 'would', before 'have': would not have failed.",
       "difficulty": "core"
      },
      {
       "q": "If this book is neither mine nor yours, it must be _____.",
       "o": {
        "A": "somebody's else's",
        "B": "somebody's else",
        "C": "somebody else's",
        "D": "somebody else"
       },
       "a": "C",
       "concept": "In compound indefinite pronouns, the possessive 's attaches to the END of the whole phrase.",
       "method": "'Somebody else' + possessive → somebody else's (apostrophe on 'else', not 'somebody').",
       "difficulty": "core"
      },
      {
       "q": "Kunle told me that _____ had gone to see the Bank Manager for the cheque.",
       "o": {
        "A": "himself",
        "B": "him",
        "C": "him himself",
        "D": "he himself"
       },
       "a": "D",
       "concept": "An emphatic reflexive pronoun follows the subject pronoun it emphasises: 'he himself'.",
       "method": "You need a subject ('he') plus emphasis ('himself') together.",
       "difficulty": "core"
      },
      {
       "q": "As an Arts student, neither Mathematics nor Physics _____ me.",
       "o": {
        "A": "interested",
        "B": "interesting",
        "C": "interest",
        "D": "interests"
       },
       "a": "D",
       "concept": "'Neither...nor' agrees with the nearer subject — 'Physics' is treated as singular.",
       "method": "Subjects ending in -ics (Physics, Mathematics) usually take singular verbs: interests.",
       "difficulty": "core"
      },
      {
       "q": "Patients often _____ not believe they need surgery.",
       "o": {
        "A": "do",
        "B": "did",
        "C": "does",
        "D": "have"
       },
       "a": "A",
       "concept": "'Patients' is plural, so the auxiliary verb must also be plural: do, not does.",
       "method": "Plural subject → plural auxiliary 'do'.",
       "difficulty": "core"
      },
      {
       "q": "Statistics _____ come to stay as a science subject.",
       "o": {
        "A": "have come",
        "B": "would come",
        "C": "has come",
        "D": "is come"
       },
       "a": "C",
       "concept": "Subjects ending in -ics that name a single field of study (Statistics, Physics, Economics) take a singular verb.",
       "method": "Treat the subject name as one discipline → has come.",
       "difficulty": "core"
      },
      {
       "q": "The miserly old man _____ here again.",
       "o": {
        "A": "were",
        "B": "is being",
        "C": "have been",
        "D": "was"
       },
       "a": "D",
       "concept": "A single definite past occurrence takes the simple past tense.",
       "method": "'Again' with a single subject and past narrative → was.",
       "difficulty": "core"
      },
      {
       "q": "She _____ her assignments well.",
       "o": {
        "A": "do",
        "B": "does",
        "C": "done",
        "D": "have done"
       },
       "a": "B",
       "concept": "Third person singular subjects ('she') take the -s form of the verb in simple present.",
       "method": "she/he/it + verb-s: does.",
       "difficulty": "core"
      },
      {
       "q": "Whoever _____ first gets it.",
       "o": {
        "A": "came",
        "B": "will come",
        "C": "comes",
        "D": "is coming"
       },
       "a": "C",
       "concept": "General/habitual truths and rules use the simple present tense.",
       "method": "A rule true at any time → simple present 'comes'.",
       "difficulty": "core"
      },
      {
       "q": "The girl and her sister always _____ late to school.",
       "o": {
        "A": "come",
        "B": "comes",
        "C": "comed",
        "D": "comeb"
       },
       "a": "A",
       "concept": "Two people joined by 'and' form a plural subject, taking a plural verb.",
       "method": "'The girl AND her sister' = two people → plural verb 'come'.",
       "difficulty": "core"
      },
      {
       "q": "Femi, like Funmi, _____ history.",
       "o": {
        "A": "hate",
        "B": "hates",
        "C": "hater",
        "D": "haten"
       },
       "a": "B",
       "concept": "'Like Funmi' is a parenthetical phrase, not part of the subject — the true subject 'Femi' stays singular.",
       "method": "Ignore the 'like...' phrase: 'Femi...hates'.",
       "difficulty": "core"
      },
      {
       "q": "The woman and her children _____ reading newspapers.",
       "o": {
        "A": "enjoy",
        "B": "enjoys",
        "C": "enjoyd",
        "D": "enjoye"
       },
       "a": "A",
       "concept": "A compound subject joined by 'and' takes a plural verb.",
       "method": "Woman + children = plural subject → enjoy.",
       "difficulty": "core"
      },
      {
       "q": "Determination, in addition to hardwork, _____ success.",
       "o": {
        "A": "bring",
        "B": "brings",
        "C": "bringe",
        "D": "bring"
       },
       "a": "B",
       "concept": "'In addition to' is a parenthetical phrase, not a conjunction — the subject stays singular ('Determination').",
       "method": "Ignore 'in addition to hardwork': 'Determination...brings'.",
       "difficulty": "core"
      },
      {
       "q": "Another _____ sure to come.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "will",
        "D": "be"
       },
       "a": "A",
       "concept": "'Another' refers to one single additional item/person, so it is singular.",
       "method": "'Another' = one more → singular verb.",
       "difficulty": "core"
      },
      {
       "q": "Neither of them _____ good at sewing.",
       "o": {
        "A": "has",
        "B": "are",
        "C": "be",
        "D": "is"
       },
       "a": "D",
       "concept": "'Neither of' is always singular, referring to 'not either one'.",
       "method": "'Neither' alone (without 'nor') is always singular: is.",
       "difficulty": "core"
      },
      {
       "q": "Neither Bola nor her brothers ___ crying.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "was",
        "D": "be"
       },
       "a": "B",
       "concept": "'Neither...nor' agrees with the nearer noun — 'brothers' is plural.",
       "method": "Check only the nearer noun to the verb: brothers (plural) → are.",
       "difficulty": "core"
      },
      {
       "q": "Ten litres of water ___ to be consumed daily by an adult.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "may",
        "D": "should"
       },
       "a": "B",
       "concept": "A measured quantity (ten litres) is treated as one single amount, taking a singular verb.",
       "method": "'Ten litres' = one quantity, not ten separate things → is.",
       "difficulty": "core"
      },
      {
       "q": "Ada will ___ for the challenge.",
       "o": {
        "A": "Prepared",
        "B": "Prepare",
        "C": "Preparing",
        "D": "Prepares"
       },
       "a": "B",
       "concept": "After the modal 'will', always use the base form of the verb.",
       "method": "Modal + base verb: will prepare, never will prepares/prepared.",
       "difficulty": "core"
      },
      {
       "q": "Were those documents ___ by post or email?",
       "o": {
        "A": "sent",
        "B": "be sent",
        "C": "to be send",
        "D": "send"
       },
       "a": "A",
       "concept": "After 'were' in a passive question, use the past participle.",
       "method": "Passive voice: were + past participle — sent.",
       "difficulty": "core"
      },
      {
       "q": "Billions of the world's population ___ before a cure for certain diseases is found.",
       "o": {
        "A": "must have perished",
        "B": "must have perish",
        "C": "must has perished",
        "D": "must have perishing"
       },
       "a": "A",
       "concept": "Modal perfect for past probability: must + have + past participle.",
       "method": "Fixed structure: must have + V3 (perished).",
       "difficulty": "core"
      },
      {
       "q": "A tale of two cities ___ the ___ we are currently studying for the examination.",
       "o": {
        "A": "is / novel",
        "B": "is / novels",
        "C": "are / novel",
        "D": "are / novels"
       },
       "a": "A",
       "concept": "A book title, even naming 'two cities', refers to ONE single novel — singular verb and noun.",
       "method": "Titles are treated as singular units regardless of the words inside them.",
       "difficulty": "core"
      },
      {
       "q": "It is high time we ___ discriminating against one another.",
       "o": {
        "A": "stop",
        "B": "stops",
        "C": "stopped",
        "D": "stops to"
       },
       "a": "C",
       "concept": "'It is (high) time' is followed by the past tense (a subjunctive-style form), not the present.",
       "method": "Fixed pattern: it is high time + subject + PAST TENSE verb.",
       "difficulty": "core"
      },
      {
       "q": "I think it is time the room ___ decorated for the party.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "was",
        "D": "were"
       },
       "a": "D",
       "concept": "After 'it is time that...', use the subjunctive 'were' for a hypothetical situation.",
       "method": "Hypothetical 'time that' clauses take 'were', regardless of subject.",
       "difficulty": "core"
      },
      {
       "q": "My husband, and my number one fan, ___ been very supportive throughout this journey.",
       "o": {
        "A": "shouldn't",
        "B": "aren't",
        "C": "have",
        "D": "has"
       },
       "a": "D",
       "concept": "'My husband, and my number one fan' describes ONE person with two roles, not two separate people — singular verb.",
       "method": "Read the comma-phrase as extra description of the SAME person, not an additional subject.",
       "difficulty": "core"
      },
      {
       "q": "Effect all ___ before you submit the final copy of your project, said the supervisor.",
       "o": {
        "A": "corrections",
        "B": "correction",
        "C": "correcsions",
        "D": "corections"
       },
       "a": "A",
       "concept": "'All' before a countable noun signals the plural form is needed.",
       "method": "'All' + countable noun → plural: corrections.",
       "difficulty": "core"
      },
      {
       "q": "I will choose only ___ mango, and ___ other ones on the tray are yours.",
       "o": {
        "A": "those / this",
        "B": "those / these",
        "C": "that / these",
        "D": "this / these"
       },
       "a": "D",
       "concept": "A singular noun ('mango') needs a singular demonstrative ('this'); the following plural group needs a plural demonstrative ('these').",
       "method": "Match each demonstrative to the number of the noun it points to: this mango, these others.",
       "difficulty": "core"
      },
      {
       "q": "The boy and the girl are beaten ___ whenever they misbehave together.",
       "o": {
        "A": "themselves",
        "B": "each other",
        "C": "one another",
        "D": "theirself"
       },
       "a": "B",
       "concept": "'Each other' is the reciprocal pronoun for exactly TWO people; 'one another' is used for three or more.",
       "method": "Two people (the boy and the girl) → each other, not one another.",
       "difficulty": "core"
      },
      {
       "q": "After Jerry had made the bed, he ___ on it.",
       "o": {
        "A": "layed",
        "B": "lied",
        "C": "lay",
        "D": "laid"
       },
       "a": "C",
       "concept": "'Lie' (to recline) has the irregular past tense 'lay' — easily confused with 'lay' (to place), whose past tense is 'laid'.",
       "method": "Recall the irregular verb chain: lie–lay–lain (recline) vs lay–laid–laid (place).",
       "difficulty": "core"
      },
      {
       "q": "A woman's monthly salary is ₦50,000. She gives each of her five children ₦3,000 pocket money, and saves 10% of her salary. How much is left for other expenses?",
       "o": {
        "A": "₦20,000",
        "B": "₦30,000",
        "C": "₦25,000",
        "D": "₦35,000"
       },
       "a": "B",
       "concept": "Subtract each expense (pocket money total, then savings) from the salary in turn.",
       "method": "Pocket money=5×3,000=15,000. Savings=10%×50,000=5,000. Left=50,000−15,000−5,000=₦30,000.",
       "difficulty": "core"
      },
      {
       "q": "The news ___ better than we expected.",
       "o": {
        "A": "were",
        "B": "was",
        "C": "are",
        "D": "have been"
       },
       "a": "B",
       "concept": "'News' looks plural but is grammatically uncountable/singular.",
       "method": "Treat 'news' like 'information' — always singular: was.",
       "difficulty": "core"
      },
      {
       "q": "Mathematics ___ my favourite subject in school.",
       "o": {
        "A": "are",
        "B": "were",
        "C": "is",
        "D": "have been"
       },
       "a": "C",
       "concept": "Subject names ending in -ics (Mathematics, Physics) are singular when naming one field.",
       "method": "One subject = one field of study → singular verb.",
       "difficulty": "core"
      },
      {
       "q": "The scissors ___ on the table.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "Tools with two identical parts (scissors, trousers, glasses) are always grammatically plural.",
       "method": "'Scissors' has no singular form in this sense — always plural verb.",
       "difficulty": "core"
      },
      {
       "q": "Ten kilometres ___ a long distance to walk.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "A measured distance is treated as one single amount.",
       "method": "'Ten kilometres' = one distance, not ten separate things → is.",
       "difficulty": "core"
      },
      {
       "q": "Two-thirds of the cake ___ already eaten.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "were",
        "D": "has been"
       },
       "a": "B",
       "concept": "Fractions agree with the noun that follows 'of' — 'cake' here is uncountable (a mass noun), so it takes a singular verb.",
       "method": "Check the noun after 'of': 'the cake' is uncountable → singular verb: was.",
       "difficulty": "core"
      },
      {
       "q": "Two-thirds of the mangoes ___ rotten.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "Fractions of a PLURAL noun take a plural verb.",
       "method": "'Of the mangoes' (plural) → plural verb: are.",
       "difficulty": "core"
      },
      {
       "q": "One-third of the water ___ evaporated.",
       "o": {
        "A": "have",
        "B": "has",
        "C": "were",
        "D": "are"
       },
       "a": "B",
       "concept": "Fractions of an UNCOUNTABLE noun take a singular verb.",
       "method": "'Of the water' (uncountable) → singular verb: has.",
       "difficulty": "core"
      },
      {
       "q": "The majority of the students ___ present today.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "'The majority of' agrees with the plural noun that follows when referring to countable individuals.",
       "method": "'Students' (plural, countable) → plural verb: are.",
       "difficulty": "core"
      },
      {
       "q": "Physics and Chemistry ___ compulsory subjects for science students.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "was",
        "D": "has been"
       },
       "a": "B",
       "concept": "Two distinct subjects joined by 'and' form a plural compound subject.",
       "method": "Two separate named subjects → plural verb: are.",
       "difficulty": "core"
      },
      {
       "q": "Either of the two answers ___ acceptable.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'Either' (alone, without 'or') is always singular.",
       "method": "'Either of' + plural noun is still grammatically singular: is.",
       "difficulty": "core"
      },
      {
       "q": "Both of the candidates ___ qualified for the position.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "'Both' always refers to two items and takes a plural verb.",
       "method": "'Both' inherently means two → plural verb: are.",
       "difficulty": "core"
      },
      {
       "q": "The jury ___ still deliberating on the verdict.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "has been",
        "D": "was"
       },
       "a": "A",
       "concept": "Collective nouns like 'jury' take a singular verb when acting as one unit.",
       "method": "A jury deliberating together as one body → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "The audience ___ clapping loudly.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "were",
        "D": "has"
       },
       "a": "C",
       "concept": "Collective nouns take a plural verb when the members act as separate individuals (each person clapping).",
       "method": "Individual clapping actions by many people → plural verb: were.",
       "difficulty": "core"
      },
      {
       "q": "Ten years ___ a long time to wait for anything.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "A period of time, treated as a single span, takes a singular verb.",
       "method": "'Ten years' as ONE span of time → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "Half of the workers ___ gone on strike.",
       "o": {
        "A": "has",
        "B": "have",
        "C": "is",
        "D": "was"
       },
       "a": "B",
       "concept": "'Half of' agrees with the plural noun 'workers' that follows.",
       "method": "'Of the workers' (plural) → plural verb: have.",
       "difficulty": "core"
      },
      {
       "q": "Neither of the students ___ submitted their assignment.",
       "o": {
        "A": "have",
        "B": "has",
        "C": "were",
        "D": "are"
       },
       "a": "B",
       "concept": "'Neither' alone is always singular.",
       "method": "'Neither of' + plural noun remains grammatically singular: has.",
       "difficulty": "core"
      },
      {
       "q": "Everyone ___ required to submit their forms by Friday.",
       "o": {
        "A": "are",
        "B": "were",
        "C": "is",
        "D": "have"
       },
       "a": "C",
       "concept": "'Everyone', like other -one/-body words, is always singular.",
       "method": "-one words are always singular: is.",
       "difficulty": "core"
      },
      {
       "q": "Somebody ___ left their bag on the bus.",
       "o": {
        "A": "have",
        "B": "has",
        "C": "were",
        "D": "are"
       },
       "a": "B",
       "concept": "'Somebody' is grammatically singular.",
       "method": "-body words are always singular: has.",
       "difficulty": "core"
      },
      {
       "q": "Nobody ___ interested in the proposal.",
       "o": {
        "A": "were",
        "B": "are",
        "C": "is",
        "D": "have"
       },
       "a": "C",
       "concept": "'Nobody' is grammatically singular.",
       "method": "-body words are always singular: is.",
       "difficulty": "core"
      },
      {
       "q": "The group of students ___ going on an excursion tomorrow.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "were",
        "D": "have"
       },
       "a": "A",
       "concept": "'Group' as a collective noun is singular when acting as one unit.",
       "method": "'The group' (as a single entity) going somewhere together → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "A pair of shoes ___ missing from the shelf.",
       "o": {
        "A": "are",
        "B": "were",
        "C": "is",
        "D": "have"
       },
       "a": "C",
       "concept": "'A pair of' is treated as one single item.",
       "method": "'A pair' = ONE unit → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "The police ___ investigating the robbery.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "'Police' is always treated as a plural noun in English, with no singular form.",
       "method": "Memorise: 'police' always takes a plural verb, unlike most collective nouns.",
       "difficulty": "core"
      },
      {
       "q": "Cattle ___ grazing in the field.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "'Cattle' is always grammatically plural, with no singular form.",
       "method": "Memorise: 'cattle' always takes a plural verb.",
       "difficulty": "core"
      },
      {
       "q": "If I ___ you, I would apologise immediately.",
       "o": {
        "A": "am",
        "B": "was",
        "C": "were",
        "D": "be"
       },
       "a": "C",
       "concept": "Hypothetical 'if' clauses use the subjunctive 'were' for all persons.",
       "method": "Fixed subjunctive form: If I were you...",
       "difficulty": "core"
      },
      {
       "q": "I wish I ___ more time to prepare for the exam.",
       "o": {
        "A": "have",
        "B": "has",
        "C": "had",
        "D": "having"
       },
       "a": "C",
       "concept": "'Wish' about a present situation uses the past tense to express an unreal wish.",
       "method": "Fixed pattern: wish + past tense for a present unreal wish.",
       "difficulty": "core"
      },
      {
       "q": "By the time you arrive, we ___ already left.",
       "o": {
        "A": "will",
        "B": "would have",
        "C": "will have",
        "D": "have"
       },
       "a": "C",
       "concept": "An action completed before another future event uses the future perfect.",
       "method": "'By the time you arrive' (future point) + earlier completed action → will have left.",
       "difficulty": "core"
      },
      {
       "q": "She has lived in Lagos ___ 2015.",
       "o": {
        "A": "for",
        "B": "since",
        "C": "during",
        "D": "within"
       },
       "a": "B",
       "concept": "'Since' introduces a fixed starting point in time.",
       "method": "A specific year ('2015') is a starting point → since, not for.",
       "difficulty": "core"
      },
      {
       "q": "He has been working here ___ five years.",
       "o": {
        "A": "since",
        "B": "from",
        "C": "for",
        "D": "during"
       },
       "a": "C",
       "concept": "'For' introduces a duration (a length of time).",
       "method": "'Five years' is a length of time → for, not since.",
       "difficulty": "core"
      },
      {
       "q": "They ___ dinner when the power went off.",
       "o": {
        "A": "have",
        "B": "were having",
        "C": "has",
        "D": "had"
       },
       "a": "B",
       "concept": "An action in progress at a specific past moment uses the past continuous.",
       "method": "'When the power went off' interrupts — the ongoing action needs past continuous: were having.",
       "difficulty": "core"
      },
      {
       "q": "Not one of the boys ___ willing to admit the mistake.",
       "o": {
        "A": "were",
        "B": "was",
        "C": "are",
        "D": "have been"
       },
       "a": "B",
       "concept": "'Not one of' is unambiguously singular — it literally means 'not a single one'.",
       "method": "Rephrase mentally: 'not a single boy is willing' → was.",
       "difficulty": "core"
      },
      {
       "q": "The advice you gave me ___ very helpful.",
       "o": {
        "A": "were",
        "B": "was",
        "C": "are",
        "D": "have been"
       },
       "a": "B",
       "concept": "'Advice' is uncountable and always singular.",
       "method": "Uncountable nouns (advice, information, furniture) always take a singular verb.",
       "difficulty": "core"
      },
      {
       "q": "The furniture in this house ___ old but well-maintained.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'Furniture' is uncountable and always singular, even though it refers to many items.",
       "method": "Treat 'furniture' like 'advice' or 'information' — always singular.",
       "difficulty": "core"
      },
      {
       "q": "Three-quarters of the road ___ under construction.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "Fractions of an uncountable/singular noun ('the road') take a singular verb.",
       "method": "'Of the road' (singular, uncountable in this sense) → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "More than one student ___ complained about the noise.",
       "o": {
        "A": "have",
        "B": "has",
        "C": "were",
        "D": "are"
       },
       "a": "B",
       "concept": "Despite the plural meaning, 'more than one' is grammatically treated as singular in formal English.",
       "method": "Fixed exception: 'more than one' + singular noun takes a singular verb.",
       "difficulty": "core"
      },
      {
       "q": "The team ___ celebrating their victory separately in their own homes.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "has",
        "D": "was"
       },
       "a": "B",
       "concept": "A collective noun takes a plural verb when members act as individuals, not as one unit.",
       "method": "'Separately in their own homes' signals individual action → plural verb: are.",
       "difficulty": "core"
      },
      {
       "q": "This kind of shoes ___ very expensive.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'This kind of' is singular, regardless of the plural noun that follows.",
       "method": "'This kind' (singular) is the true subject, not 'shoes' → is.",
       "difficulty": "core"
      },
      {
       "q": "If she ___ harder, she would have passed the exam.",
       "o": {
        "A": "studies",
        "B": "studied",
        "C": "had studied",
        "D": "study"
       },
       "a": "C",
       "concept": "Third conditional (unreal past regret): if + past perfect, would have + V3.",
       "method": "'Would have passed' in the main clause signals the if-clause needs: had studied.",
       "difficulty": "core"
      },
      {
       "q": "He speaks as if he ___ everything about the topic.",
       "o": {
        "A": "knows",
        "B": "knew",
        "C": "know",
        "D": "has known"
       },
       "a": "B",
       "concept": "'As if' introducing a hypothetical/unreal comparison uses the past tense, even for present situations.",
       "method": "Fixed pattern: 'as if' + past tense for something not actually true.",
       "difficulty": "core"
      },
      {
       "q": "By the time the fire fighters arrived, the building ___ down.",
       "o": {
        "A": "burns",
        "B": "had burned",
        "C": "burned",
        "D": "has burned"
       },
       "a": "B",
       "concept": "An action completed before another past event uses the past perfect.",
       "method": "The burning finished BEFORE the firefighters arrived — the earlier action needs past perfect: had burned.",
       "difficulty": "core"
      },
      {
       "q": "One of my friends ___ travelling abroad next month.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'One of my friends' has 'one' as the true singular subject, not 'friends'.",
       "method": "'One' is the head of the subject phrase — singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "The number of unemployed graduates ___ increasing yearly.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'THE number of' (the total count) is singular, unlike 'A number of' (meaning several), which is plural.",
       "method": "Distinguish: 'the number of' = singular; 'a number of' = plural.",
       "difficulty": "core"
      },
      {
       "q": "Ten naira ___ not enough to buy anything these days.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "A sum of money is treated as one single amount.",
       "method": "'Ten naira' as ONE amount of money → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "Neither the manager nor his staff ___ available for comment.",
       "o": {
        "A": "was",
        "B": "is",
        "C": "were",
        "D": "has been"
       },
       "a": "C",
       "concept": "'Neither...nor' agrees with the nearer noun — 'staff' functions as plural here.",
       "method": "Nearer noun 'staff' (plural in this context) → were.",
       "difficulty": "core"
      },
      {
       "q": "The committee members ___ divided on the new proposal.",
       "o": {
        "A": "is",
        "B": "was",
        "C": "are",
        "D": "has been"
       },
       "a": "C",
       "concept": "'Committee members' (explicitly plural) takes a plural verb, unlike 'the committee' alone.",
       "method": "'Members' makes the plurality explicit → plural verb: are.",
       "difficulty": "core"
      },
      {
       "q": "The staff ___ working overtime to meet the deadline.",
       "o": {
        "A": "is",
        "B": "are",
        "C": "was",
        "D": "has"
       },
       "a": "B",
       "concept": "'Staff' functions as plural when referring to the individual members working.",
       "method": "Multiple people each working overtime → plural verb: are.",
       "difficulty": "core"
      },
      {
       "q": "Six months ___ a reasonable time to complete the training.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "A period of time, treated as a single span, takes a singular verb.",
       "method": "'Six months' as ONE span of time → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "Either the students or their teacher ___ responsible for organising the event.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'Either...or' agrees with the nearer noun — 'teacher' is singular.",
       "method": "Check only the noun closest to the verb: teacher (singular) → is.",
       "difficulty": "core"
      },
      {
       "q": "A pair of scissors ___ needed to cut this fabric.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "'A pair of' functions as one single item, taking a singular verb.",
       "method": "'A pair' = ONE unit → singular verb: is.",
       "difficulty": "core"
      },
      {
       "q": "The majority of the fruit ___ spoiled by the heat.",
       "o": {
        "A": "was",
        "B": "were",
        "C": "has",
        "D": "have"
       },
       "a": "A",
       "concept": "'The majority of' agrees with the noun that follows — 'fruit' is uncountable/singular here.",
       "method": "'Of the fruit' (uncountable) → singular verb: was.",
       "difficulty": "core"
      },
      {
       "q": "Economics ___ a subject that combines both theory and real-world application.",
       "o": {
        "A": "are",
        "B": "is",
        "C": "were",
        "D": "have been"
       },
       "a": "B",
       "concept": "Subject names ending in -ics naming a single field are singular.",
       "method": "Economics = one field of study → is.",
       "difficulty": "core"
      },
      {
       "q": "Some people think that ______ are potentially a nuisance.",
       "o": {
        "A": "parent-in-law",
        "B": "parents-in-law",
        "C": "parents-in-laws",
        "D": "parent-in-laws"
       },
       "a": "B",
       "concept": "In compound nouns like 'X-in-law', the main noun (the person) takes the plural marker, not the whole phrase.",
       "method": "Pluralise the core noun 'parent' → parents-in-law, not the final word 'law'.",
       "difficulty": "core"
      },
      {
       "q": "These six employees ______ absent from work since New Year's Day.",
       "o": {
        "A": "are",
        "B": "have been",
        "C": "were",
        "D": "had been"
       },
       "a": "B",
       "concept": "'Since + a starting point' with a state continuing into the present calls for the present perfect.",
       "method": "'Since New Year's Day' anchors an unfinished period running up to now → have been, not the simple past 'were'.",
       "difficulty": "core"
      },
      {
       "q": "I wish I ______ to swim when I was younger.",
       "o": {
        "A": "had learnt",
        "B": "learn",
        "C": "learnt",
        "D": "was learning"
       },
       "a": "A",
       "concept": "'Wish' about an unreal past regret takes the past perfect, one step further back than the simple past.",
       "method": "Because the regret is about something in the past ('when I was younger'), push the verb back to had learnt.",
       "difficulty": "core"
      },
      {
       "q": "He acts as if he ______ a general manager.",
       "o": {
        "A": "is been",
        "B": "were",
        "C": "has been",
        "D": "is being"
       },
       "a": "B",
       "concept": "'As if' describing something untrue or hypothetical uses the subjunctive 'were' for all persons.",
       "method": "Since he isn't actually a general manager, the unreal comparison takes were, regardless of subject.",
       "difficulty": "core"
      },
      {
       "q": "I started writing at 9am. It is now 10am. By 11am, I ______ writing for 2 hours.",
       "o": {
        "A": "will be",
        "B": "am",
        "C": "will have been",
        "D": "have been"
       },
       "a": "C",
       "concept": "A duration completed by a specific future point uses the future perfect continuous.",
       "method": "At the 11am reference point, the 2-hour writing stretch will already be finished → will have been writing.",
       "difficulty": "core"
      },
      {
       "q": "We won't leave until it ______ raining.",
       "o": {
        "A": "will stop",
        "B": "stopped",
        "C": "stops",
        "D": "has stopped"
       },
       "a": "C",
       "concept": "Time clauses starting with 'until', 'when', 'before', or 'after' use the present tense even when the meaning is future.",
       "method": "Despite referring to a future event, 'until' clauses never take 'will' — use the simple present: stops.",
       "difficulty": "core"
      },
      {
       "q": "The train ______ before I arrived.",
       "o": {
        "A": "was leaving",
        "B": "left",
        "C": "had left",
        "D": "would leave"
       },
       "a": "C",
       "concept": "When one past action finishes before another past action, the earlier one takes the past perfect.",
       "method": "The train's departure happened before 'I arrived' (a later past event) → had left.",
       "difficulty": "core"
      },
      {
       "q": "Do you think all ______ not enough to help with the investigation?",
       "o": {
        "A": "these informations are",
        "B": "this informations is",
        "C": "this information is",
        "D": "these informations are"
       },
       "a": "C",
       "concept": "'Information' is an uncountable noun in English — it never takes a plural '-s' and always pairs with singular verbs.",
       "method": "Reject every option with 'informations' or plural agreement; only this information is fits.",
       "difficulty": "core"
      },
      {
       "q": "I shall find time for my ______ when I get through with this difficult assignment.",
       "o": {
        "A": "past-time",
        "B": "pass-time",
        "C": "pastime",
        "D": "passtime"
       },
       "a": "C",
       "concept": "'Pastime' (a hobby) is one word, unrelated in spelling to 'past time' or 'pass'.",
       "method": "Recognise it as a single fixed word, not a compound of 'past' + 'time' or 'pass' + 'time'.",
       "difficulty": "core"
      },
      {
       "q": "He ______ arrived by now — I can hear all the people shouting.",
       "o": {
        "A": "would have arrived",
        "B": "must have arrived",
        "C": "has arrived",
        "D": "should have arrived"
       },
       "a": "B",
       "concept": "'Must have + past participle' expresses a confident deduction about something in the past, based on present evidence.",
       "method": "The shouting is evidence for a strong conclusion, not just a possibility or expectation → must have arrived.",
       "difficulty": "core"
      },
      {
       "q": "Sibi ______ novels since she came home.",
       "o": {
        "A": "is reading",
        "B": "has read",
        "C": "had been reading",
        "D": "has been reading"
       },
       "a": "D",
       "concept": "An activity that started in the past and is still ongoing, emphasising duration, takes the present perfect continuous.",
       "method": "'Since she came home' marks the start of an unfinished, ongoing activity → has been reading.",
       "difficulty": "core"
      },
      {
       "q": "My father has been away on a journey, but my mother says she ______ he ______ this Friday.",
       "o": {
        "A": "expects/would arrive",
        "B": "expected/will arrive",
        "C": "expects/will arrive",
        "D": "expected/would arrive"
       },
       "a": "C",
       "concept": "Reported speech in the present tense ('says') keeps the reported verb in its natural tense — no backshifting needed.",
       "method": "Because the reporting verb is 'says' (present), both verbs stay present/future: expects ... will arrive.",
       "difficulty": "core"
      },
      {
       "q": "We left ______ USA and crossed ______ Atlantic Ocean to reach Europe.",
       "o": {
        "A": "the / the",
        "B": "a / an",
        "C": "— / the",
        "D": "the / a"
       },
       "a": "A",
       "concept": "Countries known by a descriptive/plural-sounding name (the USA), and named seas/oceans, both take 'the'.",
       "method": "'The USA' and 'the Atlantic Ocean' are both fixed exceptions in the rule that proper nouns usually take no article.",
       "difficulty": "core"
      },
      {
       "q": "The first prize was a/an ______ tray.",
       "o": {
        "A": "a carved wooden attractive",
        "B": "a wooden attractive carved",
        "C": "an attractive carved wooden",
        "D": "a carved attractive wooden"
       },
       "a": "C",
       "concept": "English adjectives before a noun follow a fixed order: opinion → shape/age/participle → material.",
       "method": "'Attractive' (opinion) comes before 'carved' (a participle describing shape/style), which comes before 'wooden' (material).",
       "difficulty": "core"
      },
      {
       "q": "By the time the plane reaches Harare, it ______ in the air for twelve hours.",
       "o": {
        "A": "has been",
        "B": "should be",
        "C": "will have been",
        "D": "would have been"
       },
       "a": "C",
       "concept": "'By the time + present tense' describing a future milestone pairs with the future perfect in the main clause.",
       "method": "The 12-hour flight duration will be complete at that future point → will have been (not the conditional 'would have been').",
       "difficulty": "core"
      },
      {
       "q": "'The man is your father.' What is the grammatical name of the underlined phrase 'your father'?",
       "o": {
        "A": "Adjectival phrase",
        "B": "Adverbial phrase",
        "C": "Nominal (noun) phrase",
        "D": "Noun clause"
       },
       "a": "C",
       "concept": "A group of words built around a noun, without a subject-verb structure of its own, is a nominal (noun) phrase, not a full clause.",
       "method": "'Your father' has no verb and functions as a noun, renaming/describing 'the man' — a nominal phrase, not a clause.",
       "difficulty": "core"
      },
      {
       "q": "What sentence structure is this: 'Although he is stingy, he still has a good heart'?",
       "o": {
        "A": "Compound sentence",
        "B": "Compound-complex sentence",
        "C": "Complex sentence",
        "D": "Simple sentence"
       },
       "a": "C",
       "concept": "A sentence with one subordinate clause (introduced by 'although') attached to one main clause is complex, not compound.",
       "method": "'Although he is stingy' is a subordinate clause attached to the main clause 'he still has a good heart' — that combination defines a complex sentence.",
       "difficulty": "core"
      },
      {
       "q": "'Birds of ______ flock together.'",
       "o": {
        "A": "a feather",
        "B": "the same feather",
        "C": "same feathers",
        "D": "a same feather"
       },
       "a": "A",
       "concept": "This is a fixed proverb — its exact wording doesn't change, even though 'the same feather' might sound logical.",
       "method": "The correct, unchangeable proverb is 'Birds of a feather flock together.'",
       "difficulty": "core"
      },
      {
       "q": "'CBT attendant didn't allow her to write the exam because she was late.' What type of clause is 'because she was late'?",
       "o": {
        "A": "Adverbial clause of reason",
        "B": "Adverbial clause of time",
        "C": "Adjectival clause",
        "D": "Noun clause"
       },
       "a": "A",
       "concept": "Clauses beginning with 'because' explain WHY something happened, making them adverbial clauses of reason.",
       "method": "'Because she was late' explains the reason for the action, so it's an adverbial clause of reason.",
       "difficulty": "core"
      },
      {
       "q": "'When subordinating conjunctions come in a sentence, they are ______.'",
       "o": {
        "A": "capitalized and followed by a comma",
        "B": "capitalized and followed by a hyphen",
        "C": "capitalized and followed by a full stop",
        "D": "written in lower case and followed by a comma"
       },
       "a": "D",
       "concept": "Subordinating conjunctions (although, because, since, etc.) mid-sentence follow standard capitalisation rules — lower case unless starting a new sentence, with the subordinate clause often set off by a comma.",
       "method": "Mid-sentence, subordinating conjunctions stay in lower case and the clause they introduce is typically followed by a comma.",
       "difficulty": "core"
      },
      {
       "q": "A sentence that has two or more main clauses joined by coordinating conjunctions is called a ______.",
       "o": {
        "A": "simple sentence",
        "B": "complex sentence",
        "C": "compound-complex sentence",
        "D": "compound sentence"
       },
       "a": "D",
       "concept": "Compound sentences join two or more independent (main) clauses using coordinating conjunctions like 'and', 'but', or 'or'.",
       "method": "Two main clauses joined by a coordinating conjunction defines a compound sentence.",
       "difficulty": "core"
      },
      {
       "q": "'I know whenever she is happy.' What is the grammatical name of the underlined clause 'whenever she is happy'?",
       "o": {
        "A": "Noun phrase",
        "B": "Noun clause",
        "C": "Adverbial clause",
        "D": "Adjectival clause"
       },
       "a": "C",
       "concept": "Clauses beginning with 'whenever' typically describe when an action happens, making them adverbial clauses of time.",
       "method": "'Whenever she is happy' answers the question 'when?', making it an adverbial clause.",
       "difficulty": "core"
      },
      {
       "q": "An intransitive verb is a verb ______.",
       "o": {
        "A": "with an object",
        "B": "with a subject",
        "C": "with no object",
        "D": "with only one object"
       },
       "a": "C",
       "concept": "Transitive verbs need a direct object to complete their meaning; intransitive verbs don't.",
       "method": "An intransitive verb makes complete sense without needing an object (e.g. 'she sleeps'), unlike a transitive verb (e.g. 'she reads a book').",
       "difficulty": "core"
      },
      {
       "q": "'The information contains the size of your parcel.' What is the grammatical name of the underlined phrase 'the size of your parcel'?",
       "o": {
        "A": "Relative phrase",
        "B": "Adverbial phrase",
        "C": "Adjectival phrase",
        "D": "Noun phrase"
       },
       "a": "D",
       "concept": "A group of words centred on a noun ('size'), without its own subject-verb structure, functions as a noun phrase.",
       "method": "'The size of your parcel' is built around the noun 'size' and acts as the object of 'contains' — a noun phrase.",
       "difficulty": "core"
      },
      {
       "q": "The plumbers have been toiling ______.",
       "o": {
        "A": "hard, on the job, all day.",
        "B": "all day hard, on the job.",
        "C": "on the job, hard, all day.",
        "D": "on the job, all day, hard."
       },
       "a": "A",
       "concept": "When manner, place, and time adverbs appear together, English follows a fixed order: Manner → Place → Time (the MPT rule).",
       "method": "'Hard' (manner) comes first, then 'on the job' (place), then 'all day' (time) — following the MPT order.",
       "difficulty": "core"
      },
      {
       "q": "Osaretin drove ______.",
       "o": {
        "A": "speedily at 8 o'clock to Oza-Nogogo.",
        "B": "at 8 o'clock to Oza-Nogogo speedily.",
        "C": "to Oza-Nogogo speedily at 8 o'clock.",
        "D": "speedily to Oza-Nogogo at 8 o'clock."
       },
       "a": "D",
       "concept": "Adverbs of manner, place, and time follow the fixed MPT order (Manner, then Place, then Time) in a single sentence.",
       "method": "'Speedily' (manner) → 'to Oza-Nogogo' (place) → 'at 8 o'clock' (time) is the correct MPT order.",
       "difficulty": "core"
      },
      {
       "q": "The little girl went ______.",
       "o": {
        "A": "reluctantly to the farm at 2 o'clock.",
        "B": "to the farm at 2 o'clock reluctantly.",
        "C": "at 2 o'clock to the farm reluctantly.",
        "D": "reluctantly at 2 o'clock to the farm."
       },
       "a": "A",
       "concept": "Apply the MPT rule: Manner adverb first, then Place, then Time.",
       "method": "'Reluctantly' (manner) → 'to the farm' (place) → 'at 2 o'clock' (time).",
       "difficulty": "core"
      },
      {
       "q": "Mr Godswill Ogumbor was ______.",
       "o": {
        "A": "last week elected chairman unanimously.",
        "B": "elected chairman last week unanimously.",
        "C": "unanimously last week elected chairman.",
        "D": "unanimously elected chairman last week."
       },
       "a": "D",
       "concept": "With only manner and time adverbs present (no place), the MPT order still places manner before time.",
       "method": "'Unanimously' (manner) comes before 'last week' (time), giving: unanimously elected chairman last week.",
       "difficulty": "core"
      },
      {
       "q": "The match will be played ______.",
       "o": {
        "A": "at 4 o'clock on Saturday next week.",
        "B": "next week at 4 o'clock on Saturday.",
        "C": "on Saturday next week at 4 o'clock.",
        "D": "at 4 o'clock next week on Saturday."
       },
       "a": "A",
       "concept": "When several TIME adverbs appear together with no manner or place adverb, the smaller (more specific) unit of time comes before the bigger, more general one.",
       "method": "'At 4 o'clock' (specific) → 'on Saturday' (less specific) → 'next week' (most general) — smallest to biggest.",
       "difficulty": "core"
      },
      {
       "q": "The President was overthrown ______.",
       "o": {
        "A": "July on the 12th, 1998.",
        "B": "1998 on the 12th of July.",
        "C": "on the 12th of July, 1998.",
        "D": "on the 12th of 1998, July."
       },
       "a": "C",
       "concept": "Among multiple time expressions, the more specific (day) comes before the more general (year), following the small-to-big time rule.",
       "method": "'On the 12th of July' (specific date) comes before '1998' (year) — smaller time unit before bigger.",
       "difficulty": "core"
      },
      {
       "q": "The deceased was buried at 6am ______ his compound. Why does the adverb of time come before the adverb of place here?",
       "o": {
        "A": "Because 'MPT' order must always be followed exactly, with no exceptions",
        "B": "Because the TIME of the burial is being emphasised",
        "C": "Because 'place' adverbs must always come last",
        "D": "Because this is a grammatical error"
       },
       "a": "B",
       "concept": "The MPT rule is a general guideline, not a rigid law — place and time (or manner and place) can swap positions when the writer wants to emphasise one of them.",
       "method": "Placing 'at 6am' before 'in his compound' shifts the emphasis onto WHEN the burial happened, rather than where.",
       "difficulty": "core"
      },
      {
       "q": "'A ______ family Bible lay open on the table.' Choose the option with the correct order of adjectives.",
       "o": {
        "A": "huge black gold-edged",
        "B": "black huge gold-edged",
        "C": "black gold-edged huge",
        "D": "gold-edged black huge"
       },
       "a": "A",
       "concept": "Adjectives follow a fixed order: Modifier, General, Size, Shape, Age, Colour, Verb-form, Noun, Head (remembered as MG S-SAC-VERB-NOUN-HEAD).",
       "method": "Size ('huge') comes before Colour ('black'), which comes before the Verb-form adjective ('gold-edged') — giving: huge black gold-edged.",
       "difficulty": "core"
      }
     ],
     "freq": 234
    },
    {
     "id": "prepositions",
     "name": "Prepositions & Fixed Collocations",
     "blurb": "The small words (in, on, at, for, to) that native fluency gets 'for free' — but that examiners test relentlessly because there's rarely a logical rule, only usage.",
     "concept_notes": [
      "Most preposition questions can't be reasoned out from first principles — they're fixed pairings you simply have to know, like vocabulary.",
      "Learn prepositions attached to their verb as ONE unit (congratulate on, abide by, result in) rather than memorising the preposition alone.",
      "'For' marks a duration (for two years); 'since' marks a starting point (since 2020) — this single distinction covers a large share of preposition questions.",
      "When two options both sound plausible, say the full phrase aloud — your ear will usually catch the one that's actually used in real speech."
     ],
     "questions": [
      {
       "q": "We congratulated our brother _____ his success.",
       "o": {
        "A": "about",
        "B": "for",
        "C": "on",
        "D": "at"
       },
       "a": "C",
       "concept": "'Congratulate' is fixed with 'on': congratulate somebody ON something.",
       "method": "Learn the pair as one unit — 'congratulate...on' never changes.",
       "difficulty": "core"
      },
      {
       "q": "She has been here _____ the past three years.",
       "o": {
        "A": "since",
        "B": "from",
        "C": "for",
        "D": "in"
       },
       "a": "C",
       "concept": "'For' introduces a DURATION (a length of time); 'since' introduces a starting POINT in time.",
       "method": "'Three years' is a length → for. ('Since 2021' would use since.)",
       "difficulty": "core"
      },
      {
       "q": "I have not seen my brother _____ two years.",
       "o": {
        "A": "for",
        "B": "in",
        "C": "since on",
        "D": "since"
       },
       "a": "A",
       "concept": "A stated LENGTH of time ('two years') takes 'for', not 'since'.",
       "method": "'Since' needs a fixed starting point (since 2020), not a duration.",
       "difficulty": "core"
      },
      {
       "q": "I prefer rice _____ yam.",
       "o": {
        "A": "for",
        "B": "more than",
        "C": "on",
        "D": "to"
       },
       "a": "D",
       "concept": "'Prefer X to Y' is the fixed structure for stating a preference between two things.",
       "method": "Never say 'prefer...than' — always 'prefer...to'.",
       "difficulty": "core"
      },
      {
       "q": "I prefer drinking _____ eating.",
       "o": {
        "A": "than eating",
        "B": "from eating",
        "C": "to eating",
        "D": "to eaten"
       },
       "a": "C",
       "concept": "'Prefer -ing to -ing' keeps both verbs in the same -ing form after 'prefer' and 'to'.",
       "method": "Match the verb forms: drinking...to eating.",
       "difficulty": "core"
      },
      {
       "q": "My son, Olu, is now a student _____ the University.",
       "o": {
        "A": "at",
        "B": "in",
        "C": "on",
        "D": "inside"
       },
       "a": "A",
       "concept": "'A student AT a university' is the standard fixed preposition for institutional membership.",
       "method": "Memorise: student at a school/university, but IN a class/faculty.",
       "difficulty": "core"
      },
      {
       "q": "The quarrel between the two men soon resulted _____ a fight.",
       "o": {
        "A": "in",
        "B": "to",
        "C": "towards",
        "D": "into"
       },
       "a": "A",
       "concept": "'Result IN' introduces the outcome of an event; 'result FROM' introduces its cause.",
       "method": "An event 'results in' its consequence — never 'results to'.",
       "difficulty": "core"
      },
      {
       "q": "He was angry with me _____ being treated nonchalantly.",
       "o": {
        "A": "for",
        "B": "about",
        "C": "of",
        "D": "at"
       },
       "a": "A",
       "concept": "'Angry with someone FOR doing something' is the fixed pattern when blaming a specific action.",
       "method": "Angry WITH a person, FOR their action.",
       "difficulty": "core"
      },
      {
       "q": "\"Where are you heading _____?\" \"Lagos,\" the children chorused.",
       "o": {
        "A": "to",
        "B": "for",
        "C": "in",
        "D": "at"
       },
       "a": "B",
       "concept": "'Head for' (a destination) is the fixed phrasal verb meaning to travel toward a place.",
       "method": "'Heading for Lagos' — destination after 'for'.",
       "difficulty": "core"
      },
      {
       "q": "It is a legacy she has bequeathed _____ posterity.",
       "o": {
        "A": "to",
        "B": "unto",
        "C": "into",
        "D": "for"
       },
       "a": "A",
       "concept": "'Bequeath something TO someone' is the fixed pattern (like 'give... to', 'leave... to').",
       "method": "Verbs of giving/leaving take 'to' before the receiver.",
       "difficulty": "core"
      },
      {
       "q": "The farm was engulfed _____ flames.",
       "o": {
        "A": "with",
        "B": "into",
        "C": "in",
        "D": "around"
       },
       "a": "C",
       "concept": "'Engulfed IN' is the fixed collocation for being completely surrounded by fire, water, or smoke.",
       "method": "Learn as a set phrase: engulfed in flames/darkness/chaos.",
       "difficulty": "core"
      },
      {
       "q": "I need to post a letter, could you direct me _____ a post office?",
       "o": {
        "A": "into",
        "B": "to",
        "C": "inside",
        "D": "towards"
       },
       "a": "B",
       "concept": "'Direct someone TO a place' is the standard fixed pattern for giving directions.",
       "method": "Direct/point/lead someone TO a destination.",
       "difficulty": "core"
      },
      {
       "q": "The forgery incident reflects badly _____ everyone involved.",
       "o": {
        "A": "in",
        "B": "with",
        "C": "at",
        "D": "on"
       },
       "a": "D",
       "concept": "'Reflect ON someone/something' means to affect their reputation.",
       "method": "Fixed idiom: a bad act 'reflects on' those connected to it.",
       "difficulty": "core"
      },
      {
       "q": "The lion's face was reflected _____ the pond.",
       "o": {
        "A": "in",
        "B": "under",
        "C": "on",
        "D": "at"
       },
       "a": "A",
       "concept": "A literal mirror-image reflection uses 'reflected IN' a surface like water or glass.",
       "method": "Physical reflections happen 'in' water/mirrors; reputational ones happen 'on' people.",
       "difficulty": "core"
      },
      {
       "q": "Can you provide any reason _____ the hunter's strange behaviour?",
       "o": {
        "A": "to",
        "B": "for",
        "C": "in",
        "D": "on"
       },
       "a": "B",
       "concept": "'Reason FOR something' is the fixed collocation when explaining a cause.",
       "method": "A reason FOR an action, never 'reason to' an action.",
       "difficulty": "core"
      },
      {
       "q": "Students should have free access _____ the school's clinic.",
       "o": {
        "A": "at",
        "B": "in",
        "C": "to",
        "D": "within"
       },
       "a": "C",
       "concept": "'Access TO a place/resource' is the fixed pattern.",
       "method": "Access is always 'to' something you can reach or use.",
       "difficulty": "core"
      },
      {
       "q": "Severe penalties were meted _____ by the Disciplinary Committee.",
       "o": {
        "A": "over",
        "B": "on",
        "C": "in",
        "D": "out"
       },
       "a": "D",
       "concept": "'Mete out' is a fixed phrasal verb meaning to officially administer punishment.",
       "method": "Learn as one unit: penalties are always 'meted out', never 'meted on'.",
       "difficulty": "core"
      },
      {
       "q": "Two young men cruised along _____ top gear.",
       "o": {
        "A": "on",
        "B": "in",
        "C": "at",
        "D": "with"
       },
       "a": "B",
       "concept": "'In top gear' is the fixed idiom for driving at maximum gear/speed.",
       "method": "Gear is always described as being 'in' a particular position.",
       "difficulty": "core"
      },
      {
       "q": "A workshop was held _____ Monday and Tuesday.",
       "o": {
        "A": "between",
        "B": "on",
        "C": "at",
        "D": "from"
       },
       "a": "A",
       "concept": "'Between' introduces two connected points (days, places, times) that form a range.",
       "method": "Two named days joined by 'and' → between.",
       "difficulty": "core"
      },
      {
       "q": "The poor man was forced to sign the agreement _____ his will.",
       "o": {
        "A": "at",
        "B": "outside",
        "C": "against",
        "D": "inside"
       },
       "a": "C",
       "concept": "'Against one's will' is a fixed idiom meaning without consent, under pressure.",
       "method": "Learn as a set phrase: against someone's will.",
       "difficulty": "core"
      },
      {
       "q": "For the post of treasurer, preference is usually given _____ a female contestant.",
       "o": {
        "A": "for",
        "B": "to",
        "C": "with",
        "D": "on"
       },
       "a": "B",
       "concept": "'Give preference TO someone' is the fixed pattern for favouring one option.",
       "method": "Preference is always given 'to' the favoured option.",
       "difficulty": "core"
      },
      {
       "q": "The committee met _____ Thursdays for two years.",
       "o": {
        "A": "every",
        "B": "at",
        "C": "for",
        "D": "on"
       },
       "a": "D",
       "concept": "Recurring events on named days use 'on': on Mondays, on Thursdays.",
       "method": "Named days of the week always take 'on'.",
       "difficulty": "core"
      },
      {
       "q": "The Head teacher said bad students will be weeded _____ and sent away.",
       "o": {
        "A": "down",
        "B": "in",
        "C": "out",
        "D": "outside"
       },
       "a": "C",
       "concept": "'Weed out' is a fixed phrasal verb meaning to remove unwanted people/things from a group.",
       "method": "Learn as one unit: weeded out, like pulling weeds from a garden.",
       "difficulty": "core"
      },
      {
       "q": "Four wives of the newly elected Senators engaged _____ a serious discussion about orphans.",
       "o": {
        "A": "with",
        "B": "in",
        "C": "at",
        "D": "on"
       },
       "a": "B",
       "concept": "'Engage IN an activity' is the fixed pattern (compare: 'engage WITH a person').",
       "method": "Engage IN a discussion/activity, but engage WITH a person.",
       "difficulty": "core"
      },
      {
       "q": "Why do you think mothers make much impact _____ their children?",
       "o": {
        "A": "on",
        "B": "in",
        "C": "at",
        "D": "for"
       },
       "a": "A",
       "concept": "'Make an impact ON someone/something' is the fixed collocation.",
       "method": "Impact is always made 'on' its target.",
       "difficulty": "core"
      },
      {
       "q": "Bala concluded his speech _____ wishing everybody well.",
       "o": {
        "A": "for",
        "B": "at",
        "C": "with",
        "D": "by"
       },
       "a": "D",
       "concept": "'Conclude BY doing something' describes the final action that ends an event.",
       "method": "The closing action of a speech/event follows 'by'.",
       "difficulty": "core"
      },
      {
       "q": "Students must abide _____ school rules and regulations.",
       "o": {
        "A": "with",
        "B": "on",
        "C": "by",
        "D": "at"
       },
       "a": "C",
       "concept": "'Abide BY rules' is the fixed collocation meaning to follow or comply with them.",
       "method": "Learn as one unit: abide by (never abide with/on).",
       "difficulty": "core"
      },
      {
       "q": "My father produces just enough food for family use — he is a _____ farmer.",
       "o": {
        "A": "crude",
        "B": "mechanised",
        "C": "small-scale",
        "D": "subsistence"
       },
       "a": "D",
       "concept": "'Subsistence farming' is the exact technical term for producing just enough for one's own family.",
       "method": "Match the definition given directly to its technical name.",
       "difficulty": "core"
      },
      {
       "q": "The oldman told us _____ his childhood days.",
       "o": {
        "A": "of",
        "B": "about",
        "C": "on",
        "D": "for"
       },
       "a": "B",
       "concept": "'Tell someone ABOUT something' is the standard collocation for narrating a topic.",
       "method": "Tell/talk/speak ABOUT a subject.",
       "difficulty": "core"
      },
      {
       "q": "Idrees was convicted _____ armed robbery.",
       "o": {
        "A": "with",
        "B": "from",
        "C": "of",
        "D": "about"
       },
       "a": "C",
       "concept": "'Convicted OF a crime' is the fixed legal collocation.",
       "method": "Learn as a set legal phrase: convicted of, accused of, guilty of.",
       "difficulty": "core"
      },
      {
       "q": "Nobody can be happy _____ this brand of terrorism.",
       "o": {
        "A": "of",
        "B": "on",
        "C": "from",
        "D": "about"
       },
       "a": "D",
       "concept": "'Happy ABOUT something' is the standard collocation for an attitude toward a situation.",
       "method": "Feelings (happy, sad, angry) about a situation take 'about'.",
       "difficulty": "core"
      },
      {
       "q": "You look pale, you had better _____ a doctor.",
       "o": {
        "A": "consult with",
        "B": "consult to",
        "C": "consult",
        "D": "consult by"
       },
       "a": "C",
       "concept": "'Consult' is used directly with an object — no preposition needed before the person consulted.",
       "method": "'Consult a doctor' — no preposition, unlike 'talk to' or 'speak with'.",
       "difficulty": "core"
      },
      {
       "q": "She was the first woman to stand _____ election to parliament.",
       "o": {
        "A": "to",
        "B": "for",
        "C": "through",
        "D": "by"
       },
       "a": "B",
       "concept": "'Stand FOR election' is the fixed British-English idiom meaning to be a candidate.",
       "method": "Learn as a set phrase: stand for election/office.",
       "difficulty": "core"
      },
      {
       "q": "They waited in a state of feverish anxiety _____ their mother to come home.",
       "o": {
        "A": "till",
        "B": "to",
        "C": "until",
        "D": "for"
       },
       "a": "D",
       "concept": "'Wait FOR someone/something' is the fixed collocation when anticipating an arrival.",
       "method": "You always wait FOR a person or event, not 'wait to' them.",
       "difficulty": "core"
      },
      {
       "q": "My mother does not approve ___ your coming here so late.",
       "o": {
        "A": "with",
        "B": "to",
        "C": "for",
        "D": "of"
       },
       "a": "D",
       "concept": "'Approve OF something' is the fixed collocation for expressing agreement/acceptance.",
       "method": "Learn as one unit: approve of, never approve with/to/for.",
       "difficulty": "core"
      },
      {
       "q": "He joined the debating society as a means ___ his language skills.",
       "o": {
        "A": "to improve",
        "B": "of improving",
        "C": "to be improving",
        "D": "for improving"
       },
       "a": "B",
       "concept": "'A means OF doing something' is the fixed collocation.",
       "method": "'Means' pairs with 'of' + gerund: means of improving.",
       "difficulty": "core"
      },
      {
       "q": "Their country is ___ for disintegration, according to the report.",
       "o": {
        "A": "heading",
        "B": "herding",
        "C": "heeding",
        "D": "headed"
       },
       "a": "A",
       "concept": "'Heading for' means moving toward a destination or outcome.",
       "method": "Watch the similar-sounding distractors (herding/heeding) — only 'heading' fits the idiom.",
       "difficulty": "core"
      },
      {
       "q": "The philanthropist devoted himself ___ the poor in his community.",
       "o": {
        "A": "by helping",
        "B": "in helping",
        "C": "to helping",
        "D": "at helping"
       },
       "a": "C",
       "concept": "'Devote oneself TO doing something' is the fixed collocation.",
       "method": "Devote is always paired with 'to', never 'in/at/by'.",
       "difficulty": "core"
      },
      {
       "q": "He beckoned ___ me to join the group.",
       "o": {
        "A": "to",
        "B": "on",
        "C": "for",
        "D": "at"
       },
       "a": "A",
       "concept": "'Beckon TO someone' is the fixed collocation for signalling them to come.",
       "method": "Learn as one unit: beckon to (not on/for/at).",
       "difficulty": "core"
      },
      {
       "q": "The police rounded ___ the armed robbers and took them to the station.",
       "o": {
        "A": "around",
        "B": "in",
        "C": "up",
        "D": "off"
       },
       "a": "C",
       "concept": "'Round up' is a fixed phrasal verb meaning to gather/arrest a group.",
       "method": "Learn as one unit: round up (never round in/off/around).",
       "difficulty": "core"
      },
      {
       "q": "She is married ___ a doctor.",
       "o": {
        "A": "with",
        "B": "to",
        "C": "by",
        "D": "for"
       },
       "a": "B",
       "concept": "'Married TO someone' is the fixed collocation.",
       "method": "Learn as one unit: married to, never married with.",
       "difficulty": "core"
      },
      {
       "q": "He apologised ___ his rude behaviour.",
       "o": {
        "A": "for",
        "B": "of",
        "C": "about",
        "D": "at"
       },
       "a": "A",
       "concept": "'Apologise FOR something' is the fixed collocation for a specific action.",
       "method": "Apologise FOR the thing you did wrong.",
       "difficulty": "core"
      },
      {
       "q": "The children are afraid ___ the dark.",
       "o": {
        "A": "of",
        "B": "from",
        "C": "at",
        "D": "with"
       },
       "a": "A",
       "concept": "'Afraid OF something' is the fixed collocation for fear.",
       "method": "Learn as one unit: afraid of, never afraid from/at/with.",
       "difficulty": "core"
      },
      {
       "q": "She is good ___ Mathematics.",
       "o": {
        "A": "in",
        "B": "at",
        "C": "on",
        "D": "with"
       },
       "a": "B",
       "concept": "'Good AT a skill/subject' is the fixed collocation.",
       "method": "Learn as one unit: good at (a subject/skill).",
       "difficulty": "core"
      },
      {
       "q": "He was absent ___ school yesterday.",
       "o": {
        "A": "in",
        "B": "at",
        "C": "from",
        "D": "on"
       },
       "a": "C",
       "concept": "'Absent FROM a place' is the fixed collocation.",
       "method": "Learn as one unit: absent from, never absent in/at/on.",
       "difficulty": "core"
      },
      {
       "q": "I am tired ___ waiting for the bus.",
       "o": {
        "A": "of",
        "B": "from",
        "C": "with",
        "D": "in"
       },
       "a": "A",
       "concept": "'Tired OF something' expresses being fed up with a repeated situation.",
       "method": "Learn as one unit: tired of (fed up with).",
       "difficulty": "core"
      },
      {
       "q": "The teacher was pleased ___ our performance.",
       "o": {
        "A": "of",
        "B": "with",
        "C": "at",
        "D": "for"
       },
       "a": "B",
       "concept": "'Pleased WITH something/someone' is the fixed collocation.",
       "method": "Learn as one unit: pleased with, never pleased of.",
       "difficulty": "core"
      },
      {
       "q": "He is capable ___ solving the problem alone.",
       "o": {
        "A": "of",
        "B": "to",
        "C": "for",
        "D": "with"
       },
       "a": "A",
       "concept": "'Capable OF doing something' is the fixed collocation.",
       "method": "Learn as one unit: capable of.",
       "difficulty": "core"
      },
      {
       "q": "She was accused ___ theft.",
       "o": {
        "A": "for",
        "B": "with",
        "C": "of",
        "D": "about"
       },
       "a": "C",
       "concept": "'Accused OF a crime' is the fixed legal collocation.",
       "method": "Learn as one unit: accused of, like convicted of.",
       "difficulty": "core"
      },
      {
       "q": "The company is responsible ___ the damage caused.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "to"
       },
       "a": "B",
       "concept": "'Responsible FOR something' is the fixed collocation.",
       "method": "Learn as one unit: responsible for.",
       "difficulty": "core"
      },
      {
       "q": "He is interested ___ learning new languages.",
       "o": {
        "A": "on",
        "B": "at",
        "C": "in",
        "D": "with"
       },
       "a": "C",
       "concept": "'Interested IN something' is the fixed collocation.",
       "method": "Learn as one unit: interested in.",
       "difficulty": "core"
      },
      {
       "q": "The book consists ___ ten chapters.",
       "o": {
        "A": "of",
        "B": "in",
        "C": "with",
        "D": "from"
       },
       "a": "A",
       "concept": "'Consist OF parts' is the fixed collocation.",
       "method": "Learn as one unit: consist of.",
       "difficulty": "core"
      },
      {
       "q": "She insisted ___ paying for the meal.",
       "o": {
        "A": "to",
        "B": "on",
        "C": "at",
        "D": "for"
       },
       "a": "B",
       "concept": "'Insist ON doing something' is the fixed collocation.",
       "method": "Learn as one unit: insist on.",
       "difficulty": "core"
      },
      {
       "q": "The students are looking forward ___ the holidays.",
       "o": {
        "A": "for",
        "B": "at",
        "C": "to",
        "D": "on"
       },
       "a": "C",
       "concept": "'Look forward TO something' is the fixed collocation, followed by a noun or -ing form.",
       "method": "Learn as one unit: look forward to + noun/-ing.",
       "difficulty": "core"
      },
      {
       "q": "He succeeded ___ passing the examination.",
       "o": {
        "A": "at",
        "B": "in",
        "C": "on",
        "D": "for"
       },
       "a": "B",
       "concept": "'Succeed IN doing something' is the fixed collocation.",
       "method": "Learn as one unit: succeed in.",
       "difficulty": "core"
      },
      {
       "q": "I am fond ___ reading novels.",
       "o": {
        "A": "of",
        "B": "with",
        "C": "for",
        "D": "at"
       },
       "a": "A",
       "concept": "'Fond OF something' is the fixed collocation.",
       "method": "Learn as one unit: fond of.",
       "difficulty": "core"
      },
      {
       "q": "The manager congratulated the team ___ their success.",
       "o": {
        "A": "for",
        "B": "on",
        "C": "about",
        "D": "at"
       },
       "a": "B",
       "concept": "'Congratulate someone ON something' is the fixed collocation.",
       "method": "Learn as one unit: congratulate on (never congratulate for).",
       "difficulty": "core"
      },
      {
       "q": "She apologised ___ me for being late.",
       "o": {
        "A": "to",
        "B": "with",
        "C": "at",
        "D": "for"
       },
       "a": "A",
       "concept": "'Apologise TO someone' (the person) but 'FOR something' (the action).",
       "method": "Two different prepositions: apologise TO a person, FOR an action.",
       "difficulty": "core"
      },
      {
       "q": "He is married ___ his childhood sweetheart.",
       "o": {
        "A": "with",
        "B": "to",
        "C": "for",
        "D": "by"
       },
       "a": "B",
       "concept": "'Married TO someone' remains fixed regardless of context.",
       "method": "Learn as one unit: married to (never married with).",
       "difficulty": "core"
      },
      {
       "q": "The children were warned ___ playing near the river.",
       "o": {
        "A": "against",
        "B": "about",
        "C": "from",
        "D": "of"
       },
       "a": "A",
       "concept": "'Warn someone AGAINST doing something' is the fixed collocation.",
       "method": "Learn as one unit: warn against (an action to avoid).",
       "difficulty": "core"
      },
      {
       "q": "Nigeria is divided ___ 36 states.",
       "o": {
        "A": "into",
        "B": "in",
        "C": "with",
        "D": "by"
       },
       "a": "A",
       "concept": "'Divided INTO parts' is the fixed collocation for splitting something into sections.",
       "method": "Learn as one unit: divided into (never divided in).",
       "difficulty": "core"
      },
      {
       "q": "He was blamed ___ the accident.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "about"
       },
       "a": "B",
       "concept": "'Blamed FOR something' is the fixed collocation.",
       "method": "Learn as one unit: blamed for.",
       "difficulty": "core"
      },
      {
       "q": "She is skilled ___ negotiation.",
       "o": {
        "A": "at",
        "B": "of",
        "C": "with",
        "D": "for"
       },
       "a": "A",
       "concept": "'Skilled AT/IN something' is the fixed collocation.",
       "method": "Learn as one unit: skilled at (a skill).",
       "difficulty": "core"
      },
      {
       "q": "The workers went on strike ___ protest against poor pay.",
       "o": {
        "A": "in",
        "B": "on",
        "C": "at",
        "D": "for"
       },
       "a": "A",
       "concept": "'In protest against something' is the fixed collocation.",
       "method": "Learn as one unit: in protest against.",
       "difficulty": "core"
      },
      {
       "q": "He is allergic ___ peanuts.",
       "o": {
        "A": "to",
        "B": "of",
        "C": "with",
        "D": "from"
       },
       "a": "A",
       "concept": "'Allergic TO something' is the fixed collocation.",
       "method": "Learn as one unit: allergic to.",
       "difficulty": "core"
      },
      {
       "q": "She was absorbed ___ her book and didn't hear the doorbell.",
       "o": {
        "A": "in",
        "B": "at",
        "C": "on",
        "D": "with"
       },
       "a": "A",
       "concept": "'Absorbed IN something' is the fixed collocation for deep concentration.",
       "method": "Learn as one unit: absorbed in (a book/activity).",
       "difficulty": "core"
      },
      {
       "q": "He is entitled ___ a refund after the faulty delivery.",
       "o": {
        "A": "for",
        "B": "to",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Entitled TO something' is the fixed collocation for having a right to it.",
       "method": "Learn as one unit: entitled to.",
       "difficulty": "core"
      },
      {
       "q": "The workers protested ___ the unfair dismissal of their colleague.",
       "o": {
        "A": "against",
        "B": "about",
        "C": "for",
        "D": "with"
       },
       "a": "A",
       "concept": "'Protest AGAINST something' is the fixed collocation for formal opposition.",
       "method": "Learn as one unit: protest against.",
       "difficulty": "core"
      },
      {
       "q": "She is proud ___ her academic achievements.",
       "o": {
        "A": "for",
        "B": "of",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Proud OF something' is the fixed collocation.",
       "method": "Learn as one unit: proud of.",
       "difficulty": "core"
      },
      {
       "q": "He was deprived ___ his rights during the trial.",
       "o": {
        "A": "of",
        "B": "from",
        "C": "with",
        "D": "for"
       },
       "a": "A",
       "concept": "'Deprived OF something' is the fixed collocation.",
       "method": "Learn as one unit: deprived of.",
       "difficulty": "core"
      },
      {
       "q": "The manager is in charge ___ the entire department.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "at"
       },
       "a": "A",
       "concept": "'In charge OF something' is the fixed collocation for having responsibility.",
       "method": "Learn as one unit: in charge of.",
       "difficulty": "core"
      },
      {
       "q": "They are grateful ___ your assistance during the crisis.",
       "o": {
        "A": "for",
        "B": "of",
        "C": "with",
        "D": "to"
       },
       "a": "A",
       "concept": "'Grateful FOR something' is the fixed collocation (though 'grateful TO a person' also exists).",
       "method": "Grateful FOR the thing received; grateful TO the person who gave it.",
       "difficulty": "core"
      },
      {
       "q": "The children were excited ___ the prospect of a holiday.",
       "o": {
        "A": "about",
        "B": "of",
        "C": "for",
        "D": "at"
       },
       "a": "A",
       "concept": "'Excited ABOUT something' is the fixed collocation.",
       "method": "Learn as one unit: excited about.",
       "difficulty": "core"
      },
      {
       "q": "He is dependent ___ his parents for financial support.",
       "o": {
        "A": "of",
        "B": "on",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Dependent ON someone/something' is the fixed collocation.",
       "method": "Learn as one unit: dependent on.",
       "difficulty": "core"
      },
      {
       "q": "She was surprised ___ how quickly the work was completed.",
       "o": {
        "A": "at",
        "B": "of",
        "C": "with",
        "D": "for"
       },
       "a": "A",
       "concept": "'Surprised AT/BY something' is the fixed collocation.",
       "method": "Learn as one unit: surprised at.",
       "difficulty": "core"
      },
      {
       "q": "The results were consistent ___ our expectations.",
       "o": {
        "A": "to",
        "B": "with",
        "C": "of",
        "D": "for"
       },
       "a": "B",
       "concept": "'Consistent WITH something' is the fixed collocation for matching/agreeing with it.",
       "method": "Learn as one unit: consistent with.",
       "difficulty": "core"
      },
      {
       "q": "He was rewarded ___ his outstanding performance.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Rewarded FOR something' is the fixed collocation.",
       "method": "Learn as one unit: rewarded for.",
       "difficulty": "core"
      },
      {
       "q": "She was oblivious ___ the danger surrounding her.",
       "o": {
        "A": "of",
        "B": "to",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Oblivious TO something' is the fixed collocation for being unaware.",
       "method": "Learn as one unit: oblivious to.",
       "difficulty": "core"
      },
      {
       "q": "He is notorious ___ arriving late to meetings.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Notorious FOR something' is the fixed collocation.",
       "method": "Learn as one unit: notorious for.",
       "difficulty": "core"
      },
      {
       "q": "The children were delighted ___ their new toys.",
       "o": {
        "A": "of",
        "B": "with",
        "C": "at",
        "D": "for"
       },
       "a": "B",
       "concept": "'Delighted WITH something' is the fixed collocation.",
       "method": "Learn as one unit: delighted with.",
       "difficulty": "core"
      },
      {
       "q": "The students were commended ___ their excellent performance.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Commended FOR something' is the fixed collocation.",
       "method": "Learn as one unit: commended for.",
       "difficulty": "core"
      },
      {
       "q": "He is renowned ___ his generosity.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Renowned FOR something' is the fixed collocation.",
       "method": "Learn as one unit: renowned for.",
       "difficulty": "core"
      },
      {
       "q": "The philanthropist devoted himself ______ helping the poor.",
       "o": {
        "A": "in",
        "B": "at",
        "C": "to",
        "D": "by"
       },
       "a": "C",
       "concept": "'Devote oneself TO' is a fixed verb-preposition pairing in English.",
       "method": "'Devoted to' always pairs with 'to' + the -ing form, never 'in', 'at', or 'by'.",
       "difficulty": "core"
      },
      {
       "q": "The workers decided to abide ______ the new company policy.",
       "o": {
        "A": "by",
        "B": "with",
        "C": "to",
        "D": "for"
       },
       "a": "A",
       "concept": "'Abide by' (meaning to comply with a rule or decision) is a fixed verb-preposition pairing.",
       "method": "'Abide' always pairs with 'by', never 'with', 'to', or 'for'.",
       "difficulty": "core"
      },
      {
       "q": "He was accused ______ theft by his neighbours.",
       "o": {
        "A": "for",
        "B": "of",
        "C": "with",
        "D": "on"
       },
       "a": "B",
       "concept": "'Accuse someone OF something' is the standard fixed pattern.",
       "method": "'Accused of' is the correct collocation, not 'accused for' or 'accused with'.",
       "difficulty": "core"
      },
      {
       "q": "The young boy has become addicted ______ video games.",
       "o": {
        "A": "with",
        "B": "of",
        "C": "to",
        "D": "for"
       },
       "a": "C",
       "concept": "'Addicted to' is a fixed verb-preposition pairing that never varies.",
       "method": "'Addicted' always takes 'to', never 'with', 'of', or 'for'.",
       "difficulty": "core"
      },
      {
       "q": "She is deeply afraid ______ spiders.",
       "o": {
        "A": "of",
        "B": "from",
        "C": "with",
        "D": "at"
       },
       "a": "A",
       "concept": "'Afraid of' is the standard fixed pairing when expressing fear of something.",
       "method": "'Afraid' collocates with 'of', not 'from' or 'with'.",
       "difficulty": "core"
      },
      {
       "q": "The committee members did not agree ______ the proposal.",
       "o": {
        "A": "on",
        "B": "of",
        "C": "for",
        "D": "to"
       },
       "a": "D",
       "concept": "'Agree to a proposal' (accepting it) differs from 'agree with a person' (sharing their opinion) — choose the preposition based on what follows.",
       "method": "When agreeing to a plan or proposal, use 'agree to'.",
       "difficulty": "core"
      },
      {
       "q": "Everyone was amazed ______ his sudden success.",
       "o": {
        "A": "with",
        "B": "at",
        "C": "for",
        "D": "of"
       },
       "a": "B",
       "concept": "'Amazed at' is the standard fixed collocation for expressing surprise at something.",
       "method": "'Amazed' pairs with 'at', not 'with', 'for', or 'of'.",
       "difficulty": "core"
      },
      {
       "q": "The whole village was angry ______ the corrupt chief.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "about"
       },
       "a": "C",
       "concept": "'Angry with' is used for a person, while 'angry about/at' is used for a situation or thing.",
       "method": "Since 'the chief' is a person, the correct pairing here is 'angry with'.",
       "difficulty": "core"
      },
      {
       "q": "She is quite anxious ______ the outcome of her exams.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "about"
       },
       "a": "D",
       "concept": "'Anxious about' is used when worrying over a situation or outcome, distinct from 'anxious for' (eager for something to happen).",
       "method": "Worrying over an exam OUTCOME takes 'anxious about'.",
       "difficulty": "core"
      },
      {
       "q": "He finally apologised ______ his rude behaviour.",
       "o": {
        "A": "for",
        "B": "of",
        "C": "about",
        "D": "with"
       },
       "a": "A",
       "concept": "'Apologise to someone FOR something' is the fixed pattern — the reason for the apology takes 'for'.",
       "method": "'Apologise for' the behaviour/reason, but 'apologise to' the person.",
       "difficulty": "core"
      },
      {
       "q": "The students were not entirely satisfied and decided to appeal ______ the examiner for a re-mark.",
       "o": {
        "A": "for",
        "B": "to",
        "C": "with",
        "D": "on"
       },
       "a": "B",
       "concept": "'Appeal to someone FOR something' is the fixed pattern.",
       "method": "Appealing TO a person (the examiner) uses 'to'.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria is not the only country blessed with an appetite ______ progress.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "with",
        "D": "at"
       },
       "a": "B",
       "concept": "'Appetite for' is the fixed collocation used with abstract desires, just as with literal food.",
       "method": "'Appetite' always pairs with 'for'.",
       "difficulty": "core"
      },
      {
       "q": "The panel did not approve ______ his unconventional proposal.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "on",
        "D": "at"
       },
       "a": "A",
       "concept": "'Approve of' is the fixed pattern when expressing agreement with or endorsement of something.",
       "method": "'Approve' pairs with 'of', not 'for' or 'on'.",
       "difficulty": "core"
      },
      {
       "q": "The judge finally arrived ______ a decision after much deliberation.",
       "o": {
        "A": "to",
        "B": "on",
        "C": "at",
        "D": "in"
       },
       "a": "C",
       "concept": "'Arrive at a decision' is a fixed figurative expression, distinct from the literal 'arrive at/in a place'.",
       "method": "'Arrive at a decision/conclusion' is the standard fixed collocation.",
       "difficulty": "core"
      },
      {
       "q": "He remains averse ______ any form of change in the office routine.",
       "o": {
        "A": "from",
        "B": "of",
        "C": "with",
        "D": "to"
       },
       "a": "D",
       "concept": "'Averse to' (strongly disliking or opposed to) is a fixed collocation.",
       "method": "'Averse' always pairs with 'to'.",
       "difficulty": "core"
      },
      {
       "q": "The security guard was banned ______ entering the premises after the incident.",
       "o": {
        "A": "of",
        "B": "from",
        "C": "for",
        "D": "with"
       },
       "a": "B",
       "concept": "'Ban someone FROM doing something' is the fixed pattern.",
       "method": "'Banned from' is correct, not 'banned of' or 'banned for'.",
       "difficulty": "core"
      },
      {
       "q": "The whole class is now busy ______ their final year projects.",
       "o": {
        "A": "in",
        "B": "on",
        "C": "with",
        "D": "for"
       },
       "a": "C",
       "concept": "'Busy with' is the fixed collocation when describing what someone is occupied doing.",
       "method": "'Busy' pairs with 'with', not 'in', 'on', or 'for'.",
       "difficulty": "core"
      },
      {
       "q": "The minister was charged ______ corruption and abuse of office.",
       "o": {
        "A": "for",
        "B": "of",
        "C": "with",
        "D": "on"
       },
       "a": "C",
       "concept": "'Charge someone WITH an offence' is the standard legal collocation.",
       "method": "'Charged with' is correct, distinct from 'accused of' (though both describe similar situations, the fixed prepositions differ).",
       "difficulty": "core"
      },
      {
       "q": "Nigeria's economy still depends heavily ______ oil revenue.",
       "o": {
        "A": "of",
        "B": "on",
        "C": "from",
        "D": "with"
       },
       "a": "B",
       "concept": "'Depend on/upon' is the standard fixed collocation.",
       "method": "'Depend' pairs with 'on' (or 'upon'), never 'of' or 'from'.",
       "difficulty": "core"
      },
      {
       "q": "He was later exempted ______ paying the full tuition fee.",
       "o": {
        "A": "of",
        "B": "for",
        "C": "from",
        "D": "with"
       },
       "a": "C",
       "concept": "'Exempt someone FROM an obligation' is the fixed pattern.",
       "method": "'Exempted from' is correct.",
       "difficulty": "core"
      },
      {
       "q": "The staff were entirely ignorant ______ the new policy changes.",
       "o": {
        "A": "with",
        "B": "about",
        "C": "for",
        "D": "at"
       },
       "a": "B",
       "concept": "'Ignorant of/about' is the standard fixed collocation when someone lacks knowledge of something.",
       "method": "'Ignorant about' (or 'ignorant of') is correct.",
       "difficulty": "core"
      },
      {
       "q": "The lawyer's argument was irrelevant ______ the actual case being tried.",
       "o": {
        "A": "for",
        "B": "with",
        "C": "to",
        "D": "of"
       },
       "a": "C",
       "concept": "'Irrelevant to' is the fixed collocation.",
       "method": "'Irrelevant' pairs with 'to', not 'for', 'with', or 'of'.",
       "difficulty": "core"
      },
      {
       "q": "She has always been keen ______ learning new languages.",
       "o": {
        "A": "for",
        "B": "with",
        "C": "at",
        "D": "on"
       },
       "a": "D",
       "concept": "'Keen on' is the fixed collocation expressing enthusiasm for something.",
       "method": "'Keen' pairs with 'on', not 'for', 'with', or 'at'.",
       "difficulty": "core"
      },
      {
       "q": "The teacher warned the students not to meddle ______ affairs that do not concern them.",
       "o": {
        "A": "with",
        "B": "in",
        "C": "on",
        "D": "at"
       },
       "a": "B",
       "concept": "'Meddle in' is the fixed collocation for interfering in a matter.",
       "method": "'Meddle in' someone's affairs is correct, not 'meddle with' (which has a slightly different everyday sense of tampering with an object).",
       "difficulty": "core"
      },
      {
       "q": "The whole country reacted with insistence ______ immediate reforms.",
       "o": {
        "A": "on",
        "B": "of",
        "C": "for",
        "D": "at"
       },
       "a": "A",
       "concept": "'Insistence on' is the fixed collocation.",
       "method": "'Insistence' pairs with 'on', not 'of', 'for', or 'at'.",
       "difficulty": "core"
      },
      {
       "q": "The community members finally reconciled themselves ______ the outcome of the election.",
       "o": {
        "A": "with",
        "B": "for",
        "C": "to",
        "D": "of"
       },
       "a": "C",
       "concept": "'Reconcile oneself TO something' means to accept an unwelcome situation.",
       "method": "'Reconcile (oneself) to' is correct when accepting a difficult outcome.",
       "difficulty": "core"
      }
     ],
     "freq": 109
    },
    {
     "id": "synonyms",
     "name": "Synonyms",
     "blurb": "Words that mean nearly the same thing — the fastest points on the paper once you build real vocabulary.",
     "concept_notes": [
      "A synonym question asks: 'which word could replace this one in a sentence without changing the meaning much?'",
      "Break unfamiliar words into recognisable roots (e.g. 'aug-' in augment relates to 'auction' — both about increase).",
      "Eliminate the option that is the OPPOSITE first — exam-setters usually plant the antonym as a distractor.",
      "If two options seem close, pick the one matching the word's tone (a formal word needs a formal synonym)."
     ],
     "questions": [
      {
       "q": "Choose the word closest in meaning to: IRKSOME",
       "o": {
        "A": "Troublesome",
        "B": "Cheerful",
        "C": "Silent",
        "D": "Ancient"
       },
       "a": "A",
       "concept": "'Irksome' means annoying or tedious.",
       "method": "'Irk' = to annoy — irksome = troublesome.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ABDUCT",
       "o": {
        "A": "Argue",
        "B": "Kidnap",
        "C": "Escort",
        "D": "Surrender"
       },
       "a": "B",
       "concept": "'Abduct' means to take someone away illegally by force.",
       "method": "'Abduction' in the news always means kidnapping.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: JUVENILE",
       "o": {
        "A": "Elderly",
        "B": "Youthful",
        "C": "Wealthy",
        "D": "Foreign"
       },
       "a": "B",
       "concept": "'Juvenile' relates to young people.",
       "method": "'Juvenile court' handles young offenders.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: UNFOLD",
       "o": {
        "A": "Conceal",
        "B": "Fold twice",
        "C": "Reveal",
        "D": "Compress"
       },
       "a": "C",
       "concept": "'Unfold' means to gradually become clear.",
       "method": "Picture literally opening paper to see what's written.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: MERIT",
       "o": {
        "A": "Beauty",
        "B": "Advantage",
        "C": "Confusion",
        "D": "Sadness"
       },
       "a": "B",
       "concept": "'Merit' is a quality deserving praise or advantage.",
       "method": "A plan 'has merit' = has a good point in its favour.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: WRECK",
       "o": {
        "A": "Repair",
        "B": "Destroy",
        "C": "Discover",
        "D": "Admire"
       },
       "a": "B",
       "concept": "'Wreck' means to ruin completely.",
       "method": "A 'shipwreck' is a destroyed ship.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: LINEAR",
       "o": {
        "A": "Circular",
        "B": "Crooked",
        "C": "Straight",
        "D": "Hidden"
       },
       "a": "C",
       "concept": "'Linear' relates to a straight line.",
       "method": "'Line' hides inside 'linear'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: AMATEUR",
       "o": {
        "A": "Expert",
        "B": "Novice",
        "C": "Veteran",
        "D": "Champion"
       },
       "a": "B",
       "concept": "An amateur lacks professional training.",
       "method": "Opposite of 'professional' — novice/beginner.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: DIAGNOSE",
       "o": {
        "A": "Treat",
        "B": "Identify",
        "C": "Prevent",
        "D": "Ignore"
       },
       "a": "B",
       "concept": "'Diagnose' means to identify a problem through examination.",
       "method": "A doctor diagnoses BEFORE treating.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: FRUGAL",
       "o": {
        "A": "Wasteful",
        "B": "Generous",
        "C": "Thrifty",
        "D": "Careless"
       },
       "a": "C",
       "concept": "'Frugal' means careful and sparing with resources.",
       "method": "A frugal shopper avoids waste — thrifty.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: CANDID",
       "o": {
        "A": "Frank",
        "B": "Secretive",
        "C": "Confused",
        "D": "Formal"
       },
       "a": "A",
       "concept": "'Candid' means open and honest in speech.",
       "method": "A 'candid camera' catches unguarded, honest moments.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: LETHARGIC",
       "o": {
        "A": "Energetic",
        "B": "Sluggish",
        "C": "Aggressive",
        "D": "Talkative"
       },
       "a": "B",
       "concept": "'Lethargic' means lacking energy.",
       "method": "Picture someone too tired to move — sluggish.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: AUGMENT",
       "o": {
        "A": "Reduce",
        "B": "Increase",
        "C": "Repeat",
        "D": "Delay"
       },
       "a": "B",
       "concept": "'Augment' means to make greater by adding to it.",
       "method": "'Augmented reality' ADDS digital layers — augment = increase.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: CONCEAL",
       "o": {
        "A": "Display",
        "B": "Hide",
        "C": "Destroy",
        "D": "Discover"
       },
       "a": "B",
       "concept": "'Conceal' means to hide from view.",
       "method": "'Con-' + 'ceal' (seal away) — hide.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: BLUNT",
       "o": {
        "A": "Sharp",
        "B": "Direct",
        "C": "Polite",
        "D": "Quiet"
       },
       "a": "B",
       "concept": "Of speech, 'blunt' means very direct without softening.",
       "method": "A blunt knife has no edge; blunt speech has no softening.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: RECKLESS",
       "o": {
        "A": "Cautious",
        "B": "Careless",
        "C": "Curious",
        "D": "Calm"
       },
       "a": "B",
       "concept": "'Reckless' means acting without regard for consequences.",
       "method": "Reckless driving = dangerously careless driving.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: PHOBIA",
       "o": {
        "A": "Reasonable fear",
        "B": "Unreasonable confidence",
        "C": "Unreasonable fear",
        "D": "Reasonable confidence"
       },
       "a": "C",
       "concept": "A phobia is an intense, irrational fear of something.",
       "method": "Phobia always pairs 'fear' with 'unreasonable/irrational'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: SOPHISTICATED",
       "o": {
        "A": "Knowledgeable",
        "B": "Complex",
        "C": "Complicated",
        "D": "Simple"
       },
       "a": "B",
       "concept": "'Sophisticated' (of systems/machines) means intricate and advanced.",
       "method": "A sophisticated device = a complex, advanced one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: APPREHENSION",
       "o": {
        "A": "Anxiety",
        "B": "Confidence",
        "C": "Emotional stress",
        "D": "Depression"
       },
       "a": "A",
       "concept": "'Apprehension' means worry or fear about something about to happen.",
       "method": "Before a scary event, you feel apprehensive = anxious.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ACCOMPLISHED (as in 'the task was accomplished')",
       "o": {
        "A": "Achieve",
        "B": "Concluded",
        "C": "Achieved",
        "D": "Failed"
       },
       "a": "C",
       "concept": "'Accomplished' means successfully completed.",
       "method": "Match tense and meaning exactly: accomplished = achieved.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: EXCITEMENT",
       "o": {
        "A": "Thriller",
        "B": "Joy",
        "C": "Commotion",
        "D": "Inspiration"
       },
       "a": "B",
       "concept": "'Excitement' is a feeling of great enthusiasm and eagerness.",
       "method": "The feeling itself, not its cause — closest is 'joy'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: TASK",
       "o": {
        "A": "Duty",
        "B": "Mission",
        "C": "Blame",
        "D": "Assign"
       },
       "a": "A",
       "concept": "A 'task' is a piece of work to be done, close to a 'duty'.",
       "method": "A task is assigned; a duty is owed — they overlap closely as 'work to be done'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: TRANQUIL (as in the tranquil life of a village)",
       "o": {
        "A": "Tree-filled",
        "B": "Prosperous",
        "C": "Peaceful",
        "D": "Decent"
       },
       "a": "C",
       "concept": "'Tranquil' means calm and peaceful, free of disturbance.",
       "method": "Contrasted with 'hurly burly' (chaos) — opposite is peaceful.",
       "difficulty": "core"
      },
      {
       "q": "Which word is close in meaning to FACILITATE?",
       "o": {
        "A": "Beckon",
        "B": "Exterminate",
        "C": "Expedite",
        "D": "Disrespect"
       },
       "a": "C",
       "concept": "'Facilitate' means to make a process easier or faster.",
       "method": "Both facilitate and expedite mean to help something move forward smoothly.",
       "difficulty": "core"
      },
      {
       "q": "Which word is close in meaning to ARDENT?",
       "o": {
        "A": "Passionate",
        "B": "Temperamental",
        "C": "Transitory",
        "D": "Disconsolate"
       },
       "a": "A",
       "concept": "'Ardent' describes intense enthusiasm or passion.",
       "method": "An 'ardent supporter' is a passionate one.",
       "difficulty": "core"
      },
      {
       "q": "Which word is close in meaning to DISCOMFIT?",
       "o": {
        "A": "Dither",
        "B": "Affiliate",
        "C": "Perplex",
        "D": "Reiterate"
       },
       "a": "C",
       "concept": "'Discomfit' means to embarrass or confuse someone.",
       "method": "To discomfit = to make someone perplexed/uneasy.",
       "difficulty": "core"
      },
      {
       "q": "Which word is close in meaning to PERPETUAL?",
       "o": {
        "A": "Imperturbable",
        "B": "Continuous",
        "C": "Vigilant",
        "D": "Indistinct"
       },
       "a": "B",
       "concept": "'Perpetual' means never ending, continuing forever.",
       "method": "Perpetual motion = motion that is continuous.",
       "difficulty": "core"
      },
      {
       "q": "Which word is closest in meaning to PRODIGAL?",
       "o": {
        "A": "Prestigious",
        "B": "Phlegmatic",
        "C": "Errant",
        "D": "Extravagant"
       },
       "a": "D",
       "concept": "'Prodigal' describes someone who spends resources recklessly and wastefully.",
       "method": "The 'Prodigal Son' wasted his inheritance — extravagant.",
       "difficulty": "core"
      },
      {
       "q": "Feeble is closest in meaning to:",
       "o": {
        "A": "Strong",
        "B": "Weak",
        "C": "Tired",
        "D": "Little"
       },
       "a": "B",
       "concept": "'Feeble' means physically weak or lacking strength.",
       "method": "A feeble old man = a weak old man.",
       "difficulty": "core"
      },
      {
       "q": "Astonish is closest in meaning to:",
       "o": {
        "A": "Asunder",
        "B": "Attack",
        "C": "Surprise",
        "D": "Sensible"
       },
       "a": "C",
       "concept": "'Astonish' means to surprise someone greatly.",
       "method": "An astonishing result is a greatly surprising one.",
       "difficulty": "core"
      },
      {
       "q": "Miserable is closest in meaning to:",
       "o": {
        "A": "Mischief",
        "B": "Wretched",
        "C": "Mistake",
        "D": "Wicked"
       },
       "a": "B",
       "concept": "'Miserable' means very unhappy or in a pitiful state.",
       "method": "Miserable weather = wretched, unpleasant weather.",
       "difficulty": "core"
      },
      {
       "q": "Stubborn is closest in meaning to:",
       "o": {
        "A": "Obstinate",
        "B": "Sturdy",
        "C": "Fearful",
        "D": "Strong"
       },
       "a": "A",
       "concept": "'Stubborn' means refusing to change one's mind.",
       "method": "Stubborn and obstinate both describe unmoving determination.",
       "difficulty": "core"
      },
      {
       "q": "Permanent is closest in meaning to:",
       "o": {
        "A": "Temporary",
        "B": "Old",
        "C": "Lasting",
        "D": "Complete"
       },
       "a": "C",
       "concept": "'Permanent' means lasting forever or for a very long time.",
       "method": "A permanent solution is a lasting one.",
       "difficulty": "core"
      },
      {
       "q": "Boss is closest in meaning to:",
       "o": {
        "A": "Governor",
        "B": "Servant",
        "C": "Mistress",
        "D": "Master"
       },
       "a": "D",
       "concept": "A 'boss' is a person in charge — close to 'master' in the sense of authority.",
       "method": "Both describe someone who directs and controls others' work.",
       "difficulty": "core"
      },
      {
       "q": "Dear (meaning costly) is closest in meaning to:",
       "o": {
        "A": "Precious",
        "B": "Cheap",
        "C": "Nice",
        "D": "Useless"
       },
       "a": "A",
       "concept": "'Dear', when describing price, means expensive/highly valued.",
       "method": "'Dear' in British usage often means costly, i.e. precious/valuable.",
       "difficulty": "core"
      },
      {
       "q": "Thankfulness is closest in meaning to:",
       "o": {
        "A": "Greatness",
        "B": "Gratitude",
        "C": "Meanness",
        "D": "Goodness"
       },
       "a": "B",
       "concept": "'Thankfulness' is the state of being grateful.",
       "method": "Both words describe the feeling of being thankful.",
       "difficulty": "core"
      },
      {
       "q": "Prohibit is closest in meaning to:",
       "o": {
        "A": "Advertise",
        "B": "Allow",
        "C": "Forbid",
        "D": "Destroy"
       },
       "a": "C",
       "concept": "'Prohibit' means to formally forbid something.",
       "method": "A prohibited act is a forbidden one.",
       "difficulty": "core"
      },
      {
       "q": "Sustain is closest in meaning to:",
       "o": {
        "A": "Maintain",
        "B": "Explain",
        "C": "Strain",
        "D": "Resign"
       },
       "a": "A",
       "concept": "'Sustain' means to keep something going over time.",
       "method": "To sustain effort = to maintain it.",
       "difficulty": "core"
      },
      {
       "q": "Valiant is closest in meaning to:",
       "o": {
        "A": "Brave",
        "B": "Proud",
        "C": "Weak",
        "D": "Honest"
       },
       "a": "A",
       "concept": "'Valiant' means showing great courage.",
       "method": "A valiant soldier is a brave soldier.",
       "difficulty": "core"
      },
      {
       "q": "Feign is closest in meaning to:",
       "o": {
        "A": "Reign",
        "B": "Faint",
        "C": "Pretend",
        "D": "Dare"
       },
       "a": "C",
       "concept": "'Feign' means to pretend to feel or be something.",
       "method": "To feign illness = to pretend to be ill.",
       "difficulty": "core"
      },
      {
       "q": "Spendthrift is closest in meaning to:",
       "o": {
        "A": "Careful",
        "B": "Generous",
        "C": "Extravagant",
        "D": "Frugal"
       },
       "a": "C",
       "concept": "A 'spendthrift' is someone who spends money wastefully.",
       "method": "Spendthrift and extravagant both describe reckless spending.",
       "difficulty": "core"
      },
      {
       "q": "Mr Johnson escaped the accident by a hair's breadth. This means he escaped:",
       "o": {
        "A": "crying for help",
        "B": "seriously injured",
        "C": "narrowly",
        "D": "holding onto another person"
       },
       "a": "C",
       "concept": "'By a hair's breadth' is an idiom meaning by a very narrow margin.",
       "method": "Picture a gap as thin as a hair — that's the narrowest possible escape.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ALTERCATION (as in 'the altercation between the siblings')",
       "o": {
        "A": "Affection",
        "B": "Hatred",
        "C": "Quarrel",
        "D": "Cooperation"
       },
       "a": "C",
       "concept": "'Altercation' means a noisy argument or heated dispute.",
       "method": "An altercation is a quarrel, not affection or cooperation.",
       "difficulty": "core"
      },
      {
       "q": "Emeka's painting was so realistic it could almost have been a photograph. 'Realistic' here is closest to:",
       "o": {
        "A": "Picturesque",
        "B": "Concrete",
        "C": "Lively",
        "D": "Authentic"
       },
       "a": "D",
       "concept": "'Realistic' means true-to-life or accurate in representation — closest to 'authentic'.",
       "method": "Something that looks like a real photograph is being described as authentic-looking.",
       "difficulty": "core"
      },
      {
       "q": "Courteously, Ade stood back to let his teacher go first through the door. 'Courteously' is closest to:",
       "o": {
        "A": "Patiently",
        "B": "Politely",
        "C": "Carefully",
        "D": "Calmly"
       },
       "a": "B",
       "concept": "'Courteously' means in a polite, well-mannered way.",
       "method": "Courtesy = politeness — the two words are near-synonyms.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: DEFERENCE (as in showing deference to elders)",
       "o": {
        "A": "Understanding",
        "B": "Indifference",
        "C": "Deference itself is the target — pick the synonym: Respect",
        "D": "Satisfaction"
       },
       "a": "C",
       "concept": "'Deference' means respectful submission or yielding to another's wishes, especially due to their status.",
       "method": "Deference to elders = showing them respect.",
       "difficulty": "core"
      },
      {
       "q": "Ugo has often been described as belligerent. This means Ugo is often:",
       "o": {
        "A": "Attractive",
        "B": "Patient",
        "C": "Innocent",
        "D": "Combative"
       },
       "a": "D",
       "concept": "'Belligerent' means hostile and aggressive, ready to fight or argue.",
       "method": "A belligerent person is combative — quick to conflict.",
       "difficulty": "core"
      },
      {
       "q": "The player kept on gamely to the end of the match. 'Gamely' here is closest to:",
       "o": {
        "A": "Amateurishly",
        "B": "Skilfully",
        "C": "Courageously",
        "D": "Stubbornly"
       },
       "a": "C",
       "concept": "'Gamely' describes doing something with spirit and bravery despite difficulty.",
       "method": "'Gamely' relates to having heart/courage, not skill.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: BENEVOLENT",
       "o": {
        "A": "Cruel",
        "B": "Kind",
        "C": "Wealthy",
        "D": "Timid"
       },
       "a": "B",
       "concept": "'Benevolent' means kind and generous.",
       "method": "A benevolent ruler is a kind, generous one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: MEAGRE",
       "o": {
        "A": "Plentiful",
        "B": "Scanty",
        "C": "Rich",
        "D": "Excessive"
       },
       "a": "B",
       "concept": "'Meagre' means small in amount, lacking in quantity.",
       "method": "A meagre meal is a scanty, insufficient one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: OBSTINATE",
       "o": {
        "A": "Flexible",
        "B": "Stubborn",
        "C": "Gentle",
        "D": "Kind"
       },
       "a": "B",
       "concept": "'Obstinate' means stubbornly refusing to change one's mind.",
       "method": "An obstinate child is a stubborn one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: VIVID",
       "o": {
        "A": "Dull",
        "B": "Bright and clear",
        "C": "Slow",
        "D": "Quiet"
       },
       "a": "B",
       "concept": "'Vivid' describes something producing powerful, clear images or impressions.",
       "method": "A vivid description is a bright, clear one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: TRIVIAL",
       "o": {
        "A": "Important",
        "B": "Unimportant",
        "C": "Serious",
        "D": "Difficult"
       },
       "a": "B",
       "concept": "'Trivial' means of little importance or value.",
       "method": "A trivial matter is an unimportant one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ADEQUATE",
       "o": {
        "A": "Insufficient",
        "B": "Sufficient",
        "C": "Excessive",
        "D": "Wasteful"
       },
       "a": "B",
       "concept": "'Adequate' means satisfactory or acceptable in quantity/quality.",
       "method": "An adequate supply is a sufficient one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: DIMINISH",
       "o": {
        "A": "Increase",
        "B": "Decrease",
        "C": "Maintain",
        "D": "Multiply"
       },
       "a": "B",
       "concept": "'Diminish' means to become smaller or less.",
       "method": "A diminishing supply is a decreasing one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: HOSTILE",
       "o": {
        "A": "Friendly",
        "B": "Unfriendly",
        "C": "Neutral",
        "D": "Calm"
       },
       "a": "B",
       "concept": "'Hostile' means unfriendly and aggressive.",
       "method": "A hostile crowd is an unfriendly, antagonistic one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: TEDIOUS",
       "o": {
        "A": "Exciting",
        "B": "Boring",
        "C": "Quick",
        "D": "Difficult"
       },
       "a": "B",
       "concept": "'Tedious' means long, slow, and boring.",
       "method": "A tedious lecture is a boring one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: PROFOUND",
       "o": {
        "A": "Shallow",
        "B": "Deep/significant",
        "C": "Simple",
        "D": "Obvious"
       },
       "a": "B",
       "concept": "'Profound' means having deep meaning or significance.",
       "method": "A profound statement is a deeply meaningful one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: RELUCTANTLY",
       "o": {
        "A": "Eagerly",
        "B": "Unwillingly",
        "C": "Quickly",
        "D": "Carefully"
       },
       "a": "B",
       "concept": "'Reluctantly' means done with hesitation or unwillingness.",
       "method": "If you do something reluctantly, you do it unwillingly.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: METICULOUS",
       "o": {
        "A": "Careless",
        "B": "Very careful",
        "C": "Fast",
        "D": "Lazy"
       },
       "a": "B",
       "concept": "'Meticulous' means showing great attention to detail.",
       "method": "A meticulous worker is very careful and precise.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: NOTORIOUS",
       "o": {
        "A": "Famous for good reasons",
        "B": "Famous for bad reasons",
        "C": "Unknown",
        "D": "Wealthy"
       },
       "a": "B",
       "concept": "'Notorious' means famous for something negative.",
       "method": "A notorious criminal is famous for their crimes, not achievements.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: PLAUSIBLE",
       "o": {
        "A": "Impossible",
        "B": "Believable",
        "C": "False",
        "D": "Ridiculous"
       },
       "a": "B",
       "concept": "'Plausible' means seeming reasonable or probable.",
       "method": "A plausible excuse is a believable one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: RESILIENT",
       "o": {
        "A": "Fragile",
        "B": "Able to recover quickly",
        "C": "Weak",
        "D": "Rigid"
       },
       "a": "B",
       "concept": "'Resilient' describes the ability to recover quickly from difficulty.",
       "method": "A resilient person bounces back quickly from setbacks.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: VOLATILE",
       "o": {
        "A": "Stable",
        "B": "Unpredictable",
        "C": "Calm",
        "D": "Slow"
       },
       "a": "B",
       "concept": "'Volatile' means liable to change rapidly and unpredictably.",
       "method": "A volatile market is one prone to sudden, unpredictable change.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ELOQUENT",
       "o": {
        "A": "Fluent and persuasive",
        "B": "Silent",
        "C": "Confused",
        "D": "Boring"
       },
       "a": "A",
       "concept": "'Eloquent' describes fluent, persuasive speech.",
       "method": "An eloquent speaker expresses ideas fluently and convincingly.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: SCRUPULOUS",
       "o": {
        "A": "Dishonest",
        "B": "Careful and honest",
        "C": "Careless",
        "D": "Lazy"
       },
       "a": "B",
       "concept": "'Scrupulous' means diligent, careful, and morally conscientious.",
       "method": "A scrupulous accountant is meticulously honest and careful.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: INEVITABLE",
       "o": {
        "A": "Avoidable",
        "B": "Unavoidable",
        "C": "Unlikely",
        "D": "Uncertain"
       },
       "a": "B",
       "concept": "'Inevitable' means certain to happen; impossible to avoid.",
       "method": "An inevitable outcome is one that cannot be avoided.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: CONCUR",
       "o": {
        "A": "Disagree",
        "B": "Agree",
        "C": "Argue",
        "D": "Ignore"
       },
       "a": "B",
       "concept": "'Concur' means to agree or share an opinion.",
       "method": "If two people concur, they agree with each other.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: FUTILE",
       "o": {
        "A": "Useful",
        "B": "Useless",
        "C": "Simple",
        "D": "Effective"
       },
       "a": "B",
       "concept": "'Futile' means incapable of producing any useful result.",
       "method": "A futile effort is a useless, wasted one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ADVERSITY",
       "o": {
        "A": "Good fortune",
        "B": "Hardship",
        "C": "Wealth",
        "D": "Success"
       },
       "a": "B",
       "concept": "'Adversity' means a state of difficulty or misfortune.",
       "method": "Facing adversity means facing hardship.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: COMPREHENSIVE",
       "o": {
        "A": "Incomplete",
        "B": "Thorough and complete",
        "C": "Brief",
        "D": "Vague"
       },
       "a": "B",
       "concept": "'Comprehensive' means covering all or nearly all aspects of something.",
       "method": "A comprehensive report is a thorough, complete one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: LAMENT",
       "o": {
        "A": "Celebrate",
        "B": "Mourn/express sorrow",
        "C": "Ignore",
        "D": "Forget"
       },
       "a": "B",
       "concept": "'Lament' means to express sorrow or grief.",
       "method": "To lament a loss is to mourn it.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: PRUDENT",
       "o": {
        "A": "Reckless",
        "B": "Wise and careful",
        "C": "Foolish",
        "D": "Hasty"
       },
       "a": "B",
       "concept": "'Prudent' means acting with care and thought for the future.",
       "method": "A prudent decision is a wise, careful one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: AMICABLE",
       "o": {
        "A": "Hostile",
        "B": "Friendly",
        "C": "Distant",
        "D": "Formal"
       },
       "a": "B",
       "concept": "'Amicable' means characterised by friendliness and goodwill.",
       "method": "An amicable agreement is a friendly, cooperative one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: CREDIBLE",
       "o": {
        "A": "Unbelievable",
        "B": "Believable",
        "C": "Confusing",
        "D": "False"
       },
       "a": "B",
       "concept": "'Credible' means able to be believed; convincing.",
       "method": "A credible witness gives a believable account.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: DILAPIDATED",
       "o": {
        "A": "New",
        "B": "Run-down",
        "C": "Beautiful",
        "D": "Strong"
       },
       "a": "B",
       "concept": "'Dilapidated' describes something in a state of disrepair.",
       "method": "A dilapidated building is a run-down, decaying one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: EXUBERANT",
       "o": {
        "A": "Sad",
        "B": "Enthusiastic",
        "C": "Quiet",
        "D": "Tired"
       },
       "a": "B",
       "concept": "'Exuberant' means full of energy and enthusiasm.",
       "method": "An exuberant celebration is a lively, enthusiastic one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: FORTUITOUS",
       "o": {
        "A": "Planned",
        "B": "Lucky/accidental",
        "C": "Disastrous",
        "D": "Deliberate"
       },
       "a": "B",
       "concept": "'Fortuitous' means happening by chance, especially a lucky one.",
       "method": "A fortuitous meeting is a lucky, unplanned one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ZEALOUS",
       "o": {
        "A": "Indifferent",
        "B": "Enthusiastic",
        "C": "Lazy",
        "D": "Calm"
       },
       "a": "B",
       "concept": "'Zealous' means having great energy and enthusiasm for a cause.",
       "method": "A zealous supporter is an extremely enthusiastic one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: PLACID",
       "o": {
        "A": "Turbulent",
        "B": "Calm",
        "C": "Angry",
        "D": "Excited"
       },
       "a": "B",
       "concept": "'Placid' means calm and peaceful, not easily disturbed.",
       "method": "A placid lake is a calm, undisturbed one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: ENDORSE",
       "o": {
        "A": "Reject",
        "B": "Support/approve",
        "C": "Ignore",
        "D": "Question"
       },
       "a": "B",
       "concept": "'Endorse' means to publicly declare support for something.",
       "method": "To endorse a product/candidate is to publicly support them.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: SUBSTANTIAL",
       "o": {
        "A": "Small",
        "B": "Considerable",
        "C": "Weak",
        "D": "Uncertain"
       },
       "a": "B",
       "concept": "'Substantial' means of considerable size, amount, or importance.",
       "method": "A substantial improvement is a considerable, significant one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: TENACIOUS",
       "o": {
        "A": "Weak",
        "B": "Persistent",
        "C": "Careless",
        "D": "Timid"
       },
       "a": "B",
       "concept": "'Tenacious' means holding firmly to a course of action; persistent.",
       "method": "A tenacious negotiator is a persistent, determined one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: INNOVATIVE",
       "o": {
        "A": "Traditional",
        "B": "Original/creative",
        "C": "Boring",
        "D": "Outdated"
       },
       "a": "B",
       "concept": "'Innovative' means introducing new ideas or methods.",
       "method": "An innovative design is a creative, original one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: PRECARIOUS",
       "o": {
        "A": "Stable",
        "B": "Unsafe/uncertain",
        "C": "Comfortable",
        "D": "Simple"
       },
       "a": "B",
       "concept": "'Precarious' means not securely held or in a dangerous position.",
       "method": "A precarious situation is an unstable, risky one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word closest in meaning to: IMPARTIAL",
       "o": {
        "A": "Biased",
        "B": "Fair/unbiased",
        "C": "Uncertain",
        "D": "Harsh"
       },
       "a": "B",
       "concept": "'Impartial' means treating all sides equally, without bias.",
       "method": "An impartial judge is a fair, unbiased one.",
       "difficulty": "core"
      },
      {
       "q": "'Apparition' is synonymous with ______.",
       "o": {
        "A": "Ghost",
        "B": "Illusion",
        "C": "Dream",
        "D": "Shadow"
       },
       "a": "A",
       "concept": "An apparition is a ghostly or supernatural figure that appears suddenly.",
       "method": "Match the word to its closest single-word equivalent — an apparition is essentially a ghost or spectral vision.",
       "difficulty": "core"
      },
      {
       "q": "Which word is closest in meaning to PENURY?",
       "o": {
        "A": "Greed",
        "B": "Avarice",
        "C": "Poverty",
        "D": "Affluence"
       },
       "a": "C",
       "concept": "'Penury' is a slightly formal word for a very ordinary concept — extreme poverty.",
       "method": "Strip away the unfamiliar word and match it to its plain-English equivalent: poverty.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option nearest in meaning to the underlined word: 'The man is loved by everyone because he is so kind and COMPASSIONATE.'",
       "o": {
        "A": "cruel",
        "B": "wicked",
        "C": "loyal",
        "D": "tenderhearted"
       },
       "a": "D",
       "concept": "'Compassionate' describes deep sympathy and care for others' suffering.",
       "method": "'Tenderhearted' most closely captures the caring, sympathetic sense of 'compassionate'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option nearest in meaning to the underlined word: 'They looked CATASTROPHIC after the accident.'",
       "o": {
        "A": "sad",
        "B": "glad",
        "C": "pessimistic",
        "D": "awful"
       },
       "a": "D",
       "concept": "'Catastrophic' describes something disastrous or extremely bad in appearance/outcome.",
       "method": "'Awful' is the closest match to the severe, disastrous sense of 'catastrophic'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option nearest in meaning to the underlined word: 'The story was so PATHETIC that everyone cried.'",
       "o": {
        "A": "pitiable",
        "B": "awful",
        "C": "interesting",
        "D": "touching"
       },
       "a": "D",
       "concept": "Note that 'pathetic' here means 'evoking pity or sadness' (its original sense), not the informal modern meaning of 'inadequate'.",
       "method": "'Touching' best captures the emotionally moving sense of 'pathetic' as used in this sentence.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option nearest in meaning to the underlined word: 'The information is confidential and must not be REVEALED.'",
       "o": {
        "A": "told",
        "B": "shown",
        "C": "disclosed",
        "D": "exposed"
       },
       "a": "C",
       "concept": "'Revealed' in the context of confidential information matches formally 'disclosing' it.",
       "method": "'Disclosed' is the term most specifically associated with confidential information being made known.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word nearest in meaning to 'EXCULPATED'.",
       "o": {
        "A": "Indicted",
        "B": "Condemned",
        "C": "Acquitted",
        "D": "Inculcated"
       },
       "a": "C",
       "concept": "'Exculpate' means to clear someone of blame or guilt — the legal opposite of being indicted or condemned.",
       "method": "'Acquitted' (cleared of a charge) is the closest match to 'exculpated'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word nearest in meaning to 'ASTUTE'.",
       "o": {
        "A": "Slow",
        "B": "Stupid",
        "C": "Shrewd",
        "D": "Compassionate"
       },
       "a": "C",
       "concept": "'Astute' describes someone sharp-minded and good at making quick, accurate judgements.",
       "method": "'Shrewd' is the closest synonym, both describing sharp, practical intelligence.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word nearest in meaning to the underlined word: 'She was taken to the hospital because her condition had WORSENED.'",
       "o": {
        "A": "deteriorated",
        "B": "faulty",
        "C": "improved",
        "D": "declined slightly"
       },
       "a": "A",
       "concept": "'Worsened' and 'deteriorated' both describe a condition getting progressively worse.",
       "method": "'Deteriorated' most precisely matches 'worsened' in describing a declining medical condition.",
       "difficulty": "core"
      },
      {
       "q": "'She needs to know that she is a sine qua non of the assembly.' What is nearest in meaning to the underlined phrase?",
       "o": {
        "A": "Respected",
        "B": "Dispensable",
        "C": "Indispensable",
        "D": "Unimportant"
       },
       "a": "C",
       "concept": "'Sine qua non' is a Latin phrase meaning an essential, absolutely necessary condition or person.",
       "method": "Being a 'sine qua non' means being indispensable — essential and impossible to do without.",
       "difficulty": "core"
      }
     ],
     "freq": 98
    },
    {
     "id": "antonyms",
     "name": "Antonyms",
     "blurb": "Words that mean the opposite — easy marks once you stop confusing 'opposite' with 'similar but different'.",
     "concept_notes": [
      "An antonym is the exact opposite, not just 'a different word' — examiners often place a near-synonym as bait.",
      "Picture the word in a sentence, then flip that sentence's meaning — the word that fits the flipped sentence is your answer.",
      "Prefixes are a shortcut: un-, in-, dis-, im- often already mark a word as the antonym of a root you know.",
      "Eliminate unrelated options first, narrowing your real choice to two before deciding."
     ],
     "questions": [
      {
       "q": "Choose the word most OPPOSITE in meaning to: GENEROUS",
       "o": {
        "A": "Kind",
        "B": "Stingy",
        "C": "Wealthy",
        "D": "Honest"
       },
       "a": "B",
       "concept": "Generous = freely giving; opposite = unwilling to give.",
       "method": "Picture someone refusing to share — stingy.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: TRANSPARENT",
       "o": {
        "A": "Clear",
        "B": "Opaque",
        "C": "Fragile",
        "D": "Bright"
       },
       "a": "B",
       "concept": "Transparent = see-through; opposite = light cannot pass through.",
       "method": "Glass (transparent) vs a solid wall (opaque).",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: VOLUNTARY",
       "o": {
        "A": "Willing",
        "B": "Compulsory",
        "C": "Optional",
        "D": "Free"
       },
       "a": "B",
       "concept": "Voluntary = by choice; opposite = forced/required.",
       "method": "Voluntary service vs compulsory service — choice vs no choice.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: SCARCE",
       "o": {
        "A": "Rare",
        "B": "Abundant",
        "C": "Expensive",
        "D": "Small"
       },
       "a": "B",
       "concept": "Scarce = in short supply; opposite = plentiful.",
       "method": "Scarce water vs abundant water.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: HUMBLE",
       "o": {
        "A": "Modest",
        "B": "Arrogant",
        "C": "Shy",
        "D": "Poor"
       },
       "a": "B",
       "concept": "Humble = modest view of oneself; opposite = excessive pride.",
       "method": "Humble winner thanks everyone; arrogant winner boasts.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: RELUCTANT",
       "o": {
        "A": "Unwilling",
        "B": "Eager",
        "C": "Nervous",
        "D": "Slow"
       },
       "a": "B",
       "concept": "Reluctant = hesitant; opposite = enthusiastic.",
       "method": "A reluctant volunteer hesitates; an eager one jumps at it.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: GENUINE",
       "o": {
        "A": "Real",
        "B": "Fake",
        "C": "Simple",
        "D": "Costly"
       },
       "a": "B",
       "concept": "Genuine = authentic; opposite = not real.",
       "method": "A genuine diamond vs a fake one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ANCIENT",
       "o": {
        "A": "Historic",
        "B": "Modern",
        "C": "Foreign",
        "D": "Sacred"
       },
       "a": "B",
       "concept": "Ancient = distant past; opposite = present-day.",
       "method": "Ancient ruins vs a modern skyscraper.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: DILIGENT",
       "o": {
        "A": "Hardworking",
        "B": "Lazy",
        "C": "Clever",
        "D": "Careful"
       },
       "a": "B",
       "concept": "Diligent = steady careful effort; opposite = unwilling to work.",
       "method": "A diligent student studies; a lazy one avoids study.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: EXPAND",
       "o": {
        "A": "Grow",
        "B": "Shrink",
        "C": "Move",
        "D": "Cover"
       },
       "a": "B",
       "concept": "Expand = increase in size; opposite = decrease in size.",
       "method": "A balloon expands with air, shrinks without it.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: OPTIMISTIC",
       "o": {
        "A": "Hopeful",
        "B": "Pessimistic",
        "C": "Confident",
        "D": "Realistic"
       },
       "a": "B",
       "concept": "Optimistic = expecting good outcomes; opposite = expecting bad ones.",
       "method": "Glass half full (optimist) vs half empty (pessimist).",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: PERMANENT",
       "o": {
        "A": "Fixed",
        "B": "Temporary",
        "C": "Strong",
        "D": "Original"
       },
       "a": "B",
       "concept": "Permanent = lasting forever; opposite = lasting briefly.",
       "method": "A permanent contract vs a temporary one.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: SUPERIOR",
       "o": {
        "A": "Excellent",
        "B": "Inferior",
        "C": "Senior",
        "D": "Special"
       },
       "a": "B",
       "concept": "Superior = higher rank/quality; opposite = lower rank/quality.",
       "method": "Superior quality vs inferior quality.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: CONCEAL",
       "o": {
        "A": "Hide",
        "B": "Reveal",
        "C": "Protect",
        "D": "Store"
       },
       "a": "B",
       "concept": "Conceal = hide; opposite = make known/visible.",
       "method": "Concealing a secret vs revealing it.",
       "difficulty": "core"
      },
      {
       "q": "REAL is most opposite to:",
       "o": {
        "A": "Virtual",
        "B": "Physical",
        "C": "Solid",
        "D": "True"
       },
       "a": "A",
       "concept": "'Real' means actually existing; its opposite is a simulated, non-physical version.",
       "method": "Real world vs virtual world — direct opposites in modern usage.",
       "difficulty": "core"
      },
      {
       "q": "STABLE is most opposite to:",
       "o": {
        "A": "Strong",
        "B": "Grounded",
        "C": "Fluctuate",
        "D": "Fluid"
       },
       "a": "C",
       "concept": "Stable = steady, unchanging; opposite = constantly changing.",
       "method": "A stable price stays put; a fluctuating price keeps moving.",
       "difficulty": "core"
      },
      {
       "q": "EXPENSIVE is most opposite to:",
       "o": {
        "A": "Realistic",
        "B": "Cheap",
        "C": "Rare",
        "D": "Desirous"
       },
       "a": "B",
       "concept": "Expensive = costly; opposite = low-priced.",
       "method": "Expensive car vs a cheap car.",
       "difficulty": "core"
      },
      {
       "q": "LOVE is most opposite to:",
       "o": {
        "A": "Like",
        "B": "Hatred",
        "C": "Affection",
        "D": "Lust"
       },
       "a": "B",
       "concept": "Love = deep affection; opposite = deep dislike.",
       "method": "Simple, direct opposite pair: love vs hatred.",
       "difficulty": "core"
      },
      {
       "q": "SINCERITY is most opposite to:",
       "o": {
        "A": "Fraudulence",
        "B": "Decoy",
        "C": "Honesty",
        "D": "Deformity"
       },
       "a": "A",
       "concept": "Sincerity = genuine honesty; opposite = deceit/fraud.",
       "method": "A sincere offer is honest; a fraudulent one is deceitful.",
       "difficulty": "core"
      },
      {
       "q": "JUST (meaning fair) is most opposite to:",
       "o": {
        "A": "Unfair",
        "B": "Faithful",
        "C": "Crooked",
        "D": "Slothful"
       },
       "a": "A",
       "concept": "Just = fair and right; opposite = unfair/biased.",
       "method": "A just ruling is fair; an unfair one is not.",
       "difficulty": "core"
      },
      {
       "q": "KIND is most opposite to:",
       "o": {
        "A": "Competitive",
        "B": "Lousy",
        "C": "Wicked",
        "D": "Ruse"
       },
       "a": "C",
       "concept": "Kind = considerate and caring; opposite = cruel.",
       "method": "A kind act vs a wicked act.",
       "difficulty": "core"
      },
      {
       "q": "HARDWORKING is most opposite to:",
       "o": {
        "A": "Sleepy",
        "B": "Lazy",
        "C": "Rotten",
        "D": "Talkative"
       },
       "a": "B",
       "concept": "Hardworking = diligent; opposite = unwilling to work.",
       "method": "Direct pair: hardworking vs lazy.",
       "difficulty": "core"
      },
      {
       "q": "CUNNING is most opposite to:",
       "o": {
        "A": "Preferable",
        "B": "Straightforward",
        "C": "Concerning",
        "D": "Watchful"
       },
       "a": "B",
       "concept": "Cunning = sly and deceptive; opposite = honest and direct.",
       "method": "A cunning plan is sly; a straightforward one is open.",
       "difficulty": "core"
      },
      {
       "q": "BUILD is most opposite to:",
       "o": {
        "A": "Demobilize",
        "B": "Deliberate",
        "C": "Demolish",
        "D": "Renounce"
       },
       "a": "C",
       "concept": "Build = to construct; opposite = to tear down.",
       "method": "Build a house vs demolish a house.",
       "difficulty": "core"
      },
      {
       "q": "BOLD is most opposite to:",
       "o": {
        "A": "Sluggish",
        "B": "Slow",
        "C": "Shy",
        "D": "Defiant"
       },
       "a": "C",
       "concept": "Bold = confident and daring; opposite = timid.",
       "method": "A bold speaker vs a shy one.",
       "difficulty": "core"
      },
      {
       "q": "SUM (addition) is most opposite to:",
       "o": {
        "A": "Total",
        "B": "Difference",
        "C": "Aggregate",
        "D": "Addition"
       },
       "a": "B",
       "concept": "In arithmetic, 'sum' (the result of addition) is opposite to 'difference' (the result of subtraction).",
       "method": "Sum comes from adding; difference comes from subtracting — opposite operations.",
       "difficulty": "core"
      },
      {
       "q": "JOVIAL is most opposite to:",
       "o": {
        "A": "Friendly",
        "B": "Joking",
        "C": "Shouting",
        "D": "Unfriendly"
       },
       "a": "D",
       "concept": "Jovial = cheerful and good-humoured; opposite = unwelcoming.",
       "method": "A jovial host is warm; an unfriendly one is cold.",
       "difficulty": "core"
      },
      {
       "q": "FAMILIAR is most opposite to:",
       "o": {
        "A": "Ludicrous",
        "B": "Strange",
        "C": "Obscure",
        "D": "Forceful"
       },
       "a": "B",
       "concept": "Familiar = well-known; opposite = unknown/odd.",
       "method": "A familiar face vs a strange one.",
       "difficulty": "core"
      },
      {
       "q": "WHISPER is most opposite to:",
       "o": {
        "A": "Speaking",
        "B": "Startle",
        "C": "Shout",
        "D": "Argue"
       },
       "a": "C",
       "concept": "Whisper = to speak very quietly; opposite = to speak very loudly.",
       "method": "Volume opposites: whisper vs shout.",
       "difficulty": "core"
      },
      {
       "q": "FOE is most opposite to:",
       "o": {
        "A": "Friend",
        "B": "Companion",
        "C": "Colleague",
        "D": "Sibling"
       },
       "a": "A",
       "concept": "Foe = enemy; opposite = ally.",
       "method": "Direct pair: foe (enemy) vs friend.",
       "difficulty": "core"
      },
      {
       "q": "COLOSSAL is most opposite to:",
       "o": {
        "A": "Medium",
        "B": "Monumental",
        "C": "Minute",
        "D": "Mandate"
       },
       "a": "C",
       "concept": "Colossal = huge; opposite = tiny.",
       "method": "Colossal statue vs a minute (tiny) detail.",
       "difficulty": "core"
      },
      {
       "q": "SACRED is most opposite to:",
       "o": {
        "A": "Proximity",
        "B": "Profane",
        "C": "Proceed",
        "D": "Posit"
       },
       "a": "B",
       "concept": "Sacred = holy/revered; opposite = disrespectful of holy things.",
       "method": "A sacred site is holy; a profane act disrespects the holy.",
       "difficulty": "core"
      },
      {
       "q": "DETER is most opposite to:",
       "o": {
        "A": "Encourage",
        "B": "Enrage",
        "C": "Endow",
        "D": "Enlist"
       },
       "a": "A",
       "concept": "Deter = to discourage from doing something; opposite = to encourage it.",
       "method": "A deterrent discourages crime; encouragement promotes an action.",
       "difficulty": "core"
      },
      {
       "q": "VILE is most opposite to:",
       "o": {
        "A": "Foul",
        "B": "Lavish",
        "C": "Pleasant",
        "D": "Formidable"
       },
       "a": "C",
       "concept": "Vile = extremely unpleasant/disgusting; opposite = agreeable.",
       "method": "A vile smell is disgusting; a pleasant one is agreeable.",
       "difficulty": "core"
      },
      {
       "q": "RETREAT is most opposite to:",
       "o": {
        "A": "Proceed",
        "B": "Retrieve",
        "C": "Renounce",
        "D": "Resound"
       },
       "a": "A",
       "concept": "Retreat = to withdraw; opposite = to advance/continue forward.",
       "method": "An army retreats (withdraws) or proceeds (advances).",
       "difficulty": "core"
      },
      {
       "q": "DISCORD is most opposite to:",
       "o": {
        "A": "Discernment",
        "B": "Harmony",
        "C": "Hazard",
        "D": "Hardy"
       },
       "a": "B",
       "concept": "Discord = conflict/disagreement; opposite = peaceful agreement.",
       "method": "Musical opposites: discord (clashing notes) vs harmony (blending notes).",
       "difficulty": "core"
      },
      {
       "q": "ABOVE is most opposite to:",
       "o": {
        "A": "Over",
        "B": "Below",
        "C": "High",
        "D": "Low"
       },
       "a": "B",
       "concept": "A simple positional opposite pair.",
       "method": "Above vs below — direct spatial opposites.",
       "difficulty": "core"
      },
      {
       "q": "LIBERTY is most opposite to:",
       "o": {
        "A": "Freedom",
        "B": "Captivity",
        "C": "Stadium",
        "D": "Guilty"
       },
       "a": "B",
       "concept": "Liberty = freedom; opposite = imprisonment.",
       "method": "Liberty (free) vs captivity (imprisoned).",
       "difficulty": "core"
      },
      {
       "q": "SHARP is most opposite to:",
       "o": {
        "A": "Clever",
        "B": "Blunt",
        "C": "Keen",
        "D": "Even"
       },
       "a": "B",
       "concept": "Sharp (of an edge) = fine and cutting; opposite = dull.",
       "method": "A sharp knife vs a blunt one.",
       "difficulty": "core"
      },
      {
       "q": "PROFANE is most opposite to:",
       "o": {
        "A": "Beautiful",
        "B": "Sacred",
        "C": "Profuse",
        "D": "Stiff"
       },
       "a": "B",
       "concept": "Profane = disrespectful of holy things; opposite = holy/sacred.",
       "method": "Profane language disrespects; sacred things are revered.",
       "difficulty": "core"
      },
      {
       "q": "ALIEN (foreign) is most opposite to:",
       "o": {
        "A": "Pleasing",
        "B": "Disgusting",
        "C": "Indigenous",
        "D": "Irate"
       },
       "a": "C",
       "concept": "Alien = foreign/not native; opposite = native/local.",
       "method": "Alien species vs indigenous (native) species.",
       "difficulty": "core"
      },
      {
       "q": "ABUNDANT is most opposite to:",
       "o": {
        "A": "Surplus",
        "B": "Few",
        "C": "Brilliance",
        "D": "Birth"
       },
       "a": "B",
       "concept": "Abundant = plentiful; opposite = scarce, not many.",
       "method": "Abundant rainfall vs few drops of rain.",
       "difficulty": "core"
      },
      {
       "q": "CHEERFULNESS is the opposite of:",
       "o": {
        "A": "Hostility",
        "B": "War",
        "C": "Fighting",
        "D": "Kindness"
       },
       "a": "A",
       "concept": "Cheerfulness = a warm, friendly mood; opposite = an unfriendly, aggressive one.",
       "method": "A cheerful greeting is warm; a hostile one is unfriendly.",
       "difficulty": "core"
      },
      {
       "q": "Tonia was accused of immodest dressing. The word closest in meaning to 'immodest' here is:",
       "o": {
        "A": "Loud",
        "B": "Poor",
        "C": "Indecent",
        "D": "Costly"
       },
       "a": "C",
       "concept": "'Immodest' (of dress) means revealing or inappropriate — closest to 'indecent'.",
       "method": "Match the everyday sense of 'immodest dressing' to 'indecent dressing'.",
       "difficulty": "core"
      },
      {
       "q": "Which word is most nearly OPPOSITE to 'abolished' in: 'All the initiatives of the former president have been ___ by his successor' (opposite of maintained/continued)?",
       "o": {
        "A": "Modified",
        "B": "Criticized",
        "C": "Abolished",
        "D": "Ignored"
       },
       "a": "C",
       "concept": "If the original word implied continuation, its opposite implies ending it entirely — 'abolished'.",
       "method": "Picture a successor undoing everything the predecessor built — abolished captures total removal.",
       "difficulty": "core"
      },
      {
       "q": "The allies of the Chancellor will do anything to ensure he does not abdicate power. Which word is most OPPOSITE to 'allies' here?",
       "o": {
        "A": "Fret",
        "B": "Foes",
        "C": "Fans",
        "D": "Competitors"
       },
       "a": "B",
       "concept": "'Allies' means supporters; its direct opposite is 'foes' (enemies).",
       "method": "Allies support; foes oppose — direct opposites.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ALTRUISTIC (unselfishly concerned for others)",
       "o": {
        "A": "Generous",
        "B": "Selfish",
        "C": "Kind",
        "D": "Charitable"
       },
       "a": "B",
       "concept": "'Altruistic' describes selfless concern for others; its opposite is self-centred behaviour.",
       "method": "Altruistic = puts others first; selfish = puts self first — direct opposites.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: BENEVOLENT",
       "o": {
        "A": "Kind",
        "B": "Malevolent",
        "C": "Generous",
        "D": "Caring"
       },
       "a": "B",
       "concept": "Benevolent = kind/generous; opposite = wishing harm to others.",
       "method": "Bene- (good) vs Male- (bad) — opposite prefixes give opposite meanings.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ABUNDANCE",
       "o": {
        "A": "Surplus",
        "B": "Scarcity",
        "C": "Wealth",
        "D": "Plenty"
       },
       "a": "B",
       "concept": "Abundance = plenty; opposite = a shortage.",
       "method": "Abundance of food vs scarcity of food — opposite supply levels.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ADEQUATE",
       "o": {
        "A": "Sufficient",
        "B": "Inadequate",
        "C": "Enough",
        "D": "Plenty"
       },
       "a": "B",
       "concept": "Adequate = sufficient; opposite = not enough.",
       "method": "The prefix 'in-' directly negates the root word: in-adequate.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: DILIGENCE",
       "o": {
        "A": "Effort",
        "B": "Laziness",
        "C": "Care",
        "D": "Attention"
       },
       "a": "B",
       "concept": "Diligence = careful, steady effort; opposite = lack of effort.",
       "method": "A diligent worker puts in effort; a lazy one does not.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: TRANQUILLITY",
       "o": {
        "A": "Peace",
        "B": "Turmoil",
        "C": "Calm",
        "D": "Silence"
       },
       "a": "B",
       "concept": "Tranquillity = peacefulness; opposite = chaos/disturbance.",
       "method": "A tranquil scene is calm; a scene of turmoil is chaotic.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: FRUGALITY",
       "o": {
        "A": "Thriftiness",
        "B": "Extravagance",
        "C": "Economy",
        "D": "Saving"
       },
       "a": "B",
       "concept": "Frugality = careful spending; opposite = wasteful spending.",
       "method": "A frugal person saves; an extravagant person overspends.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: TRANSPARENCY",
       "o": {
        "A": "Openness",
        "B": "Secrecy",
        "C": "Clarity",
        "D": "Honesty"
       },
       "a": "B",
       "concept": "Transparency = openness about information; opposite = concealment.",
       "method": "A transparent government shares information; a secretive one hides it.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ELABORATE",
       "o": {
        "A": "Detailed",
        "B": "Simple",
        "C": "Complex",
        "D": "Thorough"
       },
       "a": "B",
       "concept": "Elaborate = detailed/complex; opposite = plain and uncomplicated.",
       "method": "An elaborate design is complex; a simple one is plain.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: OPTIMISM",
       "o": {
        "A": "Hope",
        "B": "Pessimism",
        "C": "Confidence",
        "D": "Positivity"
       },
       "a": "B",
       "concept": "Optimism = expecting good outcomes; opposite = expecting bad outcomes.",
       "method": "An optimist expects the best; a pessimist expects the worst.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ABUNDANT",
       "o": {
        "A": "Plentiful",
        "B": "Scarce",
        "C": "Rich",
        "D": "Full"
       },
       "a": "B",
       "concept": "Abundant = plentiful; opposite = in short supply.",
       "method": "Abundant rainfall vs scarce rainfall — opposite quantities.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: VOLUNTARILY",
       "o": {
        "A": "Willingly",
        "B": "Forcibly",
        "C": "Freely",
        "D": "Gladly"
       },
       "a": "B",
       "concept": "Voluntarily = by free choice; opposite = under compulsion.",
       "method": "Volunteering (choice) vs being forced (compulsion) — opposite means of action.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: SUBMISSIVE",
       "o": {
        "A": "Obedient",
        "B": "Defiant",
        "C": "Passive",
        "D": "Yielding"
       },
       "a": "B",
       "concept": "Submissive = compliant/yielding; opposite = openly resistant.",
       "method": "A submissive employee obeys; a defiant one resists.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: TIMID",
       "o": {
        "A": "Shy",
        "B": "Bold",
        "C": "Nervous",
        "D": "Quiet"
       },
       "a": "B",
       "concept": "Timid = shy/lacking courage; opposite = confident and daring.",
       "method": "A timid speaker hesitates; a bold one speaks confidently.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ARTIFICIAL",
       "o": {
        "A": "Fake",
        "B": "Natural",
        "C": "Synthetic",
        "D": "Man-made"
       },
       "a": "B",
       "concept": "Artificial = man-made; opposite = occurring in nature.",
       "method": "Artificial flowers vs natural flowers — made versus grown.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: TEMPORARY",
       "o": {
        "A": "Brief",
        "B": "Permanent",
        "C": "Short-lived",
        "D": "Fleeting"
       },
       "a": "B",
       "concept": "Temporary = lasting a short time; opposite = lasting indefinitely.",
       "method": "A temporary job vs a permanent job — short-term versus long-term.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: MODESTY",
       "o": {
        "A": "Humility",
        "B": "Arrogance",
        "C": "Shyness",
        "D": "Simplicity"
       },
       "a": "B",
       "concept": "Modesty = humbleness about one's abilities; opposite = excessive pride.",
       "method": "A modest achiever downplays success; an arrogant one boasts about it.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: FLEXIBLE",
       "o": {
        "A": "Adaptable",
        "B": "Rigid",
        "C": "Elastic",
        "D": "Adjustable"
       },
       "a": "B",
       "concept": "Flexible = able to bend/adapt; opposite = stiff and unyielding.",
       "method": "A flexible schedule can change; a rigid one cannot.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: DECLINE (as in a decline in sales)",
       "o": {
        "A": "Fall",
        "B": "Increase",
        "C": "Reduce",
        "D": "Drop"
       },
       "a": "B",
       "concept": "Decline = decrease; opposite = rise/grow.",
       "method": "Sales decline (fall) vs sales increase (rise) — opposite trends.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: TRIVIAL",
       "o": {
        "A": "Minor",
        "B": "Significant",
        "C": "Unimportant",
        "D": "Petty"
       },
       "a": "B",
       "concept": "Trivial = unimportant; opposite = important/significant.",
       "method": "A trivial detail is minor; a significant one matters greatly.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: AMICABLE",
       "o": {
        "A": "Friendly",
        "B": "Hostile",
        "C": "Peaceful",
        "D": "Cordial"
       },
       "a": "B",
       "concept": "Amicable = friendly; opposite = unfriendly/antagonistic.",
       "method": "An amicable settlement is friendly; a hostile dispute is antagonistic.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: CREDIBLE",
       "o": {
        "A": "Believable",
        "B": "Implausible",
        "C": "Convincing",
        "D": "Trustworthy"
       },
       "a": "B",
       "concept": "Credible = believable; opposite = hard to believe.",
       "method": "A credible story is believable; an implausible one is not.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: EXUBERANT",
       "o": {
        "A": "Lively",
        "B": "Subdued",
        "C": "Energetic",
        "D": "Enthusiastic"
       },
       "a": "B",
       "concept": "Exuberant = full of energy; opposite = restrained/quiet.",
       "method": "An exuberant crowd is lively; a subdued one is quiet and restrained.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: METICULOUS",
       "o": {
        "A": "Careful",
        "B": "Careless",
        "C": "Precise",
        "D": "Thorough"
       },
       "a": "B",
       "concept": "Meticulous = very careful with detail; opposite = negligent.",
       "method": "A meticulous worker is careful; a careless one is sloppy.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: RESILIENT",
       "o": {
        "A": "Tough",
        "B": "Fragile",
        "C": "Strong",
        "D": "Adaptable"
       },
       "a": "B",
       "concept": "Resilient = able to recover quickly; opposite = easily broken/weak.",
       "method": "A resilient economy bounces back; a fragile one collapses easily.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ZEALOUS",
       "o": {
        "A": "Enthusiastic",
        "B": "Apathetic",
        "C": "Eager",
        "D": "Passionate"
       },
       "a": "B",
       "concept": "Zealous = enthusiastic; opposite = showing no interest.",
       "method": "A zealous fan cares deeply; an apathetic one doesn't care at all.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: PLACID",
       "o": {
        "A": "Calm",
        "B": "Turbulent",
        "C": "Peaceful",
        "D": "Serene"
       },
       "a": "B",
       "concept": "Placid = calm; opposite = agitated/stormy.",
       "method": "A placid sea is calm; a turbulent sea is stormy.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: SUBSTANTIAL",
       "o": {
        "A": "Considerable",
        "B": "Negligible",
        "C": "Large",
        "D": "Significant"
       },
       "a": "B",
       "concept": "Substantial = considerable; opposite = insignificant/tiny.",
       "method": "A substantial sum is large; a negligible sum is barely worth mentioning.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: ENDORSE",
       "o": {
        "A": "Support",
        "B": "Denounce",
        "C": "Approve",
        "D": "Recommend"
       },
       "a": "B",
       "concept": "Endorse = support publicly; opposite = criticise/condemn publicly.",
       "method": "To endorse a plan is to back it; to denounce it is to publicly condemn it.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: TENACIOUS",
       "o": {
        "A": "Persistent",
        "B": "Irresolute",
        "C": "Determined",
        "D": "Firm"
       },
       "a": "B",
       "concept": "Tenacious = holding firm; opposite = wavering, lacking resolve.",
       "method": "A tenacious person doesn't give up; an irresolute one wavers easily.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: PRECARIOUS",
       "o": {
        "A": "Risky",
        "B": "Secure",
        "C": "Unstable",
        "D": "Dangerous"
       },
       "a": "B",
       "concept": "Precarious = unsafe/uncertain; opposite = safe and stable.",
       "method": "A precarious job is insecure; a secure job is stable.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: INNOVATIVE",
       "o": {
        "A": "Creative",
        "B": "Conventional",
        "C": "Original",
        "D": "Modern"
       },
       "a": "B",
       "concept": "Innovative = new/original; opposite = following established, ordinary methods.",
       "method": "An innovative approach breaks new ground; a conventional one follows tradition.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most OPPOSITE in meaning to: IMPARTIAL",
       "o": {
        "A": "Fair",
        "B": "Biased",
        "C": "Neutral",
        "D": "Objective"
       },
       "a": "B",
       "concept": "Impartial = unbiased; opposite = favouring one side.",
       "method": "An impartial referee is fair; a biased one favours one team.",
       "difficulty": "core"
      },
      {
       "q": "Sola's car is badly damaged; he has to look for an expert mechanic to fix it. Choose the word OPPOSITE in meaning to 'expert'.",
       "o": {
        "A": "Uneducated",
        "B": "Amateurish",
        "C": "Awkward",
        "D": "Scientific"
       },
       "a": "B",
       "concept": "An antonym must match the exact sense of the word in context — here, 'expert' means highly skilled at a trade.",
       "method": "The opposite of a skilled professional is someone unskilled/inexperienced: amateurish.",
       "difficulty": "core"
      },
      {
       "q": "Which word is almost OPPOSITE in meaning to OBVIOUS?",
       "o": {
        "A": "Ambiguous",
        "B": "Tentative",
        "C": "Vague",
        "D": "Uncertain"
       },
       "a": "A",
       "concept": "'Obvious' means clear and unmistakable — its opposite should mean unclear or open to more than one interpretation.",
       "method": "'Ambiguous' (having more than one possible meaning) is the closest true opposite of 'obvious', more precise than merely 'vague' or 'uncertain'.",
       "difficulty": "core"
      },
      {
       "q": "Which word is nearly OPPOSITE in meaning to CLEAR (as in a liquid)?",
       "o": {
        "A": "Dull",
        "B": "Turbid",
        "C": "Opaque",
        "D": "Pretentious"
       },
       "a": "B",
       "concept": "Context narrows which sense of 'clear' is being tested — here it's about a liquid's transparency.",
       "method": "'Turbid' describes a liquid that is cloudy/muddy — the direct opposite of a clear liquid.",
       "difficulty": "core"
      },
      {
       "q": "Which word is nearly OPPOSITE in meaning to PIOUS?",
       "o": {
        "A": "Wealthy",
        "B": "Arrogant",
        "C": "Irreverent",
        "D": "Moral"
       },
       "a": "C",
       "concept": "'Pious' describes someone devoutly religious and respectful of sacred things.",
       "method": "The opposite of showing religious reverence is showing a lack of it: irreverent.",
       "difficulty": "core"
      },
      {
       "q": "Which word is almost OPPOSITE in meaning to PENURY?",
       "o": {
        "A": "Avarice",
        "B": "Greed",
        "C": "Poverty",
        "D": "Affluence"
       },
       "a": "D",
       "concept": "'Penury' means extreme poverty — its opposite is a state of wealth and abundance.",
       "method": "'Affluence' (great wealth) is the direct opposite of penury; avarice and greed are unrelated character traits, not wealth states.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word most nearly OPPOSITE in meaning to AGGRAVATE.",
       "o": {
        "A": "Worsen",
        "B": "Ameliorate",
        "C": "Provoke",
        "D": "Irritate"
       },
       "a": "B",
       "concept": "'Aggravate' means to make a situation worse — its antonym should mean to make it better.",
       "method": "'Ameliorate' means to improve or make better — the precise opposite of aggravate.",
       "difficulty": "core"
      },
      {
       "q": "What is the antonym of NIGGARDLY?",
       "o": {
        "A": "Parsimoniously",
        "B": "Cheerfully",
        "C": "Generously",
        "D": "Willingly"
       },
       "a": "C",
       "concept": "'Niggardly' means stingy or reluctant to spend/give — its opposite describes freely giving.",
       "method": "'Generously' is the direct opposite of niggardly (stingy).",
       "difficulty": "core"
      },
      {
       "q": "Choose the word opposite in meaning to the underlined word: 'My brother is LOQUACIOUS and fun to be with.'",
       "o": {
        "A": "talkative",
        "B": "chatty",
        "C": "garrulous",
        "D": "reserved"
       },
       "a": "D",
       "concept": "'Loquacious' means very talkative — talkative, chatty, and garrulous are all synonyms, not opposites.",
       "method": "'Reserved' (quiet, restrained in speech) is the true opposite of loquacious; the other three options are simply synonyms of it.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word opposite in meaning to PROFANE.",
       "o": {
        "A": "Beautiful",
        "B": "Sacred",
        "C": "Profuse",
        "D": "Stiff"
       },
       "a": "B",
       "concept": "'Profane' describes something showing disrespect for what is holy; its opposite describes something holy or reverent.",
       "method": "'Sacred' (holy, deserving reverence) is the direct opposite of profane.",
       "difficulty": "core"
      },
      {
       "q": "Choose the word opposite in meaning to the underlined word: 'She was very much respected, though she had no PERMANENT position in the company.'",
       "o": {
        "A": "Stable",
        "B": "Fixed",
        "C": "Temporary",
        "D": "Lasting"
       },
       "a": "C",
       "concept": "'Permanent' describes something lasting indefinitely; its opposite describes something that only lasts for a limited time.",
       "method": "'Temporary' (lasting only for a time) is the direct opposite of 'permanent' (lasting indefinitely).",
       "difficulty": "core"
      },
      {
       "q": "Choose the word opposite in meaning to 'AN ANTIDOTE' (as in 'the presidential system is an antidote to some political ailments').",
       "o": {
        "A": "An answer",
        "B": "A reply",
        "C": "An inquiry",
        "D": "An obstacle"
       },
       "a": "D",
       "concept": "An antidote counters or solves a problem; its opposite would instead hinder or block a solution.",
       "method": "If an antidote helps cure an 'ailment', its opposite is something that gets in the way — an obstacle.",
       "difficulty": "core"
      }
     ],
     "freq": 91
    },
    {
     "id": "vocabcontext",
     "name": "Vocabulary in Context & Word Choice",
     "blurb": "Picking the one word that actually fits a real sentence — tests vocabulary AND collocation together, exactly as the CBT does.",
     "concept_notes": [
      "These questions test whether you know a word's PRECISE, narrow meaning, not just a rough idea of it.",
      "Read the whole sentence for context clues (contrast words like 'but', definitions given directly) before checking the options.",
      "Uncountable nouns (information, petrol, water, advice) never take 'a/an' or a plural '-s', and never pair with 'many' or 'few'.",
      "When two options are close synonyms, the exam usually wants the one that collocates naturally in that exact sentence."
     ],
     "questions": [
      {
       "q": "We're delighted that you came—this is the correct completion of: We're ___ that you came.",
       "o": {
        "A": "being delighted",
        "B": "delight",
        "C": "delighted",
        "D": "delightful"
       },
       "a": "C",
       "concept": "After 'be' (are/were), use the past-participle adjective form: delighted.",
       "method": "'We're delighted' — delighted describes the subject's feeling.",
       "difficulty": "core"
      },
      {
       "q": "The police have commenced a preliminary _____ into the murder of a politician.",
       "o": {
        "A": "action",
        "B": "examination",
        "C": "interrogation",
        "D": "investigation"
       },
       "a": "D",
       "concept": "'Investigation' is the precise term for official inquiry into a crime.",
       "method": "Match the formal register: police open an 'investigation', not a generic 'action'.",
       "difficulty": "core"
      },
      {
       "q": "My friend asked me to drink _____ water.",
       "o": {
        "A": "a few",
        "B": "a little",
        "C": "few",
        "D": "some"
       },
       "a": "D",
       "concept": "'Water' is uncountable; 'some' works generally for an unspecified uncountable amount in a request.",
       "method": "'Few/a few' only pair with countable nouns — eliminate them first for 'water'.",
       "difficulty": "core"
      },
      {
       "q": "The period between childhood and adulthood is called _____.",
       "o": {
        "A": "adolescence",
        "B": "boyhood",
        "C": "girlhood",
        "D": "puberty"
       },
       "a": "A",
       "concept": "'Adolescence' is the precise term for the transitional life stage between childhood and adulthood.",
       "method": "Match the definition to its single correct technical term.",
       "difficulty": "core"
      },
      {
       "q": "My grandmother is _____ because she can read and write.",
       "o": {
        "A": "educated",
        "B": "knowledgeable",
        "C": "learned",
        "D": "literate"
       },
       "a": "D",
       "concept": "'Literate' specifically means able to read and write — the other options describe broader knowledge.",
       "method": "The clue defines exactly one word: the ability to read/write = literate.",
       "difficulty": "core"
      },
      {
       "q": "Companies are encouraged to _____ sporting competitions.",
       "o": {
        "A": "host",
        "B": "introduce",
        "C": "organize",
        "D": "sponsor"
       },
       "a": "D",
       "concept": "'Sponsor' is the standard collocation for a company financially supporting an event.",
       "method": "Companies fund events — the precise business term is 'sponsor'.",
       "difficulty": "core"
      },
      {
       "q": "I need a statement of _____ from my bankers to know how much money I have.",
       "o": {
        "A": "account",
        "B": "bill",
        "C": "deposit",
        "D": "voucher"
       },
       "a": "A",
       "concept": "A 'statement of account' is the fixed banking term for a record of transactions/balance.",
       "method": "Learn as a fixed banking phrase: statement of account.",
       "difficulty": "core"
      },
      {
       "q": "It was claimed that the elections were flawed because of widespread _____.",
       "o": {
        "A": "balloting",
        "B": "lotting",
        "C": "rigging",
        "D": "voting"
       },
       "a": "C",
       "concept": "'Rigging' means manipulating an outcome dishonestly — the term for election fraud.",
       "method": "'Flawed' + dishonesty context signals 'rigging', not neutral words like voting.",
       "difficulty": "core"
      },
      {
       "q": "The guavas tasted so _____ that I could not eat any of them.",
       "o": {
        "A": "sharp",
        "B": "sour",
        "C": "sweet",
        "D": "good"
       },
       "a": "B",
       "concept": "Unripe or bad-tasting fruit is typically described as 'sour'.",
       "method": "Something you can't bear to eat due to taste is usually 'sour', not sweet or good.",
       "difficulty": "core"
      },
      {
       "q": "The _____ asked his vice to sign the certificate because he was very busy.",
       "o": {
        "A": "matron",
        "B": "principal",
        "C": "secretary",
        "D": "tutor"
       },
       "a": "B",
       "concept": "A school head who has a 'vice' (deputy) and signs certificates is the 'principal'.",
       "method": "'Vice' + 'certificate' signals a school head — principal.",
       "difficulty": "core"
      },
      {
       "q": "John instructed his driver to ensure the tank is filled with _____.",
       "o": {
        "A": "petrols",
        "B": "much petrol",
        "C": "petrol",
        "D": "a petrol"
       },
       "a": "C",
       "concept": "'Petrol' is an uncountable noun — it takes no plural 's' and no indefinite article 'a'.",
       "method": "Uncountable nouns stand alone: 'petrol', not 'petrols' or 'a petrol'.",
       "difficulty": "core"
      },
      {
       "q": "The policeman has gathered _____ to complete the investigation.",
       "o": {
        "A": "few information",
        "B": "many informations",
        "C": "sufficient information",
        "D": "an information"
       },
       "a": "C",
       "concept": "'Information' is uncountable — it has no plural form and takes 'sufficient/much', not 'many/few'.",
       "method": "Uncountable nouns pair with sufficient/much, never 'many' or a plural 's'.",
       "difficulty": "core"
      },
      {
       "q": "Doctor: How is the ulcer patient? Nurse: He is recovering _____ faster than we expected.",
       "o": {
        "A": "very",
        "B": "much",
        "C": "too",
        "D": "so"
       },
       "a": "B",
       "concept": "'Much' intensifies a comparative adjective ('faster'); 'very' cannot be used before comparatives.",
       "method": "Before a comparative (-er word), use 'much', never 'very'.",
       "difficulty": "core"
      },
      {
       "q": "The last book is the _____ interesting of the books we have read this term.",
       "o": {
        "A": "very",
        "B": "much",
        "C": "more",
        "D": "most"
       },
       "a": "D",
       "concept": "Comparing three or more items (superlative) requires 'most' + adjective, not 'more'.",
       "method": "'Of the books' (a group of 3+) signals superlative: most interesting.",
       "difficulty": "core"
      },
      {
       "q": "The Youngman came to Ilorin _____ the intention of staying with his friend.",
       "o": {
        "A": "for",
        "B": "by",
        "C": "on",
        "D": "with"
       },
       "a": "D",
       "concept": "'With the intention of' is the fixed collocation for stating a purpose.",
       "method": "Learn as a set phrase: with the intention of + -ing.",
       "difficulty": "core"
      },
      {
       "q": "The journalist refused to divulge the source of his information; 'divulge' here means to:",
       "o": {
        "A": "disclose",
        "B": "confirm",
        "C": "inform",
        "D": "extract"
       },
       "a": "A",
       "concept": "'Divulge' means to reveal or make known private information.",
       "method": "'Refused to divulge' = refused to disclose.",
       "difficulty": "core"
      },
      {
       "q": "As soon as Shehu realized his mistake, he did everything to rectify it; 'rectify' means to:",
       "o": {
        "A": "destroy",
        "B": "relieve",
        "C": "correct",
        "D": "ignore"
       },
       "a": "C",
       "concept": "'Rectify' means to put right a mistake.",
       "method": "A mistake is rectified = corrected.",
       "difficulty": "core"
      },
      {
       "q": "Ada was skeptical about the story Ifeoma told her; 'skeptical' means:",
       "o": {
        "A": "Ignorant",
        "B": "Doubtful",
        "C": "Confused",
        "D": "Happy"
       },
       "a": "B",
       "concept": "'Skeptical' means having doubts about the truth of something.",
       "method": "A skeptic doubts — doubtful.",
       "difficulty": "core"
      },
      {
       "q": "The lawyer said the accused's inaction made him culpable; 'culpable' means:",
       "o": {
        "A": "Liable",
        "B": "Guilty",
        "C": "Blameworthy",
        "D": "Unreliable"
       },
       "a": "A",
       "concept": "'Culpable' means deserving blame or responsible for wrongdoing.",
       "method": "Legally, culpable = liable/at fault for the act.",
       "difficulty": "core"
      },
      {
       "q": "The boss is quite inflexible once she has made up her mind; 'inflexible' means:",
       "o": {
        "A": "Wicked",
        "B": "Relaxed",
        "C": "Unyielding",
        "D": "Excited"
       },
       "a": "C",
       "concept": "'Inflexible' means unwilling to change or compromise.",
       "method": "'In-' (not) + flexible = not bending = unyielding.",
       "difficulty": "core"
      },
      {
       "q": "Working in the field is hard when your machete is not sharp but _____.",
       "o": {
        "A": "lagged",
        "B": "coarse",
        "C": "sound",
        "D": "blunt"
       },
       "a": "D",
       "concept": "The direct opposite of a sharp blade is a blunt one.",
       "method": "Contrast signaled by 'not sharp but ___' → blunt.",
       "difficulty": "core"
      },
      {
       "q": "The transition to civil rule came to an _____ end (i.e. a sudden, unexpected one).",
       "o": {
        "A": "anticipated",
        "B": "abrupt",
        "C": "invidious",
        "D": "unhappy"
       },
       "a": "B",
       "concept": "'Abrupt' means sudden and unexpected.",
       "method": "The clue defines it directly: sudden/unexpected = abrupt.",
       "difficulty": "core"
      },
      {
       "q": "Mrs Apata is always moody while her husband is forever _____.",
       "o": {
        "A": "willing",
        "B": "cheerful",
        "C": "tender",
        "D": "loving"
       },
       "a": "B",
       "concept": "The sentence contrasts moods — moody (gloomy) vs a positive-mood word.",
       "method": "Look for the word that best contrasts with 'moody': cheerful.",
       "difficulty": "core"
      },
      {
       "q": "The meeting was a _____ one, lasting many hours.",
       "o": {
        "A": "protracted",
        "B": "tractable",
        "C": "distracted",
        "D": "detract"
       },
       "a": "A",
       "concept": "'Protracted' means lasting longer than expected or usual.",
       "method": "'Lasting many hours' defines the word directly: protracted.",
       "difficulty": "core"
      },
      {
       "q": "What you said was wrong, and you had better _____ it.",
       "o": {
        "A": "retract",
        "B": "detract",
        "C": "tractable",
        "D": "distract"
       },
       "a": "A",
       "concept": "'Retract' means to withdraw a statement previously made.",
       "method": "A wrong statement should be 'retracted' (taken back).",
       "difficulty": "core"
      },
      {
       "q": "His attention was _____ by the noise of the jet craft.",
       "o": {
        "A": "protracted",
        "B": "retract",
        "C": "distracted",
        "D": "detract"
       },
       "a": "C",
       "concept": "'Distracted' means having one's attention diverted elsewhere.",
       "method": "Noise pulls attention away — distracted.",
       "difficulty": "core"
      },
      {
       "q": "The new bakery will _____ one thousand loaves of bread daily.",
       "o": {
        "A": "turn over",
        "B": "turn out",
        "C": "turn up",
        "D": "poll down"
       },
       "a": "B",
       "concept": "'Turn out' (phrasal verb) means to produce goods in quantity.",
       "method": "A factory/bakery 'turns out' products — fixed industrial usage.",
       "difficulty": "core"
      },
      {
       "q": "Ahmadu would have arrived earlier but he was _____ in heavy traffic.",
       "o": {
        "A": "held up",
        "B": "help down",
        "C": "held off",
        "D": "held about"
       },
       "a": "A",
       "concept": "'Held up' (phrasal verb) means delayed.",
       "method": "Being delayed by traffic = held up.",
       "difficulty": "core"
      },
      {
       "q": "Customers should settle bills promptly, otherwise supply may be _____.",
       "o": {
        "A": "blown off",
        "B": "cut out",
        "C": "blown out",
        "D": "cut off"
       },
       "a": "D",
       "concept": "'Cut off' (phrasal verb) means to stop a supply of something (electricity, water).",
       "method": "Unpaid utility bills lead to supply being 'cut off'.",
       "difficulty": "core"
      },
      {
       "q": "The university awarded _____ doctorate degrees to four distinguished members.",
       "o": {
        "A": "honourable",
        "B": "ceremonies",
        "C": "ceremonial",
        "D": "honorary"
       },
       "a": "D",
       "concept": "'Honorary' describes a degree/title given as an honour, without the usual academic requirements.",
       "method": "A degree given purely as recognition is 'honorary', not 'honourable'.",
       "difficulty": "core"
      },
      {
       "q": "The students threatened to embark on a _____ of lectures if demands were not met.",
       "o": {
        "A": "condonation",
        "B": "rejection",
        "C": "strike",
        "D": "boycott"
       },
       "a": "D",
       "concept": "'Boycott' means to deliberately avoid/refuse participation in something as a protest.",
       "method": "Refusing to attend lectures as protest = a boycott (of lectures), while 'strike' would fit 'strike action' instead.",
       "difficulty": "core"
      },
      {
       "q": "The late politician had an _____ ambition to rule the country.",
       "o": {
        "A": "obtuse",
        "B": "insipid",
        "C": "infantile",
        "D": "inordinate"
       },
       "a": "D",
       "concept": "'Inordinate' means excessive or unreasonably great.",
       "method": "An excessive, overwhelming ambition = inordinate.",
       "difficulty": "core"
      },
      {
       "q": "I need to know what he was thinking _____ (i.e. the subject of his thoughts).",
       "o": {
        "A": "at",
        "B": "with",
        "C": "in",
        "D": "on"
       },
       "a": "D",
       "concept": "'Think ON/ABOUT something' — in this exam's tested form, 'thinking on' captures the topic of thought.",
       "method": "Fixed collocation tested here: thinking on a matter.",
       "difficulty": "core"
      },
      {
       "q": "Idrees was so deep in thought that I don't know what he was thinking _____.",
       "o": {
        "A": "about",
        "B": "over",
        "C": "off",
        "D": "on"
       },
       "a": "A",
       "concept": "'Think ABOUT something' is the standard collocation for the topic of one's thoughts.",
       "method": "The everyday form: thinking about a subject.",
       "difficulty": "core"
      },
      {
       "q": "The man's _____ paid off as he was able to sell all the goods.",
       "o": {
        "A": "sailmanship",
        "B": "salemanship",
        "C": "sailsmanship",
        "D": "salesmanship"
       },
       "a": "D",
       "concept": "'Salesmanship' is the correct spelling for the skill of selling.",
       "method": "Sales + man + ship — salesmanship.",
       "difficulty": "core"
      },
      {
       "q": "The meeting could not hold but the _____ was not formed anyway.",
       "o": {
        "A": "qourum",
        "B": "quorrum",
        "C": "quorum",
        "D": "quorumm"
       },
       "a": "C",
       "concept": "'Quorum' (correct spelling) is the minimum number of members needed for a valid meeting.",
       "method": "Q-U-O-R-U-M — memorise this common exam spelling trap.",
       "difficulty": "core"
      },
      {
       "q": "The issues have been _____ to an Arbitration panel for resolution.",
       "o": {
        "A": "reverred",
        "B": "referred",
        "C": "revered",
        "D": "refered"
       },
       "a": "B",
       "concept": "'Referred' (double 'r', double 'r' pattern: re-FER-red) means passed on for decision.",
       "method": "Refer→referred (the final consonant doubles before -ed).",
       "difficulty": "core"
      },
      {
       "q": "The woman was _____ for insolence.",
       "o": {
        "A": "quarried",
        "B": "querried",
        "C": "quearried",
        "D": "queried"
       },
       "a": "D",
       "concept": "'Queried' (correct spelling) means questioned/challenged.",
       "method": "Query→queried — note the single 'r'.",
       "difficulty": "core"
      },
      {
       "q": "The way to stop frivolous, sensational publications is to ___ the press.",
       "o": {
        "A": "close",
        "B": "gag",
        "C": "burn",
        "D": "praise"
       },
       "a": "B",
       "concept": "'Gag the press' is a fixed idiom meaning to silence or restrict media freedom.",
       "method": "Learn as a fixed political/media idiom: gag the press.",
       "difficulty": "core"
      },
      {
       "q": "The article in the newspaper focusing on inflation and offering the writer's opinion is called an",
       "o": {
        "A": "advertisement",
        "B": "editorial",
        "C": "obituary",
        "D": "index"
       },
       "a": "B",
       "concept": "An 'editorial' is an opinion piece reflecting the publication's viewpoint on an issue.",
       "method": "Match the definition (opinion piece on a current issue) directly to 'editorial'.",
       "difficulty": "core"
      },
      {
       "q": "The correctly spelt word is:",
       "o": {
        "A": "Accomodation",
        "B": "Acommodation",
        "C": "Accommodation",
        "D": "Acomodation"
       },
       "a": "C",
       "concept": "'Accommodation' has a double 'c' and a double 'm' — a classic spelling trap.",
       "method": "Memorise the double letters: acCOMModation.",
       "difficulty": "core"
      },
      {
       "q": "\"The team's win, ___ against all odds, was a proud moment for the school.\"",
       "o": {
        "A": "achieve",
        "B": "achieved",
        "C": "achieving",
        "D": "achievement"
       },
       "a": "B",
       "concept": "A past participle ('achieved') can function as a reduced relative clause modifying the noun before it.",
       "method": "'The win, achieved against all odds' = the win that was achieved.",
       "difficulty": "core"
      },
      {
       "q": "\"The judge restrained the landlord from ___ the tenant without due process.\"",
       "o": {
        "A": "evacuating",
        "B": "ejecting",
        "C": "erasing",
        "D": "expelling from house"
       },
       "a": "B",
       "concept": "'Eject' is the precise legal term for forcibly removing a tenant from a property.",
       "method": "Legal register calls for the precise term: eject, not the more general 'expel'.",
       "difficulty": "core"
      },
      {
       "q": "\"The kidnappers demanded a ___ of ₦50,000 for the release of their victim.\"",
       "o": {
        "A": "fine",
        "B": "ransom",
        "C": "fee",
        "D": "tax"
       },
       "a": "B",
       "concept": "'Ransom' is the specific term for money demanded for a kidnapped person's release.",
       "method": "Match the context (kidnapping, demand for release) directly to 'ransom'.",
       "difficulty": "core"
      },
      {
       "q": "\"He was charged with complicity ___ the abortive coup.\"",
       "o": {
        "A": "in",
        "B": "about",
        "C": "with",
        "D": "for"
       },
       "a": "A",
       "concept": "'Complicity IN a crime/plot' is the fixed legal collocation.",
       "method": "Learn as one unit: complicity in (a crime), not about/with/for.",
       "difficulty": "core"
      },
      {
       "q": "\"He was acting ___ the instructions of the principal.\"",
       "o": {
        "A": "by",
        "B": "on",
        "C": "for",
        "D": "with"
       },
       "a": "B",
       "concept": "'Act ON instructions' is the fixed collocation meaning to follow/comply with them.",
       "method": "Learn as one unit: act on instructions.",
       "difficulty": "core"
      },
      {
       "q": "\"He could not keep pace ___ the fast-moving motorcycle.\"",
       "o": {
        "A": "along",
        "B": "with",
        "C": "down",
        "D": "on"
       },
       "a": "B",
       "concept": "'Keep pace WITH something' is the fixed idiom for matching its speed.",
       "method": "Learn as one unit: keep pace with, never keep pace down/along/on.",
       "difficulty": "core"
      },
      {
       "q": "\"I want everybody to learn the last ten lines of the poem ___ heart.\"",
       "o": {
        "A": "with",
        "B": "in",
        "C": "for",
        "D": "by"
       },
       "a": "D",
       "concept": "'Learn/know something BY heart' is the fixed idiom for memorising it perfectly.",
       "method": "Learn as one unit: by heart, not with/in/for heart.",
       "difficulty": "core"
      },
      {
       "q": "\"They went ___ talking after midnight, despite having to wake early.\"",
       "o": {
        "A": "by",
        "B": "for",
        "C": "on",
        "D": "with"
       },
       "a": "C",
       "concept": "'Go ON doing something' is the fixed phrasal verb meaning to continue.",
       "method": "Learn as one unit: went on talking = continued talking.",
       "difficulty": "core"
      },
      {
       "q": "\"The secretary general was shocked at the number of ___ recruited into the conflict.\"",
       "o": {
        "A": "child's soldiers",
        "B": "childish soldiers",
        "C": "children soldiers",
        "D": "child soldiers"
       },
       "a": "D",
       "concept": "'Child soldiers' is the fixed, correct compound term for children used in armed conflict.",
       "method": "Learn this as a fixed compound noun: child soldiers (not childish or possessive forms).",
       "difficulty": "core"
      },
      {
       "q": "\"In spite of Shade's good looks, her hair is always ___.\"",
       "o": {
        "A": "unkept",
        "B": "unkempt",
        "C": "unwashed",
        "D": "uncared for"
       },
       "a": "B",
       "concept": "'Unkempt' (not 'unkept') is the correct word for messy, untidy hair.",
       "method": "Watch the spelling trap: it's 'unkempt', not 'unkept'.",
       "difficulty": "core"
      },
      {
       "q": "\"A nursery rhyme is used to teach pupils how to spell the word ___.\"",
       "o": {
        "A": "hipoppotamus",
        "B": "hippopotamus",
        "C": "hipopotamus",
        "D": "hippoppotamus"
       },
       "a": "B",
       "concept": "'Hippopotamus' has a double 'p' after 'hip' and a single 'p' before '-otamus'.",
       "method": "Break it down: hip-po-pot-amus — double p only in the first syllable pair.",
       "difficulty": "core"
      },
      {
       "q": "\"He is easily the ___ of the lot.\"",
       "o": {
        "A": "brightest",
        "B": "more bright",
        "C": "most bright",
        "D": "brighter"
       },
       "a": "A",
       "concept": "Comparing a person against an entire group ('the lot') requires the superlative form.",
       "method": "'Of the lot' signals a group of 3+ → superlative: brightest.",
       "difficulty": "core"
      },
      {
       "q": "\"Without ___ words, he accused the minister directly of corruption.\"",
       "o": {
        "A": "mixing",
        "B": "minding",
        "C": "mincing",
        "D": "missing"
       },
       "a": "C",
       "concept": "'Without mincing words' is a fixed idiom for speaking bluntly and directly.",
       "method": "Learn as a fixed idiom: mince words = speak evasively; without mincing = speaking directly.",
       "difficulty": "core"
      },
      {
       "q": "\"We walked quietly past the nursery so as ___ wake the sleeping baby.\"",
       "o": {
        "A": "to",
        "B": "for",
        "C": "that",
        "D": "not to"
       },
       "a": "D",
       "concept": "'So as not to' introduces a negative purpose — doing something in order to AVOID a result.",
       "method": "The purpose here is avoidance (not waking the baby), so use the negative form: so as not to.",
       "difficulty": "core"
      },
      {
       "q": "\"By the end of June, I ___ six examinations already this year.\"",
       "o": {
        "A": "take",
        "B": "will take",
        "C": "shall have taken",
        "D": "am taking"
       },
       "a": "C",
       "concept": "An action completed by a stated future point uses the future perfect.",
       "method": "'By the end of June' + a count of completed exams → future perfect: shall have taken.",
       "difficulty": "core"
      },
      {
       "q": "The company had to ___ its workforce due to falling profits.",
       "o": {
        "A": "expand",
        "B": "downsize",
        "C": "promote",
        "D": "celebrate"
       },
       "a": "B",
       "concept": "'Downsize' means to reduce the size of a company's workforce.",
       "method": "'Falling profits' signals cost-cutting — downsize fits, not expand.",
       "difficulty": "core"
      },
      {
       "q": "The witness gave a very ___ account of what happened, leaving out no detail.",
       "o": {
        "A": "vague",
        "B": "detailed",
        "C": "brief",
        "D": "confusing"
       },
       "a": "B",
       "concept": "'Leaving out no detail' directly defines the word needed: detailed.",
       "method": "Match the given clue directly to its precise word: detailed.",
       "difficulty": "core"
      },
      {
       "q": "Despite the ___ weather, the match went ahead as planned.",
       "o": {
        "A": "pleasant",
        "B": "inclement",
        "C": "mild",
        "D": "sunny"
       },
       "a": "B",
       "concept": "'Inclement' means unpleasant or stormy, especially of weather.",
       "method": "'Despite' signals a contrast with 'went ahead' — the weather must have been bad: inclement.",
       "difficulty": "core"
      },
      {
       "q": "The manager's ___ remarks discouraged the whole team.",
       "o": {
        "A": "encouraging",
        "B": "disparaging",
        "C": "complimentary",
        "D": "neutral"
       },
       "a": "B",
       "concept": "'Disparaging' means expressing a critical, belittling attitude.",
       "method": "'Discouraged the team' signals negative remarks: disparaging.",
       "difficulty": "core"
      },
      {
       "q": "The professor's lecture was so ___ that most students fell asleep.",
       "o": {
        "A": "engaging",
        "B": "monotonous",
        "C": "lively",
        "D": "brief"
       },
       "a": "B",
       "concept": "'Monotonous' means dull and repetitive, lacking variation.",
       "method": "'Fell asleep' signals boredom — monotonous fits best.",
       "difficulty": "core"
      },
      {
       "q": "The negotiations reached a ___ after both sides refused to compromise.",
       "o": {
        "A": "resolution",
        "B": "stalemate",
        "C": "conclusion",
        "D": "agreement"
       },
       "a": "B",
       "concept": "'Stalemate' means a situation where no progress can be made; a deadlock.",
       "method": "'Refused to compromise' signals no progress: stalemate.",
       "difficulty": "core"
      },
      {
       "q": "Her ___ smile put everyone at ease during the interview.",
       "o": {
        "A": "forced",
        "B": "genuine",
        "C": "fake",
        "D": "nervous"
       },
       "a": "B",
       "concept": "'Put everyone at ease' signals a natural, sincere quality: genuine.",
       "method": "Match the clue (put people at ease) to the word implying sincerity: genuine.",
       "difficulty": "core"
      },
      {
       "q": "The government introduced new measures to ___ inflation.",
       "o": {
        "A": "increase",
        "B": "curb",
        "C": "encourage",
        "D": "ignore"
       },
       "a": "B",
       "concept": "'Curb' means to restrain or keep something under control.",
       "method": "Government measures against inflation aim to control/reduce it: curb.",
       "difficulty": "core"
      },
      {
       "q": "The old bridge was declared ___ and closed to traffic.",
       "o": {
        "A": "safe",
        "B": "unsafe",
        "C": "new",
        "D": "popular"
       },
       "a": "B",
       "concept": "If a bridge is 'closed to traffic', the reason implied is safety concerns.",
       "method": "'Closed to traffic' signals a safety problem: unsafe.",
       "difficulty": "core"
      },
      {
       "q": "The company's new policy was met with ___ from the staff.",
       "o": {
        "A": "resistance",
        "B": "celebration",
        "C": "indifference to celebration",
        "D": "applause"
       },
       "a": "A",
       "concept": "'Resistance' means opposition to a change or proposal.",
       "method": "A policy 'met with' something negative from staff who dislike it: resistance.",
       "difficulty": "core"
      },
      {
       "q": "The detective was ___ in his investigation, checking every possible clue.",
       "o": {
        "A": "careless",
        "B": "thorough",
        "C": "hasty",
        "D": "lazy"
       },
       "a": "B",
       "concept": "'Checking every possible clue' defines the word needed: thorough.",
       "method": "Match the given clue directly: thorough.",
       "difficulty": "core"
      },
      {
       "q": "The child was ___ punished for a mistake that wasn't even his fault.",
       "o": {
        "A": "fairly",
        "B": "unjustly",
        "C": "rightly",
        "D": "deservedly"
       },
       "a": "B",
       "concept": "'Not even his fault' signals the punishment was unfair.",
       "method": "Match the clue (not his fault) to the word implying unfairness: unjustly.",
       "difficulty": "core"
      },
      {
       "q": "The volunteers worked ___ to complete the project before the deadline.",
       "o": {
        "A": "lazily",
        "B": "tirelessly",
        "C": "reluctantly",
        "D": "slowly"
       },
       "a": "B",
       "concept": "'Tirelessly' means without stopping to rest, showing great effort.",
       "method": "'Complete before deadline' implies sustained effort: tirelessly.",
       "difficulty": "core"
      },
      {
       "q": "His ___ behaviour at the meeting embarrassed his colleagues.",
       "o": {
        "A": "professional",
        "B": "boorish",
        "C": "polite",
        "D": "calm"
       },
       "a": "B",
       "concept": "'Boorish' means rude and unrefined in manner.",
       "method": "'Embarrassed his colleagues' signals bad manners: boorish.",
       "difficulty": "core"
      },
      {
       "q": "The company's profits have ___ over the past three years.",
       "o": {
        "A": "stagnated",
        "B": "vanished",
        "C": "appeared",
        "D": "disappeared"
       },
       "a": "A",
       "concept": "'Stagnated' means to stop developing or growing.",
       "method": "Profits that haven't changed over time have 'stagnated'.",
       "difficulty": "core"
      },
      {
       "q": "The teacher gave a ___ explanation that even the weakest students understood.",
       "o": {
        "A": "complicated",
        "B": "lucid",
        "C": "confusing",
        "D": "vague"
       },
       "a": "B",
       "concept": "'Lucid' means clear and easy to understand.",
       "method": "'Even the weakest students understood' signals clarity: lucid.",
       "difficulty": "core"
      },
      {
       "q": "The politician's speech was full of ___ promises that were never kept.",
       "o": {
        "A": "genuine",
        "B": "empty",
        "C": "realistic",
        "D": "honest"
       },
       "a": "B",
       "concept": "'Empty promises' is a fixed phrase for promises with no real intention of being fulfilled.",
       "method": "'Never kept' signals insincerity: empty promises.",
       "difficulty": "core"
      },
      {
       "q": "The athlete showed great ___ by continuing the race despite her injury.",
       "o": {
        "A": "cowardice",
        "B": "resilience",
        "C": "weakness",
        "D": "laziness"
       },
       "a": "B",
       "concept": "'Resilience' means the ability to withstand or recover from difficulty.",
       "method": "'Continuing despite injury' signals toughness: resilience.",
       "difficulty": "core"
      },
      {
       "q": "The old manuscript was so ___ that scholars struggled to read it.",
       "o": {
        "A": "clear",
        "B": "illegible",
        "C": "legible",
        "D": "printed"
       },
       "a": "B",
       "concept": "'Illegible' means impossible or very difficult to read.",
       "method": "'Struggled to read it' directly defines the word: illegible.",
       "difficulty": "core"
      },
      {
       "q": "The company's new product was an instant ___ , selling out within hours.",
       "o": {
        "A": "failure",
        "B": "success",
        "C": "disappointment",
        "D": "loss"
       },
       "a": "B",
       "concept": "'Selling out within hours' defines the word needed: success.",
       "method": "Match the given result (sold out fast) to the fitting word: success.",
       "difficulty": "core"
      },
      {
       "q": "The new regulation was designed to ___ pollution in the city.",
       "o": {
        "A": "increase",
        "B": "mitigate",
        "C": "cause",
        "D": "celebrate"
       },
       "a": "B",
       "concept": "'Mitigate' means to make something less severe or harmful.",
       "method": "Regulations against pollution aim to reduce/lessen it: mitigate.",
       "difficulty": "core"
      },
      {
       "q": "Her ___ response to the criticism surprised everyone, as they expected anger.",
       "o": {
        "A": "furious",
        "B": "gracious",
        "C": "aggressive",
        "D": "hostile"
       },
       "a": "B",
       "concept": "'Gracious' means courteous and kind, especially unexpectedly so.",
       "method": "'Surprised everyone' (expecting anger) signals the opposite: gracious.",
       "difficulty": "core"
      },
      {
       "q": "The economy showed signs of ___ after years of steady decline.",
       "o": {
        "A": "recovery",
        "B": "collapse",
        "C": "stagnation",
        "D": "deterioration"
       },
       "a": "A",
       "concept": "'Recovery' means a return to a normal/better state after difficulty.",
       "method": "'After years of decline' + a positive turn signals: recovery.",
       "difficulty": "core"
      },
      {
       "q": "The suspect gave a ___ account that didn't match the evidence.",
       "o": {
        "A": "truthful",
        "B": "dubious",
        "C": "accurate",
        "D": "clear"
       },
       "a": "B",
       "concept": "'Dubious' means doubtful or of questionable truth.",
       "method": "'Didn't match the evidence' signals doubt: dubious.",
       "difficulty": "core"
      },
      {
       "q": "The community came together in a spirit of ___ to rebuild after the flood.",
       "o": {
        "A": "division",
        "B": "solidarity",
        "C": "conflict",
        "D": "competition"
       },
       "a": "B",
       "concept": "'Solidarity' means unity and mutual support, especially in difficulty.",
       "method": "'Came together' after a disaster signals unity: solidarity.",
       "difficulty": "core"
      },
      {
       "q": "The manager's decision was ___ ; no one could understand the reasoning behind it.",
       "o": {
        "A": "logical",
        "B": "arbitrary",
        "C": "careful",
        "D": "transparent"
       },
       "a": "B",
       "concept": "'Arbitrary' means based on random choice rather than reason.",
       "method": "'No one could understand the reasoning' signals a lack of logic: arbitrary.",
       "difficulty": "core"
      },
      {
       "q": "The professor's argument was ___ , supported by solid evidence at every step.",
       "o": {
        "A": "weak",
        "B": "cogent",
        "C": "vague",
        "D": "irrelevant"
       },
       "a": "B",
       "concept": "'Cogent' means clear, logical, and convincing.",
       "method": "'Supported by solid evidence' signals a strong, convincing argument: cogent.",
       "difficulty": "core"
      },
      {
       "q": "The referee's ___ decision angered both teams equally.",
       "o": {
        "A": "fair",
        "B": "controversial",
        "C": "clear",
        "D": "popular"
       },
       "a": "B",
       "concept": "'Controversial' means causing disagreement or dispute.",
       "method": "'Angered both teams' signals a disputed, controversial call.",
       "difficulty": "core"
      },
      {
       "q": "The new evidence completely ___ the earlier theory.",
       "o": {
        "A": "supported",
        "B": "contradicted",
        "C": "confirmed",
        "D": "repeated"
       },
       "a": "B",
       "concept": "'Contradicted' means to go against or be inconsistent with something.",
       "method": "'New evidence' opposing an 'earlier theory' signals conflict: contradicted.",
       "difficulty": "core"
      },
      {
       "q": "The council's ___ approach to the crisis won public praise.",
       "o": {
        "A": "indecisive",
        "B": "decisive",
        "C": "confused",
        "D": "delayed"
       },
       "a": "B",
       "concept": "'Decisive' means making decisions quickly and confidently.",
       "method": "'Won public praise' signals an effective, confident response: decisive.",
       "difficulty": "core"
      },
      {
       "q": "Despite the ___ evidence against him, he maintained his innocence.",
       "o": {
        "A": "weak",
        "B": "overwhelming",
        "C": "scarce",
        "D": "missing"
       },
       "a": "B",
       "concept": "'Overwhelming' means very great in amount, hard to resist or deny.",
       "method": "'Despite' + still maintaining innocence signals very strong evidence: overwhelming.",
       "difficulty": "core"
      },
      {
       "q": "The minister's speech was criticised for being ___ and lacking any real substance.",
       "o": {
        "A": "insightful",
        "B": "hollow",
        "C": "detailed",
        "D": "informative"
       },
       "a": "B",
       "concept": "'Hollow' (figuratively) means lacking real meaning or value.",
       "method": "'Lacking any real substance' directly defines the word: hollow.",
       "difficulty": "core"
      },
      {
       "q": "The two companies agreed to ___ their resources for the joint project.",
       "o": {
        "A": "withhold",
        "B": "pool",
        "C": "waste",
        "D": "hide"
       },
       "a": "B",
       "concept": "'Pool' (verb) means to combine resources for shared use.",
       "method": "Two parties combining resources = pooling them.",
       "difficulty": "core"
      },
      {
       "q": "The old law was eventually ___ after years of public pressure.",
       "o": {
        "A": "enforced",
        "B": "repealed",
        "C": "strengthened",
        "D": "introduced"
       },
       "a": "B",
       "concept": "'Repealed' means officially cancelled or withdrawn (of a law).",
       "method": "'Eventually' + 'after pressure' signals the law was cancelled: repealed.",
       "difficulty": "core"
      },
      {
       "q": "The two leaders finally reached a ___ after months of tense negotiation.",
       "o": {
        "A": "stalemate",
        "B": "consensus",
        "C": "dispute",
        "D": "disagreement"
       },
       "a": "B",
       "concept": "'Consensus' means general agreement among a group.",
       "method": "'Finally reached' after tension signals a positive resolution: consensus.",
       "difficulty": "core"
      },
      {
       "q": "The removal of top soil by water or wind is called ______.",
       "o": {
        "A": "Soil wash",
        "B": "Soil erosion",
        "C": "Soil creep",
        "D": "Silting"
       },
       "a": "B",
       "concept": "'Erosion' is the general term for soil being worn away and carried off by natural agents like water and wind.",
       "method": "'Wash' and 'creep' describe specific movement types, but the broad process being described here is erosion.",
       "difficulty": "core"
      },
      {
       "q": "Despite all preparations, the wedding did not ______.",
       "o": {
        "A": "come along",
        "B": "come off",
        "C": "come on",
        "D": "come up"
       },
       "a": "B",
       "concept": "Phrasal verbs with 'come' change meaning completely depending on the particle attached.",
       "method": "'Come off' specifically means 'happen as planned' — the wedding didn't take place.",
       "difficulty": "core"
      },
      {
       "q": "The young of a cow is called a ______.",
       "o": {
        "A": "Ewe",
        "B": "Kitten",
        "C": "Calf",
        "D": "Kid"
       },
       "a": "C",
       "concept": "Animal-and-young-name pairings are a classic vocabulary category.",
       "method": "Ewe is a female sheep, kitten is a young cat, kid is a young goat — a young cow is specifically a calf.",
       "difficulty": "core"
      },
      {
       "q": "As soon as he entered the room, he ______ off his shirt.",
       "o": {
        "A": "take",
        "B": "takes",
        "C": "took",
        "D": "taken"
       },
       "a": "C",
       "concept": "A sequence of two completed past actions both take the simple past tense.",
       "method": "'As soon as he entered' (past) is matched by a second simple-past verb: took.",
       "difficulty": "core"
      },
      {
       "q": "Ngozi is the ______ of the three sisters.",
       "o": {
        "A": "taller",
        "B": "tallest",
        "C": "most tall",
        "D": "more tall"
       },
       "a": "B",
       "concept": "Comparing one item against a group of three or more requires the superlative, not the comparative.",
       "method": "'Of the three' signals more than two items being compared → use the superlative tallest, not the comparative taller.",
       "difficulty": "core"
      },
      {
       "q": "For a paper kite to fly high, it needs ______.",
       "o": {
        "A": "fire",
        "B": "fuel",
        "C": "air",
        "D": "water"
       },
       "a": "C",
       "concept": "A vocabulary-in-context question testing real-world reasoning about how an object works.",
       "method": "A kite has no engine — it relies purely on wind (moving air) to stay aloft.",
       "difficulty": "core"
      },
      {
       "q": "She adores eating junk food but ______ eating fruits.",
       "o": {
        "A": "loves",
        "B": "supports",
        "C": "dislikes",
        "D": "prefers"
       },
       "a": "C",
       "concept": "'But' signals a contrast — the second verb must express the opposite feeling to the first.",
       "method": "'Adores' (loves) is contrasted by 'but', so the missing word must mean the opposite: dislikes.",
       "difficulty": "core"
      },
      {
       "q": "In a web browser's address field, the abbreviation 'www' stands for ______.",
       "o": {
        "A": "World Wide Web",
        "B": "Word Wide Web",
        "C": "Web Wide World",
        "D": "Wide Web World"
       },
       "a": "A",
       "concept": "Common tech acronyms are frequently tested as straightforward vocabulary/GK items.",
       "method": "www expands to World Wide Web, the system of linked pages that makes up most of the internet.",
       "difficulty": "core"
      },
      {
       "q": "He passed so well ______ he was awarded a scholarship.",
       "o": {
        "A": "since",
        "B": "because",
        "C": "that",
        "D": "while"
       },
       "a": "C",
       "concept": "'So + adjective/adverb + that' is a fixed structure showing a result.",
       "method": "'So well' needs its matching result-clause connector: that — not 'since', 'because', or 'while'.",
       "difficulty": "core"
      },
      {
       "q": "Government should prevent smugglers ______ their contraband.",
       "o": {
        "A": "to sell",
        "B": "to be selling",
        "C": "from selling",
        "D": "having sold"
       },
       "a": "C",
       "concept": "'Prevent somebody FROM doing something' is a fixed verb-preposition pattern in English.",
       "method": "'Prevent' pairs specifically with 'from' + -ing, not with a to-infinitive.",
       "difficulty": "core"
      },
      {
       "q": "As ______ of you as can come are welcome.",
       "o": {
        "A": "each",
        "B": "any",
        "C": "many",
        "D": "more"
       },
       "a": "C",
       "concept": "This fixed idiomatic pattern ('as many...as can') expresses an open, unlimited invitation.",
       "method": "'As many of you as can come' is the natural, idiomatic phrasing — 'each'/'any'/'more' don't fit this construction.",
       "difficulty": "core"
      },
      {
       "q": "______ a good film, wasn't it?",
       "o": {
        "A": "It is",
        "B": "Was it",
        "C": "There is",
        "D": "It was"
       },
       "a": "D",
       "concept": "A tag question ('wasn't it?') must match the tense and subject of the statement it's attached to.",
       "method": "The tag 'wasn't it' is past tense, so the opening statement must also be past tense: It was.",
       "difficulty": "core"
      },
      {
       "q": "Excuse me, do you mind ______ I smoke?",
       "o": {
        "A": "if",
        "B": "since",
        "C": "while",
        "D": "against"
       },
       "a": "A",
       "concept": "'Do you mind if...' is the standard polite way to ask permission in English.",
       "method": "This is a fixed idiomatic pattern — 'mind if' is the only natural fit here.",
       "difficulty": "core"
      },
      {
       "q": "The government scolded the contractors for the poor ______ of the project.",
       "o": {
        "A": "prosecution",
        "B": "investigation",
        "C": "execution",
        "D": "installation"
       },
       "a": "C",
       "concept": "Vocabulary-in-context questions often hinge on subtle differences between similar-sounding words.",
       "method": "'Execution' here means carrying out/completing a project — the word that fits a criticism about how the work was done.",
       "difficulty": "core"
      },
      {
       "q": "The new car is strikingly attractive, but I very much doubt its ______.",
       "o": {
        "A": "durability",
        "B": "style",
        "C": "harmony",
        "D": "complexity"
       },
       "a": "A",
       "concept": "'But' signals contrast — the doubt should be about something different from what was just praised (looks).",
       "method": "Praise was about appearance, so the doubt logically shifts to how long it will last: durability.",
       "difficulty": "core"
      },
      {
       "q": "The previous assignment was ______ for me.",
       "o": {
        "A": "much too difficult",
        "B": "too much difficult",
        "C": "difficult too much",
        "D": "much difficult too"
       },
       "a": "A",
       "concept": "Intensifiers stack in a fixed order in English: 'much' + 'too' + adjective.",
       "method": "'Much too difficult' is the only grammatically natural order among the given options.",
       "difficulty": "core"
      },
      {
       "q": "Without ______ words, he accused him directly of treachery.",
       "o": {
        "A": "amending",
        "B": "modifying",
        "C": "mixing",
        "D": "mincing"
       },
       "a": "D",
       "concept": "'Mince (one's) words' is a fixed idiom meaning to soften a harsh statement.",
       "method": "'Without mincing words' means speaking bluntly and directly — exactly what the sentence describes.",
       "difficulty": "core"
      },
      {
       "q": "We walked quietly ______ wake the baby.",
       "o": {
        "A": "so that not",
        "B": "in order to",
        "C": "so as to",
        "D": "so as not to"
       },
       "a": "D",
       "concept": "Expressing a negative purpose ('in order NOT to') uses the fixed structure 'so as not to'.",
       "method": "Since the purpose is to avoid waking the baby, the negative purpose connector so as not to is needed.",
       "difficulty": "core"
      },
      {
       "q": "We used to go to that club on Saturday nights, ______?",
       "o": {
        "A": "isn't it",
        "B": "didn't we",
        "C": "don't we",
        "D": "aren't we"
       },
       "a": "B",
       "concept": "A tag question must agree with both the tense and the subject of the main clause.",
       "method": "'Used to go' is past tense with subject 'we', so the tag must be didn't we.",
       "difficulty": "core"
      },
      {
       "q": "What is an 'affix' in grammar?",
       "o": {
        "A": "A free morpheme",
        "B": "Only a suffix",
        "C": "Only a prefix",
        "D": "A bound morpheme"
       },
       "a": "D",
       "concept": "An affix (prefix, infix, or suffix) can never stand alone as a word — that's what makes it a 'bound' morpheme.",
       "method": "Affixes are bound morphemes, attached to the beginning, middle, or end of a root word to change its meaning.",
       "difficulty": "core"
      },
      {
       "q": "The lady called the ______ to fix her broken pipes in the bathroom.",
       "o": {
        "A": "Plumber",
        "B": "Carpenter",
        "C": "Bricklayer",
        "D": "Electrician"
       },
       "a": "A",
       "concept": "Match the tradesperson to the specific job described — pipes are a plumber's domain.",
       "method": "A plumber specifically handles water pipes and fittings, unlike a carpenter (wood) or bricklayer (masonry).",
       "difficulty": "core"
      },
      {
       "q": "The student couldn't beat the principal, so he took the law ______ his own hands.",
       "o": {
        "A": "in",
        "B": "at",
        "C": "on",
        "D": "into"
       },
       "a": "D",
       "concept": "'Take the law into one's own hands' is a fixed idiomatic expression meaning to act outside proper legal authority.",
       "method": "The fixed idiom always uses 'into', not 'in', 'at', or 'on'.",
       "difficulty": "core"
      },
      {
       "q": "Here is the ______ which ______ he is innocent.",
       "o": {
        "A": "proof / prove",
        "B": "proves / prove",
        "C": "proof / proof",
        "D": "proof / proves"
       },
       "a": "D",
       "concept": "Match each blank's part of speech and number to its grammatical role — a noun subject needs a noun, and a singular subject needs a singular verb.",
       "method": "The first blank needs a noun (proof); the second needs a verb agreeing with the singular relative pronoun 'which' — proves.",
       "difficulty": "core"
      },
      {
       "q": "While writing the letter, I made several ______.",
       "o": {
        "A": "ommissions",
        "B": "omisions",
        "C": "omissions",
        "D": "omission's"
       },
       "a": "C",
       "concept": "'Omission' is a commonly misspelt word — double 's', single 'm'.",
       "method": "Correct spelling: omissions (double 's', not double 'm').",
       "difficulty": "core"
      },
      {
       "q": "Scarcely had he arrived ______ it began to rain.",
       "o": {
        "A": "than",
        "B": "when",
        "C": "that",
        "D": "but"
       },
       "a": "B",
       "concept": "'Scarcely...when' and 'no sooner...than' are the two fixed pairings in this construction — they aren't interchangeable.",
       "method": "'Scarcely' collocates with 'when', not 'than' (that pairing belongs to 'no sooner').",
       "difficulty": "core"
      },
      {
       "q": "I chatted with my old friends via ______.",
       "o": {
        "A": "WhatsApp",
        "B": "Whatapp",
        "C": "Watsapp",
        "D": "What'sapp"
       },
       "a": "A",
       "concept": "Brand names have one correct spelling, even in casual usage.",
       "method": "The app's correct name is WhatsApp, capitalised as shown.",
       "difficulty": "core"
      },
      {
       "q": "A group of insects is called a ______.",
       "o": {
        "A": "Bevy",
        "B": "Flight",
        "C": "Swarm",
        "D": "Herd"
       },
       "a": "C",
       "concept": "Collective nouns for animal groups are specific to each type of animal — insects take 'swarm'.",
       "method": "'Bevy' is for birds/girls, 'flight' is for birds, 'herd' is for large mammals; insects specifically form a swarm.",
       "difficulty": "core"
      },
      {
       "q": "Another common term for the salutation ('Dear Sir/Madam') in a formal letter is ______.",
       "o": {
        "A": "Honour",
        "B": "Respect",
        "C": "Greetings",
        "D": "Subscription"
       },
       "a": "C",
       "concept": "'Salutation' and 'greeting' are near-synonyms in the context of letter-writing structure.",
       "method": "The opening greeting of a letter is its salutation, also simply called the greeting.",
       "difficulty": "core"
      },
      {
       "q": "The dog barks ______ the children.",
       "o": {
        "A": "at",
        "B": "on",
        "C": "with",
        "D": "in"
       },
       "a": "A",
       "concept": "'Bark at' is the standard preposition pairing when directing the action toward a target.",
       "method": "'Bark at someone/something' is the fixed collocation.",
       "difficulty": "core"
      },
      {
       "q": "A group of ants is called a(n) ______.",
       "o": {
        "A": "Herd",
        "B": "Host",
        "C": "Colony",
        "D": "Army"
       },
       "a": "C",
       "concept": "Collective nouns vary by species — ants specifically form a colony (though large groups are sometimes informally called an 'army').",
       "method": "The standard biological/collective term for a group of ants is a colony.",
       "difficulty": "core"
      },
      {
       "q": "She ______ her way to the living room, clearly hurt.",
       "o": {
        "A": "staggered",
        "B": "limped",
        "C": "stumbled",
        "D": "crawled"
       },
       "a": "A",
       "concept": "Vocabulary-in-context questions test precise shades of meaning between similar verbs of movement.",
       "method": "'Staggered' best fits an unsteady, off-balance walk consistent with being hurt.",
       "difficulty": "core"
      },
      {
       "q": "The hotel is so precarious to our health, meaning it is ______.",
       "o": {
        "A": "Safer",
        "B": "Fearful",
        "C": "Dangerous",
        "D": "Good"
       },
       "a": "C",
       "concept": "'Precarious' means uncertain or risky, which in a health context translates to 'dangerous'.",
       "method": "Something 'precarious to health' poses a danger or risk to it.",
       "difficulty": "core"
      },
      {
       "q": "The wife is so submissive to her husband and family members, meaning she is ______.",
       "o": {
        "A": "Obedient",
        "B": "Recalcitrant",
        "C": "Stubborn",
        "D": "Selfless"
       },
       "a": "A",
       "concept": "'Submissive' describes a disposition of yielding or deferring to others — the opposite of stubborn or recalcitrant.",
       "method": "Submissive most closely matches obedient; recalcitrant and stubborn are actually near-opposites of submissive.",
       "difficulty": "core"
      },
      {
       "q": "Choose the odd one out.",
       "o": {
        "A": "men's wear",
        "B": "women's wear",
        "C": "mens' wear",
        "D": "babies' wear"
       },
       "a": "C",
       "concept": "'Men' is already plural, so its possessive apostrophe goes before the 's' (men's), not after (mens').",
       "method": "'Mens'' is grammatically incorrect — the correct possessive of the plural noun 'men' is 'men's', making it the odd one out.",
       "difficulty": "core"
      },
      {
       "q": "Whatever you say here will be used against you in the ______.",
       "o": {
        "A": "courts of law",
        "B": "court of laws",
        "C": "court of law",
        "D": "court-of-law"
       },
       "a": "C",
       "concept": "This is a fixed legal phrase, and only one arrangement of singular/plural is standard.",
       "method": "The standard fixed phrase is 'a court of law' (singular court, singular law).",
       "difficulty": "core"
      },
      {
       "q": "The records of the ______ are inside my ______ on my table.",
       "o": {
        "A": "dairy / diary",
        "B": "diary / dairy",
        "C": "diary / diary",
        "D": "dairy / dairy"
       },
       "a": "A",
       "concept": "'Dairy' (a business dealing in milk products) and 'diary' (a personal notebook/journal) are commonly confused because they're near-anagrams of each other.",
       "method": "Read it as: the records OF THE DAIRY (the milk business) are kept inside MY DIARY (my notebook) on the table — dairy first, diary second.",
       "difficulty": "core"
      },
      {
       "q": "I made a firm decision and _______ pass my exams no matter what.",
       "o": {
        "A": "I will try to",
        "B": "I will try and",
        "C": "I try",
        "D": "trying"
       },
       "a": "A",
       "concept": "'Try to + verb' is the grammatically standard construction; 'try and + verb' is common in informal speech but less accepted in formal written English tested here.",
       "method": "'Try to pass' is the standard formal construction.",
       "difficulty": "core"
      },
      {
       "q": "A group of whales is called a ______.",
       "o": {
        "A": "Fish",
        "B": "Whale",
        "C": "Pod",
        "D": "Cat"
       },
       "a": "C",
       "concept": "Whales, being highly social marine mammals, have their own specific collective noun.",
       "method": "A group of whales is called a pod (sometimes also called a 'gam').",
       "difficulty": "core"
      },
      {
       "q": "I read the book by Shaw and that of ______.",
       "o": {
        "A": "Shakespeare",
        "B": "Shakespeare's",
        "C": "Shakespear",
        "D": "Shakespear's"
       },
       "a": "B",
       "concept": "When comparing two people's possessions/works with 'that of', the second name still needs its own possessive form.",
       "method": "'That of Shakespeare's' mirrors the possessive structure already implied — correct spelling is Shakespeare, with the possessive 's.",
       "difficulty": "core"
      },
      {
       "q": "How many syllables are in the word 'REPELLENT'?",
       "o": {
        "A": "3",
        "B": "2",
        "C": "4",
        "D": "1"
       },
       "a": "A",
       "concept": "Break the word into its natural spoken syllables to count accurately: re-pel-lent.",
       "method": "'Repellent' has three syllables: re-pel-lent.",
       "difficulty": "core"
      },
      {
       "q": "'She told him to go to the hog in his work.' This idiom means he has to ______.",
       "o": {
        "A": "finish his work thoroughly and completely",
        "B": "search for a new job",
        "C": "meet an actual hog",
        "D": "give up on his work"
       },
       "a": "A",
       "concept": "This regional idiom (common in some varieties of Nigerian English) means to commit fully and see something through to completion.",
       "method": "'Go to the hog' (a variant of 'go the whole hog') means to do something completely and thoroughly.",
       "difficulty": "core"
      },
      {
       "q": "They all ran for ______.",
       "o": {
        "A": "their dear lives",
        "B": "dear life",
        "C": "dear lives",
        "D": "their dear life"
       },
       "a": "A",
       "concept": "'Run for dear life' is normally singular per person, but when the subject is plural ('they'), both the pronoun and noun should agree in number.",
       "method": "With a plural subject ('they'), the fixed idiom becomes 'their dear lives', keeping pronoun and noun consistently plural.",
       "difficulty": "core"
      },
      {
       "q": "The police ______ the case of the armed robbers, meaning they completed the investigation.",
       "o": {
        "A": "rounded up",
        "B": "rounded off",
        "C": "rounded of",
        "D": "rounded out"
       },
       "a": "B",
       "concept": "'Round off' means to complete or finish something, distinct from 'round up' (to gather people, e.g. arrest suspects).",
       "method": "'Rounded off the case' means they concluded/finished it — not to be confused with 'rounded up' (arrested) the robbers themselves.",
       "difficulty": "core"
      },
      {
       "q": "Pick the option nearly OPPOSITE in meaning to VERBOSE.",
       "o": {
        "A": "Garrulous",
        "B": "Loquacious",
        "C": "Concise",
        "D": "Chatty"
       },
       "a": "C",
       "concept": "'Verbose' means using more words than necessary; its opposite favours brevity.",
       "method": "Garrulous, loquacious, and chatty are all near-synonyms of verbose (talkative); 'concise' (brief, to the point) is the true opposite.",
       "difficulty": "core"
      },
      {
       "q": "Grandma frowned at the ______ of meat in the pot, feeling it was too big a piece.",
       "o": {
        "A": "Sum",
        "B": "Chunk",
        "C": "Block",
        "D": "Little"
       },
       "a": "B",
       "concept": "'Chunk' specifically describes a thick, irregular piece — fitting for meat, unlike 'block' (regular, geometric) or 'sum' (a quantity of money/numbers).",
       "method": "'Chunk of meat' is the natural collocation for an oddly large piece.",
       "difficulty": "core"
      },
      {
       "q": "'A dog that usually barks seldom ______.'",
       "o": {
        "A": "bites",
        "B": "cries",
        "C": "eats",
        "D": "runs"
       },
       "a": "A",
       "concept": "This is a well-known English proverb about how the loudest threats are often the least dangerous.",
       "method": "The full proverb is 'A barking dog seldom bites', meaning someone who makes a lot of noise rarely follows through with real action.",
       "difficulty": "core"
      },
      {
       "q": "As things are now, I have to look for ______ tyre.",
       "o": {
        "A": "a cheap, second-hand rubber",
        "B": "a cheap, rubber, second-hand",
        "C": "a rubber, cheap, second-hand",
        "D": "a second-hand rubber cheap"
       },
       "a": "A",
       "concept": "Adjectives follow a fixed order: General quality, then Age (second-hand), then Noun-material (rubber) — remembered as MG S-SAC-VERB-NOUN-HEAD.",
       "method": "'Cheap' (general) → 'second-hand' (age) → 'rubber' (material/noun) is the correct adjective order.",
       "difficulty": "core"
      },
      {
       "q": "The tourist bought ______.",
       "o": {
        "A": "a brown small Nigerian earthen pot",
        "B": "a small brown Nigerian earthen pot",
        "C": "an earthen brown small Nigerian pot",
        "D": "a Nigerian small brown earthen pot"
       },
       "a": "B",
       "concept": "The full adjective order is Size, then Colour, then Noun (origin), then Noun (material): small → brown → Nigerian → earthen.",
       "method": "Size ('small') comes before Colour ('brown'), which comes before origin ('Nigerian'), which comes before material ('earthen').",
       "difficulty": "core"
      },
      {
       "q": "The ______ came here last week.",
       "o": {
        "A": "handsome tall young man",
        "B": "young tall handsome man",
        "C": "tall handsome young man",
        "D": "young handsome tall man"
       },
       "a": "D",
       "concept": "Following MG S-SAC order: Age ('young') comes before General quality ('handsome'), which comes before Size ('tall').",
       "method": "Age → General → Size gives: young handsome tall man.",
       "difficulty": "core"
      },
      {
       "q": "John's father has just bought a ______ car.",
       "o": {
        "A": "brand new blue Japanese sports",
        "B": "brand new Japanese blue sports",
        "C": "brand new sports Japanese blue",
        "D": "new brand blue sports Japanese"
       },
       "a": "A",
       "concept": "Age ('brand new') comes before Colour ('blue'), which comes before the noun-as-adjective 'Japanese' (origin), which comes before 'sports' (a noun modifier closest to the head noun).",
       "method": "Age → Colour → Origin → type gives: brand new blue Japanese sports (car).",
       "difficulty": "core"
      },
      {
       "q": "Mrs Ojo was one of ______ in my village.",
       "o": {
        "A": "the first two enlightened young ladies",
        "B": "the two first enlightened young ladies",
        "C": "the two first young enlightened ladies",
        "D": "the first two young enlightened ladies"
       },
       "a": "D",
       "concept": "Modifiers (the, first, two) come first as a group, followed by Age ('young'), then General quality ('enlightened').",
       "method": "'The first two' (modifiers) → 'young' (age) → 'enlightened' (general) gives: the first two young enlightened ladies.",
       "difficulty": "core"
      },
      {
       "q": "He put ______ in a basket.",
       "o": {
        "A": "white dozen eggs",
        "B": "a dozen white eggs",
        "C": "a white dozen eggs",
        "D": "dozen white eggs"
       },
       "a": "B",
       "concept": "'A dozen' functions as a modifier/quantity and comes before the colour adjective 'white'.",
       "method": "Modifier ('a dozen') → Colour ('white') gives: a dozen white eggs.",
       "difficulty": "core"
      },
      {
       "q": "The ______ engineer designed a new machine.",
       "o": {
        "A": "brilliant Nigerian young",
        "B": "Nigerian brilliant young",
        "C": "young Nigerian brilliant",
        "D": "brilliant young Nigerian"
       },
       "a": "D",
       "concept": "General quality ('brilliant') comes before Age ('young'), which comes before origin ('Nigerian').",
       "method": "General → Age → Noun(origin) gives: brilliant young Nigerian (engineer).",
       "difficulty": "core"
      },
      {
       "q": "What is the term for the murder of a king?",
       "o": {
        "A": "Homicide",
        "B": "Regicide",
        "C": "Patricide",
        "D": "Genocide"
       },
       "a": "B",
       "concept": "Words ending in '-cide' name specific kinds of killing — each prefix identifies who or what is killed.",
       "method": "'Regi-' relates to a king/ruler (as in 'regal', 'regent'), giving regicide: the killing of a king.",
       "difficulty": "core"
      },
      {
       "q": "What is the term for the murder of one's own parents?",
       "o": {
        "A": "Fratricide",
        "B": "Matricide",
        "C": "Parricide",
        "D": "Patricide"
       },
       "a": "C",
       "concept": "Distinguish 'parricide' (killing one's parent(s) or a close relative) from the more specific 'matricide' (mother) and 'patricide' (father).",
       "method": "'Parri-' relates to parents generally, giving parricide.",
       "difficulty": "core"
      },
      {
       "q": "A person who has been married only once, to one spouse at a time, is called a ______.",
       "o": {
        "A": "Polygamist",
        "B": "Monogamist",
        "C": "Celibate",
        "D": "Bigamist"
       },
       "a": "B",
       "concept": "'Mono-' means one/single, distinguishing this from 'poly-' (many) in the related word 'polygamist'.",
       "method": "'Mono-' (one) + 'gamist' (married person) gives monogamist: someone married to one spouse at a time.",
       "difficulty": "core"
      },
      {
       "q": "A person who has more than one spouse at the same time is called a ______.",
       "o": {
        "A": "Monogamist",
        "B": "Widower",
        "C": "Polygamist",
        "D": "Bachelor"
       },
       "a": "C",
       "concept": "'Poly-' means many, the opposite prefix to 'mono-' in this same word family.",
       "method": "'Poly-' (many) + 'gamist' gives polygamist: someone with multiple spouses at once.",
       "difficulty": "core"
      },
      {
       "q": "A man whose wife has died is called a ______.",
       "o": {
        "A": "Widow",
        "B": "Widower",
        "C": "Bachelor",
        "D": "Divorcee"
       },
       "a": "B",
       "concept": "English uses different gendered terms for a surviving spouse — 'widow' is specifically for a woman.",
       "method": "'Widower' is the male form; 'widow' (option A) is the female equivalent, used for a woman whose husband has died.",
       "difficulty": "core"
      },
      {
       "q": "A person vowed to a single (unmarried) life is called a ______.",
       "o": {
        "A": "Bachelor",
        "B": "Widower",
        "C": "Celibate",
        "D": "Spinster"
       },
       "a": "C",
       "concept": "'Celibate' specifically implies a deliberate vow or commitment to remain unmarried/abstinent, unlike 'bachelor' which simply describes an unmarried man without implying a vow.",
       "method": "'Celibate' describes someone who has made a conscious commitment to a single, often abstinent, life.",
       "difficulty": "core"
      },
      {
       "q": "A person who hates marriage is called a ______.",
       "o": {
        "A": "Misogynist",
        "B": "Misogamist",
        "C": "Misandrist",
        "D": "Misanthrope"
       },
       "a": "B",
       "concept": "Distinguish 'misogamist' (hater of marriage) from the similarly-spelt 'misogynist' (hater of women).",
       "method": "'Miso-' (hatred of) + 'gamist' (marriage) gives misogamist.",
       "difficulty": "core"
      },
      {
       "q": "A person who hates women is called a ______.",
       "o": {
        "A": "Misogamist",
        "B": "Misandrist",
        "C": "Misogynist",
        "D": "Misanthrope"
       },
       "a": "C",
       "concept": "Don't confuse this with 'misogamist' (hater of marriage) or 'misandrist' (hater of men).",
       "method": "'Miso-' (hatred of) + 'gyn' (woman, as in gynaecology) gives misogynist.",
       "difficulty": "core"
      },
      {
       "q": "A person who hates men is called a ______.",
       "o": {
        "A": "Misogynist",
        "B": "Misogamist",
        "C": "Misandrist",
        "D": "Misanthrope"
       },
       "a": "C",
       "concept": "'Andr-' relates to men (as in 'android'), distinguishing this from 'misogynist' (hater of women).",
       "method": "'Miso-' (hatred of) + 'andr' (man) gives misandrist.",
       "difficulty": "core"
      },
      {
       "q": "A person who is excessively devoted to luxury and pleasure is called a ______.",
       "o": {
        "A": "Altruist",
        "B": "Sybarite",
        "C": "Pedant",
        "D": "Sophist"
       },
       "a": "B",
       "concept": "'Sybarite' derives from Sybaris, an ancient Greek city famed for its luxury-loving inhabitants.",
       "method": "A sybarite is someone given up to luxury and self-indulgent living.",
       "difficulty": "core"
      },
      {
       "q": "A person who makes an excessive display of their learning is called a ______.",
       "o": {
        "A": "Sybarite",
        "B": "Pedant",
        "C": "Garrulous person",
        "D": "Sophist"
       },
       "a": "B",
       "concept": "'Pedant' implies an unnecessary, showy focus on rules or scholarly detail, often to an irritating degree.",
       "method": "A pedant is someone who makes a fussy, excessive show of their knowledge or adherence to rules.",
       "difficulty": "core"
      },
      {
       "q": "A person whose reasoning appears clever but is actually false or misleading is called a ______.",
       "o": {
        "A": "Pedant",
        "B": "Sybarite",
        "C": "Sophist",
        "D": "Altruist"
       },
       "a": "C",
       "concept": "'Sophist' originally described ancient Greek teachers of rhetoric, but came to mean someone who uses clever but deceptive arguments.",
       "method": "A sophist uses reasoning that sounds clever but is actually misleading or fallacious.",
       "difficulty": "core"
      },
      {
       "q": "A person who devotes their life to the interest of other people is called a(n) ______.",
       "o": {
        "A": "Sophist",
        "B": "Pedant",
        "C": "Altruist",
        "D": "Sybarite"
       },
       "a": "C",
       "concept": "'Altruist' is the direct opposite of a sybarite (self-indulgent) or an egoist (self-centred).",
       "method": "An altruist is someone whose actions are motivated by concern for others' welfare rather than their own.",
       "difficulty": "core"
      }
     ],
     "freq": 319
    },
    {
     "id": "analogies",
     "name": "Analogies & Word Relationships",
     "blurb": "Spot the hidden relationship in the first pair, then find the option that repeats exactly the same relationship.",
     "concept_notes": [
      "First name the RELATIONSHIP in words (e.g. 'is the sound made by', 'is the tool used to') before looking at the options.",
      "Common relationship types: tool→user, animal→young/sound/home, part→whole, item→its covering, opposite pairs.",
      "Eliminate options that are merely 'related' in topic but don't share the EXACT same relationship as the first pair.",
      "If several options seem plausible, test each by saying the full sentence: 'A is to B as C is to D' — the correct one reads naturally."
     ],
     "questions": [
      {
       "q": "Bark is to Dog as _____ is to Lion.",
       "o": {
        "A": "Sand",
        "B": "Roar",
        "C": "Chuckle",
        "D": "Boo"
       },
       "a": "B",
       "concept": "Each animal has its own characteristic sound.",
       "method": "Match the pattern: dog’s sound is bark; lion’s sound is roar.",
       "difficulty": "core"
      },
      {
       "q": "Pluck is to Fruit as _____ is to Palm Wine.",
       "o": {
        "A": "Draw",
        "B": "Tap",
        "C": "Dig",
        "D": "Cut"
       },
       "a": "B",
       "concept": "Each item has its own harvesting verb.",
       "method": "Fruit is 'plucked'; palm wine is 'tapped' from the tree.",
       "difficulty": "core"
      },
      {
       "q": "Fly is to Bird as _____ is to Millipede.",
       "o": {
        "A": "Walk",
        "B": "Crawl",
        "C": "Gallop",
        "D": "Wriggle"
       },
       "a": "D",
       "concept": "Each creature has its own typical movement.",
       "method": "A bird flies; a millipede wriggles along the ground.",
       "difficulty": "core"
      },
      {
       "q": "Field is to Football as _____ is to Tennis.",
       "o": {
        "A": "Pitch",
        "B": "Court",
        "C": "Board",
        "D": "Track"
       },
       "a": "B",
       "concept": "Each sport is played on a differently-named surface.",
       "method": "Football is played on a 'field'; tennis on a 'court'.",
       "difficulty": "core"
      },
      {
       "q": "House is to Man as _____ is to Bird.",
       "o": {
        "A": "Tree",
        "B": "Roof",
        "C": "Bush",
        "D": "Nest"
       },
       "a": "D",
       "concept": "Each creature has its own type of dwelling.",
       "method": "A man lives in a house; a bird lives in a nest.",
       "difficulty": "core"
      },
      {
       "q": "Orange is to Peel as Nut is to:",
       "o": {
        "A": "Kernel",
        "B": "Rind",
        "C": "Shell",
        "D": "Fruit"
       },
       "a": "C",
       "concept": "Each has its own term for its outer covering.",
       "method": "An orange's covering is 'peel'; a nut's is 'shell'.",
       "difficulty": "core"
      },
      {
       "q": "Hour is to Time as Kilometre is to:",
       "o": {
        "A": "Metre",
        "B": "Day",
        "C": "Speed",
        "D": "Distance"
       },
       "a": "D",
       "concept": "Each unit measures a different quantity.",
       "method": "Hour measures time; kilometre measures distance.",
       "difficulty": "core"
      },
      {
       "q": "Poem is to Poet as _____ is to Novelist.",
       "o": {
        "A": "Writer",
        "B": "Author",
        "C": "Story",
        "D": "Novel"
       },
       "a": "D",
       "concept": "Each creator produces their own characteristic work.",
       "method": "A poet writes a poem; a novelist writes a novel.",
       "difficulty": "core"
      },
      {
       "q": "Merchant is to Selling as Artist is to:",
       "o": {
        "A": "Picture",
        "B": "Painting",
        "C": "Paints",
        "D": "Brushes"
       },
       "a": "B",
       "concept": "Each profession is defined by its characteristic activity.",
       "method": "A merchant's activity is selling; an artist's is painting.",
       "difficulty": "core"
      },
      {
       "q": "Knife is to Cutting as Pen is to:",
       "o": {
        "A": "Pencil",
        "B": "Paper",
        "C": "Fork",
        "D": "Writing"
       },
       "a": "D",
       "concept": "Each tool is matched to its primary function.",
       "method": "A knife's function is cutting; a pen's is writing.",
       "difficulty": "core"
      },
      {
       "q": "Trumpet is to Blow as Gong is to:",
       "o": {
        "A": "Bellow",
        "B": "Strike",
        "C": "Pluck",
        "D": "Pull"
       },
       "a": "B",
       "concept": "Each instrument is played with its own characteristic action.",
       "method": "A trumpet is blown; a gong is struck.",
       "difficulty": "core"
      },
      {
       "q": "Gloves are to Hands as Shoes are to:",
       "o": {
        "A": "Boxers",
        "B": "Hands",
        "C": "Feet",
        "D": "Legs"
       },
       "a": "C",
       "concept": "Each item of clothing covers its matching body part.",
       "method": "Gloves cover hands; shoes cover feet.",
       "difficulty": "core"
      },
      {
       "q": "Up is to Down as Before is to:",
       "o": {
        "A": "Later",
        "B": "After",
        "C": "Now",
        "D": "Next"
       },
       "a": "B",
       "concept": "A direct opposite-pair analogy.",
       "method": "Up/Down are opposites; Before/After are opposites.",
       "difficulty": "core"
      },
      {
       "q": "Sew is to Needle as Dig is to:",
       "o": {
        "A": "Garden",
        "B": "Plant",
        "C": "Poke",
        "D": "Spade"
       },
       "a": "D",
       "concept": "Each action is matched to its typical tool.",
       "method": "You sew with a needle; you dig with a spade.",
       "difficulty": "core"
      },
      {
       "q": "Feather is to Bird as Fin is to:",
       "o": {
        "A": "Finish",
        "B": "Fish",
        "C": "Crab",
        "D": "Finies"
       },
       "a": "B",
       "concept": "Each creature has its own characteristic body part.",
       "method": "Birds have feathers; fish have fins.",
       "difficulty": "core"
      },
      {
       "q": "Tall is to Short as Broad is to:",
       "o": {
        "A": "Wide",
        "B": "Long",
        "C": "Straight",
        "D": "Narrow"
       },
       "a": "D",
       "concept": "A direct opposite-pair analogy.",
       "method": "Tall/Short are opposites; Broad/Narrow are opposites.",
       "difficulty": "core"
      },
      {
       "q": "Water and Ship, Air and:",
       "o": {
        "A": "Breathing",
        "B": "Flying",
        "C": "Aeroplane",
        "D": "Airfield"
       },
       "a": "C",
       "concept": "Each medium is matched to its typical vehicle.",
       "method": "Ships travel on water; aeroplanes travel through air.",
       "difficulty": "core"
      },
      {
       "q": "Bees and Hive, Pigs and:",
       "o": {
        "A": "Hive",
        "B": "Kernel",
        "C": "Hole",
        "D": "Sty"
       },
       "a": "D",
       "concept": "Each animal has its own named dwelling.",
       "method": "Bees live in a hive; pigs live in a sty.",
       "difficulty": "core"
      },
      {
       "q": "Chop is to Steak as _____ is to Mutton.",
       "o": {
        "A": "Cutlet",
        "B": "Ham",
        "C": "Pork",
        "D": "Veal"
       },
       "a": "A",
       "concept": "Each meat cut has its own specific name.",
       "method": "A cut of steak is a 'chop'; a comparable cut of mutton is a 'cutlet'.",
       "difficulty": "core"
      },
      {
       "q": "Hold is to Hand as Kneel is to:",
       "o": {
        "A": "Ankle",
        "B": "Foot",
        "C": "Heel",
        "D": "Knee"
       },
       "a": "D",
       "concept": "Each action is matched to the body part performing it.",
       "method": "You hold with your hand; you kneel on your knee.",
       "difficulty": "core"
      },
      {
       "q": "Bed is to Mattress as Chair is to:",
       "o": {
        "A": "Table",
        "B": "Pillow",
        "C": "Cushion",
        "D": "Stool"
       },
       "a": "C",
       "concept": "Each furniture item has its matching soft covering.",
       "method": "A bed has a mattress; a chair has a cushion.",
       "difficulty": "core"
      },
      {
       "q": "Never is to Seldom as Always is to:",
       "o": {
        "A": "Occasional",
        "B": "Usual",
        "C": "Often",
        "D": "Every time"
       },
       "a": "C",
       "concept": "Matches words of similar (not identical) frequency intensity.",
       "method": "Seldom is a softer version of never; often is a softer version of always.",
       "difficulty": "core"
      },
      {
       "q": "Ocean is to Pond as Deep is to:",
       "o": {
        "A": "Shallow",
        "B": "Well",
        "C": "Sea",
        "D": "Lake"
       },
       "a": "B",
       "concept": "A size analogy: large body of water vs small body, matched to depth terms.",
       "method": "Ocean (large) vs Pond (small); Deep (as a well can be) is the matched small-scale term here.",
       "difficulty": "core"
      },
      {
       "q": "Wise is to Foolish as Modest is to:",
       "o": {
        "A": "Vain",
        "B": "Pretty",
        "C": "Conceited",
        "D": "Proud"
       },
       "a": "A",
       "concept": "A direct opposite-pair analogy.",
       "method": "Wise/Foolish are opposites; Modest/Vain are opposites.",
       "difficulty": "core"
      },
      {
       "q": "Sentence is to Paragraph as Word is to:",
       "o": {
        "A": "Letter",
        "B": "Sentence",
        "C": "Paragraph",
        "D": "Phrase"
       },
       "a": "B",
       "concept": "A part-to-whole analogy, one level down each time.",
       "method": "A paragraph is built from sentences; a sentence is built from words.",
       "difficulty": "core"
      },
      {
       "q": "Bolt is to Nut as Hook is to:",
       "o": {
        "A": "Screw",
        "B": "Eye",
        "C": "Door",
        "D": "Grass"
       },
       "a": "B",
       "concept": "Each fastener has its own matching counterpart.",
       "method": "A bolt pairs with a nut; a hook pairs with an eye (a hook-and-eye fastener).",
       "difficulty": "core"
      },
      {
       "q": "Direct is to Tortuous as Dilatory is to:",
       "o": {
        "A": "Expeditious",
        "B": "Straight",
        "C": "Curved",
        "D": "Circumlocutory"
       },
       "a": "A",
       "concept": "A direct opposite-pair analogy using advanced vocabulary.",
       "method": "Direct/Tortuous (winding) are opposites; Dilatory (slow) is opposite to Expeditious (fast).",
       "difficulty": "core"
      },
      {
       "q": "Steam is to Water as Liquid is to:",
       "o": {
        "A": "Ice",
        "B": "Solid",
        "C": "Vapour",
        "D": "Snow"
       },
       "a": "B",
       "concept": "A states-of-matter analogy: gas form of water vs solid form of a general substance.",
       "method": "Steam is the gas state of water; Solid is the corresponding state for a liquid cooling down.",
       "difficulty": "core"
      },
      {
       "q": "Thermometer is to Degree as Clock is to:",
       "o": {
        "A": "Wall",
        "B": "Tower",
        "C": "Hour",
        "D": "Cock"
       },
       "a": "C",
       "concept": "Each measuring instrument is matched to its unit of measurement.",
       "method": "A thermometer measures in degrees; a clock measures in hours.",
       "difficulty": "core"
      },
      {
       "q": "CONDUCTOR is to ORCHESTRA as _____ is to _____.",
       "o": {
        "A": "Philosopher : Inspiration",
        "B": "Actor : Scene",
        "C": "Surveyor : Landscape",
        "D": "Pilot : Ship"
       },
       "a": "D",
       "concept": "A conductor directs/guides an orchestra; find the pair with the same 'director guides a group/vessel' relationship.",
       "method": "Look for another 'one person steering/guiding a group' relationship: a pilot guides a ship.",
       "difficulty": "core"
      },
      {
       "q": "Naira is to Nigeria as Rupee is to",
       "o": {
        "A": "Kenya",
        "B": "India",
        "C": "China",
        "D": "Egypt"
       },
       "a": "B",
       "concept": "Each country has its own official currency name.",
       "method": "Nigeria's currency is Naira; India's is Rupee.",
       "difficulty": "core"
      },
      {
       "q": "Car is to Road as Train is to",
       "o": {
        "A": "Station",
        "B": "Engine",
        "C": "Rails",
        "D": "Platform"
       },
       "a": "C",
       "concept": "Each vehicle travels on its own characteristic surface.",
       "method": "Cars travel on roads; trains travel on rails.",
       "difficulty": "core"
      },
      {
       "q": "Sultan is to Sokoto as Obi is to",
       "o": {
        "A": "Ibadan",
        "B": "Onitsha",
        "C": "Kano",
        "D": "Benin"
       },
       "a": "B",
       "concept": "Each traditional ruler title is associated with a specific city/region.",
       "method": "Sultan→Sokoto; Obi→Onitsha (the traditional Igbo ruler title there).",
       "difficulty": "core"
      },
      {
       "q": "Groundnut pyramids are historically associated with which Nigerian city, similarly to how cocoa is associated with Ibadan?",
       "o": {
        "A": "Kano",
        "B": "Enugu",
        "C": "Jos",
        "D": "Calabar"
       },
       "a": "A",
       "concept": "Kano was historically famous for its towering groundnut pyramids, a symbol of the region's agricultural trade.",
       "method": "Associate groundnut pyramids permanently with Kano.",
       "difficulty": "core"
      },
      {
       "q": "Doctor is to Hospital as Teacher is to",
       "o": {
        "A": "Book",
        "B": "School",
        "C": "Student",
        "D": "Pen"
       },
       "a": "B",
       "concept": "Each professional is matched to their typical workplace.",
       "method": "A doctor works in a hospital; a teacher works in a school.",
       "difficulty": "core"
      },
      {
       "q": "Author is to Book as Composer is to",
       "o": {
        "A": "Instrument",
        "B": "Music",
        "C": "Orchestra",
        "D": "Concert"
       },
       "a": "B",
       "concept": "Each creator is matched to the type of work they produce.",
       "method": "An author writes a book; a composer writes music.",
       "difficulty": "core"
      },
      {
       "q": "Puppy is to Dog as Cub is to",
       "o": {
        "A": "Cat",
        "B": "Lion",
        "C": "Bird",
        "D": "Fish"
       },
       "a": "B",
       "concept": "Each animal's young has a specific name.",
       "method": "A puppy is a young dog; a cub is a young lion.",
       "difficulty": "core"
      },
      {
       "q": "Pen is to Write as Scissors is to",
       "o": {
        "A": "Sharp",
        "B": "Cut",
        "C": "Paper",
        "D": "Metal"
       },
       "a": "B",
       "concept": "Each tool is matched to its primary function.",
       "method": "A pen's function is to write; scissors' function is to cut.",
       "difficulty": "core"
      },
      {
       "q": "Petal is to Flower as Leaf is to",
       "o": {
        "A": "Root",
        "B": "Tree",
        "C": "Branch",
        "D": "Stem"
       },
       "a": "B",
       "concept": "Each part belongs to its corresponding whole.",
       "method": "A petal is part of a flower; a leaf is part of a tree.",
       "difficulty": "core"
      },
      {
       "q": "Kilogram is to Weight as Litre is to",
       "o": {
        "A": "Length",
        "B": "Volume",
        "C": "Time",
        "D": "Speed"
       },
       "a": "B",
       "concept": "Each unit measures a different type of quantity.",
       "method": "Kilogram measures weight; litre measures volume.",
       "difficulty": "core"
      },
      {
       "q": "Chef is to Kitchen as Pilot is to",
       "o": {
        "A": "Airport",
        "B": "Cockpit",
        "C": "Sky",
        "D": "Runway"
       },
       "a": "B",
       "concept": "Each professional works within their characteristic workspace.",
       "method": "A chef works in the kitchen; a pilot works in the cockpit.",
       "difficulty": "core"
      },
      {
       "q": "Optimist is to Hopeful as Pessimist is to",
       "o": {
        "A": "Cheerful",
        "B": "Doubtful",
        "C": "Excited",
        "D": "Confident"
       },
       "a": "B",
       "concept": "Each personality type is matched to its characteristic outlook.",
       "method": "An optimist is hopeful; a pessimist is doubtful/gloomy.",
       "difficulty": "core"
      },
      {
       "q": "Whale is to Ocean as Eagle is to",
       "o": {
        "A": "Nest",
        "B": "Sky",
        "C": "Tree",
        "D": "Mountain"
       },
       "a": "B",
       "concept": "Each animal is matched to its primary habitat/element.",
       "method": "A whale lives in the ocean; an eagle rules the sky.",
       "difficulty": "core"
      },
      {
       "q": "Sculptor is to Statue as Architect is to",
       "o": {
        "A": "Building",
        "B": "Bricks",
        "C": "City",
        "D": "Construction"
       },
       "a": "A",
       "concept": "Each creator is matched to the finished product they design.",
       "method": "A sculptor creates a statue; an architect designs a building.",
       "difficulty": "core"
      },
      {
       "q": "Judge is to Court as Referee is to",
       "o": {
        "A": "Team",
        "B": "Field/Pitch",
        "C": "Ball",
        "D": "Crowd"
       },
       "a": "B",
       "concept": "Each authority figure presides over their characteristic venue.",
       "method": "A judge presides in court; a referee presides on the field.",
       "difficulty": "core"
      },
      {
       "q": "Baker is to Bread as Tailor is to",
       "o": {
        "A": "Needle",
        "B": "Cloth",
        "C": "Clothes",
        "D": "Shop"
       },
       "a": "C",
       "concept": "Each craftsperson is matched to the product they make.",
       "method": "A baker makes bread; a tailor makes clothes.",
       "difficulty": "core"
      },
      {
       "q": "Sailor is to Ship as Motorist is to",
       "o": {
        "A": "Road",
        "B": "Car",
        "C": "Petrol",
        "D": "Garage"
       },
       "a": "B",
       "concept": "Each person is matched to the vehicle they operate.",
       "method": "A sailor operates a ship; a motorist operates a car.",
       "difficulty": "core"
      },
      {
       "q": "Wool is to Sheep as Silk is to",
       "o": {
        "A": "Cotton",
        "B": "Silkworm",
        "C": "Weaver",
        "D": "Thread"
       },
       "a": "B",
       "concept": "Each material comes from its source animal/organism.",
       "method": "Wool comes from sheep; silk comes from silkworms.",
       "difficulty": "core"
      },
      {
       "q": "Library is to Books as Museum is to",
       "o": {
        "A": "Visitors",
        "B": "Artefacts",
        "C": "Buildings",
        "D": "Guides"
       },
       "a": "B",
       "concept": "Each institution is matched to what it primarily houses.",
       "method": "A library houses books; a museum houses artefacts.",
       "difficulty": "core"
      },
      {
       "q": "Thief is to Steal as Liar is to",
       "o": {
        "A": "Truth",
        "B": "Deceive",
        "C": "Speak",
        "D": "Whisper"
       },
       "a": "B",
       "concept": "Each type of person is matched to their characteristic wrongful action.",
       "method": "A thief's defining act is to steal; a liar's is to deceive.",
       "difficulty": "core"
      },
      {
       "q": "Winter is to Cold as Summer is to",
       "o": {
        "A": "Rain",
        "B": "Hot",
        "C": "Wind",
        "D": "Snow"
       },
       "a": "B",
       "concept": "Each season is matched to its characteristic weather.",
       "method": "Winter is cold; summer is hot.",
       "difficulty": "core"
      },
      {
       "q": "Painter is to Canvas as Writer is to",
       "o": {
        "A": "Pen",
        "B": "Paper",
        "C": "Book",
        "D": "Story"
       },
       "a": "B",
       "concept": "Each creator works on their characteristic surface/medium.",
       "method": "A painter works on canvas; a writer works on paper.",
       "difficulty": "core"
      },
      {
       "q": "Bee is to Hive as Bird is to",
       "o": {
        "A": "Sky",
        "B": "Nest",
        "C": "Wing",
        "D": "Feather"
       },
       "a": "B",
       "concept": "Each creature has its own type of home.",
       "method": "A bee lives in a hive; a bird lives in a nest.",
       "difficulty": "core"
      },
      {
       "q": "Sculptor is to Chisel as Painter is to",
       "o": {
        "A": "Canvas",
        "B": "Brush",
        "C": "Colour",
        "D": "Frame"
       },
       "a": "B",
       "concept": "Each craftsperson is matched to their primary tool.",
       "method": "A sculptor's tool is a chisel; a painter's tool is a brush.",
       "difficulty": "core"
      },
      {
       "q": "Bark is to Tree as Skin is to",
       "o": {
        "A": "Body",
        "B": "Bone",
        "C": "Blood",
        "D": "Muscle"
       },
       "a": "A",
       "concept": "Each living thing has its own outer covering.",
       "method": "Bark covers a tree; skin covers a body.",
       "difficulty": "core"
      },
      {
       "q": "Naira is to Nigeria as ______ is to India.",
       "o": {
        "A": "Yen",
        "B": "Rupee",
        "C": "Franc",
        "D": "Peso"
       },
       "a": "B",
       "concept": "This analogy tests currency-to-country pairings, a common GK/vocabulary crossover category.",
       "method": "Match the relationship 'currency of the country' — India's currency is the rupee (Yen is Japan's, Franc was used in parts of Europe/Africa, Peso is used in several Latin American countries).",
       "difficulty": "core"
      }
     ],
     "freq": 57
    },
    {
     "id": "idioms",
     "name": "Idioms, Proverbs & Interpretation",
     "blurb": "What a sentence really MEANS beyond its literal words — rewards reading widely, not memorising lists.",
     "concept_notes": [
      "Idioms almost never mean what the individual words say literally — always ask 'what point is this phrase making?'",
      "Statement-interpretation questions want the option that is logically GUARANTEED by the sentence, not just plausible.",
      "Fixed idiomatic pairs and proverbs (safe and sound, blood is thicker than water) have one correct wording — recognition, not logic.",
      "Similes ('as ___ as a ___') are cultural and traditional — the closest option to what's conventionally taught is always the answer, even if another animal seems equally fitting."
     ],
     "questions": [
      {
       "q": "\"The chairman's explanation threw a new light on the matter.\" This means the explanation",
       "o": {
        "A": "provided fresh information on the matter",
        "B": "showed bias against the matter",
        "C": "was used to reject the matter",
        "D": "convinced everyone instantly"
       },
       "a": "A",
       "concept": "'To throw/shed new light on something' means to provide fresh information that aids understanding.",
       "method": "Picture shining a light on a dark object so you can finally see it — fresh understanding.",
       "difficulty": "core"
      },
      {
       "q": "\"Ibrahim started beating about the bush when asked to state his case.\" This means Ibrahim",
       "o": {
        "A": "went to search the bush",
        "B": "failed to go straight to the point",
        "C": "cleared the bush area",
        "D": "answered very clearly"
       },
       "a": "B",
       "concept": "'To beat about/around the bush' means to avoid saying something directly.",
       "method": "A hunter hitting bushes around an animal instead of approaching directly — avoiding the point.",
       "difficulty": "core"
      },
      {
       "q": "\"The promotion exercise was the bone of contention between the two friends.\" This means it",
       "o": {
        "A": "was the cause of their disagreement",
        "B": "forced them to reconcile",
        "C": "made them work harder",
        "D": "was something they both ignored"
       },
       "a": "A",
       "concept": "'A bone of contention' is the main subject of a dispute between people.",
       "method": "Two dogs fighting over one bone — the bone is the very thing they argue about.",
       "difficulty": "core"
      },
      {
       "q": "\"The students stuck to their guns even after the principal appealed to them.\" This means the students",
       "o": {
        "A": "went back to class willingly",
        "B": "refused to change their position",
        "C": "attacked the school authority",
        "D": "apologised immediately"
       },
       "a": "B",
       "concept": "'To stick to your guns' means to firmly maintain your position despite pressure.",
       "method": "Soldiers who stick to their guns hold ground under attack — refusing to back down.",
       "difficulty": "core"
      },
      {
       "q": "\"Heads will roll in the accounts department because of the missing funds.\" This means some people will",
       "o": {
        "A": "be seriously punished or lose their jobs",
        "B": "be physically injured",
        "C": "be promoted",
        "D": "go on leave"
       },
       "a": "A",
       "concept": "'Heads will roll' means people will face serious punishment for a failure.",
       "method": "A dramatic exaggeration always signalling punishment or dismissal is coming.",
       "difficulty": "core"
      },
      {
       "q": "\"His account with the bank is in the red.\" This means his account",
       "o": {
        "A": "was written in red ink",
        "B": "is overdrawn / owes money",
        "C": "is a special account",
        "D": "has been closed"
       },
       "a": "B",
       "concept": "'In the red' means an account is in deficit — owing money.",
       "method": "Losses were traditionally recorded in red ink, profits in black.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence is nearest in meaning to: \"My sister has stopped drinking beer.\"",
       "o": {
        "A": "My sister cannot find beer to drink",
        "B": "My sister dislikes beer",
        "C": "My sister no longer drinks beer",
        "D": "My sister rarely drinks beer"
       },
       "a": "C",
       "concept": "'Has stopped' signals a completed change: she used to, and now does not, at all.",
       "method": "Focus only on what 'stopped' guarantees: total cessation, not preference.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence is nearest in meaning to: \"Neither Kola nor Ola is in the meeting.\"",
       "o": {
        "A": "Both Kola and Ola are in the meeting",
        "B": "Only Ola is in the meeting",
        "C": "Both of them are absent from the meeting",
        "D": "Only Kola is in the meeting"
       },
       "a": "C",
       "concept": "'Neither...nor' negates both items equally.",
       "method": "Translate as 'X is not, and Y is not' — both excluded.",
       "difficulty": "core"
      },
      {
       "q": "\"Turn over a new leaf\" means to",
       "o": {
        "A": "change one's way of life for the better",
        "B": "start reading a new book",
        "C": "move to a new location",
        "D": "begin a new job"
       },
       "a": "A",
       "concept": "'To turn over a new leaf' means to change one's behaviour for the better.",
       "method": "A fresh, clean page ('leaf') symbolises a fresh, improved start.",
       "difficulty": "core"
      },
      {
       "q": "\"To make headway\" means to make progress, especially when it is",
       "o": {
        "A": "fast and easy",
        "B": "slow or difficult",
        "C": "unnecessary",
        "D": "secretive"
       },
       "a": "B",
       "concept": "'To make headway' means to advance, typically despite resistance.",
       "method": "A ship pushing forward against strong waves — hard-won progress.",
       "difficulty": "core"
      },
      {
       "q": "\"The workers decided to make a virtue of necessity.\" This means, facing dismissal, they",
       "o": {
        "A": "all resigned in protest",
        "B": "continued the strike regardless",
        "C": "accepted the unavoidable situation positively",
        "D": "blamed one another"
       },
       "a": "C",
       "concept": "'To make a virtue of necessity' means to make the best of an unavoidable situation.",
       "method": "Turning a forced ('necessity') outcome into something presented as good ('virtue').",
       "difficulty": "core"
      },
      {
       "q": "\"Could you accept this money to make up for your loss?\" Here, 'make up for' means to",
       "o": {
        "A": "compensate for",
        "B": "create",
        "C": "apply cosmetics to",
        "D": "invent a story about"
       },
       "a": "A",
       "concept": "'Make up for' means to compensate for a loss or disadvantage.",
       "method": "Money offered after a loss can only serve one purpose: compensation.",
       "difficulty": "core"
      },
      {
       "q": "\"The principal couldn't make _____ of what the frightened boys were saying.\"",
       "o": {
        "A": "head nor tail",
        "B": "tail nor head",
        "C": "any sense of it though",
        "D": "heads or tails"
       },
       "a": "A",
       "concept": "'Can't make head nor tail of something' is a fixed idiom meaning to be completely unable to understand it.",
       "method": "Learn it as a whole unit — the order never changes.",
       "difficulty": "core"
      },
      {
       "q": "\"The children who went on the excursion arrived _____.\" (unharmed)",
       "o": {
        "A": "sound and safe",
        "B": "safe and sound",
        "C": "safely and soundly",
        "D": "safe but sound"
       },
       "a": "B",
       "concept": "'Safe and sound' is a fixed idiomatic pair always used in that exact order.",
       "method": "Fixed word-pairs have one accepted order — memorise, don't rearrange.",
       "difficulty": "core"
      },
      {
       "q": "\"There is a big hole in my pocket\" means:",
       "o": {
        "A": "My pocket is leaking",
        "B": "My money comes and goes away fast",
        "C": "My pocket is torn",
        "D": "My pocket is not in good shape"
       },
       "a": "B",
       "concept": "This idiom describes someone who spends money as fast as they get it.",
       "method": "Money 'falls through' a hole in the pocket — spent as quickly as earned.",
       "difficulty": "core"
      },
      {
       "q": "\"He got the job and suddenly became swollen headed.\" This means the job",
       "o": {
        "A": "is full of hazards",
        "B": "made him become proud",
        "C": "made him a big man",
        "D": "made him wealthy"
       },
       "a": "B",
       "concept": "'Swollen headed' is an idiom for becoming arrogant/conceited.",
       "method": "A 'swollen' head is puffed up with pride — became proud.",
       "difficulty": "core"
      },
      {
       "q": "\"All that glisters is not gold\" is a well-known:",
       "o": {
        "A": "quote",
        "B": "quotation",
        "C": "proverb",
        "D": "question"
       },
       "a": "C",
       "concept": "This is a traditional saying warning that appearances can be deceptive — a proverb.",
       "method": "A short, traditional wisdom-saying passed down over time is a proverb.",
       "difficulty": "core"
      },
      {
       "q": "\"Their eldest brother often reminds them that blood is thicker than _____.\"",
       "o": {
        "A": "tea",
        "B": "water",
        "C": "stew",
        "D": "wine"
       },
       "a": "B",
       "concept": "'Blood is thicker than water' is a proverb meaning family loyalty outweighs other relationships.",
       "method": "Fixed proverb: blood (family) vs water (outsiders).",
       "difficulty": "core"
      },
      {
       "q": "\"Honesty is the best _____,\" the teacher always said.",
       "o": {
        "A": "legacy",
        "B": "manner",
        "C": "way",
        "D": "policy"
       },
       "a": "D",
       "concept": "'Honesty is the best policy' is a well-known proverb about the value of truthfulness.",
       "method": "Learn this proverb as a fixed unit.",
       "difficulty": "core"
      },
      {
       "q": "\"Do not put all your eggs in one _____.\"",
       "o": {
        "A": "bowl",
        "B": "tray",
        "C": "basket",
        "D": "bank"
       },
       "a": "C",
       "concept": "'Don't put all your eggs in one basket' warns against risking everything on a single venture.",
       "method": "Fixed proverb about spreading risk: eggs, basket.",
       "difficulty": "core"
      },
      {
       "q": "\"Two is company, three is a _____.\"",
       "o": {
        "A": "crowd",
        "B": "group",
        "C": "mob",
        "D": "multitude"
       },
       "a": "A",
       "concept": "This proverb means a third person often disrupts the closeness of a pair.",
       "method": "Fixed proverb: two is company, three is a crowd.",
       "difficulty": "core"
      },
      {
       "q": "\"Biola wanted to argue further, but her sister told her to let sleeping dogs _____.\"",
       "o": {
        "A": "sleep",
        "B": "snore",
        "C": "lied",
        "D": "lie"
       },
       "a": "D",
       "concept": "'Let sleeping dogs lie' means to avoid reviving an old conflict or problem.",
       "method": "Fixed idiom: don't disturb a settled (sleeping) issue.",
       "difficulty": "core"
      },
      {
       "q": "\"Birds of _____ feather flock together.\"",
       "o": {
        "A": "the same",
        "B": "similar",
        "C": "one",
        "D": "a"
       },
       "a": "D",
       "concept": "This proverb means people with similar interests/character tend to associate together.",
       "method": "Fixed wording: birds of A feather (not 'the same feather').",
       "difficulty": "core"
      },
      {
       "q": "An old man told a young man, \"If I were in your _____, I would not accept a shady job.\"",
       "o": {
        "A": "sandals",
        "B": "boots",
        "C": "shoes",
        "D": "trainers"
       },
       "a": "C",
       "concept": "'To be in someone's shoes' is a fixed idiom meaning to be in their situation.",
       "method": "Fixed idiom: 'in your shoes' = in your position.",
       "difficulty": "core"
      },
      {
       "q": "\"We didn't need an umbrella because it was only _____.\"",
       "o": {
        "A": "a downpour",
        "B": "drizzling",
        "C": "pouring",
        "D": "raining"
       },
       "a": "B",
       "concept": "'Drizzling' describes very light rain — light enough not to need an umbrella.",
       "method": "The clue 'didn't need an umbrella' points to the lightest rain word: drizzling.",
       "difficulty": "core"
      },
      {
       "q": "Her gown is as green as:",
       "o": {
        "A": "grace",
        "B": "grass",
        "C": "flag",
        "D": "butter"
       },
       "a": "B",
       "concept": "A traditional simile comparing colour intensity to a familiar green object.",
       "method": "Fixed simile: as green as grass.",
       "difficulty": "core"
      },
      {
       "q": "Olu is as hungry as a:",
       "o": {
        "A": "orphan",
        "B": "wolf",
        "C": "termite",
        "D": "thug"
       },
       "a": "B",
       "concept": "A traditional simile for extreme hunger.",
       "method": "Fixed simile: as hungry as a wolf.",
       "difficulty": "core"
      },
      {
       "q": "He is as mischievous as a:",
       "o": {
        "A": "Satan",
        "B": "monkey",
        "C": "gazelle",
        "D": "tortoise"
       },
       "a": "B",
       "concept": "A traditional simile for playful troublemaking.",
       "method": "Fixed simile: as mischievous as a monkey.",
       "difficulty": "core"
      },
      {
       "q": "He is as industrious as:",
       "o": {
        "A": "an ant",
        "B": "an elephant",
        "C": "a worker",
        "D": "a messenger"
       },
       "a": "A",
       "concept": "A traditional simile for hard work and diligence.",
       "method": "Fixed simile: as industrious as an ant.",
       "difficulty": "core"
      },
      {
       "q": "As merciless as a:",
       "o": {
        "A": "grave",
        "B": "grasshopper",
        "C": "catastrophe",
        "D": "catapult"
       },
       "a": "A",
       "concept": "A traditional simile for something utterly unforgiving.",
       "method": "Fixed simile: as merciless as the grave.",
       "difficulty": "core"
      },
      {
       "q": "As brittle as:",
       "o": {
        "A": "pure water",
        "B": "glass",
        "C": "a stone",
        "D": "wood"
       },
       "a": "B",
       "concept": "A traditional simile for fragility.",
       "method": "Fixed simile: as brittle as glass.",
       "difficulty": "core"
      },
      {
       "q": "As beautiful as a:",
       "o": {
        "A": "rainbow",
        "B": "brass",
        "C": "peacock",
        "D": "lamb"
       },
       "a": "C",
       "concept": "A traditional simile for visual splendour.",
       "method": "Fixed simile: as beautiful as a peacock (its display of colour).",
       "difficulty": "core"
      },
      {
       "q": "A number of singers in a church is called a:",
       "o": {
        "A": "troupe",
        "B": "choir",
        "C": "entertainers",
        "D": "artists"
       },
       "a": "B",
       "concept": "'Choir' is the specific collective noun for a group of singers, especially in church.",
       "method": "Match the group to its exact collective-noun name: choir.",
       "difficulty": "core"
      },
      {
       "q": "A number of sailors manning a ship is called a:",
       "o": {
        "A": "crew",
        "B": "gang",
        "C": "staff",
        "D": "host"
       },
       "a": "A",
       "concept": "'Crew' is the specific collective noun for people working a ship.",
       "method": "Match the group to its exact collective-noun name: crew.",
       "difficulty": "core"
      },
      {
       "q": "A number of directors of a company is called a:",
       "o": {
        "A": "panel",
        "B": "jury",
        "C": "bench",
        "D": "board"
       },
       "a": "D",
       "concept": "'Board' (of directors) is the specific collective noun for a company's governing group.",
       "method": "Match the group to its exact collective-noun name: board.",
       "difficulty": "core"
      },
      {
       "q": "What does one good turn deserve?",
       "o": {
        "A": "Other",
        "B": "Another",
        "C": "Each other",
        "D": "One another"
       },
       "a": "B",
       "concept": "A well-known proverb about reciprocated kindness.",
       "method": "Fixed proverb: one good turn deserves another.",
       "difficulty": "core"
      },
      {
       "q": "What will a rolling stone never gather?",
       "o": {
        "A": "Rose",
        "B": "Mass",
        "C": "Moss",
        "D": "Boss"
       },
       "a": "C",
       "concept": "A proverb about restlessness preventing accumulation of stability/wealth.",
       "method": "Fixed proverb: a rolling stone gathers no moss.",
       "difficulty": "core"
      },
      {
       "q": "What should you make while the sun shines?",
       "o": {
        "A": "Gay",
        "B": "Say",
        "C": "Day",
        "D": "Hay"
       },
       "a": "D",
       "concept": "A proverb about seizing favourable opportunities while they last.",
       "method": "Fixed proverb: make hay while the sun shines.",
       "difficulty": "core"
      },
      {
       "q": "What should you do before you leap?",
       "o": {
        "A": "Listen",
        "B": "Hear",
        "C": "Think",
        "D": "Look"
       },
       "a": "D",
       "concept": "A proverb warning against acting rashly without checking first.",
       "method": "Fixed proverb: look before you leap.",
       "difficulty": "core"
      },
      {
       "q": "Tobi advised his friends to \"set the ball rolling.\" This means Tobi advised his friends to",
       "o": {
        "A": "start executing their plan",
        "B": "literally roll a ball",
        "C": "commence a journey",
        "D": "act wisely"
       },
       "a": "A",
       "concept": "'To set the ball rolling' means to get something started.",
       "method": "Once a ball starts rolling, momentum builds — that's the idiom's image of getting started.",
       "difficulty": "core"
      },
      {
       "q": "\"If only my father could win some money,\" Lanre exclaimed. This means Lanre",
       "o": {
        "A": "expects only his father to win money",
        "B": "is sure his father will not win any money",
        "C": "is hoping his father will win some money",
        "D": "is certain his father is able to win money"
       },
       "a": "C",
       "concept": "'If only' expresses a wish or hope about something uncertain.",
       "method": "'If only' signals a hopeful wish, not certainty either way.",
       "difficulty": "core"
      },
      {
       "q": "\"The new car is a far cry from that which was stolen.\" This means the new car is",
       "o": {
        "A": "a little smaller than the stolen one",
        "B": "very similar to the stolen one",
        "C": "in great contrast to the stolen one",
        "D": "almost the same as the stolen one"
       },
       "a": "C",
       "concept": "'A far cry from' means very different from, not close in comparison.",
       "method": "Fixed idiom: a far cry from = a great contrast to.",
       "difficulty": "core"
      },
      {
       "q": "\"He laughs best that laughs last\" is best interpreted as meaning",
       "o": {
        "A": "he who laughs loudest is the best",
        "B": "he who laughs wins",
        "C": "he who wins laughs",
        "D": "ultimate victory matters more than early triumph"
       },
       "a": "D",
       "concept": "This proverb warns against celebrating too early — final success is what truly counts.",
       "method": "Focus on 'laughs LAST' — the emphasis is on who wins in the end, not who celebrates first.",
       "difficulty": "core"
      },
      {
       "q": "\"I wish you more ___ to your elbow\" is a fixed expression of encouragement, meaning good luck. The missing word is:",
       "o": {
        "A": "Strength",
        "B": "Grease",
        "C": "Power",
        "D": "Oil"
       },
       "a": "C",
       "concept": "'More power to your elbow' is a traditional idiom wishing someone success and strength in their effort.",
       "method": "Learn this idiom as a fixed unit: more power to your elbow.",
       "difficulty": "core"
      },
      {
       "q": "Peter's mother \"kicked the bucket\" last week. This idiom means Peter's mother",
       "o": {
        "A": "died",
        "B": "became very strong",
        "C": "was hospitalized",
        "D": "travelled abroad"
       },
       "a": "A",
       "concept": "'To kick the bucket' is an informal idiom meaning to die.",
       "method": "Fixed idiom, always means 'died', regardless of the literal image.",
       "difficulty": "core"
      },
      {
       "q": "\"I had a night out with Dickson\" means",
       "o": {
        "A": "we spent the night reading",
        "B": "we had an evening of fun and enjoyment",
        "C": "we quarrelled all night",
        "D": "we went out only because it was night"
       },
       "a": "B",
       "concept": "'A night out' is an idiom for an evening spent socialising and having fun.",
       "method": "Fixed idiom: 'night out' always implies leisure/fun, not work or conflict.",
       "difficulty": "core"
      },
      {
       "q": "\"My mother's silk gown is a real 'cold shoulder' whenever I ask to borrow it.\" To \"give someone the cold shoulder\" means to",
       "o": {
        "A": "physically feel cold",
        "B": "deliberately ignore or be unfriendly to someone",
        "C": "lend something reluctantly",
        "D": "give a gift"
       },
       "a": "B",
       "concept": "'To give someone the cold shoulder' means to treat them with deliberate coldness or ignore them.",
       "method": "Fixed idiom: cold shoulder = intentional unfriendliness/rejection.",
       "difficulty": "core"
      },
      {
       "q": "\"Recrimination\" means",
       "o": {
        "A": "a formal apology",
        "B": "an accusation made in response to one from someone else",
        "C": "a criminal record",
        "D": "a legal punishment"
       },
       "a": "B",
       "concept": "'Recrimination' describes mutual blame — accusing someone back after being accused.",
       "method": "'Re-' (again/back) + 'crimination' (accusation) = accusing back.",
       "difficulty": "core"
      },
      {
       "q": "\"He let the cat out of the bag before the surprise party.\" This means he",
       "o": {
        "A": "released a cat",
        "B": "revealed a secret",
        "C": "cancelled the party",
        "D": "forgot the plan"
       },
       "a": "B",
       "concept": "'Let the cat out of the bag' means to accidentally reveal a secret.",
       "method": "Fixed idiom: revealing a secret, nothing to do with an actual cat.",
       "difficulty": "core"
      },
      {
       "q": "\"She was over the moon when she heard the good news.\" This means she was",
       "o": {
        "A": "confused",
        "B": "extremely happy",
        "C": "very tired",
        "D": "slightly worried"
       },
       "a": "B",
       "concept": "'Over the moon' is an idiom for being extremely delighted.",
       "method": "Fixed idiom: extreme happiness, not literal distance.",
       "difficulty": "core"
      },
      {
       "q": "\"It's raining cats and dogs outside.\" This means it is",
       "o": {
        "A": "raining animals",
        "B": "raining very heavily",
        "C": "about to rain",
        "D": "a light drizzle"
       },
       "a": "B",
       "concept": "'Raining cats and dogs' is an idiom for very heavy rain.",
       "method": "Fixed idiom: intense rainfall, not literal animals falling.",
       "difficulty": "core"
      },
      {
       "q": "\"He is under the weather today.\" This means he is",
       "o": {
        "A": "feeling cold",
        "B": "feeling unwell",
        "C": "very happy",
        "D": "outdoors"
       },
       "a": "B",
       "concept": "'Under the weather' is an idiom meaning slightly ill.",
       "method": "Fixed idiom: feeling unwell, unrelated to actual weather.",
       "difficulty": "core"
      },
      {
       "q": "\"Break a leg!\" said before a performance means",
       "o": {
        "A": "be careful not to fall",
        "B": "good luck",
        "C": "stop performing",
        "D": "you will get hurt"
       },
       "a": "B",
       "concept": "'Break a leg' is a traditional theatrical idiom wishing someone good luck.",
       "method": "Fixed idiom used before performances: means good luck, not a literal injury wish.",
       "difficulty": "core"
      },
      {
       "q": "\"Don't beat around the bush, tell me what happened!\" This means",
       "o": {
        "A": "don't hit the plants",
        "B": "don't avoid the main point",
        "C": "don't shout",
        "D": "don't lie"
       },
       "a": "B",
       "concept": "'Beat around/about the bush' means to avoid getting to the point.",
       "method": "Fixed idiom: avoiding directness, not literal bushes.",
       "difficulty": "core"
      },
      {
       "q": "\"She has a lot on her plate right now.\" This means she",
       "o": {
        "A": "is eating a big meal",
        "B": "has many responsibilities",
        "C": "is very hungry",
        "D": "is on a diet"
       },
       "a": "B",
       "concept": "'A lot on one's plate' is an idiom for having many tasks/responsibilities.",
       "method": "Fixed idiom: busy with responsibilities, not literal food.",
       "difficulty": "core"
      },
      {
       "q": "\"He spilled the beans about the surprise trip.\" This means he",
       "o": {
        "A": "dropped food",
        "B": "revealed a secret",
        "C": "cooked a meal",
        "D": "lied about something"
       },
       "a": "B",
       "concept": "'Spill the beans' means to accidentally reveal secret information.",
       "method": "Fixed idiom: revealing a secret, same family as 'let the cat out of the bag'.",
       "difficulty": "core"
      },
      {
       "q": "\"That test was a piece of cake.\" This means the test was",
       "o": {
        "A": "delicious",
        "B": "very easy",
        "C": "very difficult",
        "D": "about baking"
       },
       "a": "B",
       "concept": "'A piece of cake' is an idiom meaning something very easy to do.",
       "method": "Fixed idiom: extreme ease, not literal cake.",
       "difficulty": "core"
      },
      {
       "q": "\"I'm feeling a bit under the gun with these deadlines.\" This means he/she feels",
       "o": {
        "A": "relaxed",
        "B": "under great pressure",
        "C": "unsafe",
        "D": "excited"
       },
       "a": "B",
       "concept": "'Under the gun' is an idiom meaning under intense pressure or time constraint.",
       "method": "Fixed idiom: extreme pressure, not literal firearms.",
       "difficulty": "core"
      },
      {
       "q": "\"He hit the nail on the head with that comment.\" This means his comment was",
       "o": {
        "A": "rude",
        "B": "exactly correct",
        "C": "confusing",
        "D": "unnecessary"
       },
       "a": "B",
       "concept": "'Hit the nail on the head' means to describe something precisely and accurately.",
       "method": "Fixed idiom: exact correctness, not literal hammering.",
       "difficulty": "core"
      },
      {
       "q": "\"Actions speak louder than words\" means",
       "o": {
        "A": "shouting is more effective than talking",
        "B": "what people do matters more than what they say",
        "C": "silence is golden",
        "D": "words should never be spoken"
       },
       "a": "B",
       "concept": "A well-known proverb emphasising that deeds are more meaningful than promises.",
       "method": "Fixed proverb: behaviour reveals truth more than mere talk does.",
       "difficulty": "core"
      },
      {
       "q": "\"Every cloud has a silver lining\" means",
       "o": {
        "A": "clouds are always grey",
        "B": "there is something good in every bad situation",
        "C": "silver is valuable",
        "D": "the weather will improve"
       },
       "a": "B",
       "concept": "A well-known proverb about finding hope even in difficult situations.",
       "method": "Fixed proverb: even bad situations contain some good.",
       "difficulty": "core"
      },
      {
       "q": "\"You can't judge a book by its cover\" means",
       "o": {
        "A": "you should always read the whole book",
        "B": "you shouldn't judge something by appearances alone",
        "C": "covers are misleading",
        "D": "books are expensive"
       },
       "a": "B",
       "concept": "A well-known proverb warning against forming opinions based only on outward appearance.",
       "method": "Fixed proverb: appearances can be deceiving — look deeper before judging.",
       "difficulty": "core"
      },
      {
       "q": "\"When in Rome, do as the Romans do\" means",
       "o": {
        "A": "you should visit Rome",
        "B": "adapt to the customs of wherever you are",
        "C": "Romans are always right",
        "D": "travel broadens the mind"
       },
       "a": "B",
       "concept": "A well-known proverb encouraging adaptation to local customs.",
       "method": "Fixed proverb: fit in with local practices when somewhere new.",
       "difficulty": "core"
      },
      {
       "q": "\"The early bird catches the worm\" means",
       "o": {
        "A": "birds wake up early",
        "B": "those who act promptly gain an advantage",
        "C": "worms are food for birds",
        "D": "morning is the best time to work"
       },
       "a": "B",
       "concept": "A well-known proverb about the benefits of acting early or promptly.",
       "method": "Fixed proverb: early action leads to success/advantage.",
       "difficulty": "core"
      },
      {
       "q": "\"Too many cooks spoil the broth\" means",
       "o": {
        "A": "cooking requires skill",
        "B": "too many people working on something can ruin it",
        "C": "broth needs many ingredients",
        "D": "cooks should work together"
       },
       "a": "B",
       "concept": "A well-known proverb about too many people interfering in one task.",
       "method": "Fixed proverb: excess involvement can ruin a task.",
       "difficulty": "core"
      },
      {
       "q": "\"A stitch in time saves nine\" means",
       "o": {
        "A": "sewing quickly is important",
        "B": "fixing a small problem early prevents bigger problems later",
        "C": "nine stitches are needed for repairs",
        "D": "time management is about counting"
       },
       "a": "B",
       "concept": "A well-known proverb about the value of timely action to prevent bigger issues.",
       "method": "Fixed proverb: acting early on small problems saves greater effort later.",
       "difficulty": "core"
      },
      {
       "q": "\"He is a chip off the old block.\" This means he",
       "o": {
        "A": "is very different from his father",
        "B": "closely resembles his father in character",
        "C": "broke something valuable",
        "D": "works with wood"
       },
       "a": "B",
       "concept": "'A chip off the old block' means someone closely resembles a parent, usually the father.",
       "method": "Fixed idiom: family resemblance in character, not literal wood.",
       "difficulty": "core"
      },
      {
       "q": "\"Don't count your chickens before they hatch.\" This means",
       "o": {
        "A": "don't plan for the future",
        "B": "don't assume success before it's certain",
        "C": "chickens are unreliable",
        "D": "count carefully"
       },
       "a": "B",
       "concept": "A proverb warning against assuming a good outcome before it actually happens.",
       "method": "Fixed proverb: don't celebrate a result that isn't guaranteed yet.",
       "difficulty": "core"
      },
      {
       "q": "\"The last straw that broke the camel's back\" refers to",
       "o": {
        "A": "the final small event that causes a complete collapse after much strain",
        "B": "an act of cruelty to animals",
        "C": "a minor inconvenience",
        "D": "the beginning of a problem"
       },
       "a": "A",
       "concept": "This idiom describes a final small addition to an existing burden that causes total collapse.",
       "method": "Fixed idiom: the tipping point after prolonged accumulated strain.",
       "difficulty": "core"
      },
      {
       "q": "\"To add insult to injury\" means",
       "o": {
        "A": "to apologise sincerely",
        "B": "to make a bad situation even worse",
        "C": "to physically hurt someone",
        "D": "to compliment someone"
       },
       "a": "B",
       "concept": "This idiom describes making an already bad situation worse through further harm or offence.",
       "method": "Fixed idiom: worsening an already difficult situation.",
       "difficulty": "core"
      },
      {
       "q": "\"To burn the midnight oil\" means to",
       "o": {
        "A": "waste resources",
        "B": "work or study late into the night",
        "C": "start a fire",
        "D": "relax at night"
       },
       "a": "B",
       "concept": "This idiom (from the days of oil lamps) means working/studying late into the night.",
       "method": "Fixed idiom: late-night effort, referencing old oil-lamp study sessions.",
       "difficulty": "core"
      },
      {
       "q": "\"To bite off more than you can chew\" means to",
       "o": {
        "A": "eat too quickly",
        "B": "take on more than you can handle",
        "C": "talk too much",
        "D": "finish a meal"
       },
       "a": "B",
       "concept": "This idiom describes taking on a task or responsibility beyond one's capacity.",
       "method": "Fixed idiom: overcommitting beyond your actual ability to manage.",
       "difficulty": "core"
      },
      {
       "q": "\"To go the extra mile\" means to",
       "o": {
        "A": "travel a long distance",
        "B": "make an additional effort beyond what's expected",
        "C": "give up on a task",
        "D": "take a shortcut"
       },
       "a": "B",
       "concept": "This idiom describes putting in more effort than is strictly required.",
       "method": "Fixed idiom: exceeding expectations through extra effort.",
       "difficulty": "core"
      },
      {
       "q": "\"To keep your fingers crossed\" means to",
       "o": {
        "A": "hope for good luck",
        "B": "lie to someone",
        "C": "count carefully",
        "D": "promise something"
       },
       "a": "A",
       "concept": "This idiom describes hoping for a favourable outcome, often for something uncertain.",
       "method": "Fixed idiom: hoping/wishing for good luck.",
       "difficulty": "core"
      },
      {
       "q": "\"To pull someone's leg\" means to",
       "o": {
        "A": "physically hurt them",
        "B": "joke or tease them",
        "C": "help them walk",
        "D": "betray them"
       },
       "a": "B",
       "concept": "This idiom means to playfully tease or joke with someone.",
       "method": "Fixed idiom: playful teasing, not a literal physical act.",
       "difficulty": "core"
      },
      {
       "q": "\"To be in hot water\" means to",
       "o": {
        "A": "be in trouble",
        "B": "take a bath",
        "C": "be very tired",
        "D": "feel unwell"
       },
       "a": "A",
       "concept": "This idiom describes being in a difficult or troublesome situation.",
       "method": "Fixed idiom: trouble/difficulty, not literal water temperature.",
       "difficulty": "core"
      },
      {
       "q": "\"To take something with a pinch of salt\" means to",
       "o": {
        "A": "season your food carefully",
        "B": "not fully believe something",
        "C": "agree completely",
        "D": "add flavour to a story"
       },
       "a": "B",
       "concept": "This idiom means to view a claim with scepticism, not fully accepting it as true.",
       "method": "Fixed idiom: healthy scepticism, not literal seasoning.",
       "difficulty": "core"
      },
      {
       "q": "\"To have a change of heart\" means to",
       "o": {
        "A": "suffer a heart attack",
        "B": "change one's opinion or decision",
        "C": "fall in love",
        "D": "become emotional"
       },
       "a": "B",
       "concept": "This idiom describes changing one's mind or feelings about something, often unexpectedly.",
       "method": "Fixed idiom: reversing a prior decision or opinion.",
       "difficulty": "core"
      },
      {
       "q": "'Fatai has a finger in every pie' means ______.",
       "o": {
        "A": "Fatai loves eating all kinds of pies",
        "B": "Fatai is involved in too many activities",
        "C": "Fatai steals things",
        "D": "Fatai bakes pies for a living"
       },
       "a": "B",
       "concept": "'To have a finger in every pie' is an idiom about being involved in many different activities or affairs at once.",
       "method": "Take the idiom as a whole unit rather than literally — it means being over-involved, not anything about actual pies.",
       "difficulty": "core"
      },
      {
       "q": "'He must carry his cross' means ______.",
       "o": {
        "A": "He is a Christian",
        "B": "He is a minister of God",
        "C": "He must endure his own hardship",
        "D": "He is being punished by the church"
       },
       "a": "C",
       "concept": "'Carry one's cross' is a biblical-origin idiom about bearing a personal burden or hardship.",
       "method": "The idiom isn't literally about religion — it means enduring a difficulty that is uniquely one's own to bear.",
       "difficulty": "core"
      },
      {
       "q": "'The company decided to turn a blind eye to the minor infractions' means the company ______.",
       "o": {
        "A": "Punished the infractions severely",
        "B": "Deliberately ignored the infractions",
        "C": "Investigated the infractions thoroughly",
        "D": "Was unaware of the infractions"
       },
       "a": "B",
       "concept": "'Turn a blind eye to' means to deliberately ignore something one is fully aware of.",
       "method": "The key word is deliberately — this idiom implies conscious choice, not genuine ignorance (ruling out option D).",
       "difficulty": "core"
      },
      {
       "q": "What does the expression 'take the bull by the horn' mean?",
       "o": {
        "A": "To physically deal with a bull",
        "B": "To fight with an animal",
        "C": "To deal with a difficult situation directly and confidently",
        "D": "To avoid a serious issue"
       },
       "a": "C",
       "concept": "This idiom is about confronting a challenge head-on rather than avoiding it.",
       "method": "'Take the bull by the horns' means to face a difficult situation boldly and directly, not to literally handle an animal.",
       "difficulty": "core"
      },
      {
       "q": "'Tolu is the black sheep of the family.' This means Tolu is a/an ______.",
       "o": {
        "A": "outsider by birth",
        "B": "family favourite",
        "C": "outcast, seen differently from the rest",
        "D": "enemy of the family"
       },
       "a": "C",
       "concept": "This idiom describes someone who stands out from their family/group, usually in a negative or disreputable way.",
       "method": "'Black sheep' describes a family member regarded as an outcast or disgrace, different from the rest.",
       "difficulty": "core"
      },
      {
       "q": "'Comfort knows little of this job, so she is the greenhorn in this company.' This means Comfort is a/an ______.",
       "o": {
        "A": "Expert",
        "B": "Professional",
        "C": "Novice",
        "D": "Veteran"
       },
       "a": "C",
       "concept": "'Greenhorn' describes someone inexperienced or new to a job or activity.",
       "method": "A greenhorn is a novice — someone lacking experience, the opposite of an expert or veteran.",
       "difficulty": "core"
      },
      {
       "q": "'The secretary took a French leave.' This means the secretary ______.",
       "o": {
        "A": "left on official probation",
        "B": "left very quickly",
        "C": "left without permission or notice",
        "D": "left immediately after being told to"
       },
       "a": "C",
       "concept": "'French leave' is an old idiom for leaving without asking permission or informing anyone.",
       "method": "Taking 'French leave' means departing secretly or without proper authorisation.",
       "difficulty": "core"
      }
     ],
     "freq": 86
    },
    {
     "id": "oral",
     "name": "Oral English: Stress, Sounds & Homophones",
     "blurb": "How words actually sound out loud — spelling lies to you here, so say every option aloud before choosing.",
     "concept_notes": [
      "The golden rule: SAY the words out loud (or under your breath) before answering — never judge by spelling alone.",
      "Stress questions often hide a noun/verb pair (RECord vs reCORD) — check which part of speech is being used.",
      "'ough' is the most unreliable spelling pattern in English and can sound at least four different ways.",
      "Homophone traps (pour/poor/pore/purr, beat/beet/bleat) are solved by meaning, not sound — work out what the sentence needs first."
     ],
     "questions": [
      {
       "q": "Which word has its main stress on the FIRST syllable?",
       "o": {
        "A": "Ma-CHINE",
        "B": "REC-ord (noun)",
        "C": "be-GIN",
        "D": "a-RRIVE"
       },
       "a": "B",
       "concept": "Many two-syllable words shift stress between noun and verb forms; as a noun, 'record' stresses the first syllable.",
       "method": "Say all four aloud; the noun 'record' naturally lands its beat first.",
       "difficulty": "core"
      },
      {
       "q": "Which of these words does NOT rhyme with the others?",
       "o": {
        "A": "Cough",
        "B": "Off",
        "C": "Rough",
        "D": "Trough"
       },
       "a": "C",
       "concept": "'Ough' can be pronounced several different ways depending on the word.",
       "method": "Cough/off/trough end in an '-off' sound; 'rough' ends in '-uff'.",
       "difficulty": "core"
      },
      {
       "q": "Which word contains a SILENT letter?",
       "o": {
        "A": "Listen",
        "B": "Fasten",
        "C": "Kitchen",
        "D": "Both A and B"
       },
       "a": "D",
       "concept": "The letter 't' is silent in a cluster of common words after 's'/'f': listen, fasten, castle, often.",
       "method": "Say 'listen' and 'fasten' aloud — you never pronounce the 't'.",
       "difficulty": "core"
      },
      {
       "q": "Which word has a different vowel sound from the other three?",
       "o": {
        "A": "Cat",
        "B": "Hat",
        "C": "Father",
        "D": "Bat"
       },
       "a": "C",
       "concept": "'A' represents different vowel sounds: short 'a' (cat) vs long 'ah' (father).",
       "method": "Say all four aloud and isolate the vowel sound.",
       "difficulty": "core"
      },
      {
       "q": "Which word has its stress on the SECOND syllable?",
       "o": {
        "A": "PHO-to-graph",
        "B": "pho-TOG-ra-phy",
        "C": "CHIL-dren",
        "D": "HAP-py"
       },
       "a": "B",
       "concept": "Related words in the same family can carry stress on completely different syllables.",
       "method": "Say 'photograph' and 'photography' back to back — the beat physically moves.",
       "difficulty": "core"
      },
      {
       "q": "Which pair of words rhyme with each other?",
       "o": {
        "A": "Blood / Food",
        "B": "Comb / Bomb",
        "C": "Great / Meat",
        "D": "Break / Steak"
       },
       "a": "D",
       "concept": "Words with similar spelling don't always share the same sound.",
       "method": "Say each pair aloud; 'break' and 'steak' both use the long 'ay' sound.",
       "difficulty": "core"
      },
      {
       "q": "In \"I said I WOULD go, not that I WILL go\", the capitalised words show:",
       "o": {
        "A": "word stress for emphasis",
        "B": "silent letters",
        "C": "rhyming words",
        "D": "homophones"
       },
       "a": "A",
       "concept": "Emphatic stress places extra vocal force on a word to highlight a contrast.",
       "method": "The sentence corrects a misunderstanding — that contrast signals emphatic stress.",
       "difficulty": "core"
      },
      {
       "q": "Which word is pronounced with TWO syllables, not one?",
       "o": {
        "A": "Walked",
        "B": "Naked",
        "C": "Talked",
        "D": "Jumped"
       },
       "a": "B",
       "concept": "'-ed' is usually silent-extra, except adjectives like naked, wicked, sacred which keep a full extra syllable.",
       "method": "Say all four and count the beats: 'naked' clearly has two (NA-ked).",
       "difficulty": "core"
      },
      {
       "q": "Which word rhymes with \"THOUGH\"?",
       "o": {
        "A": "Through",
        "B": "Tough",
        "C": "Go",
        "D": "Cough"
       },
       "a": "C",
       "concept": "'Ough' is unpredictable — here it sounds like a long 'oh'.",
       "method": "'Though' rhymes with 'go', unlike the other three.",
       "difficulty": "core"
      },
      {
       "q": "Which word has the SAME vowel sound as \"BIRD\"?",
       "o": {
        "A": "Bread",
        "B": "Word",
        "C": "Bead",
        "D": "Beard"
       },
       "a": "B",
       "concept": "'ir' in bird and 'or' in word can share the identical vowel sound, despite different spelling.",
       "method": "Say 'bird' and 'word' aloud — the vowel sound is identical.",
       "difficulty": "core"
      },
      {
       "q": "GOATS bleat when hungry. Which spelling correctly completes: Goats _____ sometimes when they are hungry?",
       "o": {
        "A": "beet",
        "B": "bleep",
        "C": "beat",
        "D": "bleat"
       },
       "a": "D",
       "concept": "A goat's cry is spelled 'bleat' — easily confused with similar-sounding words.",
       "method": "Homophone trap: bleat (goat sound) vs beat/beet, which mean something else.",
       "difficulty": "core"
      },
      {
       "q": "Black Americans _____ a lot in common with Africans (correct homophone).",
       "o": {
        "A": "have",
        "B": "half",
        "C": "halve",
        "D": "halved"
       },
       "a": "A",
       "concept": "'Have' (possession) sounds different from 'halve/half' but exam options test careful reading.",
       "method": "Only 'have' makes grammatical sense: have in common.",
       "difficulty": "core"
      },
      {
       "q": "The twins do not always _____ the same viewpoint.",
       "o": {
        "A": "seer",
        "B": "cheer",
        "C": "shear",
        "D": "share"
       },
       "a": "D",
       "concept": "'Share' (to hold in common) is the correctly spelled word needed here, distinct from its homophone-like distractors.",
       "method": "Meaning check: to 'share' a viewpoint means to hold it in common.",
       "difficulty": "core"
      },
      {
       "q": "When Ade's cats are happy and comfortable, they _____.",
       "o": {
        "A": "pour",
        "B": "poor",
        "C": "purr",
        "D": "pore"
       },
       "a": "C",
       "concept": "A cat's contented sound is spelled 'purr', a homophone trap against pour/poor/pore.",
       "method": "Only 'purr' describes a cat's sound of contentment.",
       "difficulty": "core"
      },
      {
       "q": "The rude boy thought someone would _____ him from being punished.",
       "o": {
        "A": "safe",
        "B": "save",
        "C": "serf",
        "D": "shave"
       },
       "a": "B",
       "concept": "'Save' (to rescue from) is needed, distinguished from its near-homophones.",
       "method": "Meaning check: to 'save' someone from punishment = to rescue them from it.",
       "difficulty": "core"
      },
      {
       "q": "\"The ball is now in your _____\" means it's your turn to act.",
       "o": {
        "A": "court",
        "B": "cot",
        "C": "cut",
        "D": "colt"
       },
       "a": "A",
       "concept": "'The ball is in your court' is an idiom from tennis, spelled 'court'.",
       "method": "Fixed idiom spelling: court (not cot/cut/colt, which are near-homophone traps).",
       "difficulty": "core"
      },
      {
       "q": "The kind old woman donated a _____ television to the orphanage.",
       "o": {
        "A": "coloured",
        "B": "collared",
        "C": "colour",
        "D": "colours"
       },
       "a": "A",
       "concept": "An adjective describing the TV needs the '-ed' form: coloured (having colour).",
       "method": "Adjective before a noun needs '-ed': a coloured television.",
       "difficulty": "core"
      },
      {
       "q": "The boy who came third stood on the _____ bench.",
       "o": {
        "A": "lower",
        "B": "low",
        "C": "lowest",
        "D": "lo"
       },
       "a": "C",
       "concept": "Comparing three or more positions (1st, 2nd, 3rd place) requires the superlative form.",
       "method": "Third place among several → superlative: lowest.",
       "difficulty": "core"
      },
      {
       "q": "Which of these words has the MOST syllables?",
       "o": {
        "A": "Speech",
        "B": "Talk",
        "C": "Language",
        "D": "Word"
       },
       "a": "C",
       "concept": "Counting syllables means counting the number of vowel-sound beats in a word.",
       "method": "Say each aloud: speech(1), talk(1), word(1), but LAN-guage has 2 beats — the most of the four.",
       "difficulty": "core"
      },
      {
       "q": "The word EDUCATION has how many syllables?",
       "o": {
        "A": "2",
        "B": "3",
        "C": "4",
        "D": "5"
       },
       "a": "C",
       "concept": "Break the word into its spoken beats: ed-u-ca-tion.",
       "method": "Clap out each syllable: ed(1)-u(2)-ca(3)-tion(4) = 4 syllables.",
       "difficulty": "core"
      },
      {
       "q": "Which word has the SAME vowel sound as \"RETURNEE\" in its stressed syllable?",
       "o": {
        "A": "Torn",
        "B": "Turning",
        "C": "Funnier",
        "D": "Merge"
       },
       "a": "B",
       "concept": "The 'ur' sound in 'return' and 'turning' share the same vowel quality, /ɜː/.",
       "method": "Say 'return' and 'turning' aloud — both carry that same 'ur' vowel sound.",
       "difficulty": "core"
      },
      {
       "q": "Which word rhymes with \"PASS\" (in standard British pronunciation)?",
       "o": {
        "A": "Mass",
        "B": "Gas",
        "C": "Part",
        "D": "Cast"
       },
       "a": "C",
       "concept": "In Received Pronunciation, 'pass' uses the long /ɑː/ vowel sound, matching words like 'part', 'path', 'grass'.",
       "method": "'Pass' and 'part' share the long 'ah' vowel in standard British pronunciation.",
       "difficulty": "core"
      },
      {
       "q": "Which word contains the same diphthong sound /eɪ/ as in \"GATE\"?",
       "o": {
        "A": "Gaoler",
        "B": "Gorilla",
        "C": "Guff",
        "D": "Gum"
       },
       "a": "A",
       "concept": "The /eɪ/ sound (as in 'gate', 'day') also appears in 'gaoler' (the older British spelling of 'jailer').",
       "method": "Say 'gate' and 'gaoler' aloud — both open with that same long 'ay' sound.",
       "difficulty": "core"
      },
      {
       "q": "\"Gaol\" (an older British spelling) is pronounced the same as which word?",
       "o": {
        "A": "Jail",
        "B": "Goal",
        "C": "Coal",
        "D": "Loan"
       },
       "a": "A",
       "concept": "'Gaol' is simply an alternative British spelling of 'jail', pronounced identically.",
       "method": "Despite the unusual spelling, 'gaol' is a homophone of 'jail'.",
       "difficulty": "core"
      },
      {
       "q": "Which word is pronounced the same as \"RAIN\"?",
       "o": {
        "A": "Herring",
        "B": "Morning",
        "C": "Foreign",
        "D": "Reign"
       },
       "a": "D",
       "concept": "'Rain' and 'reign' are homophones — identical in sound, different in spelling and meaning.",
       "method": "Say them aloud: rain (weather) and reign (rule) sound exactly alike.",
       "difficulty": "core"
      },
      {
       "q": "If SCRAPING is coded as RBQZOHMF (each letter shifted back by one), what does FZOR decode to?",
       "o": {
        "A": "Gaps",
        "B": "Boat",
        "C": "Fads",
        "D": "Cups"
       },
       "a": "A",
       "concept": "This is a substitution cipher where each letter is shifted by a fixed number of places in the alphabet.",
       "method": "To decode, shift each letter FORWARD by one (the reverse of encoding): F→G, Z→A, O→P, R→S = GAPS.",
       "difficulty": "core"
      },
      {
       "q": "If APPEALING is coded as YNNCYJGLE (each letter shifted back by two), what does NYLE decode to?",
       "o": {
        "A": "Pane",
        "B": "Pale",
        "C": "Pang",
        "D": "Peal"
       },
       "a": "C",
       "concept": "Verify the shift pattern from the example first, then apply the reverse shift consistently to decode.",
       "method": "Shift is −2 (code = original−2). To decode: shift forward by 2. N→P, Y→A, L→N, E→G = PANG.",
       "difficulty": "core"
      },
      {
       "q": "If DREAMING is coded as FTGCOKPI (each letter shifted forward by two), what does OGCP decode to?",
       "o": {
        "A": "Maid",
        "B": "Made",
        "C": "Mean",
        "D": "Mend"
       },
       "a": "C",
       "concept": "Once the shift direction and size are confirmed from the example, apply it consistently in reverse to decode.",
       "method": "Shift is +2 (code=original+2). To decode: shift back by 2. O→M, G→E, C→A, P→N = MEAN.",
       "difficulty": "core"
      },
      {
       "q": "Using the code where 0-9 represent a-j respectively (0=a, 1=b, 2=c...9=j), what does 4238 decode to?",
       "o": {
        "A": "ebci",
        "B": "faci",
        "C": "ecdi",
        "D": "dcbi"
       },
       "a": "C",
       "concept": "Map each digit directly to its corresponding letter using the given key.",
       "method": "4=e, 2=c, 3=d, 8=i → ecdi.",
       "difficulty": "core"
      },
      {
       "q": "Which word has its main stress on the SECOND syllable?",
       "o": {
        "A": "TA-ble",
        "B": "con-TROL",
        "C": "HAP-py",
        "D": "WIN-dow"
       },
       "a": "B",
       "concept": "Some two-syllable words naturally stress the second syllable.",
       "method": "Say all four aloud: con-TROL clearly lands its beat on the second syllable.",
       "difficulty": "core"
      },
      {
       "q": "Which word does NOT rhyme with \"BEAR\"?",
       "o": {
        "A": "Care",
        "B": "Fair",
        "C": "Ear",
        "D": "Wear"
       },
       "a": "C",
       "concept": "'Bear', 'care', 'fair', and 'wear' share the same vowel sound; 'ear' does not.",
       "method": "Say each aloud — three end in the same 'air' sound, 'ear' is the odd one out.",
       "difficulty": "core"
      },
      {
       "q": "Which word has a SILENT letter?",
       "o": {
        "A": "Knife",
        "B": "Life",
        "C": "Wife",
        "D": "Rife"
       },
       "a": "A",
       "concept": "The 'k' in 'knife' (and similar words like 'know', 'knee') is silent.",
       "method": "Say 'knife' aloud — you never pronounce the 'k'.",
       "difficulty": "core"
      },
      {
       "q": "Which word has a different stress pattern from the other three?",
       "o": {
        "A": "CO-mmerce",
        "B": "COM-fort",
        "C": "com-MAND",
        "D": "COM-mon"
       },
       "a": "C",
       "concept": "Most two-syllable nouns starting with 'com-' stress the first syllable; 'command' (a verb) stresses the second.",
       "method": "Say all four aloud — three stress the first syllable, 'command' stresses the second.",
       "difficulty": "core"
      },
      {
       "q": "Which word rhymes with \"COUGH\"?",
       "o": {
        "A": "Enough",
        "B": "Though",
        "C": "Off",
        "D": "Bough"
       },
       "a": "C",
       "concept": "'Cough' uses the 'off' sound pattern, one of several possible 'ough' pronunciations.",
       "method": "Say 'cough' aloud — it rhymes with 'off', not the other 'ough' patterns.",
       "difficulty": "core"
      },
      {
       "q": "Which word has a silent 'b'?",
       "o": {
        "A": "Comb",
        "B": "Bomb",
        "C": "Both A and B",
        "D": "Cab"
       },
       "a": "C",
       "concept": "The 'b' after 'm' at the end of a word (comb, bomb, lamb, thumb) is typically silent.",
       "method": "Say 'comb' and 'bomb' aloud — you never pronounce the final 'b' in either.",
       "difficulty": "core"
      },
      {
       "q": "Which pair of words are homophones (sound alike but spelt differently)?",
       "o": {
        "A": "Bear/Bare",
        "B": "Bead/Bad",
        "C": "Beat/Bit",
        "D": "Boat/But"
       },
       "a": "A",
       "concept": "Homophones sound identical despite different spelling and meaning.",
       "method": "Say 'bear' (animal) and 'bare' (uncovered) aloud — they sound exactly alike.",
       "difficulty": "core"
      },
      {
       "q": "Which word has a different number of syllables from the other three?",
       "o": {
        "A": "Beautiful",
        "B": "Wonderful",
        "C": "Careful",
        "D": "Powerful"
       },
       "a": "C",
       "concept": "Count the syllable beats in each word carefully.",
       "method": "Beau-ti-ful(3), won-der-ful(3), pow-er-ful(3), but care-ful is only 2 — the odd one out.",
       "difficulty": "core"
      },
      {
       "q": "Which word is stressed on the FIRST syllable?",
       "o": {
        "A": "pre-SENT (verb, to give)",
        "B": "PRE-sent (noun, a gift)",
        "C": "con-DUCT (verb)",
        "D": "de-CIDE"
       },
       "a": "B",
       "concept": "Many noun/verb pairs shift stress: as a noun, 'present' (a gift) stresses the first syllable.",
       "method": "Compare: PRE-sent (noun, gift) vs pre-SENT (verb, to give) — stress shifts with the part of speech.",
       "difficulty": "core"
      },
      {
       "q": "Which word has the same stressed vowel sound as \"CAT\"?",
       "o": {
        "A": "Cart",
        "B": "Cut",
        "C": "Cap",
        "D": "Coat"
       },
       "a": "C",
       "concept": "'Cat' uses the short /æ/ vowel sound, matching other short-a words like 'cap'.",
       "method": "Say 'cat' and 'cap' aloud — both share the same short vowel sound.",
       "difficulty": "core"
      },
      {
       "q": "Which word ends with a different consonant sound from the others?",
       "o": {
        "A": "Cats",
        "B": "Dogs",
        "C": "Books",
        "D": "Bags"
       },
       "a": "A",
       "concept": "The '-s' ending can sound like /s/ or /z/ depending on the preceding sound.",
       "method": "Say each aloud: dogs/books/bags end with a /z/-like sound, but 'cats' ends with a crisp /s/ sound.",
       "difficulty": "core"
      },
      {
       "q": "Which word has the stress on the LAST syllable?",
       "o": {
        "A": "CHAIR-man",
        "B": "en-gi-NEER",
        "C": "MAN-ag-er",
        "D": "TEACH-er"
       },
       "a": "B",
       "concept": "Most two/three-syllable English nouns stress an early syllable; 'engineer' is a common exception stressing the last.",
       "method": "Say all four aloud — only 'engineer' places its main beat on the final syllable.",
       "difficulty": "core"
      },
      {
       "q": "Which syllable is stressed in the word 'TELEPATHY'?",
       "o": {
        "A": "TE-le-pa-thy",
        "B": "te-le-PA-thy",
        "C": "te-LE-pa-thy",
        "D": "te-le-pa-THY"
       },
       "a": "C",
       "concept": "Word stress in English often falls on a specific syllable that must be memorised rather than guessed from spelling.",
       "method": "'Telepathy' is stressed on the second syllable: te-LE-pa-thy.",
       "difficulty": "core"
      },
      {
       "q": "Which syllable is stressed in the word 'CONSPIRACY'?",
       "o": {
        "A": "CON-spi-ra-cy",
        "B": "con-SPI-ra-cy",
        "C": "con-spi-RA-cy",
        "D": "con-spi-ra-CY"
       },
       "a": "B",
       "concept": "Many multi-syllable English words carry their stress on the second syllable — a pattern worth listening for.",
       "method": "'Conspiracy' is stressed as con-SPI-ra-cy.",
       "difficulty": "core"
      },
      {
       "q": "Which syllable is stressed in the word 'CONTINUOUS'?",
       "o": {
        "A": "con-TI-nu-ous",
        "B": "CON-ti-nu-ous",
        "C": "con-ti-nu-OUS",
        "D": "con-ti-NU-ous"
       },
       "a": "A",
       "concept": "Practise identifying the stressed syllable by saying the word aloud and noticing which part you naturally emphasise.",
       "method": "'Continuous' is stressed as con-TI-nu-ous.",
       "difficulty": "core"
      },
      {
       "q": "Which of these words does NOT share the same consonant sound as the others?",
       "o": {
        "A": "Suite",
        "B": "Quite",
        "C": "Sword",
        "D": "Sweet"
       },
       "a": "C",
       "concept": "English spelling doesn't always match pronunciation — 'sword' has a silent 'w', changing its consonant sound.",
       "method": "Suite, quite, and sweet all begin with a /w/-like glide sound after the initial consonant; 'sword' does not, since its 'w' is silent.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT a falling intonation (tune)?",
       "o": {
        "A": "Who is there?",
        "B": "What are you doing?",
        "C": "Are you stupid?",
        "D": "Which one is yours?"
       },
       "a": "C",
       "concept": "Wh-questions (who, what, which, where, when, why) typically use falling intonation; yes/no questions typically rise.",
       "method": "'Are you stupid?' is a yes/no question, which normally takes a RISING tune — unlike the other three, which are Wh-questions with falling tunes.",
       "difficulty": "core"
      },
      {
       "q": "Which of these words has the consonant sound /b/ pronounced in it?",
       "o": {
        "A": "Comb",
        "B": "Tomb",
        "C": "Bottle",
        "D": "Plumber"
       },
       "a": "C",
       "concept": "In several English words, a 'b' after 'm' at the end of a syllable is silent — spot which option keeps its /b/ sound.",
       "method": "Comb, tomb, and plumber all have a silent 'b'; only 'bottle' actually pronounces the /b/ sound.",
       "difficulty": "core"
      },
      {
       "q": "Which of these words has the same vowel sound as the underlined syllable in 'ANARCHY'?",
       "o": {
        "A": "church",
        "B": "liturgy",
        "C": "casket",
        "D": "first"
       },
       "a": "C",
       "concept": "Vowel-sound matching questions require listening for the sound, not just looking at the spelling.",
       "method": "The stressed vowel in 'anarchy' (/ɑː/) matches the vowel sound in 'casket', not the /ɜː/ sound found in church, liturgy, or first.",
       "difficulty": "core"
      },
      {
       "q": "Which of these words has the same consonant sound as the underlined letters in 'CHURCH'?",
       "o": {
        "A": "Question",
        "B": "Machine",
        "C": "Sugar",
        "D": "Ancient"
       },
       "a": "A",
       "concept": "'Ch' can represent different sounds in English depending on the word — compare the actual sound, not the letters.",
       "method": "'Church' uses the /tʃ/ sound, the same sound as the 'st' in 'question'; machine, sugar, and ancient all use /ʃ/ instead.",
       "difficulty": "core"
      }
     ],
     "freq": 49
    },
    {
     "id": "correction",
     "name": "Sentence Structure, Tags & Transformation",
     "blurb": "Rephrasing, question tags, and picking the one grammatically clean sentence out of four similar ones.",
     "concept_notes": [
      "Question tags always flip polarity: positive statement → negative tag; negative statement → positive tag.",
      "The tag's pronoun must match the sentence's real subject, and the tag's verb must match the sentence's tense/auxiliary.",
      "Short answers must echo the exact subject and auxiliary verb used in the question — don't switch pronouns or verbs.",
      "Embedded/indirect questions (after 'I wonder', 'Dave asked whether') use normal statement word order, never question inversion."
     ],
     "questions": [
      {
       "q": "Which option correctly completes: \"He does not have to join the queue, _____?\"",
       "o": {
        "A": "doesn't he?",
        "B": "does he?",
        "C": "does he not?",
        "D": "is he?"
       },
       "a": "B",
       "concept": "Question tags flip polarity: a NEGATIVE statement takes a POSITIVE tag.",
       "method": "Main clause has 'not' (negative) → tag must be positive: does he?",
       "difficulty": "core"
      },
      {
       "q": "\"You can make it through, can't you?\" What is the natural short answer if the person truly can?",
       "o": {
        "A": "No, I can",
        "B": "Yes, you can",
        "C": "Yes, I can't",
        "D": "No, I can't"
       },
       "a": "B",
       "concept": "Short answers must match the verb used in the question and stay logically consistent.",
       "method": "Truthful 'yes' must also say 'can', not 'can't'.",
       "difficulty": "core"
      },
      {
       "q": "\"We did them proud, didn't we?\" Choose the consistent short answer.",
       "o": {
        "A": "Yes, you did",
        "B": "No, we didn't",
        "C": "Yes, we did",
        "D": "Yes, they did"
       },
       "a": "C",
       "concept": "A short answer must repeat the same subject and verb tense as the original.",
       "method": "Statement is about 'we' — reply must also be about 'we'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the sentence that best expresses: \"He should be able to do it alone.\"",
       "o": {
        "A": "He would be able to do it alone",
        "B": "He ought to be able to do it alone",
        "C": "He has to be able to do it alone",
        "D": "He will do it alone"
       },
       "a": "B",
       "concept": "'Should' expresses mild obligation/expectation; 'ought to' carries the same sense.",
       "method": "Match the MEANING, not just the words — both express reasonable expectation.",
       "difficulty": "core"
      },
      {
       "q": "Choose the sentence that best expresses: \"You can talk to her.\"",
       "o": {
        "A": "You are permitted to talk to her",
        "B": "You must talk to her",
        "C": "You should talk to her",
        "D": "You will talk to her"
       },
       "a": "A",
       "concept": "'Can' here expresses permission/possibility, not obligation.",
       "method": "Does the sentence force an action, or allow it? 'Can' only allows.",
       "difficulty": "core"
      },
      {
       "q": "Choose the sentence that best expresses: \"Life is not always a bed of roses.\"",
       "o": {
        "A": "Life is not always as pleasant as one thought",
        "B": "Life has no flowers in it",
        "C": "Life is always disappointing",
        "D": "Life is exactly as expected"
       },
       "a": "A",
       "concept": "'A bed of roses' means an easy, pleasant life; the sentence negates 'always'.",
       "method": "Translate the idiom first, then negate exactly as the sentence does.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option that correctly completes: \"If he had studied harder, he _____.\"",
       "o": {
        "A": "would not fail",
        "B": "would not have failed",
        "C": "will not fail",
        "D": "does not fail"
       },
       "a": "B",
       "concept": "Third conditional (unreal past): if + past perfect, would have + V3.",
       "method": "'If he HAD studied' locks the second half into 'would have + past participle'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option that correctly completes: \"Although I saw the girl running, I did not know _____.\"",
       "o": {
        "A": "where she goes",
        "B": "where she is going",
        "C": "where she was going",
        "D": "where she has gone"
       },
       "a": "C",
       "concept": "When the main verb is past tense, the embedded clause also shifts to a past form.",
       "method": "Match the embedded clause tense to the main clause's past tense.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option that correctly completes: \"Dave asked Sarah _____.\"",
       "o": {
        "A": "whether would she marry him",
        "B": "whether she would marry him",
        "C": "could she marry him",
        "D": "to married him"
       },
       "a": "B",
       "concept": "In reported speech, a yes/no question uses 'whether/if' with normal statement word order.",
       "method": "After 'whether', keep statement order: 'she would', never inverted.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence is free from grammatical error?",
       "o": {
        "A": "Mrs Philip had an accident because she was driving rather carelessly.",
        "B": "Mrs Philip had an accident because she was rather driving carelessly.",
        "C": "Mrs Philip had an accident because she was carelessly driving rather.",
        "D": "Mrs Philip had an accident because she was rather carelessly driving."
       },
       "a": "A",
       "concept": "Adverbs of manner sit after the verb; intensifiers like 'rather' come directly before the adverb.",
       "method": "Natural order: verb + intensifier + adverb: was driving rather carelessly.",
       "difficulty": "core"
      },
      {
       "q": "Complete with the correct tag: \"Students should study properly for their examinations, _____?\"",
       "o": {
        "A": "Isn't it?",
        "B": "Shouldn't it?",
        "C": "Shouldn't they?",
        "D": "Should they?"
       },
       "a": "C",
       "concept": "The tag pronoun must match the sentence's subject ('students' → they), and negate a positive statement.",
       "method": "Subject 'students' = they; positive statement → negative tag: shouldn't they?",
       "difficulty": "core"
      },
      {
       "q": "Complete with the correct tag: \"You will join the dance, _____?\"",
       "o": {
        "A": "Willn't you?",
        "B": "Can't you?",
        "C": "Won't you?",
        "D": "Will you?"
       },
       "a": "C",
       "concept": "'Will' has an irregular negative tag form: won't, not 'willn't'.",
       "method": "Memorise the irregular pair: will → won't (never willn't).",
       "difficulty": "core"
      },
      {
       "q": "Complete with the correct tag: \"We shouldn't be there, _____?\"",
       "o": {
        "A": "Shouldn't we?",
        "B": "Must we?",
        "C": "Should we?",
        "D": "Can't we?"
       },
       "a": "C",
       "concept": "A negative statement takes a positive tag.",
       "method": "'Shouldn't' (negative) → tag flips positive: should we?",
       "difficulty": "core"
      },
      {
       "q": "Complete with the correct tag: \"Our days are numbered on this programme, _____?\"",
       "o": {
        "A": "Aren't we?",
        "B": "Are we?",
        "C": "Are they?",
        "D": "Aren't they?"
       },
       "a": "D",
       "concept": "The tag pronoun matches the real subject ('days' → they), and a positive statement gets a negative tag.",
       "method": "Subject is 'days' (they), statement is positive → negative tag: aren't they?",
       "difficulty": "core"
      },
      {
       "q": "Complete with the correct tag: \"She does her knitting skillfully, _____?\"",
       "o": {
        "A": "Doesn't she?",
        "B": "Isn't it?",
        "C": "Does she?",
        "D": "Didn't she?"
       },
       "a": "A",
       "concept": "A positive statement takes a negative tag, matching the subject and auxiliary verb.",
       "method": "Positive statement + 'she' + present simple → doesn't she?",
       "difficulty": "core"
      },
      {
       "q": "Complete with the correct tag: \"Mary and John cannot force me to attend the party, _____?\"",
       "o": {
        "A": "Will they?",
        "B": "Can he?",
        "C": "Can she?",
        "D": "Can they?"
       },
       "a": "D",
       "concept": "The tag pronoun must reflect the plural compound subject (Mary and John → they).",
       "method": "Two people joined by 'and' = they; negative statement → positive tag: can they?",
       "difficulty": "core"
      },
      {
       "q": "In August, my parents will be married for twenty-five years — best correction:",
       "o": {
        "A": "shall have been married for twenty-five years",
        "B": "will have been married for twenty-five years",
        "C": "will be married for twenty-five years",
        "D": "will have married for twenty-five years"
       },
       "a": "D",
       "concept": "A milestone reached by a future date uses the future perfect for the ongoing state.",
       "method": "'By August' + a duration reaching completion → will have married.",
       "difficulty": "core"
      },
      {
       "q": "\"The first part of the test was on biology, the second on physics, and the third on literature\" — which punctuation/structure is correct?",
       "o": {
        "A": "...on physics; and the third on literature",
        "B": "...on physics: and the third on literature",
        "C": "...on physics and the third on literature",
        "D": "...on physics, and the third on literature"
       },
       "a": "D",
       "concept": "Items in a list of three or more use commas between each item, including before the final 'and' (the Oxford/serial comma).",
       "method": "List of 3 parallel items → comma before each, including before 'and'.",
       "difficulty": "core"
      },
      {
       "q": "\"Online shopping can be convenient and time saving\" — which correction/punctuation is proper?",
       "o": {
        "A": "should be convenient and time saving",
        "B": "could be convenient and time saving",
        "C": "can be convenient and time saving",
        "D": "can be convenient and time-saving"
       },
       "a": "D",
       "concept": "Compound adjectives before or describing a quality together are usually hyphenated: time-saving.",
       "method": "'Time-saving' as a compound descriptive term takes a hyphen.",
       "difficulty": "core"
      },
      {
       "q": "\"During colonial days a school room looked rather empty\" — correct punctuation adds a comma where?",
       "o": {
        "A": "colonial days, a school room looked",
        "B": "colonial Days, a school room looked",
        "C": "colonial Days; a school room looked",
        "D": "colonialdays, a school room looked"
       },
       "a": "A",
       "concept": "An introductory time phrase ('During colonial days') is set off from the main clause with a comma.",
       "method": "Introductory phrase + comma + main clause; no capitalisation of ordinary 'days'.",
       "difficulty": "core"
      },
      {
       "q": "\"After it was repaired, it ran perfect again\" — correct version:",
       "o": {
        "A": "would run perfectly again",
        "B": "could run perfect again",
        "C": "ran perfectly again",
        "D": "ran perfect again"
       },
       "a": "C",
       "concept": "Adverbs, not adjectives, modify verbs — 'ran' needs 'perfectly', not 'perfect'.",
       "method": "Verb 'ran' needs an adverb: perfectly, not the adjective 'perfect'.",
       "difficulty": "core"
      },
      {
       "q": "\"I have trouble _____ my password.\"",
       "o": {
        "A": "to remember",
        "B": "to remembering",
        "C": "remember",
        "D": "remembering"
       },
       "a": "D",
       "concept": "'Have trouble/difficulty' is followed by a gerund (-ing form), not an infinitive.",
       "method": "Fixed pattern: have trouble + verb-ing.",
       "difficulty": "core"
      },
      {
       "q": "\"My parents often _____ after dinner.\"",
       "o": {
        "A": "walking",
        "B": "go a walk",
        "C": "take a work",
        "D": "go for a walk"
       },
       "a": "D",
       "concept": "'Go for a walk' is the fixed idiomatic phrase for taking a casual stroll.",
       "method": "Learn as a set phrase: go for a walk.",
       "difficulty": "core"
      },
      {
       "q": "A gifted scientist, Newton _____ some of the most fundamental laws in the history of science.",
       "o": {
        "A": "discovered",
        "B": "keep discovering",
        "C": "who discovered",
        "D": "the discoverer of"
       },
       "a": "A",
       "concept": "The main clause needs a finite verb in simple past to complete the sentence.",
       "method": "'Newton' is the subject; it needs a main verb — discovered.",
       "difficulty": "core"
      },
      {
       "q": "\"God should take control of the heart of the organizers— this exercise is _____ than expected.\"",
       "o": {
        "A": "more tough",
        "B": "more tougher",
        "C": "much tougher",
        "D": "much more tougher"
       },
       "a": "C",
       "concept": "Comparative adjectives are intensified with 'much', and 'tougher' already has its own comparative '-er' — never double it.",
       "method": "Never combine 'more' with an '-er' word: much tougher, not more tougher.",
       "difficulty": "core"
      },
      {
       "q": "\"I wonder how much _____.\"",
       "o": {
        "A": "do these earrings cost",
        "B": "these earrings cost",
        "C": "for these earrings cost",
        "D": "cost these earrings"
       },
       "a": "B",
       "concept": "Embedded (indirect) questions use normal statement word order, not question-style inversion.",
       "method": "After 'I wonder', keep statement order: these earrings cost, not 'do these earrings cost'.",
       "difficulty": "core"
      },
      {
       "q": "\"I am not attending the ceremony.\" \"___ is my wife.\"",
       "o": {
        "A": "So",
        "B": "Neither",
        "C": "Either",
        "D": "Nor"
       },
       "a": "B",
       "concept": "'Neither' agrees with a preceding negative statement to add another negative case.",
       "method": "Negative statement + 'neither' + auxiliary + subject: Neither is my wife.",
       "difficulty": "core"
      },
      {
       "q": "\"Some people think ___ are potentially a nuisance.\" (correct plural of a compound noun)",
       "o": {
        "A": "parent-in-laws",
        "B": "parents-in-law",
        "C": "parent-in-law's",
        "D": "parents-in-laws"
       },
       "a": "B",
       "concept": "In compound nouns like 'parent-in-law', the main noun ('parent') takes the plural, not the whole compound.",
       "method": "Pluralise the core noun only: parentS-in-law, not the whole hyphenated string.",
       "difficulty": "core"
      },
      {
       "q": "\"By the end of the football match today, we ___ the best player.\"",
       "o": {
        "A": "could have known",
        "B": "might have",
        "C": "will have known",
        "D": "would have known"
       },
       "a": "C",
       "concept": "A future event completed by a stated point in time uses the future perfect, not the conditional.",
       "method": "'By the end of the match TODAY' (a real future point) → will have known, not the hypothetical 'would have'.",
       "difficulty": "core"
      },
      {
       "q": "\"My assignment was ___ for me to complete in one night.\"",
       "o": {
        "A": "much too difficult",
        "B": "too much difficult",
        "C": "difficult much too",
        "D": "much difficult too"
       },
       "a": "A",
       "concept": "'Much too + adjective' is the correct order for intensifying an excessive quality.",
       "method": "Fixed word order: much too + adjective (much too difficult), never scrambled.",
       "difficulty": "core"
      },
      {
       "q": "\"Umar: I have never visited the dentist. Aliyu: ___\"",
       "o": {
        "A": "neither I",
        "B": "neither myself",
        "C": "neither have I",
        "D": "I also never"
       },
       "a": "C",
       "concept": "To agree with a negative statement, use 'neither' + auxiliary + subject.",
       "method": "Fixed agreement structure: neither have I (matching 'have never' in the first speaker's statement).",
       "difficulty": "core"
      },
      {
       "q": "\"Oboro will always ___ his friends whenever they are in trouble.\"",
       "o": {
        "A": "stand up for",
        "B": "stand down for",
        "C": "stand across for",
        "D": "stand beside for"
       },
       "a": "A",
       "concept": "'Stand up for someone' is the fixed phrasal verb meaning to support/defend them.",
       "method": "Learn as one unit: stand up for (support), not the invented alternatives.",
       "difficulty": "core"
      },
      {
       "q": "\"Yours is to command; ___ is to obey.\"",
       "o": {
        "A": "their's",
        "B": "theirs'",
        "C": "theirs",
        "D": "their"
       },
       "a": "C",
       "concept": "The possessive pronoun 'theirs' never takes an apostrophe.",
       "method": "Possessive pronouns (yours, hers, theirs) never use an apostrophe, unlike possessive nouns.",
       "difficulty": "core"
      },
      {
       "q": "\"My mother bought a BICYCLE yesterday.\" Which question correctly targets the capitalised word?",
       "o": {
        "A": "What did my mother buy yesterday?",
        "B": "Whose mother bought a bicycle yesterday?",
        "C": "Did my mother steal a bicycle yesterday?",
        "D": "When did my mother buy a bicycle?"
       },
       "a": "A",
       "concept": "To form a question targeting a specific word, replace exactly that word with the matching question word.",
       "method": "The capitalised word (BICYCLE) is the object bought — ask 'what' was bought.",
       "difficulty": "core"
      },
      {
       "q": "\"YOUR sister should come with us tomorrow.\" Which question correctly probes the capitalised word?",
       "o": {
        "A": "Should your brother come with us tomorrow?",
        "B": "Should our brother come with us tomorrow?",
        "C": "Should Ado's sister come with us tomorrow?",
        "D": "Should my sister come with us tomorrow?"
       },
       "a": "D",
       "concept": "Question-formation drills of this type swap the emphasised possessive for a different one, testing whether you track WHO is being referred to.",
       "method": "Follow the established pattern: swap YOUR for another possessive (my), keeping the rest of the sentence structure intact.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence correctly orders the adjectives: \"The first prize was ___ tray.\"",
       "o": {
        "A": "a carved wooden attractive",
        "B": "a wooden attractive carved",
        "C": "an attractive carved wooden",
        "D": "a carved attractive wooden"
       },
       "a": "C",
       "concept": "English adjective order follows: opinion → shape/technique → material.",
       "method": "Order: attractive (opinion), carved (technique), wooden (material).",
       "difficulty": "core"
      },
      {
       "q": "\"When my mother gave me the money, I bought myself a ___ gown.\" (correct adjective order)",
       "o": {
        "A": "yellow new silk",
        "B": "new yellow silk",
        "C": "silk new yellow",
        "D": "new silk yellow"
       },
       "a": "B",
       "concept": "English adjective order follows: age/opinion → colour → material.",
       "method": "Order: new (age), yellow (colour), silk (material).",
       "difficulty": "core"
      },
      {
       "q": "Complete the tag: \"The sun rises in the east, ___?\"",
       "o": {
        "A": "isn't it",
        "B": "doesn't it",
        "C": "won't it",
        "D": "didn't it"
       },
       "a": "B",
       "concept": "A positive statement in simple present takes a negative present tense tag.",
       "method": "Present simple, positive statement → negative present tag: doesn't it?",
       "difficulty": "core"
      },
      {
       "q": "Complete the tag: \"They haven't finished the assignment, ___?\"",
       "o": {
        "A": "have they",
        "B": "haven't they",
        "C": "did they",
        "D": "do they"
       },
       "a": "A",
       "concept": "A negative statement takes a positive tag.",
       "method": "'Haven't' (negative) → positive tag: have they?",
       "difficulty": "core"
      },
      {
       "q": "Complete the tag: \"Let's go to the market, ___?\"",
       "o": {
        "A": "do we",
        "B": "don't we",
        "C": "shall we",
        "D": "will we"
       },
       "a": "C",
       "concept": "Suggestions with 'Let's' always take the fixed tag 'shall we?'",
       "method": "Memorise the fixed rule: Let's...shall we? (no exceptions).",
       "difficulty": "core"
      },
      {
       "q": "Choose the option that best restates: \"It's possible that he missed the bus.\"",
       "o": {
        "A": "He definitely missed the bus",
        "B": "He may have missed the bus",
        "C": "He never misses the bus",
        "D": "He always misses the bus"
       },
       "a": "B",
       "concept": "'It's possible that' expresses uncertainty, matching 'may have' for a possible past event.",
       "method": "Match the degree of certainty: possible = may have, not definitely.",
       "difficulty": "core"
      },
      {
       "q": "Choose the option that best restates: \"She is unable to attend the meeting.\"",
       "o": {
        "A": "She cannot attend the meeting",
        "B": "She refuses to attend the meeting",
        "C": "She will attend the meeting",
        "D": "She might attend the meeting"
       },
       "a": "A",
       "concept": "'Unable to' means lacking the ability/opportunity — matches 'cannot'.",
       "method": "'Unable to' = cannot, expressing incapacity, not choice.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correct indirect (reported) version: Ade said, \"I am tired.\"",
       "o": {
        "A": "Ade said that he is tired",
        "B": "Ade said that he was tired",
        "C": "Ade said that I was tired",
        "D": "Ade says that he was tired"
       },
       "a": "B",
       "concept": "In reported speech, present tense in direct speech shifts to past tense, and pronouns shift to match the reporter's perspective.",
       "method": "'I am' → 'he was': pronoun and tense both shift back.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correct indirect (reported) version: She said, \"I will call you tomorrow.\"",
       "o": {
        "A": "She said that she would call me the next day",
        "B": "She said that she will call me tomorrow",
        "C": "She said she calls me tomorrow",
        "D": "She said that she would call me tomorrow"
       },
       "a": "A",
       "concept": "In reported speech, 'will' shifts to 'would', and time expressions like 'tomorrow' shift to 'the next day'.",
       "method": "Shift both the modal (will→would) and the time reference (tomorrow→the next day).",
       "difficulty": "core"
      },
      {
       "q": "Choose the correct indirect (reported) version: He asked, \"Where do you live?\"",
       "o": {
        "A": "He asked where I lived",
        "B": "He asked where do I live",
        "C": "He asked where did I live",
        "D": "He asked where I live"
       },
       "a": "A",
       "concept": "Reported questions use normal statement word order, with the tense shifted back.",
       "method": "No inversion after 'where'; shift tense: live → lived.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence is grammatically correct?",
       "o": {
        "A": "Each of the students have their own book",
        "B": "Each of the students has their own book",
        "C": "Each of the students has its own book",
        "D": "Each of the students having their own book"
       },
       "a": "B",
       "concept": "'Each of' takes a singular verb regardless of the plural noun that follows.",
       "method": "'Each' is always singular — has, not have.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence is grammatically correct?",
       "o": {
        "A": "Neither of the answers are correct",
        "B": "Neither of the answers is correct",
        "C": "Neither of the answers were correct",
        "D": "Neither of the answers being correct"
       },
       "a": "B",
       "concept": "'Neither of' is always singular, regardless of the plural noun that follows.",
       "method": "'Neither' is always singular — is, not are/were.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence is grammatically correct?",
       "o": {
        "A": "If I was rich, I would travel the world",
        "B": "If I were rich, I would travel the world",
        "C": "If I am rich, I would travel the world",
        "D": "If I be rich, I would travel the world"
       },
       "a": "B",
       "concept": "Hypothetical conditions use the subjunctive 'were' for all persons.",
       "method": "Fixed subjunctive form: If I were...",
       "difficulty": "core"
      },
      {
       "q": "Which sentence correctly uses the passive voice for: \"The committee will announce the results tomorrow.\"",
       "o": {
        "A": "The results will be announced by the committee tomorrow",
        "B": "The results will announce by the committee tomorrow",
        "C": "The results are announced by the committee tomorrow",
        "D": "The results will be announcing by the committee tomorrow"
       },
       "a": "A",
       "concept": "Passive voice for future simple: will be + past participle.",
       "method": "Active 'will announce' becomes passive 'will be announced'.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence correctly uses the passive voice for: \"They have completed the project.\"",
       "o": {
        "A": "The project has been completed by them",
        "B": "The project have been completed by them",
        "C": "The project was completed by them",
        "D": "The project has completed by them"
       },
       "a": "A",
       "concept": "Passive voice for present perfect: has/have been + past participle.",
       "method": "Active 'have completed' becomes passive 'has been completed'.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence correctly uses 'fewer' vs 'less'?",
       "o": {
        "A": "There are less students this year",
        "B": "There are fewer students this year",
        "C": "There is fewer students this year",
        "D": "There is less students this year"
       },
       "a": "B",
       "concept": "'Fewer' is used with countable nouns (students); 'less' is used with uncountable nouns.",
       "method": "'Students' is countable → fewer, not less.",
       "difficulty": "core"
      },
      {
       "q": "Which sentence correctly uses 'fewer' vs 'less'?",
       "o": {
        "A": "I have fewer money than you",
        "B": "I have less money than you",
        "C": "I have fewer moneys than you",
        "D": "I have a fewer money than you"
       },
       "a": "B",
       "concept": "'Money' is uncountable, so 'less' is correct, not 'fewer'.",
       "method": "'Money' is uncountable → less, not fewer.",
       "difficulty": "core"
      },
      {
       "q": "Which is correct: \"Between you and ___, I think he's wrong.\"",
       "o": {
        "A": "I",
        "B": "me",
        "C": "myself",
        "D": "mine"
       },
       "a": "B",
       "concept": "After a preposition ('between'), always use the object pronoun.",
       "method": "Preposition + object pronoun: between you and me.",
       "difficulty": "core"
      },
      {
       "q": "Which is correct: \"He is one of the students who ___ always on time.\"",
       "o": {
        "A": "is",
        "B": "are",
        "C": "was",
        "D": "has been"
       },
       "a": "B",
       "concept": "'One of the students who' — the relative clause 'who...' refers back to 'students' (plural), not 'one'.",
       "method": "The verb after 'who' agrees with 'students' (the larger group), not 'one': are.",
       "difficulty": "core"
      }
     ],
     "freq": 55
    },
    {
     "id": "spelling",
     "name": "Spelling & Word Forms",
     "blurb": "Correct spelling of commonly misspelt words, and choosing the right form of a word for its role in a sentence.",
     "concept_notes": [
      "Most spelling questions test a small, recurring set of 'trap' words — double letters (accommodation, embarrassment), silent letters, and unusual letter combinations.",
      "When several options look almost identical, isolate exactly where they differ (one letter, one double-letter) rather than reading the whole word again and again.",
      "Word-form questions test whether you know the difference between a noun, verb, and adjective form of the same root (advice/advise, effect/affect).",
      "If genuinely unsure, sound the word out syllable by syllable — it often reveals which spelling 'feels' wrong."
     ],
     "questions": [
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Millenium",
        "B": "Millennium",
        "C": "Milennium",
        "D": "Millenniumn"
       },
       "a": "B",
       "concept": "'Millennium' has a double 'n' and a double 'n' again before '-ium'.",
       "method": "Break it down: mill-enn-ium — double 'l' and double 'n'.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Occassion",
        "B": "Ocassion",
        "C": "Occasion",
        "D": "Ocasion"
       },
       "a": "C",
       "concept": "'Occasion' has a double 'c' but a single 's'.",
       "method": "Memorise: occASion — double c, single s (opposite of what many expect).",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Embarassment",
        "B": "Embarrassment",
        "C": "Embarrasment",
        "D": "Embarasment"
       },
       "a": "B",
       "concept": "'Embarrassment' has a double 'r' and a double 's'.",
       "method": "Break it down: em-BARR-ASS-ment — both consonant pairs doubled.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Catarrh",
        "B": "Catarr",
        "C": "Cattarh",
        "D": "Catarh"
       },
       "a": "A",
       "concept": "'Catarrh' ends in a double 'r' followed by a silent 'h'.",
       "method": "Memorise the unusual ending: -arrh (double r, then h).",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Casette",
        "B": "Cassette",
        "C": "Casete",
        "D": "Cassete"
       },
       "a": "B",
       "concept": "'Cassette' has a double 's' and a double 't'.",
       "method": "French-origin words like this often double consonants: caSSETTe.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Comittee",
        "B": "Committe",
        "C": "Committee",
        "D": "Comittee"
       },
       "a": "C",
       "concept": "'Committee' has a double 'm', double 't', and double 'e'.",
       "method": "Break it down: com-MITT-EE — three doubled letters in sequence.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Assasination",
        "B": "Assassination",
        "C": "Asassination",
        "D": "Assassinnation"
       },
       "a": "B",
       "concept": "'Assassination' has a double 's' twice, but a single 'n'.",
       "method": "Break it down: as-SASS-ination — double s appears twice.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Spagetti",
        "B": "Spaghetti",
        "C": "Spageti",
        "D": "Spaghettii"
       },
       "a": "B",
       "concept": "'Spaghetti' keeps its Italian-origin 'gh' and double 't'.",
       "method": "Memorise the Italian-origin spelling: spa-GHE-tti.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Incestuous",
        "B": "Incestious",
        "C": "Incestuos",
        "D": "Inscestuous"
       },
       "a": "A",
       "concept": "'Incestuous' ends in '-uous', a common adjective ending.",
       "method": "Memorise the ending pattern: -uous, as in continuous, strenuous.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Lollypop",
        "B": "Lolipop",
        "C": "Lollipop",
        "D": "Lollipoop"
       },
       "a": "C",
       "concept": "'Lollipop' has a double 'l' but single 'p's.",
       "method": "Memorise: LOLLI-pop — double l only.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Maintainance",
        "B": "Maintenance",
        "C": "Maintenence",
        "D": "Maintainence"
       },
       "a": "B",
       "concept": "'Maintenance' drops the second 'ai' from 'maintain' when forming the noun.",
       "method": "Note the change: maintAIn → maintEnance (the spelling shifts from 'ai' to 'e').",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Liason",
        "B": "Liaison",
        "C": "Liaisson",
        "D": "Liaisen"
       },
       "a": "B",
       "concept": "'Liaison' keeps its French-origin 'ai' spelling.",
       "method": "Memorise the French-origin pattern: li-AI-son.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Mischevious",
        "B": "Mischievious",
        "C": "Mischievous",
        "D": "Mischeivous"
       },
       "a": "C",
       "concept": "'Mischievous' ends in '-ievous', a commonly mispronounced and misspelt word.",
       "method": "Watch the trap: it's misCHIEVous, NOT the extra-syllable 'mischievIous'.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Rendezvous",
        "B": "Rendevous",
        "C": "Rendezvouz",
        "D": "Rendevouz"
       },
       "a": "A",
       "concept": "'Rendezvous' keeps its French spelling with a silent 's' and 'z'.",
       "method": "Memorise the French-origin spelling as one unit: ren-dez-vous.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Ammunition",
        "B": "Amunition",
        "C": "Ammunision",
        "D": "Amunnition"
       },
       "a": "A",
       "concept": "'Ammunition' has a double 'm' but a single 'n'.",
       "method": "Break it down: AMM-uni-tion — double m only.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Medeival",
        "B": "Medieval",
        "C": "Medival",
        "D": "Mediaeval spelt as Medeval"
       },
       "a": "B",
       "concept": "'Medieval' follows the 'i before e' pattern here.",
       "method": "Memorise: medi-EVAL, with 'ie' not 'ei'.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Occurence",
        "B": "Occurrence",
        "C": "Ocurrence",
        "D": "Occurrance"
       },
       "a": "B",
       "concept": "'Occurrence' has a double 'c' and a double 'r'.",
       "method": "Break it down: oc-CURR-ence — both c and r are doubled.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Miscellaneous",
        "B": "Miscelaneous",
        "C": "Miscellaneus",
        "D": "Miscelanous"
       },
       "a": "A",
       "concept": "'Miscellaneous' has a double 'l' and ends in '-aneous'.",
       "method": "Break it down: mis-CELL-aneous — double l, then the '-aneous' ending.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Interregnum",
        "B": "Interregnnum",
        "C": "Interregnum spelt Intereignum",
        "D": "Interregnun"
       },
       "a": "A",
       "concept": "'Interregnum' (a period without a ruler) is built from 'inter-' + 'regnum' (reign).",
       "method": "Break it down: inter- (between) + regnum (reign) = a gap between reigns.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt option: \"Local governments are authorised to pass ___.\"",
       "o": {
        "A": "byes'-laws",
        "B": "bye-laws",
        "C": "bye-law",
        "D": "bye's-law"
       },
       "a": "B",
       "concept": "'Bye-laws' (also spelt 'by-laws') is the correct plural compound for local regulations.",
       "method": "Memorise the compound: bye-laws, plural formed on the second word.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correct word: \"He suffered a great ___ when his business failed.\" (noun form)",
       "o": {
        "A": "lose",
        "B": "loss",
        "C": "looses",
        "D": "loose"
       },
       "a": "B",
       "concept": "'Loss' (noun) means something lost; 'lose' (verb) means to be deprived of something; 'loose' means not tight.",
       "method": "After 'a great', you need a noun — loss, not the verb 'lose' or the adjective 'loose'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correct word: \"My ___ to you is to always be honest.\" (noun form)",
       "o": {
        "A": "advise",
        "B": "advice",
        "C": "adviced",
        "D": "advises"
       },
       "a": "B",
       "concept": "'Advice' (noun, uncountable) is guidance given; 'advise' (verb) means to give that guidance.",
       "method": "After 'My', you need a noun — advice, not the verb 'advise'.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correct word: \"The teacher will ___ the students on their career choices.\" (verb form)",
       "o": {
        "A": "advice",
        "B": "advise",
        "C": "advises",
        "D": "adviced"
       },
       "a": "B",
       "concept": "After a modal ('will'), use the base verb form — 'advise', not the noun 'advice'.",
       "method": "Modal + base verb: will advise (verb), not will advice (noun).",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Definately",
        "B": "Definitely",
        "C": "Definitly",
        "D": "Definetly"
       },
       "a": "B",
       "concept": "'Definitely' is built from 'definite' + 'ly', keeping the full 'finite' root visible.",
       "method": "Spot the root: de-FINITE-ly, not 'definate'.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Recieve",
        "B": "Receive",
        "C": "Receeve",
        "D": "Receve"
       },
       "a": "B",
       "concept": "'Receive' follows the 'i before e except after c' rule.",
       "method": "After 'c', use 'ei': re-CEI-ve.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Beleive",
        "B": "Believe",
        "C": "Beleeve",
        "D": "Belive"
       },
       "a": "B",
       "concept": "'Believe' follows the standard 'i before e' rule (no preceding 'c').",
       "method": "Standard rule applies: bel-IE-ve.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Seperate",
        "B": "Separate",
        "C": "Seprate",
        "D": "Separrate"
       },
       "a": "B",
       "concept": "'Separate' has 'par' in the middle, a common misspelling trap (often written as 'seperate').",
       "method": "Remember: there's 'A RAT' in sep-A-RAT-e.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Neccessary",
        "B": "Necesary",
        "C": "Necessary",
        "D": "Neccesary"
       },
       "a": "C",
       "concept": "'Necessary' has one 'c' and two 's's.",
       "method": "Memorise: one collar (c), two socks/sleeves (ss) — a classic mnemonic for this word.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Occassionally",
        "B": "Occasionally",
        "C": "Ocasionally",
        "D": "Occasionaly"
       },
       "a": "B",
       "concept": "'Occasionally' has a double 'c', single 's', and double 'l'.",
       "method": "Build it up: oc-CA-sion-al-ly — double c, single s, double l.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Government",
        "B": "Goverment",
        "C": "Governmant",
        "D": "Governmint"
       },
       "a": "A",
       "concept": "'Government' keeps the 'n' before 'ment', often silently dropped in speech but not in spelling.",
       "method": "Say it fully aloud: govern-ment, keeping the 'n' visible in writing.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Enviroment",
        "B": "Environment",
        "C": "Enviromment",
        "D": "Envirnoment"
       },
       "a": "B",
       "concept": "'Environment' has an 'n' before 'ment' that's easy to drop in casual speech.",
       "method": "Say it fully aloud: environ-ment, keeping the 'n' visible in writing.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Wich",
        "B": "Which",
        "C": "Whitch",
        "D": "Wich"
       },
       "a": "B",
       "concept": "'Which' keeps the 'wh-' spelling common to many question words.",
       "method": "Group it with other wh- words: what, when, where, which.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Priviledge",
        "B": "Privilege",
        "C": "Priviege",
        "D": "Privelege"
       },
       "a": "B",
       "concept": "'Privilege' has no 'd' — a very common misspelling trap.",
       "method": "Watch for the false 'd': it's privi-LEGE, not privi-LEDGE.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Tommorow",
        "B": "Tomorow",
        "C": "Tomorrow",
        "D": "Tommorrow"
       },
       "a": "C",
       "concept": "'Tomorrow' has a single 'm' and a double 'r'.",
       "method": "Memorise: to-MOR-row — single m, double r.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Grammer",
        "B": "Grammar",
        "C": "Gramar",
        "D": "Grammur"
       },
       "a": "B",
       "concept": "'Grammar' ends in '-ar', not '-er'.",
       "method": "Memorise the ending: gramm-AR, a common trap word.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Untill",
        "B": "Until",
        "C": "Intill",
        "D": "Untile"
       },
       "a": "B",
       "concept": "'Until' has only a single 'l' at the end, unlike 'till' which has two.",
       "method": "Note the difference: 'till' (2 l's) vs 'until' (1 l).",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Wether",
        "B": "Whether",
        "C": "Weither",
        "D": "Whither (different word)"
       },
       "a": "B",
       "concept": "'Whether' (expressing a choice/alternative) needs the 'wh-' spelling to distinguish it from 'weather'.",
       "method": "Don't confuse 'whether' (choice) with 'weather' (climate) — similar sound, different spelling and meaning.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is correctly spelt?",
       "o": {
        "A": "Truely",
        "B": "Truly",
        "C": "Trully",
        "D": "Treuly"
       },
       "a": "B",
       "concept": "'Truly' drops the final 'e' from 'true' before adding '-ly', unlike most '-ly' adverbs.",
       "method": "Exception to the usual pattern: true→truly (the 'e' is dropped).",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct verb form: \"The company will ___ new staff next month.\"",
       "o": {
        "A": "employ",
        "B": "employs",
        "C": "employed",
        "D": "employing"
       },
       "a": "A",
       "concept": "After a modal ('will'), always use the base form of the verb.",
       "method": "Modal + base verb: will employ, not employs/employed.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct noun form: \"His ___ to the club was rejected.\"",
       "o": {
        "A": "apply",
        "B": "applies",
        "C": "application",
        "D": "applying"
       },
       "a": "C",
       "concept": "After a possessive ('His'), a noun is needed, not a verb.",
       "method": "'His ___' needs a noun: application, not the verb 'apply'.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct adjective form: \"She gave a very ___ presentation.\"",
       "o": {
        "A": "impress",
        "B": "impression",
        "C": "impressive",
        "D": "impressing"
       },
       "a": "C",
       "concept": "Before a noun ('presentation'), an adjective is needed to describe it.",
       "method": "'Very ___ presentation' needs an adjective: impressive.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct verb form: \"The heavy rain ___ the roads.\"",
       "o": {
        "A": "flooding",
        "B": "flood",
        "C": "flooded",
        "D": "floods (only with plural subject)"
       },
       "a": "C",
       "concept": "A simple past narrative action needs the simple past tense.",
       "method": "A completed past event (the rain flooding the roads) takes simple past: flooded.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct spelling?",
       "o": {
        "A": "Restaurant",
        "B": "Resturant",
        "C": "Restaurent",
        "D": "Resturaunt"
       },
       "a": "A",
       "concept": "'Restaurant' keeps its French-origin spelling, including the 'au'.",
       "method": "Memorise the French-origin pattern: re-STAU-rant.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct spelling?",
       "o": {
        "A": "February",
        "B": "Febuary",
        "C": "Feburary",
        "D": "Februrary"
       },
       "a": "A",
       "concept": "'February' keeps the first 'r' that's often dropped in casual speech.",
       "method": "Say it fully: Feb-RU-ary, keeping both r's.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct spelling?",
       "o": {
        "A": "Wednessday",
        "B": "Wednesday",
        "C": "Wensday",
        "D": "Wendsday"
       },
       "a": "B",
       "concept": "'Wednesday' keeps a silent 'd' from its Old English origin (Woden's day).",
       "method": "Memorise the silent letter: Wed-NES-day, 'd' is written but not pronounced.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct spelling?",
       "o": {
        "A": "Questionaire",
        "B": "Questionnaire",
        "C": "Questionnair",
        "D": "Questionaire"
       },
       "a": "B",
       "concept": "'Questionnaire' has a double 'n' from its French origin.",
       "method": "Memorise the French-origin double n: questio-NN-aire.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct spelling?",
       "o": {
        "A": "Rythm",
        "B": "Rhythm",
        "C": "Rhythem",
        "D": "Rhythym"
       },
       "a": "B",
       "concept": "'Rhythm' has no vowel between 'rh' and 'thm' apart from the 'y'.",
       "method": "Memorise as a whole unit: rhy-thm, an unusual consonant-heavy spelling.",
       "difficulty": "core"
      },
      {
       "q": "Which is the correct spelling?",
       "o": {
        "A": "Pronounciation",
        "B": "Pronunciation",
        "C": "Pronuncation",
        "D": "Pronounceation"
       },
       "a": "B",
       "concept": "'Pronunciation' (the noun) drops the 'o' that appears in 'pronounce' (the verb).",
       "method": "Note the change: pronOUNce (verb) → pronUNciation (noun, no 'o').",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Harasment",
        "B": "Harrasment",
        "C": "Harassment",
        "D": "Harrasement"
       },
       "a": "C",
       "concept": "'Harassment' is a commonly misspelt word — it doubles the 's' but not the 'r'.",
       "method": "Remember the pattern: one 'r', double 's' — harass, harassment.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Servette",
        "B": "Serviette",
        "C": "Serviete",
        "D": "Servitte"
       },
       "a": "B",
       "concept": "'Serviette' (a table napkin) borrows its spelling directly from French.",
       "method": "It keeps the French '-ette' ending intact and the 'i' before the double 't': serviette.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Millennium",
        "B": "Millenium",
        "C": "Milennium",
        "D": "Milenium"
       },
       "a": "A",
       "concept": "'Millennium' is one of the most frequently misspelt English words — it doubles both 'n's, unlike 'millenary'.",
       "method": "Remember: two l's, two n's — mille + nnium.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following words is correctly spelt?",
       "o": {
        "A": "seesata",
        "B": "siessta",
        "C": "siestta",
        "D": "siesta"
       },
       "a": "D",
       "concept": "'Siesta' (a short afternoon nap/rest) is borrowed directly from Spanish.",
       "method": "Correct spelling: siesta.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is the correctly spelt word?",
       "o": {
        "A": "Asymetrical",
        "B": "Assymmetrical",
        "C": "Asymmettrical",
        "D": "Asymmetrical"
       },
       "a": "D",
       "concept": "'Asymmetrical' keeps the double 'm' from 'symmetry' with the negative prefix 'a-' added.",
       "method": "Correct spelling: asymmetrical (single 's', double 'm').",
       "difficulty": "core"
      },
      {
       "q": "Pick the option with the correctly spelt word.",
       "o": {
        "A": "liaisee",
        "B": "laese",
        "C": "liaise",
        "D": "laissee"
       },
       "a": "C",
       "concept": "'Liaise' is borrowed from French ('liaison') and keeps an unusual vowel pattern.",
       "method": "Correct spelling: liaise.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Lakadaisical",
        "B": "Lackadaisical",
        "C": "Lackadiasical",
        "D": "Lackadaicical"
       },
       "a": "B",
       "concept": "'Lackadaisical' (showing lack of enthusiasm) has a tricky, unusual spelling pattern worth memorising as a whole.",
       "method": "Correct spelling: lackadaisical.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Diagnosed",
        "B": "Daignosed",
        "C": "Diagnossed",
        "D": "Daignnosed"
       },
       "a": "A",
       "concept": "Watch the letter order carefully — it's 'diag-', not 'daig-'.",
       "method": "Correct spelling: diagnosed.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Preroggative",
        "B": "Prerogative",
        "C": "Perogative",
        "D": "Prerrogative"
       },
       "a": "B",
       "concept": "'Prerogative' has a single 'r' after the first 'e' and a single 'g'.",
       "method": "Correct spelling: prerogative.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Mecurial",
        "B": "Merculial",
        "C": "Mercurial",
        "D": "Mecurrial"
       },
       "a": "C",
       "concept": "'Mercurial' (unpredictable, like the element mercury) keeps the 'r' before the 'c'.",
       "method": "Correct spelling: mercurial.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Recompense",
        "B": "Recoompense",
        "C": "Recoopense",
        "D": "Recompensse"
       },
       "a": "A",
       "concept": "'Recompense' (compensation) is a single-'s' word, unlike some similar-sounding words.",
       "method": "Correct spelling: recompense.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Somersalt",
        "B": "Summersault",
        "C": "Sormersault",
        "D": "Somersault"
       },
       "a": "D",
       "concept": "'Somersault' is often misspelt as if it contained the word 'summer' — it doesn't.",
       "method": "Correct spelling: somersault.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Prononciation",
        "B": "Pronunciation",
        "C": "Pronounciation",
        "D": "Pronaunciation"
       },
       "a": "B",
       "concept": "Note that 'pronunciation' (the noun) drops the second 'o' found in 'pronounce' (the verb) — a very commonly misspelt word.",
       "method": "Correct spelling: pronunciation (no 'o' before the 'unciation').",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Hiccups",
        "B": "Hicupps",
        "C": "Hiccupps",
        "D": "Hicups"
       },
       "a": "A",
       "concept": "'Hiccup' doubles the 'c' but not the 'p'.",
       "method": "Correct spelling: hiccups.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Privilege",
        "B": "Priviledge",
        "C": "Privileg",
        "D": "Privillege"
       },
       "a": "A",
       "concept": "'Privilege' has no 'd' — a very common misspelling adds one before the 'g'.",
       "method": "Correct spelling: privilege.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Commitment",
        "B": "Comitment",
        "C": "Committment",
        "D": "Comitmment"
       },
       "a": "A",
       "concept": "'Commitment' doubles the 'm' after 'com-' but has only one 't'.",
       "method": "Correct spelling: commitment.",
       "difficulty": "core"
      },
      {
       "q": "Pick the correctly spelt word.",
       "o": {
        "A": "Reminiscence",
        "B": "Remminniscence",
        "C": "Remminiscence",
        "D": "Reminniscense"
       },
       "a": "A",
       "concept": "'Reminiscence' ends in '-ence', not '-ense', and has single consonants throughout except the double 's'.",
       "method": "Correct spelling: reminiscence.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following spellings is NOT correct?",
       "o": {
        "A": "Marriageable",
        "B": "Noticeable",
        "C": "Manageable",
        "D": "Digesteble"
       },
       "a": "D",
       "concept": "Words ending in the '-able/-ible' suffix are commonly misspelt — the correct ending here is '-ible' for this particular word.",
       "method": "'Digestible' (not 'digesteble') is the correct spelling — making D the incorrect one.",
       "difficulty": "core"
      },
      {
       "q": "Which of these correctly completes: '_______ of materialism' (choose the correctly spelt word)?",
       "o": {
        "A": "Illusion",
        "B": "Ilussion",
        "C": "Illussion",
        "D": "Ilusion"
       },
       "a": "A",
       "concept": "'Illusion' doubles the 'l' but has only a single 's'.",
       "method": "Correct spelling: illusion.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Cauliflour",
        "B": "Cauliflower",
        "C": "Cualiflower",
        "D": "Caulifower"
       },
       "a": "B",
       "concept": "'Cauliflower' ends in '-flower', matching the plant-word 'flower', not '-flour' (the baking ingredient).",
       "method": "Correct spelling: cauliflower.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Emacipated",
        "B": "Emansipated",
        "C": "Emacipated",
        "D": "Emancipated"
       },
       "a": "D",
       "concept": "'Emancipated' keeps the 'n' before 'c', matching its root word 'emancipation'.",
       "method": "Correct spelling: emancipated.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Dilemma",
        "B": "Dillemma",
        "C": "Dillema",
        "D": "Dilleame"
       },
       "a": "A",
       "concept": "'Dilemma' has a single 'l' and double 'm'.",
       "method": "Correct spelling: dilemma.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Rhearsal",
        "B": "Rehearsal",
        "C": "Reharsal",
        "D": "Rehearsel"
       },
       "a": "B",
       "concept": "'Rehearsal' keeps the 'h' after 're-' and ends in '-al', not '-el'.",
       "method": "Correct spelling: rehearsal.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Withhold",
        "B": "Withold",
        "C": "Witthold",
        "D": "Witoold"
       },
       "a": "A",
       "concept": "'Withhold' keeps both 'h's from 'with' + 'hold' combined — a very commonly dropped letter.",
       "method": "Correct spelling: withhold (double 'h').",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Catalogue",
        "B": "Cataloge",
        "C": "Catalogu",
        "D": "Catallogue"
       },
       "a": "A",
       "concept": "'Catalogue' keeps the French-derived '-gue' ending (a US variant, 'catalog', also exists but isn't tested here).",
       "method": "Correct spelling: catalogue.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Anneasthesia",
        "B": "Anaesthesia",
        "C": "Anesthesia",
        "D": "Anestthesia"
       },
       "a": "B",
       "concept": "British English keeps the 'ae' spelling in medical terms like this one, unlike the simplified American spelling.",
       "method": "Correct British spelling: anaesthesia.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Phisshing",
        "B": "Phisthing",
        "C": "Phishting",
        "D": "Phishing"
       },
       "a": "D",
       "concept": "'Phishing' (the online scam) is spelt like 'fishing' but with 'ph-', playing on the idea of 'fishing' for victims.",
       "method": "Correct spelling: phishing.",
       "difficulty": "core"
      },
      {
       "q": "Choose the correctly spelt word.",
       "o": {
        "A": "Connivance",
        "B": "Connivence",
        "C": "Conivance",
        "D": "Conivence"
       },
       "a": "A",
       "concept": "'Connivance' keeps the double 'n' and ends in '-ance', not '-ence'.",
       "method": "Correct spelling: connivance.",
       "difficulty": "core"
      }
     ],
     "freq": 79
    }
   ]
  },
  {
   "id": "math",
   "name": "Basic Mathematics",
   "weight": 10,
   "intro": "A small but very winnable section — the numbers are simple, so accuracy and a fast method matter more than raw skill.",
   "topics": [
    {
     "id": "percentmoney",
     "name": "Percentages, Profit & Loss",
     "blurb": "The single most-tested Maths skill — always identify the cost price first, everything else follows from it.",
     "concept_notes": [
      "Profit % and Loss % are ALWAYS calculated on the Cost Price, never the Selling Price.",
      "Selling Price = Cost Price × (1 ± rate). To reverse it, DIVIDE the Selling Price by that same factor.",
      "Simple Interest formula: I = PRT/100.",
      "For multi-step problems (discount then resale, or 'what if sold at a different price'), set Cost Price = 100 to make the arithmetic simple, then scale."
     ],
     "questions": [
      {
       "q": "A trader buys a bag of rice for ₦2,500 and sells it for ₦3,000. Find the percentage profit.",
       "o": {
        "A": "15%",
        "B": "18%",
        "C": "20%",
        "D": "25%"
       },
       "a": "C",
       "concept": "Percentage profit is always calculated on the COST price.",
       "method": "Profit = 3000−2500=500. → 500/2500×100 = 20%.",
       "difficulty": "core"
      },
      {
       "q": "A shirt marked ₦4,000 is sold at a discount of 15%. Find the selling price.",
       "o": {
        "A": "₦3,200",
        "B": "₦3,400",
        "C": "₦3,600",
        "D": "₦3,800"
       },
       "a": "B",
       "concept": "Selling price = marked price × (1 − discount rate).",
       "method": "15% of 4000=600. SP=4000−600=₦3,400. Shortcut: 4000×0.85=3400.",
       "difficulty": "core"
      },
      {
       "q": "Goods were sold for ₦11,000 at a profit of 10% of the cost price. What was the cost price?",
       "o": {
        "A": "₦10,000",
        "B": "₦9,900",
        "C": "₦10,500",
        "D": "₦9,000"
       },
       "a": "A",
       "concept": "Cost Price = Selling Price ÷ (1 + profit rate).",
       "method": "CP×1.10=11,000 → CP=₦10,000.",
       "difficulty": "core"
      },
      {
       "q": "A trader bought an article for ₦20 and sold it for exactly ₦20. What was the percentage gain?",
       "o": {
        "A": "5%",
        "B": "2%",
        "C": "1%",
        "D": "0%"
       },
       "a": "D",
       "concept": "Equal buying and selling price means no profit, no loss.",
       "method": "No difference → 0% gain.",
       "difficulty": "core"
      },
      {
       "q": "A trader borrows ₦8,000 at 5% simple interest per annum. How much interest is paid after 3 years?",
       "o": {
        "A": "₦800",
        "B": "₦1,000",
        "C": "₦1,200",
        "D": "₦1,500"
       },
       "a": "C",
       "concept": "Simple Interest = (Principal × Rate × Time) ÷ 100.",
       "method": "I=(8000×5×3)/100=₦1,200.",
       "difficulty": "core"
      },
      {
       "q": "In a class of 60 students, 45 passed. What percentage of the class FAILED?",
       "o": {
        "A": "15%",
        "B": "20%",
        "C": "25%",
        "D": "30%"
       },
       "a": "C",
       "concept": "Find the failed count first, then convert to a percentage of the total.",
       "method": "Passed%=45/60=75%, so failed%=100−75=25%.",
       "difficulty": "core"
      },
      {
       "q": "A pencil 20cm long was recorded as 22cm long. What is the percentage error?",
       "o": {
        "A": "22%",
        "B": "20%",
        "C": "10%",
        "D": "5%"
       },
       "a": "C",
       "concept": "Percentage error = (|measured − true| ÷ true) × 100.",
       "method": "Error=22−20=2. 2/20×100=10%.",
       "difficulty": "core"
      },
      {
       "q": "A student made a 5% error measuring a 50cm stick. What was the student's recorded measurement?",
       "o": {
        "A": "50cm",
        "B": "60cm",
        "C": "52.5cm",
        "D": "55cm"
       },
       "a": "C",
       "concept": "Error amount = rate × true value; add it to get the recorded (over-measured) value.",
       "method": "5% of 50=2.5. Recorded=50+2.5=52.5cm.",
       "difficulty": "core"
      },
      {
       "q": "A can of Cola labelled 330ml was found to contain 341ml. What was the percentage error?",
       "o": {
        "A": "33.0%",
        "B": "34.1%",
        "C": "3.33%",
        "D": "3.41%"
       },
       "a": "C",
       "concept": "Percentage error is measured relative to the true/labelled value.",
       "method": "Error=11ml. 11/330×100=3.33%.",
       "difficulty": "core"
      },
      {
       "q": "A surveyor measured a road as 95km, which was a 5% underestimate. What is the true length?",
       "o": {
        "A": "90km",
        "B": "95km",
        "C": "100km",
        "D": "105km"
       },
       "a": "C",
       "concept": "If a measurement underestimates the true value by a rate r, then measured = true × (1 − r).",
       "method": "95=T×0.95 → T=95/0.95=100km.",
       "difficulty": "core"
      },
      {
       "q": "A man's annual salary is ₦132,000. What is his monthly salary?",
       "o": {
        "A": "₦11,000",
        "B": "₦12,000",
        "C": "₦13,000",
        "D": "₦22,000"
       },
       "a": "A",
       "concept": "Monthly = annual ÷ 12.",
       "method": "132,000/12=₦11,000.",
       "difficulty": "core"
      },
      {
       "q": "A man earns ₦20,000 a month. What does he earn in a year?",
       "o": {
        "A": "₦200,000",
        "B": "₦240,000",
        "C": "₦220,000",
        "D": "₦280,000"
       },
       "a": "B",
       "concept": "Yearly = monthly × 12.",
       "method": "20,000×12=₦240,000.",
       "difficulty": "core"
      },
      {
       "q": "If the exchange rate is US$1 = ₦150, how much is US$500 in naira?",
       "o": {
        "A": "₦150,000",
        "B": "₦500,000",
        "C": "₦7,500",
        "D": "₦75,000"
       },
       "a": "D",
       "concept": "Multiply the dollar amount by the rate to convert to naira.",
       "method": "500×150=₦75,000.",
       "difficulty": "core"
      },
      {
       "q": "A factory increased production from 40,000 to 50,000 radios. Find the percentage increase.",
       "o": {
        "A": "25%",
        "B": "10%",
        "C": "15%",
        "D": "20%"
       },
       "a": "A",
       "concept": "Percentage increase = (increase ÷ original) × 100.",
       "method": "Increase=10,000. 10,000/40,000×100=25%.",
       "difficulty": "core"
      },
      {
       "q": "Mrs Ngosi bought corn for ₦1,200 in April; by June the price had risen 20%. What did she pay in June?",
       "o": {
        "A": "₦1,300",
        "B": "₦1,400",
        "C": "₦1,440",
        "D": "₦1,340"
       },
       "a": "C",
       "concept": "New price = old price × (1 + increase rate).",
       "method": "1200×1.20=₦1,440.",
       "difficulty": "core"
      },
      {
       "q": "By selling an article for ₦40, there is a loss of 40%. What is the result of selling it for ₦80 instead?",
       "o": {
        "A": "Gain of 20%",
        "B": "Loss of 10%",
        "C": "Loss of 20%",
        "D": "Gain of 10%"
       },
       "a": "A",
       "concept": "Find the cost price from the loss scenario first, then compare the new selling price to it.",
       "method": "CP×0.60=40 → CP≈66.67. New profit=80−66.67=13.33. → 13.33/66.67×100≈20% gain.",
       "difficulty": "core"
      },
      {
       "q": "A radio sold at a certain price gives a 20% gain. What is the gain percent if sold at 3 times that price?",
       "o": {
        "A": "280%",
        "B": "270%",
        "C": "290%",
        "D": "260%"
       },
       "a": "D",
       "concept": "Set Cost Price=100 for easy percentage tracking, then scale the selling price as stated.",
       "method": "CP=100, original SP=120. New SP=3×120=360. Gain=360−100=260 → 260%.",
       "difficulty": "core"
      },
      {
       "q": "A promotional discount of 15% is offered on a coat that previously cost ₦18,000. What is the discounted price?",
       "o": {
        "A": "₦15,300",
        "B": "₦14,000",
        "C": "₦15,500",
        "D": "₦16,000"
       },
       "a": "A",
       "concept": "Selling price = original price × (1 − discount rate).",
       "method": "18,000×0.85 = ₦15,300.",
       "difficulty": "core"
      },
      {
       "q": "A man buys a recharge card for ₦500 and sells it for ₦430. What is the percentage loss?",
       "o": {
        "A": "7%",
        "B": "9%",
        "C": "14%",
        "D": "20%"
       },
       "a": "C",
       "concept": "Percentage loss = (loss ÷ cost price) × 100.",
       "method": "Loss=500−430=70. 70/500×100=14%.",
       "difficulty": "core"
      },
      {
       "q": "A boy's monthly salary is ₦5,400. What is his total salary over 1¾ years?",
       "o": {
        "A": "₦113,400",
        "B": "₦64,800",
        "C": "₦97,200",
        "D": "₦129,600"
       },
       "a": "A",
       "concept": "Convert the duration to months, then multiply by the monthly rate.",
       "method": "1¾ years = 21 months. 5,400×21 = ₦113,400.",
       "difficulty": "core"
      },
      {
       "q": "If the total sales of a shop in a year were ₦150,000, and a particular month's sales were half the monthly average, what were that month's sales?",
       "o": {
        "A": "₦6,250",
        "B": "₦8,650",
        "C": "₦12,500",
        "D": "₦7,550"
       },
       "a": "A",
       "concept": "Find the monthly average first (yearly total ÷ 12), then take half of it.",
       "method": "Average = 150,000/12 = 12,500. Half of that = ₦6,250.",
       "difficulty": "core"
      },
      {
       "q": "X% of 23 is 9.2. What is X?",
       "o": {
        "A": "30",
        "B": "35",
        "C": "40",
        "D": "45"
       },
       "a": "C",
       "concept": "Set up the percentage equation and solve for the unknown rate.",
       "method": "(X/100)×23=9.2 → X=9.2×100/23=40.",
       "difficulty": "core"
      },
      {
       "q": "25% of a number x equals 24. What is 1/12 of x?",
       "o": {
        "A": "6",
        "B": "7",
        "C": "8",
        "D": "9"
       },
       "a": "C",
       "concept": "Find the full number first, then take the requested fraction of it.",
       "method": "0.25x=24 → x=96. 1/12 of 96 = 8.",
       "difficulty": "core"
      },
      {
       "q": "A trader buys 100 oranges for ₦1,000 and sells them at ₦15 each. Find the total profit.",
       "o": {
        "A": "₦300",
        "B": "₦400",
        "C": "₦500",
        "D": "₦600"
       },
       "a": "C",
       "concept": "Find total revenue, then subtract the total cost.",
       "method": "Revenue=100×15=1,500. Profit=1,500−1,000=₦500.",
       "difficulty": "core"
      },
      {
       "q": "A book originally priced ₦2,000 is now sold at a 25% discount. What is the new price?",
       "o": {
        "A": "₦1,400",
        "B": "₦1,500",
        "C": "₦1,600",
        "D": "₦1,750"
       },
       "a": "B",
       "concept": "New price = original × (1 − discount).",
       "method": "2,000×0.75=₦1,500.",
       "difficulty": "core"
      },
      {
       "q": "₦15,000 is invested at 8% simple interest per annum. Find the interest after 2 years.",
       "o": {
        "A": "₦1,800",
        "B": "₦2,000",
        "C": "₦2,200",
        "D": "₦2,400"
       },
       "a": "D",
       "concept": "Simple Interest = PRT/100.",
       "method": "I=(15,000×8×2)/100=₦2,400.",
       "difficulty": "core"
      },
      {
       "q": "A trader marks up an item by 30% then offers a 10% discount on the marked price. If the cost price is ₦1,000, find the final selling price.",
       "o": {
        "A": "₦1,150",
        "B": "₦1,170",
        "C": "₦1,200",
        "D": "₦1,300"
       },
       "a": "B",
       "concept": "Apply the markup first to get the marked price, then apply the discount to that marked price.",
       "method": "Marked price=1,000×1.30=1,300. Discount 10%: 1,300×0.90=₦1,170.",
       "difficulty": "core"
      },
      {
       "q": "A phone was bought for ₦45,000 and sold at a loss of 12%. Find the selling price.",
       "o": {
        "A": "₦39,600",
        "B": "₦40,000",
        "C": "₦41,400",
        "D": "₦42,000"
       },
       "a": "A",
       "concept": "Selling price = cost price × (1 − loss rate).",
       "method": "45,000×0.88=₦39,600.",
       "difficulty": "core"
      },
      {
       "q": "A worker's salary increased from ₦80,000 to ₦92,000. Find the percentage increase.",
       "o": {
        "A": "12%",
        "B": "15%",
        "C": "18%",
        "D": "20%"
       },
       "a": "B",
       "concept": "Percentage increase = (increase ÷ original) × 100.",
       "method": "Increase=12,000. 12,000/80,000×100=15%.",
       "difficulty": "core"
      },
      {
       "q": "A trader's sales rose from ₦60,000 to ₦75,000 in one month. Find the percentage rise.",
       "o": {
        "A": "20%",
        "B": "25%",
        "C": "30%",
        "D": "15%"
       },
       "a": "B",
       "concept": "Percentage rise = (increase ÷ original) × 100.",
       "method": "Increase=15,000. 15,000/60,000×100=25%.",
       "difficulty": "core"
      },
      {
       "q": "A class of 27 students has a 33% pass rate. How many students passed?",
       "o": {
        "A": "9",
        "B": "10",
        "C": "12",
        "D": "21"
       },
       "a": "A",
       "concept": "To find a percentage of a quantity, convert the percentage to a fraction/decimal and multiply.",
       "method": "33% of 27 = 0.33 × 27 ≈ 9 students.",
       "difficulty": "core"
      },
      {
       "q": "A trader bought an item for ₦20 and sold it for the same amount, ₦20. What was the trader's gain percent?",
       "o": {
        "A": "100%",
        "B": "10%",
        "C": "1%",
        "D": "0%"
       },
       "a": "D",
       "concept": "Gain percent is only positive when selling price exceeds cost price.",
       "method": "Selling price equals cost price here, so there's no gain or loss — 0%.",
       "difficulty": "core"
      },
      {
       "q": "By selling an article for ₦40, a trader makes a loss of 40%. If the same article is sold for ₦80 instead, what happens?",
       "o": {
        "A": "A gain of 20%",
        "B": "A loss of 10%",
        "C": "A loss of 20%",
        "D": "A gain of 10%"
       },
       "a": "A",
       "concept": "First recover the cost price from the loss scenario, then re-calculate the gain or loss at the new price.",
       "method": "Loss of 40% on cost C means 0.6C = ₦40 → C = ₦66.67. At ₦80: profit = 80 − 66.67 = ₦13.33, which is 13.33/66.67 ≈ 20% gain.",
       "difficulty": "core"
      },
      {
       "q": "Increase ₦3,400 by 13%.",
       "o": {
        "A": "₦442",
        "B": "₦3,842",
        "C": "₦3,413",
        "D": "₦3,952"
       },
       "a": "B",
       "concept": "To increase a value by a percentage, add the percentage of the value to the original value.",
       "method": "13% of 3,400 = 442. New value = 3,400 + 442 = ₦3,842.",
       "difficulty": "core"
      },
      {
       "q": "The marked price of a book is ₦180. What will the cash price be if a discount of 6% is allowed?",
       "o": {
        "A": "₦210.80",
        "B": "₦30.60",
        "C": "₦169.20",
        "D": "₦190.80"
       },
       "a": "C",
       "concept": "A discount is subtracted from the marked price to find the actual selling (cash) price.",
       "method": "6% of 180 = 10.80. Cash price = 180 − 10.80 = ₦169.20.",
       "difficulty": "core"
      },
      {
       "q": "By selling an article for ₦47, a man lost 6%. How much did the article cost him?",
       "o": {
        "A": "₦25",
        "B": "₦5",
        "C": "₦50",
        "D": "₦53"
       },
       "a": "C",
       "concept": "When selling price and loss percentage are known, cost price = selling price ÷ (1 − loss rate).",
       "method": "Let cost = C. C − 6%C = 47 → 0.94C = 47 → C = ₦50.",
       "difficulty": "core"
      },
      {
       "q": "A farmer has 120 birds. After an increase of 20%, how many birds does he have?",
       "o": {
        "A": "124",
        "B": "144",
        "C": "164",
        "D": "200"
       },
       "a": "B",
       "concept": "A percentage increase is added on top of the original quantity.",
       "method": "20% of 120 = 24. New total = 120 + 24 = 144 birds.",
       "difficulty": "core"
      },
      {
       "q": "How many seedlings must be planted to obtain 60 surviving trees, if only 20% of the seedlings survive?",
       "o": {
        "A": "150",
        "B": "125",
        "C": "300",
        "D": "250"
       },
       "a": "C",
       "concept": "When only a fraction of a starting quantity survives, divide the target by the survival rate to find the starting quantity.",
       "method": "60 is 20% of the total planted → total = 60 ÷ 0.20 = 300 seedlings.",
       "difficulty": "core"
      },
      {
       "q": "Amaka scored 60% in a test that had 50 questions. How many questions did she get correct?",
       "o": {
        "A": "25",
        "B": "30",
        "C": "35",
        "D": "40"
       },
       "a": "B",
       "concept": "Convert the percentage score into an actual count by applying it to the total number of questions.",
       "method": "60% of 50 = 0.60 × 50 = 30 questions correct.",
       "difficulty": "core"
      },
      {
       "q": "Dotun, Ayo, Stephen and Olu were given 10, 18, 24 and 8 oranges respectively. What percentage of the total oranges was given to Stephen?",
       "o": {
        "A": "40%",
        "B": "18%",
        "C": "25%",
        "D": "30%"
       },
       "a": "A",
       "concept": "Percentage share = (individual amount ÷ total) × 100.",
       "method": "Total = 10+18+24+8 = 60. Stephen's share = 24/60 × 100 = 40%.",
       "difficulty": "core"
      },
      {
       "q": "If 25% of candidates for a Post-UTME exam are girls, what fraction of the candidates are boys?",
       "o": {
        "A": "One-quarter",
        "B": "Two-thirds",
        "C": "Half",
        "D": "Three-quarters"
       },
       "a": "D",
       "concept": "If one part of a whole is known as a percentage, the remaining part is found by subtracting from 100%.",
       "method": "If 25% are girls, the rest (100% − 25% = 75%) are boys, which as a fraction is three-quarters.",
       "difficulty": "core"
      }
     ],
     "freq": 66
    },
    {
     "id": "series",
     "name": "Number Series & Patterns",
     "blurb": "Spot the rule fast: check simple addition/subtraction first, then multiplication, then 'differences of differences'.",
     "concept_notes": [
      "Always test the simplest rule first: is it just +N or −N each time? Only move to multiplication or squaring if that fails.",
      "If a sequence looks irregular, try splitting it into alternating sub-sequences (every 1st, 3rd, 5th term vs every 2nd, 4th, 6th).",
      "If differences between terms aren't constant, check whether THOSE differences form their own simple pattern (increasing, doubling).",
      "Recognise perfect squares (1,4,9,16,25,36,49,64,81,100) and cubes (1,8,27,64,125) on sight — they appear constantly."
     ],
     "questions": [
      {
       "q": "Find the next number: 50, 40, 100, 90, 150, ___",
       "o": {
        "A": "120",
        "B": "130",
        "C": "140",
        "D": "160"
       },
       "a": "C",
       "concept": "Some sequences are built from two interleaved patterns — look at the numbers in pairs.",
       "method": "Pairs: (50,40) diff −10; (100,90) diff −10; so (150,?) diff −10 → 140.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 2, 6, 12, 20, 30, ___",
       "o": {
        "A": "36",
        "B": "40",
        "C": "42",
        "D": "45"
       },
       "a": "C",
       "concept": "When differences between terms form their own pattern, extend that pattern.",
       "method": "Differences: 4,6,8,10 (increasing by 2). Next diff=12, so 30+12=42.",
       "difficulty": "core"
      },
      {
       "q": "Find the missing number: 3, 9, 27, 81, ___",
       "o": {
        "A": "162",
        "B": "216",
        "C": "243",
        "D": "324"
       },
       "a": "C",
       "concept": "A geometric sequence multiplies by a fixed common ratio each step.",
       "method": "Each term is 3× the one before → 81×3=243.",
       "difficulty": "core"
      },
      {
       "q": "Find the odd number out: 4, 9, 16, 24, 25, 36",
       "o": {
        "A": "9",
        "B": "16",
        "C": "24",
        "D": "25"
       },
       "a": "C",
       "concept": "Recognising perfect squares (2²...6²) makes the non-square instantly obvious.",
       "method": "4,9,16,25,36 are all perfect squares — 24 is not.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 18, 13, 9, 6, 4, ___",
       "o": {
        "A": "1",
        "B": "2",
        "C": "3",
        "D": "4"
       },
       "a": "C",
       "concept": "The differences themselves shrink by one each time (a decreasing-gap pattern).",
       "method": "Differences: −5,−4,−3,−2 → next diff −1, so 4−1=3.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 1, 3, 5, 7, 9, ___",
       "o": {
        "A": "8",
        "B": "11",
        "C": "12",
        "D": "13"
       },
       "a": "B",
       "concept": "A simple arithmetic sequence of odd numbers, adding 2 each time.",
       "method": "1,3,5,7,9 → add 2 → 11.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 2, 2, 4, 6, 10, ___",
       "o": {
        "A": "14",
        "B": "10",
        "C": "20",
        "D": "16"
       },
       "a": "D",
       "concept": "A Fibonacci-style sequence: each term is the sum of the two before it.",
       "method": "2+2=4, 2+4=6, 4+6=10, 6+10=16.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 0.1, 0.3, 0.5, 0.7, 0.9, ___",
       "o": {
        "A": "1.1",
        "B": "0.11",
        "C": "11",
        "D": "0.011"
       },
       "a": "A",
       "concept": "A simple arithmetic sequence, adding 0.2 each time.",
       "method": "0.9+0.2=1.1.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 0, 3, 8, 15, 24, ___",
       "o": {
        "A": "36",
        "B": "30",
        "C": "35",
        "D": "31"
       },
       "a": "C",
       "concept": "Each term equals (position number)² − 1: 1²−1=0, 2²−1=3, 3²−1=8...",
       "method": "Differences (3,5,7,9) increase by 2 — next diff 11, so 24+11=35.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 4, 5, 7, 11, 19, ___",
       "o": {
        "A": "33",
        "B": "27",
        "C": "37",
        "D": "35"
       },
       "a": "D",
       "concept": "The differences between terms double each time.",
       "method": "Differences: 1,2,4,8 (doubling). Next diff=16, so 19+16=35.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 2, 5, 11, 23, 47, ___",
       "o": {
        "A": "80",
        "B": "95",
        "C": "92",
        "D": "101"
       },
       "a": "B",
       "concept": "Each term equals the previous term doubled, plus one.",
       "method": "2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=95.",
       "difficulty": "core"
      },
      {
       "q": "Complete the series: English, French, Hindi, Arabic, ___",
       "o": {
        "A": "Swahili",
        "B": "Language",
        "C": "Dialect",
        "D": "Africa"
       },
       "a": "A",
       "concept": "This series lists examples of one category (languages) — the next term must be another example of that same category.",
       "method": "All items are named languages; the only other option that is itself a language is Swahili.",
       "difficulty": "core"
      },
      {
       "q": "Find the missing number in the sequence: 2, 3, 5, 8, ___, 17, 23, 30",
       "o": {
        "A": "13",
        "B": "12",
        "C": "11",
        "D": "14"
       },
       "a": "B",
       "concept": "Look at the differences between consecutive terms: they increase by 1 each time.",
       "method": "Differences: 1,2,3,4,5,6,7. Missing term = 8+4 = 12 (then 12+5=17 checks out).",
       "difficulty": "core"
      },
      {
       "q": "What is the missing number that keeps a consistent pattern: 4, 5, 7, 10, 14, ___?",
       "o": {
        "A": "18",
        "B": "19",
        "C": "20",
        "D": "17"
       },
       "a": "B",
       "concept": "The differences between terms increase by 1 each time: 1,2,3,4,5.",
       "method": "4,5,7,10,14 — differences 1,2,3,4, next difference 5, so 14+5=19.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 100, 90, 81, 73, ___",
       "o": {
        "A": "64",
        "B": "65",
        "C": "66",
        "D": "67"
       },
       "a": "C",
       "concept": "The differences between terms decrease by one each time.",
       "method": "Differences: −10,−9,−8 — next diff −7, so 73−7=66.",
       "difficulty": "core"
      },
      {
       "q": "Find the next number: 1, 4, 9, 16, 25, ___",
       "o": {
        "A": "30",
        "B": "32",
        "C": "36",
        "D": "49"
       },
       "a": "C",
       "concept": "Recognise this as the sequence of perfect squares.",
       "method": "1²,2²,3²,4²,5²... next is 6²=36.",
       "difficulty": "core"
      },
      {
       "q": "Complete the series: 50, 40, 100, 90, 150, ___",
       "o": {
        "A": "200",
        "B": "180",
        "C": "140",
        "D": "300"
       },
       "a": "C",
       "concept": "Some series alternate between two operations rather than following a single simple rule.",
       "method": "The pattern alternates −10, +60, −10, +60...: 150 − 10 = 140.",
       "difficulty": "core"
      },
      {
       "q": "Complete the series: 0, 3, 8, 15, 24, ___",
       "o": {
        "A": "36",
        "B": "30",
        "C": "35",
        "D": "31"
       },
       "a": "C",
       "concept": "Look at the differences between consecutive terms — they can form their own simple pattern.",
       "method": "Differences are 3, 5, 7, 9, 11 (increasing odd numbers). Next difference is 11: 24 + 11 = 35.",
       "difficulty": "core"
      },
      {
       "q": "Complete the series: 4, 5, 7, 11, 19, ___",
       "o": {
        "A": "33",
        "B": "27",
        "C": "37",
        "D": "35"
       },
       "a": "D",
       "concept": "Some series grow by a doubling difference rather than a constant one.",
       "method": "Differences are 1, 2, 4, 8 (each doubling). Next difference is 16: 19 + 16 = 35.",
       "difficulty": "core"
      },
      {
       "q": "Complete the series: 2, 5, 11, 23, 47, ___",
       "o": {
        "A": "80",
        "B": "95",
        "C": "92",
        "D": "99"
       },
       "a": "B",
       "concept": "Some series are defined by a formula applied to the previous term, rather than a simple addition pattern.",
       "method": "Each term = previous term × 2, plus 1: 47 × 2 + 1 = 95.",
       "difficulty": "core"
      },
      {
       "q": "Which number comes next in the series 0, 1, 3, 6, 10, 15, ___?",
       "o": {
        "A": "26",
        "B": "21",
        "C": "19",
        "D": "32"
       },
       "a": "B",
       "concept": "These are triangular numbers, where each term adds one more than the previous addition.",
       "method": "Differences increase by 1 each time (1,2,3,4,5...); the next difference is 6: 15 + 6 = 21.",
       "difficulty": "core"
      }
     ],
     "freq": 24
    },
    {
     "id": "ratiowp",
     "name": "Ratio, Fractions, Probability & Word Problems",
     "blurb": "Slow down and identify the 'total' first — most mistakes here come from working with the wrong denominator.",
     "concept_notes": [
      "For ratio-sharing, always compute the VALUE OF ONE PART first (total ÷ sum of ratio numbers).",
      "Fractions can only be added once they share a common denominator.",
      "Multi-step 'spent this much, then that much of what's left' problems must be solved in order, using the REMAINING amount at each step, not the original total.",
      "Basic probability is favourable outcomes over total possible outcomes — double-check the total is counted correctly."
     ],
     "questions": [
      {
       "q": "A father divides ₦60,000 between his two sons in the ratio 2:3. How much does the smaller share receive?",
       "o": {
        "A": "₦20,000",
        "B": "₦24,000",
        "C": "₦30,000",
        "D": "₦36,000"
       },
       "a": "B",
       "concept": "Find the value of ONE part by dividing the total by the sum of the ratio numbers.",
       "method": "Total parts=5. One part=60,000/5=12,000. Smaller share=2×12,000=₦24,000.",
       "difficulty": "core"
      },
      {
       "q": "Simplify: 2/3 + 1/6",
       "o": {
        "A": "1/2",
        "B": "3/4",
        "C": "5/6",
        "D": "7/9"
       },
       "a": "C",
       "concept": "To add fractions, convert to a common denominator, then add numerators only.",
       "method": "2/3=4/6. 4/6+1/6=5/6.",
       "difficulty": "core"
      },
      {
       "q": "6 men can complete a job in 10 days. How many days will 4 men take, at the same rate?",
       "o": {
        "A": "12 days",
        "B": "15 days",
        "C": "18 days",
        "D": "20 days"
       },
       "a": "B",
       "concept": "Total work stays constant (in 'man-days'); fewer workers means more days.",
       "method": "Total work=6×10=60 man-days. 60/4=15 days.",
       "difficulty": "core"
      },
      {
       "q": "A bag contains 4 red balls and 6 blue balls. Probability of picking a red ball at random?",
       "o": {
        "A": "1/5",
        "B": "2/5",
        "C": "3/5",
        "D": "4/5"
       },
       "a": "B",
       "concept": "Probability = favourable outcomes ÷ total outcomes.",
       "method": "Total=10. P(red)=4/10=2/5.",
       "difficulty": "core"
      },
      {
       "q": "Which is the greatest of these fractions: 7/9, 3/4, 5/8, 2/3?",
       "o": {
        "A": "7/9",
        "B": "3/4",
        "C": "5/8",
        "D": "2/3"
       },
       "a": "A",
       "concept": "Convert to decimals (or a common denominator) to compare fractions quickly.",
       "method": "7/9≈0.78, 3/4=0.75, 5/8=0.625, 2/3≈0.67 — 7/9 is largest.",
       "difficulty": "core"
      },
      {
       "q": "After spending 2/3 of her money on food, a woman had ₦250 left. How much did she start with?",
       "o": {
        "A": "₦250",
        "B": "₦500",
        "C": "₦750",
        "D": "₦1,000"
       },
       "a": "C",
       "concept": "If 2/3 was spent, 1/3 remains — use the remaining fraction to find the whole.",
       "method": "1/3 = 250, so total = 250×3 = ₦750.",
       "difficulty": "core"
      },
      {
       "q": "A man with ₦5,000 spent 1/5 at the chemist and 1/4 at the electric shop. How much was left?",
       "o": {
        "A": "₦2,750",
        "B": "₦3,750",
        "C": "₦4,000",
        "D": "₦1,000"
       },
       "a": "A",
       "concept": "Find each fraction of the original amount separately, then subtract both from the total.",
       "method": "1/5×5000=1000. 1/4×5000=1250. Left=5000−2250=₦2,750.",
       "difficulty": "core"
      },
      {
       "q": "A girl spent 1/2 of her N1,000 at the market, then 1/5 of what remained at the bakery. How much is left?",
       "o": {
        "A": "₦100",
        "B": "₦200",
        "C": "₦300",
        "D": "₦400"
       },
       "a": "D",
       "concept": "Apply each fraction step by step, using what's LEFT after the previous step, not the original total.",
       "method": "After market: 1000−500=500. Bakery: 1/5×500=100. Left=500−100=₦400.",
       "difficulty": "core"
      },
      {
       "q": "If 5 oranges cost ₦7, how many of the same oranges can be bought for ₦49?",
       "o": {
        "A": "15 oranges",
        "B": "35 oranges",
        "C": "25 oranges",
        "D": "30 oranges"
       },
       "a": "B",
       "concept": "Find how many times bigger the new amount is, then scale the quantity by the same factor.",
       "method": "49/7=7 times more money → 7×5=35 oranges.",
       "difficulty": "core"
      },
      {
       "q": "If a can of malt drink costs ₦65, how much is a dozen cans?",
       "o": {
        "A": "₦780",
        "B": "₦715",
        "C": "₦650",
        "D": "₦585"
       },
       "a": "A",
       "concept": "A dozen means 12 — multiply the unit price by 12.",
       "method": "65×12=₦780.",
       "difficulty": "core"
      },
      {
       "q": "A man owns 2/3 of a business and sells 3/4 of his shares for ₦75,000. What is the value of the whole business?",
       "o": {
        "A": "₦150,000",
        "B": "₦130,000",
        "C": "₦240,000",
        "D": "₦34,000"
       },
       "a": "A",
       "concept": "Multiply the fractions together to find what portion of the WHOLE business was sold, then scale up.",
       "method": "3/4 of 2/3 = 1/2 of the business = ₦75,000. Whole business = 75,000×2 = ₦150,000.",
       "difficulty": "core"
      },
      {
       "q": "A number of directors of a company sit on a board of 4 coins each of a different value. How many different sums can be formed using one or more coins at a time?",
       "o": {
        "A": "16",
        "B": "15",
        "C": "12",
        "D": "11"
       },
       "a": "B",
       "concept": "With n distinct items, the number of non-empty combinations is 2ⁿ − 1.",
       "method": "2⁴−1 = 16−1 = 15 possible sums.",
       "difficulty": "core"
      },
      {
       "q": "On selling 3 articles at the price of 4 articles (same unit cost), what is the percentage profit?",
       "o": {
        "A": "25%",
        "B": "100/3%",
        "C": "75/2%",
        "D": "40%"
       },
       "a": "B",
       "concept": "Let one article's cost = c. Selling 3 articles for the price of 4 means the revenue is 4c against a cost of 3c.",
       "method": "Profit = 4c−3c = c. Profit% = c/3c×100 = 100/3 % ≈ 33.3%.",
       "difficulty": "core"
      },
      {
       "q": "In a single throw of a die, what is the probability of getting a number greater than 4?",
       "o": {
        "A": "1/2",
        "B": "2/3",
        "C": "1/4",
        "D": "1/3"
       },
       "a": "D",
       "concept": "Count the favourable faces (5 and 6) out of all 6 faces.",
       "method": "2 favourable out of 6 total = 2/6 = 1/3.",
       "difficulty": "core"
      },
      {
       "q": "If x lies between 0 and 1, which of the following is the LARGEST: x, x², −x, or 1/x?",
       "o": {
        "A": "x",
        "B": "x²",
        "C": "−x",
        "D": "1/x"
       },
       "a": "D",
       "concept": "For a fraction between 0 and 1, squaring makes it smaller, and its reciprocal makes it bigger than 1.",
       "method": "Try x=0.5: x²=0.25, −x=−0.5, 1/x=2 — clearly the largest.",
       "difficulty": "core"
      },
      {
       "q": "If 6 men can dig a well in 3 days, how many men are needed to dig it in 2 days at the same rate?",
       "o": {
        "A": "9 men",
        "B": "12 men",
        "C": "16 men",
        "D": "15 men"
       },
       "a": "A",
       "concept": "Total work stays constant (man-days); fewer days needs more men.",
       "method": "Total work = 6×3=18 man-days. 18/2 days = 9 men.",
       "difficulty": "core"
      },
      {
       "q": "A boy buys a biscuit for ₦4 and sells it at a profit of 20%. What is the selling price?",
       "o": {
        "A": "₦4.20",
        "B": "₦4.40",
        "C": "₦4.80",
        "D": "₦5.00"
       },
       "a": "C",
       "concept": "Selling price = cost price × (1 + profit rate).",
       "method": "4×1.20 = ₦4.80.",
       "difficulty": "core"
      },
      {
       "q": "A man is four times as old as his son. The difference between their ages is 36 years. Find the sum of their ages.",
       "o": {
        "A": "45 years",
        "B": "48 years",
        "C": "60 years",
        "D": "74 years"
       },
       "a": "C",
       "concept": "Set up two equations from the age relationship, then solve and add.",
       "method": "Let son=x, man=4x. Difference: 4x−x=3x=36 → x=12. Sum=12+48=60.",
       "difficulty": "core"
      },
      {
       "q": "A student spends ¼ of his pocket money on books and 1/3 on a shirt. What fraction remains?",
       "o": {
        "A": "5/6",
        "B": "7/12",
        "C": "1/6",
        "D": "5/12"
       },
       "a": "D",
       "concept": "Convert both fractions to a common denominator, subtract from the whole.",
       "method": "1 − 1/4 − 1/3 = 12/12 − 3/12 − 4/12 = 5/12.",
       "difficulty": "core"
      },
      {
       "q": "If 15 cans of food are needed to feed 7 adults for 2 days, how many cans are needed for 4 adults for 7 days?",
       "o": {
        "A": "25",
        "B": "15",
        "C": "20",
        "D": "30"
       },
       "a": "D",
       "concept": "Find the consumption rate per adult per day, then scale to the new group and duration.",
       "method": "Rate = 15/(7×2) cans per adult-day. For 4 adults, 7 days: 15/14×4×7 = 30 cans.",
       "difficulty": "core"
      },
      {
       "q": "A trader had 19 lanterns in her store, sold 13, then bought 6 more. How many lanterns are now in the store?",
       "o": {
        "A": "6",
        "B": "9",
        "C": "12",
        "D": "4"
       },
       "a": "C",
       "concept": "Track additions and removals in the order they happen.",
       "method": "19−13=6, then 6+6=12.",
       "difficulty": "core"
      },
      {
       "q": "Add all the even numbers from 15 to 20.",
       "o": {
        "A": "55",
        "B": "34",
        "C": "54",
        "D": "64"
       },
       "a": "C",
       "concept": "Identify only the even numbers within the range, then sum them.",
       "method": "Even numbers 15-20: 16,18,20. Sum=16+18+20=54.",
       "difficulty": "core"
      },
      {
       "q": "Which of these fractions is the greatest: 3/4, 7/9, 2/3, 12/15?",
       "o": {
        "A": "3/4",
        "B": "7/9",
        "C": "2/3",
        "D": "12/15"
       },
       "a": "D",
       "concept": "Convert each to a decimal to compare quickly.",
       "method": "3/4=0.75, 7/9≈0.78, 2/3≈0.67, 12/15=0.80 — 12/15 is greatest.",
       "difficulty": "core"
      },
      {
       "q": "On a road map, a line segment 4 inches long represents 12 miles. How many miles does a 4.5-inch segment represent?",
       "o": {
        "A": "12.5",
        "B": "13.5",
        "C": "14.5",
        "D": "15.5"
       },
       "a": "B",
       "concept": "Find the scale rate (miles per inch), then multiply by the new length.",
       "method": "Rate=12/4=3 miles/inch. 4.5×3=13.5 miles.",
       "difficulty": "core"
      },
      {
       "q": "The breadth and length of a rectangle are L and 2L respectively. What is its perimeter?",
       "o": {
        "A": "L",
        "B": "3L",
        "C": "5L",
        "D": "6L"
       },
       "a": "D",
       "concept": "Perimeter of a rectangle = 2 × (length + breadth).",
       "method": "P=2(2L+L)=2(3L)=6L.",
       "difficulty": "core"
      },
      {
       "q": "50 men can build a house in 60 days. How many MORE men (of equal skill) are needed to finish a similar house in 40 days?",
       "o": {
        "A": "20 men",
        "B": "30 men",
        "C": "35 men",
        "D": "25 men"
       },
       "a": "D",
       "concept": "Find the total workforce needed for the new timeframe, then subtract the original crew.",
       "method": "Total work=50×60=3000 man-days. For 40 days: 3000/40=75 men needed. Extra=75−50=25.",
       "difficulty": "core"
      },
      {
       "q": "What fraction of ₦4.32 is ₦3.87?",
       "o": {
        "A": "41/48",
        "B": "43/48",
        "C": "47/48",
        "D": "39/48"
       },
       "a": "B",
       "concept": "Set up the fraction directly, then simplify by finding the greatest common divisor.",
       "method": "387/432, both divisible by 9, gives 43/48.",
       "difficulty": "core"
      },
      {
       "q": "Yinka and Segun share 120 oranges between them. Yinka gets 16 more oranges than Segun. How many oranges does Segun have?",
       "o": {
        "A": "60",
        "B": "46",
        "C": "68",
        "D": "52"
       },
       "a": "D",
       "concept": "Let Segun's share be x; set up and solve an equation for the total.",
       "method": "x + (x+16) = 120 → 2x=104 → x=52.",
       "difficulty": "core"
      },
      {
       "q": "Find the greatest number that divides 43, 91, and 183, leaving the same remainder in each case.",
       "o": {
        "A": "4",
        "B": "7",
        "C": "9",
        "D": "13"
       },
       "a": "A",
       "concept": "The answer is the HCF (greatest common divisor) of the differences between the numbers.",
       "method": "Differences: 91−43=48, 183−91=92, 183−43=140. HCF(48,92,140)=4.",
       "difficulty": "core"
      },
      {
       "q": "Which pair of fractions adds up to a number greater than 5: (a) 5/3+3/4, (b) 7/3+11/5, (c) 11/4+8/3, (d) 13/5+11/6?",
       "o": {
        "A": "5/3 + 3/4",
        "B": "7/3 + 11/5",
        "C": "11/4 + 8/3",
        "D": "13/5 + 11/6"
       },
       "a": "C",
       "concept": "Estimate each sum using decimals to quickly rule out the smaller ones.",
       "method": "11/4+8/3 ≈ 2.75+2.67 ≈ 5.42, the only pair exceeding 5.",
       "difficulty": "core"
      },
      {
       "q": "Half of a number multiplied by a third of the same number gives a product of 726. What is the number?",
       "o": {
        "A": "96",
        "B": "166",
        "C": "160",
        "D": "66"
       },
       "a": "D",
       "concept": "Translate the words into an equation, then solve for the unknown.",
       "method": "(N/2)×(N/3)=726 → N²=4356 → N=66 (since 66²=4356).",
       "difficulty": "core"
      },
      {
       "q": "What is the product of 0.101 and 11.1?",
       "o": {
        "A": "12.21",
        "B": "1.1211",
        "C": "1.211",
        "D": "0.11211"
       },
       "a": "B",
       "concept": "Multiply the digits ignoring decimals, then place the decimal point by counting total decimal places.",
       "method": "101×111=11211. Total decimal places=4 (3+1), so answer=1.1211.",
       "difficulty": "core"
      },
      {
       "q": "Half the profit of a contractor in a year is ₦2,880.72. What is 7/8 of the full profit?",
       "o": {
        "A": "₦5,040.26",
        "B": "₦5,041.26",
        "C": "₦2,520.63",
        "D": "₦5,041.36"
       },
       "a": "B",
       "concept": "Double the half-profit to find the full profit, then take the requested fraction.",
       "method": "Full profit=2×2,880.72=5,761.44. 7/8 of that = ₦5,041.26.",
       "difficulty": "core"
      },
      {
       "q": "What is the remainder when 7,867 is divided by 14?",
       "o": {
        "A": "11",
        "B": "13",
        "C": "9",
        "D": "7"
       },
       "a": "B",
       "concept": "Find the nearest multiple of the divisor below the number, then subtract.",
       "method": "14×561=7,854. 7,867−7,854=13.",
       "difficulty": "core"
      },
      {
       "q": "On a map, 2 metres represents 15 kilometres. What length on the map represents 90 kilometres?",
       "o": {
        "A": "675 metres",
        "B": "337.5 metres",
        "C": "12 metres",
        "D": "9 metres"
       },
       "a": "C",
       "concept": "Find the scale rate, then apply it to the new real-world distance.",
       "method": "Rate=2m per 15km. For 90km: (2/15)×90=12 metres.",
       "difficulty": "core"
      },
      {
       "q": "A plane leaves Town B at 09:50 and arrives at Town C at 19:40. If Town C's clock is 1 hour ahead of Town B's, how long did the flight actually take?",
       "o": {
        "A": "8hrs 50mins",
        "B": "9hrs 50mins",
        "C": "7hrs 55mins",
        "D": "7hrs 45mins"
       },
       "a": "A",
       "concept": "Convert the arrival time to the departure city's time zone before finding the elapsed time.",
       "method": "19:40 Town C time = 18:40 Town B time. 18:40−09:50 = 8hrs 50mins.",
       "difficulty": "core"
      },
      {
       "q": "Find the HCF (Highest Common Factor) of 36 and 60.",
       "o": {
        "A": "6",
        "B": "36",
        "C": "12",
        "D": "18"
       },
       "a": "C",
       "concept": "Break each number into prime factors, then multiply the shared factors.",
       "method": "36=2²×3², 60=2²×3×5. Shared: 2²×3=12.",
       "difficulty": "core"
      },
      {
       "q": "Reduce 16/36 to its lowest term.",
       "o": {
        "A": "16/36",
        "B": "8/18",
        "C": "4/9",
        "D": "2/3"
       },
       "a": "C",
       "concept": "Divide both numerator and denominator by their greatest common factor, all the way down.",
       "method": "16/36 ÷4/4 = 4/9 (can't simplify further).",
       "difficulty": "core"
      },
      {
       "q": "Express 3/4 in decimal form.",
       "o": {
        "A": "0.075",
        "B": "0.75",
        "C": "7.50",
        "D": "0.075"
       },
       "a": "B",
       "concept": "Divide the numerator by the denominator.",
       "method": "3÷4=0.75.",
       "difficulty": "core"
      },
      {
       "q": "A teacher earns ₦15,000 a month, spends ₦9,000, and saves the rest. What is the ratio of savings to spending?",
       "o": {
        "A": "3:2",
        "B": "2:3",
        "C": "3:5",
        "D": "5:3"
       },
       "a": "B",
       "concept": "Find the savings amount first, then express both amounts as a simplified ratio.",
       "method": "Savings=15,000−9,000=6,000. Ratio 6,000:9,000 = 2:3.",
       "difficulty": "core"
      },
      {
       "q": "Solve the simultaneous equations: y = 3x and 4y − 5x = 14.",
       "o": {
        "A": "(−2,−6)",
        "B": "(2,−6)",
        "C": "(2,6)",
        "D": "(−2,6)"
       },
       "a": "C",
       "concept": "Substitute the first equation directly into the second to eliminate one variable.",
       "method": "4(3x)−5x=14 → 7x=14 → x=2, y=3(2)=6.",
       "difficulty": "core"
      },
      {
       "q": "The first term of an Arithmetic Progression is 5. The fourth term is twice the second term. Find the common difference.",
       "o": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
       },
       "a": "C",
       "concept": "Write the 4th and 2nd terms using the AP formula, then solve for the common difference.",
       "method": "T4=5+3d, T2=5+d. Given T4=2×T2: 5+3d=10+2d → d=5.",
       "difficulty": "core"
      },
      {
       "q": "Three friends share ₦90,000 in the ratio 2:3:4. How much does the person with the largest share get?",
       "o": {
        "A": "₦20,000",
        "B": "₦30,000",
        "C": "₦40,000",
        "D": "₦45,000"
       },
       "a": "C",
       "concept": "Find the value of one part, then multiply by the largest ratio number.",
       "method": "Total parts=9. One part=10,000. Largest share=4×10,000=₦40,000.",
       "difficulty": "core"
      },
      {
       "q": "8 workers can complete a task in 12 days. How many workers are needed to complete it in 6 days?",
       "o": {
        "A": "12",
        "B": "14",
        "C": "16",
        "D": "20"
       },
       "a": "C",
       "concept": "Total work is constant; halving the time doubles the workforce needed.",
       "method": "Total work=8×12=96 worker-days. 96/6=16 workers.",
       "difficulty": "core"
      },
      {
       "q": "A recipe for 4 people needs 300g of rice. How much rice is needed for 10 people, at the same ratio?",
       "o": {
        "A": "600g",
        "B": "700g",
        "C": "750g",
        "D": "800g"
       },
       "a": "C",
       "concept": "Find the amount needed per person, then scale up.",
       "method": "Per person=300/4=75g. For 10 people=75×10=750g.",
       "difficulty": "core"
      },
      {
       "q": "A tank is filled by pipe A in 6 hours and by pipe B in 12 hours. How long would both pipes together take to fill it?",
       "o": {
        "A": "3 hours",
        "B": "4 hours",
        "C": "5 hours",
        "D": "8 hours"
       },
       "a": "B",
       "concept": "Add the individual filling rates (fraction of tank per hour), then invert to find combined time.",
       "method": "Rate A=1/6, Rate B=1/12. Combined=1/6+1/12=3/12=1/4 tank/hour → 4 hours to fill.",
       "difficulty": "core"
      },
      {
       "q": "A man shares ₦48,000 between his wife and child in the ratio 5:3. How much does the child receive?",
       "o": {
        "A": "₦15,000",
        "B": "₦18,000",
        "C": "₦20,000",
        "D": "₦30,000"
       },
       "a": "B",
       "concept": "Find the value of one part, then multiply by the child's ratio number.",
       "method": "Total parts=8. One part=6,000. Child's share=3×6,000=₦18,000.",
       "difficulty": "core"
      },
      {
       "q": "A bag contains 5 white and 3 black balls. What is the probability of picking a black ball at random?",
       "o": {
        "A": "3/8",
        "B": "5/8",
        "C": "3/5",
        "D": "1/3"
       },
       "a": "A",
       "concept": "Probability = favourable outcomes ÷ total outcomes.",
       "method": "Total=8. P(black)=3/8.",
       "difficulty": "core"
      },
      {
       "q": "Patience, Abdul-Rahman and Tola shared ₦396 in the ratio 5:4:3 respectively. How much did Patience receive?",
       "o": {
        "A": "₦132",
        "B": "₦198",
        "C": "₦99",
        "D": "₦165"
       },
       "a": "D",
       "concept": "To share an amount in a given ratio, divide by the total number of parts, then multiply by each person's share.",
       "method": "Total parts = 5+4+3 = 12. Value per part = 396÷12 = ₦33. Patience's share = 5×33 = ₦165.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following fractions is the smallest?",
       "o": {
        "A": "1/2",
        "B": "1/3",
        "C": "1/6",
        "D": "1/5"
       },
       "a": "C",
       "concept": "For fractions with the same numerator, a larger denominator means a smaller overall value.",
       "method": "Among 1/2, 1/3, 1/5, and 1/6, the largest denominator (6) gives the smallest fraction: 1/6.",
       "difficulty": "core"
      },
      {
       "q": "I have 25 oranges. I gave 10 to Ade and 5 to Bola. What fraction of the oranges do I have remaining?",
       "o": {
        "A": "3/5",
        "B": "2/5",
        "C": "4/5",
        "D": "1/5"
       },
       "a": "B",
       "concept": "Find the remaining quantity first, then express it as a fraction of the original total.",
       "method": "Given away = 10+5 = 15. Remaining = 25−15 = 10. As a fraction of 25: 10/25 = 2/5.",
       "difficulty": "core"
      },
      {
       "q": "If the ratio of girls to boys in a class is 5:3, which of these CANNOT be the total number of students in the class?",
       "o": {
        "A": "32",
        "B": "40",
        "C": "48",
        "D": "36"
       },
       "a": "D",
       "concept": "A total that fits a given ratio must be exactly divisible by the sum of the ratio parts.",
       "method": "5+3 = 8 parts, so the total must be divisible by 8. 32, 40, and 48 all divide evenly by 8, but 36 ÷ 8 does not — so 36 is impossible.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following pairs of fractions adds up to a number greater than 5?",
       "o": {
        "A": "5/3 and 3/4",
        "B": "7/3 and 11/5",
        "C": "11/4 and 8/3",
        "D": "13/5 and 11/6"
       },
       "a": "C",
       "concept": "When comparing sums of fractions, convert each pair to decimals for a quick, reliable comparison.",
       "method": "11/4 + 8/3 = 2.75 + 2.67 = 5.42, which is greater than 5; the other pairs all total less than 5.",
       "difficulty": "core"
      },
      {
       "q": "In a school, the ratio of girls to boys is 5:6. If the total population is 605, how many boys are there?",
       "o": {
        "A": "365",
        "B": "275",
        "C": "330",
        "D": "560"
       },
       "a": "C",
       "concept": "Find the value of one 'part' by dividing the total by the sum of ratio parts, then scale up for the group needed.",
       "method": "Total parts = 5+6 = 11. One part = 605÷11 = 55. Boys = 6 × 55 = 330.",
       "difficulty": "core"
      },
      {
       "q": "A prize of ₦150 was shared among three winners in the ratio 4:5:6. How much did each winner receive?",
       "o": {
        "A": "₦30, ₦40, ₦70",
        "B": "₦40, ₦50, ₦60",
        "C": "₦50, ₦60, ₦40",
        "D": "₦20, ₦50, ₦70"
       },
       "a": "B",
       "concept": "Divide the total by the sum of the ratio parts to find the value of one part, then multiply for each share.",
       "method": "Total parts = 4+5+6 = 15. One part = 150÷15 = ₦10. Shares: 4×10=₦40, 5×10=₦50, 6×10=₦60.",
       "difficulty": "core"
      },
      {
       "q": "In a school, 25 teachers out of 60 own cars. What is the ratio of teachers who own cars to those who don't?",
       "o": {
        "A": "5:7",
        "B": "3:4",
        "C": "1:3",
        "D": "5:12"
       },
       "a": "A",
       "concept": "A ratio between two groups compares their actual counts, not each group to the total.",
       "method": "Own cars = 25, don't own = 60−25 = 35. Ratio 25:35 simplifies (÷5) to 5:7.",
       "difficulty": "core"
      },
      {
       "q": "I have ₦12 and my brother has ₦24. What is the ratio of my money to my brother's money?",
       "o": {
        "A": "3:4",
        "B": "1:2",
        "C": "2:4",
        "D": "1:3"
       },
       "a": "B",
       "concept": "Simplify a ratio the same way you simplify a fraction — divide both sides by their highest common factor.",
       "method": "12:24 divides by 12 on both sides to give the simplest form: 1:2.",
       "difficulty": "core"
      },
      {
       "q": "What is the probability of picking an even number from 1 to 10?",
       "o": {
        "A": "5/10",
        "B": "1/10",
        "C": "1/2",
        "D": "1/5"
       },
       "a": "C",
       "concept": "Probability = number of favourable outcomes ÷ total number of possible outcomes.",
       "method": "Even numbers 1–10: 2,4,6,8,10 (5 of them) out of 10 total → 5/10 = 1/2.",
       "difficulty": "core"
      },
      {
       "q": "Arrange the following fractions in descending order: 1/2, 1/4, 1/5, 3/8.",
       "o": {
        "A": "1/5, 3/8, 1/4, 1/2",
        "B": "1/2, 1/4, 1/5, 3/8",
        "C": "1/2, 3/8, 1/4, 1/5",
        "D": "3/8, 1/4, 1/5, 1/2"
       },
       "a": "C",
       "concept": "Convert to decimals for a quick, reliable comparison when ordering fractions.",
       "method": "As decimals: 1/2=0.5, 3/8=0.375, 1/4=0.25, 1/5=0.2. Descending: 1/2, 3/8, 1/4, 1/5.",
       "difficulty": "core"
      },
      {
       "q": "50cm is what ratio of 2m?",
       "o": {
        "A": "2:3",
        "B": "1:4",
        "C": "1:25",
        "D": "1:5"
       },
       "a": "B",
       "concept": "Both quantities must be in the same unit before you can form a ratio.",
       "method": "2m = 200cm. 50cm : 200cm simplifies (÷50) to 1:4.",
       "difficulty": "core"
      },
      {
       "q": "Ade and Bisi shared a certain amount of money in the ratio 4:3. Ade's share is #800 more than Bisi's. What is the total amount shared?",
       "o": {
        "A": "#5,600",
        "B": "#3,200",
        "C": "#4,500",
        "D": "#6,300"
       },
       "a": "A",
       "concept": "Let the smaller share be a variable, express the larger share in terms of it and the given difference, then solve using the ratio.",
       "method": "Let Bisi = 3k, Ade = 4k. Since 4k = 3k + 800, k = 800. Total = 7k = 7 × 800 = #5,600.",
       "difficulty": "core"
      },
      {
       "q": "A woman bought 345 oranges and 45 were spoilt. What is the ratio of spoilt oranges to the total?",
       "o": {
        "A": "23:3",
        "B": "3:23",
        "C": "69:9",
        "D": "23:9"
       },
       "a": "B",
       "concept": "Simplify the ratio the same way you would simplify a fraction — divide both sides by their highest common factor.",
       "method": "45:345 divides by 15 on both sides to give 3:23.",
       "difficulty": "core"
      }
     ],
     "freq": 66
    },
    {
     "id": "mensuration",
     "name": "Basic Algebra & Mensuration",
     "blurb": "A handful of formula-based questions — know the shape formulas cold and simple equation-solving becomes routine.",
     "concept_notes": [
      "Perimeter = distance around a shape; Area = space inside it. For a rectangle: P=2(l+b), A=l×b.",
      "When solving simple equations, do the same operation to both sides until the unknown stands alone.",
      "Look for shortcuts: if one expression is a clean multiple of another (like 6x-3y being 3×(2x-y)), skip solving for individual variables entirely.",
      "Read exactly what's being asked — exams often want 3x or x², not just x, after you've solved for x."
     ],
     "questions": [
      {
       "q": "The length and breadth of a rectangle are 8cm and 5cm. Find its perimeter.",
       "o": {
        "A": "13cm",
        "B": "20cm",
        "C": "26cm",
        "D": "40cm"
       },
       "a": "C",
       "concept": "Perimeter of a rectangle = 2 × (length + breadth).",
       "method": "P=2×(8+5)=2×13=26cm.",
       "difficulty": "core"
      },
      {
       "q": "If x + 5 = 12, find the value of 3x.",
       "o": {
        "A": "15",
        "B": "18",
        "C": "21",
        "D": "24"
       },
       "a": "C",
       "concept": "Solve for the unknown first, then substitute into the expression asked for.",
       "method": "x=12−5=7. 3x=3×7=21.",
       "difficulty": "core"
      },
      {
       "q": "If (2x − y) = 4, then (6x − 3y) = ?",
       "o": {
        "A": "15",
        "B": "12",
        "C": "18",
        "D": "10"
       },
       "a": "B",
       "concept": "Spot that the second expression is simply a multiple of the first — no need to solve for x and y separately.",
       "method": "6x−3y = 3(2x−y) = 3×4 = 12.",
       "difficulty": "core"
      },
      {
       "q": "The sides of a triangle are in the ratio 3:5:7 and its perimeter is 30cm. Find the greatest side.",
       "o": {
        "A": "6cm",
        "B": "10cm",
        "C": "14cm",
        "D": "16cm"
       },
       "a": "C",
       "concept": "Use the ratio parts to divide the perimeter, then take the largest share.",
       "method": "Total parts=15. One part=2cm. Greatest side=7×2=14cm.",
       "difficulty": "core"
      },
      {
       "q": "What angle (in degrees) is formed by a straight line?",
       "o": {
        "A": "90",
        "B": "60",
        "C": "180",
        "D": "30"
       },
       "a": "C",
       "concept": "A straight line always represents a total angle of 180°.",
       "method": "Basic geometry fact: angles on a straight line sum to 180°.",
       "difficulty": "core"
      },
      {
       "q": "Convert 0.005 kilogrammes to grammes.",
       "o": {
        "A": "5000",
        "B": "500",
        "C": "50",
        "D": "5"
       },
       "a": "D",
       "concept": "1 kilogramme = 1000 grammes; multiply by 1000 to convert kg to g.",
       "method": "0.005 × 1000 = 5 grammes.",
       "difficulty": "core"
      },
      {
       "q": "Which numbers between 1 and 60 begin or end with the digit 5?",
       "o": {
        "A": "5",
        "B": "8",
        "C": "15",
        "D": "18"
       },
       "a": "C",
       "concept": "Count numbers starting with 5 (50-59: 10 numbers) and ending with 5 (5,15,...,55: 6 numbers), then remove the one counted twice (55).",
       "method": "10 (starting with 5) + 6 (ending with 5) − 1 (55 counted twice) = 15.",
       "difficulty": "core"
      },
      {
       "q": "Which number should be added to 11158 to make it exactly divisible by 77?",
       "o": {
        "A": "9",
        "B": "8",
        "C": "7",
        "D": "5"
       },
       "a": "C",
       "concept": "Find the remainder when dividing by 77, then subtract that remainder from 77 to find what's needed.",
       "method": "11158 ÷ 77 = 144 remainder 70. 77−70=7 needed.",
       "difficulty": "core"
      },
      {
       "q": "What number precedes 9909 and is a perfect square?",
       "o": {
        "A": "9908",
        "B": "9900",
        "C": "9899",
        "D": "9801"
       },
       "a": "D",
       "concept": "Recognise nearby perfect squares: 99²=9801, 100²=10000.",
       "method": "99²=9801 is the largest perfect square below 9909.",
       "difficulty": "core"
      },
      {
       "q": "If 10% of a number is subtracted from it, the result is 1800. Find the number.",
       "o": {
        "A": "1900",
        "B": "2000",
        "C": "2100",
        "D": "2140"
       },
       "a": "B",
       "concept": "Removing 10% leaves 90% of the original number.",
       "method": "0.90N=1800 → N=2000.",
       "difficulty": "core"
      },
      {
       "q": "A square has a side length of 9cm. Find its area.",
       "o": {
        "A": "18cm²",
        "B": "36cm²",
        "C": "72cm²",
        "D": "81cm²"
       },
       "a": "D",
       "concept": "Area of a square = side × side.",
       "method": "9×9=81cm².",
       "difficulty": "core"
      },
      {
       "q": "If 3y − 7 = 20, find the value of y.",
       "o": {
        "A": "7",
        "B": "8",
        "C": "9",
        "D": "10"
       },
       "a": "C",
       "concept": "Isolate the unknown by reversing each operation.",
       "method": "3y=27 → y=9.",
       "difficulty": "core"
      },
      {
       "q": "The circumference of a circle is given by 2πr. If the radius is 7cm (use π≈22/7), find the circumference.",
       "o": {
        "A": "22cm",
        "B": "44cm",
        "C": "66cm",
        "D": "88cm"
       },
       "a": "B",
       "concept": "Substitute the given values directly into the formula.",
       "method": "2×22/7×7=44cm.",
       "difficulty": "core"
      },
      {
       "q": "Solve for n: 5n + 3 = 2n + 18.",
       "o": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
       },
       "a": "C",
       "concept": "Collect the unknown terms on one side and the constants on the other.",
       "method": "5n−2n=18−3 → 3n=15 → n=5.",
       "difficulty": "core"
      },
      {
       "q": "A rectangular field is 40m long and 25m wide. Find its area.",
       "o": {
        "A": "65 m²",
        "B": "1,000 m²",
        "C": "800 m²",
        "D": "130 m²"
       },
       "a": "B",
       "concept": "Area of a rectangle = length × breadth.",
       "method": "40×25=1,000 m².",
       "difficulty": "core"
      },
      {
       "q": "The breadth and length of a rectangle are L and 2L respectively. What is the perimeter of the rectangle?",
       "o": {
        "A": "3L",
        "B": "4L",
        "C": "5L",
        "D": "6L"
       },
       "a": "D",
       "concept": "Perimeter of a rectangle = 2 × (length + breadth).",
       "method": "Perimeter = 2(L + 2L) = 2(3L) = 6L.",
       "difficulty": "core"
      },
      {
       "q": "A square lawn has an area of 729 m². What is the distance around the lawn (its perimeter)?",
       "o": {
        "A": "96 m",
        "B": "108 m",
        "C": "120 m",
        "D": "66 m"
       },
       "a": "B",
       "concept": "For a square, find the side length by taking the square root of the area, then multiply by 4 for the perimeter.",
       "method": "Side = √729 = 27 m. Perimeter = 4 × 27 = 108 m.",
       "difficulty": "core"
      },
      {
       "q": "Find the circumference of a circle with diameter 14cm. (Use π = 22/7)",
       "o": {
        "A": "22cm",
        "B": "44cm",
        "C": "11cm",
        "D": "88cm"
       },
       "a": "B",
       "concept": "Circumference = π × diameter.",
       "method": "C = 22/7 × 14 = 44cm.",
       "difficulty": "core"
      },
      {
       "q": "The length of a rectangle is 30cm and the breadth is 0.15m. Calculate the perimeter in centimetres.",
       "o": {
        "A": "61cm",
        "B": "45cm",
        "C": "60.3cm",
        "D": "90cm"
       },
       "a": "D",
       "concept": "Convert every measurement to the same unit before calculating.",
       "method": "0.15m = 15cm. Perimeter = 2(L+B) = 2(30+15) = 90cm.",
       "difficulty": "core"
      },
      {
       "q": "How many times does a right angle occur between the hour and minute hands of a clock in a 24-hour period?",
       "o": {
        "A": "22",
        "B": "24",
        "C": "44",
        "D": "48"
       },
       "a": "C",
       "concept": "A well-known clock puzzle: the hands form a right angle 22 times every 12 hours.",
       "method": "22 times in 12 hours × 2 (for 24 hours) = 44.",
       "difficulty": "core"
      },
      {
       "q": "Two angles of a triangle are each 60°. What is the third angle?",
       "o": {
        "A": "60°",
        "B": "120°",
        "C": "90°",
        "D": "110°"
       },
       "a": "A",
       "concept": "The three interior angles of any triangle always add up to 180°.",
       "method": "180° − 60° − 60° = 60° (this makes it an equilateral triangle).",
       "difficulty": "core"
      }
     ],
     "freq": 21
    },
    {
     "id": "reasoning",
     "name": "Logical & Numerical Reasoning",
     "blurb": "Ordering puzzles, true/false/uncertain logic chains, and quick numerical deduction — common in the aptitude-style sections of these papers.",
     "concept_notes": [
      "For 'who is tallest/oldest/fastest' puzzles, chain ALL the clues into one single order before answering — don't stop after the first comparison.",
      "'True, False, or Uncertain' questions test whether a conclusion is GUARANTEED by the given facts — if another possibility hasn't been ruled out, the answer is Uncertain, not True.",
      "For seating/position puzzles, anchor one person's position and build outward from the clues, one step at a time.",
      "A number is divisible by 3 if its digit sum is divisible by 3, and by 9 if its digit sum is divisible by 9 — memorise these shortcuts."
     ],
     "questions": [
      {
       "q": "Suleiman is taller than Ajayi. Usman is taller than Suleiman. Tope is taller than Suleiman. Who is the shortest?",
       "o": {
        "A": "Usman",
        "B": "Suleiman",
        "C": "Ajayi",
        "D": "Tope"
       },
       "a": "C",
       "concept": "Build the full order from the clues before answering — don't stop at the first comparison you see.",
       "method": "Order so far: Usman/Tope > Suleiman > Ajayi. Nobody is stated shorter than Ajayi, so Ajayi is shortest.",
       "difficulty": "core"
      },
      {
       "q": "Bola had fewer sums right than Ojo. Ojo had fewer sums right than Dele. Who had the most right answers?",
       "o": {
        "A": "Bola",
        "B": "Ojo and Bola",
        "C": "Dele",
        "D": "Bola and Dele"
       },
       "a": "C",
       "concept": "Chain the two comparisons into one order.",
       "method": "Dele > Ojo > Bola, so Dele has the most.",
       "difficulty": "core"
      },
      {
       "q": "Sue and Jennifer are fair. Brian and Robyn are dark. Sue and Robyn are tall. Who is fair AND tall?",
       "o": {
        "A": "Sue",
        "B": "Jennifer",
        "C": "Brian",
        "D": "Robyn"
       },
       "a": "A",
       "concept": "Find the person who appears in BOTH the 'fair' group and the 'tall' group.",
       "method": "Fair={Sue,Jennifer}. Tall={Sue,Robyn}. Only Sue is in both.",
       "difficulty": "core"
      },
      {
       "q": "Tanya is older than Eric. Cliff is older than Tanya. If both are true, is 'Eric is older than Cliff' true, false, or uncertain?",
       "o": {
        "A": "True",
        "B": "False",
        "C": "Uncertain",
        "D": "None of the above"
       },
       "a": "B",
       "concept": "Chain the clues into one order, then check the claim against it.",
       "method": "Order: Cliff > Tanya > Eric. So Eric is NOT older than Cliff — the claim is false.",
       "difficulty": "core"
      },
      {
       "q": "Blueberries cost more than strawberries. Blueberries cost less than raspberries. Is 'raspberries cost more than both' true, false, or uncertain?",
       "o": {
        "A": "True",
        "B": "False",
        "C": "Uncertain",
        "D": "None of the above"
       },
       "a": "A",
       "concept": "Chain the clues: raspberries > blueberries > strawberries.",
       "method": "Since raspberries are above both others in the chain, the claim is true.",
       "difficulty": "core"
      },
      {
       "q": "All trees in the park are flowering trees. Some trees in the park are dogwoods. Is 'all dogwoods in the park are flowering trees' true, false, or uncertain?",
       "o": {
        "A": "True",
        "B": "False",
        "C": "Uncertain",
        "D": "None of the above"
       },
       "a": "A",
       "concept": "If dogwoods are a type of tree in the park, and ALL park trees are flowering trees, dogwoods must be too.",
       "method": "Dogwoods ⊆ trees ⊆ flowering trees, so the claim is guaranteed true.",
       "difficulty": "core"
      },
      {
       "q": "All the tulips in Zoe's garden are white. All the pansies are yellow. Is 'all flowers in the garden are white or yellow' true, false, or uncertain?",
       "o": {
        "A": "True",
        "B": "False",
        "C": "Uncertain",
        "D": "None of the above"
       },
       "a": "C",
       "concept": "The clues only describe tulips and pansies — other flower types could exist with unknown colours.",
       "method": "Nothing rules out a third flower type of a different colour, so it's uncertain.",
       "difficulty": "core"
      },
      {
       "q": "Mary said, \"Ann and I both have cats.\" Ann said, \"I don't have a cat.\" Mary always tells the truth; Ann sometimes lies. Which must be true: I. Ann has a cat, II. Mary has a cat, III. Ann is lying?",
       "o": {
        "A": "I only",
        "B": "II only",
        "C": "I and II only",
        "D": "All the statements are facts"
       },
       "a": "D",
       "concept": "Since Mary always tells the truth, her statement is fully true — trace what that guarantees about Ann's own claim.",
       "method": "Mary's true statement confirms both I and II. Since Ann does have a cat, her denial is a lie, confirming III too.",
       "difficulty": "core"
      },
      {
       "q": "At a baseball game, Henry sits in seat 253. Marla sits to the right of Henry in 254. George sits to the left of Henry. Inez sits to the left of George. What seat is Inez in?",
       "o": {
        "A": "251",
        "B": "254",
        "C": "255",
        "D": "256"
       },
       "a": "A",
       "concept": "Place each person on a number line one step at a time from the given anchor seat.",
       "method": "Henry=253, George=252 (left of Henry), Inez=251 (left of George).",
       "difficulty": "core"
      },
      {
       "q": "A hole is being dug for a job that takes 6 men 10 days. How many days would 4 men take, at the same rate, if the job needs to be sped up with overtime? [logic check: fewer workers always need MORE time, never less]",
       "o": {
        "A": "6 days",
        "B": "8 days",
        "C": "15 days",
        "D": "20 days"
       },
       "a": "C",
       "concept": "This restates the classic inverse-proportion rule: fewer workers, more days, using constant total man-days.",
       "method": "6×10=60 man-days total. 60÷4=15 days.",
       "difficulty": "core"
      },
      {
       "q": "A conference had 100 people seated. Later 500 chairs were added, and 399 more people joined. How many chairs are left unoccupied?",
       "o": {
        "A": "101",
        "B": "201",
        "C": "99",
        "D": "150"
       },
       "a": "A",
       "concept": "Track total chairs and total people separately, then subtract.",
       "method": "Chairs=100+500=600. People=100+399=499. Unoccupied=600−499=101.",
       "difficulty": "core"
      },
      {
       "q": "Which of these numbers is divisible by 3: (i) 541326 (ii) 5967013?",
       "o": {
        "A": "(ii) only",
        "B": "(i) only",
        "C": "(i) and (ii)",
        "D": "Neither"
       },
       "a": "B",
       "concept": "A number is divisible by 3 only if the sum of its digits is divisible by 3.",
       "method": "541326 digits sum to 21 (÷3=7 ✓). 5967013 digits sum to 31 (not divisible by 3).",
       "difficulty": "core"
      },
      {
       "q": "A man travelling from Lagos to Ibadan sees a woman's bus travelling the opposite way (Ibadan to Lagos). How does her bus appear to him as it passes?",
       "o": {
        "A": "His bus is accelerating",
        "B": "The gap between them is rapidly increasing",
        "C": "Her bus seems much faster than his",
        "D": "A passing car caused the effect"
       },
       "a": "C",
       "concept": "When two vehicles move toward each other, their relative speed is the SUM of both speeds, making the other appear faster than it really is.",
       "method": "Opposite-direction motion adds the two speeds together in perception — she appears to speed by.",
       "difficulty": "core"
      },
      {
       "q": "If all Zeds are Yems, and all Yems are Wibs, what can we conclude about Zeds and Wibs?",
       "o": {
        "A": "All Zeds are Wibs",
        "B": "No Zeds are Wibs",
        "C": "Some Zeds are not Wibs",
        "D": "Cannot be determined"
       },
       "a": "A",
       "concept": "A chain of 'all A are B' relationships transfers through the whole chain.",
       "method": "Zeds⊆Yems⊆Wibs, so Zeds⊆Wibs — all Zeds are Wibs.",
       "difficulty": "core"
      },
      {
       "q": "Five friends sit in a row. Kunle is to the left of Musa. Ada is to the right of Musa. Bello is to the left of Kunle. Who is on the far left?",
       "o": {
        "A": "Kunle",
        "B": "Musa",
        "C": "Ada",
        "D": "Bello"
       },
       "a": "D",
       "concept": "Chain the clues into one left-to-right order.",
       "method": "Order: Bello, Kunle, Musa, Ada — Bello is leftmost.",
       "difficulty": "core"
      },
      {
       "q": "A number of coins are shared among 3 boys so that the first has twice as many as the second, and the second has twice as many as the third. If the third boy has 5 coins, how many coins are there in total?",
       "o": {
        "A": "25",
        "B": "30",
        "C": "35",
        "D": "40"
       },
       "a": "C",
       "concept": "Work outward from the known value using the stated multiplication relationships.",
       "method": "Third=5, second=2×5=10, first=2×10=20. Total=5+10+20=35.",
       "difficulty": "core"
      },
      {
       "q": "A person has 4 coins, each of a different denomination. How many different sums of money can be formed using one or more of the coins at a time?",
       "o": {
        "A": "16",
        "B": "15",
        "C": "12",
        "D": "11"
       },
       "a": "B",
       "concept": "For n distinct items, the number of non-empty subsets (combinations of one or more) is 2ⁿ − 1.",
       "method": "With 4 distinct coins: 2⁴ − 1 = 16 − 1 = 15 possible sums.",
       "difficulty": "core"
      },
      {
       "q": "If Ayuba bought 5 oranges for ₦7, how many oranges of the same type can he buy for ₦49?",
       "o": {
        "A": "35 oranges",
        "B": "15 oranges",
        "C": "25 oranges",
        "D": "30 oranges"
       },
       "a": "A",
       "concept": "Unit rate problems scale up proportionally: find how many times the price has increased, then scale the quantity the same way.",
       "method": "₦49 ÷ ₦7 = 7 times the original amount. 7 × 5 oranges = 35 oranges.",
       "difficulty": "core"
      },
      {
       "q": "Naira is to Nigeria as ______ is to India (currency-to-country reasoning).",
       "o": {
        "A": "Rupee",
        "B": "Yen",
        "C": "Franc",
        "D": "Dinar"
       },
       "a": "A",
       "concept": "Matching a country to its official currency is a common logical-pairing question.",
       "method": "India's official currency is the rupee.",
       "difficulty": "core"
      },
      {
       "q": "Shade went out with some money. She spent 5/10 (half) of it and had ₦2.40 remaining. How much did she have before going out?",
       "o": {
        "A": "₦4.80",
        "B": "₦2.60",
        "C": "₦6.00",
        "D": "₦15.60"
       },
       "a": "A",
       "concept": "If a fraction was spent, the remainder represents the complementary fraction of the original amount.",
       "method": "₦2.40 represents the half NOT spent, so the original total = 2.40 × 2 = ₦4.80.",
       "difficulty": "core"
      },
      {
       "q": "How many times is 0.04 contained in 44?",
       "o": {
        "A": "1.76",
        "B": "110",
        "C": "1100",
        "D": "11"
       },
       "a": "C",
       "concept": "'How many times is A contained in B' is asking for B ÷ A.",
       "method": "44 ÷ 0.04 = 44 ÷ (4/100) = 44 × 100/4 = 1,100.",
       "difficulty": "core"
      },
      {
       "q": "Add together the nine smallest positive whole numbers (1 to 9).",
       "o": {
        "A": "30",
        "B": "55",
        "C": "42",
        "D": "45"
       },
       "a": "D",
       "concept": "The sum of the first n whole numbers is n(n+1)/2.",
       "method": "Sum of 1 to 9 = 9(9+1)/2 = 9×10/2 = 45.",
       "difficulty": "core"
      },
      {
       "q": "Whose portrait appears on the Nigerian ₦100 note?",
       "o": {
        "A": "Tafawa Balewa",
        "B": "Obafemi Awolowo",
        "C": "Nnamdi Azikiwe",
        "D": "Herbert Macaulay"
       },
       "a": "B",
       "concept": "Currency-figure pairings are a recurring general-knowledge-flavoured reasoning question in these exams.",
       "method": "The ₦100 note carries the portrait of Chief Obafemi Awolowo.",
       "difficulty": "core"
      },
      {
       "q": "Whose portrait appears on the Nigerian ₦5 note?",
       "o": {
        "A": "Sir Tafawa Balewa",
        "B": "Chief Anthony Enahoro",
        "C": "Sir Ahmadu Bello",
        "D": "Herbert Macaulay"
       },
       "a": "A",
       "concept": "Currency-figure pairings are a recurring general-knowledge-flavoured reasoning question in these exams.",
       "method": "The ₦5 note carries the portrait of Sir Abubakar Tafawa Balewa, Nigeria's first Prime Minister.",
       "difficulty": "core"
      },
      {
       "q": "While preparing for an exam, Felix read pages 35 to 78 and pages 102 to 127 of a textbook. How many pages did he read altogether?",
       "o": {
        "A": "58",
        "B": "70",
        "C": "68",
        "D": "64"
       },
       "a": "B",
       "concept": "To count pages in an inclusive range, use (last − first + 1); then add up separate ranges.",
       "method": "Pages 35–78: 78−35+1 = 44 pages. Pages 102–127: 127−102+1 = 26 pages. Total = 44+26 = 70 pages.",
       "difficulty": "core"
      },
      {
       "q": "Round off 1.56 to 1 decimal place.",
       "o": {
        "A": "1.6",
        "B": "1.56",
        "C": "0.56",
        "D": "1.5"
       },
       "a": "A",
       "concept": "To round to 1 decimal place, look at the second decimal digit — round up if it's 5 or more.",
       "method": "1.56 → the second decimal digit is 6 (≥5), so round the first decimal up: 1.5 becomes 1.6.",
       "difficulty": "core"
      },
      {
       "q": "Find the product of the HCF and LCM of 3a and 2ab.",
       "o": {
        "A": "6a²b²",
        "B": "6a²b",
        "C": "6ab",
        "D": "6ab²"
       },
       "a": "B",
       "concept": "Product of two numbers (or terms) always equals the product of their HCF and LCM.",
       "method": "LCM(3a, 2ab) = 6ab; HCF(3a, 2ab) = a. Product = 6ab × a = 6a²b.",
       "difficulty": "core"
      },
      {
       "q": "If n³ = 27, find n.",
       "o": {
        "A": "9",
        "B": "6",
        "C": "3",
        "D": "18"
       },
       "a": "C",
       "concept": "To undo a cube, take the cube root of both sides.",
       "method": "n³ = 27 = 3³, so n = 3.",
       "difficulty": "core"
      },
      {
       "q": "A number is added to 12, then the result is divided by 25, giving an answer of 4. What is the number?",
       "o": {
        "A": "68",
        "B": "88",
        "C": "100",
        "D": "112"
       },
       "a": "B",
       "concept": "Translate the word problem into an equation, then solve step by step, undoing each operation in reverse order.",
       "method": "(x + 12)/25 = 4 → x + 12 = 100 → x = 88.",
       "difficulty": "core"
      },
      {
       "q": "If log 2 = 0.301, find log 16.",
       "o": {
        "A": "4.816",
        "B": "120.4",
        "C": "12.04",
        "D": "1.204"
       },
       "a": "D",
       "concept": "Express the target number as a power of the base you already know the log of, then apply the power rule of logs.",
       "method": "log 16 = log 2⁴ = 4 log 2 = 4 × 0.301 = 1.204.",
       "difficulty": "core"
      },
      {
       "q": "Find the median of 4, 8, 4, 4, 9, 7, 3, 2, 5.",
       "o": {
        "A": "5",
        "B": "4",
        "C": "7",
        "D": "9"
       },
       "a": "B",
       "concept": "The median is the middle value once the data is arranged in order.",
       "method": "Sorted: 2,3,4,4,4,5,7,8,9 (9 values). The middle (5th) value is 4.",
       "difficulty": "core"
      },
      {
       "q": "What is the value of x in 3ˣ = 243?",
       "o": {
        "A": "4",
        "B": "6",
        "C": "5",
        "D": "3"
       },
       "a": "C",
       "concept": "When both sides can be written with the same base, the exponents must be equal.",
       "method": "243 = 3⁵, so 3ˣ = 3⁵ gives x = 5.",
       "difficulty": "core"
      },
      {
       "q": "What is the square root of 81/9?",
       "o": {
        "A": "9/3",
        "B": "3",
        "C": "1/2",
        "D": "9"
       },
       "a": "B",
       "concept": "Simplify inside the root first, then take the square root of the simplified value.",
       "method": "81/9 = 9, and √9 = 3.",
       "difficulty": "core"
      },
      {
       "q": "If X = (3+1)/(3-1) and Y = (X+1)/(X-1), find X² + Y².",
       "o": {
        "A": "12",
        "B": "14",
        "C": "20",
        "D": "13"
       },
       "a": "D",
       "concept": "Work through multi-step algebraic substitution one stage at a time.",
       "method": "X = 4/2 = 2. Y = (2+1)/(2-1) = 3. X² + Y² = 4 + 9 = 13.",
       "difficulty": "core"
      },
      {
       "q": "A shape with nine sides is called a ______.",
       "o": {
        "A": "Hexagon",
        "B": "Heptagon",
        "C": "Nonagon",
        "D": "Octagon"
       },
       "a": "C",
       "concept": "Polygon names are built from Greek/Latin number prefixes — worth memorising as a set.",
       "method": "Hexagon = 6 sides, heptagon = 7, octagon = 8; a 9-sided shape is a nonagon.",
       "difficulty": "core"
      },
      {
       "q": "The line that divides a circle into two equal parts is called the ______.",
       "o": {
        "A": "Sector",
        "B": "Diameter",
        "C": "Divisor",
        "D": "Chord"
       },
       "a": "B",
       "concept": "A diameter is the special chord that passes through the centre, splitting the circle exactly in half.",
       "method": "Any other chord divides the circle unequally (major/minor segments); only the diameter splits it evenly.",
       "difficulty": "core"
      },
      {
       "q": "If 5ˣ⁻² = 625, find x.",
       "o": {
        "A": "5",
        "B": "7",
        "C": "8",
        "D": "6"
       },
       "a": "D",
       "concept": "Match the bases, then equate the exponents.",
       "method": "625 = 5⁴, so x − 2 = 4, giving x = 6.",
       "difficulty": "core"
      },
      {
       "q": "Adding all the positive integers from 1 to 100, the sum becomes ______.",
       "o": {
        "A": "5,050",
        "B": "5,010",
        "C": "4,050",
        "D": "6,050"
       },
       "a": "A",
       "concept": "Use the sum-of-first-n-integers formula instead of adding one by one.",
       "method": "Sum = n(n+1)/2 = 100 × 101/2 = 5,050.",
       "difficulty": "core"
      },
      {
       "q": "A + B = 9, B + C = 13, C + A = 14. Find A + B + C.",
       "o": {
        "A": "18",
        "B": "0",
        "C": "9",
        "D": "10"
       },
       "a": "A",
       "concept": "Adding all three equations together counts each variable exactly twice, giving a quick shortcut.",
       "method": "Sum of all three equations: 2(A+B+C) = 9+13+14 = 36, so A+B+C = 18.",
       "difficulty": "core"
      },
      {
       "q": "Arrange in ascending order: 3/8, 1/5, 1/4, 1/2.",
       "o": {
        "A": "1/2, 3/8, 1/4, 1/5",
        "B": "1/4, 1/5, 3/8, 1/2",
        "C": "3/8, 1/5, 1/4, 1/2",
        "D": "1/5, 1/4, 3/8, 1/2"
       },
       "a": "D",
       "concept": "Converting fractions to decimals is often the fastest way to compare and order them.",
       "method": "As decimals: 3/8=0.375, 1/5=0.2, 1/4=0.25, 1/2=0.5. Ascending: 1/5, 1/4, 3/8, 1/2.",
       "difficulty": "core"
      },
      {
       "q": "Find the mean of 3, 6, 5, 4, 2, 7, 6, 7.",
       "o": {
        "A": "8",
        "B": "5",
        "C": "7",
        "D": "6"
       },
       "a": "B",
       "concept": "Mean = sum of all values ÷ number of values.",
       "method": "Sum = 3+6+5+4+2+7+6+7 = 40. Mean = 40 ÷ 8 = 5.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is a perfect square?",
       "o": {
        "A": "9y²",
        "B": "10x²",
        "C": "25x⁵",
        "D": "49y²z³"
       },
       "a": "A",
       "concept": "A term is a perfect square only if its numeric coefficient is a perfect square AND every variable's exponent is even.",
       "method": "9y² = (3y)² — coefficient 9 is a perfect square and y's exponent (2) is even. The others fail one of these conditions.",
       "difficulty": "core"
      },
      {
       "q": "Divide 0.025 by 0.04 and express the answer in standard form.",
       "o": {
        "A": "6.25 × 10⁻¹",
        "B": "6.25 × 10¹",
        "C": "6.25 × 10³",
        "D": "62.5 × 10²"
       },
       "a": "A",
       "concept": "Divide the decimals first, then convert the result to standard (scientific) form: a number between 1 and 10, times a power of 10.",
       "method": "0.025 ÷ 0.04 = 0.625 = 6.25 × 10⁻¹.",
       "difficulty": "core"
      },
      {
       "q": "In a coding system, the numbers 0 to 9 are coded A to J respectively (0=A, 1=B, ... 9=J). What is the code for the number 4238?",
       "o": {
        "A": "CDEI",
        "B": "CEID",
        "C": "CEDI",
        "D": "ECDI"
       },
       "a": "D",
       "concept": "Map each digit to its letter individually, keeping the original digit order.",
       "method": "4→E, 2→C, 3→D, 8→I, giving the code ECDI.",
       "difficulty": "core"
      },
      {
       "q": "Simplify: logX + logX² + logX⁴ + logX⁸ + logX¹⁶ + logX³².",
       "o": {
        "A": "logX³¹",
        "B": "logX⁶²",
        "C": "logX⁶³",
        "D": "logX³²"
       },
       "a": "C",
       "concept": "Adding logs of the same base multiplies the arguments — which, for powers of the same base, means adding the exponents.",
       "method": "logX + logX² + ... + logX³² = logX^(1+2+4+8+16+32) = logX⁶³ (since 1+2+4+8+16+32 = 63).",
       "difficulty": "core"
      },
      {
       "q": "If x = a + b, find the value of 5x² + x.",
       "o": {
        "A": "5a² + 10ab + 5b² − a + b",
        "B": "5a² + 10ab + 5b² + a + b",
        "C": "5a² − 10ab + 5b² − a − b",
        "D": "5a² − 10ab − 5b² − a + b"
       },
       "a": "B",
       "concept": "Substitute the given expression in for x, then expand carefully term by term.",
       "method": "5(a+b)² + (a+b) = 5(a²+2ab+b²) + a + b = 5a² + 10ab + 5b² + a + b.",
       "difficulty": "core"
      },
      {
       "q": "How many prime numbers are there between 2 and 41 inclusive?",
       "o": {
        "A": "12",
        "B": "13",
        "C": "11",
        "D": "9"
       },
       "a": "B",
       "concept": "List the primes systematically rather than guessing — it's easy to miss one.",
       "method": "2,3,5,7,11,13,17,19,23,29,31,37,41 — counting gives 13 primes.",
       "difficulty": "core"
      },
      {
       "q": "Factorise 3d²e + 8d².",
       "o": {
        "A": "d(3e + 8)",
        "B": "d(3de + 8d)",
        "C": "d²(3 + 8)",
        "D": "d²(3e + 8)"
       },
       "a": "D",
       "concept": "Factorising means pulling out the highest common factor of every term.",
       "method": "Both terms share d², so 3d²e + 8d² = d²(3e + 8).",
       "difficulty": "core"
      },
      {
       "q": "A rhombus is similar to a square in terms of which property of its diagonals?",
       "o": {
        "A": "They are unequal in length",
        "B": "They bisect each other at right angles",
        "C": "Only one diagonal is a line of symmetry",
        "D": "They do not bisect the angles"
       },
       "a": "B",
       "concept": "A square is technically a special rhombus, so it shares the rhombus's core diagonal property.",
       "method": "Like a square, a rhombus's diagonals bisect each other at 90° and bisect the interior angles — they just aren't necessarily equal in length.",
       "difficulty": "core"
      },
      {
       "q": "Sera's age is x. Her brother's age is her age plus twice her age (i.e. 3x). If the sum of their ages is half their father's age of 48, find the brother's age.",
       "o": {
        "A": "18",
        "B": "16",
        "C": "24",
        "D": "12"
       },
       "a": "A",
       "concept": "Translate the relationships into algebra one piece at a time before solving.",
       "method": "x + 3x = 48/2 = 24 → 4x = 24 → x = 6. Brother's age = 3x = 18.",
       "difficulty": "core"
      },
      {
       "q": "Evaluate (25/16)^(1/2).",
       "o": {
        "A": "5½",
        "B": "3⅝",
        "C": "1¼",
        "D": "2⅔"
       },
       "a": "C",
       "concept": "A power of ½ is the same as taking a square root.",
       "method": "√(25/16) = 5/4 = 1¼.",
       "difficulty": "core"
      },
      {
       "q": "Find the difference between the mode and the median of: 17, 15, 13, 17, 15, 18, 13, 20, 21, 17, 13, 17, 10.",
       "o": {
        "A": "1",
        "B": "3",
        "C": "0",
        "D": "5"
       },
       "a": "C",
       "concept": "Sort the data first — both the mode (most frequent value) and median (middle value) are much easier to spot once ordered.",
       "method": "Sorted: 10,13,13,13,15,15,17,17,17,17,18,20,21 (13 values). Mode = 17 (appears 4 times); median (7th value) = 17. Difference = 0.",
       "difficulty": "core"
      },
      {
       "q": "A woman is driving and covers a certain distance in 2 hours at 60km/h. If she instead drove at 80km/h, how long would she take to cover the same distance?",
       "o": {
        "A": "3hrs",
        "B": "4hrs",
        "C": "4.5hrs",
        "D": "1.5hrs"
       },
       "a": "D",
       "concept": "First find the fixed distance from the original trip, then use it to find the new time at the new speed.",
       "method": "Distance = 60km/h × 2h = 120km. At 80km/h: time = 120 ÷ 80 = 1.5 hours.",
       "difficulty": "core"
      },
      {
       "q": "Find the mode of the set of numbers: 1, 1, 0, 2, 1, 1, 3, 1, 0, 1.",
       "o": {
        "A": "1",
        "B": "2",
        "C": "0",
        "D": "3"
       },
       "a": "A",
       "concept": "The mode is simply the value that occurs most often in the data set.",
       "method": "Counting occurrences: 1 appears 6 times, 0 appears twice, 2 and 3 appear once each — mode = 1.",
       "difficulty": "core"
      },
      {
       "q": "In a class, the ratio of boys to girls is 1:5. If there are 40 girls, how many boys are there?",
       "o": {
        "A": "10",
        "B": "8",
        "C": "12",
        "D": "16"
       },
       "a": "B",
       "concept": "Use the ratio to set up a proportion between the two groups, then solve for the unknown.",
       "method": "Boys/Girls = 1/5, and girls = 40, so boys = (1 × 40)/5 = 8.",
       "difficulty": "core"
      },
      {
       "q": "If 8.8y − 4 = 7.7y + 7, find y.",
       "o": {
        "A": "1.0",
        "B": "11",
        "C": "1.1",
        "D": "10"
       },
       "a": "D",
       "concept": "Collect all the y-terms on one side and all the constants on the other before dividing.",
       "method": "8.8y − 7.7y = 7 + 4 → 1.1y = 11 → y = 10.",
       "difficulty": "core"
      },
      {
       "q": "What is the reciprocal of 625?",
       "o": {
        "A": "625/1",
        "B": "25/625",
        "C": "1/625",
        "D": "1/652"
       },
       "a": "C",
       "concept": "The reciprocal of a number is simply 1 divided by that number.",
       "method": "Reciprocal of 625 = 1/625.",
       "difficulty": "core"
      },
      {
       "q": "How long does a train take to cover a journey if it starts at 6:10am and arrives at 3:55pm?",
       "o": {
        "A": "10hrs 35mins",
        "B": "9hrs 45mins",
        "C": "9hrs 30mins",
        "D": "10hrs 45mins"
       },
       "a": "B",
       "concept": "Converting to the 24-hour clock avoids confusion when subtracting across the am/pm boundary.",
       "method": "3:55pm = 15:55. 15:55 − 6:10 = 9 hours 45 minutes.",
       "difficulty": "core"
      },
      {
       "q": "A clock gains 20 seconds every hour and shows the correct time at 6am. What time will it show at 3pm (real time) the same day?",
       "o": {
        "A": "3:03pm",
        "B": "3:06pm",
        "C": "2:57pm",
        "D": "3:13pm"
       },
       "a": "A",
       "concept": "Work out the total time elapsed, multiply by the gain-per-hour rate, then add the total gain to the real time.",
       "method": "From 6am to 3pm is 9 hours. Total gain = 9 × 20s = 180s = 3 minutes. Shown time = 3:00pm + 3min = 3:03pm.",
       "difficulty": "core"
      },
      {
       "q": "If 15 cans of food are needed to feed 7 adults for 2 days, how many cans are needed to feed 4 adults for 7 days?",
       "o": {
        "A": "25",
        "B": "15",
        "C": "20",
        "D": "30"
       },
       "a": "D",
       "concept": "This is a combined (inverse then direct) proportion problem — compare total 'adult-days' rather than adults and days separately.",
       "method": "Original need covers 7 × 2 = 14 adult-days at a rate of 15/14 cans per adult-day. New need = 4 × 7 = 28 adult-days → cans = 15 × 28/14 = 30.",
       "difficulty": "core"
      }
     ],
     "freq": 123
    }
   ]
  },
  {
   "id": "gk",
   "name": "General Knowledge & Current Affairs",
   "weight": 10,
   "intro": "A broad, unpredictable section — you can't cram everything, so prioritise Nigeria, Unilorin, and stable world/science facts over volatile 'current' details.",
   "topics": [
    {
     "id": "naijagov",
     "name": "Nigerian Government & History",
     "blurb": "Dates, structures, and the political facts every Nigerian candidate is expected to already know.",
     "concept_notes": [
      "Keep a personal timeline: 1960 (independence), 1963 (republic), 1967–1970 (civil war), 1973 (naira introduced), 1991 (Abuja becomes capital), 1999 (return to democracy).",
      "Know Nigeria's three tiers of government and the two federal legislative chambers.",
      "Facts about currently serving office holders change often — confirm names close to your exam date rather than trusting an old sheet."
     ],
     "questions": [
      {
       "q": "Abuja officially became the Federal Capital of Nigeria, replacing Lagos, in what year?",
       "o": {
        "A": "1976",
        "B": "1986",
        "C": "1991",
        "D": "1999"
       },
       "a": "C",
       "concept": "The FCT was CREATED in 1976, but Abuja only became the official seat of government later.",
       "method": "Separate the two dates: 1976=FCT created on paper; 12 December 1991=official handover of capital status.",
       "difficulty": "core"
      },
      {
       "q": "The Nigerian Civil War (Biafran War) lasted from 1967 to which year?",
       "o": {
        "A": "1969",
        "B": "1970",
        "C": "1971",
        "D": "1972"
       },
       "a": "B",
       "concept": "The war began in July 1967 and ended in January 1970.",
       "method": "Remember the span as roughly 30 months: mid-1967 to early 1970.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria practices what system of government?",
       "o": {
        "A": "Unitary",
        "B": "Federal (Presidential)",
        "C": "Confederal",
        "D": "Monarchical"
       },
       "a": "B",
       "concept": "Power is shared between a central federal government and constituent states, with a presidential executive.",
       "method": "'Federal' = power divided between centre and states — that division defines Nigeria's structure.",
       "difficulty": "core"
      },
      {
       "q": "How many geopolitical zones does Nigeria have?",
       "o": {
        "A": "4",
        "B": "6",
        "C": "8",
        "D": "36"
       },
       "a": "B",
       "concept": "Nigeria is informally grouped into 6 zones: NW, NE, NC, SW, SE, SS.",
       "method": "Don't confuse with the 36 states — zones group the states, six groups total.",
       "difficulty": "core"
      },
      {
       "q": "The Nigerian National Assembly is made up of the Senate and the",
       "o": {
        "A": "House of Chiefs",
        "B": "House of Representatives",
        "C": "House of Commons",
        "D": "House of Lords"
       },
       "a": "B",
       "concept": "Nigeria's bicameral legislature has the Senate (upper) and House of Representatives (lower).",
       "method": "'House of Commons/Lords' are British terms — Nigeria's lower chamber is the House of Representatives.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria gained independence from British colonial rule on",
       "o": {
        "A": "1st October 1960",
        "B": "1st October 1963",
        "C": "30th September 1960",
        "D": "1st January 1960"
       },
       "a": "A",
       "concept": "Nigeria became independent on 1 October 1960, later becoming a republic on 1 October 1963.",
       "method": "Two dates often confused: independence=1960, becoming a republic=1963.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria changed its currency from the Pound to the Naira in",
       "o": {
        "A": "1972",
        "B": "1971",
        "C": "1970",
        "D": "1975"
       },
       "a": "A",
       "concept": "The Naira replaced the Nigerian Pound as the official currency on 1 January 1973, following the decision made in 1972.",
       "method": "Associate the currency switch with the early-1970s reform period.",
       "difficulty": "core"
      },
      {
       "q": "Who was the first Prime Minister of Nigeria?",
       "o": {
        "A": "Sultan of Sokoto",
        "B": "Alh. Tafawa Balogun",
        "C": "Alh. Tafawa Balewa",
        "D": "Alh. Tafa Balewa"
       },
       "a": "C",
       "concept": "Sir Abubakar Tafawa Balewa was Nigeria's first and only Prime Minister (1960–1966).",
       "method": "Watch the spelling traps in the options — the correct name is Tafawa Balewa.",
       "difficulty": "core"
      },
      {
       "q": "The take-over progression to the presidency, in case of the president's death or resignation, follows the order:",
       "o": {
        "A": "Vice President, Senate President, Speaker of the House",
        "B": "Vice President, Speaker of the House, Senate President",
        "C": "Senate President, Speaker of the House, Vice President",
        "D": "Speaker of the House, Vice President, Senate President"
       },
       "a": "A",
       "concept": "Nigeria's constitutional order of succession runs: Vice President first, then the Senate President, then the Speaker.",
       "method": "Memorise the fixed constitutional order: VP → Senate President → Speaker.",
       "difficulty": "core"
      },
      {
       "q": "For a person to be eligible to vote in Nigeria, they must be at least",
       "o": {
        "A": "18 years",
        "B": "19 years or above",
        "C": "a minimum of 18 years",
        "D": "between 18 and 45 years"
       },
       "a": "C",
       "concept": "The Nigerian voting age is a MINIMUM of 18, with no upper age limit.",
       "method": "Watch for options implying an upper age cap — there isn't one.",
       "difficulty": "core"
      },
      {
       "q": "All electioneering campaigns are required to stop",
       "o": {
        "A": "48 hrs before the results",
        "B": "48 hrs before the actual poll",
        "C": "24 hrs before the actual poll",
        "D": "36 hrs before the actual poll"
       },
       "a": "C",
       "concept": "Nigerian electoral law mandates a campaign silence period of 24 hours before voting begins.",
       "method": "Memorise the fixed rule: campaigns stop 24 hours before polls open.",
       "difficulty": "core"
      },
      {
       "q": "INEC stands for",
       "o": {
        "A": "Independent National Electoral Commission",
        "B": "Independent Nigerian Elections Commission",
        "C": "Independent National Electric Commission",
        "D": "Internal National Electoral Commission"
       },
       "a": "A",
       "concept": "INEC is Nigeria's body responsible for organising elections.",
       "method": "Full name matches the acronym exactly: Independent National Electoral Commission.",
       "difficulty": "core"
      },
      {
       "q": "The highest court in Nigeria is the",
       "o": {
        "A": "Federal High Court",
        "B": "Supreme Court",
        "C": "Federal Court of Appeal",
        "D": "Sharia Court"
       },
       "a": "B",
       "concept": "Nigeria's judicial hierarchy tops out at the Supreme Court, the final court of appeal.",
       "method": "Memorise the ladder: Magistrate/High Court → Court of Appeal → Supreme Court (final).",
       "difficulty": "core"
      },
      {
       "q": "Under which regime were Delta and Adamawa States created?",
       "o": {
        "A": "Gen. Sani Abacha",
        "B": "Gen. Yakubu Gowon",
        "C": "Gen. Murtala Mohammed",
        "D": "Gen. Ibrahim Babangida"
       },
       "a": "D",
       "concept": "Babangida's administration created 2 additional states in 1991, including Delta and Adamawa.",
       "method": "Associate the 1991 state-creation exercise with Babangida.",
       "difficulty": "core"
      },
      {
       "q": "Kwara State is located in which geopolitical zone of Nigeria?",
       "o": {
        "A": "North East",
        "B": "North West",
        "C": "North Central",
        "D": "South South"
       },
       "a": "C",
       "concept": "Kwara is one of the states making up Nigeria's North Central zone.",
       "method": "Kwara, Kogi, Benue, Plateau, Nasarawa, Niger and FCT make up North Central.",
       "difficulty": "core"
      },
      {
       "q": "Which of these traditional-title-and-state pairings is correct: Ooni and Osun-related Ife, Sultan and Sokoto, Obi and Anambra, El-Kanemi and ___?",
       "o": {
        "A": "Kaduna",
        "B": "Borno",
        "C": "Katsina",
        "D": "Yobe"
       },
       "a": "B",
       "concept": "The Shehu/El-Kanemi dynasty is the traditional ruling title associated with Borno State.",
       "method": "Match each traditional title to its home state: El-Kanemi → Borno.",
       "difficulty": "core"
      },
      {
       "q": "Nnamdi Azikiwe International Airport is located in",
       "o": {
        "A": "Enugu",
        "B": "Port Harcourt",
        "C": "Abuja",
        "D": "Calabar"
       },
       "a": "C",
       "concept": "Nigeria's main international airport in the capital is named after its first president.",
       "method": "Associate Nnamdi Azikiwe's name permanently with the Abuja airport.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria's operative time zone is",
       "o": {
        "A": "GMT",
        "B": "GMT+1",
        "C": "GMT−1",
        "D": "GMT+2"
       },
       "a": "B",
       "concept": "Nigeria uses West Africa Time (WAT), one hour ahead of GMT.",
       "method": "Fixed fact: Nigeria = GMT+1.",
       "difficulty": "core"
      },
      {
       "q": "The Nigerian currency in use before the change to the Naira was the",
       "o": {
        "A": "Pound",
        "B": "Dollar",
        "C": "Riyal",
        "D": "CFA Franc"
       },
       "a": "A",
       "concept": "Nigeria used the Nigerian Pound before switching to the Naira in 1973.",
       "method": "Associate the pre-1973 currency with the British colonial legacy: the Pound.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is a confluence State of Nigeria, home to the meeting point of the Niger and Benue rivers?",
       "o": {
        "A": "Kogi",
        "B": "Niger",
        "C": "Lagos",
        "D": "Cross River"
       },
       "a": "A",
       "concept": "Kogi State hosts Lokoja, the exact confluence point of the Niger and Benue rivers.",
       "method": "Confluence = the meeting of two rivers — Kogi is Nigeria's confluence state.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is known as the State of the Caliphate?",
       "o": {
        "A": "Kebbi",
        "B": "Kano",
        "C": "Kaduna",
        "D": "Sokoto"
       },
       "a": "D",
       "concept": "Sokoto is historically the seat of the Sokoto Caliphate, founded by Usman dan Fodio.",
       "method": "Associate Sokoto permanently with the historic Caliphate.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is referred to as the State of the Living Spring?",
       "o": {
        "A": "Niger",
        "B": "Bayelsa",
        "C": "Osun",
        "D": "Cross River"
       },
       "a": "C",
       "concept": "Osun State's official slogan references the living spring associated with the Osun River.",
       "method": "Match the state slogan directly: Osun → Living Spring.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is known as the Food Basket of the Nation?",
       "o": {
        "A": "Lagos",
        "B": "Benue",
        "C": "Osun",
        "D": "Niger"
       },
       "a": "B",
       "concept": "Benue State's official slogan is 'Food Basket of the Nation', reflecting its agricultural output.",
       "method": "Match the state slogan directly: Benue → Food Basket.",
       "difficulty": "core"
      },
      {
       "q": "\"Centre of Excellence\" is to Lagos State as \"___\" is to Ondo State.",
       "o": {
        "A": "Land of the Living Spring",
        "B": "Centre of Knowledge",
        "C": "Food Basket",
        "D": "Sunshine State"
       },
       "a": "D",
       "concept": "Each Nigerian state has an official slogan; Ondo's is 'Sunshine State'.",
       "method": "Match slogans to states: Lagos=Centre of Excellence, Ondo=Sunshine State.",
       "difficulty": "core"
      },
      {
       "q": "The State with the largest land mass in Nigeria is",
       "o": {
        "A": "Kano",
        "B": "Niger",
        "C": "Oyo",
        "D": "Lagos"
       },
       "a": "B",
       "concept": "Niger State is Nigeria's largest state by land area, despite not being the most populous.",
       "method": "Don't confuse land area with population — Niger State wins on size.",
       "difficulty": "core"
      },
      {
       "q": "Which leader's administration created Katsina and Akwa Ibom States, bringing Nigeria's total to 21 states?",
       "o": {
        "A": "Gen. Murtala Mohammed",
        "B": "Gen. Sani Abacha",
        "C": "Gen. Ibrahim Babangida",
        "D": "Gen. Yakubu Gowon"
       },
       "a": "C",
       "concept": "Babangida's 1987 state creation exercise added Katsina and Akwa Ibom, reaching 21 states.",
       "method": "Associate the 1987 creation (bringing the total to 21) with Babangida.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following correctly orders Nigeria's leaders chronologically from independence?",
       "o": {
        "A": "Aguiyi-Ironsi, Murtala Mohammed, Azikiwe, Gowon",
        "B": "Gowon, Murtala Mohammed, Aguiyi-Ironsi, Azikiwe",
        "C": "Azikiwe, Aguiyi-Ironsi, Gowon, Murtala Mohammed",
        "D": "Murtala Mohammed, Azikiwe, Gowon, Aguiyi-Ironsi"
       },
       "a": "C",
       "concept": "After independence, Nigeria's leadership ran: Azikiwe (ceremonial president) → Ironsi → Gowon → Murtala Mohammed.",
       "method": "Memorise this early post-independence sequence in order.",
       "difficulty": "core"
      },
      {
       "q": "Which two of these states belong to the SAME geopolitical zone as each other, alongside the other two listed: Kwara, Plateau, Nasarawa, Niger?",
       "o": {
        "A": "All four are North Central",
        "B": "All four are North West",
        "C": "All four are North East",
        "D": "They are all in different zones"
       },
       "a": "A",
       "concept": "Kwara, Plateau, Nasarawa, and Niger are all part of Nigeria's North Central zone.",
       "method": "Cross-check each state against the 6-zone map — all four fall under North Central.",
       "difficulty": "core"
      },
      {
       "q": "The three arms of government in Nigeria's federal structure are the Executive, the Legislature, and the",
       "o": {
        "A": "Judiciary",
        "B": "Civil Service",
        "C": "Military",
        "D": "Police"
       },
       "a": "A",
       "concept": "Nigeria's government, like most democracies, is split into three arms for a system of checks and balances.",
       "method": "Memorise the trio: Executive (implements laws), Legislature (makes laws), Judiciary (interprets laws).",
       "difficulty": "core"
      },
      {
       "q": "Nigeria's national anthem was changed from 'Nigeria We Hail Thee' to 'Arise, O Compatriots' in",
       "o": {
        "A": "1960",
        "B": "1978",
        "C": "1999",
        "D": "2010"
       },
       "a": "B",
       "concept": "Nigeria adopted its current anthem, 'Arise, O Compatriots', in 1978, replacing the earlier colonial-era anthem.",
       "method": "Fixed historical fact: anthem changed in 1978.",
       "difficulty": "core"
      },
      {
       "q": "Odumegwu Ojukwu hailed from which State of Nigeria?",
       "o": {
        "A": "Anambra",
        "B": "Imo",
        "C": "Abia",
        "D": "Ebonyi"
       },
       "a": "A",
       "concept": "Placing well-known Nigerian historical figures with their home states is a recurring GK pairing.",
       "method": "Ojukwu, the Biafran wartime leader, was from Anambra State.",
       "difficulty": "core"
      },
      {
       "q": "General Murtala Ramat Mohammed was assassinated in which year?",
       "o": {
        "A": "1978",
        "B": "1975",
        "C": "1976",
        "D": "1974"
       },
       "a": "C",
       "concept": "Murtala Mohammed's short but influential rule ended in an assassination during a failed coup.",
       "method": "He came to power in 1975 and was killed in the Dimka coup attempt in February 1976.",
       "difficulty": "core"
      },
      {
       "q": "General Murtala Mohammed's administration increased the number of states in Nigeria from 12 to how many?",
       "o": {
        "A": "21",
        "B": "19",
        "C": "36",
        "D": "24"
       },
       "a": "B",
       "concept": "Nigeria's state count has grown in stages, each tied to a particular military head of state.",
       "method": "Gowon created the original 12 states in 1967; Murtala Mohammed's 1976 reforms raised that number to 19.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is known as a 'confluence state' in Nigeria?",
       "o": {
        "A": "Kogi",
        "B": "Niger",
        "C": "Lagos",
        "D": "Cross River"
       },
       "a": "A",
       "concept": "A confluence is the point where two rivers meet — Nigeria's most famous one gives a state its nickname.",
       "method": "The Niger and Benue rivers meet at Lokoja, in Kogi State — hence Kogi's identity as the confluence state.",
       "difficulty": "core"
      },
      {
       "q": "Which of these Nigerian states is called the 'Seat of the Caliphate'?",
       "o": {
        "A": "Kebbi",
        "B": "Kano",
        "C": "Kaduna",
        "D": "Sokoto"
       },
       "a": "D",
       "concept": "State nicknames in Nigeria are usually tied to a specific historical or cultural identity.",
       "method": "Sokoto was the seat of the historic Sokoto Caliphate founded by Usman dan Fodio, hence its nickname.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria currently has how many geopolitical zones?",
       "o": {
        "A": "6",
        "B": "4",
        "C": "8",
        "D": "36"
       },
       "a": "A",
       "concept": "Nigeria's 36 states are informally grouped into a fixed number of geopolitical zones for political and administrative purposes.",
       "method": "The six zones are North-Central, North-East, North-West, South-East, South-South, and South-West.",
       "difficulty": "core"
      },
      {
       "q": "Osun State takes its name from the River Osun, and was traditionally nicknamed the ______.",
       "o": {
        "A": "State of the Living Spring",
        "B": "Food Basket of the Nation",
        "C": "Gateway State",
        "D": "Centre of Excellence"
       },
       "a": "A",
       "concept": "Osun State's original nickname (since its creation in 1991) ties directly to the River Osun, the natural spring at the heart of the state's identity and its famous Osun-Osogbo festival. A later state administration rebranded it 'Land of Virtue', so a current-affairs source may give either — but 'State of the Living Spring' is the one anchored to the state's name and history.",
       "method": "'Living Spring' points straight to the River Osun after which the state is named.",
       "difficulty": "core"
      },
      {
       "q": "Which Nigerian state is popularly called the 'Food Basket of the Nation'?",
       "o": {
        "A": "Lagos",
        "B": "Benue",
        "C": "Osun",
        "D": "Niger"
       },
       "a": "B",
       "concept": "Some Nigerian state nicknames reflect their major economic role — in this case, large-scale agricultural output.",
       "method": "Benue's fertile land and heavy crop production earned it the 'Food Basket of the Nation' title.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is the most populous state in Nigeria (by census figures)?",
       "o": {
        "A": "Oyo",
        "B": "Niger",
        "C": "Kano",
        "D": "Sokoto"
       },
       "a": "C",
       "concept": "Population size rankings among Nigerian states are a recurring GK fact.",
       "method": "Kano consistently ranks as Nigeria's most populous state in national census data.",
       "difficulty": "core"
      },
      {
       "q": "Which of these Nigerian states has the largest land mass?",
       "o": {
        "A": "Kano",
        "B": "Niger",
        "C": "Oyo",
        "D": "Lagos"
       },
       "a": "B",
       "concept": "Land area and population size are two different rankings — a state can be large in one and small in the other (Lagos is the opposite case: smallest in land area, densely populated).",
       "method": "Niger State is Nigeria's largest state by land area, despite not being the most populous.",
       "difficulty": "core"
      },
      {
       "q": "Abuja officially became Nigeria's Federal Capital Territory in what year?",
       "o": {
        "A": "1976",
        "B": "1987",
        "C": "1991",
        "D": "1999"
       },
       "a": "C",
       "concept": "Abuja's creation as a planned capital city happened in stages — a decree establishing the FCT came first, then the actual seat of government moved later.",
       "method": "The FCT was created by decree in 1976, but Abuja officially became the seat of government, replacing Lagos, in 1991.",
       "difficulty": "core"
      },
      {
       "q": "Which military head of state created Akwa Ibom and Katsina States, bringing Nigeria's total to 21 states?",
       "o": {
        "A": "General Murtala Mohammed",
        "B": "General Sani Abacha",
        "C": "General Ibrahim Babangida",
        "D": "General Yakubu Gowon"
       },
       "a": "C",
       "concept": "Each expansion of Nigeria's state structure is tied to a specific military ruler's reforms.",
       "method": "Babangida's 1987 state creation exercise added Akwa Ibom and Katsina, raising the total from 19 to 21.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following correctly orders Nigeria's leaders from independence, earliest to latest?",
       "o": {
        "A": "Nnamdi Azikiwe; Aguiyi-Ironsi; Yakubu Gowon; Murtala Mohammed",
        "B": "Yakubu Gowon; Murtala Mohammed; Aguiyi-Ironsi; Nnamdi Azikiwe",
        "C": "Aguiyi-Ironsi; Nnamdi Azikiwe; Gowon; Murtala Mohammed",
        "D": "Murtala Mohammed; Nnamdi Azikiwe; Gowon; Aguiyi-Ironsi"
       },
       "a": "A",
       "concept": "Getting the order of Nigeria's early post-independence leaders right is a common GK test of historical sequencing.",
       "method": "Azikiwe (ceremonial President, 1963–66) came first, then the military era began with Aguiyi-Ironsi (1966), followed by Gowon (1966–75), then Murtala Mohammed (1975–76).",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT a widely recognised symbol of Nigerian national identity?",
       "o": {
        "A": "The National Youth Service Corps (NYSC)",
        "B": "The National Pledge",
        "C": "The National Electric Power Authority (NEPA)",
        "D": "The National Theatre"
       },
       "a": "C",
       "concept": "A national symbol represents shared identity or values, distinct from a public utility company that simply provides a service.",
       "method": "NYSC, the National Pledge and the National Theatre are all cultural/civic symbols of nationhood; NEPA is simply the (former) power utility.",
       "difficulty": "core"
      },
      {
       "q": "How many geopolitical zones does Nigeria have?",
       "o": {
        "A": "4",
        "B": "6",
        "C": "3",
        "D": "8"
       },
       "a": "B",
       "concept": "Nigeria's 36 states are informally grouped into six zones for political and administrative purposes.",
       "method": "The six zones are North-Central, North-East, North-West, South-East, South-South, and South-West.",
       "difficulty": "core"
      },
      {
       "q": "Who designed the National Flag of Nigeria?",
       "o": {
        "A": "Michael Taiwo Akinwole",
        "B": "Michael Taiwo Akinkunmi",
        "C": "Michael Taiwo Akinwunmi",
        "D": "Michael Tade Akinade"
       },
       "a": "B",
       "concept": "A single design, chosen through a national competition, is still in use today largely unchanged.",
       "method": "Michael Taiwo Akinkunmi's design won a 1959 national competition and was adopted ahead of independence.",
       "difficulty": "core"
      },
      {
       "q": "Which of these figures is credited with stopping the killing of twins in a part of Nigeria?",
       "o": {
        "A": "Ransome-Kuti",
        "B": "Mary Slessor",
        "C": "Ajayi Crowther",
        "D": "Akinwale Savage"
       },
       "a": "B",
       "concept": "Mary Slessor, a Scottish missionary, is a recurring historical GK figure tied to this specific reform in Calabar.",
       "method": "Mary Slessor campaigned against the killing of twins (then seen as cursed) among the Efik people in Calabar.",
       "difficulty": "core"
      },
      {
       "q": "What was the first privately-owned television station in Nigeria?",
       "o": {
        "A": "BCOS",
        "B": "Galaxy Television",
        "C": "NTA",
        "D": "WNTV"
       },
       "a": "B",
       "concept": "Note the distinction from the FIRST television station overall (WNTV, 1959, government-owned) — this question asks specifically about the first PRIVATE station.",
       "method": "Galaxy Television, launched in Lagos, is recognised as Nigeria's first privately-owned TV station.",
       "difficulty": "core"
      },
      {
       "q": "Where was petroleum first discovered in Nigeria?",
       "o": {
        "A": "Delta State",
        "B": "Bayelsa State (Oloibiri)",
        "C": "Rivers State",
        "D": "Cross River State"
       },
       "a": "B",
       "concept": "Oloibiri, in present-day Bayelsa State, is the specific, frequently-tested location of Nigeria's first oil discovery.",
       "method": "Shell-BP struck oil at Oloibiri in 1956, making it Nigeria's first commercial oil well.",
       "difficulty": "core"
      },
      {
       "q": "How many local government areas does Nigeria officially have?",
       "o": {
        "A": "747",
        "B": "774",
        "C": "477",
        "D": "773"
       },
       "a": "B",
       "concept": "This figure is one of the most frequently tested numeric GK facts about Nigeria's administrative structure.",
       "method": "Nigeria is officially divided into 774 Local Government Areas.",
       "difficulty": "core"
      },
      {
       "q": "What is Kwara State's official slogan?",
       "o": {
        "A": "Centre of Excellence",
        "B": "Pacesetter State",
        "C": "The Power State",
        "D": "State of Harmony"
       },
       "a": "D",
       "concept": "Every Nigerian state has an official slogan, frequently tested alongside its capital.",
       "method": "Kwara is popularly known as the State of Harmony.",
       "difficulty": "core"
      },
      {
       "q": "Which is considered the premier (first) university in Nigeria?",
       "o": {
        "A": "University of Ibadan",
        "B": "University of Ilorin",
        "C": "University of Benin",
        "D": "Ahmadu Bello University"
       },
       "a": "A",
       "concept": "'Premier' here specifically means the oldest, not simply the most prestigious.",
       "method": "The University of Ibadan, founded in 1948 (initially as a University College), is Nigeria's oldest university.",
       "difficulty": "core"
      },
      {
       "q": "Before entering Nigeria, the River Niger passes through which country?",
       "o": {
        "A": "Chad",
        "B": "Mali",
        "C": "Cameroon",
        "D": "Togo"
       },
       "a": "B",
       "concept": "The River Niger's course runs through several West African countries before reaching Nigeria and the Atlantic.",
       "method": "The Niger rises in Guinea, flows through Mali, then Niger Republic, before entering Nigeria.",
       "difficulty": "core"
      },
      {
       "q": "In which Nigerian city is Tin Can Island located?",
       "o": {
        "A": "Lagos",
        "B": "Ibadan",
        "C": "Calabar",
        "D": "Abuja"
       },
       "a": "A",
       "concept": "Tin Can Island is a well-known port facility, a recurring GK/geography fact.",
       "method": "Tin Can Island Port is located in Lagos, one of Nigeria's two major seaport complexes alongside Apapa.",
       "difficulty": "core"
      },
      {
       "q": "How many colours does the Nigerian flag have?",
       "o": {
        "A": "4",
        "B": "3",
        "C": "2",
        "D": "5"
       },
       "a": "C",
       "concept": "Don't confuse the number of colours with the number of stripes/bands.",
       "method": "The flag uses only 2 colours (green and white), arranged as three vertical bands: green, white, green.",
       "difficulty": "core"
      },
      {
       "q": "Which body is responsible for conducting population censuses in Nigeria?",
       "o": {
        "A": "NBS",
        "B": "NPC",
        "C": "INEC",
        "D": "NNC"
       },
       "a": "C",
       "concept": "This tests a commonly-confused acronym pair — NPC (National Population Commission) is often mixed up with NBS (National Bureau of Statistics), which handles general statistics, not census-taking itself.",
       "method": "The National Population Commission (NPC) is constitutionally charged with conducting Nigeria's census.",
       "difficulty": "core"
      },
      {
       "q": "Who was the first Head of State of Nigeria?",
       "o": {
        "A": "Gen. Aguiyi-Ironsi",
        "B": "Dr Nnamdi Azikiwe",
        "C": "Gen. Sani Abacha",
        "D": "Alhaji Shehu Shagari"
       },
       "a": "A",
       "concept": "This question is about the first HEAD OF STATE title specifically (post-1966 coup), distinct from Azikiwe's earlier ceremonial President role.",
       "method": "General Aguiyi-Ironsi became Nigeria's first military Head of State after the January 1966 coup.",
       "difficulty": "core"
      },
      {
       "q": "When did Nigeria become a republic?",
       "o": {
        "A": "1963",
        "B": "1960",
        "C": "1979",
        "D": "1914"
       },
       "a": "A",
       "concept": "Independence (1960) and becoming a republic (1963) are two distinct historical milestones often confused with each other.",
       "method": "Nigeria gained independence in 1960 but remained a dominion under the British monarch until becoming a republic in 1963.",
       "difficulty": "core"
      },
      {
       "q": "The Nigerian Senate consists of how many members?",
       "o": {
        "A": "360",
        "B": "109",
        "C": "469",
        "D": "108"
       },
       "a": "B",
       "concept": "The Senate (109) and House of Representatives (360) have different fixed sizes — together they total 469 in the National Assembly.",
       "method": "The Senate has 109 members: 3 from each of the 36 states, plus 1 from the FCT.",
       "difficulty": "core"
      },
      {
       "q": "Who was Nigeria's first female pilot?",
       "o": {
        "A": "Chinyere Kalu",
        "B": "Virginia Etiaba",
        "C": "Hajiya Bilkisu",
        "D": "Aloma Mariam"
       },
       "a": "A",
       "concept": "Aviation firsts are a recurring GK category alongside political and sporting firsts.",
       "method": "Chinyere Kalu is recognised as Nigeria's first female pilot.",
       "difficulty": "core"
      },
      {
       "q": "Who is credited with naming the country 'Nigeria'?",
       "o": {
        "A": "Lord Frederick Lugard",
        "B": "Flora Shaw",
        "C": "Yakubu Gowon",
        "D": "Queen Elizabeth"
       },
       "a": "B",
       "concept": "Flora Shaw (who later married Lord Lugard) coined the name in a newspaper article, before the country was formally amalgamated.",
       "method": "Flora Shaw suggested 'Nigeria' — from the River Niger — in an 1897 article, years before the 1914 amalgamation.",
       "difficulty": "core"
      },
      {
       "q": "Which Nigerian state is most associated with being a 'confluence state'?",
       "o": {
        "A": "Kwara",
        "B": "Kogi",
        "C": "Plateau",
        "D": "Sokoto"
       },
       "a": "B",
       "concept": "A confluence is where two rivers meet — Nigeria's most significant one gives a state its defining nickname.",
       "method": "The River Niger and River Benue meet at Lokoja, in Kogi State, which is why Kogi is called the confluence state.",
       "difficulty": "core"
      },
      {
       "q": "Food basket of the nation is the slogan of which Nigerian state?",
       "o": {
        "A": "Bayelsa",
        "B": "Benue",
        "C": "Delta",
        "D": "Abia"
       },
       "a": "B",
       "concept": "This slogan reflects the state's major agricultural output.",
       "method": "Benue State is popularly known as the Food Basket of the Nation.",
       "difficulty": "core"
      },
      {
       "q": "In the Senate chamber, without which item can no official authority be exercised?",
       "o": {
        "A": "The legislature",
        "B": "The mace",
        "C": "The executive",
        "D": "A written law"
       },
       "a": "B",
       "concept": "The mace is the physical symbol of a legislature's authority — its presence (or absence) has real procedural significance.",
       "method": "Without the mace present, proceedings in the chamber are not considered validly constituted — hence the phrase 'no mace, no authority'.",
       "difficulty": "core"
      },
      {
       "q": "How many states make up Northern Nigeria?",
       "o": {
        "A": "17",
        "B": "16",
        "C": "18",
        "D": "19"
       },
       "a": "D",
       "concept": "Northern Nigeria (the North-West, North-East, and North-Central zones combined) comprises a fixed set of states.",
       "method": "19 states make up Northern Nigeria across its three geopolitical zones.",
       "difficulty": "core"
      },
      {
       "q": "Aso Rock is to Nigeria's seat of government as ______ is to the USA's.",
       "o": {
        "A": "The White House",
        "B": "Washington",
        "C": "Mexico",
        "D": "New York"
       },
       "a": "A",
       "concept": "This tests the analogy between symbolic/physical seats of executive power in two countries.",
       "method": "Aso Rock (Villa) houses Nigeria's presidency, just as the White House houses the US presidency.",
       "difficulty": "core"
      },
      {
       "q": "In which year was a Nigerian presidential election controversially annulled?",
       "o": {
        "A": "2011",
        "B": "2004",
        "C": "1996",
        "D": "1993"
       },
       "a": "D",
       "concept": "The annulment of the June 12, 1993 election remains one of the most significant events in Nigeria's democratic history.",
       "method": "The June 12, 1993 election, widely believed to have been won by MKO Abiola, was annulled by the military government.",
       "difficulty": "core"
      },
      {
       "q": "Who was Nigeria's last military Head of State before the return to democracy in 1999?",
       "o": {
        "A": "Yakubu Gowon",
        "B": "Muhammadu Buhari",
        "C": "Sani Abacha",
        "D": "Abdulsalami Abubakar"
       },
       "a": "D",
       "concept": "Distinguish this from Sani Abacha, who died in office in 1998 — Abubakar succeeded him and oversaw the transition to civilian rule.",
       "method": "General Abdulsalami Abubakar led Nigeria from 1998 and handed over to elected civilian government in May 1999.",
       "difficulty": "core"
      },
      {
       "q": "The National Youth Service Corps (NYSC) was established under which Head of State?",
       "o": {
        "A": "Gen. Yakubu Gowon",
        "B": "Gen. Olusegun Obasanjo",
        "C": "Gen. Sani Abacha",
        "D": "Gen. Murtala Muhammed"
       },
       "a": "A",
       "concept": "NYSC was created partly as a post-civil-war reconciliation and national-unity measure.",
       "method": "Gowon established the NYSC in 1973, in the aftermath of the Nigerian Civil War.",
       "difficulty": "core"
      },
      {
       "q": "The University of Ilorin was established by decree of the federal military government in which year?",
       "o": {
        "A": "1975",
        "B": "1970",
        "C": "1980",
        "D": "1962"
       },
       "a": "A",
       "concept": "Unilorin's founding year is a natural fact to know when preparing for its own Post-UTME exam.",
       "method": "Unilorin was established in August 1975, one of the second generation of Nigerian federal universities.",
       "difficulty": "core"
      },
      {
       "q": "What does Unilorin's motto, 'Probitas Doctrina', mean?",
       "o": {
        "A": "Unity and knowledge",
        "B": "Character and learning",
        "C": "Discipline and excellence",
        "D": "Faith and progress"
       },
       "a": "B",
       "concept": "Many Nigerian universities have a Latin motto worth knowing, especially the one you're applying to.",
       "method": "'Probitas Doctrina' translates to 'Character and Learning' — Unilorin's guiding motto.",
       "difficulty": "core"
      },
      {
       "q": "The first political party in Nigeria to fight for national self-government was ______.",
       "o": {
        "A": "NYM (Nigerian Youth Movement)",
        "B": "NCNC",
        "C": "PDP",
        "D": "NNDP"
       },
       "a": "A",
       "concept": "Distinguish the Nigerian Youth Movement (NYM), an early nationalist movement, from later post-independence political parties.",
       "method": "The Nigerian Youth Movement (NYM) was the first party to actively campaign for Nigerian self-government.",
       "difficulty": "core"
      },
      {
       "q": "ECOWAS was masterminded chiefly by which two countries?",
       "o": {
        "A": "Nigeria and Ghana",
        "B": "Ghana and Tunisia",
        "C": "Nigeria and Senegal",
        "D": "Nigeria and Cote d'Ivoire"
       },
       "a": "A",
       "concept": "Nigeria and Ghana were the two key driving forces behind ECOWAS's formation.",
       "method": "Nigeria (under Gowon) and Ghana were the principal architects behind founding ECOWAS.",
       "difficulty": "core"
      },
      {
       "q": "In which year was ECOWAS established, and where is its headquarters?",
       "o": {
        "A": "1975, Ghana",
        "B": "1965, Lagos",
        "C": "1975, Lagos",
        "D": "1967, Lagos"
       },
       "a": "C",
       "concept": "ECOWAS's founding year and headquarters location are commonly tested together.",
       "method": "ECOWAS was established in 1975 with its administrative headquarters in Lagos, Nigeria.",
       "difficulty": "core"
      },
      {
       "q": "The National Youth Service Corps (NYSC) was established in which year?",
       "o": {
        "A": "1983",
        "B": "1973",
        "C": "1997",
        "D": "1987"
       },
       "a": "B",
       "concept": "NYSC's founding is closely tied to post-civil-war national reconciliation efforts.",
       "method": "NYSC was established in 1973 under General Yakubu Gowon.",
       "difficulty": "core"
      },
      {
       "q": "Who was Nigeria's first Inspector-General of Police?",
       "o": {
        "A": "Louis Edet",
        "B": "Teslim Balogun",
        "C": "Elias Balogun",
        "D": "Kayode Uzoka"
       },
       "a": "A",
       "concept": "Louis Edet was the first indigenous Nigerian to hold this specific senior policing office.",
       "method": "Louis Edet became Nigeria's first Nigerian Inspector-General of Police in 1964.",
       "difficulty": "core"
      },
      {
       "q": "A human community that is usually cohesive and homogeneous, sharing common ancestry, history, and values, is called a ______.",
       "o": {
        "A": "Nation",
        "B": "Kinship group",
        "C": "Clan",
        "D": "Tribe"
       },
       "a": "A",
       "concept": "A 'nation' in political science refers to a people bound by shared culture/identity, distinct from a 'state' (a legal/political entity).",
       "method": "A nation is a cohesive human community sharing common history, ancestry, and values.",
       "difficulty": "core"
      },
      {
       "q": "Who was the leader of the Northern People's Congress (NPC)?",
       "o": {
        "A": "Yakubu Maitama Sule",
        "B": "Abubakar Tafawa Balewa",
        "C": "Aminu Kano",
        "D": "Ahmadu Bello"
       },
       "a": "D",
       "concept": "Note the distinction: Tafawa Balewa (NPC member, became Prime Minister) was not the party's actual leader — that was the Sardauna, Ahmadu Bello.",
       "method": "Ahmadu Bello, the Sardauna of Sokoto, was the leader of the Northern People's Congress.",
       "difficulty": "core"
      },
      {
       "q": "What does the eagle in Nigeria's coat of arms represent?",
       "o": {
        "A": "Peace",
        "B": "Terror",
        "C": "Agriculture",
        "D": "Strength"
       },
       "a": "D",
       "concept": "Each figure in the coat of arms has a specific symbolic meaning, distinct from the shield or horses.",
       "method": "The eagle on Nigeria's coat of arms represents strength.",
       "difficulty": "core"
      },
      {
       "q": "Who was Nigeria's first female Vice-Chancellor of a university?",
       "o": {
        "A": "Grace Alele-Williams",
        "B": "Dora Akunyili",
        "C": "Bolanle Awe",
        "D": "Ngozi Okonjo-Iweala"
       },
       "a": "A",
       "concept": "Grace Alele-Williams became a landmark figure in Nigerian academia as the first woman to head a Nigerian university.",
       "method": "Grace Alele-Williams became Nigeria's first female Vice-Chancellor, leading the University of Benin.",
       "difficulty": "core"
      },
      {
       "q": "In what year was the geographic area now called Nigeria formally amalgamated?",
       "o": {
        "A": "1900",
        "B": "1914",
        "C": "1922",
        "D": "1960"
       },
       "a": "B",
       "concept": "The 1914 amalgamation joined the Northern and Southern Protectorates into a single entity, under Lord Lugard.",
       "method": "Nigeria was formally amalgamated (Northern and Southern Protectorates united) in 1914.",
       "difficulty": "core"
      },
      {
       "q": "What does the white colour in Nigeria's flag represent?",
       "o": {
        "A": "Peace and unity",
        "B": "Purity only",
        "C": "Agriculture",
        "D": "Mourning"
       },
       "a": "A",
       "concept": "Each colour in Nigeria's flag carries a specific symbolic meaning worth knowing precisely.",
       "method": "White represents peace and unity, while the two green stripes represent Nigeria's natural wealth/agriculture.",
       "difficulty": "core"
      },
      {
       "q": "The second military coup in Nigeria took place on ______.",
       "o": {
        "A": "January 15, 1966",
        "B": "October 1, 1966",
        "C": "July 29, 1966",
        "D": "February 13, 1976"
       },
       "a": "C",
       "concept": "Distinguish the first coup (January 1966) from the second, counter-coup (July 1966), which brought Yakubu Gowon to power.",
       "method": "The second (counter-)coup took place on 29 July 1966.",
       "difficulty": "core"
      },
      {
       "q": "The first general election in Nigeria was held in ______.",
       "o": {
        "A": "1933",
        "B": "1952",
        "C": "1955",
        "D": "1959"
       },
       "a": "D",
       "concept": "Nigeria's first general (federal-level) election took place just before independence.",
       "method": "Nigeria's first general election was held in 1959, ahead of independence in 1960.",
       "difficulty": "core"
      },
      {
       "q": "What was Nigeria's first political party?",
       "o": {
        "A": "APC",
        "B": "PDP",
        "C": "NNDP",
        "D": "AD"
       },
       "a": "C",
       "concept": "The NNDP (Nigerian National Democratic Party), founded by Herbert Macaulay in 1923, predates all the post-independence-era parties listed here.",
       "method": "The Nigerian National Democratic Party (NNDP), founded in 1923, was Nigeria's first political party.",
       "difficulty": "core"
      },
      {
       "q": "Into how many local government areas is Nigeria officially delineated?",
       "o": {
        "A": "654",
        "B": "650",
        "C": "820",
        "D": "774"
       },
       "a": "D",
       "concept": "This reinforces the same figure tested elsewhere in this exam's GK section.",
       "method": "Nigeria is officially divided into 774 Local Government Areas.",
       "difficulty": "core"
      },
      {
       "q": "The centenary anniversary of the amalgamation of Northern and Southern Nigeria was celebrated in ______.",
       "o": {
        "A": "2000",
        "B": "2013",
        "C": "2014",
        "D": "2007"
       },
       "a": "C",
       "concept": "Since amalgamation happened in 1914, its 100th (centenary) anniversary naturally fell in 2014.",
       "method": "The centenary of Nigeria's amalgamation (1914 + 100 years) was celebrated in 2014.",
       "difficulty": "core"
      },
      {
       "q": "Which of these men introduced the policy of indirect rule in Nigeria?",
       "o": {
        "A": "Mungo Park",
        "B": "Dr Nnamdi Azikiwe",
        "C": "Lord Lugard",
        "D": "Sir James Robertson"
       },
       "a": "C",
       "concept": "Indirect rule is one of Lord Lugard's most defining colonial policy legacies in Nigeria.",
       "method": "Lord Lugard introduced and championed indirect rule as Nigeria's colonial governor.",
       "difficulty": "core"
      }
     ],
     "freq": 100
    },
    {
     "id": "world",
     "name": "World Affairs & History",
     "blurb": "High-value, stable facts about world history, science pioneers, and international organisations that rarely change.",
     "concept_notes": [
      "Focus revision on STABLE facts (historical dates, headquarters, founders) rather than 'who currently holds office', which changes constantly.",
      "Learn organisations by matching their full name to their abbreviation — the acronym almost always describes exactly what the body does."
     ],
     "questions": [
      {
       "q": "The regional organisation formed to promote economic cooperation among West African countries is",
       "o": {
        "A": "ECOWAS",
        "B": "OAU",
        "C": "AU",
        "D": "UNESCO"
       },
       "a": "A",
       "concept": "ECOWAS was established in 1975 to promote regional economic integration.",
       "method": "Match 'West African' + 'economic cooperation' directly to the name.",
       "difficulty": "core"
      },
      {
       "q": "The Second World War ended in the year",
       "o": {
        "A": "1939",
        "B": "1943",
        "C": "1945",
        "D": "1948"
       },
       "a": "C",
       "concept": "WWII ran 1939–1945, ending with Germany's then Japan's surrender.",
       "method": "1939 is when it STARTED (a common distractor) — it lasted six years, ending 1945.",
       "difficulty": "core"
      },
      {
       "q": "The currency of the United Kingdom is the",
       "o": {
        "A": "US Dollar",
        "B": "Euro",
        "C": "Pound Sterling",
        "D": "Franc"
       },
       "a": "C",
       "concept": "The UK uses the Pound Sterling and is not part of the Eurozone.",
       "method": "Remember the UK kept its own currency rather than adopting the Euro.",
       "difficulty": "core"
      },
      {
       "q": "The headquarters of the United Nations is located in",
       "o": {
        "A": "Geneva",
        "B": "New York",
        "C": "Rome",
        "D": "Washington"
       },
       "a": "B",
       "concept": "The UN's main headquarters is in New York City.",
       "method": "Geneva hosts many UN AGENCIES, but the main HQ is in New York.",
       "difficulty": "core"
      },
      {
       "q": "The headquarters of the African Union is located in",
       "o": {
        "A": "Libya",
        "B": "South Africa",
        "C": "Ethiopia",
        "D": "Nigeria"
       },
       "a": "C",
       "concept": "The African Union's headquarters is in Addis Ababa, Ethiopia.",
       "method": "Associate the AU permanently with Addis Ababa, Ethiopia.",
       "difficulty": "core"
      },
      {
       "q": "The Olympic Games are normally held at an interval of",
       "o": {
        "A": "2 years",
        "B": "3 years",
        "C": "4 years",
        "D": "5 years"
       },
       "a": "C",
       "concept": "The Summer and Winter Olympics each occur once every 4 years.",
       "method": "Fixed fact: every 4 years for each Games cycle.",
       "difficulty": "core"
      },
      {
       "q": "Albert Einstein was a famous",
       "o": {
        "A": "Physician",
        "B": "Chemist",
        "C": "Physicist",
        "D": "Biologist"
       },
       "a": "C",
       "concept": "Einstein is renowned for his contributions to physics, especially relativity.",
       "method": "Don't confuse 'Physician' (medical doctor) with 'Physicist' (studies physics).",
       "difficulty": "core"
      },
      {
       "q": "Who is credited with inventing the telephone?",
       "o": {
        "A": "Thomas Alva Edison",
        "B": "Galileo",
        "C": "Alexander Graham Bell",
        "D": "Thomas Graham Bell"
       },
       "a": "C",
       "concept": "Alexander Graham Bell is traditionally credited with patenting the telephone.",
       "method": "Watch the option 'Thomas Graham Bell' — a scrambled trap combining two other names.",
       "difficulty": "core"
      },
      {
       "q": "ATM, as used in banking, stands for",
       "o": {
        "A": "Automated Tallying Machine",
        "B": "Automatic Teller Machine",
        "C": "Automated Totaling Machine",
        "D": "Automated Transaction of Money"
       },
       "a": "B",
       "concept": "ATM is the standard banking term for a self-service cash machine.",
       "method": "Full name matches the acronym: Automatic Teller Machine.",
       "difficulty": "core"
      },
      {
       "q": "AIDS stands for",
       "o": {
        "A": "Acquired Immune Disease Syndrome",
        "B": "Acquired Immunity Deficiency Syndrome",
        "C": "Acquired Immune Deficiency Syndrome",
        "D": "Acquired Infection Deficiency Syndrome"
       },
       "a": "C",
       "concept": "The precise medical acronym is Acquired Immune Deficiency Syndrome.",
       "method": "Watch the near-identical distractors — only one has the exact correct wording.",
       "difficulty": "core"
      },
      {
       "q": "Muammar Gaddafi of Libya was assassinated on",
       "o": {
        "A": "September 11th, 2009",
        "B": "September 11th, 2011",
        "C": "October 20th, 2011",
        "D": "October 19th, 2011"
       },
       "a": "C",
       "concept": "Gaddafi was killed on 20 October 2011 during the Libyan civil war.",
       "method": "Fixed historical date to memorise: 20 October 2011.",
       "difficulty": "core"
      },
      {
       "q": "Muammar Gaddafi became Head of State of Libya in",
       "o": {
        "A": "1969",
        "B": "1967",
        "C": "1973",
        "D": "1976"
       },
       "a": "A",
       "concept": "Gaddafi seized power in a 1969 coup and ruled for over four decades.",
       "method": "Associate Gaddafi's rise to power with 1969.",
       "difficulty": "core"
      },
      {
       "q": "The Egyptian leader forced out of office in 2011 amid mass protests was",
       "o": {
        "A": "Anwar Sadat",
        "B": "Ben Ali",
        "C": "Mohammed Gaddafi",
        "D": "Hosni Mubarak"
       },
       "a": "D",
       "concept": "Hosni Mubarak was Egypt's president ousted during the 2011 Arab Spring protests.",
       "method": "Associate the 2011 Egyptian uprising with the fall of Mubarak.",
       "difficulty": "core"
      },
      {
       "q": "Which of these countries has NOT won the FIFA World Cup?",
       "o": {
        "A": "USA",
        "B": "Brazil",
        "C": "Uruguay",
        "D": "England"
       },
       "a": "A",
       "concept": "Brazil, Uruguay, and England have all won World Cups; the USA has not.",
       "method": "Recall World Cup winners: Brazil(5x), Uruguay, England(1966) — USA is missing from that list.",
       "difficulty": "core"
      },
      {
       "q": "The idea of \"government of the people, by the people, for the people\" is credited to",
       "o": {
        "A": "George Bush",
        "B": "Barack Obama",
        "C": "Abraham Lincoln",
        "D": "George Washington"
       },
       "a": "C",
       "concept": "This famous phrase comes from Lincoln's Gettysburg Address (1863).",
       "method": "Fixed historical quote: Abraham Lincoln, Gettysburg Address.",
       "difficulty": "core"
      },
      {
       "q": "Who failed in business and politics many times before eventually becoming a US president?",
       "o": {
        "A": "George Bush",
        "B": "Abraham Lincoln",
        "C": "George Washington",
        "D": "Barack Obama"
       },
       "a": "B",
       "concept": "Lincoln is famous for numerous political and business failures before his presidency.",
       "method": "Classic 'perseverance' story associated with Abraham Lincoln.",
       "difficulty": "core"
      },
      {
       "q": "Who was President of Zimbabwe for many years until 2017?",
       "o": {
        "A": "Clifford Tagoe",
        "B": "Robert Mugabe",
        "C": "Saddam Hussein",
        "D": "Oliver Tambo"
       },
       "a": "B",
       "concept": "Robert Mugabe led Zimbabwe from independence in 1980 until being removed in 2017.",
       "method": "Associate long-serving Zimbabwean leadership with Robert Mugabe.",
       "difficulty": "core"
      },
      {
       "q": "The capital of Mali is",
       "o": {
        "A": "Bamako",
        "B": "Mozambique",
        "C": "Namibia",
        "D": "Tripoli"
       },
       "a": "A",
       "concept": "Bamako is Mali's capital and largest city.",
       "method": "Note the other options are actually country names, not capitals — only Bamako is a real capital city.",
       "difficulty": "core"
      },
      {
       "q": "The capital of Guinea is",
       "o": {
        "A": "Khartoum",
        "B": "Niamey",
        "C": "Windhoek",
        "D": "Conakry"
       },
       "a": "D",
       "concept": "Conakry is the capital of Guinea (not to be confused with Guinea-Bissau or Equatorial Guinea).",
       "method": "Match: Guinea→Conakry, distinct from Khartoum(Sudan), Niamey(Niger), Windhoek(Namibia).",
       "difficulty": "core"
      },
      {
       "q": "Chukwuemeka Odumegwu Ojukwu died in",
       "o": {
        "A": "November 26, 2011",
        "B": "March 3, 2012",
        "C": "June 8, 2010",
        "D": "June 11, 2011"
       },
       "a": "A",
       "concept": "Ojukwu, the Biafran wartime leader, died on 26 November 2011.",
       "method": "Fixed date to memorise for this historical figure.",
       "difficulty": "core"
      },
      {
       "q": "The 35th President of the United States was",
       "o": {
        "A": "Barack Obama",
        "B": "Abraham Lincoln",
        "C": "John F. Kennedy",
        "D": "George Clinton"
       },
       "a": "C",
       "concept": "John F. Kennedy served as the 35th US president from 1961 until his assassination in 1963.",
       "method": "Fixed ordinal fact: Kennedy = 35th president.",
       "difficulty": "core"
      },
      {
       "q": "John F. Kennedy was assassinated in",
       "o": {
        "A": "1963",
        "B": "1965",
        "C": "1975",
        "D": "1956"
       },
       "a": "A",
       "concept": "Kennedy was assassinated in Dallas, Texas in November 1963.",
       "method": "Fixed historical date: 1963.",
       "difficulty": "core"
      },
      {
       "q": "Idi Amin, the former military dictator, ruled which country?",
       "o": {
        "A": "Niger",
        "B": "Libya",
        "C": "Uganda",
        "D": "Mali"
       },
       "a": "C",
       "concept": "Idi Amin ruled Uganda as a dictator through the 1970s.",
       "method": "Associate Idi Amin permanently with Uganda.",
       "difficulty": "core"
      },
      {
       "q": "The official currency used in Austria is the",
       "o": {
        "A": "Dollar",
        "B": "Euro",
        "C": "Cedi",
        "D": "Pound"
       },
       "a": "B",
       "concept": "Austria, as a Eurozone member, uses the Euro.",
       "method": "Most Western European Union countries use the Euro — Austria included.",
       "difficulty": "core"
      },
      {
       "q": "The smallest continent by land area is",
       "o": {
        "A": "Asia",
        "B": "Europe",
        "C": "Australia",
        "D": "Africa"
       },
       "a": "C",
       "concept": "Australia (as a continent, sometimes called Oceania) is the smallest by land area.",
       "method": "Fixed geography fact: Australia is the smallest continent.",
       "difficulty": "core"
      },
      {
       "q": "A person who suffers a loss of memory is said to have",
       "o": {
        "A": "Amnesia",
        "B": "Amnesty",
        "C": "Anaemia",
        "D": "Anemia"
       },
       "a": "A",
       "concept": "'Amnesia' is the medical term for memory loss; 'amnesty' (a pardon) is a common distractor.",
       "method": "Don't confuse amnesia (memory loss) with amnesty (official pardon) — similar spelling, different meaning.",
       "difficulty": "core"
      },
      {
       "q": "The toad belongs to the class of animals called",
       "o": {
        "A": "Pisces",
        "B": "Aves",
        "C": "Amphibian",
        "D": "Mammal"
       },
       "a": "C",
       "concept": "Toads and frogs are classified as amphibians, living both in water and on land.",
       "method": "Amphibian = 'double life' (water and land) — fits toads exactly.",
       "difficulty": "core"
      },
      {
       "q": "The largest living non-venomous snake, found near water or in trees, is the",
       "o": {
        "A": "Cobra",
        "B": "Anaconda",
        "C": "Ribbon snake",
        "D": "Garter snake"
       },
       "a": "B",
       "concept": "The anaconda, a constrictor rather than venomous, is among the largest snakes alive.",
       "method": "Cobras are venomous (ruling that out); anaconda is the famously massive non-venomous option.",
       "difficulty": "core"
      },
      {
       "q": "A battery-operated electrical device that regulates heartbeat is called a",
       "o": {
        "A": "Pacemaker",
        "B": "Pump",
        "C": "Pacer",
        "D": "Ventricular machine"
       },
       "a": "A",
       "concept": "A pacemaker is the medical device implanted to regulate irregular heartbeats.",
       "method": "Fixed medical term: pacemaker.",
       "difficulty": "core"
      },
      {
       "q": "A postscript (P.S.) is a short message added to a letter",
       "o": {
        "A": "As a signature",
        "B": "After the signature",
        "C": "Before the signature",
        "D": "Within the signature"
       },
       "a": "B",
       "concept": "'Post' means after — a postscript is literally written after the main letter and signature.",
       "method": "'Post-' = after; script = writing — always comes after the signature.",
       "difficulty": "core"
      },
      {
       "q": "Someone acting as a diplomat on behalf of a country is called",
       "o": {
        "A": "An amazon",
        "B": "An actor",
        "C": "A senator",
        "D": "An envoy"
       },
       "a": "D",
       "concept": "An 'envoy' is a diplomatic representative sent on behalf of a country.",
       "method": "Match the definition directly to its technical diplomatic term.",
       "difficulty": "core"
      },
      {
       "q": "Which component of air has the highest percentage composition by volume?",
       "o": {
        "A": "Nitrogen",
        "B": "Carbon Dioxide",
        "C": "Oxygen",
        "D": "Hydrogen"
       },
       "a": "A",
       "concept": "Air is roughly 78% nitrogen, 21% oxygen, with the rest made up of other gases.",
       "method": "Fixed composition fact: nitrogen dominates air, not oxygen as many assume.",
       "difficulty": "core"
      },
      {
       "q": "Desmond Tutu was awarded the Nobel Peace Prize in",
       "o": {
        "A": "1981",
        "B": "1983",
        "C": "1987",
        "D": "1984"
       },
       "a": "D",
       "concept": "Archbishop Desmond Tutu won the Nobel Peace Prize in 1984 for his anti-apartheid work.",
       "method": "Fixed historical date: 1984.",
       "difficulty": "core"
      },
      {
       "q": "Victoria is the capital city of",
       "o": {
        "A": "Morocco",
        "B": "Seychelles",
        "C": "Somalia",
        "D": "Burundi"
       },
       "a": "B",
       "concept": "Victoria is the capital of Seychelles, an island nation in the Indian Ocean.",
       "method": "Fixed fact: Seychelles' capital is Victoria.",
       "difficulty": "core"
      },
      {
       "q": "The capital of Iran is",
       "o": {
        "A": "Baghdad",
        "B": "Tehran",
        "C": "Budapest",
        "D": "Vienna"
       },
       "a": "B",
       "concept": "Tehran is Iran's capital; Baghdad is Iraq's capital, a common mix-up.",
       "method": "Don't confuse Iran (Tehran) with Iraq (Baghdad) — similar-sounding names, different countries.",
       "difficulty": "core"
      },
      {
       "q": "Nelson Mandela was awarded the Nobel Peace Prize in",
       "o": {
        "A": "1992",
        "B": "1993",
        "C": "1994",
        "D": "1995"
       },
       "a": "B",
       "concept": "Mandela won the Nobel Peace Prize jointly with F.W. de Klerk in 1993.",
       "method": "Fixed date: 1993, one year before he became president in 1994.",
       "difficulty": "core"
      },
      {
       "q": "The capital of Hungary is",
       "o": {
        "A": "Budapest",
        "B": "Vienna",
        "C": "Warsaw",
        "D": "Prague"
       },
       "a": "A",
       "concept": "Budapest is Hungary's capital, sitting on the Danube River.",
       "method": "Fixed geography fact: Hungary → Budapest.",
       "difficulty": "core"
      },
      {
       "q": "The capital of The Gambia is",
       "o": {
        "A": "Banjul",
        "B": "Dakar",
        "C": "Bissau",
        "D": "Freetown"
       },
       "a": "A",
       "concept": "Banjul is The Gambia's capital, a small West African nation almost surrounded by Senegal.",
       "method": "Fixed geography fact: Gambia → Banjul.",
       "difficulty": "core"
      },
      {
       "q": "The capital of Cameroon is",
       "o": {
        "A": "Douala",
        "B": "Yaoundé",
        "C": "Libreville",
        "D": "Bangui"
       },
       "a": "B",
       "concept": "Yaoundé is Cameroon's political capital (Douala is the larger commercial city).",
       "method": "Don't confuse Cameroon's capital (Yaoundé) with its biggest city (Douala).",
       "difficulty": "core"
      },
      {
       "q": "The currency of Japan is the",
       "o": {
        "A": "Yuan",
        "B": "Won",
        "C": "Yen",
        "D": "Ringgit"
       },
       "a": "C",
       "concept": "Japan's official currency is the Yen.",
       "method": "Don't confuse Yen(Japan) with Yuan(China) or Won(Korea) — similar-sounding names, different countries.",
       "difficulty": "core"
      },
      {
       "q": "Libyan leader Muammar Gaddafi was assassinated in which year?",
       "o": {
        "A": "2009",
        "B": "2011",
        "C": "2013",
        "D": "2015"
       },
       "a": "B",
       "concept": "Gaddafi's death came during the Libyan civil war that was part of the wider 2011 Arab Spring uprisings.",
       "method": "He was captured and killed in October 2011, in Sirte, as rebel forces took control of Libya.",
       "difficulty": "core"
      },
      {
       "q": "Muammar Gaddafi became Head of State of Libya in which year?",
       "o": {
        "A": "1969",
        "B": "1967",
        "C": "1973",
        "D": "1976"
       },
       "a": "A",
       "concept": "Gaddafi seized power in a bloodless coup while still a young army officer.",
       "method": "He led the coup that overthrew King Idris in 1969, ruling Libya for over four decades afterward.",
       "difficulty": "core"
      },
      {
       "q": "The Egyptian leader forced out of office in the 2011 uprising was ______.",
       "o": {
        "A": "Anwar Sadat",
        "B": "Hosni Mubarak",
        "C": "Gamal Abdel Nasser",
        "D": "Mohamed Morsi"
       },
       "a": "B",
       "concept": "The 2011 Arab Spring toppled several long-ruling leaders across North Africa and the Middle East.",
       "method": "Hosni Mubarak, in power since 1981, resigned in February 2011 after mass protests in Cairo's Tahrir Square.",
       "difficulty": "core"
      },
      {
       "q": "Which of these countries has NEVER won the FIFA World Cup?",
       "o": {
        "A": "USA",
        "B": "Brazil",
        "C": "Uruguay",
        "D": "England"
       },
       "a": "A",
       "concept": "Only a small number of countries have ever won football's biggest international trophy.",
       "method": "Brazil, Uruguay and England are all past World Cup winners; the USA has reached the tournament many times but never won it.",
       "difficulty": "core"
      },
      {
       "q": "The idea of 'government of the people, by the people, for the people' is most associated with ______.",
       "o": {
        "A": "George Washington",
        "B": "Abraham Lincoln",
        "C": "Barack Obama",
        "D": "Winston Churchill"
       },
       "a": "B",
       "concept": "This famous definition of democracy comes from a specific historical speech, not just a general political idea.",
       "method": "Abraham Lincoln used this phrase in his 1863 Gettysburg Address.",
       "difficulty": "core"
      },
      {
       "q": "Robert Mugabe served for decades as President of which African country?",
       "o": {
        "A": "Zambia",
        "B": "Zimbabwe",
        "C": "Botswana",
        "D": "Malawi"
       },
       "a": "B",
       "concept": "Long-serving African heads of state are a recurring GK category.",
       "method": "Robert Mugabe led Zimbabwe from independence in 1980 (initially as Prime Minister, then President) until 2017.",
       "difficulty": "core"
      },
      {
       "q": "What is the capital of Mali?",
       "o": {
        "A": "Bamako",
        "B": "Niamey",
        "C": "Conakry",
        "D": "Dakar"
       },
       "a": "A",
       "concept": "West African capitals are frequently tested and easy to confuse with one another.",
       "method": "Bamako is Mali's capital; Niamey is Niger's, Conakry is Guinea's, and Dakar is Senegal's.",
       "difficulty": "core"
      },
      {
       "q": "How many countries make up the African Union (AU)?",
       "o": {
        "A": "53",
        "B": "54",
        "C": "55",
        "D": "52"
       },
       "a": "B",
       "concept": "The AU includes every internationally recognised African state.",
       "method": "The African Union currently comprises 54 member states.",
       "difficulty": "core"
      },
      {
       "q": "Which African country's flag features the 'Union Jack' pattern?",
       "o": {
        "A": "Ghana",
        "B": "Switzerland",
        "C": "Australia",
        "D": "None — the Union Jack is Great Britain's flag"
       },
       "a": "D",
       "concept": "The 'Union Jack' is a specific name for the flag of Great Britain, not a generic pattern used elsewhere.",
       "method": "'Union Jack' refers specifically to the flag of the United Kingdom (Great Britain), not any African nation's flag.",
       "difficulty": "core"
      },
      {
       "q": "Where is the headquarters of the African Union located?",
       "o": {
        "A": "Addis Ababa",
        "B": "Accra",
        "C": "Lagos",
        "D": "Abidjan"
       },
       "a": "A",
       "concept": "The AU's headquarters, like several other pan-African institutions, is based in Ethiopia's capital.",
       "method": "The African Union's headquarters is in Addis Ababa, Ethiopia.",
       "difficulty": "core"
      },
      {
       "q": "Which of these countries was never colonised by a foreign power?",
       "o": {
        "A": "Libya",
        "B": "Liberia",
        "C": "Togo",
        "D": "Cameroon"
       },
       "a": "B",
       "concept": "Liberia is one of only two African countries (alongside Ethiopia) never formally colonised by a foreign power.",
       "method": "Liberia was founded and settled by freed African-American slaves in the 19th century and was never colonised.",
       "difficulty": "core"
      },
      {
       "q": "Who was the leader of Zimbabwe (then Southern Rhodesia's successor state) for decades after independence?",
       "o": {
        "A": "Nelson Mandela",
        "B": "Robert Mugabe",
        "C": "Kenneth Kaunda",
        "D": "Julius Nyerere"
       },
       "a": "B",
       "concept": "Long-serving African heads of state are a recurring GK category.",
       "method": "Robert Mugabe led Zimbabwe from independence in 1980 until 2017.",
       "difficulty": "core"
      },
      {
       "q": "What is the fastest terrestrial (land) animal?",
       "o": {
        "A": "Lion",
        "B": "Cheetah",
        "C": "Puma",
        "D": "Tiger"
       },
       "a": "B",
       "concept": "A classic, frequently repeated GK/nature fact.",
       "method": "The cheetah can reach speeds of over 100km/h, making it the fastest land animal.",
       "difficulty": "core"
      },
      {
       "q": "Which Nigerian sportsman was famous for football, playing as a left-back for Chelsea and the Super Eagles?",
       "o": {
        "A": "Celestine Babayaro",
        "B": "Rashidi Yekini",
        "C": "Jay-Jay Okocha",
        "D": "Nwankwo Kanu"
       },
       "a": "A",
       "concept": "Notable-figures questions in this exam often test recognition of a person's field, not just their name.",
       "method": "Celestine Babayaro was a defender known for his club career at Chelsea and his time with Nigeria's national team.",
       "difficulty": "core"
      },
      {
       "q": "How many member states does the European Union have?",
       "o": {
        "A": "27",
        "B": "28",
        "C": "39",
        "D": "30"
       },
       "a": "A",
       "concept": "EU membership has changed over time — this reflects the post-Brexit count.",
       "method": "Following the UK's withdrawal (Brexit) in 2020, the European Union has 27 member states.",
       "difficulty": "core"
      },
      {
       "q": "The Euro currency is used by how many European countries?",
       "o": {
        "A": "17",
        "B": "18",
        "C": "19",
        "D": "20"
       },
       "a": "C",
       "concept": "Not every EU member state uses the Euro — the 'Eurozone' is a specific subset.",
       "method": "19 EU countries currently use the Euro as their official currency (forming the Eurozone).",
       "difficulty": "core"
      },
      {
       "q": "The Taj Mahal in India was built by the Mughal emperor ______.",
       "o": {
        "A": "Aurangzeb",
        "B": "Shah Jahan",
        "C": "Akbar",
        "D": "Humayun"
       },
       "a": "B",
       "concept": "The Taj Mahal was commissioned as a mausoleum, a well-known world-monument fact.",
       "method": "Emperor Shah Jahan built the Taj Mahal in memory of his wife, Mumtaz Mahal.",
       "difficulty": "core"
      },
      {
       "q": "The River Thames is located in ______.",
       "o": {
        "A": "England",
        "B": "Scotland",
        "C": "Ireland",
        "D": "Finland"
       },
       "a": "A",
       "concept": "Major world rivers are frequently paired with their host country in GK questions.",
       "method": "The River Thames flows through southern England, including London.",
       "difficulty": "core"
      },
      {
       "q": "Where was coal first discovered in Nigeria?",
       "o": {
        "A": "Enugu, in 1912",
        "B": "Kaduna, in 1908",
        "C": "Jos, in 1910",
        "D": "Lagos, in 1915"
       },
       "a": "A",
       "concept": "Coal discovery in Enugu is directly tied to that city's later nickname, 'Coal City'.",
       "method": "Coal was first discovered in Enugu in 1912, later shaping the city's economy and identity.",
       "difficulty": "core"
      },
      {
       "q": "What year did the Nigerian Civil War (Biafran War) begin?",
       "o": {
        "A": "1966",
        "B": "1967",
        "C": "1968",
        "D": "1970"
       },
       "a": "B",
       "concept": "The war's start (1967) and end (1970) are both commonly tested dates in Nigerian history.",
       "method": "The Nigerian Civil War began in July 1967 and ended in January 1970.",
       "difficulty": "core"
      },
      {
       "q": "In which year was Osun State created?",
       "o": {
        "A": "1987",
        "B": "1991",
        "C": "1996",
        "D": "1999"
       },
       "a": "B",
       "concept": "Osun was created during the same 1991 state-creation exercise that produced several other states under Babangida.",
       "method": "Osun State was created on 27 August 1991.",
       "difficulty": "core"
      },
      {
       "q": "Where was Nigeria's first oil well located?",
       "o": {
        "A": "Oloibiri, Bayelsa State",
        "B": "Warri, Delta State",
        "C": "Port Harcourt, Rivers State",
        "D": "Bonny, Rivers State"
       },
       "a": "A",
       "concept": "This is the same historic well location tested elsewhere as 'where petroleum was first discovered'.",
       "method": "Nigeria's first commercially viable oil well was drilled at Oloibiri, in present-day Bayelsa State.",
       "difficulty": "core"
      },
      {
       "q": "When did the seat of Nigeria's Federal Government move from Lagos to Abuja?",
       "o": {
        "A": "December 12, 1991",
        "B": "October 1, 1990",
        "C": "May 29, 1999",
        "D": "December 1, 1988"
       },
       "a": "A",
       "concept": "This marks the formal transfer of the capital, distinct from when the FCT was first created by decree (1976).",
       "method": "The seat of government officially moved to Abuja on 12 December 1991.",
       "difficulty": "core"
      },
      {
       "q": "Who was the first Nigerian to buy a car?",
       "o": {
        "A": "Herbert Macaulay",
        "B": "Nnamdi Azikiwe",
        "C": "Obafemi Awolowo",
        "D": "Ahmadu Bello"
       },
       "a": "A",
       "concept": "A distinct 'first' from 'first woman to buy/drive a car' — pay attention to exactly which 'first' is being asked.",
       "method": "Herbert Macaulay is recognised as the first Nigerian to own a car.",
       "difficulty": "core"
      },
      {
       "q": "The first African to win the Nobel Prize for Literature was ______.",
       "o": {
        "A": "Chinua Achebe",
        "B": "Wole Soyinka",
        "C": "Nadine Gordimer",
        "D": "Naguib Mahfouz"
       },
       "a": "B",
       "concept": "Wole Soyinka's 1986 Nobel win was a landmark moment for African literature.",
       "method": "Wole Soyinka won the Nobel Prize for Literature in 1986, the first African to do so.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria changed to the metric currency system (naira and kobo) on ______.",
       "o": {
        "A": "January 1, 1973",
        "B": "July 1, 1959",
        "C": "October 1, 1960",
        "D": "April 1, 1972"
       },
       "a": "A",
       "concept": "This marked the switch away from the pounds/shillings/pence system inherited from British rule.",
       "method": "Nigeria adopted the naira and kobo, replacing the pound sterling system, on 1 January 1973.",
       "difficulty": "core"
      },
      {
       "q": "What is the largest continent in the world?",
       "o": {
        "A": "Asia",
        "B": "Africa",
        "C": "North America",
        "D": "Europe"
       },
       "a": "A",
       "concept": "A frequently tested basic geography fact.",
       "method": "Asia is the largest continent both by land area and population.",
       "difficulty": "core"
      },
      {
       "q": "What is the smallest continent in the world?",
       "o": {
        "A": "Europe",
        "B": "Antarctica",
        "C": "Australia",
        "D": "South America"
       },
       "a": "C",
       "concept": "Australia is often called a continent in its own right, distinct from the wider 'Oceania' region.",
       "method": "Australia is the smallest of the seven continents by land area.",
       "difficulty": "core"
      },
      {
       "q": "Which country first hosted the FIFA World Cup, and also won it?",
       "o": {
        "A": "Brazil, in 1950",
        "B": "Uruguay, in 1930",
        "C": "Italy, in 1934",
        "D": "France, in 1938"
       },
       "a": "B",
       "concept": "The first-ever World Cup was both hosted and won by the same country.",
       "method": "Uruguay hosted the inaugural FIFA World Cup in 1930 and also won the tournament.",
       "difficulty": "core"
      },
      {
       "q": "Which country was the first to win the FIFA U-17 World Cup?",
       "o": {
        "A": "Nigeria, in 1985, in China",
        "B": "Brazil, in 1985",
        "C": "Germany, in 1985",
        "D": "Ghana, in 1991"
       },
       "a": "A",
       "concept": "Nigeria has a strong historical record in age-grade football tournaments, starting with this landmark win.",
       "method": "Nigeria won the first FIFA U-17 World Championship (as it was then called) in China in 1985.",
       "difficulty": "core"
      },
      {
       "q": "What is the longest river in Africa?",
       "o": {
        "A": "River Congo",
        "B": "River Niger",
        "C": "River Nile",
        "D": "River Zambezi"
       },
       "a": "C",
       "concept": "A classic, frequently repeated geography fact about Africa.",
       "method": "The River Nile, at roughly 6,650km, is the longest river in Africa (and among the longest in the world).",
       "difficulty": "core"
      },
      {
       "q": "What is the highest waterfall in the world?",
       "o": {
        "A": "Niagara Falls",
        "B": "Angel Falls, Venezuela",
        "C": "Victoria Falls",
        "D": "Iguazu Falls"
       },
       "a": "B",
       "concept": "Angel Falls is famous specifically for its height, not its water volume (unlike Niagara or Victoria Falls).",
       "method": "Angel Falls in Venezuela is the world's highest uninterrupted waterfall.",
       "difficulty": "core"
      },
      {
       "q": "What is the highest mountain in Africa?",
       "o": {
        "A": "Mount Kenya",
        "B": "Mount Kilimanjaro",
        "C": "Atlas Mountains",
        "D": "Mount Cameroon"
       },
       "a": "B",
       "concept": "Kilimanjaro (in Tanzania) is Africa's highest peak, distinct from Everest (the world's highest overall).",
       "method": "Mount Kilimanjaro, in Tanzania, is Africa's tallest mountain.",
       "difficulty": "core"
      },
      {
       "q": "What is the largest sea in the world?",
       "o": {
        "A": "Mediterranean Sea",
        "B": "Caribbean Sea",
        "C": "South China Sea",
        "D": "Red Sea"
       },
       "a": "A",
       "concept": "Note the distinction between 'sea' (this question) and 'ocean' (a separate, larger category).",
       "method": "The Mediterranean Sea is considered the world's largest sea by area.",
       "difficulty": "core"
      },
      {
       "q": "Which university is considered the first university in the world?",
       "o": {
        "A": "University of Oxford",
        "B": "Al-Azhar University, Cairo",
        "C": "University of Bologna",
        "D": "Harvard University"
       },
       "a": "B",
       "concept": "Founding dates for the 'oldest university' claim can vary by definition, but Al-Azhar is commonly cited in this context.",
       "method": "Al-Azhar University in Cairo, Egypt, founded around 970 AD, is often cited as the world's first/oldest university.",
       "difficulty": "core"
      },
      {
       "q": "An election held to fill a single vacant seat in a legislature (outside the normal election cycle) is called a ______.",
       "o": {
        "A": "by-election",
        "B": "general election",
        "C": "referendum",
        "D": "plebiscite"
       },
       "a": "A",
       "concept": "A by-election fills one specific vacant seat, unlike a general election, which covers the whole legislature.",
       "method": "A by-election is specifically held to fill a vacant seat, separate from the regular general election cycle.",
       "difficulty": "core"
      },
      {
       "q": "Which of these countries does NOT operate a federal system of government?",
       "o": {
        "A": "USA",
        "B": "Nigeria",
        "C": "Canada",
        "D": "France"
       },
       "a": "D",
       "concept": "Federal systems divide power between central and state/regional governments; unitary systems, like France's, concentrate power centrally.",
       "method": "France operates a unitary system of government, unlike the USA, Nigeria, and Canada, which are all federations.",
       "difficulty": "core"
      },
      {
       "q": "The main advantage of the secret ballot is that it ______.",
       "o": {
        "A": "is faster than other voting systems",
        "B": "prevents anyone from being stopped from voting",
        "C": "ensures the anonymity of each voter",
        "D": "allows losers to request a re-vote"
       },
       "a": "C",
       "concept": "Secrecy in voting is designed to protect voters from intimidation or retaliation for how they voted.",
       "method": "The secret ballot's core purpose is to keep each voter's choice private (anonymous).",
       "difficulty": "core"
      },
      {
       "q": "Which African country made the earliest contact with Nigerian society among the following options?",
       "o": {
        "A": "British",
        "B": "Portuguese",
        "C": "French",
        "D": "German"
       },
       "a": "B",
       "concept": "European contact with the Nigerian coast predates British colonial rule by centuries.",
       "method": "The Portuguese were the first Europeans to make contact with what is now Nigeria, arriving in the late 15th century, well before British colonisation.",
       "difficulty": "core"
      },
      {
       "q": "What is Universal Adult Suffrage?",
       "o": {
        "A": "Only literate citizens can vote",
        "B": "All citizens can vote",
        "C": "All qualified adult citizens can vote",
        "D": "Only adult males can vote"
       },
       "a": "C",
       "concept": "Universal suffrage still requires meeting basic qualifying conditions (age, citizenship) — it isn't literally unconditional for everyone.",
       "method": "Universal Adult Suffrage means all qualified adult citizens (regardless of gender, race, or wealth) have the right to vote.",
       "difficulty": "core"
      },
      {
       "q": "A social system in which power is derived from control over land is called ______.",
       "o": {
        "A": "Oligarchy",
        "B": "Feudalism",
        "C": "Socialism",
        "D": "Welfarism"
       },
       "a": "B",
       "concept": "Feudalism was the dominant land-based power structure in medieval Europe.",
       "method": "Feudalism ties political and social power directly to land ownership and control.",
       "difficulty": "core"
      },
      {
       "q": "Bicameral legislature (a legislature with two chambers) exists mainly to ______.",
       "o": {
        "A": "allow more media coverage of proceedings",
        "B": "prevent the concentration of power in one legislative house",
        "C": "provide more jobs for politicians",
        "D": "ensure only just laws are passed"
       },
       "a": "B",
       "concept": "Having two chambers creates a built-in check, as legislation typically must pass through both before becoming law.",
       "method": "A bicameral structure primarily prevents power from concentrating in a single legislative chamber.",
       "difficulty": "core"
      },
      {
       "q": "Under the Marxist theory, people who live by selling their labour (rather than owning capital) are called ______.",
       "o": {
        "A": "Bourgeoisie",
        "B": "Proletariats",
        "C": "Feudal lords",
        "D": "Slaves"
       },
       "a": "B",
       "concept": "Marxist theory divides society mainly into two classes based on their relationship to the means of production.",
       "method": "The proletariat is the working class that sells its labour, as distinct from the bourgeoisie, who own capital/means of production.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT an acceptable, constitutional means of achieving democratic change?",
       "o": {
        "A": "Referendum",
        "B": "Recall",
        "C": "Initiative",
        "D": "Riots"
       },
       "a": "D",
       "concept": "Riots fall outside the recognised, legal mechanisms citizens use to influence or change government.",
       "method": "Referendum, recall, and initiative are all formal democratic tools; riots are an extra-constitutional (illegal) means.",
       "difficulty": "core"
      },
      {
       "q": "In a democracy, sovereignty is ultimately vested in ______.",
       "o": {
        "A": "the community/the people",
        "B": "public officials",
        "C": "judges",
        "D": "the head of state"
       },
       "a": "A",
       "concept": "A core principle of democratic theory is that ultimate political authority belongs to the citizenry, not any individual official.",
       "method": "Sovereignty in a democracy resides with the people (the community), who delegate authority to elected officials.",
       "difficulty": "core"
      },
      {
       "q": "A law passed by the legislature and formally assented to by the executive is called a(n) ______.",
       "o": {
        "A": "Act",
        "B": "Presidential proclamation",
        "C": "Decree",
        "D": "Legislative order"
       },
       "a": "A",
       "concept": "Distinguish an 'Act' (passed by a legislature, needing executive assent) from a 'Decree' (issued directly by a military/executive authority without a legislature).",
       "method": "A bill becomes an Act once it has passed through the legislature and received the executive's assent.",
       "difficulty": "core"
      },
      {
       "q": "An important principle of the civil service is ______.",
       "o": {
        "A": "Authoritarianism",
        "B": "Anonymity",
        "C": "Nepotism",
        "D": "Partisanship"
       },
       "a": "B",
       "concept": "Civil servants are expected to remain politically neutral and not publicly take credit or blame — that responsibility belongs to their political heads.",
       "method": "Civil service anonymity means officials aren't personally credited or blamed for policy outcomes; that responsibility rests with elected political leaders.",
       "difficulty": "core"
      },
      {
       "q": "What was the primary purpose of the Sir Henry Willink's Commission of Inquiry (Nigeria, 1957)?",
       "o": {
        "A": "To approve Nigeria's independence",
        "B": "To allay the fears of ethnic minorities in Nigeria",
        "C": "To amalgamate Northern and Southern Nigeria",
        "D": "To make Lagos a British colony"
       },
       "a": "B",
       "concept": "The Willink Commission was specifically set up in response to minority groups' concerns ahead of independence.",
       "method": "The 1957 Willink Commission investigated and sought to address the fears of Nigeria's ethnic minorities regarding the post-independence political structure.",
       "difficulty": "core"
      },
      {
       "q": "The first Governor-General of colonial Nigeria was ______.",
       "o": {
        "A": "Sir Hugh Clifford",
        "B": "Sir James Robertson",
        "C": "Lord Lugard",
        "D": "Sir Ralph Moore"
       },
       "a": "C",
       "concept": "Lord Lugard oversaw the 1914 amalgamation and became the first person to hold this specific title.",
       "method": "Lord Frederick Lugard became Nigeria's first Governor-General following the 1914 amalgamation.",
       "difficulty": "core"
      },
      {
       "q": "The first military government in Nigeria was headed by ______.",
       "o": {
        "A": "General Yakubu Gowon",
        "B": "General Aguiyi-Ironsi",
        "C": "General Murtala Muhammed",
        "D": "General Olusegun Obasanjo"
       },
       "a": "B",
       "concept": "This tests the FIRST military head of state specifically, following the January 1966 coup.",
       "method": "General Aguiyi-Ironsi headed Nigeria's first military government from January 1966.",
       "difficulty": "core"
      },
      {
       "q": "Traditional Nigerian rulers were restricted to purely ceremonial roles by the local government reforms of which year?",
       "o": {
        "A": "1966",
        "B": "1976",
        "C": "1984",
        "D": "1987"
       },
       "a": "B",
       "concept": "The 1976 local government reform significantly reshaped the role of traditional rulers within Nigeria's formal governance structure.",
       "method": "The 1976 local government reforms reduced traditional rulers to largely ceremonial functions.",
       "difficulty": "core"
      },
      {
       "q": "Which of these institutions existed before the outbreak of the Second World War?",
       "o": {
        "A": "The OAU",
        "B": "The League of Nations",
        "C": "The UNO",
        "D": "ECOWAS"
       },
       "a": "B",
       "concept": "The League of Nations (founded 1920) was the UN's failed predecessor, active between the two World Wars.",
       "method": "The League of Nations existed from 1920 to 1946, before World War II broke out; the OAU, UNO, and ECOWAS were all founded after WWII.",
       "difficulty": "core"
      },
      {
       "q": "The N.C.N.C sent a delegation to London in 1947 to protest against the ______.",
       "o": {
        "A": "Burns Constitution",
        "B": "Richards Constitution",
        "C": "Littleton Constitution",
        "D": "Macpherson Constitution"
       },
       "a": "B",
       "concept": "Each of Nigeria's colonial-era constitutions is tied to a specific controversy or reform.",
       "method": "The NCNC's 1947 protest delegation to London was against the Richards Constitution, which the party felt was imposed without adequate consultation.",
       "difficulty": "core"
      },
      {
       "q": "The transfer of authority to a local government council is known as ______.",
       "o": {
        "A": "Devolution",
        "B": "Delegation",
        "C": "Fusion",
        "D": "Fragmentation"
       },
       "a": "A",
       "concept": "Devolution specifically refers to the transfer of governing power to a lower/local level of administration.",
       "method": "Devolution describes power being formally transferred to local government councils.",
       "difficulty": "core"
      },
      {
       "q": "A popular principle of colonial administration in British West Africa was ______.",
       "o": {
        "A": "Association",
        "B": "Indirect rule",
        "C": "Paternalism",
        "D": "Assimilation"
       },
       "a": "B",
       "concept": "British colonial policy in West Africa is famously associated with governing through existing local rulers, distinct from the French approach of direct rule/assimilation.",
       "method": "Indirect rule — governing through existing traditional authorities — was Britain's characteristic colonial administrative principle in West Africa.",
       "difficulty": "core"
      },
      {
       "q": "A cabinet system of government is practised in ______.",
       "o": {
        "A": "Britain and Canada",
        "B": "The Soviet Union",
        "C": "All European countries including Britain",
        "D": "The United States of America"
       },
       "a": "A",
       "concept": "The cabinet system (a parliamentary system with a cabinet drawn from the legislature) is characteristic of the Westminster model, used by Britain and Commonwealth countries like Canada.",
       "method": "Britain and Canada, both Westminster-style parliamentary democracies, practise the cabinet system.",
       "difficulty": "core"
      },
      {
       "q": "Under the Presidential system of government, ______.",
       "o": {
        "A": "the party with a majority of seats automatically forms the executive",
        "B": "there is a principle of collective responsibility",
        "C": "the president may come from any of the parties, elected separately from the legislature",
        "D": "states take direct instruction from the federal government"
       },
       "a": "C",
       "concept": "Under a presidential system (unlike a parliamentary one), the executive head is elected separately from the legislature.",
       "method": "A defining feature of the presidential system is that the president is elected independently of the legislature and need not come from the majority party.",
       "difficulty": "core"
      },
      {
       "q": "Which of these made the earliest contact with Nigerian society among European powers?",
       "o": {
        "A": "British",
        "B": "Portuguese",
        "C": "French",
        "D": "German"
       },
       "a": "B",
       "concept": "This confirms and reinforces the earlier fact: the Portuguese preceded British contact by centuries.",
       "method": "The Portuguese first reached the West African coast, including present-day Nigeria, in the late 15th century — well before British involvement.",
       "difficulty": "core"
      },
      {
       "q": "A major factor differentiating the presidential system from the parliamentary system is ______.",
       "o": {
        "A": "separation of powers",
        "B": "judicial independence",
        "C": "the passage of bills",
        "D": "the party system"
       },
       "a": "A",
       "concept": "Separation of powers (keeping the executive, legislature, and judiciary distinct) is a hallmark of the presidential system, unlike the fused executive-legislature relationship in parliamentary systems.",
       "method": "The presidential system's key distinguishing feature is a strict separation of powers among the three branches of government.",
       "difficulty": "core"
      },
      {
       "q": "A major issue that distinguishes pressure groups from political parties is ______.",
       "o": {
        "A": "membership",
        "B": "their objective",
        "C": "voting patterns",
        "D": "ideology"
       },
       "a": "B",
       "concept": "Pressure groups seek to influence policy without seeking to win elections or govern directly, unlike political parties.",
       "method": "The key distinguishing factor is their objective: political parties seek to win political power directly, while pressure groups only seek to influence those already in power.",
       "difficulty": "core"
      }
     ],
     "freq": 96
    },
    {
     "id": "geo",
     "name": "Geography, Capitals & Places",
     "blurb": "Quick-fire facts about countries, capitals, and physical geography, especially West Africa.",
     "concept_notes": [
      "Learn Nigeria's immediate neighbours by heart (Benin, Niger, Chad, Cameroon) — 'which does NOT border Nigeria' is a classic format.",
      "Group West African capitals together when revising (Accra-Ghana, Lomé-Togo, Niamey-Niger).",
      "Fast-changing rankings (world's most populous country, largest economy) should be double-checked against a recent source before your exam."
     ],
     "questions": [
      {
       "q": "The capital city of Ghana is",
       "o": {
        "A": "Lagos",
        "B": "Accra",
        "C": "Lomé",
        "D": "Abidjan"
       },
       "a": "B",
       "concept": "Accra is the capital and largest city of Ghana.",
       "method": "Don't confuse with Lomé (Togo) or Abidjan (a major city in Côte d'Ivoire).",
       "difficulty": "core"
      },
      {
       "q": "The longest river in Africa is the",
       "o": {
        "A": "River Nile",
        "B": "River Niger",
        "C": "River Congo",
        "D": "River Zambezi"
       },
       "a": "A",
       "concept": "The Nile, flowing through North-East Africa, is Africa's longest river.",
       "method": "Don't mix up 'Nile' with the shorter West African 'Niger' river just because they sound alike.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria shares a land border with all of the following countries EXCEPT",
       "o": {
        "A": "Benin Republic",
        "B": "Niger Republic",
        "C": "Cameroon",
        "D": "Ghana"
       },
       "a": "D",
       "concept": "Nigeria's only land-bordering neighbours are Benin, Niger, Chad, and Cameroon.",
       "method": "Ghana lies further west, beyond Togo and Benin — it does not touch Nigeria.",
       "difficulty": "core"
      },
      {
       "q": "The place where water is found in the desert is called",
       "o": {
        "A": "Lake",
        "B": "Dam",
        "C": "Diff",
        "D": "Oasis"
       },
       "a": "D",
       "concept": "An 'oasis' is a fertile spot in a desert where water is available.",
       "method": "Match the definition directly to the technical geography term.",
       "difficulty": "core"
      },
      {
       "q": "Which country currently has the highest population in the world?",
       "o": {
        "A": "India",
        "B": "Russia",
        "C": "China",
        "D": "USA"
       },
       "a": "A",
       "concept": "As of the most recent population data, India has overtaken China as the world's most populous country.",
       "method": "This ranking changed in the 2020s — India now leads global population, ahead of China.",
       "difficulty": "core"
      },
      {
       "q": "Which country is odd-one-out by region: Guinea, Uganda, Niger, Mali?",
       "o": {
        "A": "Guinea",
        "B": "Uganda",
        "C": "Niger",
        "D": "Mali"
       },
       "a": "B",
       "concept": "Guinea, Niger, and Mali are West African countries; Uganda is in East Africa.",
       "method": "Group by region first — three West African nations, one East African outlier.",
       "difficulty": "core"
      },
      {
       "q": "The largest country in Africa by land area is",
       "o": {
        "A": "Algeria",
        "B": "Sudan",
        "C": "Nigeria",
        "D": "Namibia"
       },
       "a": "A",
       "concept": "Algeria is Africa's largest country by area, especially after South Sudan's 2011 secession from Sudan.",
       "method": "Since 2011, Algeria (not Sudan) holds the title of Africa's largest country.",
       "difficulty": "core"
      },
      {
       "q": "A person who suffers a memory-related condition should see which type of doctor — and which field studies the brain and nervous system?",
       "o": {
        "A": "Cardiology",
        "B": "Neurology",
        "C": "Dermatology",
        "D": "Radiology"
       },
       "a": "B",
       "concept": "Neurology is the medical field concerned with the brain and nervous system.",
       "method": "'Neuro-' relates to nerves/brain — neurology studies them.",
       "difficulty": "core"
      },
      {
       "q": "Which West African country is landlocked (has no coastline)?",
       "o": {
        "A": "Niger",
        "B": "Ghana",
        "C": "Senegal",
        "D": "Nigeria"
       },
       "a": "A",
       "concept": "Niger Republic, unlike its coastal neighbours, has no access to the sea.",
       "method": "Picture the map: Niger sits inland in the Sahel, away from any coast.",
       "difficulty": "core"
      },
      {
       "q": "Which of these Nigerian cities is popularly known as the 'centre of excellence'?",
       "o": {
        "A": "Abuja",
        "B": "Lagos",
        "C": "Kano",
        "D": "Ibadan"
       },
       "a": "B",
       "concept": "Lagos State's official slogan is 'Centre of Excellence'.",
       "method": "Match the slogan directly: Lagos → Centre of Excellence.",
       "difficulty": "core"
      },
      {
       "q": "Which of these West African countries is NOT a former French colony (unlike the others)?",
       "o": {
        "A": "Guinea",
        "B": "Niger",
        "C": "Mali",
        "D": "Ghana"
       },
       "a": "D",
       "concept": "Former colonial rulers still shape the official language and administrative style of West African countries today.",
       "method": "Guinea, Niger, and Mali are all Francophone (French-speaking) former French colonies; Ghana was a British colony and is Anglophone.",
       "difficulty": "core"
      },
      {
       "q": "Which river's meeting point with the Niger gives Kogi State its nickname as a 'confluence state'?",
       "o": {
        "A": "The Benue River",
        "B": "The Cross River",
        "C": "The Kaduna River",
        "D": "The Sokoto River"
       },
       "a": "A",
       "concept": "A confluence is where two rivers join — Nigeria's most significant one defines a state's identity.",
       "method": "The River Benue joins the River Niger at Lokoja, in Kogi State.",
       "difficulty": "core"
      }
     ],
     "freq": 17
    },
    {
     "id": "unilorin",
     "name": "Unilorin-Specific Facts",
     "blurb": "Institution-specific trivia that appears almost every year — easy marks once you've seen them once.",
     "concept_notes": [
      "Unilorin-specific questions reward simple memorisation: founding year, motto, nicknames, and principal officers show up repeatedly.",
      "Names of CURRENT principal officers change over time — verify the current holder close to your actual exam date."
     ],
     "questions": [
      {
       "q": "The University of Ilorin was established in",
       "o": {
        "A": "1962",
        "B": "1970",
        "C": "1975",
        "D": "1980"
       },
       "a": "C",
       "concept": "Unilorin was founded in 1975, part of the wave of federal universities established that decade.",
       "method": "Anchor it to the mid-1970s wave of federal universities.",
       "difficulty": "core"
      },
      {
       "q": "The University of Ilorin's official motto is",
       "o": {
        "A": "Character and Learning",
        "B": "Probitas Doctrina (Learning and Character)",
        "C": "Knowledge is Power",
        "D": "For Learning and Culture"
       },
       "a": "B",
       "concept": "Unilorin's motto in Latin, 'Probitas Doctrina', is rendered in English as 'Learning and Character'.",
       "method": "If the Latin phrase is given, remember its English rendering is 'Learning and Character'.",
       "difficulty": "core"
      },
      {
       "q": "Unilorin is popularly nicknamed, reflecting its reputation for an unbroken academic calendar, as the",
       "o": {
        "A": "Citadel of Knowledge",
        "B": "'Better by Far' university",
        "C": "Ivory Tower",
        "D": "Home of Champions"
       },
       "a": "B",
       "concept": "Unilorin is widely nicknamed 'Better by Far', tied to its reputation for rarely disrupted sessions.",
       "method": "This nickname appears repeatedly across Unilorin-focused past questions.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is Nigeria's first indigenous university?",
       "o": {
        "A": "Obafemi Awolowo University",
        "B": "University of Ilorin",
        "C": "University of Nigeria, Nsukka",
        "D": "Ahmadu Bello University"
       },
       "a": "C",
       "concept": "The University of Nigeria, Nsukka (UNN), founded in 1960, is widely cited as Nigeria's first indigenous university.",
       "method": "Associate 'first Nigerian university' permanently with Nsukka, founded 1960.",
       "difficulty": "core"
      },
      {
       "q": "Which Nigerian professor was the first female Vice-Chancellor in the country's history (at the University of Benin)?",
       "o": {
        "A": "Grace Alele-Williams",
        "B": "Bolanle Awe",
        "C": "Dora Akunyili",
        "D": "Grace Ogot"
       },
       "a": "A",
       "concept": "Professor Grace Alele-Williams became Nigeria's first female university Vice-Chancellor in 1985.",
       "method": "Fixed historic first: Grace Alele-Williams, University of Benin.",
       "difficulty": "core"
      },
      {
       "q": "The University of Nigeria, Nsukka (UNN) is widely recognised as Nigeria's first indigenous university, established in",
       "o": {
        "A": "1955",
        "B": "1958",
        "C": "1960",
        "D": "1963"
       },
       "a": "C",
       "concept": "UNN was founded in 1960, the same year as Nigeria's independence.",
       "method": "Associate UNN's founding with independence year: 1960.",
       "difficulty": "core"
      },
      {
       "q": "Who is the current Vice-Chancellor of the University of Ilorin?",
       "o": {
        "A": "Prof Is-haq Oloyede",
        "B": "Prof Wahab Egbewole",
        "C": "Prof Abdul Ganiyu Ambali",
        "D": "Prof Sulyman Age Abdulkareem"
       },
       "a": "B",
       "concept": "Knowing the current leadership of the university you're applying to is a natural, directly relevant GK fact.",
       "method": "Prof Wahab Olasupo Egbewole, SAN, has served as Unilorin's 11th Vice-Chancellor since October 2022.",
       "difficulty": "core"
      },
      {
       "q": "What is the University of Ilorin's official slogan?",
       "o": {
        "A": "Character and Learning",
        "B": "Better by Far",
        "C": "Unity and Progress",
        "D": "Knowledge is Power"
       },
       "a": "B",
       "concept": "Unilorin's slogan is distinct from its Latin motto ('Probitas Doctrina', meaning 'Character and Learning').",
       "method": "Unilorin's official slogan is 'Better by Far'.",
       "difficulty": "core"
      }
     ],
     "freq": 9
    },
    {
     "id": "science",
     "name": "General Science & Nature",
     "blurb": "Everyday science facts — units, instruments, biology basics — the kind of general knowledge a screening test loves to check.",
     "concept_notes": [
      "Learn instruments in pairs with what they measure: thermometer→temperature, barometer→pressure, ammeter→current.",
      "'Which is NOT a member of this group' questions reward knowing the group's defining feature, not just recognising the names.",
      "Match acronyms (ICT, CBT, ATM, AIDS) to their exact full wording — distractors are usually near-miss wording, not wrong topics."
     ],
     "questions": [
      {
       "q": "The place where government records are kept is called a/an",
       "o": {
        "A": "Library",
        "B": "Archive",
        "C": "Government House",
        "D": "Museum"
       },
       "a": "B",
       "concept": "'Archive' is the precise term for a place storing historical records.",
       "method": "Match the definition directly to its exact term.",
       "difficulty": "core"
      },
      {
       "q": "The scientific term for the activity of the ear is",
       "o": {
        "A": "Audio visual",
        "B": "Audio",
        "C": "Visual",
        "D": "Chemoreceptor"
       },
       "a": "B",
       "concept": "'Audio' relates to hearing/sound, the ear's function.",
       "method": "Ear = hearing = audio (visual relates to the eyes instead).",
       "difficulty": "core"
      },
      {
       "q": "The degree of hotness or coldness of a place is called",
       "o": {
        "A": "Rainfall",
        "B": "Humidity",
        "C": "Temperature",
        "D": "Weather"
       },
       "a": "C",
       "concept": "'Temperature' is the precise measure of hotness/coldness.",
       "method": "Match the definition directly to the technical term.",
       "difficulty": "core"
      },
      {
       "q": "The first colour of the rainbow (outermost band) is",
       "o": {
        "A": "Green",
        "B": "Violet",
        "C": "Indigo",
        "D": "Red"
       },
       "a": "D",
       "concept": "The rainbow's colour order (from outside in) is Red, Orange, Yellow, Green, Blue, Indigo, Violet.",
       "method": "Remember the mnemonic ROYGBIV — Red comes first.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following is NOT a mammal?",
       "o": {
        "A": "Whale",
        "B": "Dog",
        "C": "Cat",
        "D": "Shark"
       },
       "a": "D",
       "concept": "Mammals give live birth and nurse young; sharks are fish, not mammals, despite living in water like whales.",
       "method": "Whales are mammals despite living in water; sharks are fish — the odd one out.",
       "difficulty": "core"
      },
      {
       "q": "Avian flu is a disease that affects which of these groups?",
       "o": {
        "A": "Mammals",
        "B": "Birds",
        "C": "Fish",
        "D": "Amphibians"
       },
       "a": "B",
       "concept": "'Avian' relates to birds — avian flu is a bird-borne influenza.",
       "method": "'Avian' = bird-related, directly naming the affected group.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT an excretory product of the human body?",
       "o": {
        "A": "Sweat",
        "B": "Urea",
        "C": "Urine",
        "D": "Faeces"
       },
       "a": "D",
       "concept": "Faeces are undigested food waste (an egestion product), not a product of the excretory system in the strict biological sense tested here.",
       "method": "Sweat, urea, and urine are excretory products; faeces is technically an egestion product.",
       "difficulty": "core"
      },
      {
       "q": "A young lion is called a",
       "o": {
        "A": "Kitten",
        "B": "Kevlin",
        "C": "Cub",
        "D": "Cude"
       },
       "a": "C",
       "concept": "Young lions (and several other big cats) are called cubs.",
       "method": "Memorise animal-offspring names: lion → cub.",
       "difficulty": "core"
      },
      {
       "q": "An instrument used for measuring atmospheric pressure is called a",
       "o": {
        "A": "Barometer",
        "B": "Thermometer",
        "C": "Gauge",
        "D": "Hygrometer"
       },
       "a": "A",
       "concept": "'Barometer' is the specific instrument for measuring air pressure.",
       "method": "Baro- relates to pressure/weight — barometer measures pressure.",
       "difficulty": "core"
      },
      {
       "q": "The gas predominantly responsible for global warming is",
       "o": {
        "A": "Carbon dioxide",
        "B": "Carbon monoxide",
        "C": "Nitrous oxide",
        "D": "Nitrogen peroxide"
       },
       "a": "A",
       "concept": "CO₂ is the primary greenhouse gas driving global warming.",
       "method": "Fixed fact: carbon dioxide (CO₂) is the main global-warming gas.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following uses a non-conventional source of energy?",
       "o": {
        "A": "Kerosene lamp",
        "B": "Wax candle",
        "C": "Solar lantern",
        "D": "Touch (torch)"
       },
       "a": "C",
       "concept": "'Non-conventional' energy sources are renewable ones like solar, unlike fossil-fuel-based lamps.",
       "method": "Solar power is the renewable, non-conventional option among these.",
       "difficulty": "core"
      },
      {
       "q": "Electric current is measured using a/an",
       "o": {
        "A": "Voltmeter",
        "B": "Anemometer",
        "C": "Commentator",
        "D": "Ammeter"
       },
       "a": "D",
       "concept": "'Ammeter' measures electric current (amperes).",
       "method": "Am(pere)-meter measures current; Volt-meter measures voltage instead.",
       "difficulty": "core"
      },
      {
       "q": "The hardest naturally occurring substance on Earth is",
       "o": {
        "A": "Diamond",
        "B": "Platinum",
        "C": "Quartz",
        "D": "Gold"
       },
       "a": "A",
       "concept": "Diamond is the hardest known naturally occurring material.",
       "method": "Fixed science fact — diamond tops the hardness scale.",
       "difficulty": "core"
      },
      {
       "q": "Goitre is caused by a deficiency of",
       "o": {
        "A": "Vitamin D",
        "B": "Iron",
        "C": "Vitamin A",
        "D": "Iodine"
       },
       "a": "D",
       "concept": "Goitre (enlarged thyroid) results from insufficient iodine intake.",
       "method": "Iodine deficiency directly causes goitre — a fixed medical fact.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT a mosquito-borne disease?",
       "o": {
        "A": "Dengue fever",
        "B": "Malaria",
        "C": "Filariasis",
        "D": "Goitre"
       },
       "a": "D",
       "concept": "Goitre is caused by iodine deficiency, not by mosquitoes; the other three are transmitted by mosquito bites.",
       "method": "Isolate the one disease with a totally different (nutritional) cause: goitre.",
       "difficulty": "core"
      },
      {
       "q": "Stem cuttings are commonly used to re-grow which of these crops?",
       "o": {
        "A": "Cotton",
        "B": "Banana",
        "C": "Rice",
        "D": "Sugar cane"
       },
       "a": "D",
       "concept": "Sugar cane is a classic example of a crop propagated from stem cuttings rather than seeds.",
       "method": "Sugar cane stalks (stem cuttings) are the standard planting material for the crop.",
       "difficulty": "core"
      },
      {
       "q": "Persons with which blood group are known as universal donors?",
       "o": {
        "A": "AB",
        "B": "A",
        "C": "O",
        "D": "B"
       },
       "a": "C",
       "concept": "Blood group O lacks A and B antigens, allowing it to be given to most recipients.",
       "method": "Fixed medical fact: O is the universal donor group.",
       "difficulty": "core"
      },
      {
       "q": "What is the meaning of the acronym CBT (as used in exams)?",
       "o": {
        "A": "Computer Basic Technology",
        "B": "Computer Basic Test",
        "C": "Computer Based Test",
        "D": "All of the above"
       },
       "a": "C",
       "concept": "CBT stands for Computer Based Test, the format used for this very exam.",
       "method": "Match the acronym to the exact standard phrase: Computer Based Test.",
       "difficulty": "core"
      },
      {
       "q": "ICT means",
       "o": {
        "A": "Information and Communication Technology",
        "B": "Information Communication Technology",
        "C": "International Communication Technology",
        "D": "Internal Community Technology"
       },
       "a": "A",
       "concept": "ICT is the standard term covering computing and communication technologies together.",
       "method": "Full correct phrase: Information AND Communication Technology.",
       "difficulty": "core"
      },
      {
       "q": "The number of geopolitical zones and states aside, how many Local Government Areas does Nigeria currently have?",
       "o": {
        "A": "774",
        "B": "768",
        "C": "780",
        "D": "760"
       },
       "a": "A",
       "concept": "Nigeria is divided into 774 Local Government Areas (LGAs) across its 36 states and FCT.",
       "method": "Fixed administrative fact: 774 LGAs nationwide.",
       "difficulty": "core"
      },
      {
       "q": "Speech sounds are traditionally studied and classified as",
       "o": {
        "A": "Morphemes",
        "B": "Phonemes",
        "C": "Phonetics",
        "D": "Phonology"
       },
       "a": "B",
       "concept": "'Phonemes' are the individual distinct units of sound in a language.",
       "method": "Phoneme = the smallest distinct SOUND unit, distinct from morpheme (smallest MEANING unit).",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT a suprasegmental feature of English phonology?",
       "o": {
        "A": "Stress",
        "B": "Rhythm",
        "C": "Intonation",
        "D": "Consonants"
       },
       "a": "D",
       "concept": "Suprasegmental features (stress, rhythm, intonation) operate 'above' individual sounds; consonants are individual segmental sounds.",
       "method": "Consonants are single sound units (segmental); the other three describe patterns across a whole sentence (suprasegmental).",
       "difficulty": "core"
      },
      {
       "q": "Diphthongs — vowel sounds that glide from one vowel quality to another within a syllable — are otherwise called",
       "o": {
        "A": "Glides",
        "B": "Plosives",
        "C": "Fricatives",
        "D": "Nasals"
       },
       "a": "A",
       "concept": "A diphthong involves a gliding movement between two vowel sounds, hence the alternate name 'glide'.",
       "method": "'Glide' describes exactly what a diphthong does — slides between two vowel qualities.",
       "difficulty": "core"
      },
      {
       "q": "The /m/ and /n/ sounds are classified as which type of consonant?",
       "o": {
        "A": "Plosive",
        "B": "Nasal",
        "C": "Fricative",
        "D": "Affricative"
       },
       "a": "B",
       "concept": "Nasal consonants (m, n, ng) are produced by letting air flow through the nose.",
       "method": "Say 'm' and 'n' while pinching your nose — you'll notice the airflow blocked, confirming they're nasal sounds.",
       "difficulty": "core"
      },
      {
       "q": "Venezuela is located on which continent?",
       "o": {
        "A": "North America",
        "B": "South America",
        "C": "Asia",
        "D": "Europe"
       },
       "a": "B",
       "concept": "Venezuela is a South American country on the continent's northern coast.",
       "method": "Fixed geography fact: Venezuela → South America.",
       "difficulty": "core"
      },
      {
       "q": "Which of these countries lies directly on the equator?",
       "o": {
        "A": "Egypt",
        "B": "Ghana",
        "C": "Nigeria",
        "D": "Gabon"
       },
       "a": "D",
       "concept": "Gabon, in Central Africa, is one of the few African countries the equator passes directly through.",
       "method": "Trace the equator line on a map — it crosses Gabon, not Egypt, Ghana, or Nigeria.",
       "difficulty": "core"
      },
      {
       "q": "Which of these countries was NOT colonised by a foreign power?",
       "o": {
        "A": "Liberia",
        "B": "Libya",
        "C": "Nigeria",
        "D": "Ghana"
       },
       "a": "A",
       "concept": "Liberia was founded by freed African-American settlers and largely avoided formal European colonisation.",
       "method": "Liberia's founding story (freed settlers, not colonised) sets it apart from the other three.",
       "difficulty": "core"
      },
      {
       "q": "An abbreviation, compared to its original full form, is usually",
       "o": {
        "A": "The same length",
        "B": "Not so long compared to it",
        "C": "Shorter than the original form",
        "D": "Much longer than the original form"
       },
       "a": "C",
       "concept": "By definition, an abbreviation is a shortened form of a word or phrase.",
       "method": "The whole point of abbreviating something is to make it shorter.",
       "difficulty": "core"
      },
      {
       "q": "The study of living organisms and their interaction with the environment is called",
       "o": {
        "A": "Biology",
        "B": "Ecology",
        "C": "Geology",
        "D": "Zoology"
       },
       "a": "B",
       "concept": "'Ecology' specifically studies organisms' interactions with their environment.",
       "method": "Biology is the broad study of life; ecology narrows in on environmental interactions.",
       "difficulty": "core"
      },
      {
       "q": "The process by which plants make their own food using sunlight is called",
       "o": {
        "A": "Respiration",
        "B": "Photosynthesis",
        "C": "Digestion",
        "D": "Transpiration"
       },
       "a": "B",
       "concept": "Photosynthesis is the process plants use to convert sunlight into food energy.",
       "method": "'Photo-' (light) + 'synthesis' (making) = making food using light.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following is NOT a planet in the solar system?",
       "o": {
        "A": "Earth",
        "B": "Neptune",
        "C": "Jupiter",
        "D": "Pluto"
       },
       "a": "D",
       "concept": "Since 2006, the International Astronomical Union has classified Pluto as a 'dwarf planet', not a full planet.",
       "method": "Earth, Neptune and Jupiter remain among the 8 official planets; Pluto was reclassified and is the odd one out.",
       "difficulty": "core"
      },
      {
       "q": "Earth is the ______ planet from the Sun.",
       "o": {
        "A": "3rd",
        "B": "2nd",
        "C": "4th",
        "D": "5th"
       },
       "a": "A",
       "concept": "The inner planets in order from the Sun are Mercury, Venus, Earth, Mars.",
       "method": "Count outward: Mercury (1st), Venus (2nd), Earth (3rd) — a simple ordering fact worth memorising.",
       "difficulty": "core"
      },
      {
       "q": "A device used to step up or step down electricity voltage on a transmission line is called a ______.",
       "o": {
        "A": "Transformer",
        "B": "Transmission station",
        "C": "Electricity meter",
        "D": "Step-down panel"
       },
       "a": "A",
       "concept": "Naming electrical equipment by its function is a recurring GK pattern — this device's job is literally to 'transform' voltage.",
       "method": "'Steps up or down voltage' is the textbook definition of a transformer.",
       "difficulty": "core"
      },
      {
       "q": "Climate change is most directly linked to which of the following?",
       "o": {
        "A": "Increased global temperature",
        "B": "Increased global rainfall",
        "C": "Increased global desertification",
        "D": "Increased global pollution"
       },
       "a": "A",
       "concept": "Climate change refers specifically to long-term shifts in temperature and weather patterns, driven by rising greenhouse gases.",
       "method": "Desertification, pollution and rainfall changes are consequences of climate change; the phenomenon itself is defined by rising global temperature.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following statements is never true?",
       "o": {
        "A": "Lizards lay eggs",
        "B": "Malaria is an airborne disease",
        "C": "Rice is a cereal",
        "D": "Water boils at 100°C at sea level"
       },
       "a": "B",
       "concept": "Malaria is spread by the bite of an infected mosquito (a vector-borne disease), not through the air.",
       "method": "Check each statement against known facts — lizards do lay eggs, rice is a cereal, water does boil at 100°C at sea level; only the malaria claim is false.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following is an airborne disease?",
       "o": {
        "A": "Cholera",
        "B": "Influenza",
        "C": "Dysentery",
        "D": "Guinea worm"
       },
       "a": "B",
       "concept": "Airborne diseases spread through droplets in the air when an infected person coughs, sneezes, or talks.",
       "method": "Cholera, dysentery and guinea worm all spread through contaminated water or food; influenza (flu) spreads through the air.",
       "difficulty": "core"
      },
      {
       "q": "Which of these countries first originated the division of time using a base of 60 (60 seconds, 60 minutes)?",
       "o": {
        "A": "The Babylonians",
        "B": "The Romans",
        "C": "The Arabs",
        "D": "The Americans"
       },
       "a": "A",
       "concept": "The base-60 (sexagesimal) numbering system that still governs how we tell time comes from ancient Mesopotamia.",
       "method": "The Babylonians are credited with the sexagesimal system, which is why an hour has 60 minutes and a minute has 60 seconds.",
       "difficulty": "core"
      },
      {
       "q": "What is the young of a lion called?",
       "o": {
        "A": "Calf",
        "B": "Cub",
        "C": "Kid",
        "D": "Pup"
       },
       "a": "B",
       "concept": "Different animal groups have their own specific names for their young — a recurring GK category.",
       "method": "Calf is for cattle/whales, kid is for goats, pup is for dogs/wolves; a young lion is specifically a cub.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following is used to measure electric current?",
       "o": {
        "A": "Voltmeter",
        "B": "Ammeter",
        "C": "Barometer",
        "D": "Thermometer"
       },
       "a": "B",
       "concept": "Each electrical quantity has its own dedicated measuring instrument.",
       "method": "Voltmeter measures voltage, ammeter measures current (amps) — match the instrument's name to the quantity it measures.",
       "difficulty": "core"
      },
      {
       "q": "Rust forms on iron mainly as a result of exposure to ______.",
       "o": {
        "A": "Sunlight only",
        "B": "Moisture and oxygen",
        "C": "Extreme cold",
        "D": "Carbon dioxide only"
       },
       "a": "B",
       "concept": "Rusting is a chemical reaction (oxidation) that needs both water and oxygen to occur.",
       "method": "Iron left in a dry place, or underwater with no air, rusts far more slowly — it's the combination of moisture AND oxygen that drives it.",
       "difficulty": "core"
      },
      {
       "q": "What is the meaning of the acronym ATM?",
       "o": {
        "A": "Automatic Teller Machine",
        "B": "Authentic Teller Machine",
        "C": "Argument Teller Machine",
        "D": "Automated Teller Machine"
       },
       "a": "D",
       "concept": "A commonly-used everyday acronym whose precise wording is worth knowing exactly.",
       "method": "ATM stands for Automated Teller Machine.",
       "difficulty": "core"
      },
      {
       "q": "What is the meaning of the acronym ICT?",
       "o": {
        "A": "Information and Communication Technology",
        "B": "Information Communication Technology",
        "C": "International Communication Technology",
        "D": "Internal Community Technology"
       },
       "a": "A",
       "concept": "ICT is one of the most commonly tested tech acronyms — note the 'and' that many mistakenly drop.",
       "method": "ICT stands for Information and Communication Technology.",
       "difficulty": "core"
      },
      {
       "q": "What is the meaning of the acronym CBT (as used in computer-based exams)?",
       "o": {
        "A": "Computer Basic Technology",
        "B": "Computer Basic Test",
        "C": "Computer Based Test",
        "D": "Central Based Test"
       },
       "a": "C",
       "concept": "Since the Post-UTME itself is delivered as a CBT, this is a directly relevant acronym to know.",
       "method": "CBT stands for Computer Based Test — the exact exam format you'll be sitting.",
       "difficulty": "core"
      },
      {
       "q": "Which mountain is the tallest in the world?",
       "o": {
        "A": "Mount Everest",
        "B": "Mount Kilimanjaro",
        "C": "Mount Elbrus",
        "D": "Mont Blanc"
       },
       "a": "A",
       "concept": "Everest is the world's highest peak above sea level; Kilimanjaro is only Africa's tallest, a common mix-up.",
       "method": "Mount Everest, in the Himalayas, stands at about 8,849m — the tallest mountain on Earth.",
       "difficulty": "core"
      }
     ],
     "freq": 46
    },
    {
     "id": "biology",
     "name": "Biology & Life Science",
     "blurb": "Human body, plants, animal classification, and everyday life-science facts pulled from the past-paper archive — one of the most frequently recurring GK topics.",
     "concept_notes": [
      "Classification questions ('which of these is a reptile/mammal/bird') reward knowing the defining feature of each group, not just recognising animal names.",
      "Deficiency-disease pairings (vitamin C → scurvy, iodine → goitre) are tested constantly — learn them as fixed pairs.",
      "Process-definition questions (osmosis, photosynthesis, metamorphosis) usually hinge on one precise keyword in the definition — read every option for that keyword before picking."
     ],
     "questions": [
      {
       "q": "Which of the following is a reptile?",
       "o": {
        "A": "Whale",
        "B": "Toad",
        "C": "Lizard",
        "D": "Pigeon"
       },
       "a": "C",
       "concept": "Reptiles are cold-blooded, scaly-skinned vertebrates that lay eggs on land.",
       "method": "Whale = mammal, Toad = amphibian, Pigeon = bird — only the lizard fits the reptile group.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following is an amphibian?",
       "o": {
        "A": "Whale",
        "B": "Toad",
        "C": "Lizard",
        "D": "Tilapia"
       },
       "a": "B",
       "concept": "Amphibians live a double life — young stages in water, adults mostly on land — and have moist, permeable skin.",
       "method": "A toad hatches from eggs laid in water as a tadpole before developing into a land-dwelling adult, the classic amphibian pattern.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT a bird?",
       "o": {
        "A": "Kite",
        "B": "Eagle",
        "C": "Vulture",
        "D": "Bat"
       },
       "a": "D",
       "concept": "Birds are feathered, egg-laying vertebrates with a beak; flight alone doesn't make an animal a bird.",
       "method": "The bat flies but is a mammal — it has fur, gives birth to live young, and nurses them with milk.",
       "difficulty": "core"
      },
      {
       "q": "Which of these enzymes is responsible for the digestion of fat?",
       "o": {
        "A": "Lipase",
        "B": "Pepsin",
        "C": "Amylase",
        "D": "Cellulase"
       },
       "a": "A",
       "concept": "Each digestive enzyme is specific to one class of food: lipase → fats, pepsin → proteins, amylase → starch.",
       "method": "Match the enzyme name to its target nutrient — lipase breaks lipids (fats) into fatty acids and glycerol.",
       "difficulty": "core"
      },
      {
       "q": "Digestion of food starts in the ______.",
       "o": {
        "A": "mouth",
        "B": "stomach",
        "C": "gullet",
        "D": "anus"
       },
       "a": "A",
       "concept": "Chemical digestion of starch begins as soon as food meets saliva.",
       "method": "Saliva contains the enzyme amylase (also called ptyalin), which starts breaking down starch the moment food enters the mouth.",
       "difficulty": "core"
      },
      {
       "q": "Which part of a chicken's egg develops into the chick?",
       "o": {
        "A": "The yolk",
        "B": "The white (albumen)",
        "C": "The air space",
        "D": "The shell"
       },
       "a": "A",
       "concept": "An egg has one food-storage part and one part that actually becomes the embryo.",
       "method": "The germinal disc sits on the yolk and develops into the chick, while the yolk itself nourishes it and the albumen cushions and further feeds the embryo.",
       "difficulty": "core"
      },
      {
       "q": "Animals that give birth to live young ones (instead of laying eggs) are called ______.",
       "o": {
        "A": "Birds",
        "B": "Reptiles",
        "C": "Amphibians",
        "D": "Mammals"
       },
       "a": "D",
       "concept": "Live birth (viviparity) is a defining trait of most mammals, distinguishing them from egg-laying groups.",
       "method": "Birds, reptiles, and amphibians overwhelmingly lay eggs; mammals typically nourish the embryo internally and give birth to live young.",
       "difficulty": "core"
      },
      {
       "q": "What term is given to the changes insects undergo in their life history?",
       "o": {
        "A": "Recuperation",
        "B": "Rousting",
        "C": "Metamorphosis",
        "D": "Germination"
       },
       "a": "C",
       "concept": "Metamorphosis is a dramatic change in body form between an animal's young stage and its adult stage.",
       "method": "An insect's egg → larva → pupa → adult sequence (e.g. caterpillar to butterfly) is the textbook example of metamorphosis.",
       "difficulty": "core"
      },
      {
       "q": "An organism that lives on or in another living organism and eventually harms it is called a ______.",
       "o": {
        "A": "Herbivore",
        "B": "Carnivore",
        "C": "Parasite",
        "D": "Producer"
       },
       "a": "C",
       "concept": "A parasite depends on a host for survival while damaging it — a feeding relationship, not a diet type.",
       "method": "Herbivore and carnivore describe what an animal eats; 'parasite' specifically describes living AT the expense of a host.",
       "difficulty": "core"
      },
      {
       "q": "Which part of a flower is regarded as the male reproductive part?",
       "o": {
        "A": "Pistil",
        "B": "Sepal",
        "C": "Stamen",
        "D": "Petal"
       },
       "a": "C",
       "concept": "A flower's reproductive parts split by sex: the stamen is male, the pistil is female.",
       "method": "The stamen (anther + filament) produces pollen (the male gamete); the pistil receives it and contains the ovary.",
       "difficulty": "core"
      },
      {
       "q": "______ can be defined as the movement of water molecules from a region of high concentration to low concentration across a semi-permeable membrane.",
       "o": {
        "A": "Diffusion",
        "B": "Transpiration",
        "C": "Osmosis",
        "D": "Plasmolysis"
       },
       "a": "C",
       "concept": "Osmosis is specifically about water moving across a selective membrane, not about solutes spreading through a fluid.",
       "method": "'Water' + 'semi-permeable membrane' is the giveaway combination that always points to osmosis, not general diffusion.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following does NOT directly affect the rate of photosynthesis?",
       "o": {
        "A": "Light intensity",
        "B": "Water availability",
        "C": "Temperature",
        "D": "Atmospheric pressure"
       },
       "a": "D",
       "concept": "Photosynthesis rate is controlled by a known set of limiting factors: light, CO2, water, and temperature.",
       "method": "Light, water and temperature are the classic limiting factors taught for photosynthesis; atmospheric pressure isn't one of them.",
       "difficulty": "core"
      },
      {
       "q": "Which of the following is NOT considered a class of food (nutrient group)?",
       "o": {
        "A": "Carbohydrates",
        "B": "Vitamins",
        "C": "Vegetables",
        "D": "Proteins"
       },
       "a": "C",
       "concept": "Food classes are the nutrient categories (carbohydrates, proteins, fats, vitamins, minerals, water) — not the food items that supply them.",
       "method": "'Vegetables' is a type of food, not a nutrient class; it actually supplies several of the true classes (vitamins, minerals, fibre) at once.",
       "difficulty": "core"
      },
      {
       "q": "Animals that chew the cud (re-chew partly digested food) are mostly ______.",
       "o": {
        "A": "Carnivores",
        "B": "Herbivores",
        "C": "Omnivores",
        "D": "Scavengers"
       },
       "a": "B",
       "concept": "Cud-chewing (rumination) is a digestive strategy plant-eaters use to break down tough, fibrous cellulose.",
       "method": "Cows, goats and sheep — all herbivores — chew the cud because plant cell walls are hard to digest and need extra mechanical breakdown.",
       "difficulty": "core"
      },
      {
       "q": "A turtle is classified as a/an ______.",
       "o": {
        "A": "Amphibian",
        "B": "Fish",
        "C": "Mammal",
        "D": "Reptile"
       },
       "a": "D",
       "concept": "Classification looks at body features (scales, egg-laying on land, lungs), not the habitat an animal happens to live in.",
       "method": "Despite living partly in water, a turtle has dry scaly skin and lungs and lays shelled eggs on land — all reptile traits.",
       "difficulty": "core"
      },
      {
       "q": "A balanced diet is best described as a meal that contains ______.",
       "o": {
        "A": "Mostly proteins and carbohydrates",
        "B": "Only vitamins and minerals",
        "C": "All the nutrients in the correct proportion",
        "D": "As much food as possible"
       },
       "a": "C",
       "concept": "'Balanced' refers to proportion and completeness across nutrient groups, not to quantity or to any single nutrient.",
       "method": "Eliminate options that name only one or two nutrient groups — a truly balanced diet must supply every class in the right amount.",
       "difficulty": "core"
      },
      {
       "q": "Oranges are especially rich in which nutrient?",
       "o": {
        "A": "Carbohydrates",
        "B": "Fats",
        "C": "Proteins",
        "D": "Vitamins"
       },
       "a": "D",
       "concept": "Citrus fruits are a classic dietary source of vitamin C.",
       "method": "Oranges are the textbook example used for vitamin C — link the fruit family (citrus) to the vitamin it's famous for.",
       "difficulty": "core"
      },
      {
       "q": "Scurvy is a disease caused by a deficiency of which vitamin?",
       "o": {
        "A": "Vitamin A",
        "B": "Vitamin B",
        "C": "Vitamin C",
        "D": "Vitamin D"
       },
       "a": "C",
       "concept": "Each deficiency disease maps to one specific vitamin — scurvy is the standard example examiners use for vitamin C.",
       "method": "Pair the disease name with its vitamin from memory: scurvy → vitamin C, rickets → vitamin D, night blindness → vitamin A.",
       "difficulty": "core"
      },
      {
       "q": "Which of these diseases is NOT transmitted by mosquitoes?",
       "o": {
        "A": "Malaria",
        "B": "Dengue fever",
        "C": "Filariasis",
        "D": "Goitre"
       },
       "a": "D",
       "concept": "Not every disease with a 'cause' is infectious — goitre is a deficiency disorder, not something an insect can transmit.",
       "method": "Malaria, dengue, and filariasis are all classic mosquito-borne infections; goitre instead comes from a lack of iodine in the diet.",
       "difficulty": "core"
      },
      {
       "q": "Which bone directly encases and protects the brain?",
       "o": {
        "A": "The patella",
        "B": "The skull",
        "C": "The scapula",
        "D": "The tibia"
       },
       "a": "B",
       "concept": "Several bones in the body exist specifically to protect a vital organ — matching bone to organ is a common GK pairing.",
       "method": "Patella (knee), scapula (shoulder blade) and tibia (shin) are all limb bones; only the skull encloses the brain.",
       "difficulty": "core"
      },
      {
       "q": "AIDS is the acronym for ______.",
       "o": {
        "A": "Acquired Immune Deficiency Syndrome",
        "B": "Advanced Immune Disease Syndrome",
        "C": "Acute Infectious Disease Syndrome",
        "D": "Acquired Infectious Deficiency Syndrome"
       },
       "a": "A",
       "concept": "Health-related acronyms are commonly tested — the exact wording matters, not just the general idea.",
       "method": "AIDS stands for Acquired Immune Deficiency Syndrome, caused by the HIV virus.",
       "difficulty": "core"
      },
      {
       "q": "What is another name for a phobia involving fear of water?",
       "o": {
        "A": "Nyctophobia",
        "B": "Thanatophobia",
        "C": "Astrophobia",
        "D": "Aquaphobia"
       },
       "a": "D",
       "concept": "Phobia names generally combine a Greek root for the feared object with '-phobia'.",
       "method": "'Aqua' relates to water, giving aquaphobia — fear of water. (Nyctophobia = fear of darkness, thanatophobia = fear of death.)",
       "difficulty": "core"
      }
     ],
     "freq": 22
    },
    {
     "id": "trivia2",
     "name": "Nigerian Culture, Media & Notable Figures",
     "blurb": "Nigerian public figures, media, and cultural facts that recur across different years’ papers.",
     "concept_notes": [
      "Nigerian literary and public figures (authors, journalists, activists) show up repeatedly — know the 'famous firsts' (first female VC, first Nobel laureate, first indigenous university).",
      "For dated facts about a specific person's death/award/appointment, focus on getting the YEAR right — that's usually what's actually tested.",
      "Media and press-freedom questions often centre on well-known Nigerian journalists and publishers — these facts don't change and are safe to memorise once."
     ],
     "questions": [
      {
       "q": "The Nigerian journalist and Newswatch magazine co-founder killed by a letter bomb in October 1986 was",
       "o": {
        "A": "Dele Giwa",
        "B": "Tunde Thompson",
        "C": "Nduka Irabor",
        "D": "Bayo Onanuga"
       },
       "a": "A",
       "concept": "Dele Giwa, a prominent journalist, was assassinated by a parcel bomb in 1986 — a landmark case in Nigerian press history.",
       "method": "Fixed historical fact: Dele Giwa, journalist, killed 1986.",
       "difficulty": "core"
      },
      {
       "q": "Herbert Macaulay is remembered in Nigerian history as the founder of the",
       "o": {
        "A": "Action Group",
        "B": "Nigerian National Democratic Party (NNDP)",
        "C": "NPC",
        "D": "NCNC"
       },
       "a": "B",
       "concept": "Herbert Macaulay founded the NNDP in 1923, one of Nigeria's earliest political parties.",
       "method": "Fixed historical fact: Macaulay → NNDP, 1923.",
       "difficulty": "core"
      },
      {
       "q": "Alvan Ikoku, a pioneering Nigerian educationist, is honoured on which denomination of Naira note?",
       "o": {
        "A": "₦5 note",
        "B": "₦10 note",
        "C": "₦20 note",
        "D": "₦50 note"
       },
       "a": "B",
       "concept": "Alvan Ikoku's portrait features on Nigeria's ₦10 note, honouring his contribution to education.",
       "method": "Match each historical figure to their featured banknote; Alvan Ikoku → ₦10.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria's flag was designed by a student in London in 1959. Who was he?",
       "o": {
        "A": "Taiwo Akinkunmi",
        "B": "Herbert Macaulay",
        "C": "Tafawa Balewa",
        "D": "Ahmadu Bello"
       },
       "a": "A",
       "concept": "Taiwo Akinkunmi, a Nigerian student in London, won the national flag design competition in 1959.",
       "method": "Fixed historical fact: flag designer — Taiwo Akinkunmi, 1959.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria's Democracy Day, honouring the annulled June 12, 1993 election, is now celebrated on",
       "o": {
        "A": "May 29",
        "B": "October 1",
        "C": "June 12",
        "D": "January 15"
       },
       "a": "C",
       "concept": "Nigeria moved Democracy Day from May 29 to June 12 in 2018, honouring the historic 1993 election.",
       "method": "Note the change: it used to be May 29, now it's June 12, matching the election date it honours.",
       "difficulty": "core"
      },
      {
       "q": "Ernest Shonekan served as Nigeria's Interim National President in the year",
       "o": {
        "A": "1990",
        "B": "1991",
        "C": "1993",
        "D": "1995"
       },
       "a": "C",
       "concept": "Shonekan headed an interim government in 1993 following the annulment of the June 12 election.",
       "method": "Fixed historical fact: 1993, immediately after the annulled election.",
       "difficulty": "core"
      },
      {
       "q": "A group of doves is correctly referred to as a",
       "o": {
        "A": "Herd",
        "B": "Flight",
        "C": "Pod",
        "D": "Colony"
       },
       "a": "B",
       "concept": "Collective nouns vary by animal; a group of doves (or other flying birds) is a 'flight'.",
       "method": "Learn as a specific collective noun: doves → a flight.",
       "difficulty": "core"
      },
      {
       "q": "A group of peacocks is correctly referred to as a",
       "o": {
        "A": "Fleet",
        "B": "Muster",
        "C": "Pack",
        "D": "Colony"
       },
       "a": "B",
       "concept": "'Muster' is the traditional collective noun for a group of peacocks.",
       "method": "Learn as a specific collective noun: peacocks → a muster.",
       "difficulty": "core"
      },
      {
       "q": "A group of lions is correctly referred to as a",
       "o": {
        "A": "Herd",
        "B": "Pride",
        "C": "Troop",
        "D": "Pack"
       },
       "a": "B",
       "concept": "'Pride' is the standard collective noun for a group of lions.",
       "method": "Learn as a specific collective noun: lions → a pride.",
       "difficulty": "core"
      },
      {
       "q": "Who wrote the novel 'Things Fall Apart'?",
       "o": {
        "A": "Wole Soyinka",
        "B": "Chinua Achebe",
        "C": "Ola Rotimi",
        "D": "Cyprian Ekwensi"
       },
       "a": "B",
       "concept": "Things Fall Apart is one of the most widely referenced works of African literature in Nigerian exams.",
       "method": "Chinua Achebe published Things Fall Apart in 1958; it remains the most translated African novel in history.",
       "difficulty": "core"
      },
      {
       "q": "Lagos State's slogan is 'Centre of Excellence'. What is Ondo State's slogan?",
       "o": {
        "A": "Land of the Living Spring",
        "B": "Sunshine State",
        "C": "Food Basket",
        "D": "Gateway State"
       },
       "a": "B",
       "concept": "Nigerian state slogans are a frequently-tested pairing category in GK sections.",
       "method": "Ondo State is popularly known as the Sunshine State.",
       "difficulty": "core"
      },
      {
       "q": "'AIDS' is the acronym for which condition?",
       "o": {
        "A": "Acquired Immune Deficiency Syndrome",
        "B": "Advanced Immune Disease Syndrome",
        "C": "Acute Infectious Disease Syndrome",
        "D": "Acquired Infectious Deficiency Syndrome"
       },
       "a": "A",
       "concept": "Expanding common health-related acronyms correctly is a recurring GK question type.",
       "method": "AIDS stands for Acquired Immune Deficiency Syndrome, caused by the HIV virus.",
       "difficulty": "core"
      },
      {
       "q": "What is the meaning of the acronym IMF?",
       "o": {
        "A": "Internet Money Found",
        "B": "International Monetary Found",
        "C": "International Money Found",
        "D": "International Monetary Fund"
       },
       "a": "D",
       "concept": "Getting the exact wording of common international-organisation acronyms right (not just the general idea) is what these questions test.",
       "method": "IMF stands for International Monetary Fund, a UN-affiliated financial institution.",
       "difficulty": "core"
      },
      {
       "q": "What is the meaning of the acronym NTA?",
       "o": {
        "A": "Nigerian Television Agency",
        "B": "National Television Authority",
        "C": "Nigerian Testing Authority",
        "D": "Nigerian Television Authority"
       },
       "a": "D",
       "concept": "NTA is Nigeria's oldest and largest TV network — worth knowing the exact expansion.",
       "method": "NTA stands for Nigerian Television Authority.",
       "difficulty": "core"
      },
      {
       "q": "Ebonyi State was created from parts of which two states?",
       "o": {
        "A": "Imo and Enugu",
        "B": "Enugu and Abia",
        "C": "Abakaliki and Enugu",
        "D": "Imo and Owerri"
       },
       "a": "B",
       "concept": "Several Nigerian states were carved out of two or more older states — a common GK pairing category.",
       "method": "Ebonyi State was created in 1996 from parts of Enugu and Abia States.",
       "difficulty": "core"
      },
      {
       "q": "MSG, a common food additive, stands for ______.",
       "o": {
        "A": "Message",
        "B": "Monosodium glutamate",
        "C": "Mines",
        "D": "None of the above"
       },
       "a": "B",
       "concept": "A food-science acronym occasionally tested alongside more common GK abbreviations.",
       "method": "MSG stands for monosodium glutamate, a flavour-enhancing compound.",
       "difficulty": "core"
      },
      {
       "q": "Tin and columbite have historically been mined for commercial purposes in which Nigerian state?",
       "o": {
        "A": "Kano",
        "B": "Plateau",
        "C": "Lagos",
        "D": "Niger"
       },
       "a": "B",
       "concept": "Plateau State's mining history (particularly tin) is a recurring GK fact tied to Jos and the colonial-era economy.",
       "method": "Plateau State, especially around Jos, has long been Nigeria's centre for tin and columbite mining.",
       "difficulty": "core"
      },
      {
       "q": "Where is Obudu Ranch located?",
       "o": {
        "A": "Lagos State",
        "B": "Kwara State",
        "C": "Nasarawa State",
        "D": "Cross River State"
       },
       "a": "D",
       "concept": "Obudu Ranch (Obudu Mountain Resort) is a well-known Nigerian tourist destination often paired with its host state.",
       "method": "Obudu Ranch is located in Cross River State, in south-eastern Nigeria.",
       "difficulty": "core"
      },
      {
       "q": "Which of these is NOT a secondary colour (formed by mixing two primary colours)?",
       "o": {
        "A": "Purple",
        "B": "Green",
        "C": "Orange",
        "D": "Yellow"
       },
       "a": "D",
       "concept": "Yellow is itself a primary colour, not a mixture of two others.",
       "method": "Purple (red+blue), green (blue+yellow), and orange (red+yellow) are secondary colours; yellow is primary.",
       "difficulty": "core"
      },
      {
       "q": "What do the horses (chargers) in Nigeria's coat of arms represent?",
       "o": {
        "A": "Unity",
        "B": "Strength and dignity",
        "C": "Speed",
        "D": "Agriculture"
       },
       "a": "B",
       "concept": "Each element of the coat of arms carries a specific symbolic meaning worth knowing individually.",
       "method": "The two supporting horses on the coat of arms represent dignity, while the eagle above represents strength.",
       "difficulty": "core"
      },
      {
       "q": "What does the black shield in Nigeria's coat of arms represent?",
       "o": {
        "A": "Mourning",
        "B": "Nigeria's fertile soil",
        "C": "The colonial past",
        "D": "Unity"
       },
       "a": "B",
       "concept": "The coat of arms uses colour and imagery deliberately — black here is agricultural, not funereal.",
       "method": "The black shield represents Nigeria's fertile soil, with the wavy white band symbolising the meeting of the Niger and Benue Rivers.",
       "difficulty": "core"
      },
      {
       "q": "Nigeria's national flower, featured on the coat of arms, is the ______.",
       "o": {
        "A": "Hibiscus",
        "B": "Costus spectabilis",
        "C": "Bougainvillea",
        "D": "Frangipani"
       },
       "a": "B",
       "concept": "A specific, less commonly known botanical fact tied to national symbols.",
       "method": "Costus spectabilis (also called 'bush lily') is Nigeria's national flower, chosen for its widespread presence across the country.",
       "difficulty": "core"
      },
      {
       "q": "Who was the first African to become Chairman of the Organisation of African Unity (OAU)?",
       "o": {
        "A": "Tafawa Balewa",
        "B": "Murtala Muhammed",
        "C": "Yakubu Gowon",
        "D": "Aguiyi-Ironsi"
       },
       "a": "C",
       "concept": "Note this refers to the first NIGERIAN to chair the OAU, a notable diplomatic milestone.",
       "method": "General Yakubu Gowon became the first Nigerian leader to chair the OAU.",
       "difficulty": "core"
      },
      {
       "q": "Queen Elizabeth II died in which year, ending 70 years on the British throne?",
       "o": {
        "A": "2020",
        "B": "2021",
        "C": "2022",
        "D": "2023"
       },
       "a": "C",
       "concept": "Her death in September 2022 marked the end of Britain's longest-reigning monarch's rule.",
       "method": "Queen Elizabeth II died on 8 September 2022, aged 96, after 70 years on the throne.",
       "difficulty": "core"
      },
      {
       "q": "Where was the first storey building in Nigeria located?",
       "o": {
        "A": "Lagos Island",
        "B": "Badagry",
        "C": "Calabar",
        "D": "Abeokuta"
       },
       "a": "B",
       "concept": "This is one of Nigeria's most cited colonial-era 'firsts', tied to early Christian missionary activity.",
       "method": "Nigeria's first storey building was constructed in Badagry.",
       "difficulty": "core"
      },
      {
       "q": "A collection of flags is known as a ______.",
       "o": {
        "A": "Bunting",
        "B": "Blunting",
        "C": "Cluster",
        "D": "Gallery"
       },
       "a": "A",
       "concept": "Collective nouns for objects (not just animals) are occasionally tested too.",
       "method": "A collection or display of flags/small pennants is called a bunting.",
       "difficulty": "core"
      },
      {
       "q": "In book publishing, the term for a collection of literary works (poems, stories, etc.) by different authors is a(n) ______.",
       "o": {
        "A": "Epic",
        "B": "Anthology",
        "C": "Calibration",
        "D": "Calligraphy"
       },
       "a": "B",
       "concept": "An anthology is specifically a compiled collection, distinct from a single long narrative work (an epic).",
       "method": "An anthology is a published collection of selected literary pieces, often by multiple authors.",
       "difficulty": "core"
      }
     ],
     "freq": 76
    }
   ]
  }
 ]
};
