import React from 'react';
import icono from '../img/hamburguer.png'

const NavBar = ({propNombre}) => {
  return (
    <nav>
      <div>{propNombre}</div>
      <img alt="menu" src={icono}></img>
  </nav>
  )
};

export default NavBar;
