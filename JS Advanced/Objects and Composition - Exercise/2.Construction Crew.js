function constructionCrew(obj) {
  if (obj.hasOwnProperty("dizziness")) {
    if (obj.dizziness) {
      let water = obj.weight * obj.experience * 0.1;
      obj.levelOfHydrated += water;
      obj.dizziness = false;
    }
  }
  return obj;
}
console.log(
  constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);
