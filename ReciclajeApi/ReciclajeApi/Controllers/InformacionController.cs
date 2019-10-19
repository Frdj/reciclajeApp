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
        public async Task<IActionResult> GetMateriales(string campos)
        {
            try
            {
                var query = "SELECT @campos FROM categoria_residuos";
                var parameter = new DynamicParameters();
                parameter.Add("@campos", campos);


                List<Tipo_Residuo> materiales = (await _cnn.QueryAsync<Tipo_Residuo>(query, parameter)).ToList();

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
