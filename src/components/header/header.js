import React from 'react'
import bgDesktop from '../../images/bg-desktop-light.jpg'
import bgMobile from '../../images/bg-mobile-light.jpg'

function Header() {
  return (
    <header className="app-header">
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