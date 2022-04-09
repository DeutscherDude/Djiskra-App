import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import Home from './Components/Home';
import MindMap from './Components/MindMap';
import ToDos from './Components/Todos';

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path= '/mindmap' component={MindMap}/>
                    <Route path= 'todos' component={ToDos}/>
                </Switch>
            </div>
        )
        return (
            <Switch>
                <App />
            </Switch>
        )
    }
}