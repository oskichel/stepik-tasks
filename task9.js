function testCycle(n) {
  let x = n;
  for (let i = 2; i <= n - 2; i += 2) {
      x *= n - i;
  }
  return x;
}