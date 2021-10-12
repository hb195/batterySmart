import { makeStyles } from "@material-ui/core";
import AlertTableContainer from "../AlertTable/AlertTableContainer";
import AlertForm from "./AlertForm";
import { useEffect, useState } from "react";
import { getAlerts } from "../../api/alert";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },
  alertForm: {
    backgroundColor: "white",
    width: "38%",
    borderRadius: 15,
    maxHeight: "51vh",
  },
  alertList: {
    width: "60%",
    maxHeight: "51vh",
  },
}));
const FormContainer = () => {
  const classes = useStyles();
  const [alerts, setAlerts] = useState();
  const [reloadData, setReloadData] = useState(false);
  useEffect(() => {
    getAlerts()
      .then((res) => {
        if (res && res.data) {
          setAlerts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadData]);

  const reloadDataHandler = () => {
    setReloadData((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className={classes.formContainer}>
      <div className={classes.alertForm}>
        <AlertForm fetchData={reloadDataHandler} />
      </div>
      <div className={classes.alertList}>
        <AlertTableContainer fetchData={reloadDataHandler} alerts={alerts} />
      </div>
    </div>
  );
};

export default FormContainer;
