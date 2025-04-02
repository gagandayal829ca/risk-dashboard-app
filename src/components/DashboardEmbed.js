import React from "react";

const DashboardEmbed = () => {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>📊 Embedded Tableau Dashboard</h2>
      <iframe
        src="https://public.tableau.com/views/RiskReportingDashboardLiveView/RiskReportingDashboardLiveView?:embed=y&:display_count=yes&:showVizHome=no"
        width="1500"
        height="1200"
        style={{ border: "none" }}
        title="Risk Dashboard"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DashboardEmbed;
