import ReactApexChart from "react-apexcharts";
import React, { Fragment, useEffect, useState } from "react";
import { getData } from "../../api/graphs";
const ApexChart = () => {
  const [graphData, setGraphData] = useState();

  useEffect(() => {
    getData().then((res) => {
      if (res.data) {
        setGraphData(res.data);
      }
    });
  }, []);

  let content = "";
  if (graphData && graphData.options && graphData.series) {
    content = (
      <ReactApexChart
        options={graphData && graphData.options}
        series={graphData && graphData.series}
        type="area"
        height="100%"
      />
    );
  }
  return <Fragment>{content}</Fragment>;
};

export default ApexChart;
