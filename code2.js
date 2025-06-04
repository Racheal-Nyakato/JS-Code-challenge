
let text = "JavaScript is amazing!";
let count = 0;
let letters = text.split("");
for (let letter of letters){
    if(letter === "a"){
        count ++ ;
    }
}
console.log (count);
