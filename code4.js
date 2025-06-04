
function fizzBuzz (Fizz,Buzz){
    if(typeof(Fizz) === 'string' && typeof(Buzz) === "string"){
    let combinedLength = Fizz.length + Buzz.length;
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0){
        console.log("FizzBuzz")
    }
    else {
    if (combinedLength % 3 === 0){
        console.log("Fizz")
    }
    if (combinedLength % 5 === 0){
        console.log("Buzz")
    }
    }
    }
    else{
        console.log("invalid input....must be strings")
    }
}

let Fizz = "hello, my name is racheal";
let Buzz = "there";

fizzBuzz (Fizz, Buzz);
