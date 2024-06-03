function recommendProductCategory2(category2) {
  let recommendedCategory2 = category2 ?? "General";
  return (`Recommended category: ${recommendedCategory2}`);
}

console.log(recommendProductCategory2("Pet food"));
console.log(recommendProductCategory2("Arts & Craft"));
console.log(recommendProductCategory2(""));
console.log(recommendProductCategory2(" "));
console.log(recommendProductCategory2(0));
console.log(recommendProductCategory2(null));
console.log(recommendProductCategory2(undefined));