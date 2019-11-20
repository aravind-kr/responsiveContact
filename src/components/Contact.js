import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			contacts: [],
		};
	}

	componentDidMount() {
		fetch('https://my-json-server.typicode.com/aravind-kr/responsiveContact/contacts')
			.then(response => response.json())
			.then(json => {
				console.log(json);
				this.setState({ isFetching: true, contacts: json });
			});
	}

	render() {
		const { contacts } = this.state;
		return (
			<div
				style={{
					marginTop: '20px',
				}}
			>
				<Container>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<p>{ !this.state.isFetching ? 'Fetching contacts...' : ''}</p>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Phone Number</th>
									</tr>
								</thead>
								<tbody>
									{contacts.map(contact =>
										<tr>
											<td> {contact.id} </td>
											<td> {contact.fname} </td>
											<td> {contact.lname} </td>
											<td> {contact.number} </td>
										</tr>
									)}
								</tbody>
							</Table>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
