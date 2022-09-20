import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import Button from 'react-bootstrap/Button'

const NavBar = ({ open, handleClick }) => {
  const intl = useIntl()
  return (
    <>
      <div open={open} className={open ? 'nav-bar open' : 'nav-bar'}>
        <div className="nav-close">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <path
              d="M18.3333 1.66666L1.66663 18.3333"
              stroke="#757575"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66663 1.66666L18.3333 18.3333"
              stroke="#757575"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {window.screen.width > 1300 ? (
          <div className="menu-content">
            <div className="nav-link">
              <a href="/know-us" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.knowus',
                })}
              </a>
            </div>
            <div className="nav-link">
              <a href="/services" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.services',
                })}
              </a>
            </div>
            <div className="nav-link">
              <a href="#partners" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.partners',
                })}
              </a>
            </div>
            <div className="nav-link">
              <a href="#awards-and-certifications" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.awards',
                })}
              </a>
            </div>
            <div className="nav-link">
              <a href="#technologies" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.technologies',
                })}
              </a>
            </div>
            <div className="nav-link">
              <a href="#costumers" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.customers',
                })}
              </a>
            </div>
            <div className="nav-link">
              <a href="#resellers" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.resellers',
                })}
              </a>
            </div>
            <div className="nav-link">
              <a href="#work-with-us" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({ id: 'app.components.header.label.work' })}
              </a>
            </div>
          </div>
        ) : (
          <div className="menu-content">
            <div className="nav-link" onClick={handleClick}>
              <a href="#know-us" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.knowus',
                })}
              </a>
            </div>
            <div className="nav-link" onClick={handleClick}>
              <a href="#services" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.services',
                })}
              </a>
            </div>
            <div className="nav-link" onClick={handleClick}>
              <a href="#partners" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.partners',
                })}
              </a>
            </div>
            <div className="nav-link" onClick={handleClick}>
              <a href="#awards-and-certifications" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.awards',
                })}
              </a>
            </div>
            <div className="nav-link" onClick={handleClick}>
              <a href="#technologies" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.technologies',
                })}
              </a>
            </div>
            <div className="nav-link" onClick={handleClick}>
              <a href="#costumers" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.customers',
                })}
              </a>
            </div>
            <div className="nav-link" onClick={handleClick}>
              <a href="#resellers" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({
                  id: 'app.components.header.label.resellers',
                })}
              </a>
            </div>
            <div className="nav-link" onClick={handleClick}>
              <a href="#work-with-us" style={{ color: '#FFFFFF' }}>
                {intl.formatMessage({ id: 'app.components.header.label.work' })}
              </a>
            </div>

            <Link to="/contact-us" onClick={handleClick}>
              <Button variant="light">
                {intl.formatMessage({
                  id: 'app.components.header.label.contact-us',
                })}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default NavBar
