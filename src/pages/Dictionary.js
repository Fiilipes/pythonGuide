import React from "react";
import "./Dictionary.css"
import DictionaryPart from "./DictionaryPart";

const Dictionary = () => {
    let search
    const typeSearch = (e) => {
        search = e.target.value;
        console.log(search)
        Array.from(document.getElementsByClassName("dictPart")).forEach((item) => {
            if (item.children[0].innerHTML.includes(search)) {
                item.style.display = "flex"
            } else {
                item.style.display = "none"
            }
        })
    }


    return (
        <div id={"dictMain"}>
            <div id={"dictContent"}>
                <input type={"text"} id={"searchBar"} onChange={typeSearch}/>
                <div className={"dictSamples"}>
                    <div className={"dictHeader"}>

                    </div>
                    <div className={"dictParts"}>
                        <DictionaryPart
                            command={"print()"}
                            description={"Vypíše text do konzole"}
                            codeDict={"print(\"Text!\")"}
                        />
                        <DictionaryPart
                            command={"input()"}
                            description={"Vypíše text do konzole a vrátí hodnotu"}
                            codeDict={"input(\"Text!\")"}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dictionary;