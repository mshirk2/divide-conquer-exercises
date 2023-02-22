function countZeroes(arr, val = 0) {
  let firstIdx = findFirst(arr, val)
  if (firstIdx === -1) return 0;
  return arr.length - firstIdx;
}

function findFirst(arr, val, leftIdx = 0, rightIdx = arr.length - 1){
  if (leftIdx <= rightIdx){
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
      let middleVal = arr[middleIdx];

      if (val === middleVal && (middleIdx === 0 || val < arr[middleIdx - 1])){
          return middleIdx;
      } else if (val < middleVal) {
          return findFirst(arr, val, middleIdx + 1, rightIdx);
      } else {
          return findFirst(arr, val, leftIdx, middleIdx - 1);
      }
  }
  return -1;
}

module.exports = countZeroes