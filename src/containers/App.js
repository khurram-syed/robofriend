import React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox'
//import {robots} from './robots'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import 'tachyons'

class App extends React.Component {
 
  constructor(){
    super(); 
    this.state ={
       robots : [],
       searchfield : ''
     }
   }
  
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
  }
 
   onSearchChange=(event)=>{
      this.setState({searchfield:event.target.value})
    //  console.log(event.target.value);
  }
 
  render(){
    const filterRobots = this.state.robots.filter((robot)=>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   });
   const {robots} = this.state;
    if(robots.length===0){
       return <h1>Loading..</h1>
    }else{
       return (
            <div className="App">
              <header className="tc">
                <h1> RoboFriends</h1>
                <SearchBox onsearchchange={this.onSearchChange} />     
              </header>
              <section>
                <Scroll>
                 <CardList robots={filterRobots} />
                </Scroll>
              </section>
            </div>
       );
    } 
  }
}
export default App;
