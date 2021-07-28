/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  let result = -1;
  //if amount is 0, return 0
  if (amount === 0) {
      return 0
  }

  //find shortest solution (decision tree?)
      //loop through coins
          //recusively add coins to total, looping through coins at each level
  const helperDecisionTree = (total, count) => {
    // debugger
      if (total === amount) {
          if (result === -1) {
              result = count;
          } else {
              result = count < result ? count : result;
          }
          return;
      }
      if (total > amount) {
          return;
      }
      for (let i = 0; i < coins.length; i++) {
          helperDecisionTree((total + coins[i]), (count + 1))
      }
  }

  for (let j = 0; j < coins.length; j++) {
    helperDecisionTree(coins[j], 1);
  }

  //return total number of coins
  return result
};

console.log(coinChange([5], 13))