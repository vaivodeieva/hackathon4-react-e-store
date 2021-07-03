import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './Views/Home';
import Categories from './Views/Categories';
import Cart from './Views/Cart';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />

                <Switch>

                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route path="/categories">
                        <Categories />
                    </Route>

                    <Route path="/cart">
                        <Cart />
                    </Route>

                </Switch>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
