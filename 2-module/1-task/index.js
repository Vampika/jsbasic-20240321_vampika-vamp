function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries){
    if(Number.isInteger(salaries[key]))
      sum += salaries[key];
  }
  return sum;
}
