var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((n) => n !== "")
    .map((m) => m.trim())
    .reverse()
    .join(" ");
};

console.log(reverseWords("a good   example"));
