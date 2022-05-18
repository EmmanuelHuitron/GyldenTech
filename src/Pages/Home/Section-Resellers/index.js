import React, {useEffect} from "react";
import { useIntl } from "react-intl";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap"
import scrollreveal from "scrollreveal";

import rese1 from "../../../img/Loolu.png";
import logo1 from "../../../img/Loolu-logo.png";
import rese2 from "../../../img/Mdr.png";
import logo2 from "../../../img/Mdr-logo.png";
import rese3 from "../../../img/spw.png";
import logo3 from "../../../img/spw-logo.png";
import rese4 from "../../../img/Janis.png";
import logo4 from "../../../img/Janis-logo.png";

const Partners = () => {
  const intl = useIntl();
  
  useEffect(() => {
    const card1 = scrollreveal({
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: false
    });
    card1.reveal(
      `.card-reseller1,
      .card-reseller3`
    )

    const card2 = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false
    });
    card2.reveal(
      `.card-reseller2,
      .card-reseller4`
    )
   

  }, [])

  return (
    <div className="sec-resellers" id="resellers">
      <div className="sec-title">
        <h2>
          {intl.formatMessage({
            id: "app.pages.home.sectionResellers.label.title",
          })}
        </h2>
      </div>
      <div className="sec-content" >
          <Card className="card-reseller1">
            <CardBody>
              <CardImg alt="card-logo" src={logo1} style={{maxWidth: "166px"}}/>
              <CardTitle style={{ fontSize: "24px", fontWeight: "700" }}>
                {intl.formatMessage({
                  id: "app.pages.home.sectionResellers.label.cart1-title",
                })}
              </CardTitle>  
            </CardBody>
            <CardImg alt="card-loolu" src={rese1} top style={{maxWidth: "734px"}}/>
          </Card>
          <Card className="card-reseller2">
            <CardImg alt="card-mdr" src={rese2} top style={{maxWidth: "734px", width: "100%"}}/>
            <CardBody>
              <CardImg alt="card-mdr" src={logo2} style={{maxWidth: "145px"}}/>
              <CardTitle style={{ fontSize: "24px", fontWeight: "700" }}>
                {intl.formatMessage({
                  id: "app.pages.home.sectionResellers.label.cart1-title",
                })}
              </CardTitle>  
            </CardBody>
          </Card>
          <Card className="card-reseller3">
            <CardBody>
              <CardImg alt="card-logo" src={logo3} style={{maxWidth: "148px"}} />
              <CardTitle style={{ fontSize: "24px", fontWeight: "700" }}>
                {intl.formatMessage({
                  id: "app.pages.home.sectionResellers.label.cart1-title",
                })}
              </CardTitle>  
            </CardBody>
            <CardImg alt="card-loolu" src={rese3} top style={{maxWidth: "734px"}}/>
          </Card>
          <Card className="card-reseller4">
            <CardImg alt="card-mdr" src={rese4} top style={{maxWidth: "734px", width: "100%"}}/>
            <CardBody>
              <CardImg alt="card-mdr" src={logo4} style={{maxWidth: "210px"}} />
              <CardTitle style={{ fontSize: "24px", fontWeight: "700" }}>
                {intl.formatMessage({
                  id: "app.pages.home.sectionResellers.label.cart1-title",
                })}
              </CardTitle>  
            </CardBody>
          </Card>
      </div>
    </div>
  );
};

export default Partners;