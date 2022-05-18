import React , {useEffect} from "react";
import { useIntl } from "react-intl";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import scrollreveal from "scrollreveal";

import cert1 from "../../../img/CERTIFIED-VTEX-Project.png";
import cert2 from "../../../img/CERTIFIED-VTEX-Fronted.png";
import cert3 from "../../../img/CERTIFIED-VTEX-Reseller.png";
import cert4 from "../../../img/CERTIFIED-VTEX-Suport.png";
import cert5 from "../../../img/VTEX IO_Certified 1.png";
const Awards = () => {
  const intl = useIntl();
  useEffect(() => {
    const card1 = scrollreveal({
      origin: "left",
      distance: "100px",
      duration: 500,
      reset: false
    });
    card1.reveal(
      `.scroll-card1`
    )

    const card2 = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false
    });
    card2.reveal(
      `.scroll-card2`
    )
    const card3 = scrollreveal({
      origin: "left",
      distance: "100px",
      duration: 1500,
      reset: false
    });
    card3.reveal(
      `.scroll-card3,
      .cert1,
      .cert2`
    )

    const card4 = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 2000,
      reset: false
    });
    card4.reveal(
      `.scroll-card4`
    )
    const certi = scrollreveal({
      origin: "right",
      distance: "100px",
      duration: 1500,
      reset: false
    })
    certi.reveal(`
      .cert4,
      .cert5
    `)
    const certiup = scrollreveal({
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      reset: false
    })
    certiup.reveal(`
      .cert3
    `)

  }, [])
  return (
    <div className="sec-awards" id="awards-and-certifications">
      <div className="sec-title">
        <h2>
          {intl.formatMessage({
            id: "app.pages.home.sectionAwards.label.title",
          })}
        </h2>
      </div>
      <div
        className="sec-content"
        style={{
          width: "90%"
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "35px",
          marginBottom: "50px"
        }}>
          <Card body className="scroll-card1">
            <CardBody style={{width: "590px", display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: "40px 30px", background: "#F6F6F6"}}>
              <div className="image-card" style={{marginRight: "30px"}}>
                <svg
                  width="118"
                  height="118"
                  viewBox="0 0 118 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="59" cy="59" r="59" fill="white" />
                  <path
                    d="M26.7852 92.6627H91.9386V84.3646L83.7596 73.6006H72.4205H68.7399H65.0965H61.4346H57.3079H53.6459H50.0025H46.3034H34.9643L26.7852 84.3646V92.6627ZM43.0689 77.4169H75.6549V79.3153C75.6549 80.3721 74.837 81.2137 73.8518 81.2137H44.8906C43.8868 81.2137 43.0875 80.3526 43.0875 79.3153V77.4169H43.0689ZM30.41 85.6955L36.7116 77.3974H39.4627V79.2957C39.4627 82.4467 41.8979 85.0105 44.8906 85.0105H73.8518C76.8446 85.0105 79.2797 82.4467 79.2797 79.2957V77.3974H82.0309L88.3324 85.6955V88.8464H30.41V85.6955Z"
                    fill="#F71963"
                  />
                  <path
                    d="M43.515 36.7677C42.158 34.0669 40.9126 31.601 39.7043 29.0959C39.4069 28.4892 39.1652 27.8042 39.0909 27.1192C38.7935 24.8686 40.9312 22.4222 43.3105 22.4418C48.4224 22.4809 53.5157 22.4418 58.6276 22.4613C66.3233 22.5005 74.0191 22.5396 81.7148 22.6179C82.4583 22.6179 83.2205 22.7549 83.9268 22.9702C86.4549 23.7139 87.0497 26.7865 86.0274 28.8219C84.3915 32.0316 82.7372 35.2412 81.1013 38.4508C78.8149 42.9717 76.5285 47.4926 74.2421 52.0135C73.3499 53.7749 72.4204 55.5363 71.5096 57.2977C69.7251 60.7422 67.922 64.1867 66.1374 67.6508C65.3939 69.099 64.2786 69.9601 62.6985 70.0384C60.9326 70.1167 59.65 69.2556 58.8507 67.6312C57.9584 65.8111 57.1033 63.9714 56.2297 62.1513C55.765 61.1923 55.2631 60.2334 54.724 59.1374C54.3336 59.8224 53.9804 60.3899 53.6644 60.9966C52.8837 62.5232 52.103 64.0693 51.3408 65.6154C50.8204 66.6722 50.0582 67.3181 48.9057 67.3181C47.7532 67.3181 46.9911 66.6722 46.4706 65.6154C44.0169 60.7226 41.5446 55.8299 39.1095 50.9371C37.4179 47.5318 35.7635 44.1264 34.0905 40.7211C33.0496 38.6857 34.1277 36.6894 36.284 36.6307C38.1986 36.572 40.0947 36.6112 42.0093 36.6307C42.4554 36.6112 42.9016 36.709 43.515 36.7677ZM54.8913 36.6503C52.0472 36.6503 49.1846 36.6307 46.3405 36.6503C44.7604 36.6699 44.0355 37.9616 44.7419 39.4294C45.8014 41.6213 46.8424 43.8133 47.9205 45.9857C49.5749 49.3323 51.2851 52.6398 52.9581 55.9669C53.3112 56.691 53.8131 57.1411 54.631 57.1411C55.4489 57.1411 55.9508 56.6714 56.304 55.9669C59.1295 50.4087 61.9364 44.831 64.7619 39.2728C65.4868 37.8441 64.7805 36.6307 63.2376 36.6307C60.4493 36.6307 57.661 36.6503 54.8913 36.6503Z"
                    fill="#F71963"
                  />
                </svg>
              </div>
              <div className="info-card">
                <CardText style={{fontWeight: "700",fontSize: "48px", color:"#F71963", marginBottom: "0"}}>
                  2021
                </CardText>
                <CardSubtitle className="mb-2" tag="h6" style={{fontWeight: "600",fontSize: "24px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card1-sutitle",
                  })}<span> VTEX Awards</span>
                </CardSubtitle>
                <CardTitle tag="h5" style={{fontWeight: "600",fontSize: "35px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card1-title",
                  })}
                </CardTitle>
              </div>
            </CardBody>
          </Card>
          <Card body className="scroll-card2">
            <CardBody style={{width: "590px", display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: "40px 30px", background: "#F6F6F6"}}>
              <div className="image-card" style={{marginRight: "30px"}}>
                <svg
                  width="118"
                  height="118"
                  viewBox="0 0 118 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="59" cy="59" r="59" fill="white" />
                  <path
                    d="M26.7852 92.6627H91.9386V84.3646L83.7596 73.6006H72.4205H68.7399H65.0965H61.4346H57.3079H53.6459H50.0025H46.3034H34.9643L26.7852 84.3646V92.6627ZM43.0689 77.4169H75.6549V79.3153C75.6549 80.3721 74.837 81.2137 73.8518 81.2137H44.8906C43.8868 81.2137 43.0875 80.3526 43.0875 79.3153V77.4169H43.0689ZM30.41 85.6955L36.7116 77.3974H39.4627V79.2957C39.4627 82.4467 41.8979 85.0105 44.8906 85.0105H73.8518C76.8446 85.0105 79.2797 82.4467 79.2797 79.2957V77.3974H82.0309L88.3324 85.6955V88.8464H30.41V85.6955Z"
                    fill="#F71963"
                  />
                  <path
                    d="M43.515 36.7677C42.158 34.0669 40.9126 31.601 39.7043 29.0959C39.4069 28.4892 39.1652 27.8042 39.0909 27.1192C38.7935 24.8686 40.9312 22.4222 43.3105 22.4418C48.4224 22.4809 53.5157 22.4418 58.6276 22.4613C66.3233 22.5005 74.0191 22.5396 81.7148 22.6179C82.4583 22.6179 83.2205 22.7549 83.9268 22.9702C86.4549 23.7139 87.0497 26.7865 86.0274 28.8219C84.3915 32.0316 82.7372 35.2412 81.1013 38.4508C78.8149 42.9717 76.5285 47.4926 74.2421 52.0135C73.3499 53.7749 72.4204 55.5363 71.5096 57.2977C69.7251 60.7422 67.922 64.1867 66.1374 67.6508C65.3939 69.099 64.2786 69.9601 62.6985 70.0384C60.9326 70.1167 59.65 69.2556 58.8507 67.6312C57.9584 65.8111 57.1033 63.9714 56.2297 62.1513C55.765 61.1923 55.2631 60.2334 54.724 59.1374C54.3336 59.8224 53.9804 60.3899 53.6644 60.9966C52.8837 62.5232 52.103 64.0693 51.3408 65.6154C50.8204 66.6722 50.0582 67.3181 48.9057 67.3181C47.7532 67.3181 46.9911 66.6722 46.4706 65.6154C44.0169 60.7226 41.5446 55.8299 39.1095 50.9371C37.4179 47.5318 35.7635 44.1264 34.0905 40.7211C33.0496 38.6857 34.1277 36.6894 36.284 36.6307C38.1986 36.572 40.0947 36.6112 42.0093 36.6307C42.4554 36.6112 42.9016 36.709 43.515 36.7677ZM54.8913 36.6503C52.0472 36.6503 49.1846 36.6307 46.3405 36.6503C44.7604 36.6699 44.0355 37.9616 44.7419 39.4294C45.8014 41.6213 46.8424 43.8133 47.9205 45.9857C49.5749 49.3323 51.2851 52.6398 52.9581 55.9669C53.3112 56.691 53.8131 57.1411 54.631 57.1411C55.4489 57.1411 55.9508 56.6714 56.304 55.9669C59.1295 50.4087 61.9364 44.831 64.7619 39.2728C65.4868 37.8441 64.7805 36.6307 63.2376 36.6307C60.4493 36.6307 57.661 36.6503 54.8913 36.6503Z"
                    fill="#F71963"
                  />
                </svg>
              </div>
              <div className="info-card">
                <CardText style={{fontWeight: "700",fontSize: "48px", color:"#F71963", marginBottom: "0"}}>
                  2020
                </CardText>
                <CardSubtitle className="mb-2" tag="h6" style={{fontWeight: "600",fontSize: "24px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card2-sutitle",
                  })}<span> VTEX</span>
                </CardSubtitle>
                <CardTitle tag="h5" style={{fontWeight: "600",fontSize: "36px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card2-title",
                  })}
                </CardTitle>
              </div>
            </CardBody>
          </Card>
          <Card body className="scroll-card3">
            <CardBody style={{width: "590px", display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: "40px 30px", background: "#F6F6F6"}}>
              <div className="image-card" style={{marginRight: "30px"}}>
                <svg
                  width="118"
                  height="118"
                  viewBox="0 0 118 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="59" cy="59" r="59" fill="white" />
                  <path
                    d="M26.7852 92.6627H91.9386V84.3646L83.7596 73.6006H72.4205H68.7399H65.0965H61.4346H57.3079H53.6459H50.0025H46.3034H34.9643L26.7852 84.3646V92.6627ZM43.0689 77.4169H75.6549V79.3153C75.6549 80.3721 74.837 81.2137 73.8518 81.2137H44.8906C43.8868 81.2137 43.0875 80.3526 43.0875 79.3153V77.4169H43.0689ZM30.41 85.6955L36.7116 77.3974H39.4627V79.2957C39.4627 82.4467 41.8979 85.0105 44.8906 85.0105H73.8518C76.8446 85.0105 79.2797 82.4467 79.2797 79.2957V77.3974H82.0309L88.3324 85.6955V88.8464H30.41V85.6955Z"
                    fill="#F71963"
                  />
                  <path
                    d="M43.515 36.7677C42.158 34.0669 40.9126 31.601 39.7043 29.0959C39.4069 28.4892 39.1652 27.8042 39.0909 27.1192C38.7935 24.8686 40.9312 22.4222 43.3105 22.4418C48.4224 22.4809 53.5157 22.4418 58.6276 22.4613C66.3233 22.5005 74.0191 22.5396 81.7148 22.6179C82.4583 22.6179 83.2205 22.7549 83.9268 22.9702C86.4549 23.7139 87.0497 26.7865 86.0274 28.8219C84.3915 32.0316 82.7372 35.2412 81.1013 38.4508C78.8149 42.9717 76.5285 47.4926 74.2421 52.0135C73.3499 53.7749 72.4204 55.5363 71.5096 57.2977C69.7251 60.7422 67.922 64.1867 66.1374 67.6508C65.3939 69.099 64.2786 69.9601 62.6985 70.0384C60.9326 70.1167 59.65 69.2556 58.8507 67.6312C57.9584 65.8111 57.1033 63.9714 56.2297 62.1513C55.765 61.1923 55.2631 60.2334 54.724 59.1374C54.3336 59.8224 53.9804 60.3899 53.6644 60.9966C52.8837 62.5232 52.103 64.0693 51.3408 65.6154C50.8204 66.6722 50.0582 67.3181 48.9057 67.3181C47.7532 67.3181 46.9911 66.6722 46.4706 65.6154C44.0169 60.7226 41.5446 55.8299 39.1095 50.9371C37.4179 47.5318 35.7635 44.1264 34.0905 40.7211C33.0496 38.6857 34.1277 36.6894 36.284 36.6307C38.1986 36.572 40.0947 36.6112 42.0093 36.6307C42.4554 36.6112 42.9016 36.709 43.515 36.7677ZM54.8913 36.6503C52.0472 36.6503 49.1846 36.6307 46.3405 36.6503C44.7604 36.6699 44.0355 37.9616 44.7419 39.4294C45.8014 41.6213 46.8424 43.8133 47.9205 45.9857C49.5749 49.3323 51.2851 52.6398 52.9581 55.9669C53.3112 56.691 53.8131 57.1411 54.631 57.1411C55.4489 57.1411 55.9508 56.6714 56.304 55.9669C59.1295 50.4087 61.9364 44.831 64.7619 39.2728C65.4868 37.8441 64.7805 36.6307 63.2376 36.6307C60.4493 36.6307 57.661 36.6503 54.8913 36.6503Z"
                    fill="#F71963"
                  />
                </svg>
              </div>
              <div className="info-card">
                <CardText style={{fontWeight: "700",fontSize: "48px", color:"#F71963", marginBottom: "0"}}>
                  2020
                </CardText>
                <CardSubtitle className="mb-2" tag="h6" style={{fontWeight: "600",fontSize: "24px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card3-sutitle",
                  })}<span> VTEX Awards</span>
                </CardSubtitle>
                <CardTitle tag="h5" style={{fontWeight: "600",fontSize: "36px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card3-title",
                  })}
                </CardTitle>
              </div>
            </CardBody>
          </Card>
          <Card body className="scroll-card4">
            <CardBody style={{width: "590px", display: "flex", flexDirection: "row", justifyContent: "flex-start", padding: "40px 30px", background: "#F6F6F6"}}>
              <div className="image-card" style={{marginRight: "30px"}}>
                <svg
                  width="118"
                  height="118"
                  viewBox="0 0 118 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="59" cy="59" r="59" fill="white" />
                  <path
                    d="M26.7852 92.6627H91.9386V84.3646L83.7596 73.6006H72.4205H68.7399H65.0965H61.4346H57.3079H53.6459H50.0025H46.3034H34.9643L26.7852 84.3646V92.6627ZM43.0689 77.4169H75.6549V79.3153C75.6549 80.3721 74.837 81.2137 73.8518 81.2137H44.8906C43.8868 81.2137 43.0875 80.3526 43.0875 79.3153V77.4169H43.0689ZM30.41 85.6955L36.7116 77.3974H39.4627V79.2957C39.4627 82.4467 41.8979 85.0105 44.8906 85.0105H73.8518C76.8446 85.0105 79.2797 82.4467 79.2797 79.2957V77.3974H82.0309L88.3324 85.6955V88.8464H30.41V85.6955Z"
                    fill="#F71963"
                  />
                  <path
                    d="M43.515 36.7677C42.158 34.0669 40.9126 31.601 39.7043 29.0959C39.4069 28.4892 39.1652 27.8042 39.0909 27.1192C38.7935 24.8686 40.9312 22.4222 43.3105 22.4418C48.4224 22.4809 53.5157 22.4418 58.6276 22.4613C66.3233 22.5005 74.0191 22.5396 81.7148 22.6179C82.4583 22.6179 83.2205 22.7549 83.9268 22.9702C86.4549 23.7139 87.0497 26.7865 86.0274 28.8219C84.3915 32.0316 82.7372 35.2412 81.1013 38.4508C78.8149 42.9717 76.5285 47.4926 74.2421 52.0135C73.3499 53.7749 72.4204 55.5363 71.5096 57.2977C69.7251 60.7422 67.922 64.1867 66.1374 67.6508C65.3939 69.099 64.2786 69.9601 62.6985 70.0384C60.9326 70.1167 59.65 69.2556 58.8507 67.6312C57.9584 65.8111 57.1033 63.9714 56.2297 62.1513C55.765 61.1923 55.2631 60.2334 54.724 59.1374C54.3336 59.8224 53.9804 60.3899 53.6644 60.9966C52.8837 62.5232 52.103 64.0693 51.3408 65.6154C50.8204 66.6722 50.0582 67.3181 48.9057 67.3181C47.7532 67.3181 46.9911 66.6722 46.4706 65.6154C44.0169 60.7226 41.5446 55.8299 39.1095 50.9371C37.4179 47.5318 35.7635 44.1264 34.0905 40.7211C33.0496 38.6857 34.1277 36.6894 36.284 36.6307C38.1986 36.572 40.0947 36.6112 42.0093 36.6307C42.4554 36.6112 42.9016 36.709 43.515 36.7677ZM54.8913 36.6503C52.0472 36.6503 49.1846 36.6307 46.3405 36.6503C44.7604 36.6699 44.0355 37.9616 44.7419 39.4294C45.8014 41.6213 46.8424 43.8133 47.9205 45.9857C49.5749 49.3323 51.2851 52.6398 52.9581 55.9669C53.3112 56.691 53.8131 57.1411 54.631 57.1411C55.4489 57.1411 55.9508 56.6714 56.304 55.9669C59.1295 50.4087 61.9364 44.831 64.7619 39.2728C65.4868 37.8441 64.7805 36.6307 63.2376 36.6307C60.4493 36.6307 57.661 36.6503 54.8913 36.6503Z"
                    fill="#F71963"
                  />
                </svg>
              </div>
              <div className="info-card">
                <CardText style={{fontWeight: "700",fontSize: "48px", color:"#F71963", marginBottom: "0"}}>
                  2019
                </CardText>
                <CardSubtitle className="mb-2" tag="h6" style={{fontWeight: "600",fontSize: "24px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card4-sutitle",
                  })}<span> VTEX Awards</span>
                </CardSubtitle>
                <CardTitle tag="h5" style={{fontWeight: "600",fontSize: "36px"}}>
                  {intl.formatMessage({
                    id: "app.pages.home.sectionAwards.label.card4-title",
                  })}
                </CardTitle>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="certificate">
            <div className="title-certificate">
              <h3>
                {intl.formatMessage({
                  id: "app.pages.home.sectionAwards.label.title-certificate",
                })}<span> VTEX</span>
              </h3>
            </div>
            <div className="certificates-logos">
                <img className="cert1" src={cert1} alt="cert1" />
                <img className="cert2" src={cert2} alt="cert2" />
                <img className="cert3" src={cert3} alt="cert3" />
                <img className="cert4" src={cert4} alt="cert4" />
                <img className="cert5" src={cert5} alt="cert5" />
            </div>
        </div>          
      </div>
    </div>
  );
};

export default Awards;
