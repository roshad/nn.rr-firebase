import React from 'react';



import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './component/navbar'

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
		</Router>
	);
}

export default App;
