import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
    labels: ['Loss Rate', 'Win Rate'],
    datasets: [
        {
            label: 'Bar',
            backgroundColor: [
                '#fd0912',
                '#129821'
            ],
            data: [55, 45]
        }
    ]
}

class BarChart extends React.Component {
    render() {
        return (
            < div >
                <Bar
                    data={state}
                    options={{
                        indexAxis: 'y',
                        // Elements options apply to all of the options unless overridden in a dataset
                        // In this case, we are setting the border of each horizontal bar to be 2px wide
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                                position: 'right',
                                reverse: true,
                            }
                        },
                    }} />
            </div>
        )
    }
}

export default BarChart;