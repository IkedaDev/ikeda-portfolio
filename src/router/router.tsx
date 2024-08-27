import { createBrowserRouter, Navigate } from "react-router-dom";
import Base from "../layouts/base/Base";
import { WelcomeWrapper, AboutMeWrapper } from "../pages";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Base />,
        children:[
            {
                path:'',
                element: <WelcomeWrapper />
            },{
                path:'me',
                element: <AboutMeWrapper />
            },
        ]
    },{
        path:'*',
        element: <Navigate to="/" replace />
    }
])

