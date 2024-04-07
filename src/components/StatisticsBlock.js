// components/StatisticsBlock.js

import React from 'react'

const StatisticsBlock = ({ students }) => {
  // Calculate statistics
  const calculateStatistics = () => {
    const totalStudents = students.length
    if (totalStudents === 0) {
      return {
        passed: 0,
        failed: 0,
        average: 0,
        max: 0,
        min: 0,
        total: 0,
      }
    }

    const passedStudents = students.filter((student) => student.finalGrade >= 4)
    const failedStudents = students.filter((student) => student.finalGrade < 4)
    const totalGrades = students.map((student) => student.finalGrade)

    const averageGrade =
      totalGrades.reduce((acc, curr) => acc + curr, 0) / totalStudents
    const maxGrade = Math.max(...totalGrades)
    const minGrade = Math.min(...totalGrades)

    return {
      passed: passedStudents.length,
      failed: failedStudents.length,
      average: averageGrade.toFixed(2),
      max: maxGrade,
      min: minGrade,
      total: totalStudents,
    }
  }

  const statistics = calculateStatistics()

  return (
    <div>
      <h2>Statistics</h2>
      <p>Passed: {statistics.passed}</p>
      <p>Failed: {statistics.failed}</p>
      <p>Average Grade: {statistics.average}</p>
      <p>Max Grade: {statistics.max}</p>
      <p>Min Grade: {statistics.min}</p>
      <p>Total Students: {statistics.total}</p>
    </div>
  )
}

export default StatisticsBlock
