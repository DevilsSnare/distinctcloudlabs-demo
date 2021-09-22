import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const state = {
    labels: ['Loss Rate', 'Win Rate'],
    datasets: [
        {
            label: 'Doughnut',
            backgroundColor: [
                '#fd0912',
                '#129821'
            ],
            data: [55, 45]
        }
    ]
}

class Dough extends React.Component {
    render() {
        return (
            < div >
                <Doughnut
                    data={state}
                    options={{
                        plugins: {
                            legend: {
                                display: true,
                                position: 'right',
                                reverse: true,
                            }
                        },
                        responsive: true,
                    }} />
            </div>
        )
    }
}

export default Dough;