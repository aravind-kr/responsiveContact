import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Nav extends Component {
	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark">
					<div className="container">
						<Navbar.Brand href="#home">Contacts</Navbar.Brand>
					</div>
				</Navbar>
			</div>
		);
	}
}
