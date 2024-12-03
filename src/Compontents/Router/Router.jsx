import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Home/Home"
import AddSchedule from "../AddSchedule/AddSchedule"

const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addSchedule',
                element:<AddSchedule></AddSchedule>
            }
        ]
    }
])

export default router