import { useState } from 'react';

const State = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <p>
                    
                </p>
                <ul>
                    <dt>UseState is a unique to Functional Components</dt>
                    <dd>Class components have a separate means of using and changing state</dd>
                    <dt>useState uses array destructuring</dt>
                    <dd>UseState provides a state variable and a setState function</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked into React</dd>
                    <dt>Triggers re-renders</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component</dd>
                </ul>
            </div>
            <StateExample />
        </div>
    );
};

export default State;

function StateExample() {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    
    return (
        <div>
             <input value={text} onChange={e => setText(e.target.value)}/>
            <br />
            <br />
               
             <img style={{ width: '100px', height: '100px' }} src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
               onClick={() => setLikeNum (likeNum + 1)}/>
            <span>{likeNum}</span> 
        </div>
    );
};
//a) The user inputs to the input field

//b) Our event handler initiates a state change to our 'text' variable

//c) Because we initiated a state change, our component re-fires with the new value of the text variable

//This entire process is called '2-way binding'.  Our state variable value is determined by the input field, and the input field value is determined by the state variable value.  This is a core concept in React--all (changeable) representational data needs to be controlled by the component, not just left free to change in the DOM.