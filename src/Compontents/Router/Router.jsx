import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Home/Home"
import AddSchedule from "../AddSchedule/AddSchedule"
import Selectede from "../Selectede/Selectede"
import UpdateData from "../UpdateData/UpdateData"

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
            },
            {
                path:'/selectede',
                element:<Selectede></Selectede>,
                loader:() => fetch('http://localhost:5000/schedule')
            },
            {
                path:'/update/:id',
                element:<UpdateData></UpdateData>,
                loader:({params}) =>fetch(`http://localhost:5000/schedule/${params.id}`)
            }
        ]
    }
])

export default router