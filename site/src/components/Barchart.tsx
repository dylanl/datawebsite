import * as d3 from "d3"
import React, { useRef, useEffect } from "react"

type Props<T> = {
  data: Array<T>
}

// TODO: style the chart and tooltip to be consistent with the rest of the site
function Barchart({ data }: Props<number>) {
  const containerRef = useRef<HTMLDivElement>()
  const tooltipRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const div = d3
      .create("div")
      .style("font", "10px sans-serif")
      .style("color", "white")

    const height = 200,
      width = 720

    let dynamicColor

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height])

    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, data.length))
      .range([0, width])

    const colors = d3
      .scaleLinear()
      .domain([0, data.length * 0.33, data.length * 0.66, data.length])
      .range(["#d6e9c6", "#bce8f1", "#faebcc", "#ebccd1"])

    div
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background", "#bce8f1")
      .selectAll("rect")
      .data(data.sort((a, b) => a - b))
      .enter()
      .append("rect")
      .style("fill", (data, i) => {
        if (data > 300) {
          return "#ff0000"
        } else if (data > 200) {
          return "#ffff00"
        } else if (data > 100) {
          return "#00ff00"
        } else {
          return colors(i)
        }
      })
      .style("stroke", "#31708f")
      .style("stroke-width", "5")
      .attr("width", xScale.bandwidth())
      .attr("height", function (data) {
        return yScale(data)
      })
      .attr("x", (data, i) => {
        return xScale(i)
      })
      .attr("y", (data) => {
        return height - yScale(data)
      })
      .on("mouseover", function (event) {
        dynamicColor = this.style.fill
        d3.select(this).style("fill", "#3c763d")
        d3.select(tooltipRef.current)
          .transition()
          .duration(200)
          .style("opacity", 1)
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px")
          .text(event.target.__data__)
      })
      .on("mouseout", function () {
        d3.select(this).style("fill", dynamicColor)
      })

    containerRef.current.appendChild(div.node())
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className="flex items-center justify-center"
      ></div>
      <div
        className="opacity-0 absolute w-16 h-8 p-1 font-sans text-sm bg-blue-200 border-0 rounded-md
        pointer-events-none text-center"
        ref={tooltipRef}
      ></div>
    </>
  )
}

export default Barchart
