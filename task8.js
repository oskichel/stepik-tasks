function testCycle(n) {
  let x = 0;
  for (let i = 1; i <= n; i += 0.5) {
      x += i;
  }
  return x;
}