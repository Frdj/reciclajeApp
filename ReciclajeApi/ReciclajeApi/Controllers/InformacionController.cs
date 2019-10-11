using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace ReciclajeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InformacionController : ControllerBase
    {
        private readonly IDbConnection _cnn;

        public InformacionController(IDbConnection cnn)
        {
            _cnn = cnn;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetMateriales()
        {
            try
            {
                var query = "SELECT descripcion FROM categoria_residuos";

                List<string> materiales = (await _cnn.QueryAsync<string>(query)).ToList();

                return Ok(materiales);
            }
            catch (Exception e)
            {
                return Ok(null);
                // TODO: Hacer algo en caso de error
            }
        }

    }
}
