import { TextField } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";
import { Fragment } from "react";

const Field = ({ label, ...props }) => {
  const [fields] = useField(props);
  return (
    <Fragment>
      <TextField
        variant="outlined"
        size="small"
        // className={props && props.className}
        InputProps={{ className: props && props.className }}
        {...fields}
        {...props}
      />
      <div className={props && props.errorClass}>
        <ErrorMessage name={fields && fields.name} />
      </div>
    </Fragment>
  );
};

export default Field;
