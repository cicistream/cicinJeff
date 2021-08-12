import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.less';
import Page404 from './404';
import Home from './Home';
const ThemeContext = React.createContext('dark');

const App: FC = () => (
    <div className="App">
        <ThemeContext.Provider value="dark">
            <Router>
                <Switch>
                    <Route path="/" component={Home}></Route>
                    <Route component={Page404} />
                </Switch>
            </Router>
        </ThemeContext.Provider>
    </div>
);

export default App;
