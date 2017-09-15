/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

//////////////////////////
///// SOLUTION 1 /////////
/////////////////////////


function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday) || !stock_prices_yesterday.length) return 0;
  let min = Infinity;
  let max = -Infinity;
  let oldmin;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    oldmin = min;
    if (min > stock_prices_yesterday[i]) min = stock_prices_yesterday[i];
    if (oldmin === min && max < stock_prices_yesterday[i]) max = stock_prices_yesterday[i];
  }
  return max - min;
}


//////////////////////////
///// SOLUTION 2 /////////
/////////////////////////

// function bestProfit(stock_prices_yesterday) {
//   if (!Array.isArray(stock_prices_yesterday) || !stock_prices_yesterday.length) return 0;
//   let buy = stock_prices_yesterday[0];
//   let profit = 0;
//   for (let i = 0; i < stock_prices_yesterday.length; i++) {
//     buy = Math.min(buy, stock_prices_yesterday[i])
//     profit = Math.max(profit, stock_prices_yesterday[i] - buy)
//   }
//   return profit;
// }

module.exports = bestProfit;
