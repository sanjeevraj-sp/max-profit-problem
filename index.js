function maxProfit(n, prop) {
  const dp = Array(n + 1).fill(0);
  const choice = Array(n + 1).fill(-1);

  for (let curr = n - 1; curr >= 0; curr--) {
    for (let prop = 0; prop < properties.length; prop++) {
      const { time, rate } = properties[prop];

      if (curr + time <= n) {
        const earnings = rate * (n - (curr + time))
          + dp[curr + time];

        if (earnings > dp[curr]) {
          dp[curr] = earnings;
          choice[curr] = prop;
        }
      }
    }
  }

  const result = { T: 0, P: 0, C: 0 };
  let curr = 0;

  while (choice[curr] !== -1) {
    const property = properties[choice[curr]];

    result[property.name]++;
    curr += property.time;
  }

  console.log(`Profit: $${dp[0]}`);
  console.log(`T: ${result.T} P: ${result.P} C: ${result.C}`);
}

const properties = [
    { name: "T", time: 5, rate: 1500 },
    { name: "P", time: 4, rate: 1000 },
    { name: "C", time: 10, rate: 2000 }
];

maxProfit( 13, properties ); // 16500
