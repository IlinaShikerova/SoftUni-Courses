function solve(input) {
  let numberOfCars = Number(input.shift());
  let cars = {};
  carsToObj(input, numberOfCars);

  let operation = input.shift();
  while (operation != "Stop") {
    let tokens = operation.split(" : ");
    let command = tokens[0];
    let car = tokens[1];
    if (command === "Drive") {
      drive(cars, car, tokens);
    } else if (command === "Refuel") {
      refuel(cars, car, tokens);
    } else if (command === "Revert") {
      revert(cars, car, tokens);
    }
    operation = input.shift();
  }
  sort(cars);
  function carsToObj(input, numberOfCars) {
    while (numberOfCars != 0) {
      let [car, mileage, fuel] = input.shift().split("|");
      mileage = Number(mileage);
      fuel = Number(fuel);
      cars[car] = {
        mileage,
        fuel,
      };
      numberOfCars--;
    }
  }

  function drive(cars, car, tokens) {
    let distance = Number(tokens[2]);
    let fuel = Number(tokens[3]);
    if (cars[car].fuel < fuel) {
      console.log(`Not enough fuel to make that ride`);
    } else {
      cars[car].fuel -= fuel;
      cars[car].mileage += distance;
      console.log(
        `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
      );
    }
    if (cars[car].mileage >= 100000) {
      delete cars[car];
      console.log(`Time to sell the ${car}!`);
    }
  }
  function refuel(cars, car, tokens) {
    let fuel = Number(tokens[2]);
    let currentFuel = cars[car].fuel;
    let needFuel = 75 - currentFuel;
    if (cars[car].fuel + fuel > 75) {
      cars[car].fuel = 75;
      console.log(`${car} refueled with ${needFuel} liters`);
    } else {
      cars[car].fuel += fuel;
      console.log(`${car} refueled with ${fuel} liters`);
    }
  }
  function revert(cars, car, tokens) {
    let kilometers = Number(tokens[2]);
    cars[car].mileage -= kilometers;
    if (cars[car].mileage < 10000) {
      cars[car].mileage = 10000;
    } else {
      console.log(`${car} mileage decreased by ${kilometers} kilometers`);
    }
  }
  function sort(cars) {
    let sorted = Object.entries(cars).sort((a, b) => {
      let mileageA = a[1].mileage;
      let mileageB = b[1].mileage;

      let nameCarA = a[0];
      let nameCarB = b[0];

      return mileageB - mileageA || nameCarA.localeCompare(nameCarB);
    });
    for (let car of sorted) {
      console.log(
        `${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`
      );
    }
  }
}


