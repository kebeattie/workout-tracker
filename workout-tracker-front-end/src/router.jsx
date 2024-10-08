import { createBrowserRouter, Navigate } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Workouts from './components/Workouts';


const router = createBrowserRouter([
    {
        path:'//', element: <Navigate to='/register' />
    },
    {
        path:'//register', element: <Register />
    },
    {
        path:'//login', element: <Login />
    },
    {
        path:'//workouts', element: <Workouts />
    }
])

export default router;