import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100vw",
    maxHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
    textAlign: "center",
  },
}));

const PublicRoutes = ({ fetchUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="*" exact>
          <Signin fetchUser={fetchUser} />
        </Route>
      </Switch>
    </div>
  );
};

export default PublicRoutes;
