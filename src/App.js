import React from "react";

import Navbar from "./navbar";
import Dashboard from "./pages/dashboard";
import NewProject from "./pages/newProject";
import SignIn from "./pages/signIn";
import Register from "./pages/register";

import { Provider } from "react-redux";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import {
    createFirestoreInstance,
    getFirestore,
    reduxFirestore
} from "redux-firestore";

import { firebase } from "./configFb";

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute'

const createStoreWithFirebase = compose(reduxFirestore(firebase))(createStore);
const store = createStoreWithFirebase(
    reducer,
    applyMiddleware(thunk.withExtraArgument({getFirestore }))
);

const rrfConfig ={
    useFirestoreForProfile: true,
    userProfile: "profile"
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    attachAuthIsReady: true,
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
                    <PrivateRoute path="/newProject" component={NewProject} />
                    <PrivateRoute path="/Dashboard" component={Dashboard} />
                    <Route path="/in" component={SignIn} />
                    <Route path="/register" component={Register} />
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

export default App;
