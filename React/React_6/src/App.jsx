import './App.css'
import { useState } from 'react'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'


function App() {

  const [isloggedin, setLoggedin] = useState(true);
  
  //1)Early Return
  if(!isloggedin){
    return(
    <LoginBtn/>
    )
  }
  else{
    return(
    <LogoutBtn/>
    )
  }

  //2)Logical Operator
  // return(
  //   <div>
  //     <h1>Welcome Everyone to Raj's corse</h1>
  //     <div>
  //       {isloggedin && <LogoutBtn/>}
  //     </div>
  //   </div>
  // )

  //3)Ternary Operator
  // return(
  //   <div>
  //      {isloggedin ? <LoginBtn/> : <LogoutBtn/>}
  //   </div>
  // )

  //3)If-Else
  // if(isloggedin){
  //     return(
  //       <LogoutBtn/>
  //     )
  // }
  // else{
  //     return(
  //       <LoginBtn/>
  //     )
  // }
}

export default App
