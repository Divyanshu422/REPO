const fs = require("fs");
const https = require("https");

console.log("Hello world");

var a = 100;
var b = 6;

https.get("https://dummyjson.com/products/1", res =>{
    console.log("Data fetched successfully")
})

setTimeout((param)=>{
    console.log("the setTimeout function executed in", param )
}, 5000, 5000)

fs.readFile("./file.txt", "utf8", (err,data) => {
    console.log("file Data :", data);
})


function multiplyFn(x,y){
    const result = x * y;
    return result;
}

console.log("The result of multiplication is ", multiplyFn(a, b))




