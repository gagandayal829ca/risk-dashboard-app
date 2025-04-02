import "./App.css";
import DashboardEmbed from "./components/DashboardEmbed";
import KPI from "./components/KPI";
import { useState, useEffect } from "react";
import LiveChart from "./components/LiveChart";

function App() {
  const [kpis, setKpis] = useState({ total: 69, critical: 69, employees: 35 });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setKpis(data.kpis));
  });

  return (
    <div className="App">
      <div className="kpi-wrapper">
        <KPI title="Total Tasks" value={kpis.total} />
        <KPI title="Critical Risks" value={kpis.critical} />
        <KPI title="Employees Covered" value={kpis.employees} />
      </div>

      <div className="dashboard-flex">
        <LiveChart />
        <DashboardEmbed />
      </div>
    </div>
  );
}

export default App;
