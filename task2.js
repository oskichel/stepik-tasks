function testCycle(k, n) {
  var x = '';
  for (let i = 1; i <= k; i++) {
      x += n + ' ';
  }
  return x.trim();
}