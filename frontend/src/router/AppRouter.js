import React, {useState} from 'react';
import Header from '../components/Header';
import PartOne from '../components/PartOne';
import PartTwo from '../components/PartTwo';
import PartThree from '../components/PartThree';
import Login from '../components/Login';
import Home from '../components/Home'
import Footer from '../components/footer/footer';
import Social_feed from "../components/social_feed/social_feed";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

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
                {user.first_name ? null : <Header />}
                <Switch>
                    <Route render={(props) => (<PartOne {...props} user={user} updateUser={updateUser} /> )} path='/' exact={true}/>
                    <Route render={(props) => (<PartTwo {...props} user={user} updateUser={updateUser} /> )} path='/second'/>
                    <Route render={(props) => (<PartThree {...props} user={user} updateUser={updateUser} /> )} path='/third'/>
                    <Route render={(props) => (<Login {...props} user={user} updateUser={updateUser}/> )} path='/login' />
                    <Route render={(props) => (<Home {...props} user={user} updateUser={updateUser} /> )} path="/home" />
                    <Route render={() => <Redirect to="/" />} />
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