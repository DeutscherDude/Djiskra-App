import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './Components/Home';
import MindMap from './Components/MindMap';
import ToDos from './Components/Todos';

class App extends Component {
    render() {
        const App = () => (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />}/>
                        <Route path= '/mindmap' element={<MindMap />}/>
                        <Route path= '/todos' element={<ToDos />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
        return (
            <div>
                <App />
            </div>
        )
    }
}

export default App;
