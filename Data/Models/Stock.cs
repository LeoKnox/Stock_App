using System;

namespace Stocks.Data
{
    public class Stock
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StockPurchased { get; set; }
        public DateTime? StockSold { get; set; }
    }
}