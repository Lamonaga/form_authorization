import "./App.css";
import Join from "./page/Join";
import Login from "./page/Login";
import { Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StartPage from "./page/StartPage";

function App() {
  const data = useSelector((state) => state.regUser);

  return (
    <div className="App">
      {data.statusReg ? (
        <StartPage />
      ) : (
        <>
          {" "}
          <div className="link_auth">
            <Link to="/join">
              <button className="btn_auth">Join</button>
            </Link>
            <Link to="/login">
              <button className="btn_auth">Login</button>
            </Link>
          </div>
          <Routes>
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <a className="git__icon" href="https://gitlab.com/Lamonaga/form_authorization">ХХХХХХХХХХХУУУУУУУУУУЙЙЙЙЙЙЙ<i className="fa-brands fa-gitlab"></i></a>
        </>
      )}
    </div>
  );
}

export default App;
