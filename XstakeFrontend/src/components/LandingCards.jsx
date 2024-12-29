import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Box, Typography } from '@mui/material';

// --- Your SVG imports (adjust paths as needed) ---
import DepositBitcoin from '../assets/svg/DepositBitcoin';
import XBTC from '../assets/svg/XBTC_rounded';
import Defi from '../assets/svg/Defi_Mobile';
// If these are custom components you created:
import SwitchIllustration from './SwitchIllustration';
import InDefiLogos from './InDefiLogos';

const sampleData = [10, 30, 25, 40, 60, 50, 80, 75, 90, 65];

export default function LandingCards() {
  // Use a ref for the D3 chart in the first card
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const width = 236;
    const height = 62;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };

    // 1. Select the SVG
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

    // 3. Gradient for the area fill
    svg.selectAll('defs').remove(); // clear old defs to avoid duplicates
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
      .y0(() => yScale(0))
      .y1((d) => yScale(d))
      .curve(d3.curveCatmullRom.alpha(0.5));

    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveCatmullRom.alpha(0.5));

    // 5. Append the area
    svg
      .append('path')
      .datum(sampleData)
      .attr('fill', 'url(#line-gradient)')
      .attr('stroke', 'none')
      .attr('d', areaGenerator);

    // 6. Append the line path
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

    const grid = svg
      .append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(gridLines);

    grid
      .selectAll('line')
      .attr('stroke', '#DDDDDD')
      .attr('stroke-dasharray', '3,3');

    grid.selectAll('.domain').remove();
  }, []);

  return (
    <Box
      sx={{
        // Container matches the Figma total size
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '50px',
        position: 'relative',
        width: '342px',
        height: '620px',
        isolation: 'isolate',

        // Just for demo (remove if unwanted)
        // border: '1px solid lightgray',
        padding: '16px',
      }}
    >
      {/* ---------------------- Card #1: DEPOSIT BITCOIN ---------------------- */}
      <Box
        sx={{
          width: '342px',
          height: '196px',
          position: 'relative',
          filter: 'drop-shadow(0px 4px 64px rgba(16, 24, 40, 0.12))',
        }}
      >
        {/* The big white union shape */}
        <Box
          sx={{
            position: 'absolute',
            width: '2px',
            height: '500px',
            left: 30,
            top: 0,
            background: '#CFCFCF',
            // borderRadius: '24px',
          }}
        />
        {/* <Box
          sx={{
            position: 'absolute',
            width: '342px',
            height: '196px',
            left: 0,
            top: 0,
            background: '#FFFFFF',
            borderRadius: '24px',
          }}
        /> */}
        {/* Rectangle 15 */}
        <Box
          sx={{
            position: 'absolute',
            width: '260px',
            height: '196px',
            left: 72,
            top: 0,
            background: '#FFFFFF',
            borderRadius: '22px',
          }}
        />
        {/* Rectangle 16 (rotated) */}
        <Box
          sx={{
            position: 'absolute',
            width: '80px',
            height: '154px',
            left: -10,
            top: '80px',
            background: '#FFFFFF',
            borderRadius: '22px',

            transform: 'rotate(-90deg)',
            transformOrigin: 'left top',
          }}
        />
        {/* Bitcoin Icon (top-left corner) */}
        <Box
          sx={{
            position: 'absolute',
            width: 64,
            height: 64,
            left: -2,
            top: '8px',
          }}
        >
          <DepositBitcoin />
        </Box>
        {/* Content area */}
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
            width: '236px',
            height: '171.6px',
            left: 84,
            top: '12px',
          }}
        >
          {/* Title + text */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: '25px',
                fontWeight: 500,
                lineHeight: '120%',
                color: '#2D3239',
              }}
            >
              Deposit Bitcoin
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '130%',
                color: '#75797E',
              }}
            >
              Deposit your Bitcoin securely into xstake to start earning
              rewards.
            </Typography>
          </Box>

          {/* Chart container */}
          <Box
            sx={{
              position: 'relative',
              width: '236px',
              height: '67.6px',
            }}
          >
            <svg
              ref={chartRef}
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
        </Box>
      </Box>

      {/* ---------------------- Card #2: GET XBTC ---------------------- */}
      <Box
        sx={{
          width: '342px',
          height: '196px',
          position: 'relative',
          filter: 'drop-shadow(0px 4px 64px rgba(16, 24, 40, 0.12))',
        }}
      >
        {/* The big white union shape */}
        {/* <Box
          sx={{
            position: 'absolute',
            width: '342px',
            height: '196px',
            background: '#FFFFFF',
            borderRadius: '24px',
          }}
        /> */}
        {/* Rectangle 15 */}
        <Box
          sx={{
            position: 'absolute',
            width: '260px',
            height: '196px',
            left: 72,
            top: 0,
            background: '#FFFFFF',
            borderRadius: '22px',
          }}
        />
        {/* Rectangle 16 (rotated) */}
        <Box
          sx={{
            position: 'absolute',
            width: '80px',
            height: '154px',
            left: -10,
            top: 80,
            background: '#FFFFFF',
            transform: 'rotate(-90deg)',
            transformOrigin: 'left top',
            borderRadius: '22px',
          }}
        />
        {/* XBTC icon (top-left corner) */}
        <Box
          sx={{
            position: 'absolute',
            left: '-18px',
            top: '-8px',
            width: 64,
            height: 64,
          }}
        >
          <XBTC />
        </Box>
        {/* Content area */}
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '236px',
            height: '165px',
            left: '84px',
            top: '12px',
          }}
        >
          {/* Title + text */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '236px',
              height: '80px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: '25px',
                fontWeight: 500,
                color: '#2D3239',
                lineHeight: '120%',
              }}
            >
              Get xBTC
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '130%',
                color: '#75797E',
              }}
            >
              Instantly get liquid tokens representing your staked Bitcoin.
            </Typography>
          </Box>

          {/* SwitchIllustration (placeholder for your custom graphic) */}
          <SwitchIllustration
            sx={{
              /* Frame 73 container */
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '8px',
              // gap: '5px',
              position: 'relative',
              //   left: 'calc(50% - 190px/2)',
              //   top: 'calc(50% - 60px/2 )',
              background:
                'linear-gradient(180deg, rgba(254, 254, 254, 0.3) 0%, rgba(255, 255, 255, 0.6) 100%)', // Gradient
              // backdropFilter: 'blur(56px)', // Background blur
              // WebkitBackdropFilter: 'blur(56px)', // Safari compatibility
              boxShadow: '0 0 56px rgba(0, 0, 0, 0.1)', // Adjust blur effect with alpha
              borderRadius: '188px',
              width: 'fit-content', // Adjust based on content
              height: 'fit-content', // Adjust based on content
              border: '0.52px solid rgba(221, 221, 221, 1)', // Border properties
              // padding: '10px', // Add padding if needed
            }}
          />
        </Box>
      </Box>

      {/* ---------------------- Card #3: USE IN DEFI ---------------------- */}
      <Box
        sx={{
          width: '342px',
          height: '196px',
          position: 'relative',
          filter: 'drop-shadow(0px 4px 64px rgba(16, 24, 40, 0.12))',
        }}
      >
        {/* The big white union shape */}
        {/* <Box
          sx={{
            position: 'absolute',
            width: '342px',
            height: '196px',
            background: '#FFFFFF',
            borderRadius: '24px',
          }}
        /> */}
        {/* Rectangle 15 */}
        <Box
          sx={{
            position: 'absolute',
            width: '260px',
            height: '196px',
            left: '72px',
            top: 0,
            background: '#FFFFFF',
            borderRadius: '22px',
          }}
        />
        {/* Rectangle 16 (rotated) */}
        <Box
          sx={{
            position: 'absolute',
            width: '80px',
            height: '154px',
            left: -10,
            top: '80px',
            background: '#FFFFFF',
            transform: 'rotate(-90deg)',
            transformOrigin: 'left top',
            borderRadius: '22px',
          }}
        />
        {/* DeFi icon (top-left corner) */}
        <Box
          sx={{
            position: 'absolute',
            left: '-2px',
            top: '8px',
            width: 64,
            height: 64,
          }}
        >
          <Defi />
        </Box>
        {/* Content area */}
        <Box
          sx={{
            position: 'absolute',
            // display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '236px',
            height: '165px',
            left: '84px',
            top: '12px',
          }}
        >
          {/* Title + text */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              width: '236px',
              height: '80px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: '25px',
                fontWeight: 500,
                lineHeight: '120%',
                color: '#2D3239',
              }}
            >
              Use in DeFi
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '130%',
                color: '#75797E',
              }}
            >
              Maximize your yield by using your tokens in the DeFi ecosystem.
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              //   // display: 'flex',
              //   flexDirection: 'column',
              //   alignItems: 'center',
              //   gap: '24px',
              //   width: '236px',
              //   height: '165px',
              left: -25,
              //   top: '12px',
            }}
          >
            {/* InDefiLogos (e.g. row of DeFi logos) */}
            <InDefiLogos />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
