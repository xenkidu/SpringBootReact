import React from 'react';
import Employees from './components/Employees';

class App extends React.Component {
  state = {
      employees: [],
      isLoading: true,
    };

  async componentDidMount() {
    const API = "http://localhost:8080/employees";

    const response = await fetch(API);
    const data = await response.json();
    this.setState({employees: data._embedded.employeeList, loading: false })
  }

  render() {
    return (
      <div class="container">
        {this.state.loading || !this.state.employees ? (
          <div>loading...</div>
          ) : (
            <Employees employees={ this.state.employees } />
          )
        }
      </div>
    );
  }
}

export default App;
