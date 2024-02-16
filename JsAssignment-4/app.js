// Q1. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.
// ANSWER
// const pass = 'abc123'
// var passGuess = prompt('Guess the Password')
// if(passGuess===pass){
//     console.log('Correct! The password you entered matches the original password')
// }else if(passGuess===''){
//     console.log('Please Enter Your Password')
// }else{
//     console.log('Incorrect Password')
// }


// Q2. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// ANSWER
// var greeting = prompt('Enter Hour');
// var hour =13;
// if(greeting<18){
//     console.log(greeting = 'Good Day');
// }else{
//     console.log(greeting = 'Good Evening')
// }

// Q3. Arrays
// a. Declare an empty array using JS literal notation to store
// student names in future.
// b. Declare an empty array using JS object notation to store
// student names in future.
// c. Declare and initialize a strings array.
// d. Declare and initialize a numbers array.
// e. Declare and initialize a boolean array.
// f. Declare and initialize a mixed array.
// g. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM,
// MS, M. Phil., PhD).
// ANSWER
// const studentNames = []
// const emptyStudentNames = []
// const stringArray = ['john', 'mercy', 'wick']
// const numberArray = [1,2,3,4,5,6,7,8,9]
// const booleanArray = [true, false]
// const mixedArray = ['John', true, 2, false]
// const educationInstitute = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS', 'M', 'PHD']


// Q4. Initialize an array with color names. Display the array elements in
// your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated array
// in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index. .
// Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s)
// & how many colors he/she wants to delete. Then remove the
// same number of color(s) from user-defined position/index. .
// Display the updated array in your browser.


// Q5. Write a program to store student scores in an array & sort the array
// in ascending order using Array’s sort method.
// ANSWER
// const studentScores = [92, 72, 95, 24, 15, 50]
// console.log('Original Student Scores: '+studentScores)
// var ascendingStudentNumbers = studentScores.sort((a,b)=>a-b)
// console.log('Ascending Student Scores : '+ascendingStudentNumbers)



// Q6. Write a program to store phone manufacturers (Apple, Samsung,
// Motorola, Nokia, Sony & Haier) in an array. Display the following
// dropdown/select menu in your browser using document.write()
// method:
// ANSWER
// const phoneManufacturers = ['Apple', 'Samsung', 'Nokia', 'Oppo', 'Motorolla', 'Google', 'Sony']
// document.write('<select>')
// for (i = 0; i < phoneManufacturers.length; i++) {
//     document.write('<option value ="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>')
// }
// document.write('</select>')


// Q7. Write a program to print multiplication table of any number using
// for loop. Table number & length should be taken as an input from
// user.
// ANSWER
// var tableNumber = prompt('Enter The Table Number');
// var length = prompt('Enter the length')

// for(i=1; i<=length; i++){
//     console.log(tableNumber + 'x' + i, '=', tableNumber*i  )
// }


// Q8. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// ANSWER
// function generateSeries() {
//     document.write("<h1>Countings: "+"</h1>");

//     document.write('<ul>');
//     document.write('<li>a. Counting: ')
//     for(let i = 1; i <= 15; i++){
//         document.write(i+ ',')
//     }

//     document.write('<li>b. Reverse Counting: ')
//     for(let i=10; i>=1; i--){
//         document.write(i+ ',')
//     }

//     document.write('<li>c. Even Counting: ')
//     for(let i=0; i<=20; i+=2){
//         document.write(i+ ',')
//     }
//     document.write('<li>d. Odd Counting: ')
//     for(let i=1; i<=19; i+=2){
//         document.write(i+ ',')
//     }
//     document.write('<li>b. Series Counting: ')
//     for(let i=2; i<=20; i+=2){
//         document.write(i+ 'k,')
//     }
// }

// generateSeries();




// Q9. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”,
// “patties”] Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given item is
// found in the list or not.
// ANSWER

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var input = prompt('Search an item')
// var flag = false
// for(let i = 0; i < A.length; i++){
//     if(A[i]===input){
//         flag=true
//     }
// }
// if(flag){
//     alert(input+' Is Available')
// }else{
//     alert(input+' Is Not Available')
// }


// Q10. Write a program that takes user input. Convert and show the
// input in title case.
// ANSWER
// var titleCase = prompt('Enter Keyword')
// let titleCaseString = titleCase.charAt(0).toUpperCase() + titleCase.slice(1)
// console.log(titleCaseString)



// Q11. Write a program that takes user input. Convert and show the
// input in capital letters.
// ANSWER
// var program = prompt('Please enter in lowercase').toUpperCase()
// console.log(program)

// Q12. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// ANSWER
// var string = "472"
// var number = Number(string)
// console.log('Original String : '+string)
// console.log('Converted String into Number : '+number)
// console.log('Type of String : '+typeof string)
// console.log('Type of Number : '+typeof number)