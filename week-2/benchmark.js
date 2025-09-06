function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.time("Fibonacci");
console.log(fibRecursive(49));
console.timeEnd("Fibonacci");
