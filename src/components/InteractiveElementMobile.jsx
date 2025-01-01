import React, { useRef, useEffect } from 'react';
import { DepositBitcoin } from '../utils/SvgApp'; // import your Bitcoin SVG
import { Box, Typography } from '@mui/material';
import * as d3 from 'd3';

const sampleData = [10, 30, 25, 40, 60, 50, 80, 75, 90, 65];

export default function BitcoinStakeCard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const width = 215;
    const height = 61.13;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };

    // 1. Select the SVG and set dimensions
    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height);

    // 2. Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, sampleData.length - 1])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(sampleData) || 100])
      .range([height - margin.bottom, margin.top]);

    // 3. Create the defs/gradient for our area fill
    const defs = svg.append('defs');
    const gradient = defs
      .append('linearGradient')
      .attr('id', 'line-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#FFC68A')
      .attr('stop-opacity', 0.5);

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'rgba(255,198,138,0)');

    // 4. Define area and line generators
    const areaGenerator = d3
      .area()
      .x((d, i) => xScale(i))
      .y0(() => yScale(0)) // baseline of the area (the bottom)
      .y1((d) => yScale(d)) // top of the area
      .curve(d3.curveCatmullRom.alpha(0.5));

    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCatmullRom.alpha(0.5));

    // 5. Append the area path (behind the line)
    svg
      .append('path')
      .datum(sampleData)
      .attr('fill', 'url(#line-gradient)') // use our gradient
      .attr('stroke', 'none')
      .attr('d', areaGenerator);

    // 6. Append the line path on top
    const path = svg
      .append('path')
      .datum(sampleData)
      .attr('fill', 'none')
      .attr('stroke', '#FFC68A')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

    // 7. Line “draw” animation
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', totalLength)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // 8. Optional: grid lines
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

    svg.selectAll('.domain').remove();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        filter: 'drop-shadow(0px 4px 64px rgba(16, 24, 40, 0.12))',
      }}
    >
      {/* Rectangle 15 */}
      <Box
        sx={{
          position: 'absolute',
          width: '239px',
          height: '154px',
          left: '-24px',
          top: '-19px', //          top: '-95px',66
          background: '#FFFFFF',
          borderWidth: '1px',
          borderRadius: '22px',
        }}
      />
      {/* Rectangle 16 */}
      <Box
        sx={{
          position: 'absolute',
          width: '80px',
          height: '154px',
          left: '-24px',
          top: '-103px',
          //   left: '-5px',
          //   top: '-110px',
          background: '#FFFFFF',
          borderRadius: '22px',
        }}
      />

      {/* Content area (graph + text) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'absolute',
          width: '215px',
          height: '119.59px',
          left: '-13px',
          top: '0px',
          gap: '24px',
          borderRadius: '22px',
        }}
      >
        {/* The dynamic chart area */}
        <Box sx={{ position: 'relative', width: 215, height: 61.59 }}>
          <svg
            ref={chartRef}
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            width: '215px',
            height: '34px',
            fontFamily: 'Satoshi, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '130%',
            color: '#75797E',
          }}
        >
          Deposit your Bitcoin securely into xstake to start earning rewards.
        </Typography>
      </Box>

      {/* The Bitcoin SVG */}
      <Box
        sx={{
          position: 'absolute',
          width: '68px',
          height: '64px',
          left: '-16px',
          top: '-93px',
        }}
      >
        <DepositBitcoin />
      </Box>
    </Box>
  );
}
