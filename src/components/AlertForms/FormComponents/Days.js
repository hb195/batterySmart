import { ErrorMessage, useField } from "formik";
import { Multiselect } from "multiselect-react-dropdown";

const Days = ({ label, ...props }) => {
  const [fields, , helpers] = useField(props);
  const weekdays = [
    { day: "Mon", id: 0 },
    { day: "Tue", id: 1 },
    { day: "Wed", id: 2 },
    { day: "Thu", id: 3 },
    { day: "Fri", id: 4 },
    { day: "Sat", id: 5 },
    { day: "Sun", id: 6 },
  ];

  const selectHandler = (selectedList) => {
    helpers.setValue(selectedList);
  };

  const removeHandler = (selectedList) => {
    helpers.setValue(selectedList);
  };
  return (
    <div className={props && props.className}>
      <Multiselect
        options={weekdays}
        displayValue="day"
        onSelect={selectHandler}
        onRemove={removeHandler}
        {...fields}
        {...props}
      />
      <div className={props && props.errorClass}>
        <ErrorMessage name={fields.name} />
      </div>
    </div>
  );
};

export default Days;
