// 1,1,2,3,5,8,13

/*
The function below that logs to the console
the values of the fibonacci sequence.
The logic was difficult to wrap my head
around at first, but became easier when I tracked my values.
The function below works as follows:

say that the input was "fibber(4)"

*/

  
 function fibber(n) {
  if(n === 0) return 0;
    if (n=== 1) return 1;
  return fibber(n - 1) + fibber(n - 2);
  
}

 function fibCount(headCount){
  if(headCount === 0) return;
  fibCount(headCount-1);
   fibIndex = headCount;
  console.log(fibber(fibIndex));
} 

fibCount(15);








