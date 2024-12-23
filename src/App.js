import useCounter from "./useCounter"
import "./App.css"

export default function App(){

  const[count, increment,decrement, reset] = useCounter()
  return(
    <div className="counter">
      <h1>{count}</h1>

      <button className="button_in" onClick={increment}>Increment</button>
      <button className="button_dc" onClick={decrement}>Decrement</button>

      <div>
        <button className="reset" onClick={reset} > Reset</button>
      </div>
    </div>
  )
}

