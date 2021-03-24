import React, { useState } from "react";
import Header from "../components/Header";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import PartThree from "../components/PartThree";
import Login from "../components/Login";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sidebar/sidebar";
import Home from "../components/Home";
import Quiz from "../components/quiz/Quiz";
import EasyQuiz from "../components/quiz/EasyQuiz";
import ProQuiz from "../components/quiz/EasyQuiz";
import ExpertQuiz from "../components/quiz/EasyQuiz";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const AppRouter = () => {
  const [user, setUser] = useState({});
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const resetUser = () => {
    setUser({});
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        {user._id ? null : <Header />}
        <div className="container">
          <Switch>
            <Route
              render={(props) => (
                <PartOne {...props} user={user} updateUser={updateUser} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <PartTwo {...props} user={user} updateUser={updateUser} />
              )}
              path="/second"
            />
            <Route
              render={(props) => (
                <PartThree {...props} user={user} updateUser={updateUser} />
              )}
              path="/third"
            />
            <Route
              render={(props) => (
                <Login {...props} user={user} updateUser={updateUser} />
              )}
              path="/login"
            />
            <Route
              render={(props) => (
                <Home {...props} user={user} updateUser={updateUser} />
              )}
              path="/home"
            />
            <Route render={(props) => (
              <Quiz {...props} user={user} updateUser={updateUser} />
              )}
              path="/quiz" />

            <Route render={(props) => (
              <EasyQuiz {...props} user={user} updateUser={updateUser} />
              )}
              path="/easyquiz" />
            <Route render={(props) => (
              <ProQuiz {...props} user={user} updateUser={updateUser} />
              )}
              path="/proquiz" />
            <Route render={(props) => (
              <ExpertQuiz {...props} user={user} updateUser={updateUser} />
              )}
              path="/expertquiz" />
            <Route render={() => <Redirect to="/" />} />
            
          </Switch>
          <div className="footerContainer">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
