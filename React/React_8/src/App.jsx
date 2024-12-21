import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {

    // const [count, setCount] = useState(0);
    // const [total, setTotal] = useState(1);
    //First -> side-effect function
    //second -> Clean-Up function
    //Third -> COma Seprated Dependancy List

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])

    //variation1:
    //runs on every render

    // useEffect(() => {
    //   alert("I Will Run On Each Rendar")
    // })

    //variation2:
    // that run only first render

    // useEffect(() => {
    //   alert("I Will Run On Only First Rendar")
    // }, [])

    //variation3:
    //  useEffect(() => {
    //   alert("I Will Run Rendar On Only when count is updated")
    // }, [count])

    //variation4:
    //multiple dependancy
    // useEffect(() => {
    //   alert("I Will Run Rendar On Only when count/total is updated")
    // }, [count,total])

    //variation5:
    //iss bar let's add clean up function
    // useEffect(() => {
    //   alert("Count Is Updated!!")
    
    //   return () => {
    //     alert("Count Is Unmounted By Ui ")
    //   }
    // }, [count])   

    // function handleClick(){
    //   setCount(count+1);
    // }

    // function handleClickTotal(){
    //   setTotal(total+1);
    // }
    
    return (
    <div>

        <LoggerComponent /> 
        {/* <TimerComponent />
        <ResizeComponent />
        <DataFetcher />
        <MultiEffectComponent /> */}

      {/* <button onClick={handleClick}>
        Update Count
      </button>
      <br/>
      count is : {count}

      <br/>

      <button onClick={handleClickTotal}>
        Update total
      </button>
      <br/>
      total is : {total} */}
    </div>
  )
}

export default App
