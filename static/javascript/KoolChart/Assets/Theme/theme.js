////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//		KoolChart 3.0 theme.js
//		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***************************************************************************************
 *
 *		Theme.js must be set after including of KoolChart's JS library.
 *
 ***************************************************************************************/

(function(){

	// Default style variables for each built-in theme
	var simple,
		cyber,
		modern,
		lovely,
		pastel;

	function themeExtend(target, obj){
		for(var o in obj){
			if(!target[o])
				target[o] = obj[o];
		}
	}

	function intoProp(prop, theme, colors, alpha, weight, gradient){
		var i, n, o,
			color;
		
		if(alpha == null || alpha == undefined)
			alpha = 1;
		if(weight == null || weight == undefined)
			weight = 1;
		if(gradient == null || gradient == undefined)
			gradient = false;
		
		for(i = 0, n = colors.length ; i < n ; i += 1){
			color = colors[i % colors.length];
			if(!gradient){
				o = { color : color, weight : weight, alpha : alpha};
			}else{
				o = {};
				o.angle = 90;
				o.entries = [];
				o.entries.push({ color : color, ratio : 1, alpha : alpha});
			}
			
			if(!theme.series[i])
				theme.series[i] = {};

			theme.series[i][prop] = o;
		}
	}
	
	// Variables of the themes provided by KoolChart
	KoolChart.themes = {};

	// Default style variables of the themes provided by KoolChart
	KoolChart.setupTheme = {};

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//		Simple Theme
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// default styles of the simple theme
	KoolChart.setupTheme.simple = {
		defaultColors : [
			"#3BA0CC","#775F47","#A8C545","#DDCFAC","#777777","#9FB5CD","#2AA2A0","#37C07C","#3F596E","#7E92A5","#A48D70","#77B6D0","#CEE4ED","#555555",
			"#B195A6","#D4C4CE","#67425A","#B9DCDA","#3798B9","#89D5AF","#869726","#C1CC89","#836E2C","#C5BA8E","#816D5B","#DEE3E7","#84929F","#3B4B5B"
		],

		// Chart Common
		chartCommon : {
			gutterTop : 0, 			
			paddingRight : 0, 		
			paddingBottom : 0, 		
			dataTipBorderWidth : 2, 
			showDataTipTargets : false
		},

		// Normal Chart
		normalChart : {
			paddingLeft : 0, 
			gutterLeft : 0, 
			gutterRight : 0, 
			gutterBottom : 44, 
			verticalAxisRenderer : {
				showLine : false,
				showLabels : false,
				labelGap : 0
			},
			verticalAxisRenderers : [{ 
				showLine : false, 
				showLabels : false, 
				labelGap : 0 
			},{
				showLine : false, 
				showLabels : false, 
				labelGap : 0 
			}],
			horizontalAxisRenderer : {
				labelGap : 14 
			}
		},	

		// Normal 3D Chart
		normal3DChart : {
			verticalAxisRenderer : {
				showLine : false,
				tickPlacement : "none"
			},
			verticalAxisRenderers : [{
				showLine : false, 
				tickPlacement : "none"
			}, {
				showLine : false, 
				tickPlacement : "none"
			}],
			horizontalAxisRenderer : {
				axisStroke : {color : "#dcccb2"}
			},
			horizontalAxisRenderers : [{
				axisStroke : {
					color : "#dcccb2"
				},
				showLine : true
			},{
				axisStroke : {
					color : "#dcccb2"
				},
				showLine : true
			}]
		},

		// History Chart
		historyChart : {
			navigator : {
				gutterBottom : 0	
			}
		},

		// Dual Chart
		dualChart : {
			subChart : { 
				gutterBottom : 0
			}
		},

		// Bar Chart
		barChart : {
			paddingLeft : 9, 
			gutterBottom : 0, 
			horizontalAxisRenderers : [{ 
				showLine : false, 
				showLabels : false, 
				labelGap : 0 
			}],
			verticalAxisRenderer : {
				labelGap : 10 
			}
		},

		// Bar 3D Chart
		bar3DChart : {
			paddingLeft : 9, 
			gutterBottom : 0, 
			horizontalAxisRenderer : {
				showLine : false,
				showLabels : false,
				labelGap : 0,
				tickPlacement : "none"
			},
			horizontalAxisRenderers : [{ 
				showLine : false, 
				showLabels : false, 
				labelGap : 0, 
				tickPlacement : "none"
			}],
			verticalAxisRenderer : {
				axisStroke : {color : "#dcccb2"},
				labelGap : 10 
			},
			verticalAxisRenderers : [{
				axisStroke : {color : "#dcccb2"},
				labelGap : 10 
			},{
				axisStroke : {color : "#dcccb2"},
				labelGap : 10 
			}]
		},

		// Pie 3D Chart
		pieChart : {
			paddingLeft : 100,
			paddingRight : 100,
			paddingTop : 50,
			paddingBottom : 50
		},

		// Line 2D Chart
		lineChart : {
			series : [
			]
		},

		// Area 2D Chart
		areaChart : {
			series : [
			]
		},

		realTimeChart : {
			series : [
			]
		},

		// Radar Chart
		radarChart : {
			paddingBottom : 20
		},

		// Wing Bar 2D Chart
		wingBarChart : {},

		// Wing Column 2D Chart
		wingColumnChart : {
			paddingLeft : 0,
			paddingTop : 0,
			paddingRight : 0,
			paddingBottom : 0,
			gutterLeft : 0,
			gutterRight :0,
			dataTipBorderWidth : 2,
			showDataTipTargets : false,
			verticalAxisRenderers : [{
				showLine : false,
				showLabels : false,
				lagelGap : 0
			},{
				showLine : false,
				showLabels : false,
				lagelGap : 0
			}],
			horizontalAxisRenderer : {
				labelGap : 14
			}
		},

		// Line 2D Series
		lineSeries : {
			fill : "#ffffff",
			itemRenderer : "CircleItemRenderer"
		},

		// Area 2D Series
		areaSeries : {
			form : "segment"
		},

		// Column Bar 2D Series
		columnBarSeries : {
			itemRenderer : "BoxItemRenderer"
		},

		// Combination
		combinationChart : {
			series : [
			]
		},

		targetGoalSeries : {
			stroke : {"color":"#AACDE4", "weight":1},
			fill : {"color":"#AACDE4"}
		},

		// Circular Gauge Common
		circularCommon : {
			frameStroke : {"color":"#3B4B5B", "weight":2},
			frameFill : {"color":"#3BA0CC"},
			needleStroke : {"color":"#77B6D0"},
			needleFill : {"color":"#77B6D0", "alpha":1},
			needleCoverFill : {"color":"#3F596E"},
			needleCoverStroke : {"color":"#3F596E"},
			minorTickFill : {"color":"#777777"},
			minorTickStroke : {"color":"#3B4B5B"},
			tickFill : {"color":"#84929F"},
			tickStroke : {"color":"#3B4B5B"},
			tickGap : 4,
			labelGap : 8,
			color : "#454545",
			tickLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				fontSize : 14,
				color : "#DEE3E7"
			},
			valueLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				color : "#454545",
				fontSize : 14,
				borderStyle : "none",
				borderThickness : 2,
				borderColor : "#3B4B5B"
			},
			hideTickLabel : "none" 
		},

		// Circular Gauge 
		circular : {
			minimumAngle : 40,
			maximumAngle : 320,
			valueXOffset : 0,
			valueYOffset : 80
		},

		// Half Circular Gauge
		halfCircular : {
			minimumAngle : 190,
			maximumAngle : 350,
			valueYOffset : -50
		},

		// VCylinder, HCylinder Gauge
		cylinderGauge : {
			cylinderColor : ["#3BA0CC", "#FFFFFF", "#3BA0CC"],
			valueLabelStyleName : {
				fontSize : 12,
				color : "#454545",
				fontWeight : "bold"
			},
			tickLabelStyleName : {
				fontSize : 12
			},
			tickColor : "#000000"
		},

		// VLinear, HLinear Gauge
		linearGauge : {
			linearBorderColor : "#77B6D0",
			linearColor : ["#77B6D0", "#77B6D0", "#77B6D0"],
			linearBgBorderColor : "#7E92A5",
			linearBgColor : ["#7E92A5", "#7E92A5", "#7E92A5"],
			targetMarkBorderColor : "#CEE4ED",
			targetMarkColor : ["#CEE4ED", "#CEE4ED", "#CEE4ED"],
			valueLabelStyleName : {
				fontSize : 13,
				color : "#ffffff"
			},
			tickLabelStyleName : {
				fontSize : 12
			}
		}
	};

	// Save default styles of the simple theme.
	simple = KoolChart.setupTheme.simple;

	// Set ChartCommon to Normal Chart.
	themeExtend(simple.normalChart, simple.chartCommon);

	// Set NormalChart to Normal 3D Chart.
	themeExtend(simple.normal3DChart, simple.normalChart);

	// Set themeChartCommon to Bar Chart.
	themeExtend(simple.barChart, simple.chartCommon);

	// Set themeChartCommon to Bar 3D Chart.
	themeExtend(simple.bar3DChart, simple.chartCommon);

	// Set NormalChart to Line Chart.
	themeExtend(simple.lineChart, simple.normalChart);

	// Set NormalChart to Area Chart.
	themeExtend(simple.areaChart, simple.normalChart);

	// Set ChartCommon to Pie Chart.
	themeExtend(simple.pieChart, simple.chartCommon);

	// Set ChartCommon to Radar Chart.
	themeExtend(simple.radarChart, simple.chartCommon);

	// Set NormalChart to History Chart.
	themeExtend(simple.historyChart, simple.normalChart);

	// Set NormalChart to Dual Chart.
	themeExtend(simple.dualChart, simple.normalChart);
	
	// Set barChart to Wing Bar Chart.
	themeExtend(simple.wingBarChart, simple.barChart);

	// Set CircularCommon to Circular Gauge.
	themeExtend(simple.circular, simple.circularCommon);

	// Set CircuarCommon to Half Circular Gauge.
	themeExtend(simple.halfCircular, simple.circularCommon);

	// Set NormalChart to Combiantion 2D Chart.
	themeExtend(simple.combinationChart, simple.normalChart);

	// Set stroke to the series of Line Chart.
	intoProp("stroke", simple.lineChart, simple.defaultColors, 1, 2);

	// Set areaFill to the series of Area Chart.
	intoProp("areaFill", simple.areaChart, simple.defaultColors, 0.7, 2, true);

	// Set stroke to the series of Combination 2D Chart.
	intoProp("stroke", simple.combinationChart, simple.defaultColors, 1, 2);
	
	// Set fill to the series of RealTimeChart.
	intoProp("stroke", simple.realTimeChart, simple.defaultColors, 1, 2);

	//--------------------------------------------------------------------------------
	//
	//	Actual simple theme
	//
	//--------------------------------------------------------------------------------
	KoolChart.themes.simple = {
		// default color
		defaultColors : simple.defaultColors,
		
		// KoolChart
		KoolChart : {
			background : "linear-gradient(#f5f5f5, #f9f9f9)",
			border : "solid 1px #e6e6e6",
			borderRadius : 0,
			paddingLeft : 0,
			paddingRight : 0,
			paddingBottom : 0
		},

		// NormalChart
		Column2DChart : simple.normalChart,
		Pie2DChart : simple.normalChart,
		Plot2DChart : simple.normalChart,
		RealTimeChart : simple.normalChart,
		Matrix2DChart : simple.normalChart,
		ImageChart : simple.normalChart,
		Candlestick2DChart : simple.normalChart,
		CandleLine2DChart : simple.normalChart,
		CandleArea2DChart : simple.normalChart,
		
		// Normal3DChart
		Column3DChart : simple.normal3DChart,
		Bubble3DChart : simple.normal3DChart,

		// LineChart
		Line2DChart : simple.lineChart,

		// AreaChart
		Area2DChart : simple.areaChart,

		// BarChart
		Bar2DChart : simple.barChart,

		// Bar3DChart
		Bar3DChart : simple.bar3DChart,

		// PieChart
		Pie3DChart : simple.pieChart,

		// RadarChart
		RadarChart : simple.radarChart,

		// HistoryChart
		HistoryChart : simple.historyChart,

		// DualChart
		DualChart : simple.dualChart,

		// CombinationChart
		Combination2DChart : simple.combinationChart,
		//Combination3DChart : simple.combinationChart,
		Combination3DChart : simple.normal3DChart,

		// WingColumnChart
		Column2DWingChart : simple.wingColumnChart,

		// WingBarChart
		Bar2DWingChart : simple.wingBarChart,

		VTarget3DGoalSeries : simple.targetGoalSeries,
		HTarget3DGoalSeries : simple.targetGoalSeries,

		RealTimeChart : simple.realTimeChart,

		// Circular
		CircularGauge : simple.circular,

		// HalfCircular
		HalfCircularGauge : simple.halfCircular,
		
		// CylinderGauge
		VCylinderGauge : simple.cylinderGauge,
		HCylinderGauge : simple.cylinderGauge,
		
		// LinearGauge
		VLinearGauge : simple.linearGauge,
		HLinearGauge : simple.linearGauge,
		
		// Series
		Line2DSeries : simple.lineSeries,
		Column2DSeries : simple.columnBarSeries,
		Bar2DSeries :simple.columnBarSeries,
		Area2DSeries : simple.areaSeries,
		
		// Elements
		GridLines : {
			direction : "none"
		}
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//		Cyber Theme
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// default styles of the cyber theme
	KoolChart.setupTheme.cyber = {
		defaultColors : [
			"#F5F5F5","#96D3CB","#F86E2D","#FEF6C5","#C3B689","#665A44","#BF9D77","#74C092","#E1F2BB","#FFC961","#FB937B","#EB494A","#999999","#CDCDCD",
			"#73ADB1","#BED5D9","#524E4F","#A8D37A","#CCE5A2","#FFFFFF","#76C6BE","#C1E2DE","#B06876","#E2C1C8","#7A6E67","#9E948D","#EA7A29","#EFC18A"
		],

		// Chart Common
		chartCommon : {
			dataTipBackgroundColorOnSeries : true,
			showDataTipTargets : false,
			dataTipBorderColor : "#ffffff"
		},

		// Normal Chart
		normalChart : {
			gutterBottom : 47
		},
		
		// Normal 3D Chart
		normal3DChart : {
			gutterBottom : 47,
			verticalAxisRenderer : {
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			},horizontalAxisRenderer : {
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			},
			horizontalAxisRenderers : [{
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			},{
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			}],
			verticalAxisRenderers : [{
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			},{
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			}]
		},

		// Line 2D Chart
		lineChart : {
			series : [
			]
		},
		
		// Line 2D Series
		lineSeries : {
			color : "#E40050",
			itemRenderer : ""
		},

		// Area 2D Chart
		areaChart : {
			series :[
			]
		},

		// Area 2D Series
		areaSeries : {
			//labelPosition : "none",
			color : "#E40050",
			form : "segment",
			areaFill : {color:"#8a8a8a", alpha:0.5}
		},

		// Bar 2D Chart
		barChart : {
				// Elements
			backgroundElements : [{
				direction : "vertical",
				verticalStroke : {"color":"#333231"}
			}]
		},

		// Bar 3D Chart
		bar3DChart : {
			horizontalAxisRenderer : {
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			},
			horizontalAxisRenderers : [{
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			},{
				axisStroke : {color:"#454545"},
				tickStroke : {color:"#4f4f4f"},
				tickPlacement : "cross"
			}]
		},

		// Column Bar 2D Series
		columnBarSeries : {
			color : "#E40050",
			itemRenderer : "BoxItemRenderer"
		},

		// Column Bar 3D Series
		columnBar3DSeries : {
			color : "#E40050"
		},

		// Pie Series
		pieSeries : {
			color : "#E40050"
		},
		
		// V,H Target Goal Series
		targetGoalSeries : {
			stroke : {"color":"#007492", "weight":1},
			fill : {"color":"#007492"}
		},
		
		// Radar Chart
		radarChart : {
			color : "#ffffff"
		},

		// Circular Gauge Common
		circularCommon : {
			frameStroke : {"color":"#74C092", "weight":5},
			frameFill : {"color":"#E1F2BB"},
			needleStroke : {"color":"#96D3CB"},
			needleFill : {"color":"#96D3CB", "alpha":1},
			needleCoverRadius : 8,
			needleCoverFill : {"color":"#74C092"},
			needleCoverStroke : {"color":"#74C092", "weight":3},
			minorTickFill : {"color":"#777777"},
			minorTickStroke : {"color":"#3B4B5B"},
			tickFill : {"color":"#84929F"},
			tickStroke : {"color":"#3B4B5B"},
			tickGap : 4,
			labelGap : 8,
			needleBackLengthRatio : 0.4,
			tickLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				fontSize : 14,
				color : "#454545"
			},
			valueLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				color : "#454545",
				fontSize : 14,
				borderStyle : "none",
				borderThickness : 2,
				borderColor : "#3B4B5B"
			},
			valueXOffset : 0,
			hideTickLabel : "none"
		},

		// Circular Gauge
		circular : {
			minimumAngle : 30,
			maximumAngle : 330,
			valueYOffset : 60
		},

		// Half Circular Gauge
		halfCircular : {
			minimumAngle : 190,
			maximumAngle : 350,
			valueYOffset : -50
		},

		// VCylinder, HCylinder Gauge
		cylinderGauge : {
			cylinderColor : ["#EB494A", "#FB937B", "#EB494A"],
			cylinderAlpha : [1, 1, 1],
			tickColor : "#ffffff",
			valueLabelStyleName : {
				fontSize : 14
			},
			tickLabelStyleName : {
				fontSize : 14
			}
		},

		// VLinear, HLinear Gauge
		linearGauge : {
			linearBorderColor : "#F86E2D",
			linearColor : ["#F86E2D", "#F86E2D", "#F86E2D"],
			linearBgBorderColor : "#96D3CB",
			linearBgColor : ["#96D3CB", "#96D3CB", "#96D3CB"],
			linearBgAlpha : [1, 1, 1],
			targetMarkBorderColor : "#F5F5F5",
			targetMarkColor : ["#F5F5F5", "#F5F5F5", "#F5F5F5"],
			valueLabelStyleName : {
				fontSize : 13,
				color : "#ffffff"
			},
			tickColor : "#ffffff",
			tickLabelStyleName : {
				fontSize : 12
			}
		},
		
		// CandleLine2DChart, CandleArea2DChart
		candleLine2DChart : {
			dataTipStyleName : {
				color : "#ffffff"
			}
		}
	};
	
	// Save default styles of the cyber theme.
	cyber = KoolChart.setupTheme.cyber;

	// et ChartCommon to Normal Chart.
	themeExtend(cyber.normalChart, cyber.chartCommon);

	// Set ChartCommon to Normal 3D Chart.
	themeExtend(cyber.normal3DChart, cyber.chartCommon);

	// Set ChartCommon to Line Chart.
	themeExtend(cyber.lineChart, cyber.normalChart);

	// Set ChartCommon to Bar Chart.
	themeExtend(cyber.barChart, cyber.chartCommon);

	// Set ChartCommon to Radar Chart.
	themeExtend(cyber.radarChart, cyber.chartCommon);

	// Set barChart to Bar 3D Chart.
	themeExtend(cyber.bar3DChart, cyber.barChart);

	// Set CircularCommon to Circular Gauge.
	themeExtend(cyber.circular, cyber.circularCommon);

	// Set CircularCommon to Half Circular.
	themeExtend(cyber.halfCircular, cyber.circularCommon);

	// Set chartCommon to CandleLine2DChart.
	themeExtend(cyber.candleLine2DChart, cyber.chartCommon);

	// Set stroke to the series of Line Chart.
	intoProp("stroke", cyber.lineChart, cyber.defaultColors, 1, 2);

	//--------------------------------------------------------------------------------
	//
	//	Actual cyber Theme
	//
	//--------------------------------------------------------------------------------
	KoolChart.themes.cyber = {
		// default color
		defaultColors : cyber.defaultColors,

		// KoolChart
		KoolChart : {
			background : "linear-gradient(#454545, #131212)"
		},

		// Caption
		Caption : {
			color : "#ffffff"
		},

		//SubCaption
		SubCaption :{
			color: "#ffffff"
		},

		//Label
		Label : {
			color : "#ffffff"
		},

		Legend : {
			backgroundColor : "#000000",
			color : "#ffffff"
		},
		
		// Axis2DRenderer - x axis, y axis
		Axis2DRenderer : {
			color : "#bdbdbd",
			showLine : false
		},

		// Axis2DWingRenderer - Wing Chart x axis, y axis
		Axis2DWingRenderer : {
			color : "#bdbdbd",
			showLine : false
		},

		// BrokenAxis2DRenderer - x axis, y axis
		BrokenAxis2DRenderer : {
			color : "#bdbdbd",
			showLine : false
		},
		
		BarSet : {
			color : "#E40050"
		},

		Bar2DWingSeries  : {
			color : "#E40050"
		},

		ColumnSet : {
			color : "#E40050"
		},

		Column2DWingSeries  : {
			color : "#E40050"
		},

		VTarget2DGoalSeries : {
			color : "#E40050"
		},

		VTarget2DResultSeries : {
			color : "#454545"
		},

		// chartCommon
		Column2DChart : cyber.chartCommon,
		Pie2DChart : cyber.chartCommon,
		Pie3DChart : cyber.chartCommon,
		Plot2DChart : cyber.chartCommon,
		Combination2DChart : cyber.chartCommon,
		HistoryChart : cyber.chartCommon,
		RealTimeChart : cyber.chartCommon,
		Matrix2DChart : cyber.chartCommon,
		ImageChart : cyber.chartCommon,
		Column2DWingChart : cyber.chartCommon,
		Bar2DWingChart : cyber.chartCommon,
		Candlestick2DChart : cyber.chartCommon,

		// normal3DChart
		Column3DChart : cyber.normal3DChart,
		Bubble3DChart : cyber.normal3DChart,
		Combination3DChart : cyber.normal3DChart,

		// lineChart
		Line2DChart : cyber.lineChart,

		// areaChart
		Area2DChart : cyber.areaChart,

		// barChart
		Bar2DChart : cyber.barChart,

		// bar3DChart
		Bar3DChart : cyber.bar3DChart,
		
		// radarChart
		RadarChart : cyber.radarChart,

		// circular
		CircularGauge : cyber.circular,

		// halfCircular
		HalfCircularGauge : cyber.halfCircular,

		// cylinderGauge
		VCylinderGauge : cyber.cylinderGauge,
		HCylinderGauge : cyber.cylinderGauge,

		// linearGauge
		VLinearGauge : cyber.linearGauge,
		HLinearGauge : cyber.linearGauge,
		
		// lineSeries
		Line2DSeries : cyber.lineSeries,

		// areaSeries
		Area2DSeries : cyber.areaSeries,
		
		// columnBarSeries
		Column2DSeries : cyber.columnBarSeries,
		Bar2DSeries : cyber.columnBarSeries,

		// pieSeries
		Pie2DSeries : cyber.pieSeries,
		Pie3DSeries : cyber.pieSeries,

		// columnBar3DSeries
		Column3DSeries : cyber.columnBar3DSeries,
		Bar3DSeries : cyber.columnBar3DSeries,

		// Target Goal Series
		VTarget3DGoalSeries : cyber.targetGoalSeries,
		HTarget3DGoalSeries : cyber.targetGoalSeries,

		// Matrix
		Matrix2DSeries : {
			color : "#e40050"
		},
		
		// GridLines
		GridLines : {
			direction : "horizontal",
			horizontalStroke : {"color":"#4c4c4c"}
		},

		// Radar Grid Lines
		RadarGridLines : {
			radarFill : {color : "#454545", alpha : 0.5},
			radarAlternateFill : {color : "#999999", alpha : 0.5}
		},

		// candleLine2DChart
		CandleLine2DChart : cyber.candleLine2DChart,
		CandleArea2DChart : cyber.candleLine2DChart
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//		Modern Theme
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// default styles of the modern theme
	KoolChart.setupTheme.modern = {
		defaultColors : [
			"#414C75","#327AC3","#6CABE7","#93BFEB","#BED9ED","#00667C","#007A97","#0092BA","#00AECE","#00C4DC","#6FD2E4","#A2DBEB","#11568C","#4E70BD",
			"#678AD8","#7E9FE9","#A8C0F7","#CBDBFE","#01919E","#2CBFB9","#26CCC5","#1EDDD5","#13F1E8","#4DFDF6","#94FFFB","#00C8A4","#00EAC1","#5CFFE2"
		],

		// Chart Common
		chartCommon : {
			dataTipBorderColor : "#e8e8e8",
			showDataTipTargets : false
		},

		// Normal Chart
		normalChart : {
			gutterLeft : 7,
			gutterRight : 7,
			verticalAxisRenderer : {
				showLine : false,
				showLabels : false,
				labelGap : 0,
				tickPlacement : "none"
			},
			verticalAxisRenderers : [{
				showLine : false,
				showLabels : false,
				labelGap : 0,
				tickPlacement : "none"
			},{
				showLine : false,
				showLabels : false,
				labelGap : 0,
				tickPlacement : "none"
			}]
		},

		// Normal 3D Chart
		normal3DChart : {
			gutterLeft : 44,
			horizontalAxisRenderer : {
				axisStroke : {color:"#d1dbda"},
				showLine : true
			},
			horizontalAxisRenderers : [{
				axisStroke : {color:"#d1dbda"},
				showLine : true
			},{
				axisStroke : {color:"#d1dbda"},
				showLine : true
			}],
			verticalAxisRenderer : {
				axisStroke : {color:"#d1dbda"},
				showLine : true
				//axisStroke : {color:"#ffffff"},
				//tickStroke : {color:"#ecf0ef"},
				//tickPlacement : "cross"
			},verticalAxisRenderers : [{
				axisStroke : {color:"#d1dbda"},
				showLine : true
				//axisStroke : {color:"#ffffff"},
				//tickStroke : {color:"#ecf0ef"},
				//tickPlacement : "cross"
			},{
				axisStroke : {color:"#d1dbda"},
				showLine : true
				//axisStroke : {color:"#ffffff"},
				//tickStroke : {color:"#ecf0ef"},
				//tickPlacement : "cross"
			}]
		},

		// Line 2D Chart
		lineChart : {
			series : [
			]
		},

		// Line 2D Series
		lineSeries : {
			fill : "#ffffff",
			itemRenderer : "CircleItemRenderer"
		},

		// Area 2D Chart
		areaChart : {
			series : [
			]
		},

		// Area 2D Series
		areaSeries : {
			form : "segment"
		},

		// Bar 2D Chart
		barChart : {
			gutterBottom : 5,
			horizontalAxisRenderer : {
				showLine : false,
				showLabels : false,
				labelGap : 0
			},
			verticalAxisRenderer : {
				showLine : false,
				showLabels : true
			},
			verticalAxisRenderers : [{
				showLine : false,
				showLabels : true
			},{
				showLine : false,
				showLabels : true
			}]
		},

		// Bar 3D Chart
		bar3DChart : {
			gutterBottom : 30,
			horizontalAxisRenderer : {
				showLine : true,
				showLabels : true,
				axisStroke : {color:"#d1dbda"}
				//tickStroke : {color:"#ecf0ef"},
				//tickPlacement : "cross"
			},
			horizontalAxisRenderers : [{
				showLine : true,
				axisStroke : {color:"#d1dbda"},
				showLabels : true
				//tickStroke : {color:"#ecf0ef"},
				//tickPlacement : "cross"
			},{
				showLine : true,
				axisStroke : {color:"#d1dbda"},
				showLabels : true
				//tickStroke : {color:"#ecf0ef"},
				//tickPlacement : "cross"
			}],
			verticalAxisRenderer : {
				axisStroke : {color:"#d1dbda"},
				showLine : true
			},verticalAxisRenderers : [{
				axisStroke : {color:"#d1dbda"},
				showLine : true
			},{
				axisStroke : {color:"#d1dbda"},
				showLine : true
			}]
		},

		// Combinaion Chart
		combinationChart : {
			series : [
			]
		},

		// Combinaion Chart
		combination3DChart : {
			series : [
			]
		},

		// History Chart
		historyChart : {
			navigator : {
				gutterLeft : 0
			}
		},
		
		// Real Time Chart
		realTimeChart : {
			series : []
		},

		// Wing Bar 2D Chart
		wingBarChart : {
		},

		// Wing Column 2D Chart
		wingColumnChart : {
			verticalAxisRenderers : [{
				showLabels : false,
				labelGap : 0
			},{
				showLabels : false,
				labelGap : 0
			}]
		},

		// V, H Target 3D Goal Series
		targetGoalSeries : {
			stroke : {color : "#AACDE4", weight:1},
			fill : {color : "#AACDE4"}
		},

		// Column Bar 2D Series
		columnBarSeries : {
			halfWidthOffset : 0.5,
			itemRenderer : "BoxItemRenderer"
		},

		// Dual Chart
		columnBarSeries : {
		},

		// Circular Gauge Common
		circularCommon : {
			frameStroke : {"color":"#11568C", "weight":10},
			frameFill : {"color":"#4E70BD"},
			needleStroke : {"color":"#6CABE7"},
			needleFill : {"color":"#6CABE7", "alpha":1},
			needleCoverFill : {"color":"#414C75"},
			needleCoverStroke : {"color":"#414C75", "weight":3},
			minorTickFill : {"color":"#6CABE7"},
			minorTickStroke : {"color":"#6CABE7"},
			tickFill : {"color":"#327AC3"},
			tickStroke : {"color":"#11568C"},
			tickGap : 4,
			labelGap : 8,
			needleBackLengthRatio : 0,
			needleCoverRadius : 10,
			color : "#454545",
			tickLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				fontSize : 14,
				color : "#ffffff"
			},
			valueLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				color : "#454545",
				fontSize : 14,
				borderStyle : "none",
				borderThickness : 2,
				borderColor : "#3B4B5B"
			},
			valueXOffset : 0,
			needleThickness : 15,
			hideTickLabel : "none"
		},

		// Circular Gauge
		circular : {
			minimumAngle : 20,
			maximumAngle : 340,
			valueYOffset : 60
		},

		// Half circular Gauge
		halfCircular : {
			minimumAngle : 190,
			maximumAngle : 350,
			valueYOffset : -50
		},


		// VCylinder, HCylinder Gauge
		cylinderGauge : {
			cylinderColor : ["#6CABE7", "#93BFEB", "#6CABE7"],
			targetMarkColor : ["#BED9ED", "#BED9ED", "#BED9ED"]
		},

		// VLinear, HLinear Gauge
		linearGauge : {
			linearBorderColor : "#7E9FE9",
			linearColor : ["#7E9FE9", "#7E9FE9", "#7E9FE9"],
			linearRatio : ["0", "125", "255"],
			linearAlpha : ["0.5", "0.8", "1"],
			linearBgBorderColor : "#414C75",
			linearBgColor : ["#414C75", "#414C75", "#414C75"],
			targetMarkBorderColor : "#327AC3",
			targetMarkColor : ["#327AC3", "#327AC3", "#327AC3"],
			targetMarkRatio : [0, 125, 255],
			targetMarkAlpha : [0.5, 0.8, 1],
			valueLabelStyleName : {
				fontSize : 13,
				color : "#ffffff",
				fontWeight : "bold"
			},
			tickLabelStyleName : {
				fontSize : 12
			}
		}
	};

	// Save default styles of the modern theme.
	modern = KoolChart.setupTheme.modern;

	// Set chartCommon to Normal Chart.
	themeExtend(modern.normalChart, modern.chartCommon);

	// Set chartCommon to Normal 3D Chart.
	themeExtend(modern.normal3DChart, modern.normalChart);

	// Set chartCommon to Line 2D Chart.
	themeExtend(modern.lineChart, modern.normalChart);

	// Set chartCommon to Area 2D Chart.
	themeExtend(modern.areaChart, modern.normalChart);

	// Set chartCommon to Bar 2D Chart.
	themeExtend(modern.barChart, modern.chartCommon);

	// Set barChart Bar 3D Chart.
	themeExtend(modern.bar3DChart, modern.barChart);

	// Set normalChart to Combination Chart.
	themeExtend(modern.combinationChart, modern.normalChart);

	// Set normalChart to Combination 3D Chart.
	themeExtend(modern.combination3DChart, modern.normalChart);

	// Set normalChart to History Chart.
	themeExtend(modern.historyChart, modern.normalChart);

	// Set normalChart to Wing Column 2D Chart.
	themeExtend(modern.wingColumnChart, modern.normalChart);

	// Set circularCommon to circular Gauge.
	themeExtend(modern.circular, modern.circularCommon);

	// Set circularCommon to Half circular Gauge.
	themeExtend(modern.halfCircular, modern.circularCommon);

	// Set stroke to the series of Line Chart.
	intoProp("stroke", modern.lineChart, modern.defaultColors, 1, 2);

	// Set declineStroke to the series of Line Chart.
	intoProp("declineStroke", modern.lineChart, ["#00c0c7"], 1, 2);

	// Set areaFill to the series of Area Chart.
	intoProp("areaFill", modern.areaChart, modern.defaultColors, 0.5, 2, true);

	// Set stroke to the series of Combination Chart.
	intoProp("stroke", modern.combinationChart, modern.defaultColors, 1, 2);

	// Set stroke to the series of Combination Chart.
	intoProp("stroke", modern.combination3DChart, modern.defaultColors, 1, 2);

	// Set stroke to the series of RealTime Chart.
	intoProp("stroke", modern.realTimeChart, modern.defaultColors, 1, 2);

	//--------------------------------------------------------------------------------
	//
	//	Actual modern Theme
	//
	//--------------------------------------------------------------------------------
	KoolChart.themes.modern = {
			// default color
			defaultColors : modern.defaultColors,
			
			// KoolChart
			KoolChart : {
				background : "linear-gradient(#eaeeee, #ffffff)",
				border : "solid 1px #e2e7e7",
				borderRadius : 0
			},
			
			// Axis2DRenderer - x axis, y axis
			Axis2DRenderer : {
				color : "#575c6e",
				showLine : false,
				fontWeight : "bold"
			},

			// Axis3DRenderer - x axis, y axis
			Axis3DRenderer : {
				color : "#575c6e",
				showLine : false,
				fontWeight : "bold",
				tickPlacement : "none"
			},

			// BrokenAxis2DRenderer - x axis, y axis
			BrokenAxis2DRenderer : {
				color : "#575c6e",
				showLine : false,
				fontWeight : "bold"
			},
			
			// normalChart
			Column2DChart : modern.normalChart,
			Pie2DChart : modern.normalChart,
			Pie3DChart : modern.normalChart,
			Plot2DChart : modern.normalChart,
			RadarChart : modern.normalChart,
			RealTimeChart : modern.normalChart,
			Matrix2DChart : modern.normalChart,
			ImageChart : modern.normalChart,
			Candlestick2DChart : modern.normalChart,
			CandleLine2DChart : modern.normalChart,
			CandleArea2DChart : modern.normalChart,
			
			// normal3DChart
			Column3DChart : modern.normal3DChart,
			Bubble3DChart : modern.normal3DChart,

			// lineChart
			Line2DChart : modern.lineChart,

			// areaChart
			Area2DChart : modern.areaChart,

			// barChart
			Bar2DChart : modern.barChart,

			// bar3DChart
			Bar3DChart : modern.bar3DChart,

			// combinationChart
			Combination2DChart : modern.combinationChart,

			// combination3DChart
			//Combination3DChart : modern.combination3DChart,
			Combination3DChart : modern.normalChart,

			// historyChart
			HistoryChart : modern.historyChart,

			// theme4columnBarSeries
			columnBarSeries : modern.columnBarSeries,
			
			// wingColumnChart
			Column2DWingChart : modern.wingColumnChart,

			// barChart
			Bar2DWingChart : modern.barChart,

			RealTimeChart : modern.realTimeChart,

			VTarget3DGoalSeries : modern.targetGoalSeries,
			HTarget3DGoalSeries : modern.targetGoalSeries,
			
			// circular
			circularGauge : modern.circular,

			//  halfCircular
			HalfCircularGauge : modern.halfCircular,

			// cylinderGauge
			VCylinderGauge : modern.cylinderGauge,
			HCylinderGauge : modern.cylinderGauge,
			
			// linearGauge
			VlinearGauge : modern.linearGauge,
			HlinearGauge : modern.linearGauge,
			
			// Series
			Line2DSeries : modern.lineSeries,
			Area2DSeries : modern.areaSeries,
			Column2DSeries : modern.columnBarSeries,
			Bar2DSeries : modern.columnBarSeries,
			
			// Elements
			GridLines : {
				direction : "none"
			}
		};

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//		Lovely Theme
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// default styles of the lovely theme
	KoolChart.setupTheme.lovely = {
		defaultColors : [
			"#F85792","#7A6959","#FE8011","#E7DABB","#69DBC4","#3A576F","#219BD1","#78C7EB","#A94A92","#EAA6D5","#FF615E","#00D4A9","#96EDF0","#01D3D5",
			"#009E8E","#A59687","#E40050","#F2558A","#F59BBD","#F38400","#E55201","#E4C191","#44DABC","#00C590","#928679","#E5D1A3","#F34E9A","#F59BCC"
		],

		// Chart Common
		chartCommon : {
			showDataTipTargets : false,
			dataTipBorderStyle : "none",
			dataTipStyleName : {
				color : "#ffffff",
				backgroundColor : "#454545"
			}
		},

		// Normal Chart
		normalChart : {
			gutterLeft : 17,
			gutterRight : 17,
			horizontalAxisRenderer : {
				showLine : false
			},
			verticalAxisRenderer : {
				labelGap : 0,
				showLine : false,
				showLabels : false,
				tickPlacement : "none"
			},
			verticalAxisRenderers : [{
				labelGap : 0,
				showLine : false,
				showLabels : false,
				tickPlacement : "none"
			},{
				labelGap : 0,
				showLine : false,
				showLabels : false,
				tickPlacement : "none"
			}]
		},

		// Normal 3D Chart
		normal3DChart : {
			horizontalAxisRenderer : {
				showLine : true
			}
		},

		// Line 2D Chart
		lineChart : {
			series : [
			]
		},

		// Area 2D Chart
		areaChart : {
			series :[
			]
		},

		// Bar 2D Chart
		barChart : {
			horizontalAxisRenderer : {
				showLine :false,
				showLabels : false,
				labelGap : 0
			},
			horizontalAxisRenderers : [{
				showLine :false,
				showLabels : false,
				labelGap : 0
			},{
				showLine :false,
				showLabels : false,
				labelGap : 0
			}],
			verticalAxisRenderer : {
				showLine : false
			}
		},

		// Bar 3D Chart
		bar3DChart : {
			verticalAxisRenderer : {
				showLine : true
			},
			horizontalAxisRenderer : {
				labelGap : 0,
				showLine : false,
				showLabels : false
			},
			horizontalAxisRenderers : [{
				labelGap : 0,
				showLine : false,
				showLabels : false
			},{
				labelGap : 0,
				showLine : false,
				showLabels : false
			}]
		},

		historyChart : {
			navigator : {
				gutterLeft : 0
			}
		},

		// Wing Column 2D Chart
		wingColumnChart : {
			gutterLeft : 0,
			gutterRight : 0,
			horizontalAxisRenderer : {
				showLine : false
			},
			verticalAxisRenderers : [{
				labelGap : 0,
				showLine : false,
				showLabels : false
			},{
				labelGap : 0,
				showLine : false,
				showLabels : false
			}]
		},

		// Wing Bar 2D Chart
		wingBarChart : {},

		// Line 2D Series
		lineSeries : {
			itemRenderer : "CircleItemRenderer"
		},

		// Area 2D Series
		areaSeries : {
			form : "segment",
			itemRenderer : "CircleItemRenderer"
		},

		// Column Bar 2D Series 
		columnBarSeries : {
			itemRenderer : "BoxItemRenderer",
			halfWidthOffset : 0.5
		},

		targetGoalSeries : {
			stroke : {"color":"#A6ADD7", "weight":1},
			fill : {"color":"#A6ADD7"}
		},

		// circular Gauge Common
		circularCommon : {
			frameStroke : {"color":"#E40050", "weight":10},
			frameFill : {"color":"#96EDF0"},
			needleStroke : {"color":"#F85792"},
			needleFill : {"color":"#F85792", "alpha":1},
			needleCoverFill : {"color":"#414C75"},
			needleCoverStroke : {"color":"#414C75", "weight":3},
			minorTickFill : {"color":"#FF615E"},
			minorTickStroke : {"color":"#FF615E"},
			tickFill : {"color":"#F59BCC"},
			tickStroke : {"color":"#F85792"},
			tickGap : 28,
			labelGap : -34,
			needleLengthRatio : 0.6,
			needleBackLengthRatio : 0.3,
			needleCoverRadius : 0,
			tickLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				fontSize : 14,
				color : "#454545"
			},
			valueLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				color : "#454545",
				fontSize : 14,
				borderStyle : "none",
				borderThickness : 2,
				borderColor : "#3B4B5B"
			},
			valueXOffset : 0,
			needleThickness : 15,
			hideTickLabel : "none"
		},

		// circular Gauge
		circular : {
			minimumAngle : 20,
			maximumAngle : 340,
			valueYOffset : 70
		},

		// Half circular Gauge
		halfCircular : {
			minimumAngle : 190,
			maximumAngle : 350,
			valueYOffset : -50
		},


		// VCylinder, HCylinder Gauge
		cylinderGauge : {
			cylinderColor : ["#E40050", "#F2558A", "#E40050"],
			targetMarkColor : ["#F59BBD", "#F59BBD", "#F59BBD"]
		},

		// VLinear, HLinear Gauge
		linearGauge : {
			linearBorderColor : "#F85792",
			linearColor : ["#F85792", "#F85792", "#F85792"],
			linearBgBorderColor : "#7A6959",
			linearBgColor : ["#7A6959", "#7A6959", "#7A6959"],
			linearBgAlpha : [1, 1, 1],
			targetMarkBorderColor : "#FE8011",
			targetMarkColor : ["#FE8011", "#FE8011", "#FE8011"],
			valueLabelStyleName : {
				fontSize : 13,
				color : "#ffffff",
				fontWeight : "bold"
			},
			tickColor : "#00C590",
			tickLabelStyleName : {
				fontSize : 13
			}
		}
	};
	
	// Save default styles of the lovely theme.
	lovely = KoolChart.setupTheme.lovely;

	// Set chartCommon to Normal Chart.
	themeExtend(lovely.normalChart, lovely.chartCommon);

	// Set chartCommon to Normal 3D Chart.
	themeExtend(lovely.normal3DChart, lovely.normalChart);

	// Set chartCommon to Line 2D Chart.
	themeExtend(lovely.lineChart, lovely.normalChart);

	// Set chartCommon to Area 2D Chart.
	themeExtend(lovely.areaChart, lovely.normalChart);

	// Set chartCommon to Bar 2D Chart.
	themeExtend(lovely.barChart, lovely.chartCommon);

	// Set chartCommon to Bar 3D Chart.
	themeExtend(lovely.bar3DChart, lovely.chartCommon);
	
	// Set normalChart to History Chart.
	themeExtend(lovely.historyChart, lovely.normalChart);

	// Set chartCommon to Wing Column 2D Chart.
	themeExtend(lovely.wingColumnChart, lovely.chartCommon);

	// Set wingBarChart to Wing Bar 2D Chart.
	themeExtend(lovely.wingBarChart, lovely.barChart);

	// Set circularCommon to circular Gauge.
	themeExtend(lovely.circular, lovely.circularCommon);

	// Set circularCommon to Half circular Gauge.
	themeExtend(lovely.halfCircular, lovely.circularCommon);

	// Set stroke to the series of Line Chart.
	intoProp("stroke", lovely.lineChart, lovely.defaultColors, 0.5, 4);

	// Set fill to the series of Line Chart.
	intoProp("fill", lovely.lineChart, lovely.defaultColors, 1);

	// Set declineFill to the series of Line Chart.
	intoProp("declineFill", lovely.lineChart, ["#00c0c7"], 1);

	// Set declineStroke to the series of Line Chart.
	intoProp("declineStroke", lovely.lineChart, ["#00c0c7"], 0.5, 4);

	// Set stroke to the series of Area Chart.
	intoProp("stroke", lovely.areaChart, lovely.defaultColors, 0.5, 4);

	// Set fill to the series of Area Chart.
	intoProp("fill", lovely.areaChart, lovely.defaultColors, 1, 2, true);

	// Set areaFill to the series of Area Chart.
	intoProp("areaFill", lovely.areaChart, lovely.defaultColors, 0.5, 2, true);

	// Set declineStroke to the series of Area Chart.
	intoProp("declineStroke", lovely.areaChart, ["#00c0c7"], 0.5, 4);

	// Set declineFill to the series of Area Chart.
	intoProp("declineFill", lovely.areaChart, ["#00c0c7"], 1, 2, true);

	//--------------------------------------------------------------------------------
	//
	//	Actual lovely Theme
	//
	//--------------------------------------------------------------------------------
	KoolChart.themes.lovely = {
			// default color
		defaultColors : lovely.defaultColors,

			// KoolChart 
		KoolChart : {
			paddingTop :0,
			paddingLeft : 0,
			paddingRight : 0,
			background : "url(../KoolChart/Assets/Images/theme4_bg.png)",
			border : "solid 1px #e5e5e5"
		},
		
			// Caption
		Caption : {
			backgroundColor : "#000000",
			borderRadius : 5,
			color : "#ffffff",
			width : "100%",
			height : 20,
			paddingTop : 12,
			paddingBottom : 13,
			margin : "0 auto"
		},
		
			// Axis2DRenderer - x axis, y axis
		Axis2DRenderer : {
			fontSize : 13,
			color : "#333333"
		},

		// normalChart
		Column2DChart : lovely.normalChart,
		Pie2DChart : lovely.normalChart,
		Pie3DChart : lovely.normalChart,
		Plot2DChart : lovely.normalChart,
		Combination2DChart : lovely.normalChart,
		RadarChart : lovely.normalChart,
		RealTimeChart : lovely.normalChart,
		Matrix2DChart : lovely.normalChart,
		ImageChart : lovely.normalChart,
		Candlestick2DChart : lovely.normalChart,
		CandleLine2DChart : lovely.normalChart,
		CandleArea2DChart : lovely.normalChart,

		// normal3DChart
		Column3DChart : lovely.normal3DChart,
		Combination3DChart : lovely.normal3DChart,
		Bubble3DChart : lovely.normal3DChart,
		
		// lineChart
		Line2DChart : lovely.lineChart,
		
		// areaChart
		Area2DChart : lovely.areaChart,
		
		// barChart
		Bar2DChart : lovely.barChart,
		
		// bar3DChart
		bar3DChart : lovely.bar3DChart,

		// historyChart
		HistoryChart : lovely.historyChart,

		// wingColumnChart
		Column2DWingChart : lovely.wingColumnChart,
		
		// barChart
		Bar2DWingChart : lovely.barChart,

		// circular
		CircularGauge : lovely.circular,
		
		// halfCircular
		HalfCircularGauge : lovely.halfCircular,

		// cylinderGauge
		VCylinderGauge : lovely.cylinderGauge,
		HCylinderGauge : lovely.cylinderGauge,

		// linearGauge
		VlinearGauge : lovely.linearGauge,
		HlinearGauge : lovely.linearGauge,

		// Series
		Column2DSeries : lovely.columnBarSeries,
		Bar2DSeries : lovely.columnBarSeries,
		Line2DSeries : lovely.lineSeries,
		Area2DSeries : lovely.areaSeries,

		VTarget3DGoalSeries : lovely.targetGoalSeries,
		HTarget3DGoalSeries : lovely.targetGoalSeries,

		// Elements
		GridLines : {
			direction : "none"
		}
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//		Pastel Theme
	//
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// default styles of the pastel theme
	KoolChart.setupTheme.pastel = {
		defaultColors : [
			"#C380B5","#B5DCED","#74B3CD","#655C71","#DAD4BC","#006970","#12AE98","#6CC0C0","#C5C5C5","#1F94CA","#6CABE4","#E6C1DB","#904466","#BA4D84",
			"#E86991","#ED9093","#CE7B67","#AB9B55","#B0AC5E","#DCD88C","#9168CE","#6F5AC8","#548AC8","#5CB2D5","#70D6D4","#DFDFDF","#B282B7","#DEA3E5"
		],

		// Chart Common
		chartCommon : {
			dataTipStyleName : {
				color : "#ffffff"
			},
			showDataTipTargets : false,
			dataTipBackgroundColorOnSeries : true,
			dataTipBorderColor : "#ffffff"
		},

		// Line 2D Chart
		lineChart : {
			series : [
			]
		},

		// Area 2D Chart
		areaChart : {
			series : [
			]
		},

		// Bar 2D Chart
		barChart : {
			backgroundElements : [{
				direction : "both",
				horizontalFill : {"color":"#ffffff"},
				verticalStroke : {"color":"#ececec"},
				verticalFill : {"color":"#f9f9f9", "alpha":0.5},
				horizontalStroke : {"color":"#ececec"}
			}]
		},

		// Line 2D Series
		lineSeries : {
			itemRenderer : "CircleItemRenderer"
		},

		// Area 2D Series
		areaSeries : {
			form : "segment",
			itemRenderer : "CircleItemRenderer"
		},

		// Column Bar 2D Series 
		columnBarSeries : {
			itemRenderer : "BoxItemRenderer"
		},

		// Combination Chart
		combinationChart : {
			series : [
			]
		},

		// Target Goal Series
		targetGoalSeries : {
			stroke : {"color":"#B5DCED", "weight":1},
			fill : {"color":"#B5DCED"}
		},

		// Real Time Chart
		realTimeChart : {
			series : []
		},

		// circular Common
		circularCommon : {
			frameStroke : {"color":"#B5DCED", "weight":8},
			frameFill : {"color":"#74B3CD"},
			needleStroke : {"color":"#1F94CA"},
			needleFill : {"color":"#6CABE4", "alpha":1},
			needleCoverFill : {"color":"#E86991"},
			needleCoverStroke : {"color":"#414C75", "weight":3},
			minorTickFill : {"color":"#B5DCED"},
			minorTickStroke : {"color":"#B5DCED"},
			tickFill : {"color":"#1F94CA"},
			tickStroke : {"color":"#1F94CA", "weight":1},
			tickGap : 8,
			labelGap : 14,
			needleLengthRatio : 0.6,
			needleBackLengthRatio : 0.3,
			needleCoverRadius : 0,
			tickLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				fontSize : 14,
				color : "#655C71"
			},
			valueLabelStyleName : {
				fontFamily : "arial,Malgun Gothic",
				color : "#454545",
				fontSize : 14,
				borderStyle : "none",
				borderThickness : 2,
				borderColor : "#3B4B5B"
			},
			valueXOffset : 0,
			needleThickness : 10,
			hideTickLabel : "none"
		},

		// circular Gauge
		circular : {
			minimumAngle : 30,
			maximumAngle : 330,
			valueYOffset : 100
		},

		// Half circular Gauge		
		halfCircular : {
			minimumAngle : 190,
			maximumAngle : 350,
			valueYOffset : -50
		},

		// VCylinder, HCylinder Gauge
		cylinderGauge : {
			cylinderColor : ["#B282B7", "#DEA3E5", "#B282B7"],
			targetMarkColor : ["#C380B5", "#C380B5", "#C380B5"],
			color : "#B5DCED",
			tickLabelStyleName : {
				fontSize : 12
			},
			valueLabelStyleName : {
				fontSize : 12,
				fontWeight : "bold"
			}
		},

		// VLinear, HLinear Gauge
		linearGauge : {
			linearBorderColor : "#C380B5",
			linearColor : ["#C380B5", "#C380B5", "#C380B5"],
			linearAlpha : [0.5, 0.8, 1],
			linearBgBorderColor : "#74B3CD",
			linearBgColor : ["#74B3CD", "#74B3CD", "#74B3CD"],
			targetMarkBorderColor : "#548AC8",
			targetMarkColor : ["#548AC8", "#548AC8", "#548AC8"],
			targetMarkAlpha : [0.5, 0.8, 1],
			valueLabelStyleName : {
				fontSize : 13,
				color : "#ffffff"
			},
			tickLabelStyleName : {
				fontSize : 12
			}
		}
	};
	
	// Save default styles of the pastel theme.
	pastel = KoolChart.setupTheme.pastel;

	// Set chartCommon to Line 2D Chart.
	themeExtend(pastel.lineChart, pastel.chartCommon);

	// Set chartCommon to Area 2D Chart.
	themeExtend(pastel.areaChart, pastel.chartCommon);

	// Set chartCommon to Bar 2D Chart.
	themeExtend(pastel.barChart, pastel.chartCommon);

	// Set chartCommon to Combination Chart.
	themeExtend(pastel.combinationChart, pastel.chartCommon);

	// Set circulartCommon to circular Gauge.
	themeExtend(pastel.circular, pastel.circularCommon);

	// Set circulartCommon to Half circular Guage.
	themeExtend(pastel.halfCircular, pastel.circularCommon);

	// Set stroke to the series of Line 2D Chart.
	intoProp("stroke", pastel.lineChart, pastel.defaultColors, 0.5, 4);

	// Set fill to the series of Line 2D Chart.
	intoProp("fill", pastel.lineChart, pastel.defaultColors, 1);

	// Set declineStroke to the series of Line 2D Chart.
	intoProp("declineStroke", pastel.lineChart, ["#00c0c7"], 0.5, 4);

	// Set declineFill to the series of Line 2D Chart.
	intoProp("declineFill", pastel.lineChart, ["#00c0c7"], 1);

	// Set stroke to the series of Area 2D Chart.
	intoProp("stroke", pastel.areaChart, pastel.defaultColors, 0.5, 4);

	// Set fill to the series of Area 2D Chart.
	intoProp("fill", pastel.areaChart, pastel.defaultColors, 1);

	// Set declineStroke to the series of Area 2D Chart.
	intoProp("declineStroke", pastel.areaChart, ["#00c0c7"], 0.5, 4);

	// Set declineFill to the series of Area 2D Chart.
	intoProp("declineFill", pastel.areaChart, ["#00c0c7"], 1);

	// Set fill to the series of RealTimeChart
	intoProp("fill", pastel.realTimeChart, pastel.defaultColors, 0.5);

	//--------------------------------------------------------------------------------
	//
	//	Actual pastel Theme
	//
	//--------------------------------------------------------------------------------
	KoolChart.themes.pastel = {
		// default color
		defaultColors : pastel.defaultColors,
		
		// Axis2DRenderer - x axis, y axis
		Axis2DRenderer : {
			showLine : true,
			axisStroke : {"color":"#000000", "weight":4}
		},

		// chartCommon
		Column2DChart : pastel.chartCommon,
		Column3DChart : pastel.chartCommon,
		Pie2DChart : pastel.chartCommon,
		Pie3DChart : pastel.chartCommon,
		Bubble3DChart : pastel.chartCommon,
		Plot2DChart : pastel.chartCommon,
		RadarChart : pastel.chartCommon,
		HistoryChart : pastel.chartCommon,
		Matrix2DChart : pastel.chartCommon,
		ImageChart : pastel.chartCommon,
		Column2DWingChart : pastel.chartCommon,
		Bar2DWingChart : pastel.chartCommon,
		Candlestick2DChart : pastel.chartCommon,
		CandleLine2DChart : pastel.chartCommon,
		CandleArea2DChart : pastel.chartCommon,

		// lineChart
		Line2DChart : pastel.lineChart,
		
		// areaChart
		Area2DChart : pastel.areaChart,
		
		// barChart
		Bar2DChart : pastel.barChart,
		Bar3DChart : pastel.barChart,

		// realTimeChart
		RealTimeChart : pastel.realTimeChart,

		// CombinationChart
		Combination2DChart : pastel.combinationChart,
		//Combination3DChart : pastel.combinationChart,
		Combination3DChart : pastel.chartCommon,

		VTarget3DGoalSeries : pastel.targetGoalSeries,
		HTarget3DGoalSeries : pastel.targetGoalSeries,

		// circular
		CircularGauge : pastel.circular,

		// halfCircular
		HalfCircularGauge : pastel.halfCircular,

		// cylinderGauge
		VCylinderGauge : pastel.cylinderGauge,
		HCylinderGauge : pastel.cylinderGauge,

		// linearGauge
		VlinearGauge : pastel.linearGauge,
		HlinearGauge : pastel.linearGauge,

		// Series
		Line2DSeries : pastel.lineSeries,
		Area2DSeries : pastel.areaSeries,
		Column2DSeries : pastel.columnBarSeries,
		Bar2DSeries : pastel.columnBarSeries,

		// Elements
		GridLines : {
			direction : "both",
			horizontalStroke : {"color":"#ececec"},
			horizontalFill : {"color":"#f9f9f9"},
			horizontalAlternateFill : {"color":"#ffffff"},
			verticalStroke : {"color":"#ececec"}
		}
	};
})();