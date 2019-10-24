using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using ReciclajeApi.Models;

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
                var query = @"SELECT cr.idCantegoria, ts.descripcion as Material, cr.descripcion as Residuo, cr.reciclable as EsReciclable, cr.imagen as Imagen FROM categoria_residuos cr INNER JOIN tipo_residuos ts ON ts.idTipo = cr.idTipoResiduo";

                List<MaterialesApi> materiales = (await _cnn.QueryAsync<MaterialesApi>(query)).ToList();

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
