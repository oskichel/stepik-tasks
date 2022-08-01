function testCycle(a, b) {
  let x = 0;
  if (a > b) {
      for (let i = b; i <= a; i++) {
          x += i**2;
      }
  } else if (a < b) {
      for (let i = a; i <= b; i++) {
           x+= i**2;
      }
  } else {
      x = a**2;
  }
  return x;
}