using System.Collections.Generic;
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
            throw new System.NotImplementedException();
        }

        public List<Stock> GetAllStocks()
        {
            throw new System.NotImplementedException();
        }

        public Stock GetStockById(int stockId)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateStock(int stockId, Stock stock)
        {
            throw new System.NotImplementedException();
        }
    }
}