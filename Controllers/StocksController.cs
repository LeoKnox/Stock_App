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

        [HttpPost("AddStock")]
        public IActionResult AddStock([FromBody]Stock stock)
        {
            if(stock != null)
            {
                _service.AddStock(stock);
            }
            return Ok();
        }
    }
}