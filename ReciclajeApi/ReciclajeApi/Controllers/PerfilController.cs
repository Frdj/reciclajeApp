using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using ReciclajeApi.Business.Models.Domain;

namespace ReciclajeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PerfilController : ControllerBase
    {
        private readonly IDbConnection _cnn;

        public PerfilController(IDbConnection cnn)
        {
            _cnn = cnn;
        }

        [HttpGet("[action]/{email}")]
        public async Task<IActionResult> GetPerfil(string email)
        {
            try
            {
                var perfil = new Usuario();
                var query = "SELECT * FROM usuarios WHERE email = @email";
                var parameter = new DynamicParameters();
                parameter.Add("@email", email);

                perfil = (await _cnn.QueryAsync<Usuario>(query, parameter)).SingleOrDefault();

                return Ok(perfil);
            }
            catch (Exception e)
            {
                // TODO: Hacer algo en caso de error
                return Ok(null);
            }
        }

    }
}
