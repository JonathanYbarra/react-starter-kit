import { createContext, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { getTheme } from './theme.config';
import { useTheme } from '../hooks';
import { BuildThemePros, ThemeContextType } from './theme.types';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const Theme = ({ children }: BuildThemePros) => {
    const { themeMode, toggleTheme, checkedTheme } = useTheme();
    const theme = getTheme(themeMode);

    const contextValue: ThemeContextType = {
        toggleTheme,
        checkedTheme
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const { toggleTheme, checkedTheme } = useContext(ThemeContext)!;
    return { toggleTheme, checkedTheme };
}
