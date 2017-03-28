//GLOBALES

var App 		= {};
var Graphics 	= {};


Graphics.inflation = function () {
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Month');
	data.addColumn('number', 'Valor');
	data.addColumn({
		type: 'string',
		role: 'tooltip',
		'p': {'html': true}
	});

	function createTooltip(variacion, valor) {
		var p = document.createElement('p'), 
			br = document.createElement('br'),
			span = document.createElement('span'),
			span2 = document.createElement('span');
		span.textContent = 'Variación: ' + variacion.toString();
		p.appendChild(span);
		p.appendChild(br);
		span2.textContent = 'Valor: ' + valor.toString();
		p.appendChild(span2);

		return p.outerHTML;
	}

	var realData = [
	[new Date(2016, 0), 36.1, createTooltip(0.8, 36.1)],
	[new Date(2016, 1), 33.2, createTooltip(0.9, 33.2)],
	[new Date(2016, 2), 48.3, createTooltip(0.1, 48.3)],
	[new Date(2016, 3), 52.7, createTooltip(-3.1, 52.7)],
	[new Date(2016, 4), 63.9, createTooltip(-2.9, 63.9)],
	[new Date(2016, 5), 54.3, createTooltip(-4.9, 54.3)],
	[new Date(2016, 6), 43.1, createTooltip(-5.7, 43.1)],
	[new Date(2016, 7), 43.1, createTooltip(-2.0, 43.1)],
	[new Date(2016, 8), 40.3, createTooltip(-3.7, 40.3)],
	[new Date(2016, 9), 40.3, createTooltip(-4.4, 40.3)],
	[new Date(2016, 10), 43.6, createTooltip(-1.4, 43.6)],
	[new Date(2016, 11), 43.2, createTooltip(-0.1, 43.2)]
	];

	data.addRows(realData);

	var options = {
		chart: {
			title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
		},
		height: 200,
		hAxis: {
			ticks: [
			new Date(2016, 0), 
			new Date(2016, 1), 
			new Date(2016, 2), 
			new Date(2016, 3),
			new Date(2016, 4), 
			new Date(2016, 5), 
			new Date(2016, 6), 
			new Date(2016, 7),
			new Date(2016, 8), 
			new Date(2016, 9), 
			new Date(2016, 10), 
			new Date(2016, 11)
			]
		}
	};

	var chart = new google.visualization.LineChart(document.getElementById('inflation'));

	chart.draw(data, options);
};

App.init = function () {
	google.charts.load('current', {packages: ['corechart', 'line'], 'language': 'es'});
	google.charts.setOnLoadCallback(Graphics.inflation);
};

document.addEventListener("DOMContentLoaded", function(event) {
	App.init();
});





