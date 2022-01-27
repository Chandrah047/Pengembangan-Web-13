import React, {Component} from "react";
import './css/bootstrap.min.css'
import Guests from "./views/Guest/Guests";
import AddGuests from './views/AddGuest/Addguest'
import EditGuest from './views/EditGuest/EditGuest'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/'exact children={<Guests />}></Route>
                    <Route path='/add' children={<AddGuests />}></Route>
                    <Route path='/edit/:id' children={<EditGuest />}></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;