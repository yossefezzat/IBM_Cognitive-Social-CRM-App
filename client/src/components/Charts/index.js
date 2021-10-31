import React from 'react';
import './style.css';
import Tweets from '../Tweets';
import WordChart from '../WordChart';
import Chart from 'chart.js';


export default class Charts extends React.Component {

    componentDidMount() {
        var ctx = document.getElementById('myChart');
        var ctx2 = document.getElementById('myChart3');
        if(!ctx || !ctx2) return;
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Positive', 'Negative'],
                datasets: [{
                    label: '100',
                    data: [70, 30],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(30, 139, 228)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ['Positive', 'Negative'],
                datasets: [{
                    label: '100',
                    data: [70, 30],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(30, 139, 228)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });



        ctx = document.getElementById('myChart1');
        ctx2 = document.getElementById('myChart4');
        var myChart1 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });



        ctx = document.getElementById('myChart2');
        ctx2 = document.getElementById('myChart5');
        var myChart2 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: 'positive',
                        data: [12,],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    },
                    {
                        label: 'Negative',
                        data: [20],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: 'positive',
                        data: [12,],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    },
                    {
                        label: 'Negative',
                        data: [20],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }

    render() {

        return (
                
            <section class="canvas pb-5 bg-light">
            <div className="tweetsContainer">
                    <Tweets isSlider={true} />
                    <h1 class=" H pt-5 py-2 ">Keywords</h1>
                    <WordChart />
                </div>
            
            <h1 class=" H pt-5 py-2 "> Charts</h1>

                < div class="container my-5">

                    <div className="row">

                        <div className="col-md-12 text-center">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li key={Math.random().toString(32).replace('.', '')} className="nav-item col-sm-3 text-center">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ALL</a>
                                </li>
                                <li key={Math.random().toString(32).replace('.', '')} className="nav-item col-sm-3 text-center">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">TOTAL NUM OF TWEETS</a>
                                </li>
                                <li key={Math.random().toString(32).replace('.', '')} className="nav-item col-sm-3 text-center">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">SENTMENT OVER TIME</a>
                                </li>
                                <li key={Math.random().toString(32).replace('.', '')} className="nav-item col-sm-3 text-center">
                                    <a className="nav-link " id="pills-MENTORS-tab" data-toggle="pill" href="#pills-MENTORS" role="tab" aria-controls="pills-MENTORS" aria-selected="false">EMOTIONAL TONE OVER TIME</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        <div class="container">

                            <div class="row">

                                <div class="col-md-4">
                                    <canvas id="myChart" width="400" height="400"></canvas>
                                </div>
                                <div key={Math.random().toString(32).replace('.', '')} className="col-md-4 mb-2">
                                    <canvas id="myChart1" width="400" height="400"></canvas>
                                </div>
                                <div key={Math.random().toString(32).replace('.', '')} className="col-md-4 mb-2">
                                    <canvas id="myChart2" width="400" height="400"></canvas>
                                </div>
                                <section key={Math.random().toString(32).replace('.', '')} className="canvas">

                                </section>

                            </div>
                        </ div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                        <div className="container">

                            <div className="row">

                                <div class=" ch text-center" style={{
                                    width: 'calc(100vh - 80px)'
                                }}>
                                <div class=" col-sm-12 ">
                                    <canvas style={{margin: '1em auto'}} id="myChart3" width="400" height="400"></canvas>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                        <div className="container">

                            <div className="row">

                            <div class="ch text-center" style={{
                                    width: 'calc(100vh - 80px)'
                                }}>

                                <div class="  col-sm-12 ">
                                    <canvas id="myChart4" width="400" height="400"></canvas>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="tab-pane fade" id="pills-MENTORS" role="tabpanel" aria-labelledby="pills-MENTORS-tab">

                        <div className="container">

                            <div className="row">



                                 <div class=" ch text-center" style={{
                                    width: 'calc(100vh - 80px)'
                                }}>
                                <div class="  col-sm-12 ">
                                    <canvas id="myChart5" width="400" height="400"></canvas>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )

    }
}