// "use strict";

import React, {useEffect} from "react";

const Bubble = ({content, code, number, vars, varsValues, varsTypes, varsProps}) => {
    let subbubbleArr = []
    let previousVarValues = varsValues
    let currentVarValues = varsValues
    let testString = ""
    const color = (content, clr) => {
        return `<span style="color:${clr}">${content}</span>`
    }

    const purple = "mediumpurple"
    const yellow = "gold"
    const violet = "palevioletred"
    const white = "white"
    const green = "springgreen"
    const bright = "sandybrown"

    let constVariables = ["randomNumber"]
    let variables = vars
    let localFunctions = ["print", "input"]
    let importedFunctions = ["randint"]


    const reformat = async () => {



        code = code.replace(/\(/g, color("(", yellow))
        code = code.replace(/\)/g, color(")", yellow))

        code = code.replace(/\n/g, "<br>")
        code = code.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
        code = code.replace(/import/g, color("import", violet))

        // operators
        code = code.replace(/ \+ /g, color(" + ", violet))
        code = code.replace(/ - /g, color(" - ", violet))
        code = code.replace(/ \* /g, color(" * ", violet))
        code = code.replace(/ \/ /g, color(" / ", violet))
        code = code.replace(/ = /g, color(" = ", violet))
        code = code.replace(/ >= /g, color(" >= ", violet))
        code = code.replace(/ <= /g, color(" <= ", violet))
        code = code.replace(/ > /g, color(" > ", violet))
        code = code.replace(/ < /g, color(" < ", violet))

        // logic operators
        code = code.replace(/ and /g, color(" and ", violet))
        code = code.replace(/ or /g, color(" or ", violet))
        code = code.replace(/ not /g, color(" not ", violet))

        // statements
        code = code.replace(/if/g, color("if", violet))
        code = code.replace(/elif/g, color("elif", violet))
        code = code.replace(/else/g, color("else", violet))
        code = code.replace(/while/g, color("while", violet))
        code = code.replace(/for/g, color("for", violet))
        code = code.replace(/ in /g, color(" in ", violet))
        code = code.replace(/range/g, color("range", purple))
        code = code.replace(/break/g, color("break", violet))
        code = code.replace(/continue/g, color("continue", violet))
        code = code.replace(/def/g, color("def", violet))
        code = code.replace(/return/g, color("return", violet))
        code = code.replace(/pass/g, color("pass", violet))

        // custom
        code = code.replace(/"Jste dospělý\/á."/g, color("\"Jste dospělý/á.\"", bright))
        code = code.replace(/"Jste moc mladý\/á."/g, color("\"Jste dospělý/á.\"", bright))
        code = code.replace(/"Můžete vstoupit do zábavního parku."/g, color("\"Můžete vstoupit do zábavního parku.\"", bright))
        code = code.replace(/"Nemůžete vstoupit do zábavního parku."/g, color("\"Nemůžete vstoupit do zábavního parku.\"", bright))
        // numbers
        code = code.replace(/1/g, color("1", purple))
        code = code.replace(/2/g, color("2", purple))
        code = code.replace(/3/g, color("3", purple))
        code = code.replace(/4/g, color("4", purple))
        code = code.replace(/5/g, color("5", purple))
        code = code.replace(/6/g, color("6", purple))
        code = code.replace(/7/g, color("7", purple))
        code = code.replace(/8/g, color("8", purple))
        code = code.replace(/9/g, color("9", purple))
        code = code.replace(/0/g, color("0", purple))

        // variables
        code = code.replace(/print/g, color("print", purple))
        code = code.replace(/input/g, color("input", purple))
        code = code.replace(/str/g, color("str", purple))
        code = code.replace(/int/g, color("int", purple))
        // functions
        importedFunctions.forEach(oneFunc => {
            code = code.replace(oneFunc, color(oneFunc, green))
        })
        localFunctions.forEach(oneFunc => {
            code = code.replace(oneFunc, color(oneFunc, purple))
        })
        variables.forEach(oneVar => {
            code = code.replace(oneVar, color(oneVar, white))
        })


        return code
    }
    const setVars = async () => {
        document.getElementById("vars"+number).innerHTML = ""
        let varArr = []
        vars.forEach((oneVar, index) => {
            let div = document.createElement("div")
            div.innerHTML = oneVar
            let textDiv = document.createElement("input")
            console.log(varsTypes)

            if (varsTypes[index] ==="int") {

                textDiv.setAttribute("type", "number")
                textDiv.setAttribute("value", varsValues[index])

                textDiv.onchange = () => {
                    if (textDiv.value === "") {
                        textDiv.value = 0
                    } else if (Number(textDiv.value) < Number(varsProps[index][0])) {
                        textDiv.value = varsProps[index][0]
                    } else if (Number(textDiv.value) > Number(varsProps[index][1])) {
                        textDiv.value = varsProps[index][1]
                    }
                    currentVarValues[index] = textDiv.value
                    document.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            setOutput().then(r => document.querySelector("#output"+number+" .output2").innerHTML = `<span style="color: #aaaaaa; font-size: 12px">Output:</span> ${r}`)
                        }
                    })

                }
            } else if (varsTypes[index] === "string") {
                console.log("str")
                textDiv.setAttribute("type", "text")
                textDiv.setAttribute("value", varsValues[0])

                textDiv.onchange = () => {
                    currentVarValues[index] = textDiv.value
                    document.addEventListener("keydown", (e) => {
                        if (e.key === "Enter") {
                            setOutput().then(r => document.querySelector("#output"+number+" .output2").innerHTML = `<span style="color: #aaaaaa; font-size: 12px">Output:</span> ${r}`)
                        }
                    })
                }
            }
            textDiv.setAttribute("id", oneVar + number)
            textDiv.className = "varInput"
            div.appendChild(textDiv)
            varArr.push(div)
        })
        return varArr
    }

    const setOutput = async () => {
        switch (number) {
            case "1":
                let output = varsValues[0]
                return output
            case "2":
                let min = Math.ceil(varsValues[0]);
                let max = Math.floor(varsValues[1]);

                let output2 = Math.floor(Math.random() * (max - min + 1)) + min;
                return output2
            case "3":
                let output3 = varsValues[0] + varsValues[1]
                return output3
            case "4":
                if (varsValues[0] >= 18) {
                    return "Jste dospělý/á"
                } else {
                    return "Jste moc mladý/á"
                }
            case "5":
                if (varsValues[0] >= 15 && varsValues[1] >= 500) {
                    return "Můžete vstoupit do zábavního parku."
                } else {
                    return "Nemůžete vstoupit do zábavního parku."
                }
            case "6":
                let sum = 0
                for (let i = Number(varsValues[0]); i <= Number(varsValues[1]); i++) {
                    sum+=i
                }
                return sum.toString()
        }

    }
    // console.log(code)

    useEffect(
        () => {
            reformat().then(r => {
                // console.log(r)
                document.getElementById("code"+number).innerHTML = r
            })
            setVars().then(r => {
                console.log(number)
                r.forEach(oneVar => {
                    document.getElementById("vars"+number).appendChild(oneVar)
                })
            })
            setOutput().then(r => {
                document.querySelector("#output"+number+" .output2").innerHTML = `<span style="color: #aaaaaa; font-size: 12px">Output:</span> ${r}`
            })

            return () => {
                // console.log("unmounting")
            }
        }, []
    )


    return (
        <div className={"bubble"}>
            <div id={"content"+number} className={"content"}>
                <h2>{content[0]}</h2>
                <p>{content[1]}</p>
            </div>
            <div id={"vars"+number} className={"vars"}>

            </div>
            <div id={"code"+number} className={"code"}>

            </div>
            <div id={"output"+number} className={"output"}>
                <div className={"output1"} onClick={() => setOutput().then(r => document.querySelector("#output"+number+" .output2").innerHTML = `<span style="color: #aaaaaa; font-size: 12px">Output:</span> ${r}`)}>
                    Run
                </div>
                <div className={"output2"}>

                </div>
            </div>
        </div>
    );
}

export default Bubble;