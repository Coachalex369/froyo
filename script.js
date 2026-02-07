function getFlavorListFromUser() {
  return prompt(
    "Enter froyo flavors separated by commas:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
}

function parseFlavors(flavorsString) {
  return flavorsString.split(",").map((flavor) => flavor.trim().toLowerCase());
}

function countFlavors(flavorsArray) {
  const counts = {};

  for (const flavor of flavorsArray) {
    if (counts[flavor]) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }

  return counts;
}

function printFlavorCounts(counts) {
  console.log("Froyo order counts:");
  console.log(counts);

  for (const flavor in counts) {
    console.log(`${flavor}: ${counts[flavor]}`);
  }
}

// ===== Run the app =====
const userInput = getFlavorListFromUser();

if (userInput === null) {
  console.log("Order cancelled.");
} else {
  const flavors = parseFlavors(userInput);
  const flavorCounts = countFlavors(flavors);
  printFlavorCounts(flavorCounts);
}
