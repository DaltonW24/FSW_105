var readlineSync = require('readline-sync')
var action = readlineSync.question(" Which action would you like to perform (Add, Subtract, Multiply, Divide)");
var firstValue = readlineSync.prompt("Please enter your first value. ",{limit: '<0,1,2,3,4,5,6,7,8,9>'})
var secondValue = readlineSync.prompt("Please enter your second value. ",{limit: '<0,1,2,3,4,5,6,7,8,9>'})

if( action == "Add"){  
    addTwo(firstValue, secondValue)
}
else if(action == "Subtract"){
 subtractTwo(firstValue, secondValue)
}
else if( action == "Multiply"){
    multiplyTwo(firstValue, secondValue)
}
else if(action == "Divide"){
divideTwo(firstValue, secondValue)
}
 else{
     console.log("You entered unacceptable values. Please try again. ")
 }
function addTwo(a, b){
console.log("The result is: ", + parseInt(a) + parseInt(b))
}
function multiplyTwo(a, b){
    console.log("The result is: ", + parseInt(a) * parseInt(b))
}
function divideTwo(a, b){
    console.log( "The result is: ", + parseInt(a) / parseInt(b))
}
function subtractTwo(a, b){
    
    console.log("The result is: ", + parseInt(a) - parseInt(b))
}
// To get the code to finally differentiate between the actions i wanted it to do, i had to add another = sign.
//else if(action == "Subtract"){
 //subtractTwo(firstValue, secondValue) That is the example of the double == sign. I was writing with only one, and it was performing only the add2() Function.
 // 
 //console.log("The result is: ", + parseInt(a) - parseInt(b)) I ALSO ADDED A COMMA HERE BECAUSE IT WASN'T DISPLAYING RIGHT. 
 // We experimented a lot with the keyIN, prompt and question for the readline. sync code, but each would cause a new error. 
 // currently the program would only add single numbers by other single numbers since the keyIN is accepting the number instantly and not giving enough time for a double, triple, etc. number 
 //UPON FURTHER TESTING PROMPT HAS FIXED ALL PROBLEMS CAUSED BY keyIn. PLEASE DISREGARD ABOVE MESSAGE. 
 //I believe that everthing is working properly now, and should not pose any errors going forward. 