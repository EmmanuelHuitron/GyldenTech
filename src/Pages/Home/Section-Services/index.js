import React from "react";
import { useIntl } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import card1 from "../../../img/ecommerce.png";
import card2 from "../../../img/Soporte.png";
import card3 from "../../../img/Consultoria y Planeacion.png";
import card4 from "../../../img/Payment Providers.png";
import card5 from "../../../img/UXUI.png";
/* import scrollreveal from "scrollreveal"; */

const Services = () => {
  AOS.init(
   { once: true }
  );
  const intl = useIntl();

  return (
    <div className="sec-services" id="services" >
      <div className="sec-title" data-aos="slide-up" data-aos-duration="1000">
        <h2>
          {intl.formatMessage({
            id: "app.pages.home.seccionServices.label.title",
          })}
        </h2>
      </div>

      <div className="sec-content">
        <CardGroup style={{ justifyContent: "space-evenly" }}>
          <Card className="scroll-card">
            <CardImg alt="Card image cap" src={card1} top width="76px" />
            <CardBody>
              <CardTitle style={{ fontSize: "24px", fontWeight: "700" }}>
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-title1",
                })}
              </CardTitle>

              <CardText>
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-text1",
                })}
              </CardText>
            </CardBody>
          </Card>

          <Card className="scroll-card">
            <CardImg alt="Card image cap" src={card2} top width="100%" />
            <CardBody>
              <CardTitle style={{ fontSize: "24px", fontWeight: "700" }}>
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-title2",
                })}
              </CardTitle>

              <CardText>
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-text2",
                })}
              </CardText>
            </CardBody>
          </Card>

          <Card className="scroll-card">
            <CardImg alt="Card image cap" src={card3} top width="100%" />
            <CardBody>
              <CardTitle
                style={{
                  maxWidth: "140px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-title3",
                })}
              </CardTitle>

              <CardText>
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-text3",
                })}
              </CardText>
            </CardBody>
          </Card>

          <Card className="scroll-card">
            <CardImg alt="Card image cap" src={card4} top width="100%" />
            <CardBody>
              <CardTitle
                style={{
                  maxWidth: "130px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-title4",
                })}
              </CardTitle>

              <CardText>
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-text4",
                })}
              </CardText>
            </CardBody>
          </Card>

          <Card className="scroll-card">
            <CardImg alt="Card image cap" src={card5} top width="100%" />
            <CardBody>
              <CardTitle
                style={{
                  maxWidth: "130px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-title5",
                })}
              </CardTitle>

              <CardText>
                {intl.formatMessage({
                  id: "app.pages.home.seccionServices.label.cart-text5",
                })}
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Services;
