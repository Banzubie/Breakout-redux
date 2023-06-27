import { useState, useRef } from 'react';
import Rotab from './rotab.jsx'
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  const mainStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  }
  return (
    <div style={mainStyles}>
      <p>Welcome to breakout again!</p>
      <Rotab />
    </div>
  );
}