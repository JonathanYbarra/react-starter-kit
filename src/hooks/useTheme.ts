import { useState, useEffect } from 'react'
import { getLocalStorage, saveLocalStorage } from '../utils';
import { DARK, LIGHT, UI_THEME_KEYS } from '../app/utils';
import { PaletteMode } from '@mui/material';

export const useTheme = () => {
    const [theme, setTheme] = useState<PaletteMode>(LIGHT);
    const [labelTheme, setLabelTheme] = useState<string>(UI_THEME_KEYS.LABEL_LIGHT);
    const [checkedTheme, setCheckedTheme] = useState(false);

    useEffect(() => {
        const storedTheme = getLocalStorage(UI_THEME_KEYS.LOCALSTORAGE);
        if (storedTheme) {
            setTheme(storedTheme)
            setCheckedTheme(storedTheme === DARK);
            setLabelTheme(storedTheme === DARK ? UI_THEME_KEYS.LABEL_DARK : UI_THEME_KEYS.LABEL_LIGHT);
        }
    }, []);

    const toggleTheme = (isDark: boolean) => {
        const uiMode = isDark ? DARK : LIGHT;
        
        setTheme(uiMode);
        setCheckedTheme(isDark);
        saveLocalStorage(UI_THEME_KEYS.LOCALSTORAGE, uiMode)
        setLabelTheme(isDark ? UI_THEME_KEYS.LABEL_DARK : UI_THEME_KEYS.LABEL_LIGHT);
    }

    return {
        themeMode: theme,
        toggleTheme,
        checkedTheme,
        labelTheme
    }
}
