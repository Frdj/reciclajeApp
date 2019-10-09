using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace ReciclajeApi.Controllers
{
    public class UsuarioController : ControllerBase
    {
        private readonly IDbConnection _cnn;
        public UsuarioController(IDbConnection cnn)
        {
            _cnn = cnn;
        }

        // TODO: Registro y Login de usuario

        [HttpGet("[action]")]
        public async Task<IActionResult> GetPuntosByUsuario([FromBody] string idUsuario)
        {
            try
            {
                int puntos = 0;

                var query = "SELECT * FROM usuarios WHERE email = @email";
                var parameter = new DynamicParameters();
                parameter.Add("@idUsuario", idUsuario);

                puntos = (await _cnn.QueryAsync<int>(query, parameter)).SingleOrDefault();

                return Ok(puntos);
            }
            catch (Exception e)
            {
                // TODO: Hacer algo en caso de error
                return Ok(0);
            }
        }
    }
}