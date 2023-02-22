function findRotatedIndex(arr, val) {
    const rotationPoint = findRotationPoint(arr)

    if (rotationPoint > 0 && val >= arr[0] && val <= arr[rotationPoint - 1]){
        return searchWithRotationPoint(arr, val, 0, rotationPoint - 1);
    } else {
        return searchWithRotationPoint(arr, val, rotationPoint, arr.length -1);
    }
}

function findRotationPoint(arr){
    let startIdx = 0;
    let endIdx = arr.length - 1;

    while (startIdx <= endIdx){
        let middleIdx = Math.floor((startIdx + endIdx) / 2);
        
        if (arr[middleIdx] > arr[middleIdx + 1]){
            return middleIdx + 1;
        } else if (arr[startIdx] <= arr[middleIdx]){
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1;
        }
    }   
}

function searchWithRotationPoint (arr, val, startIdx, endIdx){
    if (arr.length === 0 || val < arr[startIdx] || val > arr[endIdx]) return - 1;

    while (startIdx <= endIdx){
        let middleIdx = Math.floor((startIdx + endIdx) / 2);
        
        if (arr[middleIdx] === val){
            return middleIdx;
        } else if (arr[middleIdx] < val){
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1
        }
    }
    return -1;
}

module.exports = findRotatedIndex