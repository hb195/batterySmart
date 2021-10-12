import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router";
import PeakShaving from "../components/PeakShaving/PeakShaving";
import Sidebar from "../components/Sidebar/Sidebar";
import Template from "../components/Template/Template";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100vw",
    maxHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
  },
  feed: {
    color: "white",
    width: "84vw",
    marginLeft: "3vw",
    backgroundColor: "lightgrey",
    borderRadius: 15,
    margin: "1vw 1vh",
  },
  sidebar: {
    color: "white",
    width: "12vw",
  },
}));

const PrivateRoutes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.feed}>
        <Switch>
          <Route path="/peak-shaving" exact>
            <PeakShaving />
          </Route>
          <Route path="*" exact>
            <Template />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default PrivateRoutes;
