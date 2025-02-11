

import process from "node:process";

// main.ts

export interface Stock {
    symbol: string;
    price: number;
}

export interface PortfolioItem {
    stock: Stock;
    quantity: number;
}

class Market {
    private stocks: Stock[] = [];

    constructor() {
        this.stocks = [
            { symbol: 'AAPL', price: 150 },
            { symbol: 'GOOGL', price: 2800 },
            { symbol: 'AMZN', price: 3400 },
        ];
    }

    getMarketData(): Stock[] {
        return this.stocks;
    }

    updateStockPrice(symbol: string, newPrice: number): void {
        const stock = this.stocks.find(s => s.symbol === symbol);
        if (stock) {
            stock.price = newPrice;
        }
    }
}

class Portfolio {
    private items: PortfolioItem[] = [];

    addStock(stock: Stock, quantity: number): void {
        const existingItem = this.items.find(item => item.stock.symbol === stock.symbol);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ stock, quantity });
        }
    }

    removeStock(stock: Stock, quantity: number): void {
        const existingItem = this.items.find(item => item.stock.symbol === stock.symbol);
        if (existingItem) {
            existingItem.quantity -= quantity;
            if (existingItem.quantity <= 0) {
                this.items = this.items.filter(item => item.stock.symbol !== stock.symbol);
            }
        }
    }

    getPortfolioValue(): number {
        return this.items.reduce((total, item) => total + item.stock.price * item.quantity, 0);
    }

    getPortfolio(): PortfolioItem[] {
        return this.items;
    }
}

class TradingPlatform {
    private market: Market;
    private portfolio: Portfolio;

    constructor() {
        this.market = new Market();
        this.portfolio = new Portfolio();
    }

    buyStock(symbol: string, quantity: number): void {
        const stock = this.market.getMarketData().find(s => s.symbol === symbol);
        if (stock) {
            this.portfolio.addStock(stock, quantity);
            console.log(`Bought ${quantity} shares of ${symbol}`);
        } else {
            console.log(`Stock ${symbol} not found`);
        }
    }

    sellStock(symbol: string, quantity: number): void {
        const stock = this.market.getMarketData().find(s => s.symbol === symbol);
        if (stock) {
            this.portfolio.removeStock(stock, quantity);
            console.log(`Sold ${quantity} shares of ${symbol}`);
        } else {
            console.log(`Stock ${symbol} not found`);
        }
    }

    getPortfolioValue(): number {
        return this.portfolio.getPortfolioValue();
    }

    getPortfolio(): PortfolioItem[] {
        return this.portfolio.getPortfolio();
    }

    getMarketData(): Stock[] {
        return this.market.getMarketData();
    }
}

// Example usage
const platform = new TradingPlatform();
platform.buyStock('AAPL', 10);
platform.buyStock('GOOGL', 5);
console.log('Portfolio Value:', platform.getPortfolioValue());
console.log('Portfolio:', platform.getPortfolio());
platform.sellStock('AAPL', 5);
console.log('Portfolio Value:', platform.getPortfolioValue());
console.log('Portfolio:', platform.getPortfolio());

//for benchmark
export function benchmark() {
    const platform = new TradingPlatform();
    console.time('Benchmark');

    for (let i = 0; i < 1000; i++) {
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
    const platform = new TradingPlatform();

    while (true) {
        console.log('\n1. Buy Stock');
        console.log('2. Sell Stock');
        console.log('3. View Portfolio Value');
        console.log('4. View Portfolio');
        console.log('5. View Market Data');
        console.log('6. Exit');
        const choice = prompt('Enter your choice: ');

        switch (choice) {
            case '1': {
                const buySymbol = prompt('Enter stock symbol to buy: ');
                const buyQuantityInput = prompt('Enter quantity to buy: ');
                const buyQuantity = parseInt(buyQuantityInput ?? '0', 10);
                if (buySymbol) {
                    platform.buyStock(buySymbol, buyQuantity);
                } else {
                    console.log('Invalid stock symbol.');
                }
                break;
            }
            case '2': {
                const sellSymbol = prompt('Enter stock symbol to sell: ');
                const sellQuantityInput = prompt('Enter quantity to sell: ');
                const sellQuantity = parseInt(sellQuantityInput ?? '0', 10);
                if (sellSymbol) {
                    platform.sellStock(sellSymbol, sellQuantity);
                } else {
                    console.log('Invalid stock symbol.');
                }
                break;
            }
            case '3': {
                console.log('Portfolio Value:', platform.getPortfolioValue());
                break;
            }
            case '4': {
                console.log('Portfolio:', platform.getPortfolio());
                break;
            }
            case '5': {
                console.log('Market Data:', platform.getMarketData());
                break;
            }
            case '6': {
                console.log('Exiting...');
                process.exit(0);
                break;
            }
            default: {
                console.log('Invalid choice. Please try again.');
            }
        }
    }
}