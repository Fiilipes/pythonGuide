import React from "react";
import "./Card.css"
import {Link} from "react-router-dom";

const Card = ({link, heading, description, img}) => {
    return (
        <Link to={link} className="card">
            <div className="cardBorder"></div>
            <div className="cardContent"></div>
            <div className="cardImage">
                <img src={img} alt="image" className={"cardImageImg"}/>
            </div>
            <div className="cardText">
                <div className="cardTextHeading">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="12"*/}
                    {/*     height="12">*/}
                    {/*    <path*/}
                    {/*        d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/>*/}
                    {/*    <path*/}
                    {/*        d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z"/>*/}
                    {/*</svg>*/}
                    <h3>
                        {heading}
                    </h3>
                </div>
                <p>
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default Card;