let students = [
  { name: "Alice", category: "engineering" },
  { name: "Bob", category: "medicine" },
  { name: "Charlie", category: "psychology" },
  { name: "David", category: "engineering" },
  { name: "Eve", category: "psychology" },
  { name: "Frank", category: "medicine" },
  { name: "Grace", category: "engineering" },
  { name: "Henry", category: "psychology" },
  { name: "Ivy", category: "engineering" },
  { name: "Jack", category: "medicine" },
  { name: "Karen", category: "psychology" },
  { name: "Leo", category: "engineering" },
  { name: "Mia", category: "psychology" },
  { name: "Noah", category: "engineering" },
  { name: "Olivia", category: "medicine" },
  { name: "Peter", category: "psychology" },
  { name: "Quinn", category: "engineering" },
  { name: "Rachel", category: "medicine" },
  { name: "Sam", category: "psychology" },
  { name: "Tom", category: "engineering" },
];

// Simple Search with for loop
/* const filterByCategory = (input) => {
  if (input === "All") {
    return students;
  }
  const filteredStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].category.toLowerCase() === input.toLowerCase()) {
      filteredStudents.push(students[i]);
    }
  }
  return filteredStudents;
}; */

// Filter with .filter method
const filterByCategory = (input) => {
  if (input === "All") {
    return students;
  }
  return students.filter((student) => student.category.toLowerCase().includes(input.toLowerCase()));
};

const displayResults = (event) => {
  event.preventDefault();
  const categoryInputEl = document.querySelector("#category-list");
  const resultsEl = document.querySelector("#results");
  const filteredStudents = filterByCategory(categoryInputEl.value);
  resultsEl.textContent = filteredStudents
    .map((student) => student.name)
    .join("\n");
};

const searchButtonEl = document.querySelector("#search-button");
searchButtonEl.addEventListener("click", displayResults);
