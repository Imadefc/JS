function sumUntil(maxValue) {
  if(maxValue==1){
    return 1;
  }else{
    return sumUntil(maxValue-1)+maxValue;
  }
}

console.log(sumUntil(5));