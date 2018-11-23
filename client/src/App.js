import React, { Component } from 'react';
import NavBar from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      isOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
      .catch(function() {
        // alert('ERROR!!!')
      });
  }

  togglePopup() {
      this.setState(({isOpen}) => ({isOpen: !isOpen}));
  }

  render() {
    return (
      <div>
        <NavBar/>
        <p>WIP</p>
      </div>
    );
  }
}

export default App;
