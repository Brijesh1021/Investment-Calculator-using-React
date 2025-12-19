import Result from "./components/Result"
import UserInput from "./components/UserInput"
import { useState } from "react"
``
function App() {

  const[defInput,setInput]=useState({
        initialInvestment:10000,
        annualInvestment:100000,
        expectedReturn:3,
        duration:2
    })

  const valid=defInput.duration>=1;

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
      <UserInput defInputs={defInput} onChange={handleInput}/>
      {!valid && <p class="center">Please Enter a Value above 0</p>}
      {valid && <Result defInputs={defInput}/>}
    </>
  )
}

export default App
