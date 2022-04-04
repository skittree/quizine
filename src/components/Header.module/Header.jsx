import React, { useState } from "react";
import classes from "./Header.module.css";
// import SignForm from './SignForm';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ul className={classes.navBar}>
          <li className={classes.navBarLogo}>quizbox</li>
          <li>search</li>
          <li>rating</li>
        </ul>
        <button
          className={classes.signBtn}
          onClick={() => setModalActive(true)}
        >
          sign in
        </button>
      </div>
      {/* <SignForm active={modalActive} setActive={setModalActive}/> */}
    </div>
  );
};

export default Header;
