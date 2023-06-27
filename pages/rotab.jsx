import { useState, useRef, useEffect } from 'react';


export default function Rotab () {
  const [rotate, setRotate] = useState(0);
  const intervalRef = useRef(null);

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
    backgroundColor: 'red',
    position: 'relative',
    left: '40%',
    width: '25em',
    height: '25em',
    borderRadius: '50%',
    textAlign: 'center',
    transform: `rotate(${rotate}deg)`
  }
  return (
    <>
    <button onMouseDown={counterClockwise} onMouseUp={stopSpin} onMouseLeave={stopSpin}>Counter clock</button>
      <div className='rotTab' style={rotTabStyle}>
        <p>Spin</p>
      </div>
      <button onMouseDown={clockwise} onMouseUp={stopSpin} onMouseLeave={stopSpin}>Clockwise</button>
    </>
  )
}