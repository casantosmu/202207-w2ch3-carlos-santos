const calculateAverageCost = (totalCost, quantity) => totalCost / quantity;

let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

app();

function app() {
  let visitorName = prompt("Welcome to Skylab Airlines. What's your name?");
  console.log(`Welcome ${visitorName || "Anonymous"}`);

  let flightsDescriptions = flights.map((flight) =>
    getFlightDescription(flight)
  );
  flightsDescriptions.forEach((description) => console.log(description));

  let totalCost = flights.reduce((sum, current) => sum + current.cost, 0);
  let quantity = flights.length;
  let avarageCost = calculateAverageCost(totalCost, quantity);
  console.log(`The average cost of flights is ${avarageCost}€`);

  let withLayover = flights.filter((flight) => flight.scale);
  console.log(`There are ${withLayover.length} flights with layover`);

  let lastFlights = flights.slice(flights.length - 5);
  let lastDestinations = lastFlights.map((flight) => flight.to);
  console.log("Destination of the last flights are:");
  lastDestinations.forEach((destination) => console.log("- " + destination));
}

function getFlightDescription(flight) {
  let scaleStr = !flight.scale
    ? "and does not have a layover"
    : "and have a layover";
  let str = `- The flight from ${flight.from} and to ${flight.to} costs ${flight.cost}€ ${scaleStr}`;
  return str;
}
