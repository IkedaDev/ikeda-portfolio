import { createBrowserRouter, Navigate } from "react-router-dom";
import Base from "../layouts/base/Base";
import * as Pages from "../pages";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Base />,
        children:[
            {
                path:'',
                element: <Pages.WelcomeWrapper />
            },{
                path:'me',
                element: <Pages.AboutMeWrapper />
            },{
                path:'knowledge',
                element: <Pages.KnowledgeWrapper />
            },{
                path:'experience',
                element: <Pages.ExperienceWrapper /> 
            }
        ]
    },{
        path:'*',
        element: <Navigate to="/" replace />
    }
])

