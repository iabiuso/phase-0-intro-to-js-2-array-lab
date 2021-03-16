// Write your solution here!
// is assigned an initial value of ["Milo", "Otis", "Garfield"]'

    const cats = ["Milo", "Otis", "Garfield"];
  console.log(cats);



// appends a cat to the end of the cats array
function destructivelyAppendCat() {
    let last= cats.push("Ralph");
    console.log(cats);
}
// prepends a cat to the beginning of the cats array
function destructivelyPrependCat(){
    let first = cats.unshift("Bob");
}

// removes the last cat from the cats array

function destructivelyRemoveLastCat(){
    let remlast = cats.pop();
}

// removes the first cat from the cats array

function destructivelyRemoveFirstCat() {
    cats.shift();
}


// appends a cat to the cats array and returns a new array, 
// leaving the cats array unchanged

function appendCat(name){
    
    return [...cats, "Broom"];
    
}

//-------before this all ok----------------------------------------------------------

// prepends a cat to the cats array and returns a new array, 
// leaving the cats array unchanged

function prependCat(name){
    return [name, ...cats]; 
}
prependCat("Arnold");

// removes the last cat in the cats array and returns a new array, 
// leaving the cats array unchanged

function removeLastCat(){
    return cats.slice(0,2);

}
removeLastCat();

// removes the first cat from the cats array and returns a new array, 
// leaving the cats array unchanged'



function removeFirstCat(){

    return cats.slice(1);
}
removeFirstCat();