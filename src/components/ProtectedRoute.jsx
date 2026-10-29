import {Navigate, Outlet} from 'react-router-dom'

function ProtectedRoute() {
    const isAuthUser = false;

    //данная функция является заглушкой
    if (!isAuthUser) {
        return <Navigate to="/login" replace/>;
    }
    return <Outlet/>
}

export default ProtectedRoute;