import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dish from './pages/Dish';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/thuc-don">
                    <Dish />
                </Route>

                <Route path="/lien-he">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
