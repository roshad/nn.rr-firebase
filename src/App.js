import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import NewProject from './newProject'

import Navbar from './component/navbar'
import Dashboard from './dashboard';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<Route path='/newProject' component={NewProject}/>
			<Route path='/Dashboard' component={Dashboard}/>
		</Router>
	);
}
 
export default App;
