import { Box, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useField, ErrorMessage } from "formik";
import { Fragment } from "react";

const RadioButton = ({ label, ...props }) => {
  const [fields] = useField(props);
  return (
    <Fragment>
      <RadioGroup row {...fields} {...props}>
        <FormControlLabel
          value="More than"
          control={<Radio />}
          label={
            <Box fontSize="1.4vh" color="gray">
              More than
            </Box>
          }
          className={props.className} //not responsive
        />
        <FormControlLabel
          value="Less than"
          control={<Radio />}
          label={
            <Box fontSize="1.4vh" color="gray">
              Less than
            </Box>
          }
        />
      </RadioGroup>
      <div className={props && props.errorClass}>
        <ErrorMessage name={fields.name} />
      </div>
    </Fragment>
  );
};

export default RadioButton;
