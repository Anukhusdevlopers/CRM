import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import styles from "./OrganisationChart.module.css";
import { Pencil } from "lucide-react";
import { orgData } from "../../../constants";

const OrganisationChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Get container dimensions
    const containerWidth = chartRef.current.clientWidth;
    const containerHeight = chartRef.current.clientHeight;

    const width = 1200;
    const height = 800;
    const nodeWidth = 250;
    const nodeHeight = 100;

    // Clear previous chart before re-rendering
    d3.select(chartRef.current).select("svg").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    // Create a group for the entire chart content
    const g = svg.append("g");

    // Convert orgData into D3 hierarchical format
    const hierarchyData = {
      name: orgData.organization.name,
      avatar: orgData.organization.avatar,
      children: orgData.departments.map((dept) => ({
        name: dept.head.name,
        avatar: dept.head.avatar,
        title: dept.head.title,
        children: dept.employees.map((emp) => ({
          name: emp.name,
          avatar: emp.avatar,
          title: emp.title,
        })),
      })),
    };

    const root = d3.hierarchy(hierarchyData);

    // Increase vertical spacing between levels
    const treeLayout = d3
      .tree()
      .size([width - 200, height - 200])
      .nodeSize([nodeWidth + 20, nodeHeight + 80]); // Add more vertical spacing

    treeLayout(root);

    // Calculate the bounds of the tree to center it
    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;

    root.descendants().forEach((d) => {
      minX = Math.min(minX, d.x - nodeWidth / 2);
      maxX = Math.max(maxX, d.x + nodeWidth / 2);
      minY = Math.min(minY, d.y - nodeHeight / 2);
      maxY = Math.max(maxY, d.y + nodeHeight / 2);
    });

    // Calculate the center position
    const centerX = (width - (maxX - minX)) / 2 - minX;
    const centerY = (height - (maxY - minY)) / 2 - minY;

    // Set initial transform to center the chart
    g.attr("transform", `translate(${centerX},${centerY})`);

    // Draw Links with straight lines
    g.selectAll("line")
      .data(root.links())
      .enter()
      .append("line")
      .attr("class", styles.link)
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y + nodeHeight / 2)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y - nodeHeight / 2);

    // Draw Nodes
    const nodes = g
      .selectAll("g.node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr(
        "transform",
        (d) => `translate(${d.x - nodeWidth / 2},${d.y - nodeHeight / 2})`
      );

    // Add card background
    nodes
      .append("rect")
      .attr("class", styles.nodeCard)
      .attr("width", nodeWidth)
      .attr("height", nodeHeight);

    // Add Images
    // Add Images
    nodes
      .append("circle") // Add a circular mask
      .attr("cx", 40) // Center x
      .attr("cy", 40) // Center y
      .attr("r", 20) // Radius
      .attr("fill", "#ddd");

    nodes
      .append("image")
      .attr("x", 20) // Move right slightly to fit in the card
      .attr("y", 20) // Move down slightly
      .attr("width", 60) // Adjust for proper sizing
      .attr("height", 60)
      .attr("xlink:href", (d) => d.data.avatar)
      .attr("clip-path", "url(#clipCircle)"); // Use clip path

    // Add Names
    nodes
      .append("text")
      .attr("x", 100)
      .attr("y", 35)
      .attr("text-anchor", "start")
      .attr("font-size", "14px")
      .attr("fill", "#333")
      .attr("font-weight", "bold")
      .text((d) => d.data.name);

    // Add Titles
    nodes
      .append("text")
      .attr("x", 100)
      .attr("y", 55)
      .attr("text-anchor", "start")
      .attr("font-size", "12px")
      .attr("fill", "#666")
      .text((d) => d.data.title || "");

    // Add zoom behavior
    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    // Initialize with a slight zoom out to show the entire chart
    svg.call(zoom);

    // Center the chart on initial load with a small animation
    svg
      .transition()
      .duration(750)
      .call(
        zoom.transform,
        d3.zoomIdentity.translate(width / 2, height / 4).scale(0.8)
      );
  }, [orgData]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Organization Chart</h1>
        <button className={styles.editButton}>
          <span className={styles.editIcon}>
            <Pencil size={16} />
          </span>
          Edit Organization
        </button>
      </div>
      <div className={styles.chartContainer} ref={chartRef}></div>
    </div>
  );
};

export default OrganisationChart;
