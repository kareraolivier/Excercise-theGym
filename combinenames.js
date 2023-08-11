const combinenames = (...name) => {
  if (name.length === 1) return name.join("");
  const [last, ...restOfArr] = name.reverse();
  return restOfArr.reverse().join(" ") + " " + last.toUpperCase();
  //   if (name.length > 1) {
  //     // return `${name.slice(0, name.length - 1).join("")} ${name
  //     //   .slice(-1)
  //     //   .join("")
  //     //   .toUpperCase()}`;
  //     return name.splice(
  //       name.length - 2,
  //       0,
  //       name.slice(-1).join("").toUpperCase()
  //     );
  //   }
  //   return name;
};
console.log(combinenames("karera", "fabien", "agnes"));

// let s = "one   space     between each     word";
// s.replace(/\s+/g, "");
// console.log(s);
