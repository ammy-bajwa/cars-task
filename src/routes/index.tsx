import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar } from "../components";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/details" element={<h1>Details</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
