function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  var freqMap = new Map();
  changed.sort((a, b) => a - b);

  for (var num of changed) {
    if (freqMap.has(num * 2) && freqMap.get(num * 2) > 0) {
      freqMap.set(num * 2, freqMap.get(num * 2) - 1);
    } else {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  }

  var result = [];
  for (var [num, freq] of freqMap) {
    if (freq > 0) {
      for (var i = 0; i < freq; i++) {
        result.push(num);
      }
    }
  }

  return result.length === changed.length / 2 ? result : [];
};

const changed = [1,3,4,2,6,8]
console.log(findOriginalArray(changed));