import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

import Hamburger from './hamburger'
import NavBar from './navBar'
const Header = () => {


  const [open, setOpen] = useState(false)

  const [y, setY] = useState(window.scrollY)

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget
      setY(window.scrollY)
    },
    [y],
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div className="header-content">
      <div className="logo">
        <Link to="/">
        <img
            src={require(`../../img/Gylden_logo_bn.png`)}
            alt="carrusel"
            style={{ maxWidth: '158px' }}
          />
        </Link>
      </div>

      <NavBar open={open} handleClick={handleClick} />
      {window.screen.width > 1300 ? (
        <div className="btn-inter">
          <div className="languages">
          </div>
        </div>
      ) : (
        <div className="btn-inter">
          <div className="languages">
          </div>
          <Hamburger open={open} handleClick={handleClick} />
        </div>
      )}
    </div>
  )
}

export default Header
