import { Button, makeStyles } from "@material-ui/core";
import { Formik } from "formik";
import { Form } from "formik";
import Field from "../AlertForms/FormComponents/Field";
import * as Yup from "yup";
import { useState } from "react";
import { signin } from "../../api/auth";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";

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

const Signin = ({ fetchUser }) => {
  const classes = useStyles();
  const history = useHistory();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const validate = Yup.object({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email cannot be empty"),
    password: Yup.string()
      .min(6, "Password must have between 6 and 32 characters")
      .max(32, "Password must have between 6 and 32 characters")
      .required("Password cannot be empty"),
  });

  const formSubmissionHandler = async (values) => {
    signin(values).then((res) => {
      if (res.err) {
        setFormError(res.err || "Error Signing In");
        return;
      }
      if (res.user) {
        setFormSuccess("Alert created successfully");
        localStorage.setItem("user", res.user._id);
        fetchUser();
        history.push("/peak-shaving");
      }
    });
  };
  return (
    <Formik
      initialValues={{
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
              <p className={classes.title}>SIGNIN</p>
              <Form>
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
                  <Alert severity="warning">
                    Wrong email password combination
                  </Alert>
                )}
                {formSuccess && (
                  <Alert severity="success">Sign in completed</Alert>
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
                <Link to="/signup" className={classes.link}>
                  Signup
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Signin;
