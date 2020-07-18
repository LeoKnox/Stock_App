using System.Collections.Generic;
using System.Linq;
using stocks.Data;
using Stocks.Data;

namespace Stocks.Data{
    public class StockService : IStockService
    {
        public void AddStock(Stock stock)
        {
            Data.Stock.Add(stock);
        }

        public void DeleteStock(int stockId)
        {
            var stock = Data.Stock.FirstOrDefault(n => n.Id == stockId);
            if(stock != null)
            {
                Data.Stock.Remove(stock);
            }
        }

        public List<Stock> GetAllStocks() => Data.Stock.ToList();

        public Stock GetStockById(int stockId) => Data.Stock.FirstOrDefault(n => n.Id == stockId);

        public void UpdateStock(int stockId, Stock stock)
        {
            var oldStock = Data.Stock.FirstOrDefault(n => n.Id == stockId);
            if (oldStock != null)
            {
                oldStock.Name = stock.Name;
                oldStock.Description = stock.Description;
                oldStock.StockPurchased = stock.StockPurchased;
                oldStock.StockSold =  stock.StockSold;
            }
        }
    }
}