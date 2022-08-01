function testCycle(a, b) {
  let x = '';
  for (let i = a; i <= b; i++) {
      x += i + ' ';
  }
  return x.trim();
}