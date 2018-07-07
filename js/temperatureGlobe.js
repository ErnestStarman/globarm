var xAxisData = [];
var data1 = [
-0.1,
-0.08,
-0.08,
-0.08,
-0.2,
-0.21,
-0.26,
-0.3,
-0.3,
-0.4,
-0.3,//90
-0.3,
-0.23,
-0.28,
-0.2,
-0.12,
-0.14,
-0.3,
-0.1,
-0.28
-0.11,//00
-0.3,
-0.38,
-0.42,
-0.39,
-0.36,
-0.44,
-0.42,
-0.33,
-0.42,
-0.37,//10
-0.26,
-0.25,
-0.27,
-0.29,
-0.14,
-0.26,
-0.22,
-0.21,
-0.21,
-0.20,//20
-0.21,
-0.23,
-0.27,
-0.28,
-0.23,
-0.22,
-0.25,
-0.21,
-0.22,
-0.19,
-0.08,//30
-0.19,
-0.10,
-0.08,
-0.08,
-0.07,
-0.11,
-0.03,
-0.02,
-0.01,
0.03,//40
0.05,
0.1,
0.12,
0.12,
0.04,
-0.08,
-0.03,
-0.06,//50
0.05,
0.02,
0.06,
-0.05,
-0.06,
-0.09,
0.01,
0.12,
0.09,
0.05,//60
0.02,
0.01,
0.06,
0.03,
-0.02,
0.04,
-0.06,
-0.10,
0.09,
0.02,//70
0.02,
0.07,
0.13,
0.08,
0.11,
-0.17,
-0.06,
-0.12,
0.27,
0.26,//80
0.21,
0.15,
0.26,
0.29,
0.34,
0.29,
0.39,
0.37,
0.28,
0.22,
0.42,//90
0.32,
0.45,
0.21,
0.35,
0.41,
0.44,
0.51,
0.48,
0.6,
0.52,
0.44,//00
0.46,
0.5,
0.58,
0.51,
0.50,
0.58,
0.67,
0.65,
0.58,
0.68,//10
0.62,
0.63,
0.65,
0.72,
0.88,
0.93,
];
var data2 = [];
for(var i = 1880; i < 2020; i++) {
	xAxisData.push(i);
}

option = {
	title: {
		text: '全球平均气候变化走势图',
		padding:[18,5],
	},
	legend: {
		data: ['bar', 'bar2'],
		align: 'left'
	},
	toolbox: {
		// y: 'bottom',
		feature: {
			magicType: {
				type: ['stack', 'tiled']
			},
			dataView: {},
			saveAsImage: {
				pixelRatio: 2
			}
		}
	},
	dataZoom: [{ // 这个dataZoom组件，默认控制x轴。
			type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
			start: 20, // 左边在 10% 的位置。
			end: 90 // 右边在 60% 的位置。
		},
		{ // 这个dataZoom组件，也控制x轴。
			type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
			start: 20, // 左边在 10% 的位置。
			end: 90 // 右边在 60% 的位置。
		}
	],
	tooltip: {},
	xAxis: {
		data: xAxisData,
		silent: false,
		splitLine: {
			show: false
		}
	},
	yAxis: {},
	series: [{
		name: '气温变换',
		type: 'bar',
		data: data1,
		animationDelay: function(idx) {
			return idx * 10;
		}
	}, {
		name: '二氧化碳变换',
		type: 'bar',
		data: data2,
		animationDelay: function(idx) {
			return idx * 10 + 100;
		}
	}],
	animationEasing: 'elasticOut',
	animationDelayUpdate: function(idx) {
		return idx * 5;
	}
};