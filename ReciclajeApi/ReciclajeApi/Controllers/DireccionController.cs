using System;
using Microsoft.AspNetCore.Mvc;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.ApiModels;
using ReciclajeApi.Business.Models.Domain;

namespace ReciclajeApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class DireccionController : ControllerBase
    {
        private readonly IDireccionCoordinator direccionCoordinator;

        public DireccionController(IDireccionCoordinator direccionCoordinator)
        {
            this.direccionCoordinator = direccionCoordinator;
        }

        [HttpGet("direcciones/{IdUsuario}")]
        public ActionResult<DireccionApiModel> ObtenerDirecciones(int idUsuario)
        {
            try
            {
                var result = direccionCoordinator.ObtenerDirecciones(idUsuario);

                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

        [HttpPost("direcciones/{IdUsuario}")]
        public ActionResult<int> CrearDireccion([FromBody] DireccionRequest direccionRequest, int idUsuario)
        {
            try
            {
                var result = direccionCoordinator.CrearDireccion(direccionRequest, idUsuario);

                return StatusCode(200, result);
            }
            catch(Exception ex)
            {
                return StatusCode(500);
            }
        }
    }
}