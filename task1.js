function testCycle(n) {
  let x = 0;
  for (let i = 1; i <= n; i++) {
      x = x + i;
  }
  return x;
}