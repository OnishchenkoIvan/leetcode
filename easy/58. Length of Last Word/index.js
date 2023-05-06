var lengthOfLastWord = function (s) {
  const arrayWords = s.trim().split(" ");
  return arrayWords[arrayWords.length - 1].length;
};
