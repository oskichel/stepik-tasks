function testCycle(a, b) {
  let x = '';
  if (a > b) {
      for (let i = b; i <= a; i++) {
          x += i + ' ';
      }
  } else {
      for (let i = a; i <= b; i++) {
          x+= i + ' ';
      }
  }
  return x.trim();
}