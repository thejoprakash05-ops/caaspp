window.TEST_DATA = {
  id: "g8_math_1",
  grade: 8,
  subject: "Math",
  title: "Grade 8 Math Practice Test 1",
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
          choices: ["√16", "0.3333... (repeating)", "√7", "-5/2"],
          correct: 2,
          explanation: "√7 is not a perfect square, so its decimal expansion never terminates or repeats, making it irrational. The other choices can all be written as fractions."
        },
        {
          id: "q2",
          standard: "8.NS.1",
          type: "mc",
          prompt: "Which of the following is a rational number?",
          choices: ["√2", "π", "√9", "0.1010010001... (never repeats)"],
          correct: 2,
          explanation: "√9 = 3, which can be written as the fraction 3/1, so it is rational. √2, π, and the non-repeating decimal are all irrational."
        },
        {
          id: "q3",
          standard: "8.NS.2",
          type: "num",
          prompt: "√50 is closest to which whole number? Enter your answer.",
          correct: ["7"],
          explanation: "√49 = 7 and √50 ≈ 7.07, so √50 rounds to the nearest whole number 7."
        },
        {
          id: "q4",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Between which two consecutive integers does √70 lie?",
          choices: ["7 and 8", "8 and 9", "9 and 10", "10 and 11"],
          correct: 1,
          explanation: "Since 8² = 64 and 9² = 81, and 64 < 70 < 81, the value √70 lies between 8 and 9."
        },
        {
          id: "q5",
          standard: "8.NS.1",
          type: "ms",
          prompt: "Select the TWO numbers that are irrational.",
          choices: ["√4", "0.75", "√3", "7/8", "√20"],
          correct: [2, 4],
          explanation: "√4 = 2 and 0.75 and 7/8 are all rational. √3 and √20 are not perfect squares, so they are irrational."
        },
        {
          id: "q6",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Which value is the best approximation of √30, rounded to the nearest tenth?",
          choices: ["5.4", "5.5", "5.7", "6.0"],
          correct: 1,
          explanation: "√30 ≈ 5.477, which rounds to 5.5, the closest tenth among the choices."
        },
        {
          id: "q7",
          standard: "8.NS.1",
          type: "num",
          prompt: "A cloud storage plan has room for √196 gigabytes of photos. How many gigabytes is that?",
          correct: ["14"],
          explanation: "√196 = 14 because 14 × 14 = 196."
        },
        {
          id: "q8",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Which list correctly orders the numbers from least to greatest: √3, 2, √5, 9/4?",
          choices: ["√3, 2, √5, 9/4", "2, √3, 9/4, √5", "√3, 2, 9/4, √5", "9/4, √5, 2, √3"],
          correct: 0,
          explanation: "Approximating gives √3 ≈ 1.732, 2, √5 ≈ 2.236, and 9/4 = 2.25, so the order from least to greatest is √3, 2, √5, 9/4."
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
          prompt: "Simplify: 3² × 3⁴",
          choices: ["3⁶", "3⁸", "9⁸", "3⁻²"],
          correct: 0,
          explanation: "When multiplying powers with the same base, add the exponents: 3² × 3⁴ = 3^(2+4) = 3⁶."
        },
        {
          id: "q10",
          standard: "8.EE.1",
          type: "mc",
          prompt: "What is the value of (2³)²?",
          choices: ["12", "36", "64", "512"],
          correct: 2,
          explanation: "Multiply the exponents: (2³)² = 2^(3×2) = 2⁶ = 64."
        },
        {
          id: "q11",
          standard: "8.EE.3",
          type: "num",
          prompt: "A downloaded video file takes up 4.2 × 10⁶ bytes of storage. Write this number in standard form (as a whole number of bytes).",
          correct: ["4200000"],
          explanation: "Moving the decimal point 6 places to the right in 4.2 gives 4,200,000."
        },
        {
          id: "q12",
          standard: "8.EE.3",
          type: "mc",
          prompt: "A messaging app uses 0.000032 gigabytes of data per text. Which expresses this in scientific notation?",
          choices: ["3.2 × 10⁵", "3.2 × 10⁻⁵", "32 × 10⁻⁶", "3.2 × 10⁻⁴"],
          correct: 1,
          explanation: "0.000032 has its decimal point moved 5 places to reach 3.2, and since the original number is less than 1, the exponent is negative: 3.2 × 10⁻⁵."
        },
        {
          id: "q13",
          standard: "8.EE.5",
          type: "mc",
          prompt: "A music app charges a proportional price per song with no membership fee. Downloading 2 songs costs $1.98, and downloading 4 songs costs $3.96. What is the cost per song (the constant of proportionality)?",
          choices: ["$0.99", "$1.98", "$2.00", "$0.50"],
          correct: 0,
          explanation: "The cost per song is the ratio of cost to number of songs: $1.98 ÷ 2 = $0.99 per song."
        },
        {
          id: "q14",
          standard: "8.EE.7",
          type: "ms",
          prompt: "Select the TWO equations below that have NO solution.",
          choices: ["2x + 3 = 2x + 5", "3x + 1 = 3x + 1", "2x + 4 = 2x - 1", "x + 2 = 5", "4x = 4x"],
          correct: [0, 2],
          explanation: "In 2x + 3 = 2x + 5 and 2x + 4 = 2x - 1, subtracting 2x from both sides leaves a false statement (3 = 5 and 4 = -1), so both equations have no solution."
        },
        {
          id: "q15",
          standard: "8.EE.7",
          type: "num",
          prompt: "Solve for x: 2(x - 3) = 4x - 10. Enter the value of x.",
          correct: ["2"],
          explanation: "Distribute to get 2x - 6 = 4x - 10, then -6 + 10 = 4x - 2x, so 4 = 2x and x = 2."
        },
        {
          id: "q16",
          standard: "8.EE.8",
          type: "mc",
          prompt: "Phone Plan A costs $20 plus $0.10 per text. Phone Plan B costs $10 plus $0.20 per text. After how many texts do the two plans cost the same amount?",
          choices: ["50", "100", "150", "200"],
          correct: 1,
          explanation: "Set the costs equal: 20 + 0.10t = 10 + 0.20t. Solving gives 10 = 0.10t, so t = 100 texts."
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
          prompt: "Which set of ordered pairs represents a function?",
          choices: ["{(2,3), (4,5), (2,7), (6,1)}", "{(1,4), (2,4), (3,4), (4,4)}", "{(0,1), (0,2), (1,3), (2,4)}", "{(5,1), (5,2), (6,3), (7,4)}"],
          correct: 1,
          explanation: "A relation is a function only if every x-value has exactly one y-value. In {(1,4),(2,4),(3,4),(4,4)}, each x appears only once, so it is a function; the other sets repeat an x-value with different y-values."
        },
        {
          id: "q18",
          standard: "8.F.4",
          type: "mc",
          prompt: "A data plan's cost is shown in the table: GB used: 0, 1, 2, 3; Cost: $20, $25, $30, $35. What is the rate of change (slope) of the cost?",
          choices: ["5", "10", "15", "20"],
          correct: 0,
          explanation: "The rate of change is the change in cost divided by the change in GB: (35 - 20) ÷ (3 - 0) = 15 ÷ 3 = 5 dollars per GB."
        },
        {
          id: "q19",
          standard: "8.F.4",
          type: "mc",
          prompt: "An app subscription's total cost is modeled by y = 15 + 5x, where x is the number of months. What is the initial value of this function?",
          choices: ["5", "10", "15", "20"],
          correct: 2,
          explanation: "The initial value is the cost when x = 0, which is the constant term 15."
        },
        {
          id: "q20",
          standard: "8.F.2",
          type: "mc",
          prompt: "Function A is given by the equation y = 3x + 2. Function B is given by the table: x: 0, 1, 2; y: 4, 7, 10. Which function has the greater initial value?",
          choices: ["Function A", "Function B", "They are equal", "Cannot be determined"],
          correct: 1,
          explanation: "Function A has initial value 2 (the constant in the equation). Function B has initial value 4 (its y-value when x = 0). Since 4 > 2, Function B has the greater initial value."
        },
        {
          id: "q21",
          standard: "8.F.4",
          type: "num",
          prompt: "A cell phone data function is shown in the table: minutes: 2, 4, 6; cost: $3, $5, $7. What is the rate of change in dollars per minute?",
          correct: ["1"],
          explanation: "The rate of change is (7 - 3) ÷ (6 - 2) = 4 ÷ 4 = 1 dollar per minute."
        },
        {
          id: "q22",
          standard: "8.F.5",
          type: "mc",
          prompt: "A student walks from home to the library, stops there to read for a while, then continues walking further away to a friend's house. Which description best matches the graph of distance from home over time?",
          choices: ["Increases, then flat, then increases", "Increases, then flat, then decreases", "Decreases, then flat, then increases", "Flat the whole time"],
          correct: 0,
          explanation: "Walking away increases distance, stopping to read keeps distance flat, and continuing further away increases distance again, matching 'increases, then flat, then increases.'"
        },
        {
          id: "q23",
          standard: "8.F.1",
          type: "ms",
          prompt: "Select the TWO representations that show y as a function of x.",
          choices: ["x = 2", "y = 3x - 1", "x² + y² = 9 (a circle)", "y = x²", "Table: x = 1 → y = 2, x = 1 → y = 5"],
          correct: [1, 3],
          explanation: "y = 3x - 1 and y = x² each assign exactly one y-value to every x-value. The vertical line x = 2, the circle, and the table (which gives x = 1 two different y-values) are not functions."
        },
        {
          id: "q24",
          standard: "8.F.4",
          type: "num",
          prompt: "An app subscription costs $4 to start plus $2 per month, so total cost is C = 4 + 2m. What is the total cost after 6 months?",
          correct: ["16"],
          explanation: "Substitute m = 6: C = 4 + 2(6) = 4 + 12 = 16."
        }
      ]
    },
    {
      name: "Geometry",
      questions: [
        {
          id: "q25",
          standard: "8.G.3",
          type: "mc",
          prompt: "Point (3, 4) is reflected over the x-axis. What are the coordinates of the reflected point?",
          choices: ["(3, -4)", "(-3, 4)", "(-3, -4)", "(4, 3)"],
          correct: 0,
          explanation: "Reflecting over the x-axis keeps the x-coordinate the same and negates the y-coordinate, giving (3, -4)."
        },
        {
          id: "q26",
          standard: "8.G.3",
          type: "mc",
          prompt: "Point (2, 5) is rotated 180° about the origin. What are the coordinates of the new point?",
          choices: ["(-2, -5)", "(2, -5)", "(-2, 5)", "(5, 2)"],
          correct: 0,
          explanation: "A 180° rotation about the origin maps (x, y) to (-x, -y), so (2, 5) becomes (-2, -5)."
        },
        {
          id: "q27",
          standard: "8.G.3",
          type: "mc",
          prompt: "A triangle has a vertex at (4, 6). The triangle is dilated with a scale factor of 1/2 centered at the origin. What are the new coordinates of this vertex?",
          choices: ["(2, 3)", "(8, 12)", "(4, 6)", "(2, 6)"],
          correct: 0,
          explanation: "Dilating by a scale factor of 1/2 multiplies each coordinate by 1/2: (4 × 1/2, 6 × 1/2) = (2, 3)."
        },
        {
          id: "q28",
          standard: "8.G.2",
          type: "ms",
          prompt: "Select the TWO transformations that always produce a figure congruent to the original figure.",
          choices: ["Translation", "Dilation with scale factor 3", "Rotation", "Dilation with scale factor 1/4", "Enlargement by scale factor 2"],
          correct: [0, 2],
          explanation: "Translations and rotations preserve size and shape, so they always produce congruent figures. Dilations with a scale factor other than 1 change the size of the figure."
        },
        {
          id: "q29",
          standard: "8.G.5",
          type: "mc",
          prompt: "Two parallel lines are cut by a transversal. Angle 1 and Angle 2 are same-side interior (co-interior) angles. If Angle 1 measures 65°, what is the measure of Angle 2?",
          choices: ["65°", "115°", "25°", "180°"],
          correct: 1,
          explanation: "Same-side interior angles are supplementary, so Angle 2 = 180° - 65° = 115°."
        },
        {
          id: "q30",
          standard: "8.G.7",
          type: "num",
          prompt: "A right triangle has legs of length 9 and 12. Find the length of the hypotenuse.",
          correct: ["15"],
          explanation: "By the Pythagorean theorem, hypotenuse = √(9² + 12²) = √(81 + 144) = √225 = 15."
        },
        {
          id: "q31",
          standard: "8.G.7",
          type: "num",
          prompt: "A rectangular shipping box has length 3 inches, width 4 inches, and height 12 inches. Find the length of the longest diagonal that fits inside the box.",
          correct: ["13"],
          explanation: "First find the diagonal of the base: √(3² + 4²) = √25 = 5. Then find the space diagonal using that result and the height: √(5² + 12²) = √169 = 13 inches."
        },
        {
          id: "q32",
          standard: "8.G.9",
          type: "mc",
          prompt: "A cone has a radius of 3 units and a height of 7 units. What is its volume, in terms of π?",
          choices: ["21π", "63π", "7π", "9π"],
          correct: 0,
          explanation: "Volume of a cone is V = (1/3)πr²h = (1/3)π(3²)(7) = (1/3)π(9)(7) = 21π cubic units."
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
          prompt: "A scatter plot shows that as the number of hours students spend studying increases, their test scores also tend to increase. What type of association does this scatter plot show?",
          choices: ["Positive association", "Negative association", "No association", "Nonlinear association only"],
          correct: 0,
          explanation: "When both variables tend to increase together, the scatter plot shows a positive association."
        },
        {
          id: "q34",
          standard: "8.SP.1",
          type: "mc",
          prompt: "As the monthly price of a phone plan increases, the number of subscribers to that plan tends to decrease. What type of association does this describe?",
          choices: ["Positive association", "Negative association", "No association", "Constant association"],
          correct: 1,
          explanation: "Since one variable increases while the other decreases, this is a negative association."
        },
        {
          id: "q35",
          standard: "8.SP.3",
          type: "mc",
          prompt: "A scatter plot of app downloads (x, in thousands) versus monthly revenue (y, in dollars) has a line of best fit y = 2x + 5. Using this model, predict the revenue when there are 10 thousand downloads.",
          choices: ["$15", "$20", "$25", "$30"],
          correct: 2,
          explanation: "Substitute x = 10 into the equation: y = 2(10) + 5 = 20 + 5 = 25."
        },
        {
          id: "q36",
          standard: "8.SP.3",
          type: "mc",
          prompt: "For the trend line y = 2x + 5, where x is app downloads in thousands and y is revenue in dollars, what does the slope of 2 represent?",
          choices: ["Revenue increases by $2 for every additional 1,000 downloads", "Revenue starts at $2 with no downloads", "Downloads increase by 2 for every dollar earned", "There is no relationship between downloads and revenue"],
          correct: 0,
          explanation: "The slope describes the rate of change of revenue with respect to downloads: each additional 1,000 downloads adds $2 in revenue."
        },
        {
          id: "q37",
          standard: "8.SP.3",
          type: "mc",
          prompt: "For the same trend line y = 2x + 5, what does the y-intercept of 5 represent?",
          choices: ["Revenue is $5 when there are 0 downloads", "The slope of the line is 5", "Downloads equal 5 thousand at all times", "Revenue increases by $5 per download"],
          correct: 0,
          explanation: "The y-intercept is the value of y when x = 0, meaning revenue is $5 even before any downloads occur."
        },
        {
          id: "q38",
          standard: "8.SP.4",
          type: "num",
          prompt: "In a survey of 100 students, a two-way table shows: of the 40 eighth-graders, 30 like math and 10 do not; of the 60 seventh-graders, 25 like math and 35 do not. What fraction of eighth-graders like math? Enter your answer as a decimal.",
          correct: ["0.75", "3/4"],
          explanation: "Of the 40 eighth-graders, 30 like math, so the fraction is 30/40 = 0.75."
        },
        {
          id: "q39",
          standard: "8.SP.4",
          type: "num",
          prompt: "Using the same survey data (40 eighth-graders: 30 like math, 10 do not; 60 seventh-graders: 25 like math, 35 do not), how many of the 100 students surveyed like math in total?",
          correct: ["55"],
          explanation: "Add the students who like math from each grade: 30 + 25 = 55."
        },
        {
          id: "q40",
          standard: "8.SP.4",
          type: "ms",
          prompt: "Using the same survey data (40 eighth-graders: 30 like math, 10 do not; 60 seventh-graders: 25 like math, 35 do not), select the TWO statements that are true.",
          choices: ["More than half of all students surveyed like math", "A greater fraction of eighth-graders like math than seventh-graders", "Exactly half of seventh-graders like math", "The majority of students surveyed are eighth-graders", "Eighth-graders who do not like math (10) outnumber seventh-graders who do not like math (35)"],
          correct: [0, 1],
          explanation: "55 out of 100 students like math, which is more than half. Also, 30/40 = 75% of eighth-graders like math compared to only 25/60 ≈ 41.7% of seventh-graders, so a greater fraction of eighth-graders like math."
        }
      ]
    }
  ]
};
