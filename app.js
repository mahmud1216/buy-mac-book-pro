function chagePurchseCost(component, value) {
  const getPurchseCost = document.getElementById("extra-" + component);
  getPurchseCost.innerText = value;
}

function getInt(id) {
  const getId = document.getElementById(id);
  const getIdText = getId.innerText;
  const getIntValue = parseInt(getIdText);
  return getIntValue;
}

function totalCost() {
  const bestPrice = getInt("best-price");
  const extraMemoryCost = getInt("extra-memory-cost");
  const extraStorageCost = getInt("extra-storage-cost");
  const extraDeliveryCost = getInt("extra-delivery-charge");
  const totalPrice =
    bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
  const getTotalCost = document.getElementById("total-price");
  return (getTotalCost.innerText = totalPrice);
}

// -----------------------------  Extra Memory Cost

document.getElementById("memory-8gb").addEventListener("click", function () {
  chagePurchseCost("memory-cost", "0");
  totalCost();
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  chagePurchseCost("memory-cost", "180");
  totalCost();
});

// -----------------------------   Extra Storage Cost

document.getElementById("storage-256gb").addEventListener("click", function () {
  chagePurchseCost("storage-cost", "0");
  totalCost();
});
document.getElementById("storage-500gb").addEventListener("click", function () {
  chagePurchseCost("storage-cost", "100");
  totalCost();
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  chagePurchseCost("storage-cost", "180");
  totalCost();
});

// -----------------------------   Extra Delivery charge

document
  .getElementById("regular-delivery")
  .addEventListener("click", function () {
    chagePurchseCost("delivery-charge", "0");
    totalCost();
  });
document.getElementById("fast-delivery").addEventListener("click", function () {
  chagePurchseCost("delivery-charge", "20");
  totalCost();
});

// -----------------------------    Promo Code
document.getElementById("promo-code").addEventListener("click", function () {
  const promoInput = document.getElementById("promo-code-input");
  const promoInputValue = promoInput.value;
  if (promoInputValue === "hassan007") {
    const discountTotal = totalCost() - totalCost() * 0.2;
    const finalTotal = document.getElementById("final-total");
    finalTotal.innerText = discountTotal;
    promoInput.value = "";
  }
});
