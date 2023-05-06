var isPalindrome = function (s) {
  const arr = s.toLowerCase().split(/[\W_]+/);
  const stringFirst = arr.join("");
  const stringSecond = arr
    .map((m) => {
      return m.split("").reverse().join("");
    })
    .reverse()
    .join("");
  return stringFirst === stringSecond;
};
