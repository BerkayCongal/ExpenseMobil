import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister";


export const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/login",
      element:<LoginRegister/>
    },
    {
      path:"/register",
      element:<LoginRegister/>,
    },

]
)
