import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Home from "./Home";
import Coffee from "./Coffee";

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coffee" element={<Coffee />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Router>
      </main>

      <footer>
        © 2018 - {new Date().getFullYear()} prototype holdings. made with ♡ in
        sg.
      </footer>
    </div>
  );
}

export { App };
