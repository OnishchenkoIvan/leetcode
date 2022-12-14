function fizzBuzz(n: number): string[] {
  let result = []
  for (let i = 1; i <= n; i +=1) {
    (i % 15 === 0) ? result.push('FizzBuzz') : (i % 5 === 0) ? result.push('Buzz') : (i % 3 === 0) ? result.push('Fizz') : result.push(i.toString())
  }
  return result
};