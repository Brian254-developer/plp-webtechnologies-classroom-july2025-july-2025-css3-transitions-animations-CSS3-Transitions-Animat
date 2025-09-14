// Parameters & Return Values
function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(10, 5); // Returns 50
console.log("Area:", area);

// Local vs Global Scope
let globalMessage = "Hello from the global scope!";

function greetUser(name) {
  let localMessage = `Hello, ${name}!`; // local scope
  console.log(localMessage);
  console.log(globalMessage); // accessible here
}

greetUser("Amina");
// console.log(localMessage); ❌ Error: not defined outside the function

//Reusable Function for Animation
// function animateElement(id, x, y) {
function animateElement(id, x, y) {
  const el = document.getElementById(id);
  el.style.transform = `translate(${x}px, ${y}px)`;
}

// Reuse with different elements
animateElement("box1", 100, 0);
animateElement("box2", 0, 150);

// Card Flip Animation
function flipCard(cardElement) {
  cardElement.classList.toggle("flip");
 
}

