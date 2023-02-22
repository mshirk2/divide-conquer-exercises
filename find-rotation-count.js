function findRotationCount(arr, startIdx = 0, endIdx = arr.length - 1) {
    if (startIdx > endIdx) return 0;
    if (endIdx === startIdx) return startIdx;
    let middleIdx = Math.floor((startIdx + endIdx)/2);

    if (middleIdx < endIdx && arr[middleIdx + 1] < arr[middleIdx]){
        return middleIdx + 1;
    } else if (middleIdx > startIdx && arr[middleIdx] < arr[middleIdx - 1]){
        return middleIdx;
    } else if (arr[endIdx] > arr[middleIdx]){
        return findRotationCount(arr, startIdx, middleIdx - 1);
    }

    return findRotationCount(arr, middleIdx + 1, endIdx);

}

module.exports = findRotationCount