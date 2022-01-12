function sameNum(intNum) {
  let stringNum = intNum.toString();
  let stringNumL = stringNum.length;
  let digit = Number(stringNum[0]);
  let sumOfDigit = Number(stringNum[0]);
  let isSame = true;
  for (let i = 1; i < stringNumL; i++) {
    sumOfDigit += Number(stringNum[i]);
    if (digit !== Number(stringNum[i])) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sumOfDigit);
}
sameNum(2222222);
sameNum(1234);
sameNum(111331);
