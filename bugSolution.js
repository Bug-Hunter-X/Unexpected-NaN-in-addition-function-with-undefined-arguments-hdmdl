function foo(a, b) {
  // Handle undefined values
  a = (a === undefined) ? 0 : a;
  b = (b === undefined) ? 0 : b;
  
  if (a === null || b === null) {
    return null; 
  }
  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(undefined, 2)); // 2
console.log(foo(1, undefined)); // 1
console.log(foo(undefined, undefined)); // 0