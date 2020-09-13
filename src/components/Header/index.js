import React from 'react'

import './index.css'

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png'
            alt='Netflix'
          />
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img
            src='https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png'
            alt='Usuário'
          />
        </a>
      </div>
    </header>
  )
}
