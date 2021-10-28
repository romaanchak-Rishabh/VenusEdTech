import logo from './logo.svg';
import './App.css';

import { Route, Switch, Redirect, Link } from 'react-router-dom';

import Header from './components/header/Header';
import OpeningPage from './components/openingPage/OpeningPage';
import AboutUs from './components/aboutUs/AboutUs';
import Courses from './components/courses/Courses';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path='/VenusEdTech/' component={OpeningPage} />
          <Route exact path='/VenusEdTech/about' component={AboutUs} />
          <Route exact path='/VenusEdTech/courses' component={Courses} />
          <Redirect to='/VenusEdTech/' />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
