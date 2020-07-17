using System.Collections.Generic;
using Stocks.Data;

namespace stocks.Data
{
    public interface IStockService
    {
        List<Stock> GetAllStocks();
        Stock GetStockById(int stockId);
        void UpdateStock(int stockId, Stock stock);
        void DeleteStock(int stockId);
        void AddStock(Stock stock);
    }
}