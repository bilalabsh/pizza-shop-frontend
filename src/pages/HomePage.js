import React from 'react'
import Navbar from '../components/navbar/navbar.tsx';
import Main from '../components/Main/Main'

const HomePage = () => {
  return (
    <>
    <div className='navbar'>
      <Navbar />

    </div>  
    <div className='layout'>
      <Main />
    </div>
    </>
  )
}

export default HomePage

