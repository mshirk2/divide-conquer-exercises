function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr, val);
    if (firstIdx === -1) return firstIdx;
    let lastIdx = findLast(arr, val);
    return (lastIdx - firstIdx) + 1;
}

function findFirst(arr, val, leftIdx = 0, rightIdx = arr.length - 1){
    if (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        let middleVal = arr[middleIdx];

        if (val === middleVal && (middleIdx === 0 || val > arr[middleIdx - 1])){
            return middleIdx;
        } else if (val > middleVal) {
            return findFirst(arr, val, middleIdx + 1, rightIdx);
        } else {
            return findFirst(arr, val, leftIdx, middleIdx - 1);
        }
    }
    return -1;
}

function findLast(arr, val, leftIdx = 0, rightIdx = arr.length - 1){
    if (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        let middleVal = arr[middleIdx];

        if (val === middleVal && (middleIdx === arr.length - 1 || val < arr[middleIdx + 1])){
            return middleIdx;
        } else if (val < middleVal) {
            return findLast(arr, val, leftIdx, middleIdx - 1);
        } else {
            return findLast(arr, val, middleIdx + 1, rightIdx);
        }
    }
    return -1;
}

module.exports = sortedFrequency