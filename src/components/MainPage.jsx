import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

const MainPage = () => {
  console.log(process.env.REACT_APP_API_URL);

  return (

    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default MainPage