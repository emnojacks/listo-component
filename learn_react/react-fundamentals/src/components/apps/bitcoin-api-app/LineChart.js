import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import moment from "moment";

const LineChart = (props) => {
    
    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);
    
    useEffect(() => {
        
        const unsortedData = props.data;
        let dates = [];
        let payout = [];
    
        for (let item in unsortedData) {
            let bitCoinDates = moment(item).format('MM DD');
            dates.push(bitCoinDates);
            payout.push(unsortedData[item]);
        }
        console.log(dates, payout);
        setDates(dates);
        setPayout(payout);
    }, [])
        
    useEffect(() => {
        
        let chartContext = document.getElementById('myChart').getContext('2d');
        
        let myChart = new Chart(chartContext, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    data: payout,
                    backgroundColor: '#d9514e80',
                    borderColor: '#d9514e80',
                    borderWidth: 2
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxis: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }, [dates])
    
    
    return (
        <canvas id='myChart'></canvas>     
    );

};

export default LineChart;