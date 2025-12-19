import Result from "./components/Result"
import UserInput from "./components/UserInput"
import { useState } from "react"



function App() {

  const[defInput,setInput]=useState({
        initialinvestment:10000,
        annualinvestment:100000,
        expectedduration:3,
        duration:2
    })

  function handleInput(settingInput,value){
      setInput((olderInput)=>{
          return{
              ...olderInput,
              [settingInput]:+value,
          }
      });
  };
  return (
    <>
      <UserInput defInput={defInput} onChange={handleInput}/>
      <Result defInput={defInput}/>
    </>
  )
}

export default App
