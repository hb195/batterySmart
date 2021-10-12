const AlertDays = ({ days }) => {
  let daysString = "";
  days.map((dayObj) => {
    return (daysString += dayObj.day + ",");
  });
  return <div>{daysString}</div>;
};

export default AlertDays;
