"use strict";
// main.ts - Simple Stock Trading Platform
import process from "node:process";
import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Simulated stock market data (Symbol, Price, Date)
const stocks = [
    { symbol: "A", price: 150, date: "2025-02-11" },
    { symbol: "B", price: 2800, date: "2025-02-11" },
    { symbol: "C", price: 750, date: "2025-02-11" }
];
// Initial cash balance
let cashBalance = 10000;
// Portfolio to store owned stocks
const portfolio = [];
// Function to display available stocks
function displayStocks() {
    console.log("\n📈 Available Stocks:");
    stocks.forEach(function (stock) {
        console.log("   ".concat(stock.symbol, " - $").concat(stock.price));
    });
}
// Function to buy a stock
function buyStock(symbol, quantity) {
    const stock = stocks.find(function (s) { return s.symbol === symbol; });
    if (!stock) {
        console.log("❌ Stock not found.");
        return;
    }
    const cost = stock.price * quantity;
    if (cashBalance >= cost) {
        portfolio.push({ symbol: symbol, quantity: quantity, buyPrice: stock.price });
        cashBalance -= cost;
        console.log("\u2705 Bought ".concat(quantity, " shares of ").concat(symbol, " at $").concat(stock.price, " each."));
    }
    else {
        console.log("❌ Not enough cash to buy.");
    }
}
// Function to sell a stock
function sellStock(symbol, quantity) {
    const index = portfolio.findIndex(function (s) { return s.symbol === symbol; });
    if (index === -1 || portfolio[index].quantity < quantity) {
        console.log("❌ Not enough stock to sell.");
        return;
    }
    const stock = stocks.find(function (s) { return s.symbol === symbol; });
    if (!stock) {
        console.log("❌ Stock not found.");
        return;
    }
    const profit = (stock.price - portfolio[index].buyPrice) * quantity;
    cashBalance += stock.price * quantity;
    portfolio[index].quantity -= quantity;
    if (portfolio[index].quantity === 0) {
        portfolio.splice(index, 1); // Remove stock from portfolio if quantity is zero
    }
    console.log("\u2705 Sold ".concat(quantity, " shares of ").concat(symbol, " for a profit of $").concat(profit.toFixed(2), "."));
}
// Function to display portfolio details
function portfolioValue() {
    let totalValue = 0;
    console.log("\n📊 Portfolio Summary:");
    portfolio.forEach(function (stock) {
        const marketStock = stocks.find(function (s) { return s.symbol === stock.symbol; });
        if (marketStock) {
            const currentValue = marketStock.price * stock.quantity;
            totalValue += currentValue;
            console.log("   ".concat(stock.symbol, " - ").concat(stock.quantity, " shares | Buy Price: $").concat(stock.buyPrice, " | Current Price: $").concat(marketStock.price, " | Value: $").concat(currentValue));
        }
    });
    console.log("\n\uD83D\uDCB0 Cash Balance: $".concat(cashBalance));
    console.log("\uD83D\uDCC8 Total Portfolio Value: $".concat(totalValue));
    console.log("\uD83E\uDD11 Net Worth: $".concat(cashBalance + totalValue));
}
// Function to create a CLI menu
function showMenu() {
    console.log("\n📌 Stock Trading Menu:");
    console.log("1️⃣ View Available Stocks");
    console.log("2️⃣ Buy Stocks");
    console.log("3️⃣ Sell Stocks");
    console.log("4️⃣ View Portfolio");
    console.log("5️⃣ Exit");
    rl.question("👉 Enter your choice: ", function (choice) {
        switch (choice) {
            case "1":
                displayStocks();
                break;
            case "2":
                rl.question("📌 Enter Stock Symbol: ", function (symbol) {
                    rl.question("📌 Enter Quantity: ", function (quantity) {
                        buyStock(symbol.toUpperCase(), parseInt(quantity));
                        showMenu();
                    });
                });
                return;
            case "3":
                rl.question("📌 Enter Stock Symbol: ", function (symbol) {
                    rl.question("📌 Enter Quantity: ", function (quantity) {
                        sellStock(symbol.toUpperCase(), parseInt(quantity));
                        showMenu();
                    });
                });
                return;
            case "4":
                portfolioValue();
                break;
            case "5":
                console.log("🚀 Exiting stock trading platform...");
                rl.close();
                return;
            default:
                console.log("❌ Invalid choice. Try again.");
        }
        showMenu();
    });
}
// Start the program
console.log("🚀 Welcome to the Stock Trading Platform!");
showMenu();
//for standalone run
if (import.meta.main) {
    showMenu();
}
