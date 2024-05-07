// 1-masala

// let oddNumbers = [];
// function getOddnumbers(n) {
//   let k = 1;
//   for (i = 1; i <= n; i++) {
//     if (i == 1) {
//       oddNumbers.push(i);
//     } else {
//       oddNumbers.push((k += 2));
//     }
//   }
//   return oddNumbers;
// }
// console.log(getOddnumbers(5));

// 2-masala

// let evenNumbers = [];
// function getEvenNumbers(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evenNumbers.unshift(arr[i]);
//     }
//   }
//   return evenNumbers;
// }
// let array = [4, 5, 7, 8, 6, 9, 12];
// console.log(getEvenNumbers(array));

// 3-masala

// function alternateArray(arr) {
//   let result = [];
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     result.push(arr[i], arr[n - 1 - i]);
//   }
//   return result;
// }
// let inputArray = [4, 5, 7, 8, 6, 9];
// let outputArray = alternateArray(inputArray);

// console.log(outputArray);

// 4-masala

// let sum = 0;
// let arr = [1, 6, 9, 5, 8, 10, 15];
// let n = arr.length;
// function calc(arr, k, l) {
//   for (i = 0; i < n; i++) {
//     if (i >= k && i <= l) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(calc(arr, 2, 5));

// 5-masala

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// function removeDuplicates(arr) {
//   let unique = [];
//   arr.forEach((element) => {
//     if (!unique.includes(element)) {
//       unique.push(element);
//     }
//   });
//   return unique;
// }
// console.log(removeDuplicates(arr));

// 6-masala

// let arr = [7, 4, 9, 2, 3, 1, 5];
// let mn;
// let mx;
// function changeIndexOfMinMax(arr) {
//   let minNum = arr[0];
//   let maxNum = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (minNum > arr[i]) {
//       minNum = arr[i];
//       mn = i;
//     }
//     if (maxNum < arr[i]) {
//       maxNum = arr[i];
//       mx = i;
//     }
//   }
//   arr[mn] = maxNum;
//   arr[mx] = minNum;
//   console.log(`max: ${maxNum}`);
//   console.log(`min: ${minNum}`);
//   console.log(arr);
// }
// changeIndexOfMinMax(arr);
