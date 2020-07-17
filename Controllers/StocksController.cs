using Microsoft.AspNetCore.Mvc;
using stocks.Data;
using Stocks.Data;

namespace stocks.Controllers
{
    [Route("apI/[controller]")]
    public class StocksController: Controller
    {
        private IStockService _service;
        public StocksController(IStockService service)
        {
            this._service = service;
        }

        [HttpGet("[Action]")]
        public IActionResult GetStocks()
        {
            var allStocks = _service.GetAllStocks();
            return Ok(allStocks);
        }

        [HttpPost("AddStock")]
        public IActionResult AddStock([FromBody]Stock stock)
        {
            if(stock != null)
            {
                _service.AddStock(stock);
            }
            return Ok();
        }

        [HttpPut("UpdateStock/{id}")]
        public IActionResult UpdateStock(int id, [FromBody]Stock stock)
        {
            _service.UpdateStock(id, stock);
            return Ok(stock);
        }
    }
}