import React from 'react';

//empty div to capture results
//By passing props in the parentheses of our component, we can now access the props in our component, which we'll need because we're going to need to get our results information from our parent component
const NytResults = (props) => {
    return (
        <div>
            {/* .map is just like forEach*/}
            {props.nytResults.map(
                /* calling each element 'result' */
                result => {
                    return (
                        //turning each element / result into JSX
                        //unique keys are required when u use map 
                        //we set unique key to the _id of the result (taken from api returned obj)
                        <div key={result._id}>
                            <h3>
                                {/*take result's headline and print it */}
                                {result.headline.main}
                            </h3>
                            {/* use another ternary here to check if there is a more than 1 (AKA at least 2) things in the multimedia property. If there is at least 2, we want to display the image in the 2nd place [1] because that is a "large" size and not the "xl" size of [0].*/}
                            {result.multimedia.length > 1 ?
                                <img alt="article" src={`http://www.nytimtes.com/${result.multimedia[1].url}`}
                                />
                                : " "
                            };
                            
                            {/* print obj snippet and check if there are keywords */}
                            <p>
                                {result.snippet}
                                <br />
                                {result.keywords.length > 0 ? 'Keywords: ' : " "}
                            </p>
                            
                            <ul>
                                {/* print all keywords into list via a map */}
                                {result.keywords.map(keyword => <li key={keyword.value}>
                                    {keyword.value}
                                </li>)}
                            </ul>
                            <a href={result.web_url}>
                                <button>Read</button>
                            </a>
                        </div>
                    )
                })}
            <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button>
            <br />
            {/*direction param is how we separate the funcs*/}
            <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>
        </div>
    );
};

export default NytResults;