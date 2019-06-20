import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";



import Navbar from "./navbar";
import Dashboard from "./pages/dashboard";
import NewProject from "./pages/newProject";
import SignIn from './pages/signIn'

import { Provider } from "react-redux";

import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";

import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";

import { firebase } from "./configFb";

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const createStoreWithFirebase = compose(reduxFirestore(firebase))(createStore);
const store = createStoreWithFirebase(
  reducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
  firebase,
  config: { userProfile: "users" },
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <Navbar />
          </div>
          <Route path="/newProject" component={NewProject} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/in" component={SignIn} />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
