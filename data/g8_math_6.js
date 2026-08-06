window.TEST_DATA = {
  id: "g8_math_6",
  grade: 8,
  subject: "Math",
  title: "Grade 8 Math Practice Test 6",
  durationMinutes: 75,
  sections: [
    {
      name: "The Number System",
      questions: [
        {
          id: "q1",
          standard: "8.NS.1",
          type: "mc",
          prompt: "Which of the following numbers is irrational?",
          choices: ["0.75", "sqrt(16)", "sqrt(10)", "-3/4"],
          correct: 2,
          explanation: "sqrt(10) is not a perfect square, so it cannot be written as a fraction of two integers; the other choices are all rational."
        },
        {
          id: "q2",
          standard: "8.NS.2",
          type: "mc",
          prompt: "A game designer needs to place a checkpoint at a distance of sqrt(50) tiles from the start. Between which two whole numbers does sqrt(50) fall?",
          choices: ["5 and 6", "6 and 7", "7 and 8", "8 and 9"],
          correct: 2,
          explanation: "7^2 = 49 and 8^2 = 64, and since 49 < 50 < 64, sqrt(50) is between 7 and 8."
        },
        {
          id: "q3",
          standard: "8.NS.2",
          type: "num",
          prompt: "Estimate sqrt(90) to the nearest whole number.",
          correct: ["9", "9.5"],
          explanation: "9^2 = 81 and 10^2 = 100; since 90 is closer to 81, sqrt(90) rounds to about 9."
        },
        {
          id: "q4",
          standard: "8.NS.1",
          type: "ms",
          prompt: "A leaderboard shows player scores. Select the TWO numbers below that are rational.",
          choices: ["sqrt(2)", "4.25", "pi", "-7", "sqrt(11)"],
          correct: [1, 3],
          explanation: "4.25 can be written as 17/4 and -7 can be written as -7/1, so both are rational; sqrt(2), pi, and sqrt(11) are irrational."
        },
        {
          id: "q5",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Which value is the best approximation of sqrt(75)?",
          choices: ["7.1", "8.2", "8.7", "9.4"],
          correct: 2,
          explanation: "8.7^2 = 75.69, which is very close to 75, so 8.7 is the best approximation among the choices."
        },
        {
          id: "q6",
          standard: "8.NS.2",
          type: "mc",
          prompt: "On a game map, the distance across a lake is sqrt(200) meters. Which statement is true?",
          choices: ["The distance is exactly 14 meters.", "The distance is between 14 and 15 meters.", "The distance is between 20 and 21 meters.", "The distance is exactly 20 meters."],
          correct: 1,
          explanation: "14^2 = 196 and 15^2 = 225, and since 196 < 200 < 225, sqrt(200) is between 14 and 15."
        },
        {
          id: "q7",
          standard: "8.NS.1",
          type: "mc",
          prompt: "Which of these best describes the number 0.454545... (repeating)?",
          choices: ["Irrational, because it never terminates", "Rational, because it can be written as a fraction (5/11)", "Irrational, because it has a repeating pattern", "Neither rational nor irrational"],
          correct: 1,
          explanation: "Repeating decimals are always rational because they can be expressed as a fraction of two integers, here 5/11."
        },
        {
          id: "q8",
          standard: "8.NS.2",
          type: "num",
          prompt: "A circular arcade token has an area of about 28.3 square cm, so its radius satisfies r^2 = 9. Enter the value of r.",
          correct: ["3"],
          explanation: "sqrt(9) = 3, so the radius is 3 cm."
        }
      ]
    },
    {
      name: "Expressions & Equations",
      questions: [
        {
          id: "q9",
          standard: "8.EE.1",
          type: "mc",
          prompt: "Simplify: 2^3 x 2^5",
          choices: ["2^8", "2^15", "4^8", "2^2"],
          correct: 0,
          explanation: "When multiplying powers with the same base, add the exponents: 2^3 x 2^5 = 2^(3+5) = 2^8."
        },
        {
          id: "q10",
          standard: "8.EE.1",
          type: "mc",
          prompt: "Simplify: (3^2)^4",
          choices: ["3^6", "3^8", "9^8", "3^16"],
          correct: 1,
          explanation: "When raising a power to a power, multiply the exponents: (3^2)^4 = 3^(2x4) = 3^8."
        },
        {
          id: "q11",
          standard: "8.EE.3",
          type: "mc",
          prompt: "A popular game has about 4.5 x 10^6 active players, and a smaller game has 9 x 10^3 active players. About how many times more players does the popular game have?",
          choices: ["50", "500", "5,000", "50,000"],
          correct: 1,
          explanation: "4.5 x 10^6 divided by 9 x 10^3 = 0.5 x 10^3 = 500."
        },
        {
          id: "q12",
          standard: "8.EE.4",
          type: "num",
          prompt: "A game file is 2.4 x 10^8 bytes. Write this number in standard form (in millions of bytes, i.e. how many millions).",
          correct: ["240"],
          explanation: "2.4 x 10^8 = 240,000,000, which is 240 million."
        },
        {
          id: "q13",
          standard: "8.EE.5",
          type: "mc",
          prompt: "A player earns experience points (XP) at a constant rate. After 3 levels they have 150 XP, and after 7 levels they have 350 XP. What is the rate of XP gained per level?",
          choices: ["40 XP/level", "50 XP/level", "60 XP/level", "70 XP/level"],
          correct: 1,
          explanation: "Rate = (350 - 150) / (7 - 3) = 200 / 4 = 50 XP per level."
        },
        {
          id: "q14",
          standard: "8.EE.7",
          type: "num",
          prompt: "Solve for x: 5x - 12 = 2x + 18",
          correct: ["10"],
          explanation: "5x - 2x = 18 + 12, so 3x = 30, and x = 10."
        },
        {
          id: "q15",
          standard: "8.EE.7",
          type: "mc",
          prompt: "How many solutions does the equation 4x + 8 = 4x - 2 have?",
          choices: ["No solution", "One solution", "Infinitely many solutions", "Exactly two solutions"],
          correct: 0,
          explanation: "Subtracting 4x from both sides gives 8 = -2, which is false, so there is no solution."
        },
        {
          id: "q16",
          standard: "8.EE.8",
          type: "mc",
          prompt: "Game Plan A costs $10 to start plus $2 per hour of play. Game Plan B costs $4 per hour with no starting fee. At how many hours do the two plans cost the same?",
          choices: ["4 hours", "5 hours", "6 hours", "8 hours"],
          correct: 1,
          explanation: "Set 10 + 2h = 4h, so 10 = 2h, and h = 5 hours."
        }
      ]
    },
    {
      name: "Functions",
      questions: [
        {
          id: "q17",
          standard: "8.F.1",
          type: "mc",
          prompt: "Which table represents a function of hours played (x) to score (y)?",
          choices: [
            "x: 1,1,2,3  y: 100,150,200,300",
            "x: 1,2,3,4  y: 100,200,300,400",
            "x: 2,2,2,2  y: 50,100,150,200",
            "x: 1,2,2,3  y: 100,200,250,300"
          ],
          correct: 1,
          explanation: "A function must have exactly one output for each input; only the second table has no repeated x-value paired with different y-values."
        },
        {
          id: "q18",
          standard: "8.F.2",
          type: "mc",
          prompt: "Roller Coaster A's height (in feet) is given by h = 20t + 5, where t is seconds after launch. Roller Coaster B is shown in a table: at t=0, h=15; at t=3, h=90. Which coaster has a greater rate of climb?",
          choices: ["Coaster A, with a rate of 20 ft/sec", "Coaster B, with a rate of 20 ft/sec", "Coaster B, with a rate of 25 ft/sec", "Coaster A, with a rate of 25 ft/sec"],
          correct: 2,
          explanation: "Coaster A's rate is 20 ft/sec (the slope in h = 20t + 5). Coaster B's rate is (90-15)/(3-0) = 75/3 = 25 ft/sec, which is greater than Coaster A's rate."
        },
        {
          id: "q19",
          standard: "8.F.3",
          type: "mc",
          prompt: "Which equation represents a linear function?",
          choices: ["y = 3x + 2", "y = x^2 + 1", "y = 1/x", "y = 2^x"],
          correct: 0,
          explanation: "A linear function has the form y = mx + b; the other equations involve a squared term, a variable in the denominator, or a variable exponent."
        },
        {
          id: "q20",
          standard: "8.F.4",
          type: "num",
          prompt: "A ride's wait time (in minutes) is w = 5n + 15, where n is the number of groups ahead of you. What is the wait time when n = 6?",
          correct: ["45"],
          explanation: "w = 5(6) + 15 = 30 + 15 = 45 minutes."
        },
        {
          id: "q21",
          standard: "8.F.4",
          type: "mc",
          prompt: "A player's score increases linearly with the number of coins collected. After 4 coins, the score is 220. After 10 coins, the score is 400. What is the initial score (0 coins)?",
          choices: ["100", "110", "120", "130"],
          correct: 0,
          explanation: "Rate = (400-220)/(10-4) = 180/6 = 30 points per coin. Initial score = 220 - 30(4) = 220 - 120 = 100."
        },
        {
          id: "q22",
          standard: "8.F.5",
          type: "mc",
          prompt: "A graph shows a roller coaster's speed increasing steadily, then staying constant, then dropping sharply to zero. Which part of the ride does the constant section most likely represent?",
          choices: ["The initial climb up the first hill", "A flat section of track at top speed", "The final braking zone", "A loop in the track"],
          correct: 1,
          explanation: "A constant (flat) section of the speed-vs-time graph means the speed isn't changing, which matches cruising at a steady top speed."
        },
        {
          id: "q23",
          standard: "8.F.2",
          type: "ms",
          prompt: "Two games' scoring functions are: Game X: y = 15x + 20; Game Y is given by a table where x=2,y=70 and x=5,y=145. Select the TWO true statements.",
          choices: ["Game Y has a greater rate of change than Game X.", "Game X has a greater starting value (y-intercept) than Game Y.", "Both games have the same rate of change.", "Game Y's rate of change is 25 points per unit.", "Game X's y-intercept is 15."],
          correct: [0, 3],
          explanation: "Game Y's rate is (145-70)/(5-2) = 75/3 = 25, which is greater than Game X's rate of 15, confirming both statements."
        },
        {
          id: "q24",
          standard: "8.F.1",
          type: "mc",
          prompt: "Which of these relations is NOT a function?",
          choices: ["{(1,2), (2,4), (3,6)}", "{(1,5), (2,5), (3,5)}", "{(1,3), (1,7), (2,9)}", "{(0,0), (1,1), (2,4)}"],
          correct: 2,
          explanation: "The input 1 is paired with two different outputs (3 and 7), which violates the definition of a function."
        }
      ]
    },
    {
      name: "Geometry",
      questions: [
        {
          id: "q25",
          standard: "8.G.1",
          type: "mc",
          prompt: "A game sprite at point (2, 3) is translated 4 units right and 2 units down. What are its new coordinates?",
          choices: ["(6, 1)", "(6, 5)", "(-2, 1)", "(6, -1)"],
          correct: 0,
          explanation: "Translating right adds to x and translating down subtracts from y: (2+4, 3-2) = (6, 1)."
        },
        {
          id: "q26",
          standard: "8.G.3",
          type: "mc",
          prompt: "A shape is dilated by a scale factor of 3 from the origin. If a point on the original shape is (2, 5), where is the corresponding point after dilation?",
          choices: ["(5, 8)", "(6, 15)", "(2, 15)", "(6, 5)"],
          correct: 1,
          explanation: "Dilation from the origin multiplies each coordinate by the scale factor: (2x3, 5x3) = (6, 15)."
        },
        {
          id: "q27",
          standard: "8.G.2",
          type: "mc",
          prompt: "Which sequence of transformations would prove two game sprites are congruent?",
          choices: ["A dilation only", "A rotation and a reflection", "A dilation and a rotation", "A stretch and a dilation"],
          correct: 1,
          explanation: "Congruence-preserving transformations are rotations, reflections, and translations; dilations and stretches change size and break congruence."
        },
        {
          id: "q28",
          standard: "8.G.5",
          type: "num",
          prompt: "Two parallel track rails are cut by a straight connector piece. One angle formed measures 65 degrees. What is the measure of its co-interior (same-side interior) angle, in degrees?",
          correct: ["115"],
          explanation: "Co-interior angles formed by a transversal across parallel lines are supplementary, so 180 - 65 = 115 degrees."
        },
        {
          id: "q29",
          standard: "8.G.7",
          type: "mc",
          prompt: "A Ferris wheel support beam forms a right triangle with a horizontal leg of 9 meters and a vertical leg of 12 meters. How long is the diagonal support beam?",
          choices: ["13 m", "14 m", "15 m", "21 m"],
          correct: 2,
          explanation: "By the Pythagorean theorem, c = sqrt(9^2 + 12^2) = sqrt(81+144) = sqrt(225) = 15 meters."
        },
        {
          id: "q30",
          standard: "8.G.7",
          type: "num",
          prompt: "On a game map, a shortest path is needed between two points that are 6 units apart horizontally and 8 units apart vertically. Enter the straight-line distance between the points.",
          correct: ["10"],
          explanation: "By the Pythagorean theorem, distance = sqrt(6^2 + 8^2) = sqrt(36+64) = sqrt(100) = 10 units."
        },
        {
          id: "q31",
          standard: "8.G.9",
          type: "mc",
          prompt: "A cylindrical game-token container has a radius of 4 cm and a height of 10 cm. What is its volume? (Use pi = 3.14)",
          choices: ["125.6 cm^3", "251.2 cm^3", "502.4 cm^3", "1004.8 cm^3"],
          correct: 2,
          explanation: "Volume = pi x r^2 x h = 3.14 x 16 x 10 = 502.4 cubic centimeters."
        },
        {
          id: "q32",
          standard: "8.G.9",
          type: "mc",
          prompt: "A spherical prize capsule from a claw machine has a radius of 3 cm. What is its approximate volume? (Use pi = 3.14, V = 4/3 pi r^3)",
          choices: ["37.68 cm^3", "56.52 cm^3", "113.04 cm^3", "150.72 cm^3"],
          correct: 2,
          explanation: "V = (4/3)(3.14)(3^3) = (4/3)(3.14)(27) = (4/3)(84.78) = 113.04 cubic centimeters."
        }
      ]
    },
    {
      name: "Statistics & Probability",
      questions: [
        {
          id: "q33",
          standard: "8.SP.1",
          type: "mc",
          prompt: "A scatter plot shows hours played per week versus final score, and the points trend upward and to the right. What kind of association does this show?",
          choices: ["Negative association", "Positive association", "No association", "A perfect circular pattern"],
          correct: 1,
          explanation: "Points trending upward together (as one variable increases, so does the other) indicate a positive association."
        },
        {
          id: "q34",
          standard: "8.SP.1",
          type: "mc",
          prompt: "A scatter plot shows a ride's wait time versus the time of day, and the points are scattered with no visible pattern. This suggests:",
          choices: ["A strong positive association", "A strong negative association", "Little to no linear association", "A perfectly linear relationship"],
          correct: 2,
          explanation: "When points show no clear upward or downward trend, there is little to no linear association between the variables."
        },
        {
          id: "q35",
          standard: "8.SP.2",
          type: "mc",
          prompt: "A trend line fitted to a scatter plot of level number vs. average score is y = 45x + 60. Using this model, what score would you predict for level 8?",
          choices: ["420", "465", "480", "525"],
          correct: 0,
          explanation: "y = 45(8) + 60 = 360 + 60 = 420."
        },
        {
          id: "q36",
          standard: "8.SP.3",
          type: "num",
          prompt: "A trend line for ride height (feet) vs. speed (mph) is speed = 0.5(height) + 10. Predict the speed for a ride that is 60 feet tall.",
          correct: ["40"],
          explanation: "speed = 0.5(60) + 10 = 30 + 10 = 40 mph."
        },
        {
          id: "q37",
          standard: "8.SP.4",
          type: "mc",
          prompt: "A survey of 100 students asked whether they prefer video games or amusement park rides. Of 60 students under age 13, 40 preferred video games. Of 40 students age 13 and older, 10 preferred video games. What fraction of ALL students preferred video games?",
          choices: ["40/100", "50/100", "10/40", "40/60"],
          correct: 1,
          explanation: "Total preferring video games = 40 + 10 = 50, out of 100 total students, giving 50/100."
        },
        {
          id: "q38",
          standard: "8.SP.4",
          type: "mc",
          prompt: "Using the same survey (60 under 13, 40 preferred games; 40 age 13+, 10 preferred games), what percent of students age 13 and older preferred amusement park rides?",
          choices: ["25%", "50%", "60%", "75%"],
          correct: 3,
          explanation: "Of the 40 students age 13+, 10 preferred games, so 30 preferred rides; 30/40 = 75%."
        },
        {
          id: "q39",
          standard: "8.SP.1",
          type: "mc",
          prompt: "A scatter plot of a roller coaster's top speed versus its maximum height shows points forming a fairly straight upward line. Which best describes this relationship?",
          choices: ["Nonlinear negative association", "Linear positive association", "Linear negative association", "No association"],
          correct: 1,
          explanation: "Points forming a straight upward pattern indicate a linear positive association between height and speed."
        },
        {
          id: "q40",
          standard: "8.SP.4",
          type: "ms",
          prompt: "Using the survey data (60 students under 13: 40 preferred video games, 20 preferred rides; 40 students age 13+: 10 preferred video games, 30 preferred rides), select the TWO true statements.",
          choices: ["Younger students (under 13) were more likely to prefer video games than older students.", "More total students preferred video games than preferred rides.", "Under-13 students preferred amusement park rides more than video games.", "Older students (13+) were more likely to prefer rides than video games.", "Exactly 30 of the under-13 students preferred rides."],
          correct: [0, 3],
          explanation: "Under-13 students preferred video games at 40/60 (about 67%) versus 13+ students at only 10/40 (25%), confirming the first statement. 13+ students preferred rides at 30/40 (75%) versus video games at 25%, confirming the fourth statement. Total video-game preference (50) equals total ride preference (50), so it isn't 'more,' the under-13 group actually favored video games over rides, and only 20 (not 30) under-13 students preferred rides."
        }
      ]
    }
  ]
};
