import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";
function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 8000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <Router>
        {loaded ? (
          <Loader />
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
