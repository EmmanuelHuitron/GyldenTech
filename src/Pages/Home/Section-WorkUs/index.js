import React, { useState } from "react";
import { useIntl } from "react-intl";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Modal,
} from "reactstrap";
import ModalWork from "../../../components/Modals/Modal-Work-With-Us";

import work1 from "../../../img/PMO.png";
import work2 from "../../../img/QA.png";
import work3 from "../../../img/Comercial.png";

const Work = () => {
  const intl = useIntl();
  AOS.init();
  const [open, setOpen] = useState(false);
  const [work, setWork] = useState("");

  const handleClick = (value) => {
    setOpen(!open);
    setWork(value);
  };
  return (
    <div className="sec-workUs" id="work-with-us">
      <div className="sec-title" data-aos="slide-up" data-aos-duration="1000" data-aos-once="true">
        <h2>
          {intl.formatMessage({
            id: "app.pages.home.sectionWorkUs.label.title",
          })}
        </h2>
      </div>
      <div className="sec-content">
        <Card onClick={() => handleClick("PMO")} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <CardBody>
            <CardTitle>
              {intl.formatMessage({
                id: "app.pages.home.sectionWorkUs.label.pmo",
              })}
            </CardTitle>
            <CardImg alt="card-pmo" src={work1} style={{ maxWidth: "166px" }} />
            <CardText>
              {intl.formatMessage({
                id: "app.pages.home.sectionWorkUs.label.view-profile",
              })}
            </CardText>
          </CardBody>
        </Card>
        <Card onClick={() => handleClick("QA")} data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <CardBody>
            <CardTitle>
              {intl.formatMessage({
                id: "app.pages.home.sectionWorkUs.label.qa",
              })}
            </CardTitle>
            <CardImg alt="card-pmo" src={work2} style={{ maxWidth: "166px" }} />
            <CardText>
              {intl.formatMessage({
                id: "app.pages.home.sectionWorkUs.label.view-profile",
              })}
            </CardText>
          </CardBody>
        </Card>
        <Card onClick={() => handleClick("Comercial")} data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          <CardBody>
            <CardTitle>
              {intl.formatMessage({
                id: "app.pages.home.sectionWorkUs.label.comercial",
              })}
            </CardTitle>
            <CardImg alt="card-pmo" src={work3} style={{ maxWidth: "166px" }} />
            <CardText>
              {intl.formatMessage({
                id: "app.pages.home.sectionWorkUs.label.view-profile",
              })}
            </CardText>
          </CardBody>
        </Card>
      </div>
      <Modal centered fullscreen="xl" scrollable size="md" isOpen={open}>
        <ModalWork open={open} handleClick={handleClick} work={work} />
      </Modal>
    </div>
  );
};

export default Work;
