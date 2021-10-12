import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AlertTable from "./AlertTable";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    padding: theme.spacing(1),
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  alertButton: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "5vw",
    height: "5vh",
  },
  triggeredAlertButton: {
    marginLeft: "1vw",
    backgroundColor: "white",
    color: "grey",
    width: "12vw",
    height: "5vh",
  },
  text: {
    fontSize: "1.4vh",
    fontWeight: "bolder",
  },
}));

const AlertTableContainer = ({ fetchData, alerts }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.btnContainer}>
        <Button variant="contained" className={classes.alertButton}>
          <p className={classes.text}>Alerts</p>
        </Button>
        <Button variant="contained" className={classes.triggeredAlertButton}>
          <p className={classes.text}>Triggered Alerts</p>
        </Button>
      </div>
      <div>
        <AlertTable alerts={alerts} fetchData={fetchData} />
      </div>
    </Container>
  );
};
export default AlertTableContainer;
