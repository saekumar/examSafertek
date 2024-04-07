// App.js

import React, { useState } from 'react'
// import Header from './components/Header'
import MainBlock from './components/MainBlock'
import StatisticsBlock from './components/StatisticsBlock' // Import StatisticsBlock component
// import Footer from './components/Footer'
import generateRandomStudentData from './utils/generateRandomStudentData'

function App() {
  const [students, setStudents] = useState([])

  // Function to generate random student data
  const generateData = () => {
    const randomStudents = generateRandomStudentData(20) // Generate 20 random students
    setStudents(randomStudents)
  }

  const [showStatistics, setShowStatistics] = useState(false)

  // Sorting function
  const sortStudents = (field, order) => {
    const sortedStudents = [...students].sort((a, b) => {
      if (order === 'asc') {
        return a[field] > b[field] ? 1 : -1
      } else {
        return a[field] < b[field] ? 1 : -1
      }
    })
    setStudents(sortedStudents)
  }

  // Filtering function
  const filterStudents = (searchValue) => {
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setStudents(filteredStudents)
  }

  return (
    <div>
      {/* <Header /> */}
      <MainBlock
        students={students}
        sortStudents={sortStudents}
        filterStudents={filterStudents}
      />
      {showStatistics && <StatisticsBlock students={students} />}
      <button onClick={() => setShowStatistics(!showStatistics)}>
        {showStatistics ? 'Hide Statistics' : 'Show Statistics'}
      </button>
      <button onClick={generateData}>Generate Random Data</button>
      {/* <Footer /> */}
    </div>
  )
}

export default App
