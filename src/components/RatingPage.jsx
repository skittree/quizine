import React from 'react'
import { selectAll } from '../http/userAPI'
import Footer from './Footer'
import Header from './Header'
import cl from './RatingPage.module.css'

const Rating = () => {
  const fetch = async () => {
    const response = await selectAll();
    console.log(response);
  }

  fetch();

  return (
    <div>
      <Header />
      <div className={cl.body}>
        <div className={cl.content}>
          <span>Best players:</span>
          <ol className={cl.ratingTable}>
            <li className={cl.ratingRow}>
              <div>Email</div>
              <div>points</div>
            </li>
            <li className={cl.ratingRow}>
              <div>Email</div>
              <div>points</div>
            </li>
            <li className={cl.ratingRow}>
              <div>Email</div>
              <div>points</div>
            </li>
            <li className={cl.ratingRow}>
              <div>Email</div>
              <div>points</div>
            </li>
            <li className={cl.ratingRow}>
              <div>Email</div>
              <div>points</div>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Rating