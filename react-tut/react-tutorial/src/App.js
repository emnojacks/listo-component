import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/counters';

class App extends Component {
  
      state = { 
        counters: [
            {
                id: 1,
                value: 0
            },
            {
                id: 2,
                value: 0
            },
            {
                id: 3,
                value: 0
            },
            {
                id: 4,
                value: 0
            },
            {
                id: 5,
                value: 0
            }
        ]
    };
    
  constructor() {
    super();
    console.log('app constructor called');
    //we set the state directly 
    //this can only be called once when component is called & rendered in the DOM
    //we won't have access to props unless we pass props 
  }
  
  componentDidMount() {
  //good place to make ajax calla dn get dat from server
    // this.setState({ recipes })
    console.log("app mounted")
  }
  
    handleReset = () => {
        console.log('reset clicked')
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        //setting the new array to the state of counters
        this.setState({counters})
    }
    
    handleDelete = (counterId) => {
        console.log("Delete event handler called", counterId);
        //get all counters with given id that is called via delete button
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        //reset state of counters to new coutners array 
        this.setState({ counters });
        
    }
    
    handleAddIngredient = (counter) => {
        //spread operator to clone the array into a new counters array
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter }
        counters[index].value++;
        //redefine array
        this.setState({ counters })
    }
  render() {
    console.log("app rendered");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar
          totalCounters={this.state.counters.filter(counter => counter.value > 0).length} />
        
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAddIngredient={this.handleAddIngredient}
            onDelete={this.handleDelete}
          />
        
        </main>
      </header>
    </div>
  );
}
}

export default App;
