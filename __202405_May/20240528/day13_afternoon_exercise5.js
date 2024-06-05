/* 5. Exercise: Default Product Category
● Description:Write a function recommendProductCategory() that
takes a parameter category (string). Add a default category
“General”
● Implement this function twice:
○ Once using the Logical OR operator.
○ Once using the Nullish Coalescing Operator.
● Experiment with calling the functions with different parameters
and observe the different outputs. Try out: a specific category,
null, undefined, “”, 0, and no category (no input).
● What is the difference between these functions? */

function recommendProductCategory(category) {
  let recommendedCategory = category || "General";
  return (`Recommended category: ${recommendedCategory}`);
}

console.log(recommendProductCategory("Pet food"));
console.log(recommendProductCategory("Arts & Craft"));
console.log(recommendProductCategory(""));
console.log(recommendProductCategory(" "));
console.log(recommendProductCategory());
console.log(recommendProductCategory(0));
console.log(recommendProductCategory(null));
console.log(recommendProductCategory(undefined));