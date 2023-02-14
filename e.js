function tenderChange(amountArray, amountSum) {
  let result = [];
  for (let i = amountArray.length - 1; i >= 0; i--) {
    while (amountArray[i] <= amountSum) {
      result.push(amountArray[i]);
      amountSum -= amountArray[i];
    }
  }
  console.log(result);
  return result;
}

tenderChange([1, 2, 5, 8, 10], 7);

{
  /*
Greedy algorithm

Follows local optimal choice at eact stage with intend of finding global optimum.
Local optimal choice is regardless on anything.
It don't cares with and how input will work in future as per output.
It just looks for current best solution
*/
}

// USUNG DYNAMIC PROGRAMMING ****************************************************************
function tenderChangeDP(amount, denominations) {
  const table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  for (const denomination of denominations) {
    for (let i = denomination; i <= amount; i++) {
      table[i] = Math.min(table[i], table[i - denomination] + 1);
    }
  }

  const change = {};
  let i = amount;
  for (const denomination of denominations) {
    while (i >= denomination && table[i - denomination] + 1 === table[i]) {
      if (!change[denomination]) {
        change[denomination] = 1;
      } else {
        change[denomination]++;
      }
      i -= denomination;
    }
  }
  console.log(change);
  return change;
}

tenderChangeDP(87, [50, 25, 10, 5, 1]);

{
  /*
Dynamic programming is used in the above program to efficiently compute the 
minimum number of coins required to make change for each possible amount up to 
the target amount. By using a bottom-up approach to build a table, we can avoid 
recomputing the minimum number of coins for the same amount multiple times.

The table is initialized with Infinity for every amount except 0, which is 
initialized with 0 since we don't need any coins to make change for 0. Then, 
we consider each coin denomination in turn and compute the minimum number of 
coins required to make change for each amount using that coin denomination. 
We fill in the table by considering the subproblem of making change for an amount 
equal to the current amount minus the current coin denomination, and adding one coin 
to the minimum number of coins required to make change for that subproblem.

Once we have computed the minimum number of coins required for each amount, 
we can use the table to determine the actual coins to use for change by working 
backwards from the target amount. We start with the largest coin denomination and 
subtract as many coins as possible from the current amount, then move on to the next 
largest coin denomination and repeat until we've made change for the entire amount. 
This gives us the most optimum way to tender exact change using the least number of coins.
*/
}

function removeOneDigitGP(N) {
  const digits = N.toString().split('');
  let result = '';

  for (let i = 0; i < digits.length; i++) {
    const remainingDigits = digits.filter((_, index) => index !== i);
    const newNumber = Number(remainingDigits.join(''));

    if (newNumber > Number(result)) {
      result = newNumber.toString();
    }
  }
  console.log(result);
  return result;
}

// example usage
removeOneDigitGP(56824);

{
  /*
The algorithm iterates over each digit in the input number and tries removing it to form a new number.

At each step, the algorithm selects the largest digit possible that is less than the next digit
in the number (or less than or equal to the next digit, if the next digit is smaller), and removes 
it. This choice is made based solely on the information available at the current step, without 
considering the impact of this choice on the overall optimality of the solution.

This approach may not always produce the globally optimal solution, but in many cases it can give 
a good approximation of the optimal solution while being computationally efficient. In the case of this 
problem, the greedy algorithm works well because removing the largest digit that is less than the 
next digit will generally lead to the largest possible number after removing one digit.

However, there are some cases where the greedy algorithm will not produce the optimal solution. 
For example, consider the input number 9876521. The greedy algorithm would remove the digit 9, which is 
the largest digit less than the next digit 8, but this would result in a number that is not as large 
as it could be. The optimal solution in this case is to remove the digit 1, which results in the number 987652. 
So, while the greedy algorithm can be a useful approach in many cases, it's important to note that it may not always produce the optimal solution.
*/
}