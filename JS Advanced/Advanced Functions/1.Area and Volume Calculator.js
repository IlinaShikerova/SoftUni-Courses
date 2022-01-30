function area() {
  return this.x * this.y;
}

function vol() {
  return this.x * this.y * this.z;
}

function solve(area, vol, input) {
  const objectArray = JSON.parse(input);
  function calc(obj) {
    let areaObj = Math.abs(area.call(obj));
    let volumeObj = Math.abs(vol.call(obj));

    return { area: areaObj, volume: volumeObj };
  }
  return objectArray.map(calc);
}

solve(
  area,
  vol,
  `[
   {"x":"1","y":"2","z":"10"},
   {"x":"7","y":"7","z":"10"},
   {"x":"5","y":"2","z":"10"}
   ]`
);
