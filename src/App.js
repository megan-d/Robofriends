import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

//create App componenent that will be the overall app and will contain the SearchBox and CardList components



class App extends Component {
    //add state
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
            
        );
    }
    
}

export default App;