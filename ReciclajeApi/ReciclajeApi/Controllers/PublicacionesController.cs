using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace ReciclajeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicacionesController : ControllerBase
    {

        private readonly IDbConnection _cnn;
        public PublicacionesController(IDbConnection cnn)
        {
            _cnn = cnn;
        }

        [HttpGet("[action]/{email}")]
        public async Task<IActionResult> GetPublicacionesCreadas(string email)
        {
            try
            {
                var query = "SELECT idUsuario FROM usuarios WHERE email = @email";
                var parameter = new DynamicParameters();
                parameter.Add("@email", email);

                int idUsuarioP = (await _cnn.QueryAsync<int>(query, parameter)).SingleOrDefault();

                query = "SELECT * FROM publicaciones WHERE idUsuarioP = @idUsuarioP";
                var parameter2 = new DynamicParameters();
                parameter2.Add("@idUsuarioP", idUsuarioP);

                var publicaciones = (await _cnn.QueryAsync<Publicacion>(query, parameter2)).ToList();

                return Ok(publicaciones);
            }
            catch (Exception e)
            {
                // TODO: Hacer algo en caso de error
                return Ok(null);
            }
        }

        [HttpGet("[action]/{email}")]
        public async Task<IActionResult> GetPublicacionesAceptadas(string email)
        {
            try
            {
                var query = "SELECT idUsuario FROM usuarios WHERE email = @email";
                var parameter = new DynamicParameters();
                parameter.Add("@email", email);

                int idUsuarioR = (await _cnn.QueryAsync<int>(query, parameter)).SingleOrDefault();

                query = "SELECT * FROM publicaciones WHERE idUsuarioR = @idUsuarioR";
                var parameter2 = new DynamicParameters();
                parameter2.Add("@idUsuarioR", idUsuarioR);

                var publicaciones = (await _cnn.QueryAsync<Publicacion>(query, parameter2)).ToList();

                return Ok(publicaciones);
            }
            catch (Exception e)
            {
                // TODO: Hacer algo en caso de error
                return Ok(null);
            }
        }


    }
}