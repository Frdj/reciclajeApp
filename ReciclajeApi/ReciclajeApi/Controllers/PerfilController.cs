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
    public class PerfilController : ControllerBase
    {
        private readonly IDbConnection _cnn;

        public PerfilController(IDbConnection cnn){
            _cnn = cnn;
        }

        [HttpGet("[action]")]
        public async Task<Usuario> GetPerfil([FromBody] string email){
            try{

                var perfil = new Usuario();
                var query = "SELECT * FROM usuarios WHERE email = @email";
                var parameter = new DynamicParameters();
                parameter.Add("@email", email);

                perfil = (await _cnn.QueryAsync<Usuario>(query, parameter)).SingleOrDefault();

                return perfil;
            }
            catch (Exception e){
                // hacer algo
                return null;
            }
        }
        
    }
}
