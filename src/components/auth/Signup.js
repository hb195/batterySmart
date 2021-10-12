import { Button, makeStyles } from "@material-ui/core";
import { Formik } from "formik";
import { Form } from "formik";
import Field from "../AlertForms/FormComponents/Field";
import * as Yup from "yup";
import { useState } from "react";
import { signup } from "../../api/auth";
import { Link, useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: "1vw",
    overflowY: "scroll",
    height: "100%",
  },
  title: {
    fontSize: "3vh",
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "white",
    width: "50vw",
    margin: "auto",
    borderRadius: 10,
    marginTop: "10vh",
    padding: "2vh",
  },
  field: {
    marginTop: "1vh",
    width: "25vw",
    height: "4vh",
    paddingLeft: "1vw",
    fontSize: "1.4vh",
    "& input::placeholder": {
      fontSize: "1.4vh",
    },
  },
  button: {
    marginTop: "3vh",
    height: "4vh",
    width: "6vw",
  },
  error: {
    color: theme.palette.secondary.main,
    marginLeft: "2vw",
    marginTop: "2vh",
    fontSize: "2vh",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

const Signup = ({ fetchData }) => {
  const classes = useStyles();
  const history = useHistory();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Name must be 15 characters or less")
      .required("Name cannot be empty"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email cannot be empty"),
    password: Yup.string()
      .min(6, "Password must have between 6 and 32 characters")
      .max(32, "Password must have between 6 and 32 characters")
      .required("Password cannot be empty"),
  });

  const formSubmissionHandler = async (values) => {
    signup(values).then((res) => {
      if (res.err) {
        setFormError((res.err && res.err._message) || "Error creating alert");
        return;
      }
      if (res.data) {
        setFormSuccess("Alert created successfully");
        history.push("/");
      }
    });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        return formSubmissionHandler(values);
      }}
    >
      {(formik) => {
        return (
          <div className={classes.container}>
            <div className={classes.form}>
              <p className={classes.title}>SIGNUP</p>
              <Form>
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={classes.field}
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
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={classes.field}
                  errorClass={classes.error}
                />
                {formError && (
                  <Alert severity="warning">Error signing up</Alert>
                )}
                {formSuccess && (
                  <Alert severity="success">Sign up completed</Alert>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Submit
                </Button>
              </Form>
              <div>
                New User? Please{"   "}
                <Link to="/signin" className={classes.link}>
                  Signin
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Signup;
