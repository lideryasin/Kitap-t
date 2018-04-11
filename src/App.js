import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/database';
import KitapEkle from './KitapEkle';
import KitapListele from './KitapListele';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';

import {HashRouter} from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Navbar />
              <Route path="/KitapEkle" component={KitapEkle} />
              <Route path="/KitapListele" component={KitapListele} />
              <Route exact path="/" component={KitapEkle} />
          </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
