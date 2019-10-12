using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace ReciclajeApi
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipsController : ControllerBase
    {
        private readonly IDbConnection _cnn;
        public TipsController(IDbConnection cnn)
        {
            _cnn = cnn;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetTipRandom()
        {
            try
            {
                var query = "SELECT * FROM tips";
                var tips = (await _cnn.QueryAsync<Tip>(query)).ToList();

                var random = new Random();
                int num = random.Next(tips.Count());

                return Ok(tips[num]);
            }
            catch (Exception e)
                {
                return null;
            }
        }
    }
}