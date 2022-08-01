function testCycle(a, b) {
  let x;
  while (a != 0 && b != 0) {
      if (a == b) {
          break;
      } else if (a > b) {
          a = a % b;
      } else {
          b = b % a;
      }
      x = a + b;
  }
  return x;
}