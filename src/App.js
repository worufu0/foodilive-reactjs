import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Menu from './pages/menu';
import Contact from './pages/contact';

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/thuc-don">
                    <Menu />
                </Route>
                <Route path="/lien-he">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
