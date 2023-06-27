import { useState, useRef } from 'react';
import Rotab from './rotab.jsx'
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {


  return (
    <div>
      <Rotab />
    </div>
  );
}