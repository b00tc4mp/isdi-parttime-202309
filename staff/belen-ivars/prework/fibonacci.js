const fibonacciSeries = (fibonacciSequenceLength) => {
  let result = [
    {position : 0, value : 0},
    {position : 1, value: 1},
];
for(
    let fibonacciPosition = 2;
    fibonacciPosition<=fibonacciSequenceLength;
    fibonacciPosition++
){
  result[fibonacciPosition] = {
    position: fibonacciPosition,
    value: 
      result[fibonacciPosition - 1].value + 
      result[fibonacciPosition-2].value,
  };
}
return result;
};
const getPyramidalFibonacci = (number) => {
  const fibonacciSequence = fibonacciSeries(number);
  const sequenceLength = fibonacciSequence.length;

for (
  let row = 0; row < sequenceLength; row++) {
    let line = "";
    for (let column = 0; column <= row; column++) {
      line+= fibonacciSequence[column].value + " ";
  }
console.log(line);
  }
  for (let row = sequenceLength - 2; row >= 0; row--) {
    let line ="";
    for (let column = 0; column <= row; column++){
      line += fibonacciSequence[column].value + " ";
    }
    console.log(line);
  }
};
getPyramidalFibonacci(8);