import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import * as d3 from 'd3';
import DepositBitcoin from '../assets/svg/DepositBitcoin'; // ← import your provided Bitcoin SVG

/**
 * Example dynamic chart data:
 * Replace with your own data fetching or props.
 */
const sampleData = [10, 30, 25, 40, 60, 50, 80, 75, 90, 65];

const DepositCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // We'll build a small, dynamic line chart in a 215×61 area using D3.

    // 1. Select the SVG and define dimensions
    const width = 215;
    const height = 61.13;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };

    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    // 2. Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, sampleData.length - 1]) // data index range
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(sampleData) || 100]) // max of data
      .range([height - margin.bottom, margin.top]);

    // 3. Generate the line path
    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCatmullRom.alpha(0.5)); // for a smooth curve

    // If you want a gradient fill under the line, you can define an <defs> here:
    const defs = svg.append('defs');
    const gradient = defs
      .append('linearGradient')
      .attr('id', 'line-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#FFC68A');
    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'rgba(255,198,138,0)');

    // 4. Append path (the line) and animate
    const path = svg
      .append('path')
      .datum(sampleData)
      .attr('fill', 'none')
      .attr('stroke', '#FFC68A') // or use a gradient stroke
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

    // For a line-draw animation:
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', totalLength)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // 5. Optional: If you want a light grid (like your dashed lines),
    // you can add them programmatically. For brevity, here's a horizontal grid example:
    const gridLines = d3
      .axisLeft(yScale)
      .ticks(3)
      .tickSize(-width + margin.left + margin.right)
      .tickFormat(() => '');

    svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(gridLines)
      .selectAll('line')
      .attr('stroke', '#DDDDDD')
      .attr('stroke-dasharray', '3,3');

    // Remove the axis path, so it just shows lines
    svg.selectAll('.domain').remove();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        // width: 239,
        // height: 234,
        left: 9,
        top: 58,
      }}
    >
      {/* Shadow group */}
      <Box
        sx={{
          position: 'absolute',
          width: 239,
          height: 234,
          left: 0,
          top: 0,
          filter: 'drop-shadow(0px 4px 64px rgba(16, 24, 40, 0.12))',
          borderRadius: '22px',
        }}
      >
        {/* Union (main white rect) */}
        <Box
          sx={{
            position: 'absolute',
            width: 239,
            height: 234,
            // background: '#FFFFFF',
            borderRadius: '22px',
          }}
        />
        {/* Rectangle 15 */}
        <Box
          sx={{
            position: 'absolute',
            width: 239,
            height: 154,
            left: 0,
            top: 138,
            background: '#FFFFFF',
          }}
        />
        {/* Rectangle 16 */}
        <Box
          sx={{
            position: 'absolute',
            width: 80,
            height: 154,
            left: 0,
            top: 0,
            background: '#FFFFFF',
          }}
        />
      </Box>

      {/* Content (chart + text) */}
      <Box
        sx={{
          position: 'absolute',
          left: 21,
          top: 150.71,
          width: 215,
          height: 120,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '14px',
        }}
      >
        {/* The dynamic chart area */}
        <Box sx={{ position: 'relative', width: 215, height: 61.59 }}>
          <svg
            ref={chartRef}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </Box>

        {/* Body text */}
        <Typography
          variant="body2"
          sx={{
            width: '215px',
            fontFamily: 'Satoshi',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '130%',
            color: '#75797E',
          }}
        >
          Deposit your Bitcoin securely into xstake to start earning rewards.
        </Typography>
      </Box>

      {/* DepositBitcoin SVG in the top-left */}
      <Box
        sx={{
          position: 'absolute',
          width: 68,
          height: 64,
          left: 17,
          top: 66,
        }}
      >
        <DepositBitcoin />
      </Box>
    </Box>
  );
};

export default DepositCard;
