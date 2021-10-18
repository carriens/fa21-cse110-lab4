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




