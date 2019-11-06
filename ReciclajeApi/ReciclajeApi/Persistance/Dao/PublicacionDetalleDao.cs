using System.Collections.Generic;
using System.Data;
using Dapper;
using ReciclajeApi.Business.Models.Domain;
using ReciclajeApi.Persistance.IDao;

namespace ReciclajeApi.Persistance.Dao
{
    public class PublicacionDetalleDao : IPublicacionDetalleDao
    {
        private readonly IDbConnection _cnn;

        public PublicacionDetalleDao(IDbConnection cnn)
        {
            this._cnn = cnn;
        }

        public IEnumerable<PublicacionDetalle> ObtenerPublicacionDetalle(int IdPublicacion)
        {
           return null;
        }
    }
}