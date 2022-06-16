const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const catsCopied = [...cats, "Broom"];
    return catsCopied;
    }

function prependCat() {
    const catsCopied = ["Arnold", ...cats];
    return catsCopied;
}

function removeLastCat() {
    const copiesOfCats = cats.slice(0, cats.length -1);
    return copiesOfCats;
}

function removeFirstCat() {
    let copiesOfCats = [...cats];
    copiesOfCats.shift();
    console.log(copiesOfCats);
    return copiesOfCats;
}