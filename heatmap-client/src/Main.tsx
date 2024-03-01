import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { io } from 'socket.io-client';

export default function Main() {
	const [series, setSeries] = useState<ApexAxisChartSeries>([]);
	const colors = [
		{
			from: 0,
			to: 0,
			name: 'range0',
			color: '#333', // Blue
		},
		{
			from: 0.1,
			to: 0.6,
			name: 'range1',
			color: '#26828e', // Darker Green
		},
		{
			from: 0.6,
			to: 1.2,
			name: 'range2',
			color: '#1f9e89', // Green
		},
		{
			from: 1.2,
			to: 1.8,
			name: 'range3',
			color: '#35b779', // Greenish-Yellow
		},
		{
			from: 1.8,
			to: 2.4,
			name: 'range4',
			color: '#6ece58', // Yellowish
		},
		{
			from: 2.4,
			to: 3,
			name: 'range5',
			color: '#b5de2b', // Light Yellow
		},
	];

	useEffect(() => {
		const socket = io('http://localhost:3333');

		// Listen for the data sent by the server
		socket.on('sendData', (data) => {
			setSeries(data);
		});

		// Request data from the server
		socket.emit('getData');

		// Clean up on unmount
		return () => {
			socket.off('sendData');
			socket.close();
		};
	}, []);

	console.log(series);

	return (
		<main className='w-full h-full flex flex-col mx-4 md:mx-[20%] mt-12'>
			<h1 className='w-full text-3xl font-semibold text-slate-600'>
				Heatmap Chart
			</h1>
			<Chart
				type='heatmap'
				series={series}
				height={600}
				width={500}
				options={{
					chart: {
						toolbar: {
							show: true,
						},
					},
					dataLabels: {
						enabled: true,
						enabledOnSeries: [
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
						],
						style: {
							colors: ['#111'],
						},
					},
					colors: ['#000'],
					xaxis: {
						position: 'top',
					},
					legend: {
						show: false,
					},
					plotOptions: {
						heatmap: {
							colorScale: {
								ranges: colors,
							},
						},
					},
				}}
			></Chart>
			<div className='w-[500px] m-0 flex flex-row justify-center items-start'>
				{colors.map((color, index) => {
					if (index === 0) {
						return null;
					}
					return (
						<div className='w-4 h-4 m-0 relative group' key={index}>
							<div
								className='w-4 h-4'
								style={{ backgroundColor: color.color }}
							></div>
							<div className='w-16 flex justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full bg-slate-200 text-black text-xs px-1 rounded opacity-0 group-hover:opacity-100'>
								<p className='font-semibold'>
									{color.from} - {color.to}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}
