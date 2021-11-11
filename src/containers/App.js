import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }



  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (!robots.length) ?
      (
        <div className="tc">
          <h1 className="f1">Loading...</h1>
        </div>
      )
      :
      (
        <div className="tc ">
          <h1 className="f2">HumanFriends</h1>
          <p className="info">Created by Alexandre Autran with the aid of <a className="link" href="https://zerotomastery.io/academy/" alt="Zero to Mastery Academy">ZTM</a></p>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;