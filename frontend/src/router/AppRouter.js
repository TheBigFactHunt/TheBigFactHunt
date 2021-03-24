import React, { useState } from "react";
import Header from "../components/Header";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import PartThree from "../components/PartThree";
import Login from "../components/Login";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sidebar/sidebar";
import Social_feed from "../components/social_feed/social_feed";
import HighScore from "../components/highScore/highScore";
import Home from "../components/Home";
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
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          {/* to be moved */}
          <div className="indivdual_components">
            <Social_feed />
            <HighScore />
          </div>
          <div className="footerContainer">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
