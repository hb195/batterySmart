import { Badge, makeStyles } from "@material-ui/core";
import FormContainer from "../AlertForms/FormContainer";
import NotificationIcon from "@material-ui/icons/NotificationsActiveOutlined";
import Graph from "../Graph/Graph";

const useStyles = makeStyles((theme) => ({
  feedContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "1vw",
    paddingRight: "1vw",
    color: "black",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    height: "5vh",
    marginTop: "1vh",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "1vw",
  },
  graph: {
    height: "30vh",
    marginTop: "1vh",
    width: "98%",
    marginLeft: "1%",
    borderRadius: "10px",
    backgroundColor: "white",
  },
  form: {
    height: "55vh",
    width: "100%",
    marginTop: "1vh",
    borderRadius: "10px",
  },
  notification: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "1vw",
    fontSize: "1vw",
  },
  notificationTitle: {
    marginRight: "0.5vw",
  },
  hr: {
    color: "white",
    width: "77vw",
  },
  badge: {
    marginTop: "0.2vh",
    width: "3vw",
    height: "3vh",
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <div container className={classes.feedContainer}>
      <div item className={classes.title}>
        <div>Peak Shaving & Alert</div>
        <div className={classes.notification}>
          <div className={classes.notificationTitle}>Carlsberg Group</div>
          <div className={classes.badge}>
            <Badge badgeContent={2} color="secondary">
              <NotificationIcon className={classes.badge} />
            </Badge>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div item className={classes.graph}>
        <Graph />
      </div>
      <div item className={classes.form}>
        <FormContainer />
      </div>
    </div>
  );
};

export default Feed;
