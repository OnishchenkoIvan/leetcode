var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const arr1 = {};
  const arr2 = {};
  for (let i = 0; i < s.length; i += 1) {
    if (arr1[s[i]] !== arr2[t[i]]) {
      return false;
    } else {
      (arr1[s[i]] = i), (arr2[t[i]] = i);
    }
  }
  return true;
};
//
// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
