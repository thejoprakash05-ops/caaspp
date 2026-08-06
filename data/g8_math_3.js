window.TEST_DATA = {
  id: "g8_math_3",
  grade: 8,
  subject: "Math",
  title: "Grade 8 Math Practice Test 3",
  durationMinutes: 75,
  sections: [
    {
      name: "The Number System",
      questions: [
        {
          id: "q1",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A mission engineer is classifying measurement values. Which of the following numbers is irrational?",
          choices: ["0.75", "√16", "√20", "7/3"],
          correct: 2,
          explanation: "√16 = 4 and 7/3 and 0.75 are all rational, but 20 is not a perfect square, so √20 cannot be written as a fraction and is irrational."
        },
        {
          id: "q2",
          standard: "8.NS.1",
          type: "mc",
          prompt: "A space telescope's calibration ratio is recorded as the repeating decimal 0.6666.... What is this value written as a fraction?",
          choices: ["2/3", "3/4", "1/2", "5/6"],
          correct: 0,
          explanation: "Letting x = 0.666..., 10x = 6.666..., so 10x - x = 6, giving x = 6/9 = 2/3."
        },
        {
          id: "q3",
          standard: "8.NS.2",
          type: "num",
          prompt: "A circular satellite dish has an area of 50 square meters. Approximate the side length of a square with the same area, √50, to the nearest tenth of a meter.",
          correct: ["7.1"],
          explanation: "√50 ≈ 7.0710678..., which rounds to 7.1 since 7.1² = 50.41 and 7.0² = 49.0, and 50 is closer to 50.41."
        },
        {
          id: "q4",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Between which two consecutive integers does √75 lie?",
          choices: ["7 and 8", "8 and 9", "9 and 10", "6 and 7"],
          correct: 1,
          explanation: "8² = 64 and 9² = 81, and since 64 < 75 < 81, √75 lies between 8 and 9 (√75 ≈ 8.66)."
        },
        {
          id: "q5",
          standard: "8.NS.2",
          type: "mc",
          prompt: "An engineer estimates a launch trajectory correction distance as √10 kilometers. Which value is the closest approximation of √10?",
          choices: ["3.0", "3.16", "3.5", "10"],
          correct: 1,
          explanation: "3.16² = 9.9856, which is very close to 10, so √10 ≈ 3.16."
        },
        {
          id: "q6",
          standard: "8.NS.1",
          type: "ms",
          prompt: "Select the TWO numbers below that are irrational.",
          choices: ["√9", "√11", "22/7", "π", "0.454545..."],
          correct: [1, 3],
          explanation: "√9 = 3, 22/7 is a ratio of integers, and 0.454545... is a repeating decimal, so all three are rational. √11 is not a perfect square and π never terminates or repeats, so both are irrational."
        },
        {
          id: "q7",
          standard: "8.NS.2",
          type: "num",
          prompt: "A rover's search grid is a square with an area of 200 square meters. Approximate the side length, √200, to the nearest tenth of a meter.",
          correct: ["14.1"],
          explanation: "√200 ≈ 14.142135..., which rounds to 14.1 meters."
        },
        {
          id: "q8",
          standard: "8.NS.2",
          type: "mc",
          prompt: "Early mission planners needed a quick approximation for √2 to use in trajectory calculations. Which value is the best approximation?",
          choices: ["1.41", "1.5", "2.0", "0.71"],
          correct: 0,
          explanation: "1.41² = 1.9881, which is very close to 2, so √2 ≈ 1.41."
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
          prompt: "Simplify the expression: 3² × 3⁵",
          choices: ["3⁷", "3¹⁰", "9⁷", "3³"],
          correct: 0,
          explanation: "When multiplying powers with the same base, add the exponents: 3² × 3⁵ = 3^(2+5) = 3⁷."
        },
        {
          id: "q10",
          standard: "8.EE.1",
          type: "mc",
          prompt: "A sensor's error tolerance is expressed as 5⁻². What is the value of 5⁻²?",
          choices: ["1/25", "-10", "25", "-1/25"],
          correct: 0,
          explanation: "A negative exponent means take the reciprocal of the positive power: 5⁻² = 1/5² = 1/25."
        },
        {
          id: "q11",
          standard: "8.EE.3",
          type: "num",
          prompt: "The average distance from the Sun to Jupiter is about 7.78 × 10⁸ kilometers. Write this distance in standard (non-exponential) notation, as a whole number of kilometers.",
          correct: ["778000000", "778,000,000"],
          explanation: "Multiplying 7.78 by 10⁸ shifts the decimal point 8 places to the right, giving 778,000,000."
        },
        {
          id: "q12",
          standard: "8.EE.4",
          type: "mc",
          prompt: "A dust particle collected during a spacewalk has a mass of 2 × 10⁻⁶ kg, and a small bolt has a mass of 6 × 10⁻³ kg. How many times heavier is the bolt than the dust particle?",
          choices: ["3,000", "300", "30,000", "3"],
          correct: 0,
          explanation: "Divide the masses: (6 × 10⁻³) ÷ (2 × 10⁻⁶) = 3 × 10³ = 3,000, so the bolt is 3,000 times heavier."
        },
        {
          id: "q13",
          standard: "8.EE.5",
          type: "mc",
          prompt: "A rocket burns fuel at a constant rate. After 2 minutes it has used 500 kg of fuel, and after 5 minutes it has used 1,250 kg of fuel. What is the fuel burn rate, in kilograms per minute?",
          choices: ["250 kg/min", "200 kg/min", "150 kg/min", "300 kg/min"],
          correct: 0,
          explanation: "The rate is the slope: (1,250 - 500) ÷ (5 - 2) = 750 ÷ 3 = 250 kg per minute."
        },
        {
          id: "q14",
          standard: "8.EE.7",
          type: "num",
          prompt: "Solve for x: 5x - 12 = 3x + 8. Enter the value of x.",
          correct: ["10"],
          explanation: "Subtract 3x from both sides to get 2x - 12 = 8, then add 12 to both sides to get 2x = 20, so x = 10."
        },
        {
          id: "q15",
          standard: "8.EE.8",
          type: "mc",
          prompt: "Mission Control is comparing costs for two spacecraft. Spacecraft A costs $200,000 plus $500 per day to operate. Spacecraft B costs $350,000 plus $200 per day to operate. After how many days will the total costs of the two spacecraft be equal?",
          choices: ["500 days", "300 days", "150 days", "1,000 days"],
          correct: 0,
          explanation: "Set the costs equal: 200,000 + 500d = 350,000 + 200d. Subtracting 200d and 200,000 from both sides gives 300d = 150,000, so d = 500."
        },
        {
          id: "q16",
          standard: "8.EE.8",
          type: "ms",
          prompt: "A system of equations models two spacecraft trajectories: y = 2x + 3 and y = -x + 9. Select the TWO statements below that are true about this system.",
          choices: ["The solution is x = 2", "The lines are parallel", "The solution is (2, 7)", "The system has no solution", "The slopes are equal"],
          correct: [0, 2],
          explanation: "Setting the equations equal, 2x + 3 = -x + 9 gives 3x = 6, so x = 2 and y = 2(2) + 3 = 7. The single solution is (2, 7), and the lines have different slopes (2 and -1), so they are not parallel and there is exactly one solution."
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
          prompt: "A probe records its altitude (in km) at various times (in minutes) after launch. Which set of ordered pairs (time, altitude) represents a function?",
          choices: [
            "(0, 0), (1, 5), (2, 10), (3, 15)",
            "(0, 0), (1, 5), (1, 8), (2, 10)",
            "(0, 0), (0, 3), (1, 5), (2, 10)",
            "(1, 5), (1, 10), (2, 15), (3, 20)"
          ],
          correct: 0,
          explanation: "A relation is a function only if every input (time) has exactly one output (altitude). The other choices repeat a time value with two different altitudes."
        },
        {
          id: "q18",
          standard: "8.F.2",
          type: "mc",
          prompt: "Probe A's altitude is modeled by h = 15t + 200 (h in meters, t in minutes). Probe B's altitude is given by the table: (t=0, h=200), (t=2, h=250), (t=4, h=300). Which probe has a greater rate of climb?",
          choices: [
            "Probe A, because 15 m/min > 25 m/min",
            "Probe B, because 25 m/min > 15 m/min",
            "They have the same rate of climb",
            "Cannot be determined from the given information"
          ],
          correct: 1,
          explanation: "Probe A's rate is the slope 15 m/min. Probe B's rate from the table is (300 - 200) ÷ (4 - 0) = 25 m/min, which is greater than Probe A's rate."
        },
        {
          id: "q19",
          standard: "8.F.3",
          type: "num",
          prompt: "A function representing a satellite's speed is s(t) = -2t + 40, where t is time in minutes and s is speed in meters per second. What is s(6)?",
          correct: ["28"],
          explanation: "Substitute t = 6: s(6) = -2(6) + 40 = -12 + 40 = 28."
        },
        {
          id: "q20",
          standard: "8.F.3",
          type: "mc",
          prompt: "Which equation does NOT represent a linear function?",
          choices: ["y = 3x + 2", "y = 5x", "y = x² + 1", "y = -2x + 7"],
          correct: 2,
          explanation: "A linear function has the form y = mx + b with x raised only to the first power. y = x² + 1 has x squared, so it is not linear."
        },
        {
          id: "q21",
          standard: "8.F.4",
          type: "mc",
          prompt: "A rocket's fuel tank starts with 5,000 liters of fuel and empties at a constant rate of 125 liters per minute. Which equation models the fuel remaining, F, after t minutes?",
          choices: ["F = 5000 - 125t", "F = 125t - 5000", "F = 5000 + 125t", "F = 125 - 5000t"],
          correct: 0,
          explanation: "The initial amount (5,000) is the starting value, and the fuel decreases by 125 liters each minute, so F = 5000 - 125t."
        },
        {
          id: "q22",
          standard: "8.F.4",
          type: "num",
          prompt: "Using the fuel model F = 5000 - 125t (F in liters, t in minutes), how many minutes will it take for the fuel level to reach 1,250 liters?",
          correct: ["30"],
          explanation: "Set F = 1250: 1250 = 5000 - 125t, so 125t = 3750, giving t = 30 minutes."
        },
        {
          id: "q23",
          standard: "8.F.5",
          type: "mc",
          prompt: "Which description best matches a graph of a rocket's height during launch, if the height increases slowly at first, then increases rapidly, then levels off as the rocket reaches orbit?",
          choices: [
            "Height increases at a constant rate the entire time",
            "Height increases slowly, then rapidly, then levels off",
            "Height decreases throughout the flight",
            "Height stays constant, then suddenly drops"
          ],
          correct: 1,
          explanation: "The description matches a graph that starts with a shallow slope, becomes steep, and then flattens out, which is choice 2."
        },
        {
          id: "q24",
          standard: "8.F.5",
          type: "ms",
          prompt: "A weather balloon's altitude over time is described as: rising steadily for 10 minutes, staying constant for 5 minutes, then descending steadily for 8 minutes. Select the TWO statements that are true.",
          choices: [
            "The graph is increasing for the first 10 minutes",
            "The graph is decreasing for the first 10 minutes",
            "The graph is constant between minute 10 and minute 15",
            "The graph is increasing after minute 15",
            "The total flight time shown is 30 minutes"
          ],
          correct: [0, 2],
          explanation: "The balloon rises (increases) for the first 10 minutes, then stays constant from minute 10 to minute 15. After minute 15 it descends (not increases), and the total flight time is 10 + 5 + 8 = 23 minutes, not 30."
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
          prompt: "A satellite dish design is flipped across a vertical axis to create a symmetric mounting bracket. Which transformation is this?",
          choices: ["Translation", "Reflection", "Rotation", "Dilation"],
          correct: 1,
          explanation: "Flipping a figure across a line produces a mirror image, which is a reflection."
        },
        {
          id: "q26",
          standard: "8.G.2",
          type: "mc",
          prompt: "Triangle ABC is translated 4 units to the right and then rotated 90° to form triangle A'B'C'. What can you conclude about the two triangles?",
          choices: [
            "They are congruent, because translations and rotations preserve side lengths and angle measures",
            "They are similar but not congruent",
            "They are neither similar nor congruent",
            "They have different areas"
          ],
          correct: 0,
          explanation: "Translations and rotations are rigid motions that preserve distance and angle measure, so the image triangle is congruent to the original."
        },
        {
          id: "q27",
          standard: "8.G.5",
          type: "num",
          prompt: "Three ground stations track a satellite, and the lines connecting the stations to the satellite form a triangle. Two of the triangle's angles measure 55° and 65°. What is the measure, in degrees, of the third angle?",
          correct: ["60"],
          explanation: "The angles of a triangle sum to 180°, so the third angle is 180 - 55 - 65 = 60 degrees."
        },
        {
          id: "q28",
          standard: "8.G.5",
          type: "mc",
          prompt: "Two parallel support beams on a satellite antenna are cut by a diagonal brace. If one of the angles formed measures 70°, what is the measure of its alternate interior angle?",
          choices: ["70°", "110°", "20°", "180°"],
          correct: 0,
          explanation: "When parallel lines are cut by a transversal, alternate interior angles are congruent, so the alternate interior angle also measures 70°."
        },
        {
          id: "q29",
          standard: "8.G.7",
          type: "mc",
          prompt: "A support frame for a satellite dish forms a right triangle with legs of 6 meters and 8 meters. What is the length of the hypotenuse, in meters?",
          choices: ["10", "14", "48", "100"],
          correct: 0,
          explanation: "By the Pythagorean theorem, 6² + 8² = 36 + 64 = 100, and √100 = 10 meters."
        },
        {
          id: "q30",
          standard: "8.G.7",
          type: "num",
          prompt: "A rover travels 9 km east and then 12 km north. What is the straight-line distance, in kilometers, from its starting point?",
          correct: ["15"],
          explanation: "By the Pythagorean theorem, distance² = 9² + 12² = 81 + 144 = 225, and √225 = 15 km."
        },
        {
          id: "q31",
          standard: "8.G.9",
          type: "mc",
          prompt: "A cylindrical rocket fuel tank has a radius of 3 meters and a height of 10 meters. Using the formula V = πr²h and π ≈ 3.14, what is the volume of the tank, in cubic meters?",
          choices: ["282.6", "94.2", "339.12", "28.26"],
          correct: 0,
          explanation: "V = 3.14 × 3² × 10 = 3.14 × 9 × 10 = 282.6 cubic meters."
        },
        {
          id: "q32",
          standard: "8.G.9",
          type: "ms",
          prompt: "A model planet is a sphere with a radius of 6 cm. Using V = (4/3)πr³ and π ≈ 3.14, select the TWO true statements.",
          choices: [
            "The volume is approximately 904.32 cubic centimeters",
            "The volume is approximately 452.16 cubic centimeters",
            "r³ = 216",
            "r³ = 36",
            "The volume is greater than 1,000 cubic centimeters"
          ],
          correct: [0, 2],
          explanation: "r³ = 6³ = 216, and V = (4/3) × 3.14 × 216 = 904.32 cubic centimeters, which is less than 1,000."
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
          prompt: "A scientist plots the number of solar panels on a satellite (x) against the power output in watts (y). As x increases, y also increases in a roughly straight-line pattern. What type of association does this scatter plot show?",
          choices: ["Positive linear association", "Negative linear association", "No association", "Nonlinear association"],
          correct: 0,
          explanation: "Since both variables increase together and the pattern is roughly a straight line, the scatter plot shows a positive linear association."
        },
        {
          id: "q34",
          standard: "8.SP.1",
          type: "mc",
          prompt: "In a scatter plot of rocket launch temperature versus number of O-ring failures, most points cluster near a trend line except for one point far above the line. What does that point represent?",
          choices: ["An outlier", "The mean", "The median", "The mode"],
          correct: 0,
          explanation: "A data point that does not fit the overall pattern of the data is called an outlier."
        },
        {
          id: "q35",
          standard: "8.SP.2",
          type: "num",
          prompt: "A scatter plot of a rover's distance traveled (km) over time (hours) shows the points (2, 10) and (6, 34) lying on the trend line. What is the slope of the line, in km per hour?",
          correct: ["6"],
          explanation: "Slope = (34 - 10) ÷ (6 - 2) = 24 ÷ 4 = 6 km per hour."
        },
        {
          id: "q36",
          standard: "8.SP.3",
          type: "mc",
          prompt: "A linear model for a weather balloon's altitude is h = 300t + 50, where h is altitude in meters and t is time in minutes. What does the value 50 represent?",
          choices: [
            "The balloon's altitude at time t = 0, in meters",
            "The rate of ascent, in meters per minute",
            "The total flight time, in minutes",
            "The maximum altitude reached"
          ],
          correct: 0,
          explanation: "In the form h = mt + b, the constant b = 50 is the initial value, the altitude when t = 0."
        },
        {
          id: "q37",
          standard: "8.SP.3",
          type: "mc",
          prompt: "In the model h = 300t + 50 from the weather balloon's ascent, what does the value 300 represent?",
          choices: [
            "The rate of ascent, in meters per minute",
            "The starting altitude, in meters",
            "The total distance traveled",
            "The number of minutes flown"
          ],
          correct: 0,
          explanation: "In the form h = mt + b, the coefficient m = 300 is the slope, which represents the rate of change of altitude with respect to time."
        },
        {
          id: "q38",
          standard: "8.SP.3",
          type: "num",
          prompt: "Using the model h = 300t + 50 (h in meters, t in minutes), what is the predicted altitude, in meters, after 4 minutes?",
          correct: ["1250"],
          explanation: "Substitute t = 4: h = 300(4) + 50 = 1200 + 50 = 1250 meters."
        },
        {
          id: "q39",
          standard: "8.SP.4",
          type: "mc",
          prompt: "In an experiment testing two rocket engine designs, Engine A succeeded on 18 of 20 trials, and Engine B succeeded on 15 of 25 trials. Which engine had a higher success rate?",
          choices: [
            "Engine A, with a 90% success rate compared to 60%",
            "Engine B, with a 60% success rate compared to 90%",
            "They had equal success rates",
            "Cannot be determined from the given information"
          ],
          correct: 0,
          explanation: "Engine A's success rate is 18/20 = 90%, and Engine B's is 15/25 = 60%, so Engine A had the higher rate."
        },
        {
          id: "q40",
          standard: "8.SP.4",
          type: "ms",
          prompt: "A two-way table shows results of testing two parachute designs over 100 total trials: Design X had 40 passes and 10 fails; Design Y had 30 passes and 20 fails. Select the TWO true statements.",
          choices: [
            "Design X has a higher pass rate than Design Y",
            "The overall pass rate for both designs combined is 70%",
            "Design Y had more total trials than Design X",
            "The overall fail rate for both designs combined is 50%",
            "Design X had exactly 10 fewer passes than Design Y"
          ],
          correct: [0, 1],
          explanation: "Design X's pass rate is 40/50 = 80% and Design Y's is 30/50 = 60%, so X is higher. Combined, there are 70 passes out of 100 trials, which is 70%. Both designs had 50 total trials each, and Design X had 10 more passes than Design Y, not fewer."
        }
      ]
    }
  ]
};
