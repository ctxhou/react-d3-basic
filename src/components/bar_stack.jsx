"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class BarStack extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    barOpacity: 0.8,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  componentDidMount () {
    const {
      height,
      margins,
      dataset,
      barClass,
      barOpacity,
      xScaleSet,
      yScaleSet,
      x1,
      stackVal,
      onMouseOver,
      onMouseOut
    } = this.props;

    // make areas
    var chart = d3.select(React.findDOMNode(this.refs.barGroup))
      .datum(dataset)
      .attr("class", "g")

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("width", xScaleSet.rangeBand())
      .attr("x", (d) => { return xScaleSet(d.x); })
      .attr("y", (d, i) => {
        return yScaleSet(stackVal[d.x].y0 + stackVal[d.x].y)
      })
      .attr("height", (d, i) => {
        return height - margins.top - margins.bottom - yScaleSet(stackVal[d.x].y);
      })
      .style("fill", (d) => { return dataset.color; })
      .style("fill-opacity", barOpacity)
      // not using ES6 fat arrow syntax, cause it will cause 'this' variable not passing issue see details in here:
      // https://github.com/mbostock/d3/issues/2246
      .on("mouseover", function(d) { return onMouseOver(d, this); })
      .on("mouseout", function(d) { return onMouseOut(d, this, barOpacity); })


  }

  render() {
    return (
      <g
        ref= "barGroup"
        >

      </g>
    )
  }
}
