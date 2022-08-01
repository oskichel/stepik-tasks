function testCycle(n) {
  let x = "Простое число";
  for (let i = 2; i <= n; i++) {
      if (n % i === 0 && n !== i) {
          x = "Составное число";
      }
  }
  return x;
}