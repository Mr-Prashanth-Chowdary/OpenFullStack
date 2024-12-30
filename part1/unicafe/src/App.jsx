import { useState } from 'react'
import Statistics from "./Statistics.jsx";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log("working")
  const values={
      "good": good,
      "neutral": neutral,
      "bad" : bad,
    }
    const onGood = ()=>{
      setGood(good+1);
    }
    const onNeutral = ()=>{
      setNeutral(neutral+1);
    }
    const onBad = () =>{
      setBad(bad+1)
    }
  return (
    <>
    <h1>give feedback</h1>
    <button onClick={onGood}>good</button>
    <button onClick={onNeutral}>neutral</button>
    <button onClick={onBad}>bad</button>
    <Statistics value={values}/>
    </>
  )
}

export default App