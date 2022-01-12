function cookingByNum(num, op1, op2, op3, op4, op5) {
  let number = Number(num);
  let arr = [op1, op2, op3, op4, op5];
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    switch (arr[i]) {
      case "chop":
        number /= 2;
        break;
      case "dice":
        number = Math.sqrt(number);
        break;
      case "spice":
        number += 1;
        break;
      case "bake":
        number *= 3;
        break;
      case "fillet":
        number *= 0.8;
        break;
    }
    console.log(number);
  }
}
cookingByNum("32", "chop", "chop", "chop", "chop", "chop");
cookingByNum("9", "dice", "spice", "chop", "bake", "fillet");
