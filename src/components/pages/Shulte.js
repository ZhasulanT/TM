import React, { useEffect, useState } from 'react';
import './Shulte.css';


export default function Shulte() {

  const [randomNumbers, setRandomNumbers] = useState(Array(25).fill(""))
  const [second, setSecond] = useState(0)
  const [timerActive, setTimerActive ] = useState(false);
  const [counter, setCounter] = useState(1);
  const [text, setText] = useState('0');
  const g = " <= ";
  const renderSquare = (i) => {
    return <Square value={i} counter={counter} finish={finish} checkNumber={checkNumber} />
  }

  
  useEffect(() => {
  
    if (timerActive) {
       setTimeout(setSecond, 100, second + 10);
    } else {
     
      setTimerActive(false)
     
      
    }
  }, [second, timerActive]);

  
 
 
 const start = () => {
    setRandomNumbers(randomNumbersArray(25))
    setTimerActive(true)
    setSecond(0)
    setCounter(1)
    
 }

 const stop = () => {
  setTimerActive(false)
  setRandomNumbers(Array(25).fill(""))
  setSecond(0)
  setText('0')
  
  
}

const finish = () => {
  setRandomNumbers(Array(25).fill(""))
  setText(`ваш результат ${second / 100} секунд`)
 setTimerActive(false)
}

const checkNumber = () => {
   setCounter(counter + 1)
  }

 
 

  
  return (
    <div className="container">
      <h4>Тест Шульте</h4>
      <p className="k">35с.{g}отлично, 42с.{g} хорошо, 60с.{g} удов.</p>
     
      <div className="game">
        <div className="game-board">
        <div className="game-play">
      
      <div className="board-row">
        {renderSquare(randomNumbers[0])}
        {renderSquare(randomNumbers[1])}
        {renderSquare(randomNumbers[2])}
        {renderSquare(randomNumbers[3])}
        {renderSquare(randomNumbers[4])}
      </div>
      <div className="board-row">
        {renderSquare(randomNumbers[5])}
        {renderSquare(randomNumbers[6])}
        {renderSquare(randomNumbers[7])}
        {renderSquare(randomNumbers[8])}
        {renderSquare(randomNumbers[9])}
      </div>
      <div className="board-row">
        {renderSquare(randomNumbers[10])}
        {renderSquare(randomNumbers[11])}
        {renderSquare(randomNumbers[12])}
        {renderSquare(randomNumbers[13])}
        {renderSquare(randomNumbers[14])}
      </div>
      <div className="board-row">
        {renderSquare(randomNumbers[15])}
        {renderSquare(randomNumbers[16])}
        {renderSquare(randomNumbers[17])}
        {renderSquare(randomNumbers[18])}
        {renderSquare(randomNumbers[19])}
      </div>
      <div className="board-row">
        {renderSquare(randomNumbers[20])}
        {renderSquare(randomNumbers[21])}
        {renderSquare(randomNumbers[22])}
        {renderSquare(randomNumbers[23])}
        {renderSquare(randomNumbers[24])}
      </div>
    </div>
          </div>
          </div>
       {timerActive ? <React.Fragment>
            <p>{second / 100}</p>
            <button type="button" onClick={stop} id="j" className="btn btn-success btn-lg">Стоп</button>  
          </React.Fragment> : <React.Fragment><p>{text}</p><button type="button" onClick={start} className="btn btn-success btn-lg">Начать тест</button></React.Fragment>}
       
      
    </div>

  )
}


const Square = (props) => {

  const counter = props.counter;

  const [style, setStyle] = useState("square");


  useEffect(() => {
    setTimeout(setStyle, 200, "square")
  }, [style]); 


  const check = () => {
    if (counter === props.value && counter !== 25) {
      props.checkNumber(props.value);
      setStyle("square success")
    }
    else if (counter !== props.value) {
      setStyle("square error")
    }

    else {
      setStyle("square success")
      setTimeout(props.finish, 350)
    }
  }

    return (
      <button className={style} onClick={()=> {check()}}>
       {props.value}
      </button>
    );
  
}

const randomNumbersArray = (number) => {

  let numbers = [];
  for(let i = 1; i <= number; i++) {
      numbers.push(i);
  }
  let ranNums = []
  let i = numbers.length
  let j = 0

while (i--) {
  j = Math.floor(Math.random() * (i+1));
  ranNums.push(numbers[j]);
  numbers.splice(j,1);
}
return ranNums

}












