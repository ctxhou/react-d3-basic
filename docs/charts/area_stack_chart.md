## Area Stack Chart Example

```js
"use strict";

var React = require('react');
var Chart = require('react-d3-core').Chart;
var AreaStackChart = require('react-d3-basic').AreaStackChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/browser.tsv')

  var parseDate = d3.time.format("%y-%b-%d").parse;
  var formatPercent = d3.format(".0%");

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Stack Area Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    interpolate = 'basis',
    chartSeries = [
      {
        field: 'IE',
        name: 'IE browser'
      },
      {
        field: 'Chrome',
        name: 'Chrome browser'
      },
      {
        field: 'Firefox'
      },
      {
        field: 'Safari',
        name: 'Safari browser'
      },
      {
        field: 'Opera',
        name: 'Opera browser'
      }
    ],
    x = function(d) {
      return parseDate(d.date);
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = d3.extent(generalChartData, function(d) { return x(d); }),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'time',
    xAxisClassName = 'x-axis',
    xLabel = "Date",
    y = function(d) {
      return d / 100;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear',
    yAxisClassName = 'y-axis';

  React.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      >
      <AreaStackChart
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
        categoricalColors= {d3.scale.category10()}
        chartSeries = {chartSeries}
        interpolate = {interpolate}
        showLegend= {showLegend}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        xDomain= {xDomain}
        xRange= {xRange}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xLabel = {xLabel}
        y= {y}
        yOrient= {yOrient}
        yRange= {yRange}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yTickFormat= {formatPercent}
      />
    </Chart>
  , document.getElementById('data_area_stack')
  )
})()
```

## Settings

### Required Settings

#### data

reference [series]()

#### x

reference [series]()

#### y

#### chartSeries

reference [series]()

### Optional Settings

#### title

- type: string

the title of the graph

#### width

- type: int

- default: `960`

the width of the graph

#### height

- type: int

- default: `500`

the height of the graph

#### xScale

- type: boolean

- default: `true`

#### yScale

- type: boolean

- default: `true`

#### y


#### margins

- type: object

- default: `{top: 80, right: 100, bottom: 80, left: 100}`

margins of the graph

#### xDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core)

#### yDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core)

- interpolate

### Show Implements

#### interpolate

please reference d3 interpolate

#### showXGrid

- type: boolean

- default: `true`

#### showYGrid

- type: boolean

- default: `true`

#### categoricalColors

reference [series]()


----

## Components

### Plotting

- AreaStack

### Core

#### Axis

- Xaxis
- Yaxis

#### Grid

- Grid

#### Legend

- legend
