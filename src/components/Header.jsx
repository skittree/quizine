import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='container'>
        <div className='navbar'>
            <ul>
                <li className='navbar_logo'>quizbox</li>
                <li>search</li>
                <li>rating</li>
            </ul>
            <button className='button'>sign in</button>
        </div>
    </div>
  )
}

export default Header