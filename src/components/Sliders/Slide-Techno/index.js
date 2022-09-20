import Slider from 'react-slick'

import tech1 from '../../../img/Amazon.png'
import tech2 from '../../../img/HTML.png'
import tech3 from '../../../img/Java.png'
import tech4 from '../../../img/Mongo.png'
import tech5 from '../../../img/mysql 1.png'
import tech6 from '../../../img/Node.png'
import tech7 from '../../../img/AngularJS.png'
import tech8 from '../../../img/Microsoft-dotNET.png'
import tech9 from '../../../img/react-js.png'

const SliderTechno = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div className="container" style={{ width: '90%' }}>
      <Slider {...settings}>
        <div>
          <img src={tech1} alt="pay1" style={{ maxWidth: '160px' }} />
        </div>
        <div>
          <img src={tech2} alt="pay2" style={{ maxWidth: '180px' }} />
        </div>
        <div>
          <img src={tech3} alt="pay3" style={{ maxWidth: '180px' }} />
        </div>
        <div>
          <img src={tech4} alt="pay4" style={{ maxWidth: '180px' }} />
        </div>
        <div>
          <img src={tech5} alt="pay5" style={{ maxWidth: '160px' }} />
        </div>
        <div>
          <img src={tech6} alt="pay6" style={{ maxWidth: '180px' }} />
        </div>
        <div>
          <img src={tech7} alt="pay7" style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <img src={tech8} alt="pay8" style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <img src={tech9} alt="pay9" style={{ maxWidth: '140px' }} />
        </div>
      </Slider>
    </div>
  )
}
export default SliderTechno
