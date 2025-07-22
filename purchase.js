
let selectedItem = "";

function buyItem(item, cost) {
  selectedItem = { name: item, cost: cost };
  document.getElementById("itemName").innerText = `Item: ${item}, Cost: KES ${cost}`;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function confirmPurchase() {
  const phone = document.getElementById("phone").value;
  const mpesa = document.getElementById("mpesa").value;
  if (phone && mpesa) {
    const purchase = {
      item: selectedItem.name,
      cost: selectedItem.cost,
      phone,
      mpesa,
      time: new Date().toLocaleString()
    };
    let purchases = JSON.parse(localStorage.getItem("purchases") || "[]");
    purchases.push(purchase);
    localStorage.setItem("purchases", JSON.stringify(purchases));
    alert("Purchase submitted! Await manual confirmation.");
    closePopup();
  } else {
    alert("Please fill in all fields.");
  }
}
