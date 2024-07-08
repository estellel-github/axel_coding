type Student = {
  id: number;
  name: string;
  age: number;
  email: string;
  grade: number;
}

const students: Student[] = [
  { id: 1, name: "Gertrude", age: 65, email: "gertrude@university.com", grade: 91 },
  { id: 2, name: "Gretchen", age: 54, email: "gretchen@university.com", grade: 97 },
  { id: 3, name: "Frauke", age: 67, email: "frauke@university.com", grade: 83 },
];

const calculateAverageGrade = (students: Student[]): number => {
  const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
  return totalGrades / students.length;
};

console.log(calculateAverageGrade(students));