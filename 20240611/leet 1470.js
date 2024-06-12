let shuffle = function(nums, n) {
  const newArray = [];
  const arrayFirstHalf = nums.slice(0, n);
  const arraySecondHalf = nums.slice(n, nums.length);
  for (let i = 0; i < n; i++) {
      newArray.push(arrayFirstHalf[i]);
      newArray.push(arraySecondHalf[i]);
  }
  return newArray;
};

const array = [2,5,1,3,4,7];

console.log(shuffle(array, 3));