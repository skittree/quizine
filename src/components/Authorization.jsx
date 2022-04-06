import React, { useState } from 'react';
import { login, registration } from '../http/userAPI';
import cl from './Authorization.module.css';

const Authorization = ({ active, setActive }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async (e) => {
        e.preventDefault();
        const response = await login(email, password);
        console.log(response);
    }

    const signUp = async (e) => {
        e.preventDefault();
        const response = await registration(email, password);
        console.log(response);
    }

    return (
        <div className={active ? [cl.container, cl.active].join(' ') : cl.container} onClick={() => setActive(false)}>
            <div className={cl.content} onClick={(e) => e.stopPropagation()}>
                <div className={cl.signIn}>
                    <span className={cl.formHeader}>sign in</span>
                    <form className={cl.formContent} action="">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your username here' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password here' />
                        <button onClick={signIn}>sign in</button>
                    </form>
                </div>
                <div className={cl.break}></div>
                <div className={cl.signUp}>
                    <span className={cl.formHeader}>...or sign up</span>
                    <form className={cl.formContent} action="">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your username here' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password here' />
                        <button onClick={signUp}>sign up</button>
                    </form>
                </div>
            </div>
            <a href={"#"} className={cl.close} />
        </div>
    )
}

export default Authorization