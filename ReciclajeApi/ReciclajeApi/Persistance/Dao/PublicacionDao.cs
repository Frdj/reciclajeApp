using Dapper;
using ReciclajeApi.Business.Models.Domain;
using ReciclajeApi.Persistance.IDao;
using System;
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

        public IEnumerable<Publicacion> ObtenerPublicacionesPorUsuario(int idUsuario)
        {
            var query = "SELECT * FROM publicaciones WHERE IdUsuarioP = @IdUsuario";

            return _cnn.Query<Publicacion>(query, new { IdUsuario = idUsuario }).ToList();
        }

        public IEnumerable<Publicacion> ObtenerPublicacionesPorUsuarioReceptor(int idUsuario)
        {
            var query = "SELECT * FROM publicaciones WHERE IdUsuarioR = @IdUsuario";

            return _cnn.Query<Publicacion>(query, new { IdUsuario = idUsuario }).ToList();
        }

        public bool AceptarOferta(int idPublicacion, int idUsuario)
        {
            var query = "UPDATE publicaciones SET IdUsuarioR = @IdUsuarioR, Estado = @Estado, FechaRetiro = @FechaRetiro WHERE IdPublicacion = @IdPublicacion";

            return _cnn.Execute(query, new { IdUsuarioR = idUsuario, Estado = 3, IdPublicacion = idPublicacion, FechaRetiro = DateTime.Now }) > 0;
        }
    }
}