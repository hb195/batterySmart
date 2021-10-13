import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableActions from "./TableActions";
import { makeStyles } from "@material-ui/core";
import AlertDays from "./AlertDays";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "44vh",
    overflowY: "scroll",
  },
  cell: {
    overflowX: "clip",
    overflowY: "clip",
    border: 0,
    color: theme.palette.grey,
    padding: "1vh 1vh",
  },
  heading: {
    fontSize: "1.4vh",
    fontWeight: "bold",
  },
  text: {
    fontSize: "1.4vh",
    color: theme.palette.grey,
  },
  table: {
    maxWidth: "100%",
    height: "75%",
  },
}));

const AlertTable = ({ alerts, fetchData }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(6);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell} width="15%">
              <span className={classes.heading}>Name</span>
            </TableCell>
            <TableCell className={classes.cell} width="15%">
              <span className={classes.heading}>Price Signal</span>
            </TableCell>
            <TableCell className={classes.cell} width="15%">
              <span className={classes.heading}>Criteria</span>
            </TableCell>
            <TableCell className={classes.cell} width="15%">
              <span className={classes.heading}>Value</span>
            </TableCell>
            <TableCell className={classes.cell} width="15%">
              <span className={classes.heading}>Email</span>
            </TableCell>
            <TableCell className={classes.cell} width="15%">
              <span className={classes.heading}>Active Days</span>
            </TableCell>
            <TableCell className={classes.cell} width="15%">
              <span className={classes.heading}>Actions</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.table}>
          {alerts &&
            alerts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((alert) => {
                return (
                  <TableRow key={alert && alert._id}>
                    <TableCell className={classes.cell} width="10%">
                      <div className={classes.text}>
                        {alert && alert.name && alert.name.trim()}
                      </div>
                    </TableCell>
                    <TableCell className={classes.cell}>
                      <div className={classes.text}>
                        {alert && alert.priceSignal}
                      </div>
                    </TableCell>
                    <TableCell className={classes.cell}>
                      <div className={classes.text}>
                        {alert && alert.criteria}
                      </div>
                    </TableCell>
                    <TableCell className={classes.cell}>
                      <div className={classes.text}>{alert && alert.value}</div>
                    </TableCell>
                    <TableCell className={classes.cell}>
                      <div className={classes.text}>{alert && alert.email}</div>
                    </TableCell>
                    <TableCell className={classes.cell}>
                      <div className={classes.text}>
                        {alert && alert.days && <AlertDays days={alert.days} />}
                      </div>
                    </TableCell>
                    <TableCell className={classes.cell}>
                      <TableActions
                        _id={alert && alert._id}
                        fetchData={fetchData}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
      <div style={{ width: "100%", height: "2vh" }}>
        <TablePagination
          component="div"
          count={alerts && alerts.length}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
          page={page}
          onChangePage={handlePageChange}
          variant="outlined"
        />
      </div>
    </TableContainer>
  );
};

export default AlertTable;
