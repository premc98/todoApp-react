import {BrowserRouter as Router} from "react-router-dom"
import Home from "./pages/Home";
function App() {
  return <Router>
    <Route path="/" element={<Home/>}/>
  </Router>
}

export default App
