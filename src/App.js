import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';

class App extends Component {
	constructor() {
		super();
		this.state = {
			chartData: {},
		};
	}
	componentWillMount() {
		this.getChartData();
	}

	getChartData() {
		// Ajax Calls here
		this.setState({
			chartData: {
				labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambrige', 'New Bedford'],
				datasets: [
					{
						label: 'Population1',
						backgroundColor: [
							'rgba(255, 99, 132, 0.6)',
							'rgba(54, 162, 235, 0.6)',
							'rgba(255, 206, 86, 0.6)',
							'rgba(75, 192, 192, 0.6)',
							'rgba(153, 102, 255, 0.6)',
							'rgba(255, 159, 64, 0.6)',
							'rgba(255, 99, 132, 0.6)',
						],
						borderColor: 'rgb(255, 99, 132)',
						data: [617594, 181045, 153060, 106519, 105162, 105162],
          },
          {
						label: 'Population2',
						backgroundColor: [
							'rgba(255, 154, 104, 0.6)',
							'rgba(137, 221, 255, 0.6)',
							'rgba(224, 255, 163, 0.6)',
							'rgba(163, 255, 193, 0.6)',
							'rgba(213, 163, 255, 0.6)',
							'rgba(255, 219, 163, 0.6)',
							'rgba(215, 99, 132, 0.6)',
						],
						borderColor: 'rgb(255, 99, 132)',
						data: [517594, 171045, 154106, 96519, 95162, 95162],
					},  
				],
			},
		}, () => {
      console.log('chartData', this.state.chartData);
    });
		
	}
	render() {
		return (
			<div className="App">
				<BarChart chartData={this.state.chartData} location="New York" legendPostion="bottom" />
        
			</div>
		);
	}
}

export default App;
