
// Write a JavaScript function that takes an array and return an object containing the sum, average, total number in the array, the Midian of the numbers, the maximum and minimum number, reverse the number.
// Eg:
// function specialArrtimatoc([2,4,6,8,10,12){

// Return {

// sum:20,
// average:6,

// Middian:8,
// max: 12
// min: 2,
// reverse:[12,10,8,6,4,2]

// }

// }



const arrayFunction = function (arr) {
  // check if the array is empty
  if (arr.length === 0) {
    return {
      sum: 0,
      average: 0,
      median: null,
      max: null,
      min: null,
      reverse: [],
    };
  }

  // sort the array
  const sortedArray = [...arr].sort((a, b) => a - b);

  // Total is the number of the arr
  const total = arr.length;

  // calculating the sum
  const sum = arr.reduce((acc, val) => acc + val, 0);

  // calculating the average
  const average = sum / total;

  // calculating the median
  const median =
    total % 2 === 0
      ? (sortedArray[total / 2 - 1] + sortedArray[total / 2]) / 2
      : sortedArray[Math.floor(total / 2)];

  // calculating the max
  const max = sortedArray[total - 1];

  // calculating the min
  const min = sortedArray[0];

  // calculating the max
  const reversed = sortedArray.slice().reverse();

  return {
    sum,
    average,
    median,
    max,
    min,
    reverse: reversed,
  };
};

// const arr = [2, 4, 6, 8, 10, 12];
// arrayFunction([2, 4, 6, 8, 10, 12]);
console.log(arrayFunction([2, 4, 3, 8, 6, 14, 10, 12]));
