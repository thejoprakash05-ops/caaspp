window.TEST_DATA = {
  id: "g7_math_3",
  grade: 7,
  subject: "Math",
  title: "Grade 7 Math Practice Test 3",
  durationMinutes: 75,
  sections: [
    {
      name: "Ratios & Proportional Relationships",
      questions: [
        {
          id: "q1",
          standard: "7.RP.1",
          type: "mc",
          prompt: "On a road trip, a car travels 297 miles using 9 gallons of gas. What is the car's fuel efficiency in miles per gallon?",
          choices: ["27 mpg", "33 mpg", "36 mpg", "42 mpg"],
          correct: 1,
          explanation: "Divide distance by gallons used: 297 ÷ 9 = 33 miles per gallon."
        },
        {
          id: "q2",
          standard: "7.RP.1",
          type: "mc",
          prompt: "During a road trip, a family drives 210 miles in 3.5 hours. What is their average speed in miles per hour?",
          choices: ["50 mph", "55 mph", "60 mph", "65 mph"],
          correct: 2,
          explanation: "Divide distance by time: 210 ÷ 3.5 = 60 miles per hour."
        },
        {
          id: "q3",
          standard: "7.RP.2",
          type: "mc",
          prompt: "A scientist mixes a saline solution so that the amount of salt is always proportional to the amount of water. If 4 liters of water require 20 grams of salt, how many grams of salt are needed for 7 liters of water?",
          choices: ["28 g", "32 g", "35 g", "40 g"],
          correct: 2,
          explanation: "The unit rate is 20 ÷ 4 = 5 grams per liter, so 7 liters need 7 × 5 = 35 grams."
        },
        {
          id: "q4",
          standard: "7.RP.2",
          type: "mc",
          prompt: "A road trip's distance d (miles) and time t (hours) are related by d = 62t. What does 62 represent in this situation?",
          choices: ["The total distance traveled", "The average speed in miles per hour", "The total time of the trip in hours", "The number of gallons of gas used"],
          correct: 1,
          explanation: "In d = kt, the constant k is the rate of change, which here is the speed in miles per hour."
        },
        {
          id: "q5",
          standard: "7.RP.3",
          type: "mc",
          prompt: "A student dilutes a solution so that 15 mL of a 40 mL mixture is acid. What percent of the mixture is acid?",
          choices: ["25%", "30%", "37.5%", "40%"],
          correct: 2,
          explanation: "Divide the part by the whole: 15 ÷ 40 = 0.375 = 37.5%."
        },
        {
          id: "q6",
          standard: "7.RP.3",
          type: "mc",
          prompt: "The price of gasoline rose from $3.20 per gallon to $3.68 per gallon. What is the percent increase?",
          choices: ["10%", "12%", "15%", "18%"],
          correct: 2,
          explanation: "The increase is $0.48. Then 0.48 ÷ 3.20 = 0.15 = 15% increase."
        },
        {
          id: "q7",
          standard: "7.RP.2",
          type: "ms",
          prompt: "Select the TWO relationships between distance traveled (y) and time (x) that represent a proportional (constant speed) relationship.",
          choices: ["y = 55x", "y = 55x + 10", "y = 12x + 5", "y = 8x", "y = x + 20"],
          correct: [0, 3],
          explanation: "Proportional relationships have the form y = kx with no added constant, so y = 55x and y = 8x qualify."
        },
        {
          id: "q8",
          standard: "7.RP.1",
          type: "num",
          prompt: "A hiker on a road trip walks 2.5 miles in 0.5 hours. What is the hiker's speed in miles per hour? Enter the number of miles per hour.",
          correct: ["5"],
          explanation: "Divide distance by time: 2.5 ÷ 0.5 = 5 miles per hour."
        }
      ]
    },
    {
      name: "The Number System",
      questions: [
        {
          id: "q9",
          standard: "7.NS.1",
          type: "mc",
          prompt: "During a science experiment, the temperature of a solution was -8°C. After heating, it rose by 15°C. What is the new temperature?",
          choices: ["-23°C", "-7°C", "7°C", "23°C"],
          correct: 2,
          explanation: "Add the change to the starting temperature: -8 + 15 = 7°C."
        },
        {
          id: "q10",
          standard: "7.NS.1",
          type: "mc",
          prompt: "On a road trip, hikers started at an elevation of -120 feet (below sea level) and climbed to an elevation of 450 feet. What was the total change in elevation?",
          choices: ["330 ft", "450 ft", "570 ft", "690 ft"],
          correct: 2,
          explanation: "Subtract the starting elevation from the ending elevation: 450 - (-120) = 570 feet."
        },
        {
          id: "q11",
          standard: "7.NS.2",
          type: "mc",
          prompt: "A lab records a temperature change of -3°C per hour for 4 hours. What is the total change in temperature?",
          choices: ["-12°C", "-7°C", "7°C", "12°C"],
          correct: 0,
          explanation: "Multiply the rate by the time: -3 × 4 = -12°C."
        },
        {
          id: "q12",
          standard: "7.NS.2",
          type: "mc",
          prompt: "A car's elevation dropped 240 feet over a descent that took 8 equal stages. What was the elevation change per stage?",
          choices: ["-40 ft", "-30 ft", "-24 ft", "30 ft"],
          correct: 1,
          explanation: "Divide the total change by the number of stages: -240 ÷ 8 = -30 feet per stage."
        },
        {
          id: "q13",
          standard: "7.NS.1",
          type: "mc",
          prompt: "A beaker's temperature was recorded as -2 3/4 °C. It then increased by 5 1/2 °C. What is the new temperature?",
          choices: ["2 3/4°C", "3 1/4°C", "-2 3/4°C", "8 1/4°C"],
          correct: 0,
          explanation: "Add the values: -2.75 + 5.5 = 2.75, which is 2 3/4°C."
        },
        {
          id: "q14",
          standard: "7.NS.3",
          type: "mc",
          prompt: "A family's road trip budget tracker shows the following changes: -$45.50 for gas, -$120.25 for lodging, and +$30.75 refund. What is the net change to their budget?",
          choices: ["-$135.00", "-$196.50", "-$104.00", "-$115.00"],
          correct: 0,
          explanation: "Combine the values: -45.50 - 120.25 + 30.75 = -$135.00."
        },
        {
          id: "q15",
          standard: "7.NS.1",
          type: "ms",
          prompt: "Select the TWO expressions that are equivalent to -3.",
          choices: ["-8 + 5", "2 - 5", "-4 - 2", "4 - 1", "-6 + 2"],
          correct: [0, 1],
          explanation: "-8 + 5 = -3 and 2 - 5 = -3. The other expressions equal -6, 3, and -4."
        },
        {
          id: "q16",
          standard: "7.NS.3",
          type: "num",
          prompt: "On a road trip, the elevation changed by -85 feet, then +230 feet, then -60 feet. What is the total change in elevation, in feet?",
          correct: ["85"],
          explanation: "Add all the changes: -85 + 230 - 60 = 85 feet."
        }
      ]
    },
    {
      name: "Expressions & Equations",
      questions: [
        {
          id: "q17",
          standard: "7.EE.1",
          type: "mc",
          prompt: "Simplify: 3(2x - 5) + 4x",
          choices: ["10x - 15", "6x - 15", "10x - 5", "6x + 4x - 15"],
          correct: 0,
          explanation: "Distribute and combine like terms: 6x - 15 + 4x = 10x - 15."
        },
        {
          id: "q18",
          standard: "7.EE.1",
          type: "mc",
          prompt: "A group's road trip cost is modeled by 5g + 12 + 3g - 4, where g is the number of gallons of gas purchased. Simplify this expression.",
          choices: ["8g + 8", "8g + 16", "5g + 8", "8g - 8"],
          correct: 0,
          explanation: "Combine like terms: 5g + 3g = 8g and 12 - 4 = 8, giving 8g + 8."
        },
        {
          id: "q19",
          standard: "7.EE.2",
          type: "mc",
          prompt: "A scientist writes the cost of chemicals as 6c + 18, where c is the number of containers. Which expression is equivalent?",
          choices: ["6(c + 3)", "6(c + 18)", "3(2c + 9)", "6c + 3"],
          correct: 0,
          explanation: "Factor out the greatest common factor, 6: 6c + 18 = 6(c + 3)."
        },
        {
          id: "q20",
          standard: "7.EE.3",
          type: "mc",
          prompt: "A family's total road trip time t (in hours) satisfies the equation 2t - 5 = 17. Solve for t.",
          choices: ["9", "11", "13", "6"],
          correct: 1,
          explanation: "Add 5 to both sides to get 2t = 22, then divide by 2 to get t = 11."
        },
        {
          id: "q21",
          standard: "7.EE.4",
          type: "mc",
          prompt: "For a science field trip, the budget equation is (b/4) + 15 = 45, where b is the total budget in dollars. Solve for b.",
          choices: ["100", "110", "120", "150"],
          correct: 2,
          explanation: "Subtract 15 from both sides to get b/4 = 30, then multiply by 4 to get b = 120."
        },
        {
          id: "q22",
          standard: "7.EE.4",
          type: "mc",
          prompt: "A family has $500 for a road trip. They've already spent $180 on gas. If lodging costs $40 per night, write and solve an inequality for the number of nights n they can afford.",
          choices: ["n ≤ 8", "n ≤ 17", "n ≤ 12", "n ≥ 8"],
          correct: 0,
          explanation: "180 + 40n ≤ 500 leads to 40n ≤ 320, so n ≤ 8."
        },
        {
          id: "q23",
          standard: "7.EE.4",
          type: "ms",
          prompt: "A science experiment requires the number of trials x to satisfy 3x - 4 > 11. Select the TWO values of x that make this inequality true.",
          choices: ["3", "4", "5", "6", "9"],
          correct: [3, 4],
          explanation: "Solving 3x - 4 > 11 gives x > 5, so among the choices only 6 and 9 satisfy the inequality."
        },
        {
          id: "q24",
          standard: "7.EE.3",
          type: "num",
          prompt: "Solve for x: 4(x - 3) = 2x + 10. Enter the value of x.",
          correct: ["11"],
          explanation: "Distribute to get 4x - 12 = 2x + 10, then solve: 2x = 22, so x = 11."
        }
      ]
    },
    {
      name: "Geometry",
      questions: [
        {
          id: "q25",
          standard: "7.G.1",
          type: "mc",
          prompt: "On a road trip map, the scale is 1 inch = 25 miles. If two cities are 4.5 inches apart on the map, what is the actual distance between them?",
          choices: ["100 miles", "112.5 miles", "120 miles", "135 miles"],
          correct: 1,
          explanation: "Multiply the map distance by the scale: 4.5 × 25 = 112.5 miles."
        },
        {
          id: "q26",
          standard: "7.G.5",
          type: "mc",
          prompt: "Two angles are supplementary. One angle measures 64°. What is the measure of the other angle?",
          choices: ["26°", "106°", "116°", "126°"],
          correct: 2,
          explanation: "Supplementary angles sum to 180°, so 180 - 64 = 116°."
        },
        {
          id: "q27",
          standard: "7.G.5",
          type: "mc",
          prompt: "Two angles are complementary. One angle measures 37°. What is the measure of the other angle?",
          choices: ["43°", "53°", "63°", "143°"],
          correct: 1,
          explanation: "Complementary angles sum to 90°, so 90 - 37 = 53°."
        },
        {
          id: "q28",
          standard: "7.G.4",
          type: "mc",
          prompt: "A Petri dish used in a science experiment has a diameter of 10 cm. What is its circumference? (Use π ≈ 3.14)",
          choices: ["15.7 cm", "31.4 cm", "78.5 cm", "62.8 cm"],
          correct: 1,
          explanation: "Circumference equals π times diameter: 3.14 × 10 = 31.4 cm."
        },
        {
          id: "q29",
          standard: "7.G.4",
          type: "mc",
          prompt: "A car's wheel has a radius of 14 inches. What is the area of the wheel? (Use π ≈ 3.14)",
          choices: ["43.96 in²", "87.92 in²", "615.44 in²", "1230.88 in²"],
          correct: 2,
          explanation: "Area equals π times radius squared: 3.14 × 14² = 3.14 × 196 = 615.44 in²."
        },
        {
          id: "q30",
          standard: "7.G.6",
          type: "mc",
          prompt: "A container used to store chemical samples is shaped like a rectangular prism with length 8 cm, width 5 cm, and height 6 cm. What is its volume?",
          choices: ["19 cm³", "150 cm³", "240 cm³", "280 cm³"],
          correct: 2,
          explanation: "Volume equals length times width times height: 8 × 5 × 6 = 240 cm³."
        },
        {
          id: "q31",
          standard: "7.G.6",
          type: "ms",
          prompt: "A science experiment uses a cylindrical container. Select the TWO measurements needed to calculate its volume.",
          choices: ["Radius of the base", "Slant height", "Height of the cylinder", "Diagonal of the base", "Perimeter of the base"],
          correct: [0, 2],
          explanation: "Cylinder volume uses the formula V = πr²h, which requires the radius of the base and the height."
        },
        {
          id: "q32",
          standard: "7.G.4",
          type: "num",
          prompt: "A circular Petri dish has a radius of 6 cm. What is its area, in cm²? (Use π ≈ 3.14) Enter the numeric value.",
          correct: ["113.04"],
          explanation: "Area equals π times radius squared: 3.14 × 6² = 3.14 × 36 = 113.04 cm²."
        }
      ]
    },
    {
      name: "Statistics & Probability",
      questions: [
        {
          id: "q33",
          standard: "7.SP.1",
          type: "mc",
          prompt: "A scientist wants to know the average growth of plants in a large field. Which sampling method would produce the most representative random sample?",
          choices: ["Measuring only the plants nearest the entrance", "Randomly selecting plants from different areas of the field", "Measuring only the tallest plants", "Measuring only plants chosen by the scientist's assistant"],
          correct: 1,
          explanation: "A representative random sample selects plants from throughout the field, avoiding bias toward one location or trait."
        },
        {
          id: "q34",
          standard: "7.SP.4",
          type: "mc",
          prompt: "Group A's experiment trial results (in seconds): 12, 14, 16, 18. Group B's trial results: 10, 13, 19, 22. What is the mean of Group A's data?",
          choices: ["14", "15", "16", "17"],
          correct: 1,
          explanation: "Add the values and divide by the count: (12 + 14 + 16 + 18) ÷ 4 = 60 ÷ 4 = 15."
        },
        {
          id: "q35",
          standard: "7.SP.3",
          type: "mc",
          prompt: "Group A's data has a mean of 15 and a mean absolute deviation (MAD) of 1.5. Group B's data has a mean of 15 and a MAD of 4. Which statement is true?",
          choices: ["Group A's data is more variable than Group B's", "Group B's data is more variable than Group A's", "Both groups have identical variability", "The means being equal means the MAD must be equal"],
          correct: 1,
          explanation: "A larger MAD means the data values are spread farther from the mean, so Group B is more variable."
        },
        {
          id: "q36",
          standard: "7.SP.5",
          type: "mc",
          prompt: "On a road trip, the weather forecast shows a 3 in 10 chance of rain each day. Expressed as a probability, what is the chance it does NOT rain?",
          choices: ["3/10", "7/10", "1/10", "10/10"],
          correct: 1,
          explanation: "The probability of an event and its complement sum to 1, so 1 - 3/10 = 7/10."
        },
        {
          id: "q37",
          standard: "7.SP.7",
          type: "mc",
          prompt: "A scientist has 5 red samples, 3 blue samples, and 2 green samples in a bag, all equally likely to be drawn. What is the probability of randomly drawing a blue sample?",
          choices: ["1/5", "3/10", "1/2", "2/5"],
          correct: 1,
          explanation: "There are 10 samples total, so the probability of blue is 3/10."
        },
        {
          id: "q38",
          standard: "7.SP.8",
          type: "mc",
          prompt: "On a two-day road trip, the probability of rain each day is 1/4, independent of the other day. What is the probability that it rains on BOTH days?",
          choices: ["1/2", "1/8", "1/16", "1/4"],
          correct: 2,
          explanation: "For independent events, multiply the probabilities: 1/4 × 1/4 = 1/16."
        },
        {
          id: "q39",
          standard: "7.SP.2",
          type: "ms",
          prompt: "A researcher takes multiple random samples of plant heights from a field to estimate the true average height. Select the TWO statements that are true about this process.",
          choices: ["Random samples help produce an estimate that is representative of the population.", "Using only one small sample guarantees the exact population mean.", "Larger random samples generally produce more reliable estimates.", "Non-random samples (like choosing only convenient plants) are just as reliable as random samples.", "Sampling is unnecessary if the population is very large."],
          correct: [0, 2],
          explanation: "Random sampling supports representative estimates, and increasing sample size generally improves reliability; the other statements are false."
        },
        {
          id: "q40",
          standard: "7.SP.6",
          type: "num",
          prompt: "A weather model predicts a 1/5 probability of rain on any given day of a road trip. Out of 25 days, how many days would you expect it to rain?",
          correct: ["5"],
          explanation: "Multiply the probability by the number of trials: 25 × 1/5 = 5 days."
        }
      ]
    }
  ]
};
