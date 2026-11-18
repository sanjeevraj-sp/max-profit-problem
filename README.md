# Maximum Profit Calculator

## Logic

- We use **Dynamic Programming (DP)** to calculate the maximum possible profit.
- We start from the end of the timeline and move backwards.
- At each position, we check every property to see whether its construction time fits within the remaining timeline.
- We calculate the profit for each valid property by adding:
  - The income earned after the property is completed.
  - The maximum profit possible from the remaining timeline.
- We select the property that gives the highest profit and store all properties that give the same maximum profit.
- After calculating the DP values, we use the stored choices to find all possible combinations that achieve the maximum profit.
- We use a `Map` to remove duplicate combinations.
- Finally, **`dp[0]` gives the maximum possible profit for the entire timeline**, and the combinations list contains the different optimal property selections.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project folder:
   ```bash
   cd <project-folder>
   ```

3. Run the JavaScript file:
   ```bash
   node index.js
   ```