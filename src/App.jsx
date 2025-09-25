import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FrontPage from "./FrontPage";
import DoctorLogin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyPatients from "./pages/MyPatients";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/doctor/dashboard" element={<Dashboard />} />
        <Route path="/doctor/my-patients" element={<MyPatients />} />
        <Route path="/doctor/profile" element={<Profile />} />
        <Route path="/doctor/signup" element={<Signup />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
