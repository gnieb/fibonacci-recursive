function fibonacci(n) {
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("")

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// tke out the first two cases of 0, and 1.

//solve without recursion:
// function fibonacci(n) {
//   if ( n < 2 ) {
//     return n
//   }
//   else {
//     let fib = [0, 1]
//     for (let i = 2; i <= n; ++i) {
//       fib.push(fib[i-1] + fib[i-2])
//     }
//   return fib[fib.length -1]
//   }
// }