let qty = document.getElementById('qty');
let itm = document.getElementById('itm');
let billList = document.getElementById('bill-list');
let totalBill = document.getElementById('total-bill');

let prices = {  // Sample prices for items
    "Burger": 100,
    "Pizza": 250,
    "Pasta": 150,
    "Sandwich": 80,
    "Fries": 70
};

let total = 0;

function addItem() {
    let itemName = itm.value.trim();
    let quantity = parseInt(qty.value);

    if (itemName === "" || isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid item and quantity.");
        return;
    }

    let pricePerItem = prices[itemName] || 200;  // Default price if item not in list
    let itemTotal = pricePerItem * quantity;
    
    // Add to bill list
    let listItem = document.createElement('li');
    listItem.innerText = `${itemName} (x${quantity}) - ₹${itemTotal}`;
    billList.appendChild(listItem);

    // Update total bill
    total += itemTotal;
    totalBill.innerText = total;

    // Clear input fields
    itm.value = "";
    qty.value = "";
}
