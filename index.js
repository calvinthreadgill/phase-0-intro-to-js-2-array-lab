// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(James) {
    cats.push (James);
}

function destructivelyPrependCat(Dakota){
    cats.unshift(Dakota);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(Calvin){
    return [...cats, Calvin];
}

function prependCat(Arnold){
    return [Arnold, ...cats];
}

function removeFirstCat(){
    return cats.slice(1);
}

function removeLastCat(){
    return cats.slice(0, cats.length -1);
}