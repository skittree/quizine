import React, { useState } from 'react';
import cl from './Header.module.css';
import Authorization from './Authorization';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={cl.container}>
      <div className={cl.navbar}>
        <ul>
          <li className={cl.navbar_logo}><Link to='/' className={cl.link}>quizbox</Link> </li>
          <li><Link to='/search' className={cl.link}>search </Link> </li>
          <li><Link to='/rating' className={cl.link}>rating</Link></li>
        </ul>
        <button className={cl.button} onClick={() => setModalActive(true)}>sign in</button>
      </div>
      <Authorization active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default Header