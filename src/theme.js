// theme.js
import { createTheme } from '@mui/material/styles';

// For reference, here’s an example MUI shadows array with 25 indexes.
// The default MUI shadow array is 25 items. We can override them if needed.
// Each index is used by MUI for different elevations.
// (E.g., `<Paper elevation={2} />` picks shadows[2].)
const customShadows = [
  'none', // 0
  '0px 4px 12px rgba(16, 24, 40, 0.12)', // 1
  '0px 4px 16px rgba(16, 24, 40, 0.12)', // 2
  '0px 4px 24px rgba(16, 24, 40, 0.12)', // 3
  '0px 4px 32px rgba(16, 24, 40, 0.12)', // 4
  '0px 4px 48px rgba(16, 24, 40, 0.12)', // 5
  // Continue repeating or vary as needed up to index[24]...
  ...Array(19).fill('0px 4px 64px rgba(16, 24, 40, 0.12)'),
];

const theme = createTheme({
  palette: {
    common: {
      black: '#181928',
      white: '#FEFEFE',
    },
    primary: {
      main: '#161724', // dark button background
    },
    secondary: {
      main: '#6147EC', // example accent
    },
    text: {
      primary: '#2D3239', // default text color
      secondary: '#75797E', // muted text color
      disabled: '#A0A3A7', // optional
    },
    background: {
      default: '#F7F7F7', // overall background
      paper: '#FEFEFE', // typical card backgrounds
    },
    divider: '#DDDDDD',
  },
  // Use our custom shadow list:
  shadows: customShadows,

  typography: {
    title: {
      fontSize: '42px', // Default for small screens (sm)
      '@media (min-width:600px)': {
        fontSize: '61px', // Medium screens (md)
      },
      '@media (min-width:1200px)': {
        fontSize: '76px', // Large screens (lg)
      },
    },

    // Example: Satoshi for everything
    fontFamily: ['Satoshi', 'sans-serif'].join(','),

    // Larger "Display/Medium" ~76px from your doc
    // You can create a custom variant if you like, e.g. displayMedium
    displayMedium: {
      fontFamily: 'Satoshi',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '76px',
      lineHeight: '120%',
      color: '#2D3239',
    },
    // Or integrate into MUI’s h1/h2/h3:
    h1: {
      fontWeight: 500,
      fontSize: '76px',
      lineHeight: '120%',
      color: '#2D3239',
    },
    h2: {
      fontWeight: 500,
      fontSize: '49px',
      lineHeight: '120%',
      color: '#2D3239',
    },
    h3: {
      fontWeight: 500,
      fontSize: '39px',
      lineHeight: '120%',
      color: '#2D3239',
    },
    h4: {
      fontWeight: 500,
      fontSize: '31px',
      lineHeight: '120%',
      color: '#2D3239',
    },
    h5: {
      fontWeight: 400,
      fontSize: '25px',
      lineHeight: '120%',
      color: '#2D3239',
    },
    // Body text
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '130%',
      color: '#75797E', // “Body 1/Regular”
    },
    body2: {
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '130%',
      color: '#75797E',
    },
    // Subtitle(s) for button text, etc.
    subtitle1: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '120%',
      color: '#FEFEFE',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '25px',
      lineHeight: '120%',
      color: '#FEFEFE',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 32, // large rounding by default, matching your ~32px references
  },
  components: {
    // Example: override the default MUI Button to have pill shape & no uppercase
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          textTransform: 'none', // no uppercase
          fontWeight: 500,
        },
        // You can override color=primary, size=large, etc. as needed:
        containedPrimary: {
          backgroundColor: '#161724',
          ':hover': {
            backgroundColor: '#2D3239', // or some lighten/darken
          },
        },
      },
    },

    // Example: override MUI Paper or Card with default radius & custom shadow
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          backgroundColor: '#FEFEFE',
          // By default, MUI Paper uses elevation=1 => shadows[1].
          // If you want to override that:
          boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.12)',
        },
      },
    },

    // Example: override the Input / TextField style for your “outlined” or “filled” references.
    // If you have unique gradient backgrounds or border styles, you can add them here:
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          // If referencing your doc "border: 1px solid #6147EC" for a special state:
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6147EC',
          },
        },
      },
    },
  },
});

export default theme;
