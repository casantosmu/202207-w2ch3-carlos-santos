const calculateAverageCost = (totalCost, quantity) => totalCost / quantity;
const isBlank = (str) => !str || /^\s*$/.test(str);
const isNumber = (number) => !isNaN(number) && !isBlank(number);

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

// We need this variable to close the app when the user makes a purchase
let isPurchaseDone;

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

  selectRoleDashboard();
}

function getFlightDescription(flight) {
  let scaleStr = flight.scale
    ? "and have a layover"
    : "and does not have a layover";
  let str = `- The flight from ${flight.from} and to ${flight.to} costs ${flight.cost}€ ${scaleStr}`;
  return str;
}

// The function loops recursively
// until the visitor presses cancel ('null')
// or user makes a purchase ('isPurchaseDone')
function selectRoleDashboard() {
  let userAccount = prompt("Are you ADMIN or USER?");
  if (userAccount === null) return;
  if (userAccount.toLowerCase() === "admin") {
    adminDashboard();
  } else if (userAccount.toLowerCase() === "user") {
    userDashboard();
  } else {
    alert("Enter 'admin' or 'user'");
  }

  if (!isPurchaseDone) selectRoleDashboard();
}

function adminDashboard() {
  let adminAction = prompt(
    "Hi ADMIN. Do you want to 'create' or 'delete' flights?"
  );
  if (adminAction === null) return;
  if (adminAction.toLowerCase() === "create") {
    createFlight();
  } else if (adminAction.toLowerCase() === "delete") {
    deleteFlight();
  } else {
    alert("Enter 'create' or 'delete'");
  }

  adminDashboard();
}

function userDashboard() {
  let filterPriceAnswered = prompt(
    "Hi User. Enter a price to display flights with the same or cheaper price."
  );
  if (filterPriceAnswered === null) return;
  if (isNumber(filterPriceAnswered)) {
    let flightsFiltered = flights.filter(
      (flight) => flight.cost <= filterPriceAnswered
    );
    if (flightsFiltered.length === 0) {
      console.log("There are no flights with the same or cheaper price");
      userDashboard();
    } else {
      let flightsFilteredInfo = flightsFiltered.map((flight) =>
        getFlightInfo(flight)
      );
      console.log("These are the flights with the same or cheaper price:");
      flightsFilteredInfo.forEach((info) => console.log(info));
      buyFlight();
      console.log("Thank you for your purchase, come back soon.");
    }
  } else {
    alert("Enter a valid number");
    userDashboard();
  }
}

// Creates an object with flight information that is being asked to the user
// Then the object is pushed to the ´flights´ object and shows all its data
// The function loops recursively until the user presses cancel ('null')
// Then returns to the previous panel
function createFlight() {
  if (flights.length >= 15) {
    alert(
      "You cannot exceed the limit of 15 flights. Delete one before creating more."
    );
    return;
  }
  let newFlight = {};
  // Generate and add new ID
  let lastFlightID = flights[flights.length - 1].id;
  newFlight.id = lastFlightID + 1;
  // Ask and add TO
  newFlight.to = prompt("Enter arrival city:");
  if (newFlight.to === null) return;
  // Ask and add FROM
  newFlight.from = prompt("Enter departure city:");
  if (newFlight.from === null) return;
  // Ask for price until valid number and add COST
  while (true) {
    let costAnswer = prompt("Enter price:");
    if (costAnswer === null) return;
    if (isNumber(costAnswer)) {
      newFlight.cost = +costAnswer;
      break;
    } else {
      alert("Enter a valid number");
    }
  }
  // Ask for layover until yes/no and add SCALE
  while (true) {
    let scaleAnswer = prompt("Does the flight have a layover? Yes/No");
    if (scaleAnswer === null) return;
    if (scaleAnswer.toLowerCase() === "yes") {
      newFlight.scale = true;
      break;
    } else if (scaleAnswer.toLowerCase() === "no") {
      newFlight.scale = false;
      break;
    } else {
      alert("Enter 'yes' or 'no'");
    }
  }

  flights.push(newFlight);

  // Show all avalibe flights
  let flightsInfo = flights.map((flight) => getFlightInfo(flight));
  console.log(
    "New flight created successfully. These are the available flights:"
  );
  flightsInfo.forEach((info) => console.log(info));

  createFlight();
}

function deleteFlight() {
  let answeredId = prompt("Enter a flight ID to remove it:");
  if (answeredId === null) return;
  let flightIndex = getFlightIndexById(flights, answeredId);
  if (flightIndex > -1) {
    let deletedFlightInfo = getFlightInfo(flights[flightIndex]);
    flights.splice(flightIndex, 1);
    console.log("You deleted:");
    console.log(deletedFlightInfo);
  } else {
    alert("Enter a valid flight ID");
  }

  deleteFlight();
}

function buyFlight() {
  let answeredId = prompt("Enter the id of the flight you want to buy");
  if (answeredId === null) return;
  let flightIndex = getFlightIndexById(flights, answeredId);
  if (flightIndex > -1) {
    isPurchaseDone = true;
  } else {
    alert("Enter a valid flight ID");
    buyFlight();
  }
}

function getFlightInfo(flight) {
  let layoverStr = flight.scale ? "With layover" : "Without layover";
  let str = `- Flight ID: ${flight.id}. From: ${flight.from}. To: ${flight.to}. Price: ${flight.cost}. ${layoverStr}`;
  return str;
}

function getFlightIndexById(arr, id) {
  // With isBlank we prevent converting an empty string to 0
  return arr.findIndex((flight) => !isBlank(id) && flight.id === +id);
}
