import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SliderTechno from '../../components/Sliders/Slide-Techno'

const Technologies = () => {
  const intl = useIntl()
  AOS.init()
  return (
    <div className="sec-tech" id="technologies">
      <div
        className="sec-title"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2>
          {intl.formatMessage({
            id: 'app.pages.home.sectionTech.label.title',
          })}
        </h2>
      </div>
      <SliderTechno />
    </div>
  )
}

export default Technologies
