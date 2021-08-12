import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.less';
import Page404 from './404';
import Home from './Home';

const App: FC = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" component={Home}></Route>
                <Route component={Page404} />
            </Switch>
        </Router>
    </div>
);

export default App;
