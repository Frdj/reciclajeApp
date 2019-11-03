using System.Data;
using Dapper;
using ReciclajeApi.Business.Models.Domain;
using ReciclajeApi.Persistance.IDao;

namespace ReciclajeApi.Persistance.Dao
{
    public class ProvinciaDao : IProvinciaDao
    {
        private readonly IDbConnection _cnn;

        public ProvinciaDao(IDbConnection cnn)
        {
            this._cnn = cnn;
        }

        public Provincia ObtenerProvincia(int idProvincia)
        {
            string query = @"SELECT IdProvincia, Descripcion
                            FROM provincias 
                            WHERE IdProvincia = @IdProvincia";

            return _cnn.QueryFirstOrDefault<Provincia>(query, new { IdProvincia = idProvincia });
        }

        public bool ExisteProvincia(int idProvincia)
        {
            string query = @"SELECT 1
                            FROM provincias 
                            WHERE IdProvincia = @IdProvincia";

            return _cnn.QueryFirstOrDefault<bool>(query, new { IdProvincia = idProvincia });
        }
    }
}