import React, { Fragment } from 'react';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
//import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { Provider } from 'react-redux';
import './App.css';
import WOW from 'wowjs';
import Album from './common/Album';

class App extends React.Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <Fragment >
        <Router>
          <Fragment>
            <Link to='/menu' className='menu'><i className="fas fa-chevron-circle-down"></i></Link>
            <Route exact path='/' component={Main} />
            <Switch>
              <Route path='/View/:album' component={Album} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/menu' component={Menu} />
            </Switch>
          </Fragment>
        </Router>

      </Fragment>
    );
  }
}

export default App;
