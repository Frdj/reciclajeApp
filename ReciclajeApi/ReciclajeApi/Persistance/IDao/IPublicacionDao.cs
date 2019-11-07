using System.Collections.Generic;
using ReciclajeApi.Business.Models.Domain;

namespace ReciclajeApi.Persistance.IDao
{
    public interface IPublicacionDao
    {
        IEnumerable<Publicacion> ObtenerPublicaciones();

        IEnumerable<Publicacion> ObtenerPublicacionesPorUsuario(int idUsuario);

        IEnumerable<Publicacion> ObtenerPublicacionesPorUsuarioReceptor(int idUsuario);

        IEnumerable<PublicacionDetalle> ObtenerPublicacionDetalle(int IdPublicacion);

        bool AceptarOferta(int idPublicacion, int idUsuario);

        bool ReservarOferta(int idPublicacion, int idUsuario);

        bool CrearPublicacion(Publicacion publicacion);
    }
}