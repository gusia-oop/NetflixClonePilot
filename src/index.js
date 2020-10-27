import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles } from "./global-styles"
import * as serviceWorker from './serviceWorker';
import { FirebaseContext } from "./context/Firebase"

import { seedDatabase } from './seed';

const firebaseConfig = {
  apiKey: "AIzaSyDvDRmDJmPIWRFFdelPdzJgVva0JmCGru8",
  authDomain: "netflix-clone-bdf12.firebaseapp.com",
  databaseURL: "https://netflix-clone-bdf12.firebaseio.com",
  projectId: "netflix-clone-bdf12",
  storageBucket: "netflix-clone-bdf12.appspot.com",
  messagingSenderId: "186320213006",
  appId: "1:186320213006:web:a309eeab3200551c5ad85f"
};

const firebase = window.firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
