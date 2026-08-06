window.TEST_DATA = {
  id: "g7_math_1",
  grade: 7,
  subject: "Math",
  title: "Grade 7 Math Practice Test 1",
  durationMinutes: 75,
  sections: [
    {
      name: "Ratios & Proportional Relationships",
      questions: [
        {
          id: "q1",
          standard: "7.RP.2",
          type: "mc",
          prompt: "A recipe calls for 3 cups of flour for every 2 cups of sugar. If a baker uses 12 cups of flour, how many cups of sugar are needed?",
          choices: ["6 cups", "8 cups", "9 cups", "18 cups"],
          correct: 1,
          explanation: "The ratio 3:2 scales by a factor of 4 (since 3 x 4 = 12), so sugar = 2 x 4 = 8 cups."
        },
        {
          id: "q2",
          standard: "7.RP.1",
          type: "mc",
          prompt: "A store sells 5 pounds of apples for $8.75. What is the price per pound?",
          choices: ["$1.50", "$1.75", "$2.00", "$2.25"],
          correct: 1,
          explanation: "Divide the total cost by the weight: $8.75 / 5 = $1.75 per pound."
        },
        {
          id: "q3",
          standard: "7.RP.3",
          type: "mc",
          prompt: "A shirt originally costs $40. The store increases the price by 15%. What is the new price?",
          choices: ["$42", "$44", "$46", "$48"],
          correct: 2,
          explanation: "15% of $40 is $6, so the new price is $40 + $6 = $46."
        },
        {
          id: "q4",
          standard: "7.RP.3",
          type: "mc",
          prompt: "Maria buys a backpack for $60 before tax. The sales tax rate is 8%. What is the total cost including tax?",
          choices: ["$62.40", "$64.80", "$66.00", "$68.00"],
          correct: 1,
          explanation: "Tax is 8% of $60 = $4.80, so the total is $60 + $4.80 = $64.80."
        },
        {
          id: "q5",
          standard: "7.RP.3",
          type: "mc",
          prompt: "A video game is on sale for 25% off its original price of $52. What is the sale price?",
          choices: ["$36.00", "$38.00", "$39.00", "$41.00"],
          correct: 2,
          explanation: "25% of $52 is $13, so the sale price is $52 - $13 = $39."
        },
        {
          id: "q6",
          standard: "7.RP.3",
          type: "mc",
          prompt: "Jason deposits $500 into a savings account that earns 4% simple interest per year. How much interest will he earn after 3 years?",
          choices: ["$20", "$40", "$60", "$80"],
          correct: 2,
          explanation: "Simple interest = P x r x t = 500 x 0.04 x 3 = $60."
        },
        {
          id: "q7",
          standard: "7.RP.2",
          type: "ms",
          prompt: "Which of the following represent a proportional relationship between x and y? Select all that apply.",
          choices: ["y = 3x", "y = 2x + 1", "y = -5x", "y = x^2", "The ratio y/x is constant at 4 for all points", "y = 7 (constant for all x)"],
          correct: [0, 2, 4],
          explanation: "A proportional relationship has a constant ratio y/x and passes through the origin, so y = 3x, y = -5x, and a constant ratio of 4 all qualify."
        },
        {
          id: "q8",
          standard: "7.RP.1",
          type: "num",
          prompt: "A car travels 210 miles in 3.5 hours. What is the unit rate in miles per hour?",
          correct: ["60"],
          explanation: "Divide distance by time: 210 / 3.5 = 60 miles per hour."
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
          prompt: "The temperature at 6 a.m. was -8°F. By noon, it had risen 15°F. What was the temperature at noon?",
          choices: ["5°F", "7°F", "9°F", "-7°F"],
          correct: 1,
          explanation: "-8 + 15 = 7, so the temperature at noon was 7°F."
        },
        {
          id: "q10",
          standard: "7.NS.1",
          type: "mc",
          prompt: "A submarine is at a depth of -120 feet. It descends another 45 feet. What is its new depth?",
          choices: ["-75 feet", "-135 feet", "-165 feet", "-175 feet"],
          correct: 2,
          explanation: "Descending means subtracting further: -120 + (-45) = -165 feet."
        },
        {
          id: "q11",
          standard: "7.NS.3",
          type: "mc",
          prompt: "Maya's bank account balance is -$45.50. She deposits $60.25. What is her new balance?",
          choices: ["$14.75", "$15.75", "$105.75", "-$14.75"],
          correct: 0,
          explanation: "-45.50 + 60.25 = 14.75, so her new balance is $14.75."
        },
        {
          id: "q12",
          standard: "7.NS.2",
          type: "mc",
          prompt: "Multiply: (-6) x (-4) x (-2)",
          choices: ["-48", "48", "-24", "24"],
          correct: 0,
          explanation: "(-6) x (-4) = 24, and 24 x (-2) = -48. An odd number of negative factors gives a negative result."
        },
        {
          id: "q13",
          standard: "7.NS.2",
          type: "mc",
          prompt: "Divide: -3/4 ÷ 1/8",
          choices: ["-6", "-1/6", "6", "1/6"],
          correct: 0,
          explanation: "Dividing by a fraction means multiplying by its reciprocal: -3/4 x 8/1 = -24/4 = -6."
        },
        {
          id: "q14",
          standard: "7.NS.3",
          type: "mc",
          prompt: "A hiker starts at an elevation of 250 feet, descends 375 feet, then climbs 120 feet. What is the hiker's final elevation?",
          choices: ["-5 feet", "5 feet", "-125 feet", "125 feet"],
          correct: 0,
          explanation: "250 - 375 + 120 = -5, so the final elevation is -5 feet."
        },
        {
          id: "q15",
          standard: "7.NS.1",
          type: "ms",
          prompt: "Which of the following expressions are equal to -12? Select all that apply.",
          choices: ["-8 + (-4)", "8 + (-4)", "-20 + 8", "20 - 8", "-6 + (-6)"],
          correct: [0, 2, 4],
          explanation: "-8 + (-4) = -12, -20 + 8 = -12, and -6 + (-6) = -12. The other expressions equal 4 and 12."
        },
        {
          id: "q16",
          standard: "7.NS.3",
          type: "num",
          prompt: "Evaluate: -2.5 + 4.75 - 1.25. Enter your answer as a decimal.",
          correct: ["1", "1.0", "1.00"],
          explanation: "-2.5 + 4.75 = 2.25, and 2.25 - 1.25 = 1."
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
          prompt: "Simplify: 4(2x - 3) + 5x",
          choices: ["13x - 12", "13x - 3", "8x - 12 + 5x", "9x - 12"],
          correct: 0,
          explanation: "Distribute: 8x - 12 + 5x, then combine like terms: 13x - 12."
        },
        {
          id: "q18",
          standard: "7.EE.1",
          type: "mc",
          prompt: "Which expression is equivalent to 6x + 15?",
          choices: ["3(2x + 5)", "6(x + 15)", "3(3x + 5)", "2(3x + 15)"],
          correct: 0,
          explanation: "Factor out the greatest common factor, 3: 3(2x + 5) = 6x + 15."
        },
        {
          id: "q19",
          standard: "7.EE.4",
          type: "mc",
          prompt: "Solve for x: 3x - 7 = 20",
          choices: ["7", "8", "9", "11"],
          correct: 2,
          explanation: "Add 7 to both sides: 3x = 27, then divide by 3: x = 9."
        },
        {
          id: "q20",
          standard: "7.EE.4",
          type: "mc",
          prompt: "Solve the inequality: 2x + 5 < 17",
          choices: ["x < 6", "x < 11", "x > 6", "x < 5"],
          correct: 0,
          explanation: "Subtract 5 from both sides: 2x < 12, then divide by 2: x < 6."
        },
        {
          id: "q21",
          standard: "7.EE.3",
          type: "mc",
          prompt: "A store charges $15 for a T-shirt plus 8% sales tax. Which expression gives the total cost for n T-shirts?",
          choices: ["15n + 0.08", "1.08(15n)", "15(n + 0.08)", "0.08(15n)"],
          correct: 1,
          explanation: "The total cost before tax is 15n, and adding 8% tax multiplies it by 1.08, giving 1.08(15n)."
        },
        {
          id: "q22",
          standard: "7.EE.2",
          type: "ms",
          prompt: "Which of the following are equivalent to 5(x + 4) - 2x? Select all that apply.",
          choices: ["3x + 20", "5x + 20 - 2x", "3(x+20)", "x + 24", "3x + 20 - 0"],
          correct: [0, 1, 4],
          explanation: "5(x + 4) - 2x = 5x + 20 - 2x = 3x + 20, and 3x + 20 - 0 is the same value; the other two options simplify differently."
        },
        {
          id: "q23",
          standard: "7.EE.4",
          type: "ms",
          prompt: "For the equation 4(x - 2) = 2x + 10, which statements are true? Select all that apply.",
          choices: ["x = 9", "x = 6", "The solution checks: 4(9-2) = 2(9)+10", "The equation has no solution", "4x - 8 = 2x + 10 is equivalent to 2x = 18"],
          correct: [0, 2, 4],
          explanation: "Distributing gives 4x - 8 = 2x + 10, which simplifies to 2x = 18 and x = 9; checking gives 4(7) = 28 and 2(9)+10 = 28."
        },
        {
          id: "q24",
          standard: "7.EE.3",
          type: "num",
          prompt: "A phone case costs $18 and is on sale for 20% off. If sales tax is 5%, what is the final price? Round to the nearest cent.",
          correct: ["15.12"],
          explanation: "The discounted price is 18 x 0.80 = $14.40, and adding 5% tax gives 14.40 x 1.05 = $15.12."
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
          prompt: "A scale drawing uses a scale of 1 inch = 5 feet. If a wall measures 8 inches on the drawing, how long is the actual wall?",
          choices: ["13 feet", "35 feet", "40 feet", "45 feet"],
          correct: 2,
          explanation: "Multiply the drawing length by the scale factor: 8 x 5 = 40 feet."
        },
        {
          id: "q26",
          standard: "7.G.5",
          type: "mc",
          prompt: "Two angles are complementary. If one angle measures 37°, what is the measure of the other angle?",
          choices: ["43°", "53°", "63°", "143°"],
          correct: 1,
          explanation: "Complementary angles sum to 90°, so the other angle is 90 - 37 = 53°."
        },
        {
          id: "q27",
          standard: "7.G.5",
          type: "mc",
          prompt: "Two angles are supplementary. One angle is 3 times the other. What is the measure of the smaller angle?",
          choices: ["30°", "36°", "45°", "60°"],
          correct: 2,
          explanation: "Let the smaller angle be x, so x + 3x = 180, giving 4x = 180 and x = 45°."
        },
        {
          id: "q28",
          standard: "7.G.4",
          type: "mc",
          prompt: "Find the circumference of a circle with a radius of 7 cm. Use π ≈ 22/7.",
          choices: ["22 cm", "44 cm", "154 cm", "49 cm"],
          correct: 1,
          explanation: "Circumference = 2πr = 2 x (22/7) x 7 = 44 cm."
        },
        {
          id: "q29",
          standard: "7.G.4",
          type: "mc",
          prompt: "Find the area of a circle with a diameter of 10 meters. Use π ≈ 3.14.",
          choices: ["31.4 m^2", "62.8 m^2", "78.5 m^2", "157 m^2"],
          correct: 2,
          explanation: "The radius is 5 m, so area = πr^2 = 3.14 x 25 = 78.5 m^2."
        },
        {
          id: "q30",
          standard: "7.G.6",
          type: "mc",
          prompt: "A rectangular prism has length 6 cm, width 4 cm, and height 3 cm. What is its volume?",
          choices: ["13 cm^3", "72 cm^3", "84 cm^3", "96 cm^3"],
          correct: 1,
          explanation: "Volume = length x width x height = 6 x 4 x 3 = 72 cm^3."
        },
        {
          id: "q31",
          standard: "7.G.5",
          type: "ms",
          prompt: "Vertical angles are formed when two lines intersect. Which statements about angle relationships are always true? Select all that apply.",
          choices: ["Vertical angles are congruent", "Adjacent angles formed by intersecting lines are always complementary", "A linear pair of angles is supplementary", "Vertical angles always add up to 180°", "Adjacent angles in a linear pair share a common side"],
          correct: [0, 2, 4],
          explanation: "Vertical angles are always congruent, a linear pair is always supplementary (sums to 180°), and adjacent angles in a linear pair share a ray; vertical angles are equal, not necessarily supplementary."
        },
        {
          id: "q32",
          standard: "7.G.6",
          type: "num",
          prompt: "A cube has a side length of 5 inches. What is its surface area in square inches?",
          correct: ["150"],
          explanation: "Surface area of a cube = 6 x side^2 = 6 x 25 = 150 square inches."
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
          prompt: "A school wants to survey students about lunch preferences. Which sampling method would produce the most representative random sample?",
          choices: ["Surveying only the basketball team", "Randomly selecting 50 students from the entire school roster", "Surveying students in one math class", "Surveying only students who volunteer at lunch"],
          correct: 1,
          explanation: "Randomly selecting students from the entire school roster avoids bias and best represents the whole student population."
        },
        {
          id: "q34",
          standard: "7.SP.4",
          type: "mc",
          prompt: "Class A has a mean quiz score of 82 with a MAD of 3. Class B has a mean quiz score of 78 with a MAD of 8. Which statement is best supported by the data?",
          choices: ["Class A's scores are more consistent and generally higher than Class B's", "Class B's scores are more consistent than Class A's", "The two classes have identical score distributions", "Class A's mean is lower than Class B's mean"],
          correct: 0,
          explanation: "A lower MAD means less variability, and a higher mean means higher scores overall, so Class A is both more consistent and higher-scoring."
        },
        {
          id: "q35",
          standard: "7.SP.3",
          type: "mc",
          prompt: "Two data sets have the same mean, but Data Set X has a MAD of 2 and Data Set Y has a MAD of 9. What does this indicate?",
          choices: ["Data Set X's values are more tightly clustered around the mean", "Data Set Y's values are more tightly clustered around the mean", "Both data sets have the same variability", "Data Set X has a higher mean"],
          correct: 0,
          explanation: "A smaller mean absolute deviation (MAD) means the data points are closer to the mean, so Data Set X is more tightly clustered."
        },
        {
          id: "q36",
          standard: "7.SP.6",
          type: "num",
          prompt: "A spinner has 8 equal sections numbered 1-8. If the spinner is spun 40 times, about how many times would you expect it to land on a number greater than 6?",
          correct: ["10"],
          explanation: "Numbers greater than 6 are 7 and 8, giving a probability of 2/8 = 1/4. Expected count = 40 x 1/4 = 10."
        },
        {
          id: "q37",
          standard: "7.SP.8",
          type: "mc",
          prompt: "A bag contains 3 red marbles and 5 blue marbles. If two marbles are drawn without replacement, what is the probability both are red?",
          choices: ["3/28", "1/8", "3/8", "9/64"],
          correct: 0,
          explanation: "P(both red) = (3/8) x (2/7) = 6/56 = 3/28."
        },
        {
          id: "q38",
          standard: "7.SP.7",
          type: "mc",
          prompt: "A weather app shows a 30% chance of rain today. Based on this probability, which statement is true?",
          choices: ["It will definitely rain today", "It will definitely not rain today", "If today were repeated many times, it would rain in about 30% of those days", "It has a 70% chance of raining"],
          correct: 2,
          explanation: "A 30% probability means that, over many repeated trials under the same conditions, rain would occur about 30% of the time."
        },
        {
          id: "q39",
          standard: "7.SP.5",
          type: "ms",
          prompt: "Select the TWO events that have a probability closer to 1 (very likely to happen).",
          choices: ["Flipping a coin and getting heads", "Rolling a 6 on a standard die", "The sun rising tomorrow", "Picking a red marble from a bag of 9 red and 1 blue marble", "Randomly guessing a 4-digit PIN correctly"],
          correct: [2, 3],
          explanation: "Probabilities near 1 describe near-certain events: the sun rising and drawing mostly-red marbles."
        },
        {
          id: "q40",
          standard: "7.SP.8",
          type: "num",
          prompt: "A jar contains 4 green candies and 6 yellow candies. If you randomly pick one candy, what is the probability it is green? Enter as a fraction in simplest form.",
          correct: ["2/5", "0.4"],
          explanation: "P(green) = 4/10, which simplifies to 2/5, or 0.4 as a decimal."
        }
      ]
    }
  ]
};
