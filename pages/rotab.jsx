import { useState, useRef, useEffect } from 'react';
import Block from './block.jsx'
import Ball from './ball.jsx'


export default function Rotab () {
  const [rotate, setRotate] = useState(0);
  const intervalRef = useRef(null);
  const blockPlacementLogic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, true)
    document.addEventListener('keyup', stopSpin, true)
  },[])

  const onKeyDown = (e) => {
    if (e.key === 'a' || e.key === 'ArrowLeft') {
      counterClockwise()
    } else if (e.key === 'd' || e.key === 'ArrowRight'){
      clockwise()
    } else {
      return
    }
  }

  const stopSpin = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }
  const clockwise = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setRotate((rotate) => rotate + 3.6)
    }, 25);
  }

  const counterClockwise = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setRotate((rotate) => rotate - 3.6)
    }, 25);
  }

  const rotTabStyle = {
    backgroundColor: 'green',
    position: 'relative',
    left: '50%',
    top: '15em',
    width: '25em',
    height: '25em',
    borderRadius: '50%',
    transform: `translate(-50%, -50%) rotate(${rotate}deg)`
  }
  return (
    <>
      <div className='rotTab' style={rotTabStyle}>
        {blockPlacementLogic.map(item => <Block multiplier={item} key={item}/>)}
        <Ball />
      </div>
      <br />
      <br />
      <br />
      <br />
      <button onMouseDown={counterClockwise} onMouseUp={stopSpin} onMouseLeave={stopSpin}>Counter clock</button>
      <button onMouseDown={clockwise} onMouseUp={stopSpin} onMouseLeave={stopSpin}>Clockwise</button>
    </>
  )
}