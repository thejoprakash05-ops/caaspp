window.TEST_DATA = {
  id: "g8_math_2",
  grade: 8,
  subject: "Math",
  title: "Grade 8 Math Practice Test 2",
  durationMinutes: 75,
  sections: [
    {
      name: "The Number System",
      questions: [
        {
          id: "q1",
          standard: "8.NS.1",
          type: "mc",
          prompt: "Which of the following numbers is rational?",
          choices: ["√16", "√17", "π", "√2"],
          correct: 0,
          explanation: "√16 = 4, which can be written as a fraction (4/1), so it is rational. √17, π, and √2 are all irrational."
        },
        {
          id: "q2",
          standard: "8.NS.1",
          type: "mc",
          prompt: "Which of the following numbers is irrational?",
          choices: ["0.75", "√9", "√10", "5/2"],
          correct: 2,
          explanation: "√10 is not a perfect square, so its decimal expansion never terminates or repeats, making it irrational. The other choices are all rational."
        },
        {
          id: "q3",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Between which two consecutive integers does √50 lie?",
          choices: ["6 and 7", "7 and 8", "8 and 9", "5 and 6"],
          correct: 1,
          explanation: "Since 7² = 49 and 8² = 64, and 49 < 50 < 64, the value √50 lies between 7 and 8."
        },
        {
          id: "q4",
          standard: "8.NS.2",
          type: "num",
          prompt: "A rectangular practice field measures 90 yards by 120 yards. A coach walks diagonally across the field from one corner to the opposite corner. How many yards does the coach walk? Enter the value.",
          correct: ["150"],
          explanation: "Using the Pythagorean theorem, the diagonal is √(90² + 120²) = √(8100 + 14400) = √22500 = 150 yards."
        },
        {
          id: "q5",
          standard: "8.NS.1",
          type: "ms",
          prompt: "Select the TWO numbers below that are irrational.",
          choices: ["√4", "√20", "1/3", "√99", "-√81", "0.25"],
          correct: [1, 3],
          explanation: "√20 and √99 are not perfect squares, so they are irrational. √4 = 2, -√81 = -9, 1/3, and 0.25 are all rational."
        },
        {
          id: "q6",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Between which two consecutive integers does √130 lie?",
          choices: ["10 and 11", "11 and 12", "12 and 13", "9 and 10"],
          correct: 1,
          explanation: "Since 11² = 121 and 12² = 144, and 121 < 130 < 144, the value √130 lies between 11 and 12."
        },
        {
          id: "q7",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A timing app records a sprinter's split as the repeating decimal 0.777... Which fraction is equivalent to this decimal?",
          choices: ["7/9", "7/10", "77/100", "7/11"],
          correct: 0,
          explanation: "If x = 0.777..., then 10x = 7.777..., so 10x - x = 7, giving 9x = 7 and x = 7/9."
        },
        {
          id: "q8",
          standard: "8.NS.2",
          type: "num",
          prompt: "A javelin throw is recorded as √85 meters. Estimate this value to the nearest tenth. Enter the value.",
          correct: ["9.2"],
          explanation: "√85 ≈ 9.2195, which rounds to 9.2 since 9.2² = 84.64 and 9.3² = 86.49, and 85 is closer to 84.64."
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
          prompt: "Simplify: 4^3 × 4^-1",
          choices: ["4", "8", "16", "64"],
          correct: 2,
          explanation: "Using the property a^m × a^n = a^(m+n), 4^3 × 4^-1 = 4^(3-1) = 4^2 = 16."
        },
        {
          id: "q10",
          standard: "8.EE.2",
          type: "num",
          prompt: "A square practice field has an area of 225 square yards. What is the length of one side, in yards? Enter the value.",
          correct: ["15"],
          explanation: "The side length is √225 = 15 yards, since 15 × 15 = 225."
        },
        {
          id: "q11",
          standard: "8.EE.3",
          type: "mc",
          prompt: "A stadium's attendance for a championship game was 92,000 fans. Which expression correctly writes 92,000 in scientific notation?",
          choices: ["9.2 × 10^3", "9.2 × 10^4", "92 × 10^3", "0.92 × 10^5"],
          correct: 1,
          explanation: "92,000 = 9.2 × 10,000 = 9.2 × 10^4. The decimal must be between 1 and 10 for correct scientific notation."
        },
        {
          id: "q12",
          standard: "8.EE.4",
          type: "mc",
          prompt: "Two playoff games had attendances of 3.4 × 10^5 and 2.1 × 10^5. What was the total attendance, in scientific notation?",
          choices: ["5.5 × 10^5", "5.5 × 10^10", "1.3 × 10^5", "5.5 × 10^9"],
          correct: 0,
          explanation: "Since the powers of 10 match, add the coefficients: 3.4 + 2.1 = 5.5, giving a total of 5.5 × 10^5."
        },
        {
          id: "q13",
          standard: "8.EE.5",
          type: "mc",
          prompt: "Runner A's distance-time graph passes through the origin and the point (4 seconds, 24 meters). Runner B's distance is modeled by d = 5t. Which runner has the greater speed?",
          choices: ["Runner A, at 6 m/s", "Runner A, at 4 m/s", "Runner B, at 5 m/s", "They run at the same speed"],
          correct: 0,
          explanation: "Runner A's unit rate (slope) is 24 ÷ 4 = 6 m/s, which is greater than Runner B's rate of 5 m/s."
        },
        {
          id: "q14",
          standard: "8.EE.6",
          type: "mc",
          prompt: "A sprinter's distance from the starting line is modeled by d = 8t + 100, where d is in meters and t is in seconds. What does the 100 represent?",
          choices: ["The sprinter's starting distance ahead of the line, in meters", "The sprinter's speed in meters per second", "The total distance of the race, in meters", "The time it takes to finish the race, in seconds"],
          correct: 0,
          explanation: "In the equation d = mt + b, the value b = 100 is the y-intercept, representing the sprinter's head start distance when t = 0."
        },
        {
          id: "q15",
          standard: "8.EE.7",
          type: "num",
          prompt: "Solve for x: 5x - 12 = 3x + 8. Enter the value of x.",
          correct: ["10"],
          explanation: "Subtract 3x from both sides: 2x - 12 = 8. Add 12 to both sides: 2x = 20. Divide by 2: x = 10."
        },
        {
          id: "q16",
          standard: "8.EE.8",
          type: "ms",
          prompt: "Two gym membership plans are modeled by y = 20 + 10x (Gym A) and y = 50 + 5x (Gym B), where x is the number of months and y is the total cost in dollars. Select the TWO statements that are true.",
          choices: ["The two plans cost the same when x = 6.", "Gym A's monthly rate is lower than Gym B's monthly rate.", "The y-intercept of Gym B, $50, represents its sign-up fee.", "Gym A is cheaper than Gym B for every number of months.", "The slope of Gym A's equation is 5."],
          correct: [0, 2],
          explanation: "Setting 20 + 10x = 50 + 5x gives 5x = 30, so x = 6, making the plans cost the same then. Gym B's equation shows a $50 sign-up fee as its y-intercept."
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
          choices: ["{(1,2), (2,4), (3,6), (4,8)}", "{(1,2), (1,3), (2,4), (3,5)}", "{(2,1), (2,5), (3,7)}", "x² + y² = 25"],
          correct: 0,
          explanation: "A function must assign each input exactly one output. Only {(1,2),(2,4),(3,6),(4,8)} has no repeated x-values; the others repeat an input or represent a circle."
        },
        {
          id: "q18",
          standard: "8.F.2",
          type: "mc",
          prompt: "Athlete A's total points scored is given by the table: (1 game, 8 points), (2 games, 16 points), (3 games, 24 points). Athlete B's total points is modeled by the equation y = 10x. Which athlete has the greater rate of change?",
          choices: ["Athlete A, with a rate of 8", "Athlete B, with a rate of 10", "They have the same rate", "Cannot be determined"],
          correct: 1,
          explanation: "Athlete A's rate of change from the table is 8 points per game, while Athlete B's equation shows a rate of 10 points per game, which is greater."
        },
        {
          id: "q19",
          standard: "8.F.3",
          type: "mc",
          prompt: "Which equation represents a non-linear function?",
          choices: ["y = 3x + 2", "y = x² - 4", "y = -2x", "y = 5"],
          correct: 1,
          explanation: "y = x² - 4 contains a squared term, so its graph is a curve, not a straight line, making it non-linear."
        },
        {
          id: "q20",
          standard: "8.F.4",
          type: "mc",
          prompt: "A cyclist's distance from home is given by d = 12t + 3, where d is in miles and t is in hours. What is the rate of change and initial value?",
          choices: ["Rate of change 12 mph, initial value 3 miles", "Rate of change 3 mph, initial value 12 miles", "Rate of change 12 mph, initial value 0 miles", "Rate of change 15 mph, initial value 3 miles"],
          correct: 0,
          explanation: "In d = mt + b form, the rate of change (slope) is m = 12 mph and the initial value (y-intercept) is b = 3 miles."
        },
        {
          id: "q21",
          standard: "8.F.5",
          type: "mc",
          prompt: "A graph shows a runner's speed during a race: the speed increases quickly at the start, stays constant through the middle, then decreases near the finish. Which description matches this graph?",
          choices: ["The runner speeds up at the start, maintains a steady speed, then slows down before the finish.", "The runner starts fast, slows down the whole race, then speeds up at the end.", "The runner maintains the same constant speed for the entire race.", "The runner slows down at the start, then speeds up steadily until the finish."],
          correct: 0,
          explanation: "The graph's shape directly matches an increase, then a flat (constant) section, then a decrease, which corresponds to the first description."
        },
        {
          id: "q22",
          standard: "8.F.1",
          type: "ms",
          prompt: "Select the TWO representations that describe functions.",
          choices: ["Table: (1,3), (2,6), (3,9), (4,12)", "Mapping: 5→1, 5→2, 6→3", "Equation: y = 2x - 1", "Points: (2,4), (2,7), (3,9)", "Graph of the vertical line x = 4"],
          correct: [0, 2],
          explanation: "The table has no repeated inputs, and y = 2x - 1 assigns exactly one output per input, so both are functions. The other choices repeat an input value."
        },
        {
          id: "q23",
          standard: "8.F.4",
          type: "num",
          prompt: "A gym charges a $25 sign-up fee plus $15 per month, modeled by C = 15m + 25. What is the total cost, in dollars, for 8 months? Enter the value.",
          correct: ["145"],
          explanation: "C = 15(8) + 25 = 120 + 25 = 145 dollars."
        },
        {
          id: "q24",
          standard: "8.F.2",
          type: "mc",
          prompt: "A linear function is given by the table: x = 0,1,2,3 and y = 5,8,11,14. Another function is given by the equation y = 4x + 2. Which function has the greater initial value?",
          choices: ["The table function, with initial value 5", "The equation function, with initial value 2", "They have the same initial value", "Cannot be determined from the given information"],
          correct: 0,
          explanation: "The table's initial value (at x = 0) is 5, while the equation's initial value (y-intercept) is 2, so the table function has the greater initial value."
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
          prompt: "Which transformation always preserves both the size and shape of a figure?",
          choices: ["Rotation", "Dilation with scale factor 2", "Dilation with scale factor 0.5", "Vertical stretch"],
          correct: 0,
          explanation: "A rotation is a rigid transformation, meaning it preserves side lengths and angle measures. Dilations and stretches change the size of a figure."
        },
        {
          id: "q26",
          standard: "8.G.2",
          type: "mc",
          prompt: "Triangle ABC, drawn on a field diagram, is rotated 90° to form triangle A'B'C'. Which statement is true?",
          choices: ["Triangle ABC is congruent to triangle A'B'C' because rotations preserve side lengths and angles.", "Triangle ABC is similar but not congruent to A'B'C'.", "Triangle A'B'C' is larger than triangle ABC.", "The triangles have no relationship."],
          correct: 0,
          explanation: "Rotations are rigid motions, so they preserve distance and angle measure, making the pre-image and image congruent."
        },
        {
          id: "q27",
          standard: "8.G.4",
          type: "mc",
          prompt: "A rectangular soccer field measuring 100 m by 60 m is scaled down by a factor of 1/2 to create a similar model. What are the dimensions of the model?",
          choices: ["50 m by 30 m", "50 m by 60 m", "100 m by 30 m", "25 m by 15 m"],
          correct: 0,
          explanation: "Multiplying each dimension by the scale factor 1/2 gives 100 × 1/2 = 50 m and 60 × 1/2 = 30 m."
        },
        {
          id: "q28",
          standard: "8.G.5",
          type: "mc",
          prompt: "Two parallel yard lines on a football field are cut by a transversal sideline. If one angle formed measures 65°, what is the measure of its corresponding angle?",
          choices: ["65°", "115°", "25°", "180°"],
          correct: 0,
          explanation: "When a transversal crosses parallel lines, corresponding angles are congruent, so the corresponding angle also measures 65°."
        },
        {
          id: "q29",
          standard: "8.G.7",
          type: "num",
          prompt: "A baseball diamond is a square with sides of 90 feet. What is the distance from home plate to second base (the diagonal), to the nearest foot? Enter the value.",
          correct: ["127"],
          explanation: "By the Pythagorean theorem, the diagonal is √(90² + 90²) = √16200 ≈ 127.28, which rounds to 127 feet."
        },
        {
          id: "q30",
          standard: "8.G.9",
          type: "num",
          prompt: "A cylindrical water bottle used by athletes has a radius of 3 cm and a height of 20 cm. Using π ≈ 3.14, what is its volume in cubic centimeters, to the nearest whole number? Enter the value.",
          correct: ["565"],
          explanation: "Volume = πr²h = 3.14 × 3² × 20 = 3.14 × 9 × 20 = 3.14 × 180 = 565.2, which rounds to 565 cm³."
        },
        {
          id: "q31",
          standard: "8.G.9",
          type: "mc",
          prompt: "A spherical basketball has a radius of 12 cm. Using π ≈ 3.14, what is its volume, to the nearest whole cubic centimeter?",
          choices: ["7235 cm³", "1809 cm³", "5425 cm³", "14469 cm³"],
          correct: 0,
          explanation: "Volume = (4/3)πr³ = (4/3) × 3.14 × 1728 = 2304 × 3.14 ≈ 7234.56, which rounds to 7235 cm³."
        },
        {
          id: "q32",
          standard: "8.G.1",
          type: "ms",
          prompt: "Select the TWO transformations that always preserve congruence (do not change the size of a figure).",
          choices: ["Translation", "Dilation with scale factor 3", "Rotation", "Dilation with scale factor 1/4", "Horizontal stretch by a factor of 2"],
          correct: [0, 2],
          explanation: "Translations and rotations are rigid motions that preserve distance and angle measure. Dilations and stretches change the size of a figure unless the scale factor is exactly 1."
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
          prompt: "A scatter plot of basketball players' heights (x) versus points scored per game (y) shows points increasing as height increases. What type of association does the scatter plot show?",
          choices: ["Positive linear association", "Negative linear association", "No association", "Non-linear association"],
          correct: 0,
          explanation: "As one variable (height) increases, the other variable (points) also tends to increase, which describes a positive association."
        },
        {
          id: "q34",
          standard: "8.SP.1",
          type: "mc",
          prompt: "A scatter plot of practice hours versus free-throw percentage shows one player who practices very little but has a much higher free-throw percentage than the overall trend. This data point is best described as:",
          choices: ["An outlier", "The line of best fit", "A cluster", "A negative association"],
          correct: 0,
          explanation: "A point that deviates noticeably from the overall pattern of the data is called an outlier."
        },
        {
          id: "q35",
          standard: "8.SP.2",
          type: "mc",
          prompt: "A line of best fit is drawn through a scatter plot of players' weights and bench press max. Which statement best describes its purpose?",
          choices: ["It models the linear relationship between the two variables and can be used to make predictions.", "It connects every data point exactly.", "It shows there is no relationship between the variables.", "It is only accurate for the two extreme data points."],
          correct: 0,
          explanation: "A line of best fit summarizes the linear trend in scattered data and is used to make predictions, even though it may not pass through every point."
        },
        {
          id: "q36",
          standard: "8.SP.3",
          type: "mc",
          prompt: "The line of best fit for a scatter plot of a runner's training weeks (x) and race time in minutes (y) is y = -0.5x + 30. What does the slope of -0.5 represent in this context?",
          choices: ["Race time decreases by 0.5 minute for each additional week of training", "Race time increases by 0.5 minute for each additional week of training", "The runner's starting race time was 0.5 minutes", "The runner trains for 0.5 weeks"],
          correct: 0,
          explanation: "The slope represents the rate of change: for each additional week of training (x), the race time (y) decreases by 0.5 minute."
        },
        {
          id: "q37",
          standard: "8.SP.3",
          type: "num",
          prompt: "Using the equation y = -0.5x + 30 for a runner's race time after x weeks of training, what is the predicted race time, in minutes, after 10 weeks? Enter the value.",
          correct: ["25"],
          explanation: "y = -0.5(10) + 30 = -5 + 30 = 25 minutes."
        },
        {
          id: "q38",
          standard: "8.SP.4",
          type: "mc",
          prompt: "A two-way table shows the wins and losses for two soccer teams last season: Team A had 12 wins and 8 losses. Team B had 15 wins and 5 losses. What fraction of Team B's games were wins?",
          choices: ["15/20, or 75%", "15/8", "20/15", "5/20, or 25%"],
          correct: 0,
          explanation: "Team B played 15 + 5 = 20 total games, and won 15 of them, so the win fraction is 15/20, which equals 75%."
        },
        {
          id: "q39",
          standard: "8.SP.4",
          type: "ms",
          prompt: "Using the same two-way table (Team A: 12 wins, 8 losses; Team B: 15 wins, 5 losses), select the TWO statements that are true.",
          choices: ["Team A won 60% of its games.", "Team B won 75% of its games.", "Team A and Team B played the same total number of games, but Team A had a higher win percentage than Team B.", "Team B's losses represent 20% of its total games.", "Team A had fewer wins than losses."],
          correct: [0, 1],
          explanation: "Team A won 12 of 20 games (60%) and Team B won 15 of 20 games (75%). Team B actually had the higher win percentage, and Team B's losses are 5/20, or 25%, not 20%."
        },
        {
          id: "q40",
          standard: "8.SP.2",
          type: "num",
          prompt: "A line of best fit relating a swimmer's training months (x) to number of races won (y) is y = 2x + 5. Predict the number of races won after 6 months of training. Enter the value.",
          correct: ["17"],
          explanation: "y = 2(6) + 5 = 12 + 5 = 17 races."
        }
      ]
    }
  ]
};
