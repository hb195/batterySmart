import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ProfilePicture from "../../assets/Images/profile.jpg";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import KeyIcon from "@material-ui/icons/VpnKeyOutlined";
import PeakAlertIcon from "@material-ui/icons/SpeakerPhoneOutlined";
import VentilationIcon from "@material-ui/icons/AcUnitOutlined";
import FanIcon from "@material-ui/icons/AllOutOutlined";
import HeatPumpIcon from "@material-ui/icons/FireplaceOutlined";
import OutOfHoursIcon from "@material-ui/icons/AccessTimeOutlined";
import EVCharginStationIcon from "@material-ui/icons/EvStationOutlined";
import LoadShiftingIcon from "@material-ui/icons/OfflineBoltOutlined";
import DemandIcon from "@material-ui/icons/ImportExportOutlined";
import InsightsIcon from "@material-ui/icons/PollOutlined";
import VersionIcon from "@material-ui/icons/HistoryOutlined";
import LogoutIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "1vh",
    paddingLeft: 0,
    paddingBottom: 0,
  },
  titleLg: {
    marginTop: "3vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  titleSm: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  dashboard: {
    display: "flex",
    marginTop: "0.5vh",
    marginLeft: "0.5vh",
  },
  item: {
    display: "flex",
    marginTop: "1vh",
    marginLeft: "0.5vh",
    paddingBottom: 0,
  },
  text: {
    marginLeft: "0.5vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hr: {
    color: "white",
    width: "100%",
  },
  profile: {
    display: "flex",
    marginTop: "1vh",
  },
  profileInfo: {
    marginLeft: "2vh",
    fontWeight: 200,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mainItems: {
    marginTop: "1vh",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    borderRadius: 20,
  },

  otherItems: {
    marginTop: "1vh",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    borderRadius: 10,
  },
  logout: {
    marginTop: "1vh",
    paddingTop: "1vh",
    borderRadius: 10,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
  },
}));
const Sidebar = ({ fetchUser }) => {
  const classes = useStyles();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    fetchUser();
  };
  return (
    <Container className={classes.root}>
      <div className={classes.titleLg}>
        <Typography variant="h6">Grid Manager 2.0</Typography>
      </div>
      <div className={classes.titleSm}>
        <Typography variant="subtitle1">GM2</Typography>
      </div>
      <hr className={classes.hr} />
      <div className={classes.profile}>
        <Avatar
          src={ProfilePicture}
          alt="Jason"
          className={classes.profilePicture}
        />
        <div className={classes.profileInfo}>
          <Typography variant="subtitle1">Hey, Jason</Typography>
          <Typography variant="subtitle2">User Id: ABC-24</Typography>
        </div>
      </div>
      <br />
      <br />
      <div className={classes.dashboard}>
        <Link to="/dashboard" className={classes.link}>
          <DashboardIcon className={classes.icon} />
          <Typography className={classes.text}>Dashboard</Typography>
        </Link>
      </div>

      <div className={classes.mainItems}>
        <div className={classes.item}>
          <Link to="/e3apps" className={classes.link}>
            <KeyIcon className={classes.icon} />
            <Typography className={classes.text}>E3 Apps</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/peak-shaving" className={classes.link}>
            <PeakAlertIcon className={classes.icon} />
            <Typography className={classes.text}>
              Peak Shaving & Alert
            </Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/ventilation" className={classes.link}>
            <VentilationIcon className={classes.icon} />
            <Typography className={classes.text}>Ventilation</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/cooling" className={classes.link}>
            <FanIcon className={classes.icon} />
            <Typography className={classes.text}>Cooling</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/heat-pump" className={classes.link}>
            <HeatPumpIcon className={classes.icon} />
            <Typography className={classes.text}>Heat Pump</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/out-of-hours" className={classes.link}>
            <OutOfHoursIcon className={classes.icon} />
            <Typography className={classes.text}>Out Of Hours</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/ev-charging" className={classes.link}>
            <EVCharginStationIcon className={classes.icon} />
            <Typography className={classes.text}>Ev Charging</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/load-shifting" className={classes.link}>
            <LoadShiftingIcon className={classes.icon} />
            <Typography className={classes.text}>Load Shifting</Typography>
          </Link>
        </div>
      </div>

      <div className={classes.otherItems}>
        <div className={classes.item}>
          <Link to="/demand-response" className={classes.link}>
            <DemandIcon className={classes.icon} />
            <Typography className={classes.text}>Demand Response</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/insights" className={classes.link}>
            <InsightsIcon className={classes.icon} />
            <Typography className={classes.text}>Insights</Typography>
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/version-history" className={classes.link}>
            <VersionIcon className={classes.icon} />
            <Typography className={classes.text}>Version History</Typography>
          </Link>
        </div>
      </div>

      <div className={classes.logout}>
        <div className={classes.item} onClick={logoutHandler}>
          <LogoutIcon className={classes.icon} />
          <Typography className={classes.text}>Logout</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
