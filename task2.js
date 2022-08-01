function testCycle(k, n) {
  let x = '';
  for (let i = 1; i <= k; i++) {
      x += n + ' ';
  }
  return x.trim();
}