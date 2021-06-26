import React, { useState } from 'react';
import NytResults from './NytResults';


//API info
const baseURL = "https://api.nytimes.com/svc/search/v2/articleSearch.json";
const key = 'Cr0sqEkMK5DW4GqI63SR423tuWvAOdbu'

const NytApp = () => {
    //setSearch for example. search is where the value is stored, and setSearch() is a function that updates the value. Using setSearch() we can update that value whenever a user types into an input and activate the onChange.
    
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [results, setResults] = useState([]);
    
    //arrow functions do not create their own scope?
    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
        //if a start date is provided, append to url, otherwise url remains the same 
        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;
        
        fetch(url)
            //jsonify results
            .then(res => res.json())
            //name the object 'data'
            //make results var contain docs of object
            .then(data => setResults(data.res.docs))
            //print any errors
            .catch(err => console.log(err.message));
    };
    
    const handleSubmit = (event) => {
        //prevent refresh
        event.preventDefault();
        setPageNumber(0);
        //fire fetch 
        fetchResults();
    };

    //PAGINATION
    
    const changePageNumber = (event, direction) => {
        event.preventDefault();
        if (direction === 'down') {
            //pagenum mst be greater than 0 to go to previos page
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
                fetchResults();
            }
        }
        if (direction === 'up') {
            setPageNumber(pageNumber + 1);
            fetchResults();
        }
        
    }
    
    return (
        <div className='main'>
        <div className='mainDiv'>
        <form onSubmit={handleSubmit}>
                    <span>Enter a single search term (required) : </span>
                    {/*catch browser event(e), target is whatever is set off by the event, value is the value of the input*/}
          <input type="text" name="search" onChange={(e)=>setSearch(e.target.value) } required />
          <br />
          <span>Enter a start date: </span>
          <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} />
          <br />
          <span>Enter an end date: </span>
          <input type="date" name="endDate" pattern="[0-9]{8}" onChange={ (e) => setEndDate(e.target.value)} />
          <br />
          <button className="submit">Submit search</button>
                </form>
                {
                    //check if there are results to display
                    results.length > 0 ?
                        <NytResults
                            //set up a prop to capture them in the child
                            //setting prop results equal to state value
                            //changed name to show flow of data
                            nytResults={results}
                            changePage={changePageNumber}
                        />
                        : null
                }
               
                
      </div>
    </div>
  );     
};

export default NytApp;

