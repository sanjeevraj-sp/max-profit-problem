# Maximum Profit Calculator

## Logic

- We use **Dynamic Programming (DP)** and calculate the maximum possible profit by iterating backwards through the timeline.
- At each position in the DP array, we check all available properties and choose the one that gives the maximum profit.
- The calculated profit is combined with the future profit stored at the corresponding position in the DP array.
- This process continues backwards, so each position holds the maximum profit achievable from that point onwards.
- Finally, **`dp[0]` gives the maximum possible profit for the entire given timeline.**

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