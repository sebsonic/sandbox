import * as React from 'react';
import { Component } from 'react';
import NavBar from './components/Nav';

interface IAppState { 
  isOpen: boolean; 
};

// Maybe a Memex at somepoint
class App extends Component<{}, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }))
    //   .catch(function() {
    //     // alert('ERROR!!!')
    //   });
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
