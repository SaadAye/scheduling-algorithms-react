import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const Task = ({ name, period, executionTime }) => {
  const [lastExecution, setLastExecution] = useState(0);
  const [executions, setExecutions] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nowInSeconds = (Date.now() / 1000).toFixed(3);
      if (nowInSeconds - lastExecution >= period) {
        setLastExecution(nowInSeconds);
        onExecution(
          name,
          nowInSeconds,
          (parseFloat(nowInSeconds) + executionTime).toFixed(3)
        );
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [name, period, executionTime, lastExecution]);

  const onExecution = (name, start, end) => {
    setExecutions((executions) => [...executions, { name, start, end }]);
  };

  const chartData = [["Task", "Start Time", "End Time"]];
  executions.forEach((ex, index) => {
    chartData.push([`${ex.name} ${index + 1}`, parseFloat(ex.start), parseFloat(ex.end)]);
  });

  return (
    <div>
      <h3>{name}</h3>
      <Chart
        width={"100%"}
        height={"200px"}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          showRowNumber: true,
          timeline: { singleColor: "#8d8" },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default Task;
