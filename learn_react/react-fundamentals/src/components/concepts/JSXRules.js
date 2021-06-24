import React from 'react';

const JSXRules = () => {
    return (
        <div className='main'>
        <div className='mainDiv'>
            <h1 className='section-title'>
                JSX
            </h1>
            
            <dl>
                <dt>
                    Resembles HTML
                </dt>
                <dd>
                    It's not. It's actually closer to JS.
                </dd>
                <dt>
                    React Elements
                </dt>
                <dd>
                    These are used to construct and update the DOM, or you see on the screen.
                </dd>
                
                <dt>
                    Not required
                </dt>
                
                <dd>
                    You can write them in vanilla JS but most people JSX.
                </dd>
            
            </dl>
            </div>
            
            <NormalComponent />
             <CreateElementComponent />
        </div>
    );
};

export default JSXRules;



// inline styling: The first set (outer set) of curly braces is React letting us interpolate.  Essentially, we use them whenever we want to write JavaScript that React can interpret in context. 

const NormalComponent = () => {
    return (
        <div style={{ border: '2px solid black' }}>
            <h1>
                Normal Functional Component
            </h1>
            <p> This was made with JSX in the return.
            </p>
            <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" alt='nothing'/>
        </div>
    );
};

//JSX allows us to write our JavaScript and HTML (sort of) in the same file.  This allows us to write more organized code, as any JavaScript and HTML that need to talk to each other can do so in the same file. 

const CreateElementComponent = () => {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: {
        border: "2px solid black"
      }
    },
    /*#__PURE__*/ React.createElement(
      "h1",
      null,
      "Normal Functional Component"
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      null,
      " This was made with React CreateElement in the return."
    ),
    /*#__PURE__*/ React.createElement("img", {
      src: "https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png",
      alt: "nothing"
    })
  );
};