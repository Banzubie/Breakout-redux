


export default function Block({ multiplier }) {

  const blockStyle = {
    backgroundColor: 'blue',
    borderRadius: '15%',
    position: 'absolute',
    top: '37%',
    left: '45%',
    width: '2.3em',
    height: '25%',
    textAlign: 'center',
    transform: `rotate(${multiplier * 36}deg) translateX(200px)`
  }

  return (
    <div style={blockStyle}></div>
  )
}