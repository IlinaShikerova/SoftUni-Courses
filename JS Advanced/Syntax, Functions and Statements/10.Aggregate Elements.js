function aggregateElements(arr) {
   let arrL = arr.length;
   let sum = 0;
   let sumInverseValue = 0;
   let concat = "";
   for (let i = 0; i < arrL; i++) {
     let element = Number(arr[i]);
     sum += element;
     sumInverseValue += 1 / element;
     concat += element + "";
   }
   console.log(sum);
   console.log(sumInverseValue);
   console.log(concat);
 }
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
