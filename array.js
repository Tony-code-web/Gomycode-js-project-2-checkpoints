// 1.function to find the max and min values in an array
function findMax(arr) {
    if (arr.length === 0) {
        return null; // If array is empty, return null
    }
    let maxVal = arr[0]; // Initialize maxVal with the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

function findMin(arr) {
    if (arr.length === 0) {
        return null; // If array is empty, return null
    }
    let minVal = arr[0]; // Initialize minVal with the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

// Example usage:
const arr = [5, 3, 9, 2, 7];
console.log("Maximum value:", findMax(arr));
console.log("Minimum value:", findMin(arr));

// 2. function to calculate the sum of all numbers in an array
function CalculateSum (MyArr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum =+ arr[i];
    }
    return sum;
}
// example usage
const MyArrrr = [5, 3, 9, 2, 7];
console.log("Sum of array elements:", calculateSum(arr));

// 3.filter method
function filterArray(arr, condition) {
    return arr.filter(element => condition(element));
}

// Example usage:
const arr = [5, 3, 9, 2, 7];
const filteredArr = filterArray(arr, element => element > 5); // Filter out elements greater than 5
console.log("Filtered array:", filteredArr);
