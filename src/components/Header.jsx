import React, { useState } from 'react';
import cl from './Header.module.css';
import Authorization from './Authorization';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={cl.container}>
      <div className={cl.navbar}>
        <ul>
          <li className={cl.navbar_logo}>quizbox</li>
          <li>search</li>
          <li>rating</li>
        </ul>
        <button className={cl.button} onClick={() => setModalActive(true)}>sign in</button>
      </div>
      <Authorization active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default Header