function maxProfit(n, properties) {

  const dp = Array(n + 1).fill(0);
  const choice = Array.from({ length: n + 1 }, () => []);

  for (let curr = n - 1; curr >= 0; curr--) {
    for (let prop = 0; prop < properties.length; prop++) {
      const { time, rate } = properties[prop];

      if (curr + time <= n) {
        const earnings = rate * (n - (curr + time))
          + dp[curr + time];

        if (earnings > dp[curr]) {
          dp[curr] = earnings;
          choice[curr] = [prop];
        }
        else if (earnings === dp[curr] && earnings > 0) {
          choice[curr].push(prop);
        }
      }
    }
  }

  const combinations = new Map();

  function findCombinations(curr, result) {

    if (choice[curr].length === 0) {
      const key = `${result.T},${result.P},${result.C}`;
      combinations.set(key, {
        T: result.T,
        P: result.P,
        C: result.C
      });
      return;
    }

    for (const prop of choice[curr]) {

      const property = properties[prop];

      result[property.name]++;

      findCombinations(curr + property.time, result);

      result[property.name]--;
    }
  }

  findCombinations(0, { T: 0, P: 0, C: 0 });

  console.log("Max Earnings:", dp[0]);
  console.log("Valid Combinations:", [...combinations.values()]);
}

const properties = [
    { name: "T", time: 5, rate: 1500 },
    { name: "P", time: 4, rate: 1000 },
    { name: "C", time: 10, rate: 2000 }
];

maxProfit( 7, properties );
