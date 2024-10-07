import "./App.css";
// Modules
import Homepage from "./screens/HomePage/Homepage.jsx";
// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./screens/Signup/Signup.jsx";
import Signin from "./screens/Signin/Signin.jsx";
import Otp from "./screens/Otp/Otp.jsx";
import SetPassword from "./screens/Password/SetPassword.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verifyotp" element={<Otp />} />
          <Route path="/setpassword" element={<SetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
