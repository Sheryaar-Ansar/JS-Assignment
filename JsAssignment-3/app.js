// => Q-1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”  <= //
////Answer////
// var city = prompt('Enter Your City Name').toLowerCase()
// if(city==='karachi'){
//     console.log('Welcome to the City Of Lights!')
// }


// => Q-2  Write a program to take “gender” as input from user. If the user is male, give the
// message: Good Morning Sir. If the user is female, give the message: Good Morning
// Ma’am. <= //
////Answer////
// var gender = prompt('Enter Your Desired Gender').toLowerCase()
// if(gender==='male'){
//     console.log('Good Morning Sir!')
// }
// if(gender==='female'){
//     console.log('Good Morning Ma`am')
// }


// => Q-3   Write a program to take input remaining fuel in car (in litres) from user. If the current
// fuel is less than 0.25litres, show the message “Please refill the fuel in your car”  <= //
////Answer////
// var litre = 'litres'
// var fuel = prompt('Please Enter Remaining Fuel in Car(IN LITRES)')
// if(fuel<='0.25 litres'){
//     console.log('Please Refill the fuel in your car')
// }else{
//     console.log('You can refill the fuel in your car later')
// }


// => Q-4 Run this script, & check whether alert message would be displayed or not. 
// Record the outputs.
//  a. var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
//     } 
//  b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
//  alert("True");
// } if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// } <= //


//// Answer////
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// } 
//                           GIVEN CONDITION 'A' IS TRUE.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//                       GIVEN CONDITION 'B' IS NOT TRUE AS PER POST INCREMENT 'b++', IF '++b' IS ADDED TO THE CONDITION, IT WILL BE TRUE.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//                      GIVEN CONDITION 'C' CONDITION 2 & 4 IS TRUE, CONDITION 1 IS NOT TRUE AS OF POST INCREMENT & CONDITION 3 IS NOT TRUE AS PER CONDITION 2 'c=13', ++c = 13=1 < 14 = 14 < 14', SO IT NEITHER LESSER NOR GREATER.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//                      GIVEN CONDITION 'D' IS TRUE AS ADDITION OF TWO VARIABLE IS EQUALS TO IF CONDITION.
// if (true){
//  alert("True");
// } if (false){
// alert("False");
// }
//                       GIVEN CONDITION 'E' IS TRUE.
// if("car" < "cat"){
// alert("car is smaller than cat");
// }
//                       GIVEN CONDITION 'F' IS TRUE.


// => Q-5 Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.   <= //
////Answer////
// var num = 5
// var close = 4
// var secretNumber =+ prompt('Guess the Secret Number from 1 - 10')
//     if(secretNumber===num){
//         console.log('Bingo! Correct Answer')
//     }
//     if(secretNumber===close){
//         console.log('Close enough to the correct answer')
//     }


// => Q-6 Write a program to check whether the given number is divisible by 3. Show the
// message to the user if the number is divisible by 3.   <= //
////Answer////
// var divide =+ prompt('Enter the number to locate if it is divisible by 3 or not')
// if(divide%3===0){
//     console.log('It is Divisible by 3')
// }else{
//     console.log('It is not divisible by 3')
// }

// => Q-7 Write a program that checks whether the given input is an even number or an odd number. <= //
////Answer////
// var num =+ prompt('Enter the Number to check is it odd or even')
// if(num%2===0){
//     console.log('It is an Even Number')
// }else{
//     console.log('It is an Odd Number')
// }


// => Q-8 Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”  <= //
////Answer////
// var temperature = prompt('Enter the number for checking temperature')
// if (temperature >= 40) {
//     console.log('It is too hot outside.')

// }else if (temperature >= 30) {
//     console.log('The Weather today is Normal.')
// }else if (temperature >= 20) {
//     console.log('Today’s Weather is cool.')
// }else if (temperature >= 10) {
//     console.log('OMG! Today’s weather is so Cool.')
// }






// => Q-9  Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.   <= //
////Answer////
// var firstNumber=+ prompt('Enter the First Number'), secondNumber =+ prompt('Enter the Second Number')
// var operation = prompt('Enter Your Operation (+,-,*,/,%')
// var percentage= 100
// if(operation==='+'){
//     console.log(firstNumber+secondNumber)
// }
// if(operation==='-'){
//     console.log(firstNumber-secondNumber)
// }
// if(operation==='*'){
//     console.log(firstNumber*secondNumber)
// }
// if(operation==='/'){
//     console.log(firstNumber/secondNumber)
// }
// if(operation==='%'){
//     console.log(firstNumber*percentage/secondNumber)
// }

