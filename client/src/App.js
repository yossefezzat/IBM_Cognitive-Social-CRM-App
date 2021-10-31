import React from 'react';
import './App.css';
//Libs
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import NavBar from './components/NavBar';
import About from './components/About';
import Charts from './components/Charts';
import Tweets from './components/Tweets';

/**
 * @description Main compoenent for our app, handles routing & acts as the entry point.
 * @extends {React.Component}
 */
export default class App extends React.Component {

  /**
   * @description Responsible for rendering the component, hides & shows the dialogue based on `state.dialogShown`
   * @returns {JSX}
   */
  render() {
    return (

      <Router>
        <div className="App">
          <NavBar />
          <Route path="/about" component={About} />
          <Route path="/" exact={true} component={Charts} />
          <Route path="/tweets" component={Tweets} />

        </div>
      </Router>

    )
  }
}
