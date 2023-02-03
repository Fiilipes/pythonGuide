import React from "react";
import Bubble from "./Bubble";
import "./Guide.css"
import Footer from "./Footer";

const Guide = () => {
    return (
        <div>
            <div id={"bubbles"}>

                <Bubble
                    number={"1"}
                    vars={["text"]}
                    varsValues={["Ahoj tady Filip"]}
                    varsTypes={["string"]}
                    // varsProps={[["", ""]]}
                    content={[
                    /* Nadpis */  "Výpis textu, čísla",
                    /* Popis  */  "Tento program vypíše text, či číslo, ktoré zadáte do proměnné text."
                ]}
                    code={
                    "text = input()\n\nprint(text)"
                }
                />
                <Bubble
                    number={"2"}
                    vars={["min", "max"]}
                    varsValues={["1", "10"]}
                    varsTypes={["int", "int"]}
                    varsProps={[["-1000", "1000"], ["-1000", "1000"]]}
                    content={[
                    /* Nadpis */  "Generátor náhodných čísel",
                    /* Popis  */  "Tento program vygeneruje náhodné číslo v zadaném rozsahu od min do max."
                ]}
                    code={
                    "import random\n\nmin = input()\nmax = input()\n\nrandomNumber = random.randint(min, max)\n\nprint(randomNumber)"
                }
                />
                <Bubble
                    number={"3"}
                    vars={["text", "number"]}
                    varsValues={["Kombinace", "1"]}
                    varsTypes={["string", "int"]}
                    varsProps={[[], ["-1000", "1000"]]}
                    content={[
                    /* Nadpis */  "Vypsání kombinace textu a čísla",
                    /* Popis  */  "Tento program vypíše kombinaci textu a čísla, ktoré zadáte do proměnných text a number."
                ]}
                    code={
                    "text = input()\nnumber = input()\n\nprint(str(text) + str(number))"
                }
                />
                <Bubble
                    number={"4"}
                    vars={["age"]}
                    varsValues={["25"]}
                    varsTypes={["int"]}
                    varsProps={[["1", "1000"]]}
                    content={[
                    /* Nadpis */  "Jednoduché podmínky",
                    /* Popis  */  "V tomto programu si ukážeme, ako fungují jednoduché podmínky. Do proměnné age zadáte svůj věk a program vám odpoví, zda jste dospělý/á či ne."
                ]}
                    code={
                    "age = input()\n\nif age >= 18:\n\tprint(\"Jste dospělý/á.\")\nelse:\n\tprint(\"Jste moc mladý/á.\")"
                }
                />
                <Bubble
                    number={"5"}
                    vars={["age", "money"]}
                    varsValues={["12", "1000"]}
                    varsTypes={["int", "int"]}
                    varsProps={[["1", "1000"], ["0", "1000000"]]}
                    content={[
                    /* Nadpis */  "Složené podmínky",
                    /* Popis  */  "V tomto programu si ukážeme jak fungují složené podmínky. Do proměnné age zadáte svůj věk, do proměnné money zadáte svůj počet peněz a program vám odpoví, můžete vstoupit do zábavního parku."
                ]}
                    code={
                    "age = input()\nmoney = input()\n\nif age >= 15 and money >= 500:\n\tprint(\"Můžete vstoupit do zábavního parku.\")\nelse:\n\tprint(\"Nemůžete vstoupit do zábavního parku.\")"
                }
                />
                <Bubble
                    number={"6"}
                    vars={["min", "max"]}
                    varsValues={["1", "100"]}
                    varsTypes={["int", "int"]}
                    varsProps={[["1", "1000"], ["1", "1000"]]}
                    content={[
                    /* Nadpis */  "Cykly",
                    /* Popis  */  "V tomto programu si ukážeme, ako fungují cykly. Do proměnné min zadáte minimální číslo, do proměnné max zadáte maximální číslo a program vám vypíše součet všech čísel v zadaném rozsahu."
                ]}
                    code={
                    "min = input()\nmax = input()\n\nsum = 0\n\nfor i in range( int(min), int(max) + 1):\n\tsum += i\n\nprint(sum)"
                }
                />
            </div>
            <Footer>

            </Footer>
        </div>
    );
}

export default Guide;