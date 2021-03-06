import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableFooter, TablePagination, Paper, IconButton , makeStyles} from '@material-ui/core'
import { MdDelete, MdModeEdit, MdFirstPage, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLastPage } from 'react-icons/md'
import PropTypes from 'prop-types'
import classes from './MyTable.module.scss'

// Customize CSS of MUI
const useStyles = makeStyles(() => ({
  customTableContainer: {
    overflowX: "initial"
  }
}))

// Customize component TablePagination
function TablePaginationActions(props) {
  
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0) // firstPage has index = 0
    console.log('first page: count = ', count)
  }

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.ceil(count / rowsPerPage) - 1)
  }

  const handleBackPageButtonClick = (event) => {
    onChangePage(event, page - 1) // current page - 1
  }

  const handleNextPageButtonClick = (event) => {
    onChangePage(event, page + 1) // current page + 1
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <MdLastPage /> : <MdFirstPage />}
      </IconButton>
      <IconButton onClick={handleBackPageButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </IconButton>
      <IconButton onClick={handleNextPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === 'rtl' ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        {theme.direction === 'rtl' ? <MdFirstPage /> : <MdLastPage />}
      </IconButton>
    </div>
  )
}

// Quy định kiểu dữ liệu cho props của TablePaginationActions
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
}

// Customize component Table
function MyTable(props) {
  // const classes = useStyles()
  const styles = useStyles();
  // Use States and Props to pass data for rows and columns from the Container/Page
  const { rows, columns } = props

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer classes={{ root: styles.customTableContainer }} component={Paper}>
      <Table className={classes.table}  stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell className={classes.tcell}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((r) => (
              <TableRow  key={r.id}>
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.schoolName}</TableCell>
                <TableCell>{r.level}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell align="center">{r.district}</TableCell>
                <TableCell>{r.address}</TableCell>
                <TableCell>{r.contact}</TableCell>
                <TableCell>{r.representor}</TableCell>
                <TableCell align="center">{r.status}</TableCell>
                <TableCell>
                  <IconButton>
                    <MdModeEdit />
                  </IconButton>
                  <IconButton>
                    <MdDelete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <i style={{ color: 'gray', fontSize: '1.3em' }}>No records found.</i>
          )}
        </TableBody>

        {rows.length > 0 && (
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  )
}

// Quy định properties của MyTable
MyTable.propTypes = {
  rows: PropTypes.array.isRequired, // .isRequired
  columns: PropTypes.array.isRequired,
}

export default MyTable
