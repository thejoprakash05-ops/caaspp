window.TEST_DATA = {
  id: "g8_ela_1",
  grade: 8,
  subject: "ELA",
  title: "Grade 8 ELA Practice Test 1",
  durationMinutes: 90,
  sections: [
    {
      name: "Reading: Literary Text",
      passageTitle: "The Weight of the Spotlight",
      passage: "<p>Talia stood in the wings of the auditorium, her cello case clutched against her chest like a shield. Beyond the thick velvet curtain, five hundred voices hummed and rustled, a restless tide waiting to pull her under. Her palms had gone slick, and her heartbeat thudded so loudly she wondered if the people in the front row could hear it too. This was supposed to be her redemption, the moment she finally proved that last year's disaster had been a fluke. Instead, her stomach twisted itself into the same tight knot she remembered from twelve months ago.</p><p>She could still see it if she closed her eyes: the bright lights turning the audience into a blur of shadows, her bow trembling against the strings, the first note coming out flat and wrong. She had frozen completely, her mind as blank as a fresh sheet of manuscript paper, and had to walk offstage while the silence chased her out. For weeks afterward, she had avoided the music room altogether, telling herself that some people simply weren't built for performing, no matter how many hours they logged in private practice.</p><p>\"You look like you're about to march into battle,\" said a voice behind her. Her older brother Jamal leaned against the wall, arms crossed, grinning the way he always did when he was about to say something annoyingly wise. \"Relax your shoulders. You're not fighting the audience, Tal. You're just telling them a story with your bow.\" Talia rolled her eyes, but she loosened her grip on the case anyway. Jamal had sat through months of her practicing the same four measures until midnight, and if anyone understood how much this piece meant to her, it was him. \"Besides,\" he added, \"the worst that happens is one bad note. Nobody remembers one bad note. They remember whether you finished.\"</p><p>When the stage manager called her name, Talia's legs felt borrowed from someone else, but she walked out anyway, blinking against the lights until the blur of faces resolved into something almost gentle. She set her bow against the strings and let the first note ring out, low and steady. It was not perfect; her fingers slipped once during the fast passage near the middle, and she recovered a half-beat later than she would have liked. But she kept playing, riding the music instead of drowning in it, and when the final chord faded into applause, Talia realized that courage had never been about silencing the fear. It was about picking up the bow anyway.</p>",
      questions: [
        {
          id: "q1",
          standard: "RL.8.1",
          type: "mc",
          prompt: "Which detail from the passage best supports the inference that Talia's fear stems from a specific past failure?",
          choices: ["\"her palms had gone slick\"", "\"she could still see it if she closed her eyes: the bright lights turning the audience into a blur of shadows\"", "\"Jamal leaned against the wall, arms crossed\"", "\"the stage manager called her name\""],
          correct: 1,
          explanation: "Paragraph two explicitly recalls last year's frozen performance, showing that Talia's fear is rooted in that specific memory."
        },
        {
          id: "q2",
          standard: "RL.8.2",
          type: "mc",
          prompt: "Which statement best expresses the theme of the story?",
          choices: ["Talent matters more than practice.", "True courage means acting despite fear, not eliminating it.", "Siblings should always agree with each other.", "Public performance is too stressful to be worthwhile."],
          correct: 1,
          explanation: "Talia's final realization that \"courage had never been about silencing the fear\" but about \"picking up the bow anyway\" directly states this theme."
        },
        {
          id: "q3",
          standard: "RL.8.3",
          type: "mc",
          prompt: "How does Jamal's comment about \"one bad note\" function in the story?",
          choices: ["It shifts Talia's focus from perfection to persistence, preparing her to perform despite fear.", "It convinces Talia to quit the recital entirely.", "It reveals that Jamal secretly dislikes music.", "It has no real effect on Talia's decision to perform."],
          correct: 0,
          explanation: "Right after Jamal's comment, Talia loosens her grip and eventually walks onstage, showing his words helped reframe her mindset."
        },
        {
          id: "q4",
          standard: "RL.8.4",
          type: "mc",
          prompt: "In the phrase \"a restless tide waiting to pull her under,\" the figurative language mainly suggests that Talia feels",
          choices: ["excited and eager to begin.", "overwhelmed by an unpredictable, engulfing force.", "bored while waiting backstage.", "confident in her preparation."],
          correct: 1,
          explanation: "Comparing the audience's noise to a tide that could \"pull her under\" conveys a sense of being overwhelmed and endangered by the moment."
        },
        {
          id: "q5",
          standard: "RL.8.5",
          type: "mc",
          prompt: "How does the author structure the passage to develop Talia's inner conflict?",
          choices: ["By presenting events in strict chronological order with no interruption.", "By interrupting the present backstage scene with a flashback to her earlier failure.", "By switching between multiple narrators' perspectives.", "By ending the story before the recital begins."],
          correct: 1,
          explanation: "Paragraph two pauses the backstage scene to recount last year's failed performance, a flashback that explains her current fear before the story moves forward again."
        },
        {
          id: "q6",
          standard: "RL.8.6",
          type: "mc",
          prompt: "The story is told from a third-person point of view that stays closely focused on Talia's thoughts and feelings. This narrative choice mainly allows the reader to",
          choices: ["understand Jamal's private thoughts about music.", "experience Talia's fear and growth from the inside.", "see the audience's reaction in detail.", "learn the technical history of the cello."],
          correct: 1,
          explanation: "Because the narration tracks Talia's sensations and memories throughout, readers experience her anxiety and eventual growth directly."
        },
        {
          id: "q7",
          standard: "RL.8.1",
          type: "ms",
          prompt: "Select the TWO details that best support the idea that Talia ultimately overcomes her doubt during the performance.",
          choices: ["\"her fingers slipped once during the fast passage\"", "\"she kept playing, riding the music instead of drowning in it\"", "\"her legs felt borrowed from someone else\"", "\"the final chord faded into applause\"", "\"courage had never been about silencing the fear. It was about picking up the bow anyway\""],
          correct: [1, 4],
          explanation: "Choice B shows Talia pushing through a mistake instead of stopping, and choice E states directly that she redefined courage as continuing despite fear."
        },
        {
          id: "q8",
          standard: "RL.8.3",
          type: "mc",
          prompt: "Which best describes the relationship between Talia and Jamal shown in the passage?",
          choices: ["Competitive rivals who rarely speak.", "A supportive brother who understands and encourages her through experience.", "Strangers who happen to be backstage together.", "Jamal is indifferent to Talia's performance."],
          correct: 1,
          explanation: "Jamal references having sat through her late-night practicing and offers encouragement, showing a close, supportive relationship."
        }
      ]
    },
    {
      name: "Reading: Informational Text 1",
      passageTitle: "Who Decides? How Artificial Intelligence Makes Choices",
      passage: "<p>Every day, artificial intelligence systems make decisions that affect millions of people, often without those people realizing it. When a streaming service recommends a show, when a bank decides whether to approve a loan, or when a hospital flags a patient as high-risk, an algorithm has likely played a role. Understanding how these systems reach their conclusions has become one of the most important questions of our time, because the answer shapes not only convenience but fairness, privacy, and trust.</p><p>Most modern AI systems learn by studying enormous amounts of past data rather than following a fixed set of rules written by a programmer. A system designed to screen job applications, for example, might be trained on thousands of resumes from employees who were hired successfully in the past. The AI searches for patterns in that data and uses them to predict which new applicants are likely to succeed. This approach can process information far faster than any human reviewer and can sometimes spot subtle patterns that people overlook. Supporters argue that, when designed carefully, such systems can reduce certain kinds of human bias by applying the same standard to every case.</p><p>However, this same reliance on historical data creates serious risks. If the data used to train an algorithm reflects past inequalities, the AI can learn to repeat, and even amplify, those patterns. A hiring algorithm trained mostly on resumes from one demographic group, for instance, may unintentionally favor applicants who resemble that group, even if no one intended such an outcome. Because these systems often operate as a \"black box,\" making decisions through calculations too complex for a human to easily trace, it can be difficult to know exactly why an algorithm rejected a loan application or flagged a person as a security risk. Critics argue that this lack of transparency makes it hard to hold anyone accountable when mistakes occur.</p><p>These concerns have pushed lawmakers, researchers, and companies to debate how AI should be regulated and monitored. Some propose requiring companies to explain, in plain language, how a significant automated decision was reached. Others call for regular audits that test whether a system treats different groups fairly before it is ever put into use. Still others argue that certain high-stakes decisions, such as sentencing recommendations in criminal courts, should never be left entirely to a machine. There is no simple consensus, but nearly everyone agrees that as AI systems take on more responsibility, society must keep asking not just what these systems can do, but who is accountable when they get it wrong.</p>",
      questions: [
        {
          id: "q9",
          standard: "RI.8.1",
          type: "mc",
          prompt: "Which inference is best supported by the passage's opening paragraph?",
          choices: ["AI systems are rarely used in important decisions.", "Many people are affected by AI decisions without being aware of it.", "Streaming services do not use algorithms.", "Banks no longer use human employees to review loans."],
          correct: 1,
          explanation: "The opening paragraph states AI decisions affect people \"often without those people realizing it,\" directly supporting this inference."
        },
        {
          id: "q10",
          standard: "RI.8.2",
          type: "mc",
          prompt: "Which sentence best states the central idea of the passage?",
          choices: ["AI systems should never be allowed to make hiring decisions.", "As artificial intelligence takes on more decision-making power, society must weigh its benefits against the risks of bias and lack of transparency.", "Streaming recommendations are the most important use of AI today.", "All AI algorithms are equally accurate and fair."],
          correct: 1,
          explanation: "The passage balances discussion of AI's benefits (speed, consistency) with its risks (bias, opacity) and ends by emphasizing ongoing accountability, matching this central idea."
        },
        {
          id: "q11",
          standard: "RI.8.3",
          type: "ms",
          prompt: "Select the TWO details that show how historical training data can lead to biased AI outcomes.",
          choices: ["\"A hiring algorithm trained mostly on resumes from one demographic group...may unintentionally favor applicants who resemble that group\"", "\"the AI searches for patterns in that data and uses them to predict which new applicants are likely to succeed\"", "\"If the data used to train an algorithm reflects past inequalities, the AI can learn to repeat, and even amplify, those patterns\"", "\"such systems can reduce certain kinds of human bias by applying the same standard to every case\"", "\"Because these systems often operate as a 'black box'\""],
          correct: [0, 2],
          explanation: "Both choices directly explain how biased or unequal historical data can cause an algorithm to reproduce or worsen that bias."
        },
        {
          id: "q12",
          standard: "RI.8.4",
          type: "mc",
          prompt: "As used in the passage, the term \"black box\" most likely refers to",
          choices: ["a physical device inside computer hardware.", "a system whose internal decision-making process is difficult for humans to understand or trace.", "a type of resume format used in hiring.", "a safety feature required by law."],
          correct: 1,
          explanation: "The passage defines the term in context, describing decisions made \"through calculations too complex for a human to easily trace.\""
        },
        {
          id: "q13",
          standard: "RI.8.5",
          type: "mc",
          prompt: "How does the author primarily organize the information in the passage?",
          choices: ["By narrating events in the order they happened historically.", "By introducing how AI makes decisions, then presenting potential benefits, followed by risks, and ending with proposed solutions.", "By comparing two competing companies' AI products.", "By defining unrelated technical terms with no connection to a central topic."],
          correct: 1,
          explanation: "The passage moves paragraph by paragraph from explanation, to benefits, to risks, to proposed regulatory solutions."
        },
        {
          id: "q14",
          standard: "RI.8.6",
          type: "mc",
          prompt: "Which best describes the author's point of view toward AI decision-making?",
          choices: ["Strongly opposed, arguing AI should never be used.", "Enthusiastically promotional, ignoring any downsides.", "Balanced, acknowledging both potential benefits and serious risks.", "Indifferent, providing no evaluation of the topic."],
          correct: 2,
          explanation: "The author presents both supporters' and critics' arguments fairly rather than favoring one side, indicating a balanced point of view."
        },
        {
          id: "q15",
          standard: "RI.8.8",
          type: "mc",
          prompt: "The passage states that AI \"can reduce certain kinds of human bias by applying the same standard to every case.\" Which detail from later in the passage complicates this reasoning?",
          choices: ["AI systems process information faster than humans.", "Algorithms trained on unequal data can learn to repeat or amplify existing biases.", "Streaming services use AI to recommend shows.", "Lawmakers are debating regulations for AI."],
          correct: 1,
          explanation: "This detail shows that the claimed bias-reduction is not guaranteed, since biased training data can produce the opposite effect."
        },
        {
          id: "q16",
          standard: "RI.8.9",
          type: "mc",
          prompt: "The passage presents both supporters and critics of AI decision-making. Which best describes a key point of disagreement between them?",
          choices: ["Supporters and critics agree that AI should be banned entirely.", "Supporters emphasize AI's speed and consistency, while critics emphasize the risks of hidden bias and lack of accountability.", "Supporters and critics both believe AI has no drawbacks.", "Critics argue AI should replace all human judges, while supporters disagree."],
          correct: 1,
          explanation: "Supporters focus on efficiency and standardization, while critics focus on bias and the difficulty of holding \"black box\" systems accountable."
        }
      ]
    },
    {
      name: "Reading: Informational Text 2",
      passageTitle: "Eight Days in July: The Apollo 11 Mission",
      passage: "<p>On July 16, 1969, a Saturn V rocket lifted off from Cape Kennedy, Florida, carrying three astronauts toward a goal that had once seemed impossible: landing human beings on the surface of the Moon. The mission, known as Apollo 11, was the culmination of nearly a decade of effort by tens of thousands of engineers, scientists, and technicians who had raced to fulfill a promise made in 1961, when President John F. Kennedy challenged the nation to reach the Moon before the end of the decade. Astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins carried the weight of that promise with them as their spacecraft climbed away from Earth.</p><p>Four days into the mission, Armstrong and Aldrin climbed into a small four-legged spacecraft called the Lunar Module, nicknamed Eagle, while Collins remained in orbit aboard the command module, Columbia. As Eagle descended toward the lunar surface, an alarm suddenly blared inside the cabin, warning that the guidance computer was overloaded with more information than it could process. On the ground, engineers in Houston's Mission Control had only seconds to determine whether the alarm signaled a genuine danger or a manageable glitch. They decided the descent could continue, trusting analysis they had rehearsed for exactly this kind of emergency. Moments later, Armstrong noticed that the automatic guidance system was steering Eagle toward a boulder-strewn crater, so he took semi-manual control and guided the fragile craft to a safer, smoother patch of ground, landing with only about twenty-five seconds of fuel remaining.</p><p>When Armstrong finally stepped onto the lunar surface, he described the moment as \"one small step for man, one giant leap for mankind,\" a phrase that would be remembered for generations. He and Aldrin spent roughly two and a half hours outside the spacecraft, collecting rock and soil samples, setting up scientific instruments, and planting a United States flag stiffened with wire so it would appear to wave in the airless environment. Meanwhile, Collins orbited alone above them, passing behind the Moon's far side every two hours, losing all radio contact with both his crewmates and Earth during each pass.</p><p>The mission's success depended on solving problems that had never been faced before, from designing a computer light enough to fly in space yet powerful enough to guide a landing, to building a spacesuit that could protect a human body in a vacuum with temperature swings of hundreds of degrees. When the astronauts splashed down safely in the Pacific Ocean on July 24, they returned not only with 47 pounds of lunar samples but with proof that a clearly defined, ambitious goal could unite an enormous, complex effort toward a single, historic achievement.</p>",
      questions: [
        {
          id: "q17",
          standard: "RI.8.1",
          type: "mc",
          prompt: "What evidence from the passage best supports the idea that the Apollo 11 landing faced a moment of real danger?",
          choices: ["\"Collins remained in orbit aboard the command module\"", "\"an alarm suddenly blared inside the cabin, warning that the guidance computer was overloaded\"", "\"planting a United States flag stiffened with wire\"", "\"returned...with 47 pounds of lunar samples\""],
          correct: 1,
          explanation: "The computer alarm during descent is the clearest textual evidence of a genuinely dangerous moment during the landing."
        },
        {
          id: "q18",
          standard: "RI.8.2",
          type: "mc",
          prompt: "Which best states the central idea of the passage?",
          choices: ["Apollo 11 succeeded mainly because of luck rather than preparation.", "The Apollo 11 mission succeeded through a combination of years of engineering innovation and critical human decision-making under pressure.", "Michael Collins was the most important astronaut on the mission.", "The Moon landing was a simple task once the rocket launched."],
          correct: 1,
          explanation: "The passage describes both the years of engineering preparation and the split-second human decisions during descent that together made the landing possible."
        },
        {
          id: "q19",
          standard: "RI.8.3",
          type: "mc",
          prompt: "What is the relationship between the computer alarm during descent and Armstrong's decision to take manual control?",
          choices: ["They are unrelated events that happened at different times.", "The alarm caused the mission to be aborted immediately.", "The alarm was resolved by Mission Control, and shortly after, Armstrong faced a separate hazard, the boulder field, that required his own intervention.", "The alarm was caused by Armstrong's manual steering."],
          correct: 2,
          explanation: "The passage describes the alarm being addressed by Mission Control first, followed by a distinct problem, the boulder-strewn crater, that Armstrong then handled himself."
        },
        {
          id: "q20",
          standard: "RI.8.4",
          type: "mc",
          prompt: "As used in the passage, \"culmination\" most nearly means",
          choices: ["beginning stage.", "final result of a long process.", "sudden failure.", "temporary pause."],
          correct: 1,
          explanation: "The passage describes the mission as the outcome of \"nearly a decade of effort,\" matching the meaning of a culmination as a final result."
        },
        {
          id: "q21",
          standard: "RI.8.5",
          type: "mc",
          prompt: "How does the author structure the passage overall?",
          choices: ["Chronologically, from launch through key mission events to return home.", "By comparing Apollo 11 to later Apollo missions.", "By listing scientific facts with no narrative order.", "By starting with the splashdown and ending with liftoff."],
          correct: 0,
          explanation: "The passage follows the mission in time order: liftoff, descent, the Moon walk, and finally splashdown."
        },
        {
          id: "q22",
          standard: "RI.8.6",
          type: "mc",
          prompt: "Which best describes the author's purpose in including the detail about landing \"with only about twenty-five seconds of fuel remaining\"?",
          choices: ["To criticize NASA's planning.", "To emphasize how close the mission came to a fuel-related failure, heightening the tension of the landing.", "To explain how rockets are fueled.", "To compare Apollo 11 to modern spacecraft."],
          correct: 1,
          explanation: "This specific, dramatic detail underscores how narrow the margin for success was during the landing."
        },
        {
          id: "q23",
          standard: "RI.8.8",
          type: "mc",
          prompt: "The passage claims the mission's success \"depended on solving problems that had never been faced before.\" Which piece of evidence best supports this claim?",
          choices: ["Kennedy's 1961 challenge to reach the Moon.", "The description of designing a computer light enough for space and a spacesuit able to withstand extreme temperature swings.", "The fact that the astronauts splashed down in the Pacific Ocean.", "The mention of the flag being planted on the surface."],
          correct: 1,
          explanation: "The engineering challenges of building a lightweight guidance computer and a survivable spacesuit are concrete examples of unprecedented problems the mission had to solve."
        },
        {
          id: "q24",
          standard: "RI.8.9",
          type: "ms",
          prompt: "Select the TWO details that illustrate how the mission required both engineering solutions and human judgment under pressure.",
          choices: ["\"Mission Control...had only seconds to determine whether the alarm signaled a genuine danger\"", "\"Armstrong noticed that the automatic guidance system was steering Eagle toward a boulder-strewn crater, so he took semi-manual control\"", "\"collecting rock and soil samples, setting up scientific instruments\"", "\"Collins orbited alone above them\"", "\"returned...with proof that a clearly defined, ambitious goal could unite an enormous, complex effort\""],
          correct: [0, 1],
          explanation: "Both details show real-time human decisions made in response to unexpected problems during the automated descent."
        }
      ]
    },
    {
      name: "Language & Writing",
      questions: [
        {
          id: "q25",
          standard: "L.8.1",
          type: "mc",
          prompt: "Which sentence contains a gerund phrase used as the subject?",
          choices: ["Running along the beach at sunrise was Maria's favorite way to start the day.", "Maria ran along the beach every morning.", "To run along the beach, Maria woke up early.", "Maria, running along the beach, waved to her neighbor."],
          correct: 0,
          explanation: "\"Running along the beach at sunrise\" is a gerund phrase functioning as the subject of the sentence."
        },
        {
          id: "q26",
          standard: "L.8.1",
          type: "ms",
          prompt: "Select the TWO sentences written in the active voice.",
          choices: ["The trophy was awarded to the team by the judges.", "The judges awarded the trophy to the team.", "The coach congratulated every player after the game.", "The trophy had been awarded by the judges.", "The trophy was being polished by the janitor."],
          correct: [1, 2],
          explanation: "In both sentences, the subject performs the action directly, which is the defining feature of active voice."
        },
        {
          id: "q27",
          standard: "L.8.2",
          type: "mc",
          prompt: "Which sentence correctly uses a dash to set off an abrupt change in thought?",
          choices: ["The forecast called for sun, we packed umbrellas anyway.", "The forecast called for sun — we packed umbrellas anyway, just in case.", "The forecast, called for sun we packed umbrellas anyway.", "The forecast called; for sun we packed umbrellas anyway."],
          correct: 1,
          explanation: "The dash correctly separates the two independent ideas while signaling an abrupt shift in thought."
        },
        {
          id: "q28",
          standard: "L.8.2",
          type: "mc",
          prompt: "Which sentence correctly uses an ellipsis to show that part of a quotation has been omitted?",
          choices: ["The mayor said, \"We will rebuild ... stronger than before.\"", "The mayor said, \"We, will rebuild... stronger, than before.\"", "The mayor said \"We will... rebuild stronger than, before.\"", "The mayor said, \"We will rebuild stronger... than, before,.\""],
          correct: 0,
          explanation: "The ellipsis is correctly placed and spaced to show omitted words, and the surrounding punctuation and quotation marks are used correctly."
        },
        {
          id: "q29",
          standard: "L.8.3",
          type: "mc",
          prompt: "Which sentence uses a tone most appropriate for a formal research report?",
          choices: ["AI is honestly kind of a big deal these days, you know?", "Artificial intelligence has become an increasingly significant factor in modern decision-making.", "AI stuff is everywhere now, which is pretty wild if you think about it.", "Yeah, AI does a ton of decisions now, no doubt."],
          correct: 1,
          explanation: "This sentence uses precise, objective academic language appropriate for formal writing, avoiding slang or casual phrasing."
        },
        {
          id: "q30",
          standard: "L.8.4",
          type: "mc",
          prompt: "\"The engineers had to improvise a solution when the guidance computer became overloaded.\" Based on context, \"improvise\" most nearly means",
          choices: ["to plan far in advance.", "to create or invent something quickly using available resources.", "to ignore a problem completely.", "to copy an existing solution exactly."],
          correct: 1,
          explanation: "The context of an unexpected problem requiring a quick response signals that \"improvise\" means to invent a solution on the spot."
        },
        {
          id: "q31",
          standard: "L.8.4",
          type: "ms",
          prompt: "Dictionary entry: grave (adjective) 1. serious or solemn in manner 2. very serious in importance or effect, giving cause for alarm. Sentence: \"The doctor's grave expression told us the news was serious.\" Select the TWO definitions above that best fit this use of \"grave.\"",
          choices: ["Serious or solemn in manner", "Very serious in importance, causing alarm", "A burial site for the dead", "Heavy or weighted down", "Slow-moving or sluggish"],
          correct: [0, 1],
          explanation: "Both listed adjective meanings of \"grave\" fit the doctor's solemn, alarming expression, while the other choices describe unrelated meanings or a different word entirely."
        },
        {
          id: "q32",
          standard: "L.8.5",
          type: "mc",
          prompt: "Which word has the most negative connotation?",
          choices: ["thrifty", "stingy", "frugal", "economical"],
          correct: 1,
          explanation: "Although all four words relate to careful spending, \"stingy\" carries a negative connotation of being unwilling to share, unlike the more neutral or positive alternatives."
        },
        {
          id: "q33",
          standard: "L.8.5",
          type: "mc",
          prompt: "In the sentence \"Her words cut through the silence like a blade,\" the figurative language suggests that her words were",
          choices: ["gentle and comforting.", "sharp and impactful.", "quiet and hesitant.", "confusing and unclear."],
          correct: 1,
          explanation: "Comparing the words to a blade emphasizes their sharp, forceful impact on the silence."
        },
        {
          id: "q34",
          standard: "W.8.1",
          type: "mc",
          prompt: "A student is writing an argumentative essay claiming that schools should start later in the morning. Which piece of evidence would most strengthen this argument?",
          choices: ["A personal opinion that mornings feel unpleasant.", "A cited study showing that adolescents who start school later demonstrate improved attention and academic performance.", "A description of the student's own morning routine.", "A quote from a classmate agreeing with the idea."],
          correct: 1,
          explanation: "A cited study provides objective, verifiable evidence, which is stronger support for an argumentative claim than personal opinion or anecdote."
        },
        {
          id: "q35",
          standard: "W.8.4",
          type: "mc",
          prompt: "Read the sentences: \"The team practiced for months. They lost the first game of the season.\" Which transition best connects these two sentences to show contrast?",
          choices: ["As a result,", "In addition,", "Despite this preparation,", "For example,"],
          correct: 2,
          explanation: "\"Despite this preparation\" signals the contrast between the team's months of practice and their unexpected loss."
        },
        {
          id: "q36",
          standard: "W.8.1",
          type: "ms",
          prompt: "A writer wants to combine these two sentences using a subordinating conjunction to show cause and effect: \"The bridge was closed for repairs. Traffic backed up for miles.\" Select the TWO revisions that correctly combine the sentences while preserving the cause-and-effect meaning.",
          choices: ["Because the bridge was closed for repairs, traffic backed up for miles.", "The bridge was closed for repairs, traffic backed up for miles.", "Traffic backed up for miles because the bridge was closed for repairs.", "The bridge was closed for repairs, but traffic backed up for miles.", "Traffic backed up for miles, so the bridge was closed for repairs."],
          correct: [0, 2],
          explanation: "Both revisions correctly use \"because\" to show that the bridge closure caused the traffic backup, without reversing the cause-and-effect relationship or creating a run-on sentence."
        }
      ]
    }
  ]
};
