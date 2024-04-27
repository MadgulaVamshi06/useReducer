import { useReducer } from "react";
import "./App.css";

const reducer =(state , action) =>{
  switch(action.type){
    case "INCREASE" :    return state +1   
    case "DECREASE" :    return state -1 ;
    default:
      throw new Error(`Action type is invalid`);     
  }
};

function App() {
  const[state,dispatch]=useReducer(reducer,0)
  const handleIncrement = () => dispatch({ type: "INCREASE" });
  const handleDecrement = () => dispatch({ type: "DECREASE" });
  return <>
<h1>Counter : {state}</h1>
<button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
  </>;
}

export default App;
