import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import { useThemeContext } from '../../theme';
import { SwtichTheme } from '../switch';

export const Navbar = () => {
    const { toggleTheme, checkedTheme } = useThemeContext();
    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => toggleTheme(target.checked);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        MUI
                    </Typography>

                    <SwtichTheme
                        checked={checkedTheme}
                        onChange={onChange}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}