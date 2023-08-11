const arr = (...newarr) => {
  let ans = [];
  for (let i = 0; i < newarr.length; i++) {
    for (let j = 0; j < newarr.length; j++) {
      if (newarr[i][j] != undefined) {
        ans.push(newarr[i][j]);
      }
    }
  }
  return ans;
};
console.log(arr([1, 3, 6], [4, 2, 4], [1, 2, 3, 4], ["s", "g", "w"]));
