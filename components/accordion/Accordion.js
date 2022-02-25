import React, { useRef, useState } from "react";
import Chevron from "./Chevron";


function Accordion(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("");

    const content = useRef(null);
   
    function toggleAccordion() {
        setActiveState( setActive ===  "" ? "active": "");
        setHeightState( setActive ===  "" ? "0px": `${content.current.scrollHeight}px`);
        setRotateState( setRotate ===  "active" ? "": "rotate");
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <div className="accordion__title" dangerouslySetInnerHTML={{ __html: props.title}}>
                </div>
             <Chevron className={`accordion__icon ${setRotate}`} width={10} fill={"#84ACFD"}/>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content}}>

                </div>
            </div>
        </div>
    )
}


export default Accordion;