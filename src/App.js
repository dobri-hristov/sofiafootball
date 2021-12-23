import { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import BookNow from "./pages/BookNow";
import Home from "./pages/Home";
import ContactsPage from "./pages/ContactsPage";
import LocationsPage from "./pages/LocationsPage";
import Location from "./pages/Location";
import Pricing from "./pages/Pricing";
import firebase from './fireabse/index';
import ContextWrapper from './context/ContextWrapper';

function App() {
    firebase()
    return (
        <Fragment>
            <ContextWrapper>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/терени">
                            <LocationsPage />
                        </Route>
                        <Route path="/терени/:name">
                            <Location />
                        </Route>
                        <Route path="/booknow">
                            <BookNow />
                        </Route>
                        <Route path="/цени">
                            <Pricing />
                        </Route>
                        <Route path="/контакти">
                            <ContactsPage />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </ContextWrapper>
        </Fragment>
    );
}

export default App;
