import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.less';
import Page404 from './404';
import Home from './Home';
import Editor from './Editor';
import Login from './Login';

const App: FC = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/editor" component={Editor}></Route>
                <Route component={Page404} />
            </Switch>
        </Router>
    </div>
);

export default App;
