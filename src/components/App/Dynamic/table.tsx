// style
import tableStyles from 'styles/table.module.css'

const Table = ({ tableId, tableMap }) => {
  const { format, columnOrder, rows } = tableMap[tableId]
  const { table_block_column_header, table_block_row_header } = format

  return (
    <div className="table-wrapper">
      <table className={tableId} style={{ borderCollapse: 'collapse' }}>
        {table_block_column_header && (
          <colgroup className={tableStyles.background}></colgroup>
        )}

        <thead className={table_block_row_header ? tableStyles.background : ''}>
          <tr>
            {columnOrder.map((key, keyIndex) => (
              <th key={keyIndex}>{rows[0][key]}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((cell, cellIndex) => (
            <tr key={cellIndex}>
              {columnOrder.map(
                (key, keyIndex) =>
                  cellIndex !== 0 && <td key={keyIndex}> {cell[key]} </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
