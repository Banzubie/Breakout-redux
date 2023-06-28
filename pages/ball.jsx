

export default function Ball() {
  const ballStyle = {
    backgroundColor: 'red',
    borderRadius: '50%',
    height: '10%',
    width: '10%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
    <div style={ballStyle}>

    </div>
  )
}