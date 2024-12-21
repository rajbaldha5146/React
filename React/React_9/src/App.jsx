import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Componts/ChildA';

//Step:1 create context
//const UserContext = createContext();
//Step:4 Consumer ke andar jake consume kar lo
const ThemeContext = createContext();

function App() {

   {/* Step:3 Pass the value */}
  //  const [user, setUser] = useState({name:"raj"});

  const [theme, setTheme] = useState("light");

  return (
    // <>      
    //   {/* Step:2 wrap all the child inside a provider */}
    //   <UserContext.Provider value={user}>
    //      <ChildA />
    //   </UserContext.Provider>
    // </>
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
//export {UserContext}
export {ThemeContext} 
