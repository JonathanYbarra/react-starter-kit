export const colors = {
    red: {
        100: '#fde3d2',
        200: '#fac1a4',
        300: '#f49575',
        400: '#e96b52',
        500: '#db2e1e',
        600: '#bc1715',
        700: '#9d0f1b',
        800: '#7e091c',
        900: '#69051d',
    }
}

export const colorSchemes = {
    primary: {
        main: '#58B030',
        dark: '#0A4E31'
        // light: 
        // contrastText:
    },
    danger: colors.red[500],
    ...colors
}