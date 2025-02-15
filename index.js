

// var arr = [1, 2, 3, 4, 5, 6];
// var target = 6;
// function binaryArr(arr, target) {
//   let left = 0;
//   let right = arr.length -1;
//   while (left <= right) {
//     let midIndex = Math.floor((left + right)/2);
//     let midElement = arr[midIndex];
//     if (target == midElement) {
//       return("element found");
//     } else if (target < midElement) {
//       right = midIndex - 1;
//     } else {
//       left = midIndex + 1;
//     }
//   }
//   return "not found";
// }
// console.log(binaryArr(arr, target));

// //2. Question: Given an array of numbers, find the second smallest number without sorting the array.

function secondSmallest(arr) {
  let uniqueArr = [...new Set(arr)];
  if (uniqueArr.length < 2) return "No second smallest element";

  let min = Math.min(...uniqueArr);
  uniqueArr.splice(uniqueArr.indexOf(min), 1);
  return Math.min(...uniqueArr);
}

console.log(secondSmallest([4, 1, 6, 2, 8]));
console.log(secondSmallest([10, 20, 30, 5, 7]));

//3.Question: Reverse the words in a sentence while keeping their original order. Do not use built-in methods like split() or reverse().

function reverseWords(sentence) {
  let words = [];
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      word += sentence[i];
    } else {
      if (word.length > 0) {
        words.push(word);
        word = "";
      }
    }
  }

  if (word.length > 0) words.push(word);

  let result = "";
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += "";
  }

  return result;
}

console.log(reverseWords("hello world"));

console.log(reverseWords("JavaScript is fun"));

// // 5.Question: Given a string, compress it by replacing consecutive duplicate characters with the character followed by the count.

function compressString(str) {
  let count = 0;
  let  arr= [];

  }
  console.log(compressString("aaabbcddd")); // Output: "a3b2c1d3"
  console.log(compressString("abc")); // Output: "a1b1c1"
  console.log(compressString("aabbccddeee")); // Output: "a2b2c2d2e3"



  //4.Question: You have an array of numbers from 1 to n with one missing number. Find the missing number efficiently.
   
  function findMissingNumber(arr, n) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === count) {
        count++;
      } else {
        return count;
      }
    }
  }
  console.log(findMissingNumber([0, 2, 4, 5], 5)); // Output: 3
  console.log(findMissingNumber([1, 3, 4, 5, 6], 6)); // Output: 2
