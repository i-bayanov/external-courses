function calculateArray (arr) {
  let evenNumbers = 0, oddNumbers = 0, zeroNumbers = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((typeof(arr[i]) !== "number")) {
      continue;
    }
  
  if ((arr[i]) === 0) {
    zeroNumbers++;
  } else if ((arr[i]) % 2 === 0) {
    evenNumbers++;
  } else {
    oddNumbers++;
    }
  }

  console.log (`Number of even elements ${evenNumbers}, number of odd elements ${oddNumbers}, number of zeros ${zeroNumbers}`);
  return [evenNumbers, oddNumbers, zeroNumbers];
}

module.exports = calculateArray;
