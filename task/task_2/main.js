"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmark = benchmark;
var node_process_1 = require("node:process");
var Market = /** @class */ (function () {
    function Market() {
        this.stocks = [];
        this.stocks = [
            { symbol: 'AAPL', price: 150 },
            { symbol: 'GOOGL', price: 2800 },
            { symbol: 'AMZN', price: 3400 },
        ];
    }
    Market.prototype.getMarketData = function () {
        return this.stocks;
    };
    Market.prototype.updateStockPrice = function (symbol, newPrice) {
        var stock = this.stocks.find(function (s) { return s.symbol === symbol; });
        if (stock) {
            stock.price = newPrice;
        }
    };
    return Market;
}());
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.items = [];
    }
    Portfolio.prototype.addStock = function (stock, quantity) {
        var existingItem = this.items.find(function (item) { return item.stock.symbol === stock.symbol; });
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            this.items.push({ stock: stock, quantity: quantity });
        }
    };
    Portfolio.prototype.removeStock = function (stock, quantity) {
        var existingItem = this.items.find(function (item) { return item.stock.symbol === stock.symbol; });
        if (existingItem) {
            existingItem.quantity -= quantity;
            if (existingItem.quantity <= 0) {
                this.items = this.items.filter(function (item) { return item.stock.symbol !== stock.symbol; });
            }
        }
    };
    Portfolio.prototype.getPortfolioValue = function () {
        return this.items.reduce(function (total, item) { return total + item.stock.price * item.quantity; }, 0);
    };
    Portfolio.prototype.getPortfolio = function () {
        return this.items;
    };
    return Portfolio;
}());
var TradingPlatform = /** @class */ (function () {
    function TradingPlatform() {
        this.market = new Market();
        this.portfolio = new Portfolio();
    }
    TradingPlatform.prototype.buyStock = function (symbol, quantity) {
        var stock = this.market.getMarketData().find(function (s) { return s.symbol === symbol; });
        if (stock) {
            this.portfolio.addStock(stock, quantity);
            console.log("Bought ".concat(quantity, " shares of ").concat(symbol));
        }
        else {
            console.log("Stock ".concat(symbol, " not found"));
        }
    };
    TradingPlatform.prototype.sellStock = function (symbol, quantity) {
        var stock = this.market.getMarketData().find(function (s) { return s.symbol === symbol; });
        if (stock) {
            this.portfolio.removeStock(stock, quantity);
            console.log("Sold ".concat(quantity, " shares of ").concat(symbol));
        }
        else {
            console.log("Stock ".concat(symbol, " not found"));
        }
    };
    TradingPlatform.prototype.getPortfolioValue = function () {
        return this.portfolio.getPortfolioValue();
    };
    TradingPlatform.prototype.getPortfolio = function () {
        return this.portfolio.getPortfolio();
    };
    TradingPlatform.prototype.getMarketData = function () {
        return this.market.getMarketData();
    };
    return TradingPlatform;
}());
// Example usage
var platform = new TradingPlatform();
platform.buyStock('AAPL', 10);
platform.buyStock('GOOGL', 5);
console.log('Portfolio Value:', platform.getPortfolioValue());
console.log('Portfolio:', platform.getPortfolio());
platform.sellStock('AAPL', 5);
console.log('Portfolio Value:', platform.getPortfolioValue());
console.log('Portfolio:', platform.getPortfolio());
//for benchmark
function benchmark() {
    var platform = new TradingPlatform();
    console.time('Benchmark');
    for (var i = 0; i < 1000; i++) {
        platform.buyStock('AAPL', 10);
        platform.buyStock('GOOGL', 5);
        platform.sellStock('AAPL', 5);
    }
    console.timeEnd('Benchmark');
    console.log('Final Portfolio Value:', platform.getPortfolioValue());
    console.log('Final Portfolio:', platform.getPortfolio());
}
//stand alone
if (import.meta.main) {
    var platform_1 = new TradingPlatform();
    while (true) {
        console.log('\n1. Buy Stock');
        console.log('2. Sell Stock');
        console.log('3. View Portfolio Value');
        console.log('4. View Portfolio');
        console.log('5. View Market Data');
        console.log('6. Exit');
        var choice = prompt('Enter your choice: ');
        switch (choice) {
            case '1': {
                var buySymbol = prompt('Enter stock symbol to buy: ');
                var buyQuantityInput = prompt('Enter quantity to buy: ');
                var buyQuantity = parseInt(buyQuantityInput !== null && buyQuantityInput !== void 0 ? buyQuantityInput : '0', 10);
                if (buySymbol) {
                    platform_1.buyStock(buySymbol, buyQuantity);
                }
                else {
                    console.log('Invalid stock symbol.');
                }
                break;
            }
            case '2': {
                var sellSymbol = prompt('Enter stock symbol to sell: ');
                var sellQuantityInput = prompt('Enter quantity to sell: ');
                var sellQuantity = parseInt(sellQuantityInput !== null && sellQuantityInput !== void 0 ? sellQuantityInput : '0', 10);
                if (sellSymbol) {
                    platform_1.sellStock(sellSymbol, sellQuantity);
                }
                else {
                    console.log('Invalid stock symbol.');
                }
                break;
            }
            case '3': {
                console.log('Portfolio Value:', platform_1.getPortfolioValue());
                break;
            }
            case '4': {
                console.log('Portfolio:', platform_1.getPortfolio());
                break;
            }
            case '5': {
                console.log('Market Data:', platform_1.getMarketData());
                break;
            }
            case '6': {
                console.log('Exiting...');
                node_process_1.default.exit(0);
                break;
            }
            default: {
                console.log('Invalid choice. Please try again.');
            }
        }
    }
}
