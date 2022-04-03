import React from 'react';
import cl from './Authorization.module.css';
import closeIcon from "./images/close-icon.svg";

const Authorization = ({active, setActive}) => {
    return (
        <div className={active ? [cl.container, cl.active].join(' ') : cl.container} onClick={() => setActive(false)}>
            <div className={cl.content} onClick={(e) => e.stopPropagation()}>
                <div className={cl.signIn}>
                    <span className={cl.formHeader}>sign in</span>
                    <form className={cl.formContent} action="">
                        <input type="text" placeholder='Enter your username here'/>
                        <input type="password" placeholder='Enter your password here'/>
                        <button type='submit'>sign in</button>
                    </form>
                </div>
                <di className={cl.break}></di>
                <div className={cl.signUp}>
                    <span className={cl.formHeader}>...or sign up :)</span>
                    <form className={cl.formContent} action="">
                        <input type="text" placeholder='Create your username'/>
                        <input type="password" placeholder='Create your password'/>
                        <button type='submit'>sign up</button>
                    </form>
                </div>
            </div>
            <a href={"#"} className={cl.close}/>
        </div>
    )
}

export default Authorization