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
    padding: theme.spacing(2),
    paddingLeft: 0,
  },
  titleLg: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  titleSm: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  item: {
    display: "flex",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  text: {
    marginLeft: theme.spacing(1),
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
    marginTop: theme.spacing(2),
  },
  profileInfo: {
    marginLeft: theme.spacing(2),
    fontWeight: 200,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mainItems: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 10,
  },

  otherItems: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 10,
  },
  logout: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 10,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
const Sidebar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.titleLg}>
        <Typography variant="h6">Grid Manager 2.0</Typography>
      </div>
      <div className={classes.titleSm}>
        <Typography variant="h5">GM 2.0</Typography>
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
      <div className={classes.item}>
        <DashboardIcon className={classes.icon} />
        <Typography className={classes.text}>
          <Link to="/dashboard" className={classes.link}>
            Dashboard
          </Link>
        </Typography>
      </div>

      <div className={classes.mainItems}>
        <div className={classes.item}>
          <KeyIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/e3apps" className={classes.link}>
              E3 Apps
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <PeakAlertIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/peak-shaving" className={classes.link}>
              Peak Shaving & Alert
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <VentilationIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/ventilation" className={classes.link}>
              Ventilation
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <FanIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/cooling" className={classes.link}>
              Cooling
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <HeatPumpIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/heat-pump" className={classes.link}>
              Heat Pump
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <OutOfHoursIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/out-of-hours" className={classes.link}>
              Out Of Hours
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <EVCharginStationIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/ev-charging" className={classes.link}>
              Ev Charging
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <LoadShiftingIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/load-shifting" className={classes.link}>
              Load Shifting
            </Link>
          </Typography>
        </div>
      </div>

      <div className={classes.otherItems}>
        <div className={classes.item}>
          <DemandIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/demand-response" className={classes.link}>
              Demand Response
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <InsightsIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/insights" className={classes.link}>
              Insights
            </Link>
          </Typography>
        </div>
        <div className={classes.item}>
          <VersionIcon className={classes.icon} />
          <Typography className={classes.text}>
            <Link to="/version-history" className={classes.link}>
              Version History
            </Link>
          </Typography>
        </div>
      </div>

      <div className={classes.logout}>
        <div className={classes.item}>
          <LogoutIcon className={classes.icon} />
          <Typography className={classes.text}>Logout</Typography>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
