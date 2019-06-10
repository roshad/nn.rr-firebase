import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore,applyMiddleware, compose} from 'redux'
import reducer from './reducer/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import firebase from './configFb.js'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase)        
    )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const createProject = (project) => (dispatch, { getFirestore, getFirebase }) => {
    const fireStore = getFirestore()
    fireStore.collection('project').add({ mother:'die' }).then(()=>console.log('good'))
    
}

store.dispatch(createProject())

