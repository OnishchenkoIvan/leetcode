/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (m) {
  let count = [];
  function sum(n) {
    if (n === 1) return true;
    const num = n.toString().split("");
    const newNum = num.reduce((acc, m) => {
      acc += Number(m) * Number(m);
      return acc;
    }, 0);
    if (count.some((n) => n === newNum)) return false;
    count.push(newNum);
    return sum(newNum);
  }

  return sum(m);
};

console.log(isHappy(9));
