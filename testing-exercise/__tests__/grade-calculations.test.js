const { averageExams, isStudentPassExam } = require("../grade-calculations");

describe("grade calculations", () => {
  test("it should return exact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
  });
  test("it should return pass exam status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });
  test("it should return fail exam status", () => {
    const listValueOfExams = [50, 40, 50, 40];
    expect(isStudentPassExam(listValueOfExams, "Andi")).toEqual(false);
  });
});
