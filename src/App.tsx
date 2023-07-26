import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/navbar';

export const App = (): JSX.Element => {

    return (
        <>
            <Navbar />

            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </>
    )
};
