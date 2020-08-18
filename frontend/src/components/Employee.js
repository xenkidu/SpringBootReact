import React from "react";

export default class Archives extends React.Component {
	// /employees/:id
	const API = 'http://localhost:8080/employees/';

	constructor(props) {
		super(props);

		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		const { params} = this.props;
		const { employee } = params;
		fetch(API + employee)
			.then(response => response.json())
			.then(data => this.setState({ data: data}))
	}
	render() {
	
		return (
			<h1>Employee ({this.state.data})</h1>
		);
	}
}