//Start of the graphs of Network Opco Contribution 
//container-opco-cost chart code starts here
Highcharts.chart('container-opco-cost', {
	chart: {
		type: 'column',
	},
	title: {
		text: null,
	},
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		type: 'category',
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		categories: ['AFGAR', 'BENSP', 'BENSP', 'CMRMT', 'COGLB', 'CYPOC', 'GHASC', 'GNBSB', 'GINAG', 'CIVTL'],
		title: {
			text: ''
		},
		labels: {
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		}
	},
	yAxis: {
		min: 0,
		max: 70,
		tickInterval: 10,
		labels: {
			format: '{value}K',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		title: {
			text: 'USD',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},

	},
	legend: {
		enabled: false
	},
	tooltip: {
		pointFormat: 'Cost: <b>{point.y}K millions</b>'
	},
	plotOptions: {
		series: {
			pointPadding: -0.1
		}
	},
	series: [{
		name: 'Cost',
		//pointWidth: 80,
		background: '#9dd0f2',
		data: [63, 38, 41, 42, 32, 31, 21, 20, 15, 10],
		gapSize: 1,
		color: '#9dd0f2',
		dataLabels: {
			enabled: false,
			color: '#000',
			align: 'center',
			format: '{y}K',
			y: 0,
			style: {
				fontSize: '11px',
				fontFamily: 'Verdana, sans-serif',
				color: '#666',
				fontWeight: 'normal',
			}
		}
	}]
});
//container-opco-cost chart code ends here

//container-opco-revenue chart code starts here
Highcharts.chart('container-opco-revenue', {
	chart: {
		type: 'column',
	},
	title: {
		text: null,
	},
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		type: 'category',
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		categories: ['AFGAR', 'BENSP', 'BENSP', 'CMRMT', 'COGLB', 'CYPOC', 'GHASC', 'GNBSB', 'GINAG', 'CIVTL'],
		title: {
			text: ''
		},
		labels: {
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		}
	},
	yAxis: {
		min: 0,
		max: 70,
		tickInterval: 10,
		labels: {
			format: '{value}K',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		title: {
			text: 'USD',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},

	},
	legend: {
		enabled: false
	},
	tooltip: {
		pointFormat: 'Revenue: <b>{point.y}K millions</b>'
	},
	plotOptions: {
		series: {
			pointPadding: -0.1
		}
	},
	series: [{
		name: 'Revenue',
		//pointWidth: 80,
		background: '#97ecbc',
		data: [63, 38, 41, 42, 32, 31, 21, 20, 15, 10],
		color: '#97ecbc',
		dataLabels: {
			enabled: false,
			color: '#000',
			align: 'center',
			format: '{y}K',
			y: 0,
			style: {
				fontSize: '11px',
				fontFamily: 'Verdana, sans-serif',
				color: '#666',
				fontWeight: 'normal',
			}
		}
	}]
});
//container-opco-revenue chart code ends here

//container-opco-inbound chart code starts here
Highcharts.chart('container-opco-inbound', {
	chart: {
		type: 'column',
	},
	title: {
		text: null,
	},
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		type: 'category',
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		categories: ['AFGAR', 'BENSP', 'BENSP', 'CMRMT', 'COGLB', 'CYPOC', 'GHASC', 'GNBSB', 'GINAG', 'CIVTL'],
		title: {
			text: ''
		},
		labels: {
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		}
	},
	yAxis: {
		min: 0,
		max: 70,
		tickInterval: 10,
		labels: {
			format: '{value}K',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		title: {
			text: 'USD',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},

	},
	legend: {
		enabled: false
	},
	tooltip: {
		pointFormat: 'Inbound: <b>{point.y}K millions</b>'
	},
	plotOptions: {
		series: {
			pointPadding: -0.1
		}
	},
	series: [{
		name: 'Inbound',
		//pointWidth: 80,
		background: '#9dd0f2',
		data: [63, 38, 41, 42, 32, 31, 21, 20, 15, 10],
		color: '#fdddaa',
		dataLabels: {
			enabled: false,
			color: '#000',
			align: 'center',
			format: '{y}K',
			y: 0,
			style: {
				fontSize: '11px',
				fontFamily: 'Verdana, sans-serif',
				color: '#666',
				fontWeight: 'normal',
			}
		}
	}]
});
//container-opco-inbound chart code ends here

//container-opco-outbound chart code starts here
Highcharts.chart('container-opco-outbound', {
	chart: {
		type: 'column',
	},
	title: {
		text: null,
	},
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		type: 'category',
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		categories: ['AFGAR', 'BENSP', 'BENSP', 'CMRMT', 'COGLB', 'CYPOC', 'GHASC', 'GNBSB', 'GINAG', 'CIVTL'],
		title: {
			text: ''
		},
		labels: {
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		}
	},
	yAxis: {
		min: 0,
		max: 70,
		tickInterval: 10,
		labels: {
			format: '{value}K',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},
		gridLineWidth: 0,
		minorGridLineWidth: 0,
		title: {
			text: 'USD',
			style: {
				fontSize: '10px',
				fontFamily: 'OpenSans-regular',
				color: '#74829c'
			}
		},

	},
	legend: {
		enabled: false
	},
	tooltip: {
		pointFormat: 'Outbound: <b>{point.y}K millions</b>'
	},
	plotOptions: {
		series: {
			pointPadding: -0.1
		}
	},
	series: [{
		name: 'Outbound',
		//pointWidth: 80,
		background: '#9dd0f2',
		data: [63, 38, 41, 42, 32, 31, 21, 20, 15, 10],
		color: '#dbbde5',
		dataLabels: {
			enabled: false,
			color: '#000',
			align: 'center',
			format: '{y}K',
			y: 0,
			style: {
				fontSize: '11px',
				fontFamily: 'Verdana, sans-serif',
				color: '#666',
				fontWeight: 'normal',
			}
		}
	}]
});
//container-opco-outbound chart code ends here
//End of the graphs of Network Opco Contribution 
