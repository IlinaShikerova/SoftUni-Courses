function rectangle(width, height, color) {
  width = Number(width);
  height = Number(height);
  color = color[0].toUpperCase() + color.slice(1);
  let obj = {
    width,
    height,
    color,
    calcArea() {
      let result = this.width * this.height;
      return result;
    },
  };
  return obj;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
