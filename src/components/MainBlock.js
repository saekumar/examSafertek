// components/MainBlock.js

import React from 'react'
import TableRow from './TableRow'

const MainBlock = ({ students, sortStudents, filterStudents }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortStudents('name', 'asc')}>Name</th>
            <th onClick={() => sortStudents('ticketNumber', 'asc')}>
              Ticket Number
            </th>
            <th onClick={() => sortStudents('ratingGrade', 'asc')}>
              Rating Grade
            </th>
            <th onClick={() => sortStudents('examGrade', 'asc')}>Exam Grade</th>
            <th onClick={() => sortStudents('finalGrade', 'asc')}>
              Final Grade
            </th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <TableRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MainBlock
