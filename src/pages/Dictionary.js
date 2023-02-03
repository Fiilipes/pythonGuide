import React from "react";
import "./Dictionary.css"
import DictionaryPart from "./DictionaryPart";
import Footer from "./Footer";

const Dictionary = () => {
    let search


    const typeSearch = (e) => {
        search = e.target.value;
        console.log(search)
        // Array.from(document.getElementsByClassName("dictPart")).forEach((item) => {
        //     if (item.children[0].textContent.includes(search)) {
        //         item.style.display = "flex"
        //     } else {
        //         item.style.display = "none"
        //     }
        //
        // })

        Array.from(document.getElementsByClassName("onePart")).forEach((item) => {
            let hasFlex = false

            Array.from(item.children[1].children).forEach((item2) => {
                if (item2.children[0].textContent.includes(search)) {
                    item2.style.display = "flex"
                    item.children[0].style.display = "flex"
                    hasFlex = true

                } else {
                    item2.style.display = "none"
                    if (!hasFlex) {
                        item.children[0].style.display = "none"
                    }

                }
            })
        })
    }


    return (
        <div>
        <div id={"dictMain"}>
            <div id={"dictContent"}>
                <input type={"text"} id={"searchBar"} placeholder={"Search..."} onChange={typeSearch}/>
                <div className={"dictSamples"} id={"dictSamples"}>
                    <div className={"dictHeader"}>

                    </div>
                    <div className={"onePart"}>
                        <h2>
                            Funkce
                        </h2>
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
                            <DictionaryPart
                                command={"str()"}
                                description={"Převede cokoliv na string"}
                                codeDict={"str(1)"}
                            />
                            <DictionaryPart
                                command={"int()"}
                                description={"Převede cokoliv na integer"}
                                codeDict={"int(\"20\")"}
                            />
                            <DictionaryPart
                                command={"float()"}
                                description={"Převede cokoliv na float"}
                                codeDict={"float(\"1\")"}
                            />
                            <DictionaryPart
                                command={"len()"}
                                description={"Vrátí délku seznamu"}
                                codeDict={"len([1, 2, 3])"}
                            />
                            <DictionaryPart
                                command={"range()"}
                                description={"Vytvoří seznam v daném rozsahu"}
                                codeDict={"range(1, 10)"}
                            />
                            <DictionaryPart
                                command={"list()"}
                                description={"Vytvoří seznam"}
                                codeDict={"list(\"abc\")"}
                            />
                            <DictionaryPart
                                command={"type()"}
                                description={"Vrátí typ hodnoty"}
                                codeDict={"type(1)"}
                            />
                        </div>

                    </div>
                    <div className={"onePart"}>
                        <h2>
                            Matematické funkce
                        </h2>
                        <div className={"dictParts"}>
                            <DictionaryPart
                                command={"abs()"}
                                description={"Vrátí absolutní hodnotu"}
                                codeDict={"abs(-1)"}
                            />
                            <DictionaryPart
                                command={"round()"}
                                description={"Zaokrouhlí číslo"}
                                codeDict={"round(1.5)"}
                            />
                            <DictionaryPart
                                command={"pow()"}
                                description={"Vynásobí číslo"}
                                codeDict={"pow(2, 3)"}
                            />
                            <DictionaryPart
                                command={"max()"}
                                description={"Vrátí největší číslo"}
                                codeDict={"max(1, 2, 3)"}
                            />
                            <DictionaryPart
                                command={"min()"}
                                description={"Vrátí nejmenší číslo"}
                                codeDict={"min(1, 2, 3)"}
                            />
                            <DictionaryPart
                                command={"sum()"}
                                description={"Sečte čísla"}
                                codeDict={"sum([1, 2, 3])"}
                            />
                        </div>
                    </div>
                    <div className={"onePart"}>
                        <h2>
                            Řetězce
                        </h2>
                        <div className={"dictParts"}>
                            <DictionaryPart
                                command={"lower()"}
                                description={"Převede všechna písmena na malá"}
                                codeDict={"\"Ahoj\".lower()"}
                            />
                            <DictionaryPart
                                command={"upper()"}
                                description={"Převede všechna písmena na velká"}
                                codeDict={"\"Ahoj\".upper()"}
                            />
                            <DictionaryPart
                                command={"capitalize()"}
                                description={"Převede první písmeno na velké"}
                                codeDict={"\"ahoj\".capitalize()"}
                            />
                            <DictionaryPart
                                command={"title()"}
                                description={"Převede první písmeno každého slova na velké"}
                                codeDict={"\"ahoj jak se máš\".title()"}
                            />
                            <DictionaryPart
                                command={"split()"}
                                description={"Rozdělí řetězec podle zadaného znaku"}
                                codeDict={"\"ahoj jak se máš\".split(\" \")"}
                            />
                            <DictionaryPart
                                command={"replace()"}
                                description={"Nahradí všechny výskyty řetězce"}
                                codeDict={"\"ahoj jak se máš\".replace(\"a\", \"b\")"}
                            />
                            <DictionaryPart
                                command={"startswith()"}
                                description={"Vrátí True, pokud řetězec začíná daným řetězcem"}
                                codeDict={"\"ahoj jak se máš\".startswith(\"ahoj\")"}
                            />
                            <DictionaryPart
                                command={"endswith()"}
                                description={"Vrátí True, pokud řetězec končí daným řetězcem"}
                                codeDict={"\"ahoj jak se máš\".endswith(\"máš\")"}
                            />
                            <DictionaryPart
                                command={"find()"}
                                description={"Vrátí index prvního výskytu daného řetězce"}
                                codeDict={"\"ahoj jak se máš\".find(\"jak\")"}
                            />
                        </div>
                    </div>
                    <div className={"onePart"}>
                        <h2>
                            Seznamy
                        </h2>
                        <div className={"dictParts"}>
                            <DictionaryPart
                                command={"append()"}
                                description={"Přidá prvek na konec seznamu"}
                                codeDict={"[1, 2, 3].append(4)"}
                            />
                            <DictionaryPart
                                command={"insert()"}
                                description={"Vloží prvek na danou pozici"}
                                codeDict={"[1, 2, 3].insert(0, 0)"}
                            />
                            <DictionaryPart
                                command={"pop()"}
                                description={"Odstraní prvek na dané pozici"}
                                codeDict={"[1, 2, 3].pop(0)"}
                            />
                            <DictionaryPart
                                command={"remove()"}
                                description={"Odstraní první výskyt daného prvku"}
                                codeDict={"[1, 2, 3].remove(1)"}
                            />
                            <DictionaryPart
                                command={"clear()"}
                                description={"Odstraní všechny prvky"}
                                codeDict={"[1, 2, 3].clear()"}
                            />
                            <DictionaryPart
                                command={"index()"}
                                description={"Vrátí index prvního výskytu daného prvku"}
                                codeDict={"[1, 2, 3].index(2)"}
                            />
                            <DictionaryPart
                                command={"count()"}
                                description={"Vrátí počet výskytů daného prvku"}
                                codeDict={"[1, 2, 3].count(1)"}
                            />
                            <DictionaryPart
                                command={"sort()"}
                                description={"Seřadí prvky"}
                                codeDict={"[3, 2, 1].sort()"}
                            />
                            <DictionaryPart
                                command={"reverse()"}
                                description={"Otočí seznam"}
                                codeDict={"[1, 2, 3].reverse()"}
                            />
                            <DictionaryPart
                                command={"copy()"}
                                description={"Vytvoří kopii seznamu"}
                                codeDict={"[1, 2, 3].copy()"}
                            />
                        </div>
                    </div>
                    <div className={"onePart"}>
                        <h2>
                            Podmínky
                        </h2>
                        <div className={"dictParts"}>
                            <DictionaryPart
                                command={"if"}
                                description={"Pokud je podmínka True, provede se kód"}
                                codeDict={"if True:\n    print(\"ahoj\")"}
                            />
                            <DictionaryPart
                                command={"else"}
                                description={"Pokud je podmínka False, provede se kód"}
                                codeDict={"if False:\n    print(\"ahoj\")\nelse:\n    print(\"nazdar\")"}
                            />
                            <DictionaryPart
                                command={"elif"}
                                description={"Pokud je podmínka True, provede se kód"}
                                codeDict={"if False:\n    print(\"ahoj\")\nelif True:\n    print(\"nazdar\")"}
                            />
                            <DictionaryPart
                                command={" == "}
                                description={"Porovná hodnoty"}
                                codeDict={"1 == 1"}
                            />
                            <DictionaryPart
                                command={" != "}
                                description={"Porovná hodnoty"}
                                codeDict={"1 != 1"}
                            />
                            <DictionaryPart
                                command={" < "}
                                description={"Porovná hodnoty"}
                                codeDict={"1 < 1"}
                            />
                            <DictionaryPart
                                command={" > "}
                                description={"Porovná hodnoty"}
                                codeDict={"1 > 1"}
                            />
                            <DictionaryPart
                                command={" <= "}
                                description={"Porovná hodnoty"}
                                codeDict={"1 <= 1"}
                            />
                            <DictionaryPart
                                command={" >= "}
                                description={"Porovná hodnoty"}
                                codeDict={"1 >= 1"}
                            />
                        </div>
                    </div>
                    <div className={"onePart"}>
                        <h2>
                            Logické operátory
                        </h2>
                        <div className={"dictParts"}>
                            <DictionaryPart
                                command={" and "}
                                description={"Vrátí True, pokud obě podmínky jsou True"}
                                codeDict={"True and True"}
                            />
                            <DictionaryPart
                                command={" or "}
                                description={"Vrátí True, pokud alespoň jedna podmínka je True"}
                                codeDict={"True or False"}
                            />
                            <DictionaryPart
                                command={" not "}
                                description={"Vrátí True, pokud podmínka je False"}
                                codeDict={" not True"}
                            />
                        </div>

                    </div>
                    </div>

            </div>

        </div>
    <Footer/>
    </div>
);
}

export default Dictionary;