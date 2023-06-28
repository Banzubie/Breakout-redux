import { useState, useRef, useEffect } from 'react';

export default function Ball() {
  const [ballTop, setBallTop] = useState(50)
  const [ballLeft, setBallLeft] = useState(0)
  // const intervalRef = useRef(null);
  // intervalRef.current = setInterval(() => {
  //   // if (ballTop < 25) {
  //   //   setBallTop((ballTop) => ballTop + 1)
  //   // } else {
  //   //   setBallTop((ballTop) => ballTop - 1)
  //   // }
  // }, 250);
  const ballStyle = {
    backgroundColor: 'red',
    borderRadius: '50%',
    height: '10%',
    width: '10%',
    position: 'absolute',
    top: `${ballTop}%`,
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div style={ballStyle}>

    </div>
  )
}