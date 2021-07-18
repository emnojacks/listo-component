import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component { 
    render() {
        console.log("counters rendered");
        //use object destructuring at beginning sort of like an import statement so you dont hae to reference this.props.attribute/method throughout your code and it will be cleaner
        const { onReset, counters, onDelete, onAddIngredient } = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary  btn-sm m-2"
                    onClick={onReset}
                >
                Reset 
                </button>
                
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        //onDelete is name of event 
                        //handleDelete is the function
                        onDelete={onDelete}
                        onAddIngredient={onAddIngredient}
                        counter={counter}>
                        <h4>Ingredient {counter.id}</h4>
                        </Counter>
                    ))}
        </div>
        );
    }
}
 
export default Counters;