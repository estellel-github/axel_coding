class Exam {
  constructor(score) {
    this.score = score;
    this.grade = this.calculateGrade();
  }

  calculateGrade() {
    if (this.score >= 90) {
      return "A";
    } else if (this.score >= 80) {
      return "B";
    } else if (this.score >= 70) {
      return "C";
    } else if (this.score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

function getValidScore() {
  let score;
  while (true) {
    score = prompt("Enter score here");
    score = Number(score); // Make sure type is correct
    if (!isNan(score) && score >= 0 && score <= 100) {
      break;
    }
    alert("Enter a valid score plz");
  }

  return score;
}

function promptUser() {
  const score1 = getValidScore;
  const score2 = getValidScore;
}
