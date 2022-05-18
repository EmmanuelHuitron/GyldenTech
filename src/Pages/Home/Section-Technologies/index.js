import React from "react"
import { useIntl } from "react-intl";

import tech1 from "../../../img/Amazon.png";
import tech2 from "../../../img/HTML.png";
import tech3 from "../../../img/Java.png";
import tech4 from "../../../img/Mongo.png";
import tech5 from "../../../img/mysql 1.png";
import tech6 from "../../../img/Node.png";

const Technologies = () => {
    const intl = useIntl();
    return (
        <div className="sec-tech" id="technologies">
            <div className="sec-title">
                <h2>
                {intl.formatMessage({
                    id: "app.pages.home.sectionTech.label.title",
                })}
                </h2>
            </div>
            <div className="sec-content" style={{width: "100%",display: "flex", justifyContent: "space-between"}}>
                <img src={tech1} alt="pay1" style={{maxWidth:"210px"}}/>
                <img src={tech2} alt="pay2" style={{maxWidth:"210px"}}/>
                <img src={tech3} alt="pay3" style={{maxWidth:"210px"}}/>
                <img src={tech4} alt="pay4" style={{maxWidth:"210px"}}/>
                <img src={tech5} alt="pay5" style={{maxWidth:"210px"}}/>
                <img src={tech6} alt="pay6" style={{maxWidth:"210px"}}/>
            </div>
        </div>
    )
}

export default Technologies