
let nums = [1,2,3,4];

//if an index of an item is not same as the first registered index, then that item is repeated
if (nums.find((item,index)=>index!=arr.indexOf(item))){
    console.log("true");
}
    
else{
    console.log("false");
}