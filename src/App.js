import { Route, Routes } from "react-router-dom";
import "./App.css";
import Start from "./Pages/Start";
import Quiz from "./Pages/Quiz";
import ScoreReport from "./Pages/ScoreReport";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Start />} />
        <Route path="/quiz" exact element={<Quiz />} />
        <Route path="/score" exact element={<ScoreReport />} />
      </Routes>
    </div>
  );
}

export default App;
