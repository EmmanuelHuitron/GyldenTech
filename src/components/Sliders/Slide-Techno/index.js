import Slider from 'react-slick'

import tech1 from '../../../img/html_css_js.png'
import tech2 from '../../../img/aws.png'
import tech3 from '../../../img/mysql.png'
import tech4 from '../../../img/python.png'
import tech5 from '../../../img/angular.png'
import tech6 from '../../../img/react-js.png'
import tech7 from '../../../img/net.png'
import tech8 from '../../../img/analytics.png'
import tech9 from '../../../img/nodejs.png'
import tech10 from '../../../img/sql_server.png'
import tech11 from '../../../img/java_red.png'
import tech12 from '../../../img/oracle.png'
import tech13 from '../../../img/mongod.png'
import tech14 from '../../../img/graph.png'
import tech15 from '../../../img/typescript.png'
import tech16 from '../../../img/redis.png'

const SliderTechno = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
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
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="container" style={{ width: '90%' }}>
      <Slider {...settings}>
        <div>
          <img src={tech10} alt="pay10" style={{ maxWidth: '120px' }} />
        </div>
        <div>
          <img src={tech12} alt="pay12" style={{ maxWidth: '140px' }} />
        </div>
        <div>
          <img src={tech11} alt="pay11" style={{ maxWidth: '140px' }} />
        </div>
        <div>
          <img src={tech1} alt="pay1" style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <img src={tech2} alt="pay2" style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <img src={tech3} alt="pay3" style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <img src={tech4} alt="pay4" style={{ maxWidth: '160px' }} />
        </div>
        <div>
          <img src={tech5} alt="pay5" style={{ maxWidth: '160px' }} />
        </div>
        <div>
          <img src={tech6} alt="pay6" style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <img src={tech7} alt="pay7" style={{ maxWidth: '100px' }} />
        </div>
        <div style={{display:'flex'}}>
          <img src={tech8} alt="pay8" style={{ maxWidth: '150px' }} />
        </div>
        <div>
          <img src={tech9} alt="pay9" style={{ maxWidth: '120px' }} />
        </div>
        <div>
          <img src={tech13} alt="pay13" style={{ maxWidth: '140px' }} />
        </div>
        <div>
          <img src={tech14} alt="pay14" style={{ maxWidth: '140px' }} />
        </div>
        <div>
          <img src={tech15} alt="pay15" style={{ maxWidth: '140px' }} />
        </div>
        <div>
          <img src={tech16} alt="pay16" style={{ maxWidth: '140px' }} />
        </div>
      </Slider>
    </div>
  )
}
export default SliderTechno
