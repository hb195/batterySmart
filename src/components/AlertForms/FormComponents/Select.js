import { MenuItem, Select } from "@material-ui/core";
import { ErrorMessage, useField } from "formik";
import { Fragment } from "react";

const SelectField = ({ label, ...props }) => {
  const [fields] = useField(props);
  return (
    <Fragment>
      <Select variant="outlined" {...fields} {...props}>
        <MenuItem value="DK1">DK1</MenuItem>
        <MenuItem value="DK2">DK2</MenuItem>
        <MenuItem value="DK3">DK3</MenuItem>
      </Select>
      <div className={props && props.errorClass}>
        <ErrorMessage name={fields.name} />
      </div>
    </Fragment>
  );
};

export default SelectField;
