function squareOfStars(input) {
  let star = "* ";
  let rectangle;
  if (typeof input === "undefined") {
    for (let i = 0; i < 5; i++) {
      rectangle = star.repeat(5);
      console.log(rectangle);
    }
  } else {
    for (let i = 0; i < input; i++) {
      rectangle = star.repeat(input);
      console.log(rectangle);
    }
  }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();
