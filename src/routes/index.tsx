import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar } from "../components";
import { Details, Home } from "../pages";

const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer autoClose={false} />
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
