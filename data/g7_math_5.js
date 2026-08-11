window.TEST_DATA = {
  id: "g7_math_5",
  grade: 7,
  subject: "Math",
  title: "Grade 7 Math Practice Test 5",
  durationMinutes: 75,
  sections: [
    {
      name: "Ratios & Proportional Relationships",
      questions: [
        {
          id: "q1",
          standard: "7.RP.1",
          type: "mc",
          prompt: "A weather station recorded 3/4 inch of rain in 1/2 hour. What is the unit rate in inches per hour?",
          choices: ["0.75 inch per hour", "1.5 inches per hour", "2 inches per hour", "0.375 inch per hour"],
          correct: 1,
          explanation: "Divide the amount by the time: (3/4) ÷ (1/2) = 3/4 × 2 = 1.5 inches per hour."
        },
        {
          id: "q2",
          standard: "7.RP.1",
          type: "num",
          prompt: "A rain gauge collected 2 1/4 inches of rain over 3/4 of an hour. Find the unit rate in inches per hour. Enter your answer as a whole number.",
          correct: ["3"],
          explanation: "Divide 2.25 by 0.75: 2.25 ÷ 0.75 = 3 inches per hour."
        },
        {
          id: "q3",
          standard: "7.RP.2",
          type: "mc",
          prompt: "A photographer enlarges a 4 in by 6 in photo proportionally so that the new width is 10 in. What is the new height?",
          choices: ["12 in", "15 in", "16 in", "20 in"],
          correct: 1,
          explanation: "The scale factor is 10 ÷ 4 = 2.5, so the new height is 6 × 2.5 = 15 in."
        },
        {
          id: "q4",
          standard: "7.RP.2",
          type: "num",
          prompt: "A 5 in by 7 in photo is enlarged proportionally so the longer side becomes 21 in. What is the new length of the shorter side, in inches?",
          correct: ["15"],
          explanation: "The scale factor is 21 ÷ 7 = 3, so the shorter side becomes 5 × 3 = 15 in."
        },
        {
          id: "q5",
          standard: "7.RP.3",
          type: "mc",
          prompt: "The forecast gives a 40% chance of rain. Express this probability as a fraction in simplest form.",
          choices: ["1/4", "2/5", "4/5", "1/2"],
          correct: 1,
          explanation: "40% = 40/100, which simplifies to 2/5."
        },
        {
          id: "q6",
          standard: "7.RP.3",
          type: "mc",
          prompt: "The humidity was 60% in the morning and rose to 75% by afternoon. What is the percent increase in humidity?",
          choices: ["15%", "20%", "25%", "35%"],
          correct: 2,
          explanation: "The increase is 75 − 60 = 15 percentage points. As a percent of the original: 15/60 = 0.25 = 25%."
        },
        {
          id: "q7",
          standard: "7.RP.2",
          type: "mc",
          prompt: "A rain gauge shows the following totals: 2 hours → 1 inch, 4 hours → 2 inches, 6 hours → 3 inches. What is the constant of proportionality, in inches per hour?",
          choices: ["0.25", "0.5", "1", "2"],
          correct: 1,
          explanation: "Each ratio simplifies to 1 inch ÷ 2 hours = 0.5 inch per hour."
        },
        {
          id: "q8",
          standard: "7.RP.2",
          type: "ms",
          prompt: "A rainfall rate is 2 inches every 3 hours. Select the TWO rates below that are equivalent to this rate.",
          choices: ["4 inches in 6 hours", "6 inches in 8 hours", "1 inch in 1.5 hours", "10 inches in 12 hours", "3 inches in 5 hours"],
          correct: [0, 2],
          explanation: "2/3 = 4/6 and 2/3 = 1/1.5, so both 4 inches in 6 hours and 1 inch in 1.5 hours match the rate; the other choices simplify to different ratios."
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
          prompt: "The temperature was −5°F at dawn and rose 12°F by noon. What was the noon temperature?",
          choices: ["−17°F", "−7°F", "7°F", "17°F"],
          correct: 2,
          explanation: "−5 + 12 = 7°F."
        },
        {
          id: "q10",
          standard: "7.NS.1",
          type: "mc",
          prompt: "The temperature dropped from 8°F to −6°F. By how many degrees did it drop?",
          choices: ["2°F", "6°F", "14°F", "−14°F"],
          correct: 2,
          explanation: "The drop is 8 − (−6) = 14°F."
        },
        {
          id: "q11",
          standard: "7.NS.1",
          type: "mc",
          prompt: "Overnight the temperature fell from −3°F by 9 degrees. What was the resulting temperature?",
          choices: ["−12°F", "−6°F", "6°F", "12°F"],
          correct: 0,
          explanation: "−3 − 9 = −12°F."
        },
        {
          id: "q12",
          standard: "7.NS.2",
          type: "mc",
          prompt: "Wind chill makes the temperature feel like it drops 3°F for every 5 mph increase in wind speed. If wind speed increases by 20 mph, what is the total change in feels-like temperature?",
          choices: ["−12°F", "−15°F", "−9°F", "−20°F"],
          correct: 0,
          explanation: "20 mph ÷ 5 mph = 4 increments, and 4 × (−3°F) = −12°F."
        },
        {
          id: "q13",
          standard: "7.NS.2",
          type: "mc",
          prompt: "A weather balloon's temperature reading changes at a constant rate of −2°F per 1,000 feet of altitude gained. What is the total temperature change after rising 4,500 feet?",
          choices: ["−6°F", "−9°F", "−8°F", "−11°F"],
          correct: 1,
          explanation: "−2°F × 4.5 = −9°F."
        },
        {
          id: "q14",
          standard: "7.NS.3",
          type: "num",
          prompt: "The average temperature changed by −1.5°F per week for 4 weeks. What was the total change in temperature, in °F?",
          correct: ["-6"],
          explanation: "−1.5 × 4 = −6°F total change."
        },
        {
          id: "q15",
          standard: "7.NS.2",
          type: "mc",
          prompt: "A total temperature change of −18°F occurred evenly over 3/4 of a day. What was the rate of change per full day?",
          choices: ["−13.5°F per day", "−24°F per day", "−21°F per day", "−6°F per day"],
          correct: 1,
          explanation: "−18 ÷ (3/4) = −18 × 4/3 = −24°F per day."
        },
        {
          id: "q16",
          standard: "7.NS.1",
          type: "ms",
          prompt: "Select the TWO expressions that equal a temperature change of −4°F.",
          choices: ["−9 + 5", "−3 + 8", "6 − 10", "−4 − 4", "10 − 6"],
          correct: [0, 2],
          explanation: "−9 + 5 = −4 and 6 − 10 = −4; the other expressions equal 5, −8, and 4."
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
          prompt: "A meteorologist records daily temperature readings as t. Simplify the expression: 3(2t − 5) + 4t",
          choices: ["10t − 15", "10t + 15", "6t − 15", "14t − 15"],
          correct: 0,
          explanation: "Distribute: 6t − 15 + 4t = 10t − 15."
        },
        {
          id: "q18",
          standard: "7.EE.1",
          type: "mc",
          prompt: "A photo printing shop's cost for n prints is modeled by 0.25n + 2(n − 3). Simplify this expression.",
          choices: ["2.25n − 6", "2.25n − 3", "0.25n − 6", "2.5n − 6"],
          correct: 0,
          explanation: "Distribute and combine: 0.25n + 2n − 6 = 2.25n − 6."
        },
        {
          id: "q19",
          standard: "7.EE.4a",
          type: "mc",
          prompt: "Solve for x: 4x + 7 = −13",
          choices: ["−5", "−1.5", "5", "1.5"],
          correct: 0,
          explanation: "Subtract 7: 4x = −20. Divide by 4: x = −5."
        },
        {
          id: "q20",
          standard: "7.EE.4a",
          type: "mc",
          prompt: "A photo printing website charges a $5 setup fee plus $0.20 per print. If the total cost was $9.80, how many prints were ordered?",
          choices: ["20", "22", "24", "26"],
          correct: 2,
          explanation: "5 + 0.2p = 9.8, so 0.2p = 4.8 and p = 24."
        },
        {
          id: "q21",
          standard: "7.EE.4b",
          type: "mc",
          prompt: "Solve the inequality: −3x + 6 < 15",
          choices: ["x < −3", "x > −3", "x < 3", "x > 3"],
          correct: 1,
          explanation: "Subtract 6: −3x < 9. Divide by −3 and flip the inequality: x > −3."
        },
        {
          id: "q22",
          standard: "7.EE.3",
          type: "num",
          prompt: "A weather station's temperature dropped 2.5°F each hour for 6 hours, starting at 20°F. What was the final temperature, in °F?",
          correct: ["5"],
          explanation: "20 − (2.5 × 6) = 20 − 15 = 5°F."
        },
        {
          id: "q23",
          standard: "7.EE.3",
          type: "mc",
          prompt: "A photographer pays $15 to rent equipment plus $3 per printed poster. With a budget of $60, what is the maximum number of posters she can print?",
          choices: ["12", "15", "18", "20"],
          correct: 1,
          explanation: "15 + 3p ≤ 60, so 3p ≤ 45 and p ≤ 15."
        },
        {
          id: "q24",
          standard: "7.EE.2",
          type: "ms",
          prompt: "Select the TWO expressions equivalent to 5(x − 2) + 3x.",
          choices: ["8x − 10", "8x + 10", "2(4x − 5)", "4(2x − 5)", "10x − 2 − 2x"],
          correct: [0, 2],
          explanation: "5(x − 2) + 3x = 5x − 10 + 3x = 8x − 10, which equals 2(4x − 5); the other choices simplify differently."
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
          prompt: "A photo measuring 4 cm by 6 cm is enlarged using a scale factor of 3.5. What are the dimensions of the enlarged photo?",
          choices: ["14 cm by 21 cm", "10.5 cm by 17.5 cm", "12 cm by 18 cm", "7.5 cm by 9.5 cm"],
          correct: 0,
          explanation: "Multiply each dimension by 3.5: 4 × 3.5 = 14 cm and 6 × 3.5 = 21 cm."
        },
        {
          id: "q26",
          standard: "7.G.1",
          type: "mc",
          prompt: "A scale drawing of a photograph uses a scale of 1 cm : 5 in. If the actual photo width is 35 in, what is the width on the scale drawing?",
          choices: ["5 cm", "7 cm", "9 cm", "35 cm"],
          correct: 1,
          explanation: "35 in ÷ 5 in per cm = 7 cm on the drawing."
        },
        {
          id: "q27",
          standard: "7.G.5",
          type: "mc",
          prompt: "Two angles are complementary. One angle measures 37°. What is the measure of the other angle?",
          choices: ["43°", "53°", "63°", "143°"],
          correct: 1,
          explanation: "Complementary angles sum to 90°, so the other angle is 90° − 37° = 53°."
        },
        {
          id: "q28",
          standard: "7.G.5",
          type: "mc",
          prompt: "In a picture frame's corner, two angles form a straight line. If one angle measures 118°, what is the other?",
          choices: ["52°", "62°", "72°", "82°"],
          correct: 1,
          explanation: "Supplementary angles sum to 180°, so the other angle is 180° − 118° = 62°."
        },
        {
          id: "q29",
          standard: "7.G.4",
          type: "mc",
          prompt: "A circular rain gauge opening has a diameter of 8 cm. What is its area? (Use π ≈ 3.14)",
          choices: ["25.12 cm²", "50.24 cm²", "100.48 cm²", "200.96 cm²"],
          correct: 1,
          explanation: "Radius = 4 cm, so area = π × 4² = 3.14 × 16 = 50.24 cm²."
        },
        {
          id: "q30",
          standard: "7.G.4",
          type: "num",
          prompt: "The circumference of a circular photo frame is 31.4 inches. Using π ≈ 3.14, what is the radius, in inches?",
          correct: ["5"],
          explanation: "C = 2πr, so 31.4 = 6.28r, and r = 5 in."
        },
        {
          id: "q31",
          standard: "7.G.6",
          type: "ms",
          prompt: "A picture frame is 12 in by 9 in, and the visible photo area inside the mat is 9 in by 6 in. Select the TWO true statements.",
          choices: ["The total frame area is 108 in²", "The mat border area is 54 in²", "The mat border area is 44 in²", "The visible photo area is 45 in²", "The total frame area is 96 in²"],
          correct: [0, 1],
          explanation: "Frame area = 12 × 9 = 108 in²; photo area = 9 × 6 = 54 in², so the mat border area = 108 − 54 = 54 in²."
        },
        {
          id: "q32",
          standard: "7.G.6",
          type: "mc",
          prompt: "A cylindrical rain gauge has a radius of 3 cm and a height of 20 cm. What is its volume? (Use π ≈ 3.14)",
          choices: ["188.4 cm³", "376.8 cm³", "565.2 cm³", "753.6 cm³"],
          correct: 2,
          explanation: "V = πr²h = 3.14 × 9 × 20 = 565.2 cm³."
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
          prompt: "A meteorologist wants to estimate the average monthly rainfall for a city. Which sampling method would produce the most representative, unbiased sample?",
          choices: ["Randomly selecting rainfall totals from 30 days across the year", "Using only the rainiest week's data", "Surveying only days when it rained", "Using data from a single month"],
          correct: 0,
          explanation: "A random sample spread across the year avoids bias toward any particular season or condition."
        },
        {
          id: "q34",
          standard: "7.SP.4",
          type: "mc",
          prompt: "July temperatures had a mean of 82°F with a MAD of 3, and August had a mean of 78°F with a MAD of 3. What can be concluded?",
          choices: ["The two months' temperatures are typical of each other since the means are close", "July's mean is noticeably higher than August's since the difference (4) is more than one MAD", "There's no meaningful difference between the months", "August was hotter than July on average"],
          correct: 1,
          explanation: "The difference in means is 82 − 78 = 4, which is greater than one MAD (3), indicating a noticeable difference."
        },
        {
          id: "q35",
          standard: "7.SP.3",
          type: "num",
          prompt: "Data set A has a mean of 75, and Data set B has a mean of 70. Both sets have a MAD of 2.5. Express the difference between the means as a multiple of the MAD.",
          correct: ["2"],
          explanation: "The difference in means is 75 − 70 = 5, and 5 ÷ 2.5 = 2 MADs."
        },
        {
          id: "q36",
          standard: "7.SP.5",
          type: "mc",
          prompt: "A weather app shows a 0.05 probability that it will snow tomorrow. Which best describes this probability?",
          choices: ["An impossible event", "An event unlikely but not impossible to occur", "An event equally likely to occur or not", "An event certain to occur"],
          correct: 1,
          explanation: "A probability close to 0 (but not 0) describes an event that is unlikely but still possible."
        },
        {
          id: "q37",
          standard: "7.SP.6",
          type: "mc",
          prompt: "A weather station found that over the past 200 days, it rained on 50 of them. Based on this data, what is the experimental probability that it will rain on any given day?",
          choices: ["20%", "25%", "30%", "50%"],
          correct: 1,
          explanation: "50 ÷ 200 = 0.25 = 25%."
        },
        {
          id: "q38",
          standard: "7.SP.7",
          type: "mc",
          prompt: "A spinner used to simulate wind direction has 4 equal sections: North, South, East, and West. What is the theoretical probability that the spinner lands on North or East?",
          choices: ["1/4", "1/2", "3/4", "1/8"],
          correct: 1,
          explanation: "2 favorable sections out of 4 equal sections gives a probability of 2/4 = 1/2."
        },
        {
          id: "q39",
          standard: "7.SP.8",
          type: "num",
          prompt: "Two independent weather sensors each have a 1/4 probability of malfunctioning on a given day. What is the probability that both malfunction on the same day? Express your answer as a fraction.",
          correct: ["1/16", "0.0625"],
          explanation: "For independent events, multiply the probabilities: 1/4 × 1/4 = 1/16."
        },
        {
          id: "q40",
          standard: "7.SP.4",
          type: "ms",
          prompt: "Set X has a mean of 65 and a MAD of 4. Set Y has a mean of 71 and a MAD of 4. Select the TWO true statements.",
          choices: ["The means differ by 6", "The means differ by 1.5 times the MAD", "Set Y has more variability than Set X", "The means are equal", "Set X's mean is greater than Set Y's mean"],
          correct: [0, 1],
          explanation: "71 − 65 = 6, and 6 ÷ 4 = 1.5 MADs; since both sets have the same MAD of 4, neither has more variability."
        }
      ]
    }
  ]
};
