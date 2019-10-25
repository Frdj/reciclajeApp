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
    [Route("api")]
    [ApiController]
    public class InformacionController : ControllerBase
    {
        private readonly IInformacionCoordinator informacionCoordinator;

        public InformacionController(IInformacionCoordinator informacionCoordinator)
        {
            this.informacionCoordinator = informacionCoordinator;
        }

        [HttpGet("materiales")]
        public ActionResult<List<MaterialApiModel>> ObtenerMateriales()
        {
            try
            {
                var result = informacionCoordinator.ObtenerMateriales();

                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(403);
            }

            try
            {
                

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
