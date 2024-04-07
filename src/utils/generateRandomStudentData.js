// utils/generateRandomStudentData.js

const generateRandomStudentData = (numStudents) => {
  const students = []
  for (let i = 0; i < numStudents; i++) {
    const student = {
      id: i + 1,
      name: `Student ${i + 1}`,
      ticketNumber: Math.floor(Math.random() * 1000) + 1,
      ticketTopic: `Topic ${Math.floor(Math.random() * 5) + 1}`,
      examGrade: Math.floor(Math.random() * 10) + 1,
      ratingGrade: Math.floor(Math.random() * 10) + 1,
      comments: '',
    }
    students.push(student)
  }
  return students
}

export default generateRandomStudentData
