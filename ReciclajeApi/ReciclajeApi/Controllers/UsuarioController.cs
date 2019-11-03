using System;
using Microsoft.AspNetCore.Mvc;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.Domain;

namespace ReciclajeApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioCoordinator usuarioCoordinator;

        public UsuarioController(IUsuarioCoordinator usuarioCoordinator)
        {
            this.usuarioCoordinator = usuarioCoordinator;
        }

        [HttpGet("perfil/{IdUsuario}")]
        public ActionResult<PerfilApiModel> ObtenerPerfil(int IdUsuario)
        {
            try
            {
                var result = usuarioCoordinator.ObtenerPerfil(IdUsuario);

                return StatusCode(200, result);
            }
            catch (Exception ex)
            {
                return StatusCode(403);
            }
        }
    }
}