let students = [
  { name: "stu1", marks: [85, 68, 66] },
  { name: "stu2", marks: [98, 85, 92] }
];
let a = students.map(student => ({
  name: student.name,
  total: student.marks.reduce((sum, mark) => sum + mark, 0)
}));
console.log(a);
let highScorers = a.filter(student => student.total > 200);
console.log(highScorers);
let topperMarks = a.reduce((max, student) => {
  return student.total > max ? student.total : max;
}, 0);
console.log(topperMarks);