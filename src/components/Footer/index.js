import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import './footer.css'
const Footer = () => {
  const intl = useIntl()
  return (
    <div className="footer-wrapper">
      <div className="vinn">
      <img
            src={require(`../../img/Gylden_logo_bn.png`)}
            alt="carrusel"
            style={{ maxWidth: '158px' }}
          />
        <p className="text-footer"> © 2023 Gylden Tech. All rights reserved</p>
        <div style={{marginTop: '0px'}}>
          <Link to="/terms&conditions" style={{ color: 'white', fontSize:'14px'}}>
            <text>
              {intl.formatMessage({
                id: 'app.pages.footer.privacidad',
              })}
            </text>
          </Link>
        </div>
      </div>
      <div className="country1">
        <h3>Contacto</h3>
        <p className="text-footer contact">
          contacto@gylden.com.mx
        </p>
      </div>

    </div>
  )
}

export default Footer
