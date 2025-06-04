


function categoriseArray(arr){
    let evens = [];
    let odds = [];
    let chars = [];
    let categories = {evens, odds, chars};
    arr.forEach(element => {
        if (typeof(element) === "string"){
            chars.push(element);
        }
        if (typeof(element) === "number"){
            if (element % 2 === 0){
                evens.push(element);
            }
            else{
                odds.push(element);
            }
        }
    });
    

    console.log(categories);
}

categoriseArray(["a",1,2,"barber","d"]);


