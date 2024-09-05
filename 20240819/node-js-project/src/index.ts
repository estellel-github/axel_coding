import express, { Request, Response } from "express";
import { port } from "./config";
import { logServerMessage } from "./logger";
import { students, IStudent } from "./dummyData";

const app = express();

app.use(express.json());

const apiRouter = express.Router();

apiRouter.get("/", (req: Request, res: Response) => {
  res.status(204).send();
});

apiRouter.get("/students", (req: Request, res: Response) => {
  res.json(students);
});

apiRouter.get("/students/:id", (req: Request, res: Response) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);
  if (!student) {
    res.status(404).json({ message: "No student found" })
  }
  else {
    res.json(student);
  }
})

apiRouter.post("/students", (req: Request, res: Response) => {
  const newStudent: IStudent = req.body;
  students.push(newStudent);
  res.status(201).json(newStudent); // 201: successfully created
})

apiRouter.put("/students/:id", (req: Request, res: Response) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === studentId);
  if (studentIndex !== -1) { // if findIndex did not find anything (returns -1)
    students[studentIndex].grade = req.body.grade;
    res.json(students[studentIndex]);
  }
  else {
    res.status(404).json({ message: "Student not found" });
  }
})

apiRouter.delete("/students/:id", (req: Request, res: Response) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex((s) => s.id === studentId);
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1)
    res.status(204).send(); // 204: successful response, no content
  }
  else {
    res.status(404).json({ message: "Student not found" });
  }
})

app.use('/api', apiRouter);

app.listen(port, () => logServerMessage(`Server is running on port ${port}`));