export type BuildThemePros = {
    children: JSX.Element;
}

export interface ThemeContextType {
    checkedTheme: boolean,
    toggleTheme: (value: boolean) => void
}