import './App.css'
import { createBrowserRouter , RouterProvider } 
from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBord from './components/DashBord';
import NavBar from './components/NavBar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Report from './components/Report';
import NotFound from './components/NotFound';


const router = createBrowserRouter(
  [
    {
      path : "/",
      element : 
      <div>
        <NavBar/>
        <Home/>
      </div> 
    },

    {
      path : "/about",
      element : 
      <div>
        <NavBar/>
        <About/>
     </div> 
    },

    {
      path : "/dashbord",
      element : 
      <div>
       <NavBar/>
        <DashBord/>
      </div> ,
         children:[
          {
            path:'courses',
            element: <Courses/>
          },
          {
            path:'mock-tests',
            element: <MockTest/>
          },
          {
            path:'report',
            element: <Report/>
          }
        ]
    },

    {
      path : "/student/:id",
      element : 
      <div>
        <NavBar/>
        <ParamComp/>
      </div>
    },

    {
      path:'*',
      element : <NotFound/>
    }
  ]
);

function App() {

  return (
   <div>
      <RouterProvider router={router} />  
    </div>
  )
}

export default App
