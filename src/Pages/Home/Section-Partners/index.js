import React/* , {useState} */ from "react";
import { useIntl } from "react-intl";

import pay1 from "../../../img/VTEX.png";
import pay2 from "../../../img/Datatrics.png";
import pay3 from "../../../img/OpenPay.png";
import pay4 from "../../../img/PayPal.png";
import pay5 from "../../../img/OKY.png";
import pay6 from "../../../img/Conekta.png";

const Partners = () => {
  const intl = useIntl();
  
  return (
    <div className="sec-partners" id="partners">
      <div className="sec-title">
        <h2>
          {intl.formatMessage({
            id: "app.pages.home.sectionPartners.label.title",
          })}
        </h2>
      </div>
      <div className="sec-content" style={{width:"90%",display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
          <img src={pay1} alt="pay1" style={{maxWidth:"160px"}}/>
          <img src={pay2} alt="pay2" style={{maxWidth:"180px"}}/>
          <img src={pay3} alt="pay3" style={{maxWidth:"180px"}}/>
          <img src={pay4} alt="pay4" style={{maxWidth:"180px"}}/>
          <img src={pay5} alt="pay5" style={{maxWidth:"160px"}}/>
          <img src={pay6} alt="pay6" style={{maxWidth:"180px"}}/>
      </div>
    </div>
  );
};

export default Partners;
