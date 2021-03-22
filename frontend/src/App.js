import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/login/Login.js";
import Footer from "./components/footer/footer";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Login />
      <Navbar />
        <div className="App">
          <header className="App-header">

          </header>

          <footer className="footerContainer">
            <Footer />
          </footer>
        </div>
    </Router>
  );
}

export default App;
