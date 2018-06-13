
// Set the value of KoolOnLoadCallFunction to the name of a JS function (e.g. chartReadyHandler) that is called when the chart is ready to be created.
var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";
 
// Create a chart.
// Parameters:
// 1. Chart Identifier (You can use any name you like.)
// 2. <div> Identifier (The <div> where the chart is created.)
// 3. Variables used for creating the chart (chartVars)
// 4. Chart Width (default: 100%)
// 5. Chart Height (default: 100%)
KoolChart.create("chart1", "chartHolder", chartVars, "100%", "100%");
 
// The JavaScript function that is set to the value of KoolOnLoadCallFunction.
// This function calls the two functions, setLayout() and setData().
// The two functions (setLayout() and setData()) set the layout and data on the chart.
// Parameters: id - The chart identifier that is used as the first parameter of KoolChart.create().
function chartReadyHandler(id) {
 document.getElementById(id).setLayout(layoutStr);
   document.getElementById(id).setData(chartData);
}
 
// Use a string variable for Layout.
var layoutStr = 
                '<KoolChart backgroundColor="#FFFFFF"  borderStyle="none">'
                   +'<Options>'
                      +'<Caption text="World Top 10 - Fastest Growing Economies (2017)" />'
                     +'<SubCaption text="GDP Growth (In %)" textAlign="center" />'
                 +'</Options>'
                 +'<SeriesInterpolate id="ss"/>'
                   +'<Column2DChart showDataTips="true" selectionMode="multiple" columnWidthRatio="0.48">'
                       +'<horizontalAxis>'
                           +'<CategoryAxis categoryField="Country"/>'
                        +'</horizontalAxis>'
                      +'<verticalAxis>'
                         +'<LinearAxis maximum="100" interval="10"/>'
                      +'</verticalAxis>'
                        +'<series>'
                           +'<Column2DSeries labelPosition="outside" yField="GDP" displayName="GDP Growth (In %)" showDataEffect="{ss}" showValueLabels="[4]">'
                          +'</Column2DSeries>'
                      +'</series>'
                  +'</Column2DChart>'
               +'</KoolChart>';
 
// Use an array variable for Dataset.
var chartData = [{"Country":"South Sudan", "GDP":20}, {"Country":"Libya", "GDP":30},
              {"Country":"Sierra Leone", "GDP":51.2},
                {"Country":"Mongolia", "GDP":44.5},
             {"Country":"Paraguay", "GDP":62.35},
                {"Country":"Timor Leste", "GDP":84.46}, {"Country":"Iraq", "GDP":48.9},
             {"Country":"Panama", "GDP":38},
             {"Country":"Gambia", "GDP":60.5},
               {"Country":"Mozam-bique", "GDP":40.1}]
 
/**
 * If you want to use themes provided with KoolChart version 3.0 or later, call the following functions.
 * otherwise, comment out or delete the following functions.
 *
 * -- The Themes registered in KoolChart.themes --
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * -------------------------------------------------
 *
 * The KoolChart.themes variable is defined in theme.js
 */
KoolChart.registerTheme(KoolChart.themes);
 
/**
 * The function called when the theme button in the sample HTML is clicked.
 * Parameter Values:
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * - default
 *
 * default: Applies the default theme which is the basic design of KoolChart.
 */
function KoolChartChangeTheme(theme){
 document.getElementById("chart1").setTheme(theme);
}
 
// ----------------------- The end of the configuration for creating a chart. -----------------------