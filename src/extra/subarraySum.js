// function subarraySum(arr, target) {
//   let left = 0;
//   let right = 0;
//   let sum = 0;

//   while (right <= arr.length) {
//     if (sum === target) {
//       return [left, right];
//     }

//     if (sum < target) {
//       sum += arr[right];
//       right++;
//     } else {
//       sum -= arr[left];
//       left++;
//     }
//   }

//   return "No subarray found";
// }
function subarraySum(arr, target) {
    const prefixSum = { 0: 0 };
    let currSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        const complement = currSum - target;
        complement;
        if (prefixSum[complement] !== undefined) {
            return [prefixSum[complement], i + 1];
        }
        prefixSum[currSum] = i + 1;
    }
}
console.log(subarraySum([1, 1, 1], 3));
