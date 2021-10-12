import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router";

const useStyles = makeStyles({
  template: {
    textAlign: "center",
    marginTop: "25%",
  },
});
const Template = () => {
  const location = useLocation();
  const classes = useStyles();
  const componentName =
    location && location.pathname && location.pathname.split("/")[1];

  return (
    <div className={classes.template}>
      {componentName && componentName.toUpperCase()}
    </div>
  );
};

export default Template;
