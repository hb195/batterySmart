import { Button, makeStyles } from "@material-ui/core";
import { Formik } from "formik";
import { Form } from "formik";
import Days from "./FormComponents/Days";
import Field from "./FormComponents/Field";
import RadioButton from "./FormComponents/RadioButton";
import SelectField from "./FormComponents/Select";
import * as Yup from "yup";
import { createAlert } from "../../api/alert";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: "1vw",
    overflowY: "scroll",
    height: "100%",
  },
  title: {
    color: "black",
    fontSize: "1.4vh",
    fontWeight: "bold",
  },
  field: {
    marginTop: "0.4vh",
    width: "25vw",
    height: "4vh",
    paddingLeft: "1vw",
    fontSize: "1.4vh",
    "& input::placeholder": {
      fontSize: "1.4vh",
    },
  },
  select: {
    marginTop: "1vh",
    marginLeft: "1vw",
    width: "25vw",
    height: "4vh",
  },
  radio: {
    paddingLeft: "0.5vw",
    display: "flex",
    "& input::placeholder": {
      fontSize: "1vh",
    },
  },
  text: {
    paddingLeft: "1vw",
    fontSize: "1.8vh",
    fontWeight: "bold",
    marginTop: "1vh",
  },
  button: {
    marginLeft: "78%",
    marginTop: "1vh",
    height: "4vh",
    width: "4vw",
  },
  error: {
    color: theme.palette.secondary.main,
    marginLeft: "1vw",
  },
}));
const AlertForm = ({ fetchData }) => {
  const classes = useStyles();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Alert Name must be 15 characters or less")
      .required("Alert Name cannot be empty"),
    criteria: Yup.string().required("Please select criteria"),
    value: Yup.number()
      .min(0, "Value must be more than 0")
      .max(1000, "Value must be less than 1000")
      .required("Value cannot be empty"),
    days: Yup.array()
      .min(1, "Alert Days must be set to at least 1 day")
      .max(7, "Alert days cannot contain more than 7 days")
      .required("Please select alert days"),
    priceSignal: Yup.string().required("Price Signal Cannot be empty"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email cannot be empty"),
    phone: Yup.number()
      .min(6000000000, "Enter 10 digits valid phone number")
      .max(9999999999, "Enter 10 digits valid phone number")
      .required("Phone number cannot be empty"),
  });

  const formSubmissionHandler = async (values) => {
    createAlert(values).then((res) => {
      if (res.err) {
        setFormError((res.err && res.err._message) || "Error creating alert");
        return;
      }
      if (res.data) {
        setFormSuccess("Alert created successfully");
        fetchData();
      }
    });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        criteria: "",
        value: "",
        days: [],
        priceSignal: "",
        email: "",
        phone: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        return formSubmissionHandler(values);
      }}
    >
      {(formik) => {
        return (
          <div className={classes.container}>
            <p className={classes.title}>CREATE ALERT</p>
            <Form>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className={classes.field}
                errorClass={classes.error}
              />
              <RadioButton
                name="criteria"
                type="text"
                placeholder="Criteria"
                className={classes.radio}
                errorClass={classes.error}
              />
              <Field
                name="value"
                type="number"
                placeholder="Value"
                className={classes.field}
                errorClass={classes.error}
              />
              <Days
                name="days"
                type="text"
                placeholder="  Days"
                className={classes.select}
                errorClass={classes.error}
              />
              <div className={classes.text}>Criteria</div>
              <SelectField
                name="priceSignal"
                type="text"
                placeholder="Price Signal"
                className={classes.select}
                label="Price Signal"
                errorClass={classes.error}
              />
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={classes.field}
                errorClass={classes.error}
              />
              <Field
                name="phone"
                type="number"
                placeholder="Number"
                className={classes.field}
                errorClass={classes.error}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AlertForm;
