using System;
using System.Collections.Generic;
using System.Data;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.ApiModels;

namespace ReciclajeApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class PublicacionController : ControllerBase
    {
        private readonly IPublicacionCoordinator publicacionCoordinator;

        private readonly IUsuarioCoordinator usuarioCoordinator;

        private readonly IDbConnection _cnn;

        public PublicacionController(IDbConnection cnn, IPublicacionCoordinator publicacionCoordinator, IUsuarioCoordinator usuarioCoordinator)
        {
            _cnn = cnn;
            this.publicacionCoordinator = publicacionCoordinator;
            this.usuarioCoordinator = usuarioCoordinator;
        }

        [HttpGet("publicaciones/creadas")]
        public ActionResult<List<PublicacionApiModel>> GetPublicacionesCreadas([FromQuery] string email)
        {
            try
            {
                var usuario = usuarioCoordinator.ObtenerUsuarioPorMail(email);
                var result = publicacionCoordinator.ObtenerPublicacionesPorUsuario(usuario.IdUsuario);

                return StatusCode(int.Parse(HttpStatusCode.OK.ToString()), result);
            }
            catch (Exception)
            {
                return StatusCode(int.Parse(HttpStatusCode.InternalServerError.ToString()));
            }
        }

        [HttpGet("publicaciones/aceptadas")] // Obtener las publicaciones aceptadas por el usuario
        public ActionResult<List<PublicacionApiModel>> GetPublicacionesAceptadas(string email)
        {
            try
            {
                var usuario = usuarioCoordinator.ObtenerUsuarioPorMail(email);
                var result = publicacionCoordinator.ObtenerPublicacionesPorUsuarioReceptor(usuario.IdUsuario);

                return StatusCode(int.Parse(HttpStatusCode.OK.ToString()), result);
            }
            catch (Exception)
            {
                return StatusCode(int.Parse(HttpStatusCode.InternalServerError.ToString()));
            }
        }

        [HttpGet("publicaciones")]
        public ActionResult<List<PublicacionApiModel>> GetPublicaciones()
        {
            try
            {
                var result = publicacionCoordinator.ObtenerPublicaciones();
                return StatusCode(int.Parse(HttpStatusCode.OK.ToString()), result);
            }
            catch (Exception ex)
            {
                return StatusCode(int.Parse(HttpStatusCode.InternalServerError.ToString()));
            }
        }

        [HttpPost("publicaciones/retirar")]
        public ActionResult<bool> AceptarOferta(int idPublicacion, int idUsuario)
        {
            try
            {
                var result = publicacionCoordinator.AceptarOferta(idPublicacion, idUsuario);
                return StatusCode(int.Parse(HttpStatusCode.OK.ToString()), result);
            }
            catch (Exception e)
            {
                return StatusCode(int.Parse(HttpStatusCode.InternalServerError.ToString()));
            }
        }
    }
}