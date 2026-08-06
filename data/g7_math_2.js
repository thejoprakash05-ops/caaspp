window.TEST_DATA = {
  id: "g7_math_2",
  grade: 7,
  subject: "Math",
  title: "Grade 7 Math Practice Test 2",
  durationMinutes: 75,
  sections: [
    {
      name: "Ratios & Proportional Relationships",
      questions: [
        {
          id: "q1",
          standard: "7.RP.1",
          type: "mc",
          prompt: "A cross-country runner completes 12 miles in 1.5 hours at a constant pace. What is the runner's unit rate in miles per hour?",
          choices: ["6 mph", "8 mph", "9 mph", "10 mph"],
          correct: 1,
          explanation: "Divide distance by time: 12 miles / 1.5 hours = 8 miles per hour."
        },
        {
          id: "q2",
          standard: "7.RP.1",
          type: "mc",
          prompt: "A sprinter runs 100 meters in 12.5 seconds at a constant pace. What is the sprinter's speed in meters per second?",
          choices: ["6 m/s", "7 m/s", "8 m/s", "9 m/s"],
          correct: 2,
          explanation: "Divide distance by time: 100 meters / 12.5 seconds = 8 meters per second."
        },
        {
          id: "q3",
          standard: "7.RP.2",
          type: "ms",
          prompt: "Select the TWO relationships below that are proportional (the ratio of distance to time stays constant).",
          choices: [
            "A runner covers 4 miles in 30 minutes, 8 miles in 60 minutes, and 12 miles in 90 minutes.",
            "A cyclist covers 5 miles in 20 minutes, 8 miles in 30 minutes, and 10 miles in 50 minutes.",
            "A swimmer covers 2 laps in 4 minutes, 4 laps in 8 minutes, and 6 laps in 12 minutes.",
            "A walker covers 1 mile in 15 minutes, 3 miles in 40 minutes, and 5 miles in 70 minutes.",
            "A team scores 5 points in the first quarter, 12 points in the second quarter, and 15 points in the third quarter, each quarter lasting 8 minutes."
          ],
          correct: [0, 2],
          explanation: "In both cases the ratio of distance (or laps) to time is constant: 4/30 = 8/60 = 12/90, and 2/4 = 4/8 = 6/12."
        },
        {
          id: "q4",
          standard: "7.RP.3",
          type: "num",
          prompt: "A basketball player made 18 of 24 free-throw attempts this season. What percent of free throws did the player make? Enter the value as a percent (no % sign).",
          correct: ["75"],
          explanation: "18 / 24 = 0.75, which is 75%."
        },
        {
          id: "q5",
          standard: "7.RP.2",
          type: "mc",
          prompt: "A soccer team scores goals at a constant rate, totaling 21 goals over the first 3 games of the season. At this same rate, how many goals will the team score over 7 games?",
          choices: ["42", "45", "47", "49"],
          correct: 3,
          explanation: "The rate is 21/3 = 7 goals per game, so over 7 games the team scores 7 x 7 = 49 goals."
        },
        {
          id: "q6",
          standard: "7.RP.3",
          type: "mc",
          prompt: "The price of a season ticket increased from $25 to $30. What is the percent increase in price?",
          choices: ["10%", "15%", "20%", "25%"],
          correct: 2,
          explanation: "The increase is $5, and 5/25 = 0.20, which is a 20% increase."
        },
        {
          id: "q7",
          standard: "7.RP.1",
          type: "num",
          prompt: "A sporting goods store sells a pack of 5 team jerseys for $45. What is the unit cost per jersey, in dollars? Enter the number only.",
          correct: ["9", "9.00"],
          explanation: "Divide total cost by number of jerseys: $45 / 5 = $9 per jersey."
        },
        {
          id: "q8",
          standard: "7.RP.1",
          type: "mc",
          prompt: "A cyclist travels 3/4 mile in 1/8 hour at a constant speed. What is the cyclist's speed in miles per hour?",
          choices: ["4 mph", "5 mph", "6 mph", "8 mph"],
          correct: 2,
          explanation: "Divide (3/4) by (1/8): (3/4) x (8/1) = 6 miles per hour."
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
          prompt: "In a football play, a running back gains 5 yards and then loses 8 yards on the next play. What is the running back's net yardage for the two plays?",
          choices: ["-13 yards", "-3 yards", "3 yards", "13 yards"],
          correct: 1,
          explanation: "5 + (-8) = -3, so the net change is -3 yards."
        },
        {
          id: "q10",
          standard: "7.NS.1",
          type: "mc",
          prompt: "A football team gains 12 yards on one play and loses 20 yards on the next play. What is the team's total yardage change?",
          choices: ["-32 yards", "-8 yards", "8 yards", "32 yards"],
          correct: 1,
          explanation: "12 + (-20) = -8, so the total change is -8 yards."
        },
        {
          id: "q11",
          standard: "7.NS.1",
          type: "num",
          prompt: "A trail race starts at an elevation of 150 feet and ends at an elevation of -25 feet. What is the change in elevation, in feet, from start to finish? Enter a negative number if the elevation decreased.",
          correct: ["-175"],
          explanation: "Change = final - start = -25 - 150 = -175 feet."
        },
        {
          id: "q12",
          standard: "7.NS.2",
          type: "mc",
          prompt: "During a winter race, the temperature drops 3 degrees F every hour for 4 hours. What is the total change in temperature?",
          choices: ["-12 degrees F", "-7 degrees F", "7 degrees F", "12 degrees F"],
          correct: 0,
          explanation: "Multiply the hourly change by the number of hours: -3 x 4 = -12 degrees F."
        },
        {
          id: "q13",
          standard: "7.NS.1",
          type: "ms",
          prompt: "Select the TWO statements that are true.",
          choices: [
            "The sum of two negative numbers is always negative.",
            "The product of two negative numbers is always negative.",
            "Subtracting a negative number is the same as adding its opposite (a positive number).",
            "Dividing a negative number by a positive number always gives a positive result.",
            "The sum of a positive number and a negative number is always positive."
          ],
          correct: [0, 2],
          explanation: "Adding two negatives always gives a negative sum, and subtracting a negative is equivalent to adding its positive opposite. The product of two negatives is positive, not negative, so those two statements are false."
        },
        {
          id: "q14",
          standard: "7.NS.2",
          type: "mc",
          prompt: "A team lost a total of 36 yards over 4 plays, with an equal loss on each play. What was the average yardage change per play?",
          choices: ["-9 yards", "-8 yards", "-4 yards", "9 yards"],
          correct: 0,
          explanation: "Divide the total change by the number of plays: -36 / 4 = -9 yards per play."
        },
        {
          id: "q15",
          standard: "7.NS.1",
          type: "num",
          prompt: "Compute: -3/4 + 1/2. Enter your answer as a fraction in simplest form.",
          correct: ["-1/4"],
          explanation: "Rewrite 1/2 as 2/4, then -3/4 + 2/4 = -1/4."
        },
        {
          id: "q16",
          standard: "7.NS.3",
          type: "mc",
          prompt: "A quarterback's pass attempts result in the following yardage changes: -6, +14, -9, and +5 yards. What is the total net yardage?",
          choices: ["-4 yards", "0 yards", "4 yards", "6 yards"],
          correct: 2,
          explanation: "Add the values in order: -6 + 14 = 8, 8 - 9 = -1, -1 + 5 = 4 yards."
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
          prompt: "Simplify the expression: 3(2x + 4) - 5x",
          choices: ["x + 12", "x + 4", "11x + 12", "x - 12"],
          correct: 0,
          explanation: "Distribute: 6x + 12 - 5x, then combine like terms to get x + 12."
        },
        {
          id: "q18",
          standard: "7.EE.4",
          type: "mc",
          prompt: "Solve for x: 2x + 5 = 17",
          choices: ["5", "6", "7", "11"],
          correct: 1,
          explanation: "Subtract 5 from both sides to get 2x = 12, then divide by 2 to get x = 6."
        },
        {
          id: "q19",
          standard: "7.EE.3",
          type: "num",
          prompt: "Solve for x: 3(x - 2) = 15. Enter the value of x.",
          correct: ["7"],
          explanation: "Distribute to get 3x - 6 = 15, add 6 to get 3x = 21, then divide by 3 to get x = 7."
        },
        {
          id: "q20",
          standard: "7.EE.4",
          type: "mc",
          prompt: "Solve the inequality: 4x - 3 > 9. Which describes the solution set?",
          choices: ["x > 2", "x > 3", "x < 3", "x > 6"],
          correct: 1,
          explanation: "Add 3 to both sides to get 4x > 12, then divide by 4 to get x > 3."
        },
        {
          id: "q21",
          standard: "7.EE.4",
          type: "ms",
          prompt: "A coach sets a practice time budget: 15 + 10h <= 45, where h is the number of hours of practice. Select the TWO values of h from the choices that satisfy the inequality.",
          choices: ["2", "3", "4", "5", "6"],
          correct: [0, 1],
          explanation: "Solving 15 + 10h <= 45 gives h <= 3, so only h = 2 and h = 3 from the choices satisfy the inequality."
        },
        {
          id: "q22",
          standard: "7.EE.2",
          type: "mc",
          prompt: "A basketball team's points from free throws and three-pointers is given by the expression 2f + 3t, where f is free throws made and t is three-pointers made. If the team made 8 free throws and 5 three-pointers, what is the total from this expression?",
          choices: ["21", "26", "31", "36"],
          correct: 2,
          explanation: "Substitute the values: 2(8) + 3(5) = 16 + 15 = 31."
        },
        {
          id: "q23",
          standard: "7.EE.3",
          type: "num",
          prompt: "An athlete plans an 80-minute workout split between running and weightlifting. The athlete spends 3 times as long running as weightlifting. How many minutes does the athlete spend weightlifting? Enter the number of minutes.",
          correct: ["20"],
          explanation: "Let w be weightlifting minutes; then w + 3w = 80, so 4w = 80 and w = 20 minutes."
        },
        {
          id: "q24",
          standard: "7.EE.1",
          type: "mc",
          prompt: "Combine like terms: 5x + 3 - 2x + 7",
          choices: ["3x + 10", "7x + 10", "3x + 4", "7x + 4"],
          correct: 0,
          explanation: "Combine the x-terms (5x - 2x = 3x) and the constants (3 + 7 = 10) to get 3x + 10."
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
          prompt: "On a scale drawing of a soccer field, 1 inch represents 5 feet. If the field's length on the drawing is 8 inches, what is the actual length of the field in feet?",
          choices: ["35 ft", "40 ft", "45 ft", "50 ft"],
          correct: 1,
          explanation: "Multiply the drawing length by the scale factor: 8 x 5 = 40 feet."
        },
        {
          id: "q26",
          standard: "7.G.5",
          type: "mc",
          prompt: "Two angles are complementary. One angle measures 35 degrees. What is the measure of the other angle?",
          choices: ["35 degrees", "45 degrees", "55 degrees", "65 degrees"],
          correct: 2,
          explanation: "Complementary angles sum to 90 degrees, so the other angle is 90 - 35 = 55 degrees."
        },
        {
          id: "q27",
          standard: "7.G.4",
          type: "num",
          prompt: "A circular running track has a diameter of 100 meters. Using pi = 3.14, what is the circumference of the track, in meters? Enter the value.",
          correct: ["314"],
          explanation: "Circumference = pi x diameter = 3.14 x 100 = 314 meters."
        },
        {
          id: "q28",
          standard: "7.G.4",
          type: "mc",
          prompt: "A circular track has a radius of 21 meters. Using pi = 22/7, what is the area of the track, in square meters?",
          choices: ["1320 sq m", "1386 sq m", "1400 sq m", "1470 sq m"],
          correct: 1,
          explanation: "Area = pi x r^2 = (22/7) x 21 x 21 = 22 x 63 = 1386 square meters."
        },
        {
          id: "q29",
          standard: "7.G.5",
          type: "ms",
          prompt: "Two lines intersect, forming four angles. One of the angles measures 40 degrees. Select the TWO other angle measures that must also be present at this intersection.",
          choices: ["40 degrees", "110 degrees", "140 degrees", "150 degrees", "160 degrees"],
          correct: [0, 2],
          explanation: "The angle vertical to the 40-degree angle also measures 40 degrees, and the two angles adjacent to it are supplementary, each measuring 180 - 40 = 140 degrees."
        },
        {
          id: "q30",
          standard: "7.G.6",
          type: "mc",
          prompt: "A storage box for sports equipment is a rectangular prism with length 4 ft, width 3 ft, and height 2 ft. What is the volume of the box?",
          choices: ["18 cubic ft", "20 cubic ft", "24 cubic ft", "28 cubic ft"],
          correct: 2,
          explanation: "Volume = length x width x height = 4 x 3 x 2 = 24 cubic feet."
        },
        {
          id: "q31",
          standard: "7.G.6",
          type: "num",
          prompt: "A ball has a radius of 3 inches. Using the formula SA = 4 x pi x r^2 and pi = 3.14, what is the surface area of the ball, in square inches? Round to the nearest whole number.",
          correct: ["113"],
          explanation: "SA = 4 x 3.14 x 3^2 = 4 x 3.14 x 9 = 113.04, which rounds to 113 square inches."
        },
        {
          id: "q32",
          standard: "7.G.5",
          type: "mc",
          prompt: "In a diagram, two angles are supplementary. If one angle measures 112 degrees, what is the measure of the other angle?",
          choices: ["58 degrees", "68 degrees", "78 degrees", "112 degrees"],
          correct: 1,
          explanation: "Supplementary angles sum to 180 degrees, so the other angle is 180 - 112 = 68 degrees."
        }
      ]
    },
    {
      name: "Statistics & Probability",
      questions: [
        {
          id: "q33",
          standard: "7.SP.4",
          type: "mc",
          prompt: "Runner A's race times (in minutes) over 5 races are: 18, 19, 17, 20, 21. What is Runner A's mean race time?",
          choices: ["18 min", "19 min", "20 min", "21 min"],
          correct: 1,
          explanation: "Sum the times (18+19+17+20+21 = 95) and divide by 5 races: 95 / 5 = 19 minutes."
        },
        {
          id: "q34",
          standard: "7.SP.4",
          type: "mc",
          prompt: "Runner B's race times (in minutes) are: 22, 24, 19, 23, 20. What is the median race time?",
          choices: ["19 min", "20 min", "22 min", "23 min"],
          correct: 2,
          explanation: "Ordered from least to greatest: 19, 20, 22, 23, 24. The middle value is 22 minutes."
        },
        {
          id: "q35",
          standard: "7.SP.3",
          type: "num",
          prompt: "A player's points scored in 4 games are: 10, 14, 12, 12. What is the mean absolute deviation (MAD) of this data set? Enter as a decimal or whole number.",
          correct: ["1"],
          explanation: "The mean is 12. The absolute deviations are 2, 2, 0, 0, which sum to 4. Divide by 4 games: 4 / 4 = 1."
        },
        {
          id: "q36",
          standard: "7.SP.7",
          type: "mc",
          prompt: "A spinner used in a game has 4 equal sections numbered 1 through 4. What is the probability of landing on a number greater than 2?",
          choices: ["1/4", "1/3", "1/2", "3/4"],
          correct: 2,
          explanation: "The numbers greater than 2 are 3 and 4, which is 2 out of 4 equally likely outcomes, or 1/2."
        },
        {
          id: "q37",
          standard: "7.SP.1",
          type: "ms",
          prompt: "A coach wants to estimate the average sprint time for all 60 players in a league by sampling players. Select the TWO sampling methods that would produce a valid random sample.",
          choices: [
            "Randomly select 15 players using a random number generator applied to the full roster.",
            "Survey only the fastest 15 players on the team.",
            "Assign each of the 60 players a number and use a random number table to pick 15.",
            "Ask for volunteers to be timed.",
            "Survey the first 15 players to arrive at practice."
          ],
          correct: [0, 2],
          explanation: "A valid random sample gives every player an equal chance of being chosen, which is true for a random number generator or random number table applied to the whole roster. The other methods introduce bias."
        },
        {
          id: "q38",
          standard: "7.SP.8",
          type: "mc",
          prompt: "A basketball player has a 70% chance of making a free throw. If the player attempts two free throws independently, what is the probability of making both?",
          choices: ["0.35", "0.49", "0.70", "0.90"],
          correct: 1,
          explanation: "For independent events, multiply the probabilities: 0.7 x 0.7 = 0.49."
        },
        {
          id: "q39",
          standard: "7.SP.7",
          type: "num",
          prompt: "A bag used for a team raffle contains 5 red tickets, 3 blue tickets, and 2 green tickets. What is the probability of drawing a blue ticket, expressed as a fraction in simplest form?",
          correct: ["3/10", "0.3"],
          explanation: "There are 3 blue tickets out of 10 total tickets, giving a probability of 3/10."
        },
        {
          id: "q40",
          standard: "7.SP.3",
          type: "mc",
          prompt: "Team X has race times with a mean of 20 minutes and a MAD of 1.5 minutes. Team Y has race times with a mean of 20 minutes and a MAD of 3.5 minutes. Which statement is correct?",
          choices: [
            "Team X's times are more consistent than Team Y's.",
            "Team Y's times are more consistent than Team X's.",
            "Both teams have identical variability.",
            "Team X's mean time is faster than Team Y's."
          ],
          correct: 0,
          explanation: "A smaller mean absolute deviation (MAD) indicates less variability, so Team X's times (MAD = 1.5) are more consistent than Team Y's (MAD = 3.5)."
        }
      ]
    }
  ]
};
