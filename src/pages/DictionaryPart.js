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
    let localFunctions = ["print", "input", "list", "type", "abs", "round", "min", "max", "sum", "len", "pow", "title", "lower", "upper", "capitalize", "split", "replace", "startswith", "endswith", "find"]
    let importedFunctions = ["randint", "append", "remove", "pop", "insert", "index", "clear", "count", "sort", "reverse", "copy" ]


    const reformat = async (code) => {



        code = code.replace(/\(/g, color("(", yellow))
        code = code.replace(/\)/g, color(")", yellow))
        code = code.replace(/\[/g, color("[", yellow))
        code = code.replace(/]/g, color("]", yellow))
        code = code.replace(/\{/g, color("{", yellow))
        code = code.replace(/}/g, color("}", yellow))


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
        code = code.replace(/ == /g, color(" == ", violet))
        code = code.replace(/ != /g, color(" != ", violet))


        // logic operators
        code = code.replace(/ and /g, color(" and ", violet))
        code = code.replace(/ or /g, color(" or ", violet))
        code = code.replace(/ not /g, color(" not ", violet))

        code = code.replace(/True/g, color("True", purple))
        code = code.replace(/False/g, color("False", purple))

        // statements
        code = code.replace(/elif/g, color("elif", violet))

        code = code.replace(/else/g, color("else", violet))
        code = code.replace(/if/g, color("if", violet))
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
        code = code.replace(/"Jste dosp??l??\/??."/g, color("\"Jste dosp??l??/??.\"", bright))
        code = code.replace(/"Jste moc mlad??\/??."/g, color("\"Jste dosp??l??/??.\"", bright))
        code = code.replace(/"M????ete vstoupit do z??bavn??ho parku."/g, color("\"M????ete vstoupit do z??bavn??ho parku.\"", bright))
        code = code.replace(/"Nem????ete vstoupit do z??bavn??ho parku."/g, color("\"Nem????ete vstoupit do z??bavn??ho parku.\"", bright))
        code = code.replace(/"20"/g, color("\"20\"", bright))
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
        code = code.replace(/<span style="color:mediumpurple">2<\/span><span style="color:mediumpurple">0<\/span>/g, color("20", bright))

        // variables
        code = code.replace(/print/g, color("print", purple))
        code = code.replace(/input/g, color("input", purple))
        code = code.replace(/str/g, color("str", purple))
        code = code.replace(/int/g, color("int", purple))
        code = code.replace(/float/g, color("float", purple))
        code = code.replace(/bool/g, color("bool", purple))
        code = code.replace(/len/g, color("len", purple))

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