import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { UI_THEME_KEYS } from '../app/utils/constants';
import { getLocalStorage } from '../utils';
import { colorSchemes } from './tokens';

const getDesignTokens = (mode: PaletteMode) => ({
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
    mode,
    ...colorSchemes
  },
});

export const getTheme = (initialMode: PaletteMode) => {
  const storedMode: PaletteMode = getLocalStorage(UI_THEME_KEYS.LOCALSTORAGE)
  const mode = storedMode || initialMode;

  return createTheme(getDesignTokens(mode));
};
