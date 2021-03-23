import React, { useState } from "react";
import Header from "../components/Header";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import PartThree from "../components/PartThree";
import Login from "../components/Login";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sidebar/Sidebar";
import Social_feed from "../components/social_feed/Social_feed";
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
        <Header />
        <Home />
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
              <PartThree
                {...props}
                user={user}
                updateUser={updateUser}
                resetUser={resetUser}
              />
            )}
            path="/third"
          />
          <Route component={Login} path="/login" />
        </Switch>
        <div>
          <Social_feed />
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
