window.TEST_DATA = {
  id: "g8_math_4",
  grade: 8,
  subject: "Math",
  title: "Grade 8 Math Practice Test 4",
  durationMinutes: 75,
  sections: [
    {
      name: "The Number System",
      questions: [
        {
          id: "q1",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A home cook is labeling measurements on a recipe card. Which of the following numbers is irrational?",
          choices: ["0.75", "√16", "√20", "-3/4"],
          correct: 2,
          explanation: "√16 = 4 and the others are terminating or simple fractions, but √20 cannot be simplified to a whole number or fraction, so it is a non-terminating, non-repeating decimal."
        },
        {
          id: "q2",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A carpenter is labeling measurements on a blueprint. Which of these is a rational number?",
          choices: ["π", "√5", "√49", "√11"],
          correct: 2,
          explanation: "√49 = 7, which can be written as a fraction (7/1), so it is rational; the other values are irrational."
        },
        {
          id: "q3",
          standard: "8.NS.2",
          type: "num",
          prompt: "A recipe scaling chart requires estimating √50. Estimate √50 to the nearest tenth.",
          correct: ["7.1"],
          explanation: "Since 7^2 = 49 and 7.1^2 = 50.41, √50 is very close to 7.1."
        },
        {
          id: "q4",
          standard: "8.NS.2",
          type: "mc",
          prompt: "A builder needs a diagonal brace for a square wall frame with side length 6 feet. The diagonal length is √72 feet. Between which two whole numbers does √72 lie?",
          choices: ["6 and 7", "7 and 8", "8 and 9", "9 and 10"],
          correct: 2,
          explanation: "Since 8^2 = 64 and 9^2 = 81, and 72 is between 64 and 81, √72 must be between 8 and 9 (√72 ≈ 8.49)."
        },
        {
          id: "q5",
          standard: "8.NS.1",
          type: "ms",
          prompt: "Select the TWO numbers that are irrational.",
          choices: ["√9", "√10", "22/7", "√2", "0.333..."],
          correct: [1, 3],
          explanation: "√9 = 3, 22/7 is a fraction, and 0.333... = 1/3, all rational; √10 and √2 cannot be written as exact fractions, so they are irrational."
        },
        {
          id: "q6",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A baker converts a repeating decimal measurement, 0.4545..., into a fraction. Which fraction, in simplest form, equals 0.4545...?",
          choices: ["5/11", "4/9", "9/20", "45/100"],
          correct: 0,
          explanation: "Letting x = 0.4545..., then 100x = 45.4545..., so 99x = 45 and x = 45/99 = 5/11."
        },
        {
          id: "q7",
          standard: "8.NS.2",
          type: "num",
          prompt: "A mixing bowl has a diagonal rim measurement of √130 inches. To the nearest whole number, how many inches is this?",
          correct: ["11"],
          explanation: "Since 11^2 = 121 and 12^2 = 144, and 130 is closer to 121, √130 ≈ 11.40, which rounds to 11."
        },
        {
          id: "q8",
          standard: "8.NS.2",
          type: "mc",
          prompt: "A construction worker is comparing measurements: √8, 2.9, 3, and π. Which list correctly orders these values from least to greatest?",
          choices: ["√8, 2.9, 3, π", "2.9, √8, 3, π", "π, 3, 2.9, √8", "√8, 3, 2.9, π"],
          correct: 0,
          explanation: "√8 ≈ 2.83, so ordering least to greatest gives √8, 2.9, 3, and π ≈ 3.14."
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
          prompt: "A recipe-scaling calculation uses the expression 2^3 · 2^-5. What is the value of this expression?",
          choices: ["1/4", "4", "-4", "1/8"],
          correct: 0,
          explanation: "Add the exponents: 3 + (-5) = -2, so 2^3 · 2^-5 = 2^-2 = 1/4."
        },
        {
          id: "q10",
          standard: "8.EE.2",
          type: "mc",
          prompt: "A cube-shaped storage bin used for flour has a volume of 125 cubic feet. What is the side length of the bin, in feet?",
          choices: ["5 ft", "15 ft", "25 ft", "10 ft"],
          correct: 0,
          explanation: "The side length is the cube root of the volume: ∛125 = 5 feet."
        },
        {
          id: "q11",
          standard: "8.EE.3",
          type: "mc",
          prompt: "A grain of salt has a mass of about 5 × 10^-4 grams. A bag of flour has a mass of about 2 × 10^3 grams. About how many times heavier is the bag of flour than the grain of salt?",
          choices: ["4 × 10^6", "4 × 10^7", "4 × 10^-6", "1 × 10^6"],
          correct: 0,
          explanation: "Divide the coefficients (2 ÷ 5 = 0.4) and subtract exponents (3 - (-4) = 7): 0.4 × 10^7 = 4 × 10^6."
        },
        {
          id: "q12",
          standard: "8.EE.7",
          type: "ms",
          prompt: "Select the TWO equations that have infinitely many solutions.",
          choices: ["2x + 6 = 2(x + 3)", "5x = 5x + 1", "3(x - 2) = 3x - 5", "x + 4 = 2x", "4x - 8 = 4(x - 2)"],
          correct: [0, 4],
          explanation: "Distributing gives 2x + 6 = 2x + 6 and 4x - 8 = 4x - 8, both true for every x, so these two equations have infinitely many solutions."
        },
        {
          id: "q13",
          standard: "8.EE.5",
          type: "mc",
          prompt: "A baker scales a cookie recipe so the number of cookies y produced is proportional to the number of cups of flour x used, given by y = 12x. What does the number 12 represent in this situation?",
          choices: ["The number of cookies produced per cup of flour", "The total number of cups of flour used", "The number of eggs needed", "The total time to bake in minutes"],
          correct: 0,
          explanation: "In a proportional relationship y = kx, the constant k represents the rate, here 12 cookies produced for every 1 cup of flour."
        },
        {
          id: "q14",
          standard: "8.EE.6",
          type: "mc",
          prompt: "A DIY shelving project costs $50 for 2 shelves and $95 for 5 shelves. Assuming the relationship between number of shelves and total cost is linear, what is the rate of change (cost per additional shelf)?",
          choices: ["$15", "$25", "$45", "$50"],
          correct: 0,
          explanation: "Rate of change = change in cost ÷ change in shelves = (95 - 50) ÷ (5 - 2) = 45 ÷ 3 = $15 per shelf."
        },
        {
          id: "q15",
          standard: "8.EE.7",
          type: "mc",
          prompt: "Solve for x: 6x - 4 = 2x + 12",
          choices: ["x = 4", "x = -4", "x = 2", "x = 8"],
          correct: 0,
          explanation: "Subtract 2x from both sides: 4x - 4 = 12, then add 4: 4x = 16, so x = 4."
        },
        {
          id: "q16",
          standard: "8.EE.8",
          type: "num",
          prompt: "Two contractors charge for a home renovation job. Contractor A charges a flat fee of $200 plus $40 per hour. Contractor B charges a flat fee of $80 plus $60 per hour. After how many hours do the two contractors charge the same total amount?",
          correct: ["6"],
          explanation: "Set the costs equal: 200 + 40h = 80 + 60h. Subtract 40h and 80 from both sides: 120 = 20h, so h = 6 hours."
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
          prompt: "A baker records pairs of (batch number, bake time). Which set of ordered pairs represents a function?",
          choices: ["{(1, 10), (2, 20), (2, 25), (3, 30)}", "{(1, 10), (2, 20), (3, 30), (4, 40)}", "{(1, 10), (1, 15), (2, 20), (3, 30)}", "{(2, 20), (2, 25), (2, 30), (2, 35)}"],
          correct: 1,
          explanation: "A function must pair each input with exactly one output; only {(1,10),(2,20),(3,30),(4,40)} has no repeated input value paired with different outputs."
        },
        {
          id: "q18",
          standard: "8.F.2",
          type: "mc",
          prompt: "Two functions describe the cost of DIY flooring material. Function A is given by y = 3x + 5. Function B is given by the table below, where x is square feet and y is total cost in dollars: x = 0,1,2,3 and y = 8,11,14,17. Which function has a greater initial cost (y-intercept)?",
          choices: ["Function A", "Function B", "They are equal", "Cannot be determined"],
          correct: 1,
          explanation: "Function A's y-intercept is 5. Function B's y-intercept, read from the table at x = 0, is 8, which is greater."
        },
        {
          id: "q19",
          standard: "8.F.3",
          type: "ms",
          prompt: "Select the TWO equations that represent linear functions.",
          choices: ["y = x^2 + 4", "y = 3x - 7", "y = 2/x", "y = √x", "y = -5x + 1", "y = x^3"],
          correct: [1, 4],
          explanation: "A linear function has the form y = mx + b with no exponents, roots, or variables in a denominator; only y = 3x - 7 and y = -5x + 1 fit this form."
        },
        {
          id: "q20",
          standard: "8.F.4",
          type: "num",
          prompt: "A baker's total baking time in minutes is modeled by y = 5x + 20, where x is the number of batches. What is the rate of change (minutes per batch)?",
          correct: ["5"],
          explanation: "In the equation y = mx + b, the coefficient m is the rate of change, which is 5 here."
        },
        {
          id: "q21",
          standard: "8.F.4",
          type: "mc",
          prompt: "A carpenter charges an initial consultation fee plus an hourly rate. The total cost is given by C = 25h + 60, where h is hours worked. What does the 60 represent?",
          choices: ["The hourly rate", "The initial consultation fee", "The total number of hours", "The total cost for one hour"],
          correct: 1,
          explanation: "In C = mh + b, the constant b is the initial value (the cost when h = 0), which is the flat consultation fee of $60."
        },
        {
          id: "q22",
          standard: "8.F.5",
          type: "mc",
          prompt: "A graph shows the temperature inside an oven as it preheats: it rises quickly, then levels off and stays flat once it reaches the set temperature. Which description matches this graph?",
          choices: ["The temperature increases at a constant rate the entire time.", "The temperature increases rapidly, then remains constant once it reaches the set temperature.", "The temperature decreases, then increases.", "The temperature stays constant, then decreases."],
          correct: 1,
          explanation: "The graph shows a rapid rise (preheating) followed by a flat section (temperature held constant), which matches the second description."
        },
        {
          id: "q23",
          standard: "8.F.2",
          type: "mc",
          prompt: "Two functions describe the cost of ordering custom cabinets. Function P is given by cost = 45n + 100, where n is the number of cabinets. Function Q is graphed and shows a cost of $250 for 3 cabinets and $350 for 5 cabinets. Which function has the greater rate of change (cost per cabinet)?",
          choices: ["Function P (rate $45 per cabinet)", "Function Q (rate $50 per cabinet)", "They have the same rate", "Cannot be determined from the given information"],
          correct: 1,
          explanation: "Function Q's rate of change is (350 - 250) ÷ (5 - 3) = 100 ÷ 2 = $50 per cabinet, which is greater than Function P's rate of $45."
        },
        {
          id: "q24",
          standard: "8.F.4",
          type: "num",
          prompt: "A function modeling material cost is C = 12n + 45, where n is the number of tiles purchased. What is the cost, in dollars, of purchasing 10 tiles?",
          correct: ["165"],
          explanation: "Substitute n = 10: C = 12(10) + 45 = 120 + 45 = 165 dollars."
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
          prompt: "A carpenter reflects a triangular truss pattern across a vertical line to create a mirror-image truss for the other side of a roof. Which statement is true about the reflected truss?",
          choices: ["It is congruent to the original but has reversed orientation", "It is larger than the original", "It is similar but not congruent", "Its angles are different from the original"],
          correct: 0,
          explanation: "A reflection preserves side lengths and angle measures (congruence) but reverses the orientation of the figure."
        },
        {
          id: "q26",
          standard: "8.G.2",
          type: "ms",
          prompt: "Select the THREE transformations that always preserve both side lengths and angle measures (congruence).",
          choices: ["Translation", "Dilation with scale factor 3", "Reflection", "Vertical stretch by factor 2", "Rotation", "Horizontal shear"],
          correct: [0, 2, 4],
          explanation: "Translations, reflections, and rotations are rigid motions that preserve congruence; dilations, stretches, and shears change size or shape."
        },
        {
          id: "q27",
          standard: "8.G.3",
          type: "mc",
          prompt: "A rectangular countertop has vertices at (1,1), (5,1), (5,4), and (1,4). If the countertop is translated 3 units left and 2 units up, what is the new coordinate of the vertex originally at (5,1)?",
          choices: ["(2, 3)", "(8, 3)", "(2, -1)", "(8, -1)"],
          correct: 0,
          explanation: "Translating 3 units left subtracts 3 from the x-coordinate (5 - 3 = 2) and translating 2 units up adds 2 to the y-coordinate (1 + 2 = 3), giving (2, 3)."
        },
        {
          id: "q28",
          standard: "8.G.4",
          type: "mc",
          prompt: "A blueprint of a house is drawn at a scale where 1 inch represents 8 feet. A wall measures 3 inches on this blueprint. On an enlarged, similar blueprint with a scale of 1 inch = 4 feet, the same wall measures 6 inches. Do these two scale drawings represent the same actual wall length?",
          choices: ["Yes, both represent a 24-foot wall", "No, they represent different lengths", "Yes, but they represent a 12-foot wall", "No, similarity cannot be determined"],
          correct: 0,
          explanation: "3 in × 8 ft/in = 24 ft, and 6 in × 4 ft/in = 24 ft, so both similar scale drawings represent the same 24-foot wall."
        },
        {
          id: "q29",
          standard: "8.G.5",
          type: "mc",
          prompt: "In a floor plan, two walls meet a straight hallway wall, forming two angles on a straight line. One angle measures 115°. What is the measure of the other angle?",
          choices: ["65°", "115°", "55°", "75°"],
          correct: 0,
          explanation: "Angles that form a linear pair are supplementary (add to 180°), so the other angle is 180° - 115° = 65°."
        },
        {
          id: "q30",
          standard: "8.G.7",
          type: "num",
          prompt: "A ladder leans against a wall to brace a shed. The base of the ladder is 6 feet from the wall, and the ladder reaches 8 feet up the wall. How long is the ladder, in feet?",
          correct: ["10"],
          explanation: "By the Pythagorean theorem, the ladder length = √(6^2 + 8^2) = √(36 + 64) = √100 = 10 feet."
        },
        {
          id: "q31",
          standard: "8.G.9",
          type: "mc",
          prompt: "A cylindrical mixing bowl has a radius of 3 inches and a height of 7 inches. Using π ≈ 3.14, what is the volume of the bowl, rounded to the nearest whole cubic inch?",
          choices: ["198 in³", "99 in³", "63 in³", "263 in³"],
          correct: 0,
          explanation: "Volume of a cylinder is V = πr^2h = 3.14 × 3^2 × 7 = 3.14 × 63 = 197.82, which rounds to 198 in³."
        },
        {
          id: "q32",
          standard: "8.G.8",
          type: "mc",
          prompt: "On a blueprint grid, two corners of a deck are located at (2, 3) and (7, 15). What is the distance between these two points?",
          choices: ["13 units", "17 units", "12 units", "15 units"],
          correct: 0,
          explanation: "Using the Pythagorean theorem, distance = √[(7-2)^2 + (15-3)^2] = √(25 + 144) = √169 = 13 units."
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
          prompt: "A scatter plot shows oven temperature (x) versus bake time in minutes (y) for a batch of cookies at various oven settings. As oven temperature increases, bake time decreases. What kind of association does the scatter plot show?",
          choices: ["Positive linear association", "Negative linear association", "No association", "Nonlinear association"],
          correct: 1,
          explanation: "As one variable (temperature) increases while the other (bake time) decreases, this is a negative association."
        },
        {
          id: "q34",
          standard: "8.SP.1",
          type: "mc",
          prompt: "Which scatter plot pattern would you expect between the number of cups of sugar used in a recipe and the sweetness rating given by tasters?",
          choices: ["Positive association", "Negative association", "No association", "Cannot be determined from a scatter plot"],
          correct: 0,
          explanation: "As sugar increases, sweetness rating would generally increase as well, which is a positive association."
        },
        {
          id: "q35",
          standard: "8.SP.2",
          type: "num",
          prompt: "A scatter plot of bake time (in minutes) versus batch size shows an approximate linear pattern. A line of best fit passes through the points (0, 8) and (10, 28). What is the slope of this line of best fit?",
          correct: ["2"],
          explanation: "Slope = (28 - 8) ÷ (10 - 0) = 20 ÷ 10 = 2."
        },
        {
          id: "q36",
          standard: "8.SP.3",
          type: "mc",
          prompt: "The line of best fit for oven preheat time (in minutes) based on desired temperature x (in °F) is y = 0.05x + 2. What does the slope 0.05 represent in this context?",
          choices: ["For each additional 1°F, preheat time increases by 0.05 minutes", "The oven starts at 0.05°F", "Preheat time decreases by 0.05 minutes per degree", "The maximum preheat time is 0.05 minutes"],
          correct: 0,
          explanation: "The slope of a line of best fit represents the rate of change: preheat time increases by 0.05 minutes for every 1°F increase in temperature."
        },
        {
          id: "q37",
          standard: "8.SP.3",
          type: "mc",
          prompt: "Using the same equation y = 0.05x + 2 (preheat time in minutes for temperature x in °F), what does the y-intercept of 2 represent?",
          choices: ["The preheat time (in minutes) when the temperature is 0°F", "The temperature when preheat time is 0", "The slope of the line", "The maximum temperature the oven can reach"],
          correct: 0,
          explanation: "The y-intercept is the value of y when x = 0, so it represents a preheat time of 2 minutes at a temperature of 0°F."
        },
        {
          id: "q38",
          standard: "8.SP.4",
          type: "mc",
          prompt: "A survey asked students in two age groups about their favorite type of recipe to cook. Results: Age 11-12 - Baking: 18, Grilling: 12, Total: 30. Age 13-14 - Baking: 14, Grilling: 26, Total: 40. Overall Total: Baking 32, Grilling 38, Total 70. What fraction of the 13-14 age group prefers grilling?",
          choices: ["26/40", "26/70", "14/40", "38/70"],
          correct: 0,
          explanation: "Of the 40 students in the 13-14 age group, 26 prefer grilling, so the fraction is 26/40."
        },
        {
          id: "q39",
          standard: "8.SP.4",
          type: "num",
          prompt: "Using the same two-way frequency table from the recipe survey (18 and 12 for ages 11-12; 14 and 26 for ages 13-14), how many total students were surveyed?",
          correct: ["70"],
          explanation: "Adding all the values: 18 + 12 + 14 + 26 = 70 students total."
        },
        {
          id: "q40",
          standard: "8.SP.4",
          type: "ms",
          prompt: "Using the same two-way frequency table (Age 11-12: Baking 18, Grilling 12; Age 13-14: Baking 14, Grilling 26), select the TWO statements that are true.",
          choices: ["More students overall prefer grilling (38) than baking (32).", "In the 11-12 age group, more students prefer baking than grilling.", "The total number of students surveyed is 100.", "In the 13-14 age group, more students prefer baking than grilling.", "Exactly half of all students surveyed prefer baking."],
          correct: [0, 1],
          explanation: "Overall, 38 students prefer grilling versus 32 for baking (true), and in the 11-12 group, 18 prefer baking versus 12 for grilling (true); the total is actually 70, and in the 13-14 group grilling (26) beats baking (14)."
        }
      ]
    }
  ]
};
