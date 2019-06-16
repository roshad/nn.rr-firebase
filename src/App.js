import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import NewProject from './newProject'

import Navbar from './component/navbar'
import Dashboard from './dashboard';

import { Provider } from 'react-redux'

import createReduxStore from './createReduxStore'

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import firebase from './configFb'


const store = createReduxStore()

const rrfProps = {
  firebase,
  config: { userProfile: 'users' },
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}

function App() {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<Router>
					<div className="App">
						<Navbar />
					</div>
					<Route path='/newProject' component={NewProject} />
					<Route path='/Dashboard' component={Dashboard} />
				</Router>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
