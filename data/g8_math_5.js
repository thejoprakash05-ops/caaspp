window.TEST_DATA = {
  id: "g8_math_5",
  grade: 8,
  subject: "Math",
  title: "Grade 8 Math Practice Test 5",
  durationMinutes: 75,
  sections: [
    {
      name: "The Number System",
      questions: [
        {
          id: "q1",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A photographer is labeling measurements on a print order form. Which of the following numbers is irrational?",
          choices: ["√49", "√30", "5/8", "1.25"],
          correct: 1,
          explanation: "√49 = 7, 5/8, and 1.25 are all rational, but 30 is not a perfect square, so √30 cannot be written as a fraction and is irrational."
        },
        {
          id: "q2",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A weather station records average cloud cover as the repeating decimal 0.8888.... What is this value written as a fraction?",
          choices: ["7/8", "8/9", "9/10", "5/6"],
          correct: 1,
          explanation: "Letting x = 0.888..., 10x = 8.888..., so 10x - x = 8, giving x = 8/9."
        },
        {
          id: "q3",
          standard: "8.NS.2",
          type: "num",
          prompt: "A square photo print has an area of 40 square inches. Approximate the side length, √40, to the nearest tenth of an inch.",
          correct: ["6.3"],
          explanation: "√40 ≈ 6.3245..., which rounds to 6.3 inches."
        },
        {
          id: "q4",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Between which two consecutive integers does √55 lie?",
          choices: ["6 and 7", "7 and 8", "8 and 9", "5 and 6"],
          correct: 1,
          explanation: "7² = 49 and 8² = 64, and since 49 < 55 < 64, √55 lies between 7 and 8 (√55 ≈ 7.42)."
        },
        {
          id: "q5",
          standard: "8.NS.2",
          type: "mc",
          prompt: "A framer needs the diagonal of a rectangular picture frame, which comes out to √20 inches. Which value is the closest approximation of √20?",
          choices: ["4.0", "4.47", "4.9", "5.0"],
          correct: 1,
          explanation: "4.47² = 19.9809, which is very close to 20, so √20 ≈ 4.47."
        },
        {
          id: "q6",
          standard: "8.NS.1",
          type: "ms",
          prompt: "Select the TWO numbers below that are irrational.",
          choices: ["√16", "√23", "4/9", "π", "0.373737..."],
          correct: [1, 3],
          explanation: "√16 = 4, 4/9 is a ratio of integers, and 0.373737... is a repeating decimal, so all three are rational. √23 is not a perfect square and π never terminates or repeats, so both are irrational."
        },
        {
          id: "q7",
          standard: "8.NS.2",
          type: "num",
          prompt: "A meteorologist plots a square region on a radar map with an area of 90 square kilometers. Approximate the side length, √90, to the nearest tenth of a kilometer.",
          correct: ["9.5"],
          explanation: "√90 ≈ 9.4868..., which rounds to 9.5 kilometers."
        },
        {
          id: "q8",
          standard: "8.NS.2",
          type: "mc",
          prompt: "A climate researcher compares two monthly rainfall totals: 3.14 inches and √10 inches. Which statement is true?",
          choices: [
            "3.14 is greater than √10 because √10 ≈ 3.16",
            "3.14 is greater than √10 because √10 ≈ 2.90",
            "√10 is greater than 3.14 because √10 ≈ 3.16",
            "The two values are exactly equal"
          ],
          correct: 2,
          explanation: "√10 ≈ 3.1623, which is slightly greater than 3.14, so √10 is greater."
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
          prompt: "Simplify: 3^2 × 3^5",
          choices: ["3^7", "3^10", "9^7", "3^3"],
          correct: 0,
          explanation: "When multiplying powers with the same base, add the exponents: 3^2 × 3^5 = 3^(2+5) = 3^7."
        },
        {
          id: "q10",
          standard: "8.EE.1",
          type: "num",
          prompt: "Evaluate: 4^(-2). Write your answer as a decimal.",
          correct: ["0.0625", ".0625", "1/16"],
          explanation: "4^(-2) = 1/4^2 = 1/16 = 0.0625."
        },
        {
          id: "q11",
          standard: "8.EE.3",
          type: "mc",
          prompt: "A weather satellite recorded 4,500,000 raindrop-size measurements in one storm. Which of the following expresses 4,500,000 in scientific notation?",
          choices: ["4.5 × 10^5", "4.5 × 10^6", "45 × 10^5", "4.5 × 10^7"],
          correct: 1,
          explanation: "4,500,000 = 4.5 × 1,000,000 = 4.5 × 10^6."
        },
        {
          id: "q12",
          standard: "8.EE.4",
          type: "num",
          prompt: "A high-resolution photo has 8 × 10^3 pixels across and 2 × 10^3 pixels down. What is the total number of pixels, written as a single number (no exponents, no commas)?",
          correct: ["16000000"],
          explanation: "Multiply: (8 × 10^3) × (2 × 10^3) = 16 × 10^6 = 16,000,000 pixels."
        },
        {
          id: "q13",
          standard: "8.EE.5",
          type: "mc",
          prompt: "A photographer enlarges a print while keeping the same aspect ratio. The width w (inches) and height h (inches) are proportional, satisfying h = 1.5w. If a print has a width of 8 inches, what is its height?",
          choices: ["9.5 inches", "12 inches", "10.5 inches", "6 inches"],
          correct: 1,
          explanation: "Substitute w = 8 into h = 1.5w: h = 1.5(8) = 12 inches."
        },
        {
          id: "q14",
          standard: "8.EE.6",
          type: "mc",
          prompt: "A graph of print cost y versus number of photos x passes through the origin and through the point (4, 10). What is the slope of the line, representing the cost per photo?",
          choices: ["2.0", "2.5", "0.4", "4.0"],
          correct: 1,
          explanation: "Slope = rise/run = (10 - 0)/(4 - 0) = 10/4 = 2.5 dollars per photo."
        },
        {
          id: "q15",
          standard: "8.EE.7",
          type: "num",
          prompt: "Solve for x: 5x - 7 = 3x + 9. Enter the value of x.",
          correct: ["8"],
          explanation: "Subtract 3x from both sides: 2x - 7 = 9. Add 7: 2x = 16. Divide by 2: x = 8."
        },
        {
          id: "q16",
          standard: "8.EE.8",
          type: "mc",
          prompt: "Two print shops charge for photo enlargements. Shop A: y = 3x + 5 (dollars for x prints). Shop B: y = 4x + 2. At how many prints x do the two shops charge the same total price?",
          choices: ["x = 2", "x = 3", "x = 4", "x = 5"],
          correct: 1,
          explanation: "Set 3x + 5 = 4x + 2. Subtract 3x: 5 = x + 2. Subtract 2: x = 3. Checking: Shop A gives 3(3)+5=14, Shop B gives 4(3)+2=14."
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
          prompt: "Which set of ordered pairs (day, temperature) represents a function?",
          choices: [
            "{(1, 65), (2, 68), (3, 65), (4, 70)}",
            "{(1, 65), (1, 70), (2, 68), (3, 72)}",
            "{(2, 65), (2, 70), (3, 68), (3, 72)}",
            "{(1, 65), (1, 68), (1, 70), (1, 72)}"
          ],
          correct: 0,
          explanation: "A relation is a function if every input (day) maps to exactly one output (temperature). Only the first set has each day appearing once."
        },
        {
          id: "q18",
          standard: "8.F.2",
          type: "mc",
          prompt: "Function A gives the printing cost as y = 0.25x + 3 (x = number of photos). Function B is given by the table: x = 4 → y = 5, x = 8 → y = 7, x = 12 → y = 9. Which function has the greater rate of change (cost per photo)?",
          choices: ["Function A, with a rate of 0.25", "Function B, with a rate of 0.5", "They have the same rate of change", "Cannot be determined"],
          correct: 1,
          explanation: "Function A's rate of change is its slope, 0.25. Function B's rate of change is (7-5)/(8-4) = 2/4 = 0.5. Since 0.5 > 0.25, Function B has the greater rate."
        },
        {
          id: "q19",
          standard: "8.F.3",
          type: "mc",
          prompt: "Which equation represents a linear function?",
          choices: ["y = 3x^2 + 1", "y = 2x - 5", "y = 1/x", "y = x^3"],
          correct: 1,
          explanation: "A linear function has the form y = mx + b with x to the first power. Only y = 2x - 5 fits this form."
        },
        {
          id: "q20",
          standard: "8.F.4",
          type: "num",
          prompt: "The temperature during a day is modeled by T = 2h + 60, where h is hours after 6 a.m. and T is degrees Fahrenheit. What is the initial value (temperature at h = 0, i.e., 6 a.m.), in degrees?",
          correct: ["60"],
          explanation: "The initial value is the value of T when h = 0: T = 2(0) + 60 = 60 degrees."
        },
        {
          id: "q21",
          standard: "8.F.4",
          type: "mc",
          prompt: "A print shop charges a $4 setup fee plus $0.50 per photo. Which equation models the total cost y for x photos?",
          choices: ["y = 4x + 0.50", "y = 0.50x + 4", "y = 4.50x", "y = 0.50x - 4"],
          correct: 1,
          explanation: "The setup fee is a fixed initial value (4), and the cost per photo (0.50) is the rate of change, giving y = 0.50x + 4."
        },
        {
          id: "q22",
          standard: "8.F.5",
          type: "mc",
          prompt: "A graph shows temperature rising steadily from 6 a.m. to noon, staying constant from noon to 3 p.m., then dropping steadily until sunset. Which description matches this graph?",
          choices: [
            "Increasing, then decreasing, then increasing",
            "Increasing, then constant, then decreasing",
            "Constant the entire day",
            "Decreasing, then constant, then increasing"
          ],
          correct: 1,
          explanation: "The graph rises (increasing), flattens (constant), then falls (decreasing), matching the second option exactly."
        },
        {
          id: "q23",
          standard: "8.F.2",
          type: "ms",
          prompt: "Select the TWO functions below that have the same rate of change (slope) of 3.",
          choices: ["y = 3x + 7", "y = 3x - 2", "y = -3x + 7", "Table: x=0→y=1, x=3→y=7", "y = x + 3"],
          correct: [0, 1],
          explanation: "y = 3x + 7 and y = 3x - 2 both have slope 3. The table has slope (7-1)/(3-0) = 2, y = -3x + 7 has slope -3, and y = x + 3 has slope 1, so none of those three match."
        },
        {
          id: "q24",
          standard: "8.F.1",
          type: "num",
          prompt: "A function is given by f(x) = 5x - 9, where x is the number of photos printed and f(x) is total cost in dollars. Find f(6).",
          correct: ["21"],
          explanation: "Substitute x = 6: f(6) = 5(6) - 9 = 30 - 9 = 21."
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
          prompt: "A photo is reflected across a vertical line to create a mirror-image print. Which property is preserved under this reflection?",
          choices: ["Orientation", "Side lengths", "Direction each point faces", "Position on the page"],
          correct: 1,
          explanation: "Reflections are rigid transformations, so they preserve side lengths (and angle measures), even though orientation is reversed."
        },
        {
          id: "q26",
          standard: "8.G.2",
          type: "mc",
          prompt: "A rectangular photo is rotated 90° and then translated 3 inches to the right to make a new print layout. What can be concluded about the original and new rectangles?",
          choices: [
            "They are congruent because rotations and translations are rigid motions",
            "They are similar but not congruent",
            "They have the same area only",
            "They have no relationship"
          ],
          correct: 0,
          explanation: "Rotations and translations are both rigid motions that preserve size and shape, so the two rectangles are congruent."
        },
        {
          id: "q27",
          standard: "8.G.3",
          type: "mc",
          prompt: "A photo editing app dilates an image by a scale factor of 1/2 centered at the origin. If a corner of the image is originally at (8, 6), where is that corner after the dilation?",
          choices: ["(4, 3)", "(16, 12)", "(8, 3)", "(4, 6)"],
          correct: 0,
          explanation: "A dilation by scale factor 1/2 multiplies each coordinate by 1/2: (8 × 1/2, 6 × 1/2) = (4, 3)."
        },
        {
          id: "q28",
          standard: "8.G.4",
          type: "mc",
          prompt: "A 4-inch by 6-inch photo is enlarged to an 8-inch by 12-inch print. Which statement correctly describes the relationship between the two photos?",
          choices: [
            "They are similar, with a scale factor of 2",
            "They are congruent, with a scale factor of 1",
            "They are similar, with a scale factor of 3",
            "They are neither similar nor congruent"
          ],
          correct: 0,
          explanation: "Both dimensions doubled (4→8 and 6→12), so the enlarged photo is similar to the original with scale factor 8/4 = 2."
        },
        {
          id: "q29",
          standard: "8.G.5",
          type: "num",
          prompt: "In a triangular photo mat design, two angles measure 55° and 65°. What is the measure, in degrees, of the third angle?",
          correct: ["60"],
          explanation: "The angles of a triangle sum to 180°: 180 - 55 - 65 = 60 degrees."
        },
        {
          id: "q30",
          standard: "8.G.7",
          type: "num",
          prompt: "A rectangular picture frame has a width of 9 inches and a height of 12 inches. What is the length, in inches, of the diagonal brace needed to reinforce the frame?",
          correct: ["15"],
          explanation: "Using the Pythagorean theorem: diagonal = √(9^2 + 12^2) = √(81 + 144) = √225 = 15 inches."
        },
        {
          id: "q31",
          standard: "8.G.9",
          type: "num",
          prompt: "A cylindrical lens cap has a radius of 3 cm and a height of 2 cm. Find its volume in cubic centimeters, in terms of using π ≈ 3.14, rounded to the nearest whole number.",
          correct: ["57"],
          explanation: "Volume = πr²h = 3.14 × 3² × 2 = 3.14 × 9 × 2 = 56.52, which rounds to 57 cubic centimeters."
        },
        {
          id: "q32",
          standard: "8.G.9",
          type: "mc",
          prompt: "A spherical globe art piece has a radius of 6 inches. Using the formula V = (4/3)πr³ and π ≈ 3.14, what is its volume, rounded to the nearest cubic inch?",
          choices: ["452", "904", "226", "1808"],
          correct: 1,
          explanation: "V = (4/3)(3.14)(6^3) = (4/3)(3.14)(216) = (4/3)(678.24) = 904.32, which rounds to 904 cubic inches."
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
          prompt: "A scatter plot shows daily humidity (x) versus daily temperature (y) for a month, and the points trend downward from left to right. What kind of association does this show?",
          choices: ["Positive association", "Negative association", "No association", "Nonlinear association only"],
          correct: 1,
          explanation: "When y-values tend to decrease as x-values increase, the scatter plot shows a negative association."
        },
        {
          id: "q34",
          standard: "8.SP.1",
          type: "mc",
          prompt: "A scatter plot of day number (x) versus total rainfall that week (y) shows points that closely follow a straight line with very little scatter. This describes:",
          choices: ["A weak linear association", "A strong linear association", "A strong nonlinear association", "No association"],
          correct: 1,
          explanation: "Points that lie very close to a straight line indicate a strong linear association."
        },
        {
          id: "q35",
          standard: "8.SP.2",
          type: "num",
          prompt: "A line fitted to a scatter plot of temperature data passes through the points (2, 68) and (6, 76). Find the slope of this line.",
          correct: ["2"],
          explanation: "Slope = (76 - 68)/(6 - 2) = 8/4 = 2."
        },
        {
          id: "q36",
          standard: "8.SP.3",
          type: "mc",
          prompt: "A line of best fit for rainfall data is given by y = 0.4x + 2, where x is the day of the month and y is total rainfall in inches. What does the slope of 0.4 represent in context?",
          choices: [
            "The rainfall increases by about 0.4 inch each day",
            "The starting rainfall was 0.4 inch",
            "The total number of rainy days was 0.4",
            "The rainfall decreases by 0.4 inch each day"
          ],
          correct: 0,
          explanation: "In a linear model y = mx + b, the slope m represents the rate of change, so rainfall increases by about 0.4 inch per day."
        },
        {
          id: "q37",
          standard: "8.SP.3",
          type: "num",
          prompt: "Using the rainfall model y = 0.4x + 2 (x = day of month, y = total rainfall in inches), predict the total rainfall on day 10.",
          correct: ["6"],
          explanation: "Substitute x = 10: y = 0.4(10) + 2 = 4 + 2 = 6 inches."
        },
        {
          id: "q38",
          standard: "8.SP.4",
          type: "mc",
          prompt: "A two-way table shows weather type by month:\nSunny: June=18, July=22\nRainy: June=12, July=9\nWhat fraction of June days recorded (sunny + rainy) were sunny?",
          choices: ["18/30", "18/40", "12/30", "22/40"],
          correct: 0,
          explanation: "June has 18 sunny + 12 rainy = 30 total days recorded. The fraction sunny is 18/30."
        },
        {
          id: "q39",
          standard: "8.SP.4",
          type: "ms",
          prompt: "A two-way frequency table of sunny vs. rainy days by season shows: Summer: Sunny=40, Rainy=10; Winter: Sunny=15, Rainy=35. Select the TWO statements that are correctly supported by this table.",
          choices: [
            "Summer had fewer sunny days than winter",
            "Winter had more rainy days than sunny days",
            "Winter had more total days recorded than summer",
            "Summer and winter had the same number of rainy days",
            "Summer had exactly 50 total days recorded"
          ],
          correct: [1, 4],
          explanation: "Winter's rainy days (35) exceed its sunny days (15), so that statement is true. Summer's total is 40 + 10 = 50 days, matching the last statement. Summer actually had more sunny days than winter (not fewer), both seasons total 50 days (not more for winter), and the rainy-day counts differ (10 vs. 35), so the other three statements are false."
        },
        {
          id: "q40",
          standard: "8.SP.1",
          type: "mc",
          prompt: "A photographer graphs the number of photo edits made (x) versus the time spent editing in minutes (y) for several projects, and the scatter plot shows points scattered with no clear pattern. This describes:",
          choices: ["A strong positive association", "A strong negative association", "No association", "A perfect linear association"],
          correct: 2,
          explanation: "When the points show no discernible pattern or trend, there is no association between the two variables."
        }
      ]
    }
  ]
};
