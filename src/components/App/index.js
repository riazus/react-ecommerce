import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "../../App.css";
import ErrorPage from "../ErrorPage";
import Footer from "../Footer";
import Header from "../Header";
import Landing from "../Landing";
import Login from "../Login";
import Signup from "../Signup";
import Welcome from "../Welcome";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
