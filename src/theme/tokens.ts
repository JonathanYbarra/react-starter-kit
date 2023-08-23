import { DARK } from "../app/utils"

export const colors = {
    gray: {
        100: '#F6F6F6',
        200: '#EDEDED',
        300: '#E3E4E5',
        400: '#D1D2D3',
        500: '#A4A5A8',
        600: '#76787C',
        700: '#494B51',
        800: '#1B1E25',
        900: '#',
    },
    purple: {
        100: '#F1E4FE',
        200: '#E3CAFC',
        300: '#D6AFFB',
        400: '#C895F9',
        500: '#BA7AF8',
        600: '#9562C6',
        700: '#704995',
        800: '#4A3163',
        900: '#',
    },
    deepPurple: {
        100: '#EBE4FE',
        200: '#D7CAFC',
        300: '#C3AFFB',
        400: '#AF95F9',
        500: '#9B7AF8',
        600: '#7C62C6',
        700: '#5D4995',
        800: '#3E3163',
        900: '#',
    },
    indigo: {
        100: '#EEF0FF',
        200: '#9DC3F0',
        300: '#6CA6E9',
        400: '#3B88E1',
        500: '#0A6ADA',
        600: '#0855AE',
        700: '#064083',
        800: '#042A57',
        900: '#',
    },
    blue: {
        100: '#C9F8FB',
        200: '#94EAF8',
        300: '#5DCEEA',
        400: '#35ABD5',
        500: '#007DBA',
        600: '#00619F',
        700: '#004885',
        800: '#00336B',
        900: '#',
    },
    cyan: {
        100: '#F1FAFF',
        200: '#E3F5FF',
        300: '#D5F1FF',
        400: '#C7ECFF',
        500: '#B9E7FF',
        600: '#94B9CC',
        700: '#6F8B99',
        800: '#4A5C66',
        900: '#',
    },
    emerald: {
        100: '#EDFBF7',
        200: '#DCF7EF',
        300: '#CAF4E7',
        400: '#B9F0DF',
        500: '#A7ECD7',
        600: '#86BDAC',
        700: '#648E81',
        800: '#435E56',
        900: '#',
    },
    green: {
        100: '#DDF0DC',
        200: '#BCE2B8',
        300: '#9AD395',
        400: '#79C571',
        500: '#57B64E',
        600: '#46923E',
        700: '#346D2F',
        800: '#23491F',
        900: '#',
    },
    lime: {
        100: '#F0FAD9',
        200: '#E0F5B4',
        300: '#D1F08E',
        400: '#C1EB69',
        500: '#B2E643',
        600: '#8EB836',
        700: '#6B8A28',
        800: '#475C1B',
        900: '#',
    },
    orange: {
        100: '#FFE7DF',
        200: '#FFCEBE',
        300: '#FFB69E',
        400: '#FF9D7D',
        500: '#FF855D',
        600: '#CC6A4A',
        700: '#995038',
        800: '#663525',
        900: '#',
    },
    yellow: {
        100: '#FFF3DC',
        200: '#FFE8B9',
        300: '#FFDC95',
        400: '#FFD172',
        500: '#FFC54F',
        600: '#CC9E3F',
        700: '#99762F',
        800: '#664F20',
        900: '#',
    },
    red: {
        100: '#F9D0D5',
        200: '#F3A1AB',
        300: '#EC7281',
        400: '#FFD172',
        500: '#E0142D',
        600: '#B31024',
        700: '#860C1B',
        800: '#5A0812',
        900: '#',
    },
    pink: {
        100: '#F9D0D5',
        200: '#F3A1AB',
        300: '#EC7281',
        400: '#FFD172',
        500: '#E0142D',
        600: '#B31024',
        700: '#860C1B',
        800: '#5A0812',
        900: '#',
    }
}

export const colorSchemes = (isDarkMode: string) => {
    return {
        primary: {
            main: isDarkMode === DARK ? colors.blue[500] : colors.blue[500],
            contrastText: "#FFFFFF",
        },
        danger: colors.red[500],
        ...colors
    }
}

export const typography = {
    fontFamily: ['Encode Sans'].join(','),
    h1: {
        fontSize: '4rem',
        fontWeight: 500,
    },
    h2: {
        fontSize: '1.5rem',
        fontWeight: 500,
    },
    button: {
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '-0.02769rem',
        fontStyle: 'normal'
    },
}

export const components = {
    MuiButton: {
        styleOverrides: {
            root: () => ({
                borderRadius: '0.5rem',
                padding: '0.625rem 1.875rem'
            }),
        },
    },
}
