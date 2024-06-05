/* Let’s create our class Town and fill in the data with town name and population. After we do that, let’s display top three most populated. */


class Town {
  constructor(name, population) {
    this.name = name;
    this.population = population;
  }
}

const towns = [
  new Town("Hamburg",1840000),
  new Town("Munich",1500000),
  new Town("Essen",586000),
  new Town("Cologne",1080000),
  new Town("Berlin",3670000),
  new Town("Frankfurt",756000),
  new Town("Stuttgart",634000),
  new Town("Dusseldorf",620000),
  new Town("Leipzig",593000),
  new Town("Dortmund",586000)
  ]

towns.sort((a, b) => b.population - a.population);

/* console.log(`The most populated cities are ${mostPopulated[0].name}, ${mostPopulated[1].name}, ${mostPopulated[2].name}.`); */

console.log(`Top 3 most populated towns:`);
for (let i = 0; i < 3; i++) {
  const town = towns[i];
  console.log(`${i + 1}. ${town.name} (${town.population.toLocaleString()} inhabitants)`)
}

