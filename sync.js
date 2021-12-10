// some examples in python pseudo-code
// sync([1, 2, 3], [1, 3, 4])
// [2, 4]
// sync([1, 9], [1])
// [9]
// sync([1, 2, 3], [1, 2, 3])
// []


// Solution 1
// I have decided to use a hash to hold all the numbers from both arrays to have the option of grabbing the values in constant time or O(1)
// I decided to use a for loop to iterate through both input arrays at the same time (giving us a time complexity of linear or O(n))
// I decided to iterate through the hash (O(n)) to grab any values that contains a value of 1 which presents this value was not present in both lists.
// At the end, this solution brings us to a time complexity of O(n) (n being the length of the largest array)
// and a space complexity of O(n + m) (n being the length of arr1 and m being the length of arr2)
const sync = (arr1, arr2) => {
  const largeArr = arr1.length > arr2.length ? arr1 : arr2;

  let singleNumbers = [];
  let syncObject = {};

  for (let i = 0; i < largeArr.length; i++) {
    let num1 = arr1[i];
    let num2 = arr2[i];

    if (!syncObject[num1]) syncObject[num1] = 0;
    if (!syncObject[num2]) syncObject[num2] = 0;

    syncObject[num1] += 1;
    syncObject[num2] += 1;
  }

  for (let num in syncObject) {
    if (syncObject[num] === 1) singleNumbers.push(parseInt(num));
  }

  return singleNumbers;
}
