


function sentenceCase(sentence){

    let words = sentence.split(" ");
    let result = "";

    for (let word of words){
        result += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
         
    }
    console.log(result);
}

sentenceCase("hello world");




