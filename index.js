function grabElements() {
fibonacciStore.resultsContainer = document.querySelector('.results-container');
button.addEventListener('click', chooseWhereCalculate);
}

function fibonacciLocal(x) {
    if (x < 2) 
    return x;
    return fibonacciLocal(x - 1) + fibonacciLocal(x - 2);
    }



//fibonacci = function (numMax){
 //   for (var fibonacciArray = [0,1], i=0, )


//}


function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}