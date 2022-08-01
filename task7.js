function testCycle(n) {
  let x = "";
  let current = 0;
  for (let i = 1; i <= n; i++) {
      current += 2 * i -1;
      x += current + ' ';
  }
  return x.trim();
}