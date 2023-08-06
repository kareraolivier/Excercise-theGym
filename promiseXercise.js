// let pr = new Promise((resolve, reject) => {
//   let a = 1 + 2;
//   if (a == 3) {
//     resolve("成功");
//   } else {
//     reject("失败");
//   }
// });
// pr.then((res) => console.log("good", res))
//   .catch((err) => console.log("bad", err))
//   .finally(() => console.log("done"));

let one = new Promise((resolve, reject) => {
  resolve("one");
});
let two = new Promise((resolve, reject) => {
  let a = 4 + 2;
  if (a == 3) {
    resolve("成功");
  } else {
    reject("失败");
  }
});
let three = new Promise((resolve, reject) => {
  resolve("three");
});

// Promise.all([one, two, three])
//   .then((res) => console.log(res))
//   .catch((err) => {});
Promise.allSettled([one, two, three])
  .then((res) => {
    console.log(res);
    return res.filter((a) => a.status == "fulfilled");
  })
  .then((res) => console.log(res))
  .catch((err) => {});
