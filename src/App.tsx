import { Typography, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const App = (): JSX.Element => {
    return (
        <>
            <Typography variant="h1">Navbar</Typography>

            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </>
    )
};
