import React, {useEffect} from "react";

const DictionaryPart = ({command, description, codeDict}) => {

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
    let localFunctions = ["print", "input"]
    let importedFunctions = ["randint"]


    const reformat = async (code) => {



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


        return code
    }

    useEffect(
        () => {
            reformat(command).then(r => {
                document.getElementById("command" + command).innerHTML = r
            })
            reformat(codeDict).then(r => {
                document.getElementById("code" + command).innerHTML = r
            })

            return () => {
                // console.log("unmounting")
            }
        }, []
    )

    return (
        <div className={"dictPart"}>
            <div id={"command" + command}></div>
            <div>{description}</div>
            <div id={"code" + command}></div>
        </div>
    );
}

export default DictionaryPart;