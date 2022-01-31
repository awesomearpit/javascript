// f - b
// o - a
// o - r --

// b - f
// a - o
// r - o --

function isIsomorphic(source, target) {
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < source.length; i++) {
    const sourceCurr = source[i];
    const targetCurr = target[i];

    if (
      !map1[sourceCurr] &&
      !Object.values(map1).some((value) => value === targetCurr)
    ) {
      map1[sourceCurr] = targetCurr;
    } else if (map1[sourceCurr] !== targetCurr || !map1[sourceCurr]) {
      return false;
    }

    if (
      !map2[targetCurr] &&
      !Object.values(map2).some((value) => value === sourceCurr)
    ) {
      map2[targetCurr] = sourceCurr;
    } else if (map2[targetCurr] !== sourceCurr || !map2[targetCurr]) {
      return false;
    }
  }

  return true;
}

console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("title", "paper"));
console.log(isIsomorphic("baba", "bada"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
console.log(isIsomorphic("babaaaba", "baabbbba"));