let nums = [];
for(let i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);}
    console.log(nums);
    function findMax (arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; ++i) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    function findMin (arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; ++i) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
let minValue = findMin(nums);

console.log("The minimum value is: " + minValue);

let maxValue = findMax(nums);

console.log("The maximum value is: " + maxValue);