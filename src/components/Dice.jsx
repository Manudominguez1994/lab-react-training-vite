import { useState } from "react"

export default function Dice(props) {
    console.log("todas las imgagnes",props);
    const [numDice , setNumDice ] = useState(0)
   const randomNumberDice = () =>{
    const randomNumber = Math.floor(Math.random()*(props.dice.length - 1) + 1);
    console.log(randomNumber);
    setNumDice(randomNumber)
   }
  return (
    <div>
        <h2>Dice</h2>
        <img src={props.dice[numDice]} alt="" width="200px" onClick={randomNumberDice}/>
    </div>

  )
}
