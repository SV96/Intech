function trapWater(roofArr) {
  let n = roofArr.length;
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);
  let trappedWater = 0;

  leftMax[0] = roofArr[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], roofArr[i]);
  }

  rightMax[n - 1] = roofArr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], roofArr[i]);
  }

  for (let i = 0; i < n; i++) {
    trappedWater += Math.min(leftMax[i], rightMax[i]) - roofArr[i];
  }

  console.log(trappedWater);
  return trappedWater;
}
trapWater([2, 1, 3, 0, 1, 2, 3]);

// *************************************************

function trapWaterFast(roofArr) {
  let n = roofArr.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (roofArr[left] < roofArr[right]) {
      if (roofArr[left] > leftMax) {
        leftMax = roofArr[left];
      } else {
        trappedWater += leftMax - roofArr[left];
      }
      left++;
    } else {
      if (roofArr[right] > rightMax) {
        rightMax = roofArr[right];
      } else {
        trappedWater += rightMax - roofArr[right];
      }
      right--;
    }
  }
  console.log(trappedWater);
  return trappedWater;
}

trapWaterFast([2, 1, 3, 0, 1, 2, 3]);

// *************************************************
