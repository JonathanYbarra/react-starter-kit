import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { UI_THEME_KEYS } from '../app/utils/constants';
import { getLocalStorage } from '../utils';
import { colorSchemes, typography, components } from './tokens';

const getDesignTokens = (mode: PaletteMode) => ({
  typography,
  components,
  palette: {
    mode,
    ...colorSchemes(mode)
  },
});

export const getTheme = (initialMode: PaletteMode) => {
  const storedMode: PaletteMode = getLocalStorage(UI_THEME_KEYS.LOCALSTORAGE)
  const mode = storedMode || initialMode;

  return createTheme(getDesignTokens(mode));
};
