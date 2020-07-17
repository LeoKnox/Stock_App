using System;
using System.Collections.Generic;

namespace Stocks.Data
{
    public static class Data
    {
    public static List<Stock> Stock => allStocks;
    static List<Stock> allStocks = new List<Stock>()
    {
        new Stock()
        {
            Id = 1,
            Name = "Google",
            Description = "Strong solid tech stock",
            StockPurchased = new DateTime(2020,06,01),
            StockSold = null
        },
        new Stock()
        {
            Id = 2,
            Name = "Sam Adams",
            Description = "Beer Stock purchased while drunk.",
            StockPurchased = new DateTime(2020,06,03),
            StockSold = new DateTime(2020, 6, 6)
        }
    };
    }
}