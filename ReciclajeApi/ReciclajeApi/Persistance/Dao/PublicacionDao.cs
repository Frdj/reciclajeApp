using Dapper;
using ReciclajeApi.Persistance.IDao;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace ReciclajeApi.Persistance.Dao
{
    public class PublicacionDao : IPublicacionDao
    {
        private readonly IDbConnection _cnn;

        public PublicacionDao(IDbConnection cnn)
        {
            this._cnn = cnn;
        }

        public IEnumerable<Publicacion> ObtenerPublicaciones()
        {
            var query = "SELECT * FROM publicaciones";

            return _cnn.Query<Publicacion>(query).ToList();
        }
    }
}