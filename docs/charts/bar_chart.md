# Bar Chart Example

Bar chart combines the `components/bar` and `x, y -axis`.


## Required Props

### data

- type: `array of object`

each object has same key

example:

    [{
      "date": "04/23/12",
      "Group1": "-20",
      "Group2": "12",
      "Group3": "46"
    }, {
      "date": "04/24/12",
      "Group1": "32",
      "Group2": "-20",
      "Group3": "24"
    }]



#### x

- type: `function`

parsed data function

#### chartSeries

- type: `array of object`
- field: `required`, define the data field
- name: `optional`, the show name of this data. default is the same with field.
- color: `optional`, show categorical color

example:

    [{
      field: "Group1",
      name: "Group 1",
      color: "red"
    },
    {
      field: "Group2",
      name: "Group 2",
      color: "black"
    }]


## Appearance Props (optional)

### title

- type: string

the title of the graph

### width

- type: int
- default: `960`

the width of the graph

### height

- type: int
- default: `500`

the height of the graph


### margins

- type: object
- default: `{top: 80, right: 100, bottom: 80, left: 100}`

margins of the graph

### id

- type: stirng

- default : `null`

## X axis props (optional)

### xDomain

### xRangeRoundBands

### xScale

- type: boolean
- default: `true`


### xOrient

### xTickOrient

### xLabel

## Y axis props (optional)

### y

- type: function

- default: `y: (d) => {return +d;}`


### yOrient

### yRange

### yDomain

### yScale

- type: boolean
- default: `true`

### yTickOrient

### yTicks

### yLabel

### yLabelPosition



## Show Props (optional)

### interpolate

please reference d3 interpolate

### showXGrid

- type: boolean
- default: `true`

### showYGrid

- type: boolean
- default: `true`

### categoricalColors

- default:  `d3.scale.category10()`

you must send one of the d3 categorical colors. [reference](https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors)

## Class Props (optional)

### svgClassName

- type: string
- default: `null`

### titleClassName

- type: string
- default: `null`

### yAxisClassName

- type: string
- default: `null`

### xAxisClassName

- type: string
- default: `null`

### legendClassName

- type: string
- default: `null`





## Example code



``` js
"use strict";

var React = require('react');
var Chart = require('react-d3-core').Chart;
var BarChart = require('react-d3-basic').BarChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv')

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Bar Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    legendPosition = "right",
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map(function(d) { return d.letter; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xAxisClassName = 'x-axis',
    xLabel = "Letter",
    xLabelPosition = 'bottom',
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [0, +d3.max(generalChartData, function(d) { return d.frequency; })],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Frequency",
    yTicks = [10, "%"],
    yLabelPosition = 'left';

  React.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      >
      <BarChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        id= {id}
        margins= {margins}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
        yAxisClassName= {yAxisClassName}
        xAxisClassName= {xAxisClassName}
        legendClassName= {legendClassName}
        legendPosition= {legendPosition}
        categoricalColors= {d3.scale.category10()}
        chartSeries = {chartSeries}
        showLegend= {showLegend}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xLabel = {xLabel}
        y= {y}
        yOrient= {yOrient}
        yRange= {yRange}
        yDomain= {yDomain}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yTicks= {yTicks}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_bar')
  )
})()
```

