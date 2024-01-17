function sum(arr) {
  let sum =0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
    
  }
  return sum;
}

const numbers = [1, 2, 3];
console.log(sum(numbers));