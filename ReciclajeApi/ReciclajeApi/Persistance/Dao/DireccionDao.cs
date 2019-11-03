using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using ReciclajeApi.Business.Models.Domain;
using ReciclajeApi.Persistance.IDao;

namespace ReciclajeApi.Persistance.Dao
{
    public class DireccionDao : IDireccionDao
    {
        private readonly IDbConnection _cnn;

        public DireccionDao(IDbConnection cnn)
        {
            this._cnn = cnn;
        }

        public Direccion ObtenerDireccion(int numeroDireccion, int idUsuario)
        {
            string query = @"SELECT IdUsuario, NuDireccion, IdProvincia, IdLocalidad, Domicilio, Barrio 
                            FROM direcciones 
                            WHERE NuDireccion = @NuDireccion AND IdUsuario = @IdUsuario";

            return _cnn.QueryFirstOrDefault<Direccion>(query, new { NuDireccion = numeroDireccion, IdUsuario = idUsuario });
        }

        public List<Direccion> ObtenerDirecciones(int idUsuario)
        {
            var query = @"SELECT IdUsuario, NuDireccion, IdProvincia, IdLocalidad, Domicilio, Barrio 
                            FROM direcciones 
                            WHERE IdUsuario = @IdUsuario";

            return _cnn.Query<Direccion>(query, new { IdUsuario = idUsuario }).ToList();
        }
    }
}