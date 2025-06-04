

function ageBracket(yearOfBirth){
    let birthYear = Number(yearOfBirth);
    if (isNaN(birthYear)){
        console.log("invalid input... year of birth must be a number")
    }
    else{
    let age = 2025 - birthYear;
        if (age <= 18){
        console.log("You are a minor")
        }
        if (age > 18 && age < 36 ){
        console.log("You are a youth")
        }
        if (age > 36){
        console.log("You are an elder")
        }
    } 
}
let yearOfBirth = prompt("Enter your year of birth");
ageBracket(yearOfBirth);



