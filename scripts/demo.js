// Function that returns a value and will calculate the amount the user spends based on their transaction history
function calculateTotalSpent(transactionHistory) {
    var totalSpent = 0;
    for (var i = 0; i < transactionHistory.length; i++) {
        totalSpent += transactionHistory[i].amount;
    }
    return totalSpent;
}

// Literal notation for transactions 1 & 2
var trans1 = {
    date: "1/22/24",
    detail: "Meal Swipe",
    amount: 12,
};

var trans2 = {
    date: "1/22/24",
    detail: "Quick Pass",
    amount: 10,
};

// Constructor notation for transactions
function Transaction(date, detail, amount) {
    this.date = date;
    this.detail = detail;
    this.amount = amount;
}

var trans3 = new Transaction("1/23/24", "College Bucks", 20);
var trans4 = new Transaction("1/25/24", "Quick Pass", 15);

// Transaction history array to hold the objects
var transactionHistory = [trans1, trans2, trans3, trans4];

// Function to print account balances
function printAccountBalances(mealswipeBalance, quickpassBalance, collegeBucksBalance) {
    document.getElementById("balance").innerHTML = `
        <h1 class="demoTXT">Balance <img src="images/balance.png" alt="dollar bill with coins" width="50" height="50"></h1>
        <ul id = "hide">
            <li><h2>Mealswipe Balance: $${mealswipeBalance}</h2></li>
            <li><h2>Quickpass Balance: $${quickpassBalance}</h2></li>
            <li><h2>College Bucks Balance: $${collegeBucksBalance}</h2></li>
        </ul>
    `;
}

// Account Balances
var mealswipeBalance = 350;
var quickpassBalance = 175; 
var collegeBucksBalance = 50; 

// Call the function to print account balances
printAccountBalances(mealswipeBalance, quickpassBalance, collegeBucksBalance);

// Function to update balances based on transactions
function updateBalances(transactionHistory) {
    transactionHistory.forEach(function (transaction) {
        switch (transaction.detail) {
            case "Meal Swipe":
                mealswipeBalance -= transaction.amount;
                break;
            case "Quick Pass":
                quickpassBalance -= transaction.amount;
                break;
            case "College Bucks":
                collegeBucksBalance -= transaction.amount;
                break;
        }
    });
}

// Print transaction history to the "transaction" div
var transactionTable = document.getElementById("demoTab");
for (var i = 0; i < transactionHistory.length; i++) {
    var transaction = transactionHistory[i];
    var row = transactionTable.insertRow(-1);
    row.insertCell(0).textContent = transaction.date;
    row.insertCell(1).textContent = transaction.detail;

    // Modify this part to print "-" in front of the third index of transaction.amount
    var amountCell = row.insertCell(2);
    amountCell.textContent = "-$" + transaction.amount;
}

// Call the function to update balances
updateBalances(transactionHistory);

// Call the function to print updated account balances
printAccountBalances(mealswipeBalance, quickpassBalance, collegeBucksBalance);

document.getElementById("transaction").innerHTML += `
    <p>Total Spent: $${calculateTotalSpent(transactionHistory)}</p>
`;

// Function to handle the "Add 20 college bucks" button click
function addFunds() {
    // Remove the event listener to prevent further clicks
    document.getElementById("addFunds").removeEventListener("click", addFunds);

    // Add 20 to the college bucks balance
    collegeBucksBalance += 20;

    // Update the balances displayed on the page
    printAccountBalances(mealswipeBalance, quickpassBalance, collegeBucksBalance);

    // Display the message
    document.getElementById("MSG").textContent = "You can only use this feature once.";
    document.getElementById("MSG").style.color = "red";
}

// Add event listener to the "Add 20 college bucks" button
document.getElementById("addFunds").addEventListener("click", addFunds);