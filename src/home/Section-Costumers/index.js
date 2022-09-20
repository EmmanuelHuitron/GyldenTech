import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carrousel from '../../components/Carrousel-Costumers'

import costu1 from '../../img/Chedraui.png'
/* import costu1 from '../../img/champion-logo 1.png' */
import costu2 from '../../img/logoHeb.png'
import costu3 from '../../img/Cemaco.png'
/* import costu3 from '../../img/Digital River.png' */
import costu4 from '../../img/Speedo-Logo.png'
import costu5 from '../../img/elektra.png' /* Tork 1.png */
import costu6 from '../../img/Atlas.png'
import costu7 from '../../img/Riskified.png'
import costu8 from '../../img/Axo.png'
import costu9 from '../../img/coppel-pay.png' /* Alebripets.png */
import costu10 from '../../img/Tork 1.png'
import costu11 from '../../img/FarmaTodo 1.png'
import costu12 from '../../img/niubiz.png' /* Maraga_Logo.png */
import costu13 from '../../img/Flywire.png' /* Jobst_logo.png */
import costu14 from '../../img/Digital River.png' /* GoJiraf.png */
import costu15 from '../../img/PayPal.png'
import costu16 from '../../img/retrypay_logo.png'
import costu17 from '../../img/Maraga_Logo.png'
import costu18 from '../../img/Jobst_logo.png'
import costu19 from '../../img/champion-logo 1.png'
import costu20 from '../../img/GoJiraf.png'
import costu21 from '../../img/ideën_logo.png'

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
        {window.screen.width > 1080 ? (
          <>
            <div className="costumers1">
              <img src={costu1} alt="costu1" style={{ maxWidth: '75px' }} />
              <img src={costu2} alt="costu2" style={{ maxWidth: '173px' }} />
              <img src={costu3} alt="costu3" style={{ maxWidth: '185px' }} />
              <img src={costu4} alt="costu4" style={{ maxWidth: '158px' }} />
              <img src={costu5} alt="costu5" style={{ maxWidth: '158px' }} />
              <img src={costu6} alt="costu6" style={{ maxWidth: '88px' }} />
              <img src={costu7} alt="costu7" style={{ maxWidth: '160px' }} />
            </div>
            <div className="costumers2">
              <img src={costu8} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu9} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu10} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu11} alt="costu11" style={{ maxWidth: '183px' }} />
              <img
                src={costu12}
                alt="costu12"
                style={{ maxWidth: '155px', height: '40px' }}
              />
              <img
                src={costu13}
                alt="costu13"
                style={{ maxWidth: '160px', height: '50px' }}
              />
              <img src={costu14} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>
            <div className="costumers2">
              <img src={costu15} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu16} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu17} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu18} alt="costu11" style={{ maxWidth: '183px' }} />
              <img src={costu19} alt="costu12" style={{ maxWidth: '155px' }} />
              <img src={costu20} alt="costu13" style={{ maxWidth: '160px' }} />
              <img src={costu21} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>
          </>
        ) : (
          <>
            <div className="costumers1">
              <img src={costu1} alt="costu1" style={{ maxWidth: '75px' }} />
              <img src={costu2} alt="costu2" style={{ maxWidth: '153px' }} />
              <img src={costu3} alt="costu3" style={{ maxWidth: '165px' }} />
              <img src={costu4} alt="costu4" style={{ maxWidth: '138px' }} />
              <img src={costu5} alt="costu5" style={{ maxWidth: '138px' }} />
              <img src={costu6} alt="costu6" style={{ maxWidth: '68px' }} />
              <img src={costu7} alt="costu7" style={{ maxWidth: '140px' }} />
              <img src={costu8} alt="costu8" style={{ maxWidth: '142px' }} />
              <img src={costu9} alt="costu9" style={{ maxWidth: '138px' }} />
              <img src={costu10} alt="costu10" style={{ maxWidth: '126px' }} />
              <img src={costu11} alt="costu11" style={{ maxWidth: '163px' }} />
              <img
                src={costu12}
                alt="costu12"
                style={{ maxWidth: '135px', height: '30px' }}
              />
              <img
                src={costu13}
                alt="costu13"
                style={{ maxWidth: '140px', height: '40px' }}
              />
              <img src={costu14} alt="costu14" style={{ maxWidth: '130px' }} />
              <img src={costu15} alt="costu8" style={{ maxWidth: '142px' }} />
              <img src={costu16} alt="costu9" style={{ maxWidth: '138px' }} />
              <img src={costu17} alt="costu10" style={{ maxWidth: '126px' }} />
              <img src={costu18} alt="costu11" style={{ maxWidth: '163px' }} />
              <img src={costu19} alt="costu12" style={{ maxWidth: '135px' }} />
              <img src={costu20} alt="costu13" style={{ maxWidth: '140px' }} />
              <img src={costu21} alt="costu14" style={{ maxWidth: '100px' }} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Technologies
