import React from 'react';
import TableCell from './TableCell'

type Props = {
    columns: any
    row: any
}

export default function TableRow({ columns, row }: Props) {
    return (
        <tr>
            {columns.map((column: { accessor: string | number }, index: any) => (
                <TableCell key={index} value={row[column.accessor]} />
            ))}
        </tr>
    )
}
