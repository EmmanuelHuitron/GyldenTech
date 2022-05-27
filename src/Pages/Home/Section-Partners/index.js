import React/* , {useState} */ from "react";
import { useIntl } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SliderPartner from "../../../components/Sliders/Slide-Partners"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pay1 from "../../../img/VTEX.png";
import pay2 from "../../../img/Datatrics.png";
import pay3 from "../../../img/OpenPay.png";
import pay4 from "../../../img/PayPal.png";
import pay5 from "../../../img/OKY.png";
import pay6 from "../../../img/Conekta.png";



const Partners = () => {
  const intl = useIntl();
  AOS.init();
  return (
    <div className="sec-partners" id="partners">
      <div className="sec-title" data-aos="slide-up" data-aos-duration="1000" data-aos-once="true">
        <h2>
          {intl.formatMessage({
            id: "app.pages.home.sectionPartners.label.title",
          })}
        </h2>
      </div>
      {
      window.screen.width > 768?(
        <div className="sec-content" style={{width:"90%",display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
          <img src={pay1} alt="pay1" style={{maxWidth:"160px"}}/>
          <img src={pay2} alt="pay2" style={{maxWidth:"180px"}}/>
          <img src={pay3} alt="pay3" style={{maxWidth:"180px"}}/>
          <img src={pay4} alt="pay4" style={{maxWidth:"180px"}}/>
          <img src={pay5} alt="pay5" style={{maxWidth:"160px"}}/>
          <img src={pay6} alt="pay6" style={{maxWidth:"180px"}}/>
      </div>
      ): (
        
        <SliderPartner />
        
      )     
      } 
    </div>
  );
};

export default Partners;
