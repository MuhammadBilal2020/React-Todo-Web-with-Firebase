
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Pages/register/Register.jsx'
import Layout from './Layout.jsx'
import Login from './Pages/login/Login.jsx'
import Todos from './todos/Todos.jsx'

let router = createBrowserRouter([
    {
        path : "/" , 
        element :<Layout />  ,
        children : [
            {path : "login" ,  element : <Login /> } ,

            {path : "register" ,  element : <Register /> } ,

            {path : "todos" , element : <Todos />}

        ]
    }
])

createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router}></RouterProvider>
  
)
