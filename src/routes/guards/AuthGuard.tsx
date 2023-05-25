import { Navigate, Outlet } from 'react-router-dom';
import { AuthGuardProps } from './guards.types';
import * as URL from "../utils/_url";
import { App } from '../../App';

export const AuthGuard = (props: AuthGuardProps): JSX.Element => {
    const { isPublic = false } = props;
    const token = true;

    // TODO: validate token and redirect to login
    if (isPublic && !token) return <Outlet />;
    if (!isPublic && !token) return <Navigate to={URL.ROUTE_URL_LOGIN} replace />;
    if (isPublic && token) return <Navigate to={URL.ROUTE_URL_HOME} replace />;
    return <App />;
}