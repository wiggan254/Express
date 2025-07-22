
const cars = [
  { name: "Mood", type: "Nganya", price: 50, mode: "rent", img: "assets/cars/nganya1.png" },
  { name: "Matrix", type: "Nganya", price: 50, mode: "rent", img: "assets/cars/nganya2.png" },
  { name: "Heartless", type: "Nganya", price: 50, mode: "rent", img: "assets/cars/nganya3.png" },
  { name: "Standard 1", type: "Standard", price: 30, mode: "buy", img: "assets/cars/car1.png" },
  { name: "Standard 2", type: "Standard", price: 100, mode: "buy", img: "assets/cars/car2.png" }
];

let balance = 0;

function updateCarousel() {
  const container = document.getElementById("car-carousel");
  container.innerHTML = "";
  cars.forEach((car, index) => {
    const carDiv = document.createElement("div");
    carDiv.className = "car-item";
    carDiv.innerHTML = `
      <img src="${car.img}" alt="${car.name}" />
      <h2>${car.name}</h2>
      <p>Type: ${car.type}</p>
      <p>${car.mode === "buy" ? "KES " + car.price + " (Buy)" : "KES " + car.price + " (Rent for 2 hrs)"}</p>
      <button onclick="selectCar(${index})">${car.mode === "buy" ? "Buy" : "Rent"}</button>
    `;
    container.appendChild(carDiv);
  });
}

function selectCar(index) {
  const car = cars[index];
  alert(car.mode === "buy" ? `Purchased ${car.name} for KES ${car.price}` : `Rented ${car.name} for 2 hours at KES ${car.price}`);
  balance -= car.price;
  document.getElementById("balance").innerText = "Balance: KES " + balance;
}

function applyCustomization() {
  const color = document.getElementById("carColor").value;
  alert("Color applied: " + color + " (visual only)");
}

window.onload = () => {
  updateCarousel();
  document.getElementById("balance").innerText = "Balance: KES " + balance;
};
