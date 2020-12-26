import React from 'react'
import Login from './views/Login';
import Signup from './views/Signup';
import Main from './views/Main';
import {Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route exact path ="/" component={Signup}/>
            <Route path ="/signup" component={Signup}/>
            <Route path = "/login" component={Login}/>
            <Route path = "/main/:id" component={Main}/>
        </Switch>
    )
}

export default App
