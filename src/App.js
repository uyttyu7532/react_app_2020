import React from "react";
import {HashRouter, Route} from "react-router-dom";


function App(){
    return (<HashRouter>
        <Route path="/">
            <h1>Home</h1>
        </Route>
        <Route path="/home/introduction">
            <h1>Introduction</h1>
        </Route>
        <Route path="/about">
            <h1>About</h1>
        </Route> 
    </HashRouter>
    );
}

export default App;