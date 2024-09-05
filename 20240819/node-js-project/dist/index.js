"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const logger_1 = require("./logger");
const dummyData_1 = require("./dummyData");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const apiRouter = express_1.default.Router();
apiRouter.get("/", (req, res) => {
    res.status(204).send();
});
apiRouter.get("/students", (req, res) => {
    res.json(dummyData_1.students);
});
apiRouter.get("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = dummyData_1.students.find((s) => s.id === studentId);
    if (!student) {
        res.status(404).json({ message: "No student found" });
    }
    else {
        res.json(student);
    }
});
apiRouter.post("/students", (req, res) => {
    const newStudent = req.body;
    dummyData_1.students.push(newStudent);
    res.status(201).json(newStudent); // 201: successfully created
});
apiRouter.put("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = dummyData_1.students.findIndex((s) => s.id === studentId);
    if (studentIndex !== -1) { // if findIndex did not find anything (returns -1)
        dummyData_1.students[studentIndex].grade = req.body.grade;
        res.json(dummyData_1.students[studentIndex]);
    }
    else {
        res.status(404).json({ message: "Student not found" });
    }
});
apiRouter.delete("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = dummyData_1.students.findIndex((s) => s.id === studentId);
    if (studentIndex !== -1) {
        dummyData_1.students.splice(studentIndex, 1);
        res.status(204).send(); // 204: successful response, no content
    }
    else {
        res.status(404).json({ message: "Student not found" });
    }
});
app.use('/api', apiRouter);
app.listen(config_1.port, () => (0, logger_1.logServerMessage)(`Server is running on port ${config_1.port}`));
