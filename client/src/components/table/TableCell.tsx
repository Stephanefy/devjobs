import React from 'react'

type Props = {
    value: string
}

const TableCell = ({value}: Props) => {
  return (
    <td>{value}</td>
  )
}

export default TableCell;