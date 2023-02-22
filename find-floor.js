function findFloor(arr, val, startIdx = 0, endIdx = arr.length -1) {
    if (startIdx > endIdx) return -1;
    if (val >= arr[endIdx]) return arr[endIdx];

    let middleIdx = Math.floor ((startIdx + endIdx) / 2);

    if (arr[middleIdx] === val) return arr[middleIdx];

    if (arr[middleIdx - 1] <= val && val < arr[middleIdx]){
        return arr[middleIdx - 1];
    }

    if (val < arr[middleIdx]){
        return findFloor(arr, val, startIdx, middleIdx - 1)
    }

    return findFloor(arr, val, middleIdx + 1, endIdx);
}

module.exports = findFloor