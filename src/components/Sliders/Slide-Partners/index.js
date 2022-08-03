import Slider from 'react-slick'

import pay1 from '../../../img/VTEX.png'
import pay2 from '../../../img/Stripe-01.png'
import pay3 from '../../../img/Datatrics.png'
import pay4 from '../../../img/OpenPay.png'
import pay5 from '../../../img/PayPal.png'
import pay6 from '../../../img/BigCommerce-logo.png'
import pay7 from '../../../img/OKY.png'
import pay8 from '../../../img/Conekta.png'

const SliderPartner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <div className="container" style={{ width: '93%' }}>
      <Slider {...settings}>
        <div>
          <img src={pay1} alt="pay1" style={{ maxWidth: '145px' }} />
        </div>
        <div>
          <img src={pay2} alt="pay2" style={{ maxWidth: '165px' }} />
        </div>
        <div>
          <img src={pay3} alt="pay3" style={{ maxWidth: '165px' }} />
        </div>
        <div>
          <img src={pay4} alt="pay4" style={{ maxWidth: '165px' }} />
        </div>
        <div>
          <img src={pay5} alt="pay5" style={{ maxWidth: '145px' }} />
        </div>
        <div>
          <img src={pay6} alt="pay6" style={{ maxWidth: '165px' }} />
        </div>
        <div>
          <img src={pay7} alt="pay7" style={{ maxWidth: '165px' }} />
        </div>
        <div>
          <img src={pay8} alt="pay8" style={{ maxWidth: '165px' }} />
        </div>
      </Slider>
    </div>
  )
}
export default SliderPartner
