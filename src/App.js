import './App.css';
import { useState } from 'react';

function App() {

  let selection_arr = ["rock", "paper", "scissors"]

  const [selection, setSelection] = useState("")
  const [compSelection, setCompSelection] = useState("");
  const [myScore, setMyScore] = useState(0)
  const [compScore, setCompScore] = useState(0)
  const [gameResult, setGameResult] = useState("") //to announce game result eg you win, you lose, etc

  //computer choose rock, paper, scissors randomly
  function playGame(mySelection){

    //set my selection
    setSelection(mySelection)
    console.log("my selection: " + mySelection)

    //get computer selection randomly
    let targetIndex = Math.floor(Math.random() * 3)
    let computer_selection = selection_arr[targetIndex]
    setCompSelection(computer_selection)

    console.log("comp selection: " + computer_selection)

    //compare and result
    switch(mySelection){
      case "rock":
      
        switch(computer_selection){
          case "rock":
            setGameResult("Draw")
            break;
          case "paper":
            setGameResult("You lose.")
            setCompScore(compScore+1)
            break;
          case "scissors":
            setGameResult("You win!")
            setMyScore(myScore+1)
            break;
        }

      break;
      case "paper":
      
        switch(compSelection){
          case "paper":
            setGameResult("Draw")
            break;
          case "scissors":
            setGameResult("You lose.")
            setCompScore(compScore+1)
            break;
          case "rock":
            setGameResult("You win!")
            setMyScore(myScore+1)
            break;
        }

      break;
      case "scissors":
      
        switch(compSelection){
          case "scissors":
            setGameResult("Draw")
            break;
          case "rock":
            setGameResult("You lose.")
            setCompScore(compScore+1)
            break;
          case "paper":
            setGameResult("You win!")
            setMyScore(myScore+1)
            break;
        }

      break;
        default:
          break;
    }

    console.log("game result : " + gameResult);

  }

  return (
    <div className="App">
      <h1>Rock, paper, scissors!</h1>
      <p>
        <button value={selection_arr[0]} onClick={e=>playGame(e.target.value)}>{selection_arr[0]}</button>
        <button value={selection_arr[1]} onClick={e=>playGame(e.target.value)}>{selection_arr[1]}</button>
        <button value={selection_arr[2]} onClick={e=>playGame(e.target.value)}>{selection_arr[2]}</button>
      </p>
      <p> My choice: {selection}</p>
      <p> Computer's choice: {compSelection}</p>
      <p> {gameResult} </p>
      <p>My score: {myScore}</p>
      <p>Computer's score: {compScore}</p>

    </div>
  );
}

export default App;

/*

rand = 0 to 2

input for me is input box -integer number 0 to 2
0 is rock
1 is paper
2 is scissors

computer choose a random number between 0 to 2
and compare my selection with its selected random number

test the condition:
paper > rock > scissor > paper

a div box to keep score

*/

