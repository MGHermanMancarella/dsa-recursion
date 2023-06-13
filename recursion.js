/** product: calculate the product of an array of numbers. */

function product(nums) {
  // base case
  if (nums.length === 0) return 1;
  // progress
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // base case
  if (words.length === 0) return 0;

  // progress
  return Math.max(words[0].length, longest(words.slice(1)))
}


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str === "") {
    return str;
  }
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;
  return arr[0] === val || find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 1 || str === "") return true;

  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1,str.length-1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") return str;
  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  // base case:
  if (arr[idx] === val){
   return idx;
   }
   if (idx === arr.length ) return -1

  return findIndex(arr, val, idx + 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  function _gatherStrings(obj){
    for (let key in obj){
      const val = obj[key]
      if (typeof val === 'string'){
        strings.push(val)
      } else if (typeof val === 'object'){
        _gatherStrings(val)
      }
    }
  }
  _gatherStrings(obj)
return strings
}
// for let key in obj type of string ? push : continue

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return false;

  const checkIdx = Math.floor(arr.length / 2);
  let start = 0;
  let end = arr.length;

  if (arr[checkIdx] === val) return true;
  if (arr[checkIdx] < val) start = checkIdx+1;
  if (arr[checkIdx] > val) end = checkIdx;

  return binarySearch(arr.slice(start,end), val);
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left=0, right=arr.length) {
  if (left === right) return -1;

  const checkIdx = Math.floor((left + right) / 2);
  if (arr[checkIdx] === val) return checkIdx;
  if (arr[checkIdx] < val) return binarySearchIndex(arr, val, checkIdx+1);
  if (arr[checkIdx] > val) return binarySearchIndex(arr, val, left, checkIdx);

}

// [1, 2], 1

// left=0
// right=2
// check=1
// arr[check] = 2 > 1

// left=0
// right=1
// check=1
// arr[check] = 2 > 1
// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
