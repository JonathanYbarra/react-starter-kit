import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    grey: {
      50: string;
    };
  }
}

const theme = createTheme(
  {
    typography: {
      fontFamily: ['Encode Sans'].join(','),
      h1: {
        fontSize: '2rem',
        fontWeight: 500,
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: '#8A2BE2',
      },
      secondary: {
        main: '#f32f4d',
        light: '#e0e0e0',
      },
      grey: {
        50: '#fafafa',
      },
    },
  },
);

export default theme;
