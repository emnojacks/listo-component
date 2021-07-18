import React, { Component } from 'react';

class Counter extends Component {
    //state cannot be passed to any other component
    //state is local and private to that component
    //props can be passed to other components
    //props is read only
    
    // state = {
    //     value: this.props.counter.value,
    //     ingredientsArr: ['ingredient1', 'ingredient2', 'ingredient3']
    // };
    
    // constructor() {
    //     //you don't have to pass all the attributes into super - just call it and props are passed
    //     super();
    //     //this is how to bind the "this" state to the eventhandler but it's a bit messy & may break
    //     this.handleAddIngredient = this.handleAddIngredient.bind(this);
    // }
    // we use an arrow function below instead of adding a custom constructor and binding every event handler to "this" object
    //we never modify state directly in react like we do in vanilla js
    
    // handleAddIngredient = (ingredient) => {
    //     console.log(`${ingredient} added`);
    //     //this brings the DOM in sync with the vDOM
    //     //angular auto detects changes and updates view but react we have to tell it to check
    //     this.setState({ value: this.state.value + 1 });
    // }
    
    //
    
    // styles = {
    //     fontSize: 15,
    //     fontWeight: 'bold'
    // };
    
    //METHODS 
    getBadgeColors() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
    
    renderIngredients()
    {
        if (this.state.ingredientsArr.length === 0) return <p>Add an ingredient to your grocery list!</p>
    
        return <ul>
                    {/* could be ingredient.id if we're pulling from food database to get the object */}
                    {this.state.ingredientsArr.map(ingredient => <li key={ingredient}>{ingredient}</li>)}    
                </ul>
    }
    
    componentWillUnmount() {
        console.log("counter component unmounts");
    }
    
    //RENDER
    
    render() {
        console.log("Counter rendered")
        return (
            <div>
                {/* will return a paragraph or a list of ingredients */}
                {/* this is an if statement that's truthy a string that has at least one character is truthy, and empty string is falsy */}
                {/* <img src={this.state.imageUrl} alt=""/> */}
                
                {/* {this.state.ingredientsArr.length === 0 && "Add an ingredient to your grocery list!"}
                {this.renderIngredients()} */}
            
                {this.props.children}   
                <span
                    style={this.styles}
                    className={this.getBadgeColors()}>
                    {this.formatValue()}
                </span>
                
                {/* ADD INGREDIENT*/}
                <button
                    onClick={ () => this.props.onAddIngredient(this.props.counter)}
                    className='btn btn-secondary btn-sm'>
                    Add
                </button>
                
                {/* DELETE INGREDIENT*/}
                <button
                    //raising a delete event
                    //onDelete is name of prop from parent Counters
                    onClick={ () => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
           </div>
        );
    }
    
}

export default Counter;