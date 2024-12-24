import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export function D3GradientGraph() {
  // Fix: properly typed ref for an SVG element (or null before mount)
  const svgRef = (useRef < SVGSVGElement) | (null > null);

  useEffect(() => {
    // Select the SVG using D3
    const svg = d3.select(svgRef.current);

    // Clear any previously drawn elements (helpful when the component re-renders)
    svg.selectAll('*').remove();

    const width = 215;
    const height = 61.59;

    // 1) Define gradient <defs> for the two gradients
    const defs = svg.append('defs');

    // Gradient #1
    defs
      .append('linearGradient')
      .attr('id', 'gradient1')
      .attr('gradientTransform', 'rotate(197)')
      .selectAll('stop')
      .data([
        { offset: '16.05%', color: '#FFC68A' },
        { offset: '92.88%', color: 'rgba(255, 198, 138, 0)' },
      ])
      .enter()
      .append('stop')
      .attr('offset', (d) => d.offset)
      .attr('stop-color', (d) => d.color);

    // Gradient #2
    defs
      .append('linearGradient')
      .attr('id', 'gradient2')
      .attr('gradientTransform', 'rotate(234)')
      .selectAll('stop')
      .data([
        { offset: '22.26%', color: '#FFC68A' },
        { offset: '73.34%', color: 'rgba(255, 198, 138, 0)' },
      ])
      .enter()
      .append('stop')
      .attr('offset', (d) => d.offset)
      .attr('stop-color', (d) => d.color);

    // 2) Draw the two overlapping gradient rectangles
    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'url(#gradient1)');

    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'url(#gradient2)');

    // 3) Draw dashed vertical lines (Line 1..6)
    const dashedPositions = [22.4, 58.23, 94.06, 129.9, 165.73, 201.56];

    dashedPositions.forEach((pos) => {
      svg
        .append('line')
        .attr('x1', pos)
        .attr('y1', height)
        .attr('x2', pos)
        .attr('y2', 0)
        .attr('stroke', '#DDDDDD')
        .attr('stroke-width', 1.12)
        .attr('stroke-dasharray', '3,2');
    });
  }, []);

  return (
    // If you want a fixed-size SVG, use width & height as numeric attributes:
    <svg
      ref={svgRef}
      width={215}
      height={61.59}
      style={{
        position: 'relative',
        left: 0,
        top: 0,
        overflow: 'visible',
      }}
    />

    // For a more "responsive" SVG, you could instead do:
    /*
    <svg
      ref={svgRef}
      viewBox="0 0 215 61.59"
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        overflow: 'visible',
      }}
    />
    */
  );
}
