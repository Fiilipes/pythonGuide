import React from "react";
import "./Home.css"
import Card from "./Card";
import image1 from "../graduate.png"
import image2 from "../book.png"
import Footer from "./Footer";

const Home = () => {
    const onmousechange = function (e){
        for(const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);


        }
    }
    return (
        <div>
            <div className={"homeHeading"}>
                <h1>Python příručka</h1>
                <h3>Vše co o pythonu potřebujete vědět na jednom místě</h3>
            </div>
            <div className={"homeContent"}>
                <div id="cards" onMouseMove={onmousechange}>
                    <Card
                        link={"/pythonGuide/guide"}
                        heading={"Příručka"}
                        description={"Příručka obsahuje 6 programů, které vám pomohou naučit se python"}
                        img={image1}
                    />
                    <Card
                        link={"/pythonGuide/dictionary"}
                        heading={"Slovník"}
                        description={"Slovník obsahuje všechny komponenty pythonu a jejich vysvětlení"}
                        img={image2}
                    />

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;