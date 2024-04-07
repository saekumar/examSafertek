// components/TableRow.js

import React from 'react'

const TableRow = ({ student }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.ticketNumber}</td>
      <td>{student.ratingGrade}</td>
      <td>{student.examGrade}</td>
      <td>{student.finalGrade}</td>
      <td>{student.status}</td>
      <td>
        <button onClick={() => console.log('Details clicked')}>Details</button>
      </td>
    </tr>
  )
}

export default TableRow
