// => Q-1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  <=//
// Answer //
// var num = 10
// console.log('The Current value of a is: ', num)

// console.log('The value of ++a is: ', ++num)
// console.log('Now, the value of ++a is: ', ++num)

// console.log('The value of ++a is: ', num)
// console.log('Now, the value of ++a is: ', ++num)

// console.log('The value of ++a is: ', num)
// console.log('Now, the value of --a is: ', --num)

// console.log('The value of ++a is: ', num)
// console.log('Now, the value of --a is: ', --num)



//  => Q-2 What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;  <= //
// Answer //
// var a = 2, b = 1
// var results =--a - --b + ++b;

// --a = 1
// a becomes 1.

// --a - --b = 0 - 0 = 0
// a becomes 0
// b becomes 0

// --a - --b + ++b = -1 - (-1 + 1) = -1 - 0 = -1 
// now, value of a becomes -1 & value of b becomes 1

// --a - --b + ++b + b-- = -2 - 0 + 0 + 0 = -2
// lastly, value of a becomes -2 and value of b becomes 0.Hence value of  var results will be -2

// a is -2
// b is 0
// result is -2

//  => Q-3 Write a program that takes input a name from user & greet the user. <= //
// Answer //
// var program = prompt('Enter Your Name')
// alert('Welcome to Our Website')


//  => Q-4 Write a program to take input a number from user & display its multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. <= //
// Answer //
// var defaults = 5
// var number = 25
// var secondNumber = prompt('Enter the number you want to multiply with 25')
// var total = number*secondNumber
// if(total= number*secondNumber){
//     console.log(total)
// }else{
//     console.log(number*defaults)
// }


// => Q-5  Take
// a) Take three subjects name from user and store them in 3 different
// variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in
// different variable.
// d) Take obtained marks for remaining 2 subjects from user and store
// them in variables.
// e) Now calculate total marks and percentage and show the result in
// browser like this. (Hint: user table)  <= //  
// Answer //
// var subjects = subject1, subject2, subject3
// var outofMarks1 = 100, outofMarks2 = 100, outofMarks3 = 100
// var outofMarks = outofMarks1+outofMarks2+outofMarks3
// var subject1 = prompt('Enter Your 1st Subject'), subject2 = prompt('Enter Your 2nd Subject'), subject3 = prompt('Enter Your 3rd Subject') 
// var marks1 =+ prompt('Enter Your Obtained Marks of 1st Subject Out Of 100'), marks2 =+ prompt('Enter Your Obtained Marks of 2nd Subject Out Of 100'), marks3 =+ prompt('Enter Your Obtained Marks of 3rd Subject Out Of 100')
// var totalMarks =+ marks1+marks2+marks3
// var percentage =+ totalMarks*100/outofMarks
// console.log(subject1,': ',  marks1)
// console.log(subject2,': ',  marks2)
// console.log(subject3,': ',  marks3)
// console.log('Total Marks: ', outofMarks)
// console.log('Obtained Marks: ', totalMarks)
// console.log('Percentage: ', percentage) 

