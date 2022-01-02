// types
import { SxProps } from '@mui/system'
// mui components
import Box from '@mui/material/Box'

const Table = ({ tableId, tableMap }) => {
  // console.log('tableMap', tableMap)
  const { format, columnOrder, rows } = tableMap[tableId]
  const { table_block_column_header, table_block_row_header } = format
  const tableSx: SxProps = {
    mx: 1,
    my: 2,
    display: 'block',
    width: '100%',
    overflow: 'auto',
    color: 'rgb(204, 204, 204)',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    'td, th': {
      height: '36px',
      minWidth: '74px',
      padding: '6px 13px',
      border: '1px solid rgba(255, 255, 255, 0.12)',
    },
    tr: {
      borderTop: '1px solid #12151d',
      // backgroundColor: '#111b27',
    },
    '.background': {
      border: '1px solid #12151d',
      background: '#202020 !important',
    },
    // thead: {
    //   backgroundColor: '#172533',
    // },
  }

  return (
    <div className="table-wrapper">
      <Box component="table" className={tableId} sx={tableSx}>
        {table_block_row_header && <colgroup className="background" />}

        <Box
          component="thead"
          className={table_block_column_header ? 'background' : ''}
        >
          <tr>
            {columnOrder.map((key, keyIndex) => (
              <Box component="th" key={keyIndex} sx={{ fontWeight: 600 }}>
                {rows[0][key]}
              </Box>
            ))}
          </tr>
        </Box>

        <tbody>
          {rows.map((cell, cellIndex) => (
            <tr key={cellIndex}>
              {columnOrder.map(
                (key, keyIndex) =>
                  cellIndex !== 0 && (
                    <td key={keyIndex}>{cell ? cell[key] : ''}</td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </Box>
    </div>
  )
}

export default Table
