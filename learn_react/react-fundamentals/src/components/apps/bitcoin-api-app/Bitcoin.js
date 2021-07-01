import React, { useState, useEffect } from 'react';
import InfoBox from './InfoBox';
import LineChart from './LineChart'


const Bitcoin = () => {
//The former is a boolean set to true where it fetches the data; this is helpful if the data is slow-coming. We will see it's point in a second. The latter is an empty array that we will push our fetched data from the API
    const [data, setData] = useState([]);
    const [fetchingData, setFetchingData] = useState(true);
    
    useEffect(()=> {
        const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
        
        fetch(url)
            .then(res => res.json())
            .then(bitcoinData => {
            console.log(bitcoinData.bpi);
                setData(bitcoinData.bpi);
                setFetchingData(false);
            })
            .catch(e => {
            console.log(e)
            })
}, [])
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>
                    30 Day Bitcoin Price Chart
                </h1>
                {!this.state.fetchingData ? <InfoBox
                    data={data}/> : null}
                {this.state.fetchingData ? <LineChart
                    data={data}
                /> : null}
            </div>
        
        </div>
    );
};
// above two ternaries that holds the two  tags until the data is completely fetched; if it is still fetching, return ; 

export default Bitcoin;