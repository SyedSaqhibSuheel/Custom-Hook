import { useState } from "react";

export default function useCounter(intialValue=0){

  const[count, setCount] = useState(intialValue);

  const increment =() =>{
   
      setCount(count + 1)
  }
    
  const decrement = () =>{
    if(count>0){
    setCount(count -1)
    }
  }

  const reset =() =>{
    setCount(intialValue)
  }

  return[count, increment, decrement, reset]
  
}
