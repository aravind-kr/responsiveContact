import React from 'react';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from './components/Nav';
import Contact from './components/Contact';

function App() {
	return (
		<div className="App">
			<Nav/>
      <Contact />
		</div>
	);
}

export default App;
