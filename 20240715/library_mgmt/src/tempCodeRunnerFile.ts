try {
  lilithsBrood.publishedYear = 1987;
} catch (error: any) {
  console.error(error.message);
}

console.log(`Current state of book: ${JSON.stringify(lilithsBrood.getBookDetails())}`);

try {
  lilithsBrood.genre = "Fiction";
} catch (error: any) {
  console.error(error.message);
}

console.log(`Current state of book: ${JSON.stringify(lilithsBrood.getBookDetails())}`);