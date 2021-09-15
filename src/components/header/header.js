import React from 'react'
import './header.scss'
import bgDesktop from '../../images/bg-desktop-light.jpg'
import bgMobile from '../../images/bg-mobile-light.jpg'

function Header() {
  return (
    <header className="app-header">
      {/* <div className="title-container"> */}
        {/* <h1 className="title">To Do - app</h1> */}
        {/* <span>icon</span> */}
      {/* </div> */}
      <div className="page-cover">
        <picture>
          <source srcSet={bgDesktop} media="(min-width: 376px)" />
          <source srcSet={bgMobile} media="(max-width: 375px)" />
          <img src={bgDesktop} alt="Page cover" />
        </picture>
      </div>
    </header>
  )
}

export default Header