import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Timer from "./components/Timer";
import Pagination from "./components/Pagination"
import CenterDiv from "./components/CenterDiv";
import Progress from "./components/Progress";
import OtpLogin from "./components/OtpLogin";

export default function App() {
  return (
    <Router>
      <div >
        <nav >
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li style={{ margin: 20 }}>
              <Link to="/">Timer</Link>
            </li>
            <li style={{ margin: 20 }}>
              <Link to="/center">Div</Link>
            </li>
            <li style={{ margin: 20 }}>
              <Link to="/progress">Progress</Link>
            </li>
            <li style={{ margin: 20 }}>
              <Link to="/otp">OtpLogin</Link>
            </li>
            <li style={{ margin: 20 }}>
              <Link to="/pagination">Pagination</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Timer />} />
          <Route exact path="/pagination" element={<Pagination />} />
          <Route exact path="/center" element={<CenterDiv />} />
          <Route exact path="/progress" element={<Progress />} />
          <Route exact path="/otp" element={<OtpLogin />} />
        </Routes>
      </div>
    </Router>
  );
}