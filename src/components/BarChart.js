import React, { Component } from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
        legendPostion: 'right',
        location: 'City'
	};
	render() {
		return (
			<div>
				<Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
					options={{
                        // scales: {
                        //     xAxes: [{ stacked: true }],
                        //     yAxes: [{ stacked: true }]
                        // },
						title: {
							display: this.props.displayTitle,
							text: 'Largest Cities In ' + this.props.location,
							fontSize: 25,
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPostion,
						},
					}}
				/>
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
					options={{
                        scales: {
                            xAxes: [{ stacked: true }],
                            yAxes: [{ stacked: true }]
                        },
						title: {
							display: this.props.displayTitle,
							text: 'Largest Cities In ' + this.props.location,
							fontSize: 25,
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPostion,
						},
					}}
				/>
                <Pie
                    data={this.state.chartData}
					options={{
                        
						title: {
							display: this.props.displayTitle,
							text: 'Largest Cities In ' + this.props.location,
							fontSize: 25,
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPostion,
						},
					}}
				/>
			</div>
		);
	}
}

export default BarChart;
