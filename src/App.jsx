import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Header from "./components/Header.jsx";


function App() {
  return <Router>

    <Header />
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />


    </Routes>
   
  </Router>;
}

export default App
