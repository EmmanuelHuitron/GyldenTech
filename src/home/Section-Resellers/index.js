import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
} from 'reactstrap'

import rese1 from '../../img/Loolu.png'
import logo1 from '../../img/Loolu-logo.png'
import rese2 from '../../img/Mdr.png'
import logo2 from '../../img/Mdr-logo.png'
import rese3 from '../../img/spw.png'
import logo3 from '../../img/spw-logo.png'
import rese4 from '../../img/Janis.png'
import logo4 from '../../img/Janis-logo.png'
import logospw from '../../img/spw-icon.png'

const Partners = () => {
  const intl = useIntl()
  AOS.init()

  return (
    <div className="sec-resellers" id="resellers">
      <div
        className="sec-title"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2>
          {intl.formatMessage({
            id: 'app.pages.home.sectionResellers.label.title',
          })}
        </h2>
      </div>
      <div className="sec-content">
        <Card
          className="card-reseller1"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <CardBody>
            <CardImg
              alt="card-logo"
              src={logo1}
              style={{ maxWidth: '166px' }}
            />
            <CardTitle style={{ fontSize: '24px', fontWeight: '700' }}>
              {intl.formatMessage({
                id: 'app.pages.home.sectionResellers.label.cart1-title',
              })}
            </CardTitle>
            <NavItem>
              <NavLink href="#">
                {intl.formatMessage({
                  id: 'app.pages.home.sectionResellers.label.link',
                })}
              </NavLink>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_286_11608)">
                  <path
                    d="M0.9375 7.5H14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 0.9375L14.0625 7.5L7.5 14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_286_11608">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
          </CardBody>
          <CardImg
            alt="card-loolu"
            src={rese1}
            top
            style={{ maxWidth: '734px' }}
          />
        </Card>
        <Card
          className="card-reseller2"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <CardImg
            alt="card-mdr"
            src={rese2}
            top
            style={{ maxWidth: '734px', width: '100%' }}
          />
          <CardBody>
            <CardImg alt="card-mdr" src={logo2} style={{ maxWidth: '145px' }} />
            <CardTitle style={{ fontSize: '24px', fontWeight: '700' }}>
              {intl.formatMessage({
                id: 'app.pages.home.sectionResellers.label.cart1-title',
              })}
            </CardTitle>
            <NavItem>
              <NavLink href="#">
                {intl.formatMessage({
                  id: 'app.pages.home.sectionResellers.label.link',
                })}
              </NavLink>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_286_11608)">
                  <path
                    d="M0.9375 7.5H14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 0.9375L14.0625 7.5L7.5 14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_286_11608">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
          </CardBody>
        </Card>
        <Card
          className="card-reseller3"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <CardBody>
            <CardImg
              alt="card-logo"
              src={logo3}
              style={{ maxWidth: '148px' }}
            />
            <CardTitle style={{ fontSize: '24px', fontWeight: '700' }}>
              {intl.formatMessage({
                id: 'app.pages.home.sectionResellers.label.cart1-title',
              })}
            </CardTitle>
            <NavItem>
              <NavLink href="#">
                {intl.formatMessage({
                  id: 'app.pages.home.sectionResellers.label.link',
                })}
              </NavLink>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_286_11608)">
                  <path
                    d="M0.9375 7.5H14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 0.9375L14.0625 7.5L7.5 14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_286_11608">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
          </CardBody>
          <div className="image-spw">
            <CardImg
              alt="card-loolu"
              src={rese3}
              top
              style={{ maxWidth: '734px' }}
            />
            <img src={logospw} alt="icon-spw" className="spw-logo" />
          </div>
        </Card>
        <Card
          className="card-reseller4"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <CardImg
            alt="card-mdr"
            src={rese4}
            top
            style={{ maxWidth: '734px', width: '100%' }}
          />
          <CardBody>
            <CardImg alt="card-mdr" src={logo4} style={{ maxWidth: '210px' }} />
            <CardTitle style={{ fontSize: '24px', fontWeight: '700' }}>
              {intl.formatMessage({
                id: 'app.pages.home.sectionResellers.label.cart1-title',
              })}
            </CardTitle>
            <NavItem>
              <NavLink href="#">
                {intl.formatMessage({
                  id: 'app.pages.home.sectionResellers.label.link',
                })}
              </NavLink>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_286_11608)">
                  <path
                    d="M0.9375 7.5H14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 0.9375L14.0625 7.5L7.5 14.0625"
                    stroke="#0084FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_286_11608">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NavItem>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Partners
