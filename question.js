function trailingZeros(num, base) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
  let numBase = factorial.toString(base).toString().split("");
  console.log(numBase);
  let count = 0;
  let curre = numBase.length;
  let pro = "0";
  for (let i = numBase.length - 1; i >= 0; i--) {
    if (numBase[i] === "0") {
      count++;
    } else {
      break;
    }
  }
  return count;
}
console.log(trailingZeros(15, 10));
