/*
Jimmie Smith
Coding Assignment (Cummings Aerospace)
07/05/2021


The function below that logs to the console
the values of the fibonacci sequence.
The logic was difficult to wrap my head
around at first, but became easier when I tracked my values.
The function below works as follows:

say that the input was "fibber(4)" the data structure
would look like this:


                      fibber(4) = 3

        Meaning the 4th value in the fibonacci sequence is 3

               As logged by the console :)


                       fibber(4)

           Value = 2    /    add   \  Value = 1

                      /              \  

              fibber(3)    +    fibber(2)

  Value = 1    / add \  Value = 1        \
                                       
             /         \                   \

          fibber(2)  +  fibber(1)        /   \
   
Value 1 / add \ Value = 0 Value = 1    /  add  \ Value = 0
                                        
      /          \                   /           \
  fibber(1) fibber(0)        fibber(1)    +    fibber(0)


fibber(1) = 1 so we return 1.
fibber(0) = 0 so we return 0.
we then add those elements to get the
value of fibber(2), which is 0 + 1 = 1
The base conditions have been met
so we can move on. The function must first
create a value for the left side (n-1) before
a value is created for the right side (n-2).
The tree goes down the left side until a base
condition is met (fibber(1)) and then traverses 
down the right side until a base condition is met.
then it returns the values specified in the return statement
until it reaches the top again!
*/

  
 function fibber(n) {
  if(n === 0) return 0;
    if (n=== 1) return 1;
  return fibber(n - 1) + fibber(n - 2);
  
}

/*
Creating a function to log the values to the console
was probably the hardest part of this. I sat for hours
thinking how I could iterate through an array of numbers
without an iterative loop. Then it hit me, I could use
another recursive function with an argument to specify
the number of values to log dynamically as well as 
pass an argument to the function 'fibber' to iterate
through the fuction itself rather than through an array.
*/


 function fibCount(headCount){
  if(headCount === 0) return;
  fibCount(headCount-1);
  console.log(fibber(headCount));
} 


/*
so here, i just used a simple recursive functiion to 
return numbers 1 - headCount, which is expressed as integer
below. So let's say I wanted to run the 'fibber' function five times;
the data structure would look like this.


                         Return 5

                        fibCount(5)
                         /
              Return 4
                        /
                    fibCount(4)
                      /
            Return 3
                     /
                fibCount(3)
                    /
           Return 2
                   /
              fibCount(2)
                  /
        Return 1
                 /
            fibCount(1)
                /
     Return 0
               /
          fibCount(0)

In the above function, the only thing I had to do after
returning each value was run the returned value through
functions 'fibber' within function 'fibCount'. Of course
I didnt put the reserved word 'return' or else it would've 
ended the function.
*/

fibCount(/*Enter a number here & watch the Magic :)*/);









