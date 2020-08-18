import React, { Component } from 'react'


class EmployeeForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			empName: '',
			empRole: '',
			empId: '',
		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	    const requestOptions = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ name: this.state.empName, role: this.state.empRole })
	    };
	    fetch('http://localhost:8080/employees/', requestOptions)
	        .then(response => response.json())
	        .then(data => this.setState({ empId: data.id }));
	    window.location.reload(false);
	}

	render () {
		return (
			<div class="row">
		        <div class="col-sm-4 col-md-4 mx-auto">
					<div className="card border-primary my-4">
			          <div className="card-body">
			            <h5 className="card-title text-center">Create New Employee</h5>

						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<input 
									type="text" 
									name="empName"
									placeholder="Employee Name"
									value={this.state.empName}
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-group">
								<input 
									type="text" 
									name="empRole" 
									placeholder="Employee Role"
									value={this.state.empRole}
									onChange={this.handleChange}
								/>
							</div>
							<div className="text-center">
								<button type="submit" 
									className="btn btn-primary  mx-auto" 
									>Submit</button>
							</div>
						</form>
			          </div>
			        </div>
		        </div>
			</div>
		);
	}
}

export default EmployeeForm