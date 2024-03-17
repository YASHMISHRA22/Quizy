import "./App.scss";
import Landing from "./components/Landing";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./components/quizview/QuizPage";
import UserResult from "./components/UserResult";
import ScoreBoard from "./components/ScoreBoard";
import AdminPanel from "./components/AdminPanel";


function App() {
  return (
    <div className="App">
      {/* Other routes */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/UserResult" element={<UserResult />} />
          <Route path="/lboard" element={<ScoreBoard />} />
          <Route path="/qh-admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


