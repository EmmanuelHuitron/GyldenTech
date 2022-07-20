import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carrousel from '../../../components/Carrousel-Costumers'

import costu1 from '../../img/champion-logo 1.png'
import costu2 from '../../img/FarmaTodo 1.png'
import costu3 from '../../img/Digital River.png'
import costu4 from '../../img/Axo.png'
import costu5 from '../../img/Tork 1.png'
import costu6 from '../../img/SiVale_logo.png'
import costu7 from '../../img/Maraga_Logo.png'
import costu8 from '../../img/Alebripets.png'
import costu9 from '../../img/Speedo-Logo.png'
import costu10 from '../../img/Riskified.png'
import costu11 from '../../img/ideën_logo.png'
import costu12 from '../../img/Atlas.png'
import costu13 from '../../img/Jobst_logo.png'
import costu14 from '../../img/GoJiraf.png'

const Technologies = () => {
  const intl = useIntl()
  AOS.init()
  const images = [
    'Casos-de-exito_Nadro.png',
    'Casos-de-exito_Modelorama.png',
    'Casos-de-exito_Ekt.png',
    'Casos-de-exito_Xiaomi.png',
    'Casos-de-exito_LaMarina.png',
    'Casos-de-exito_Essity.png',
  ]
  return (
    <div className="sec-costumers" id="costumers">
      <div className="sec-title">
        <h2 data-aos="slide-up" data-aos-duration="1000" data-aos-once="true">
          {intl.formatMessage({
            id: 'app.pages.home.sectionCostumers.label.title',
          })}
        </h2>
        <h3>
          {intl.formatMessage({
            id: 'app.pages.home.sectionCostumers.label.subtitle',
          })}
        </h3>
      </div>
      <div className="sec-content costumers">
        <Carrousel images={images} autoPlay={true} showButtons={true} />
      </div>
      <div className="sec-more-costumers">
        <h3>
          {intl.formatMessage({
            id: 'app.pages.home.sectionCostumers.label.subtitle2',
          })}
        </h3>
        <div className="costumers1">
          <img src={costu1} alt="costu1" style={{ maxWidth: '156px' }} />
          <img src={costu2} alt="costu2" style={{ maxWidth: '173px' }} />
          <img src={costu3} alt="costu3" style={{ maxWidth: '140px' }} />
          <img src={costu4} alt="costu4" style={{ maxWidth: '104px' }} />
          <img src={costu5} alt="costu5" style={{ maxWidth: '71px' }} />
          <img src={costu6} alt="costu6" style={{ maxWidth: '88px' }} />
          <img src={costu7} alt="costu7" style={{ maxWidth: '130px' }} />
        </div>
        <div className="costumers2">
          <img src={costu8} alt="costu8" style={{ maxWidth: '162px' }} />
          <img src={costu9} alt="costu9" style={{ maxWidth: '158px' }} />
          <img src={costu10} alt="costu10" style={{ maxWidth: '146px' }} />
          <img src={costu11} alt="costu11" style={{ maxWidth: '85px' }} />
          <img src={costu12} alt="costu12" style={{ maxWidth: '72px' }} />
          <img src={costu13} alt="costu13" style={{ maxWidth: '82px' }} />
          <img src={costu14} alt="costu14" style={{ maxWidth: '125px' }} />
        </div>
      </div>
    </div>
  )
}

export default Technologies
