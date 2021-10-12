import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/core";
import { deleteAlert } from "../../api/alert";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
  actionIcons: {
    fontSize: "3vh",
    color: "gray",
  },
}));
const TableActions = ({ _id, fetchData }) => {
  const classes = useStyles();
  const deleteAlertHandler = () => {
    if (!_id) {
      return;
    }
    deleteAlert(_id).then((res) => {
      if (res.data) {
        fetchData();
      }
    });
  };

  return (
    <div className={classes.actions}>
      <EditIcon className={classes.actionIcons} />
      <DeleteIcon
        className={classes.actionIcons}
        onClick={deleteAlertHandler}
      />
    </div>
  );
};

export default TableActions;
