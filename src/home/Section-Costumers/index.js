import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'

import costu1 from '../../img/walmart.png'
/* import costu1 from '../../img/champion-logo 1.png' */
import costu2 from '../../img/sams.png'
import costu3 from '../../img/chedraui2.png'
/* import costu3 from '../../img/Digital River.png' */
import costu4 from '../../img/heb.png'
import costu5 from '../../img/Axo.png' /* Tork 1.png */
import costu6 from '../../img/PayPal.png'
import costu7 from '../../img/cfe.png'
import costu8 from '../../img/Logo_Nandro.png'
import costu9 from '../../img/sura.png' /* Alebripets.png */
import costu10 from '../../img/stripe.png'
import costu11 from '../../img/mapfre.PNG'
import costu12 from '../../img/ekt.png' /* Maraga_Logo.png */
import costu13 from '../../img/speedo.png' /* Jobst_logo.png */
import costu14 from '../../img/finanmadrid.PNG' /* GoJiraf.png */
import costu15 from '../../img/OpenPay.png'
import costu16 from '../../img/credito.png'
import costu17 from '../../img/Conekta2.png'
import costu18 from '../../img/bac.png'
import costu19 from '../../img/rsa.png'
import costu20 from '../../img/riskified2.png'
import costu21 from '../../img/farmatodo.png'
import costu22 from '../../img/madisa_cat.png'
import costu23 from '../../img/credito_lm.PNG'
import costu24 from '../../img/inbursa.png'

const Technologies = () => {
  const intl = useIntl()
  AOS.init()

  return (
    <div className="sec-costumers" id="costumers">
      <div className="sec-more-costumers">
        <div className="sec-title">
        <h2>
          {intl.formatMessage({
            id: 'app.pages.home.sectionCostumers.label.title',
          })}
        </h2>
        </div>
        {window.screen.width > 1080 ? (
          <>
            <div className="costumers1">
              <img src={costu1} alt="costu1" style={{ maxWidth: '180px' }} />
              <img src={costu2} alt="costu2" style={{ maxWidth: '85px' }} />
              <img src={costu3} alt="costu3" style={{ maxWidth: '85px' }} />
              <img src={costu4} alt="costu4" style={{ maxWidth: '158px' }} />
              <img src={costu5} alt="costu5" style={{ maxWidth: '180px' }} />
            </div>
            <div className="costumers2">
              <img src={costu6} alt="costu6" style={{ maxWidth: '180px' }} />
              <img src={costu7} alt="costu7" style={{ maxWidth: '160px' }} />
              <img src={costu8} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu9} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu10} alt="costu10" style={{ maxWidth: '146px' }} />
            </div>
            <div className="costumers2">
            <img src={costu11} alt="costu11" style={{ maxWidth: '153px' }} />
              <img src={costu12} alt="costu12" style={{ maxWidth: '180px', height: '90px' }}
              />
              <img src={costu13} alt="costu13" style={{ maxWidth: '180px', height: '90px' }}
              />
              <img src={costu14} alt="costu14" style={{ maxWidth: '180px' }} />
              <img src={costu15} alt="costu8" style={{ maxWidth: '162px' }} />
            </div>
            <div className="costumers2">
              <img src={costu16} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu17} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu18} alt="costu11" style={{ maxWidth: '183px' }} />
              <img src={costu19} alt="costu12" style={{ maxWidth: '155px' }} />
              <img src={costu20} alt="costu13" style={{ maxWidth: '160px' }} />
              
            </div>
            <div className="costumers2">
            <img src={costu21} alt="costu14" style={{ maxWidth: '150px' }} />
            <img src={costu22} alt="costu14" style={{ maxWidth: '150px' }} />
            <img src={costu23} alt="costu14" style={{ maxWidth: '150px' }} />
            <img src={costu24} alt="costu14" style={{ maxWidth: '150px' }} />
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
              <img src={costu22} alt="costu14" style={{ maxWidth: '100px' }} />
              <img src={costu23} alt="costu14" style={{ maxWidth: '100px' }} />
              <img src={costu24} alt="costu14" style={{ maxWidth: '100px' }} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Technologies
