function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const revers = [];
  const arr = s.split("");
  arr.forEach((l) => {
    if (vowels.includes(l.toLowerCase())) {
      revers.push(l);
    }
  });
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (vowels.includes(arr[i].toLowerCase())) {
      result.push(revers.pop());
    } else result.push(arr[i]);
  }
  return result.join("");
}
