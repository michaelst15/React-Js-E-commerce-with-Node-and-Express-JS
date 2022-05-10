function value(x){
   if (x == 0){
      return 1;
   } else {
      return x* value(x -1);
   }
}
console.log(value(8))