// O(log n) - Binary Search Example
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Found the target
    if (arr[mid] === target) {
      return mid;
    }
    // Target is in the right half
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    // Target is in the left half
    else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 7)); // Output: 3
console.log(binarySearch(sortedArray, 10)); // Output: -1
