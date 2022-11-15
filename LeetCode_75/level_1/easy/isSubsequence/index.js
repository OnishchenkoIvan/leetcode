var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  let count = 0;
  for (let i = 0; i < t.length; i += 1) {
    if (s[count] === t[i]) count += 1;
  }
  return count === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
