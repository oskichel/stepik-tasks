function testCycle(a, b) {
  let x = "";
  for (let i = (a > b ? b : a); i <= (a > b ? a : b); i++) {
      x = i + " " + x;
  }
  return x.trim();
}