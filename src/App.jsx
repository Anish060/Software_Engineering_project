import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitRequest from "./pages/SubmitRequest";
import AdminPanel from "./pages/AdminPanel";
import Mai from "./pages/mai"
import Ch from "./pages/case_history"
import LogL from "./pages/LoginL"
import DashboardL from "./pages/lawyerdash";
import LogJ from "./pages/LoginJ";
import DashJ from "./pages/judgedash"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mai/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit-request" element={<SubmitRequest />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/ch" element={<Ch/>}/>
        <Route path="/loginl" element={<LogL/>}/>
        <Route path="/dashboardl" element={<DashboardL/>}/>
        <Route path="/loginj" element={<LogJ/>}/>
        <Route path="/dashboardj" element={<DashJ/>}/>
      </Routes>
    </Router>
  );
}

export default App;