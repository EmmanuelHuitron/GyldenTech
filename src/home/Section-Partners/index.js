import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* import pay1 from '../../img/VTEX.png'
import pay2 from '../../img/Stripe-01.png'
import pay3 from '../../img/Datatrics.png'
import pay4 from '../../img/OpenPay.png'
import pay5 from '../../img/PayPal.png'
import pay6 from '../../img/BigCommerce-logo.png'
import pay7 from '../../img/OKY.png'
import pay8 from '../../img/Conekta.png' */

const Partners = () => {
  const intl = useIntl()
  AOS.init()
  return (
    <div className="sec-partners" id="partners">
      <div
        className="sec-title"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2>
          {intl.formatMessage({
            id: 'app.pages.home.sectionPartners.label.title',
          })}
        </h2>
        <div>
        <img
            src={require(`../../img/Manhattan-1.png`)}
            alt="carrusel"
            style={{ maxWidth: '250px', paddingBottom: '0px', margin: '0 32px' }}
          />
          <img
            src={require(`../../img/Dynamics.png`)}
            alt="carrusel"
            style={{ maxWidth: '250px', paddingBottom: '12px', margin: '0 24px  0 0' }}
          />
          <img
            src={require(`../../img/SAP.png`)}
            alt="carrusel"
            style={{ maxHeight: '80px', paddingBottom: '5px', margin: '0 32px 0 0' }}
          />
        </div>
      </div>
      
    </div>
  )
}

export default Partners
