window.TEST_DATA = {
  id: "g7_math_4",
  grade: 7,
  subject: "Math",
  title: "Grade 7 Math Practice Test 4",
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
          standard: "7.SP.5",
          type: "ms",
          prompt: "Select the TWO events that have a probability closer to 1 (very likely to happen).",
          choices: ["Flipping a coin and getting heads", "Rolling a 6 on a standard die", "The sun rising tomorrow", "Picking a red marble from a bag of 9 red and 1 blue marble", "Randomly guessing a 4-digit PIN correctly"],
          correct: [2, 3],
          explanation: "Probabilities near 1 describe near-certain events: the sun rising and drawing mostly-red marbles."
        },
        {
          id: "q3",
          standard: "7.EE.3",
          type: "num",
          prompt: "Solve for x: 2(x + 5) = 26. Enter the value of x.",
          correct: ["8"],
          explanation: "Distribute: 2x + 10 = 26, so 2x = 16, and x = 8."
        },
        {
          id: "q4",
          standard: "7.RP.1",
          type: "mc",
          prompt: "A recipe requires 3/4 cup of sugar for every 1/2 cup of butter. What is the unit rate of sugar per cup of butter?",
          choices: ["1.5 cups", "0.75 cups", "2 cups", "0.5 cups"],
          correct: 0,
          explanation: "Divide the complex fraction: (3/4) ÷ (1/2) = (3/4) x 2 = 3/2 = 1.5 cups of sugar per cup of butter."
        },
        {
          id: "q5",
          standard: "7.RP.3",
          type: "mc",
          prompt: "A hardware store offers a 20% discount on a $45 power drill. What is the sale price?",
          choices: ["$36", "$9", "$25", "$40"],
          correct: 0,
          explanation: "A 20% discount removes 0.20 x $45 = $9, so the sale price is $45 - $9 = $36."
        },
        {
          id: "q6",
          standard: "7.RP.3",
          type: "ms",
          prompt: "Select ALL expressions that represent the sale price after a 15% discount on an original price p.",
          choices: ["p - 0.15p", "0.85p", "p(1 - 0.15)", "0.15p", "p + 0.15p", "1.15p"],
          correct: [0, 1, 2],
          explanation: "A 15% discount subtracts 0.15p from p, giving p - 0.15p, 0.85p, or p(1 - 0.15); 0.15p alone is just the discount amount, not the sale price."
        },
        {
          id: "q7",
          standard: "7.RP.2",
          type: "mc",
          prompt: "A cookie recipe yields 24 cookies using 2 cups of flour. How many cups of flour are needed to make 60 cookies?",
          choices: ["4 cups", "5 cups", "6 cups", "8 cups"],
          correct: 1,
          explanation: "Set up the proportion 2/24 = x/60. Cross-multiplying gives 24x = 120, so x = 5 cups."
        },
        {
          id: "q8",
          standard: "7.RP.1",
          type: "mc",
          prompt: "A carpenter cuts a 10 1/2 foot board into pieces that are 3/4 foot long each for shelf brackets. How many pieces can be cut?",
          choices: ["12", "14", "15", "21"],
          correct: 1,
          explanation: "Divide: 10.5 ÷ 0.75 = 14 pieces."
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
          prompt: "A home renovation budget starts at $0. The homeowner spends $245 on lumber, gets a $60 refund for returned tiles, and then spends $89 on paint. What is the net change to the budget?",
          choices: ["-$274", "-$314", "-$394", "-$174"],
          correct: 0,
          explanation: "-245 + 60 - 89 = -185 - 89 = -274, so the budget decreased by $274."
        },
        {
          id: "q10",
          standard: "7.NS.1",
          type: "mc",
          prompt: "A recipe calls for 2 1/4 cups of milk, but you accidentally used only 1 3/4 cups. How much more milk do you need to add to reach the full amount?",
          choices: ["1/4 cup", "1/2 cup", "3/4 cup", "1 cup"],
          correct: 1,
          explanation: "2 1/4 - 1 3/4 = 2.25 - 1.75 = 0.5 = 1/2 cup."
        },
        {
          id: "q11",
          standard: "7.NS.2",
          type: "num",
          prompt: "A garden bed's soil level is dropping at a rate of 0.5 inch per week due to settling. What is the total change in soil level after 6 weeks? (Enter as a negative number.)",
          correct: ["-3", "-3.0"],
          explanation: "The change is -0.5 x 6 = -3 inches."
        },
        {
          id: "q12",
          standard: "7.NS.2",
          type: "mc",
          prompt: "A 3/4 cup container of cinnamon is divided evenly among 6 small spice jars for a gift. How much cinnamon goes in each jar?",
          choices: ["1/8 cup", "1/6 cup", "1/4 cup", "1/2 cup"],
          correct: 0,
          explanation: "Divide: (3/4) ÷ 6 = 3/24 = 1/8 cup per jar."
        },
        {
          id: "q13",
          standard: "7.NS.1",
          type: "ms",
          prompt: "Select the TWO expressions that are equivalent to -2 1/2.",
          choices: ["-1 3/4 - 3/4", "-4 + 1.5", "3 - 5", "-1.5 - 1.5", "-6 + 4"],
          correct: [0, 1],
          explanation: "-1 3/4 - 3/4 = -1.75 - 0.75 = -2.5 and -4 + 1.5 = -2.5; the other expressions equal -2 or -3."
        },
        {
          id: "q14",
          standard: "7.NS.3",
          type: "mc",
          prompt: "A contractor's checking account balance is -$150 (overdrawn). She deposits $95 from a client payment. What is the new balance?",
          choices: ["-$55", "-$245", "$55", "-$150"],
          correct: 0,
          explanation: "-150 + 95 = -55, so the account is still overdrawn by $55."
        },
        {
          id: "q15",
          standard: "7.NS.2",
          type: "mc",
          prompt: "A doubled batch of soup needs 1.5 times the amount of a base recipe that calls for 2.4 cups of broth. How much broth is needed?",
          choices: ["3.0 cups", "3.6 cups", "3.9 cups", "4.2 cups"],
          correct: 1,
          explanation: "Multiply: 2.4 x 1.5 = 3.6 cups of broth."
        },
        {
          id: "q16",
          standard: "7.NS.3",
          type: "mc",
          prompt: "A DIY project budget is -$40 (over budget). After returning unused screws for a $15 refund and buying an extra $28 of wood glue, what is the final budget status?",
          choices: ["-$53 (over budget)", "-$3 (over budget)", "$3 (under budget)", "-$93 (over budget)"],
          correct: 0,
          explanation: "-40 + 15 - 28 = -25 - 28 = -53, so the project is $53 over budget."
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
          choices: ["x + 12", "11x + 12", "x + 4", "6x + 7"],
          correct: 0,
          explanation: "Distribute: 6x + 12 - 5x = x + 12."
        },
        {
          id: "q18",
          standard: "7.EE.2",
          type: "mc",
          prompt: "The cost to build a section of fence is represented by 8f + 8(3), where f is the number of $8 fence panels and there are 3 additional $8 posts. Which expression is equivalent?",
          choices: ["8(f + 3)", "8f + 3", "24f", "8f + 11"],
          correct: 0,
          explanation: "8f + 8(3) = 8f + 24, which factors as 8(f + 3)."
        },
        {
          id: "q19",
          standard: "7.EE.3",
          type: "num",
          prompt: "A recipe box holds jars that each weigh 0.75 pound. If the total weight of the full box is 9 pounds, how many jars are in the box?",
          correct: ["12"],
          explanation: "Divide: 9 ÷ 0.75 = 12 jars."
        },
        {
          id: "q20",
          standard: "7.EE.4",
          type: "mc",
          prompt: "A contractor has a budget of $500 for tile. Tile costs $8 per square foot, plus a $60 delivery fee. Which inequality represents the number of square feet s she can afford?",
          choices: ["8s + 60 ≤ 500", "8s + 60 ≥ 500", "8s - 60 ≤ 500", "60s + 8 ≤ 500"],
          correct: 0,
          explanation: "The total cost (per-square-foot cost plus delivery) must be at most the budget: 8s + 60 ≤ 500."
        },
        {
          id: "q21",
          standard: "7.EE.4",
          type: "mc",
          prompt: "Using the inequality 8s + 60 ≤ 500, what is the maximum number of square feet s the contractor can afford?",
          choices: ["50", "55", "60", "65"],
          correct: 1,
          explanation: "8s + 60 ≤ 500 → 8s ≤ 440 → s ≤ 55, so the maximum is 55 square feet."
        },
        {
          id: "q22",
          standard: "7.EE.2",
          type: "ms",
          prompt: "Select ALL expressions that are equivalent to 4(3c - 2) + 5.",
          choices: ["12c - 3", "3(4c - 1)", "12c - 8", "4(3c + 2) + 5", "6(2c - 0.5)"],
          correct: [0, 1, 4],
          explanation: "4(3c - 2) + 5 = 12c - 8 + 5 = 12c - 3, which matches 3(4c - 1) and 6(2c - 0.5); the other options simplify differently."
        },
        {
          id: "q23",
          standard: "7.EE.1",
          type: "mc",
          prompt: "Factor the expression completely: 15w - 25, where w is the number of wood planks.",
          choices: ["5(3w - 5)", "5(3w - 25)", "3(5w - 25)", "15(w - 25)"],
          correct: 0,
          explanation: "The greatest common factor of 15w and 25 is 5, so 15w - 25 = 5(3w - 5)."
        },
        {
          id: "q24",
          standard: "7.EE.3",
          type: "mc",
          prompt: "It takes 20 minutes to preheat the oven, plus 12 minutes per pizza to bake. If Maria has 92 total minutes before guests arrive, how many pizzas p can she bake?",
          choices: ["4", "5", "6", "8"],
          correct: 2,
          explanation: "Solve 20 + 12p = 92: 12p = 72, so p = 6 pizzas."
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
          prompt: "A blueprint of a kitchen uses a scale of 1 inch = 3 feet. If the kitchen is drawn 5 inches wide on the blueprint, what is the actual width?",
          choices: ["12 feet", "15 feet", "18 feet", "20 feet"],
          correct: 1,
          explanation: "Multiply: 5 x 3 = 15 feet."
        },
        {
          id: "q26",
          standard: "7.G.5",
          type: "mc",
          prompt: "In a floor plan, two walls meet to form a corner. One angle measures 125°. What is the measure of the angle that forms a linear pair with it?",
          choices: ["35°", "45°", "55°", "65°"],
          correct: 2,
          explanation: "A linear pair is supplementary, so the other angle is 180° - 125° = 55°."
        },
        {
          id: "q27",
          standard: "7.G.4",
          type: "num",
          prompt: "A round cake pan has a diameter of 8 inches. What is its area, rounded to the nearest whole square inch? (Use π ≈ 3.14)",
          correct: ["50"],
          explanation: "Radius = 4 inches. Area = π r^2 = 3.14 x 16 = 50.24, which rounds to 50 square inches."
        },
        {
          id: "q28",
          standard: "7.G.4",
          type: "mc",
          prompt: "A circular garden bed has a radius of 3.5 feet. What is its circumference, rounded to the nearest whole foot? (Use π ≈ 3.14)",
          choices: ["18 ft", "20 ft", "22 ft", "25 ft"],
          correct: 2,
          explanation: "Circumference = 2 π r = 2 x 3.14 x 3.5 = 21.98, which rounds to 22 feet."
        },
        {
          id: "q29",
          standard: "7.G.6",
          type: "mc",
          prompt: "A storage box for tools is shaped like a rectangular prism with length 4 feet, width 2 feet, and height 3 feet. What is its volume?",
          choices: ["9 cubic feet", "18 cubic feet", "24 cubic feet", "30 cubic feet"],
          correct: 2,
          explanation: "Volume = length x width x height = 4 x 2 x 3 = 24 cubic feet."
        },
        {
          id: "q30",
          standard: "7.G.6",
          type: "mc",
          prompt: "A packaging box shaped like a cube has an edge length of 6 inches. What is the surface area of the box?",
          choices: ["36 sq in", "144 sq in", "216 sq in", "256 sq in"],
          correct: 2,
          explanation: "A cube has 6 faces, each with area 6 x 6 = 36 sq in. Total surface area = 6 x 36 = 216 sq in."
        },
        {
          id: "q31",
          standard: "7.G.5",
          type: "ms",
          prompt: "A rectangular room has four corners. Select ALL statements that must be true about the interior angles of the room.",
          choices: ["Each angle measures 90°", "The angles are all congruent", "The sum of all four angles is 360°", "Two angles are obtuse and two are acute", "Adjacent angles are complementary"],
          correct: [0, 1, 2],
          explanation: "A rectangle's four interior angles are each 90°, are congruent, and sum to 360°; adjacent 90° angles are supplementary (sum to 180°), not complementary."
        },
        {
          id: "q32",
          standard: "7.G.1",
          type: "num",
          prompt: "A scale drawing of a garden shed shows a wall that is 4.5 inches long, using a scale of 2 inches = 5 feet. What is the actual length of the wall in feet?",
          correct: ["11.25"],
          explanation: "The scale gives 1 inch = 2.5 feet, so 4.5 x 2.5 = 11.25 feet."
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
          prompt: "A chef wants to know the average satisfaction rating for a new dish. Which sampling method would produce the most representative results?",
          choices: ["Surveying only the chef's family", "Randomly selecting 50 customers from all who ordered the dish", "Surveying only people who complained", "Surveying the first 5 customers of the day"],
          correct: 1,
          explanation: "A random sample drawn from the entire population of customers best represents the whole group and avoids bias."
        },
        {
          id: "q34",
          standard: "7.SP.3",
          type: "num",
          prompt: "Recipe A's taste-test scores have a mean of 8.2, and Recipe B's have a mean of 7.5. What is the difference between the two means?",
          correct: ["0.7", ".7"],
          explanation: "8.2 - 7.5 = 0.7."
        },
        {
          id: "q35",
          standard: "7.SP.4",
          type: "mc",
          prompt: "Two batches of cookies were weighed in ounces. Batch 1: 1.9, 2.0, 2.1, 2.0, 2.0 (mean 2.0). Batch 2: 1.5, 2.5, 1.8, 2.2, 2.0 (mean 2.0). Which batch has more consistent weights (smaller variability)?",
          choices: ["Batch 1", "Batch 2", "They are equally consistent", "Cannot be determined"],
          correct: 0,
          explanation: "Batch 1's weights stay very close to the mean (deviations of at most 0.1), while Batch 2's weights vary much more (deviations up to 0.5), so Batch 1 is more consistent."
        },
        {
          id: "q36",
          standard: "7.SP.5",
          type: "mc",
          prompt: "A drawer contains 4 red spice jars, 3 green spice jars, and 3 yellow spice jars (10 total). What is the probability of randomly picking a green spice jar?",
          choices: ["3/10", "3/7", "7/10", "1/3"],
          correct: 0,
          explanation: "There are 3 green jars out of 10 total, so the probability is 3/10."
        },
        {
          id: "q37",
          standard: "7.SP.6",
          type: "mc",
          prompt: "A drawer has 5 packets of yeast and 15 packets of baking soda. If you randomly draw a packet, replace it, and repeat this 100 times, about how many times would you expect to draw yeast?",
          choices: ["5", "20", "25", "50"],
          correct: 2,
          explanation: "P(yeast) = 5/20 = 0.25, and 0.25 x 100 = 25 expected draws."
        },
        {
          id: "q38",
          standard: "7.SP.7",
          type: "ms",
          prompt: "A spinner used for a cooking game show is divided into 8 equal sections: 3 labeled 'Bonus' and 5 labeled 'Regular.' Select ALL statements that are true.",
          choices: ["P(Bonus) = 3/8", "P(Regular) = 5/8", "P(Bonus) = 3/5", "The probabilities of Bonus and Regular sum to 1", "P(Regular) is less than P(Bonus)"],
          correct: [0, 1, 3],
          explanation: "P(Bonus) = 3/8 and P(Regular) = 5/8, and 3/8 + 5/8 = 1; since 5/8 > 3/8, Regular is not less likely than Bonus."
        },
        {
          id: "q39",
          standard: "7.SP.8",
          type: "mc",
          prompt: "A DIY project requires picking one nail size (from 3 options) and one screw size (from 4 options) at random. How many total different combinations are possible?",
          choices: ["7", "12", "9", "24"],
          correct: 1,
          explanation: "By the counting principle, the number of combinations is 3 x 4 = 12."
        },
        {
          id: "q40",
          standard: "7.SP.8",
          type: "mc",
          prompt: "A drawer has 2 flathead and 3 phillips screwdrivers. If you randomly pick one screwdriver, then without replacing it pick another, what is the probability both are phillips?",
          choices: ["3/10", "1/2", "2/5", "3/5"],
          correct: 0,
          explanation: "P(first phillips) = 3/5, then P(second phillips) = 2/4; (3/5) x (2/4) = 6/20 = 3/10."
        }
      ]
    }
  ]
};
