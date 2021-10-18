*Question 1*
- 3 is printed because the loop has incremented the variable "i" of type 'var' once after the third time the loop executes, then checks if three is less than the length of the array called "prices".  It is not, so the loop terminates.  Type 'var' keeps its meaning inside any function it is declared within, not just the block.

*Question 2*
- 150 is printed because half of the price of 300 dollars, the last item in the list, is 150.  The variable 'discountedPrice' is used to store the calculated discounted price in every loop, and 300 was the last to be calculated.  Once again type 'var' keeps its meaning inside any function it is declared within, not just the block.

*Question 3*
- 150 is printed because line 8 of the code where 'finalPrice' is defined is designed to round numbers that do not correspond to actual dollars and cents.  Because half of 300 is exactly 150, thats what is printed.

*Question 4* 
- The function returns 3 values stored in the variable 'discounted'.  They are the discounted prices of the [100,200, 300] array passed to the function in the beginning and are [50, 100, 150].

*Question 5* 
- Because let is used to declare the variable "i" in the for loop, that variable only has meaning inside of that block.  It is not defined elsewhere, and thus line 12 has an error.

*Question 6* 
- There is an error for the same reason as above, "discountedPrice" is not defined outside of the for loop.

*Question 7* 
- 150 is printed.  Even though "finalPrice" uses let, line 14 is inside of the block in which the varibable was declared and is visible.

*Question 8* 
- The function behaves as desired, an array containing [50, 100, 150] is returned.  The only difference between this and the previous version using 'var' is 'let' is the more modern and preffered syntax.

*Question 9* 
- Just like part 5, there is an error because 'i' is defined with let and then referenced outside of the block for which it has meaning.

*Question 10*
- prints 3.  no problems here, just the length of the array given to the function defined with a const variable at the begining of the function and never changed.

*Question 11* 
- Returns the correct array of discounted prices [50, 100, 150].

*Question 12*
1. A. student.name
2. B. student["Grad Year"]
3. C. student.greeting()
4. D. student["Favorite Teacher"].name
5. E. student.courseLoad[0]

*Question 13*
1. A. >32 because integers map to their exact string representation in addition
2. B. >1 because the string '3' is converted to a number and read from the string
3. C. >3 because null is interpreted as zero
4. D. >3null because adding a number and a string will always return a string
5. E. >4 because true is interpreted as a 1 in addition
6. F. >0 because both false and null are interpreted as 0 in addition
7. G. >3undefined because string conversion changes undefined to 'undefined'
8. H. >NaN because in numberic conversion the undefined primitive type is interpreted as not a number

*Question 14*
1. A. >true because when values of different types are compared they are treated as numbers
2. B. >false because when strings are compared, they are compared letter-by-letter in dictionary order and 1 comes before 2
3. C. >true because when values of different types are compared they are treated as numbers
4. D. >false because when checking strict equality, if operands are of different type the result is always false
5. E. >false because when values of different types are compared they are treated as numbers, and true is interpreted as 1
6. F. >true because the boolean value of 2 is true
   
*Question 15*
'===' is the strict equality operator.  It checks equality without type conversion.  While '==' will try to convert the operands before comparison, '===' will not.

*Question 17*
The result is an array containing [2,4,6].  Each iteration of the loop waits for the callback function doSomething to execute and then pushes the result into the array newArr.

*Question 18*
>1
>4
>3
>2


