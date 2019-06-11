import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import NewProject from './page/newProject'


import Navbar from './component/navbar'

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route path="/newProject" component={NewProject}/>
			</div>
		</Router>
	);
}
 
export default App;
