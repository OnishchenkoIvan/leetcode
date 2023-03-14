var splitNum = function (num) {
  const arr = num
    .toString()
    .split("")
    .sort((a, b) => a - b);

  let str1 = "";
  let str2 = "";

  for (let i = 0; i < arr.length; i += 1) {
    i % 2 === 0 ? (str1 += arr[i]) : (str2 += arr[i]);
  }

  return Number(str2) + Number(str1);
};

splitNum(4325);
