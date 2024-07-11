// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the cats array (modifies original array)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the cats array (modifies original array)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the cats array (modifies original array)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the cats array (modifies original array)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the cats array and return a new array (leaves original array unchanged)
function appendCat(name) {
  let newCats = cats.slice(); // Create a shallow copy of cats array
  newCats.push(name);
  return newCats;
}

// Function to prepend a cat to the cats array and return a new array (leaves original array unchanged)
function prependCat(name) {
  let newCats = cats.slice(); // Create a shallow copy of cats array
  newCats.unshift(name);
  return newCats;
}

// Function to remove the last cat from the cats array and return a new array (leaves original array unchanged)
function removeLastCat() {
  let newCats = cats.slice(); // Create a shallow copy of cats array
  newCats.pop();
  return newCats;
}

// Function to remove the first cat from the cats array and return a new array (leaves original array unchanged)
function removeFirstCat() {
  let newCats = cats.slice(); // Create a shallow copy of cats array
  newCats.shift();
  return newCats;
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

