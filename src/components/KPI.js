import React from "react";

const KPI = ({ title, value }) => {
  return (
    <div className="kpi">
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
};

export default KPI;
