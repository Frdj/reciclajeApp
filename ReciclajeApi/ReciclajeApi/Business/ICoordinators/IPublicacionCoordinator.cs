using System.Collections.Generic;
using System.Threading.Tasks;
using ReciclajeApi.Business.Models.ApiModels;

namespace ReciclajeApi.Business.ICoordinators
{
    public interface IPublicacionCoordinator
    {
        List<PublicacionApiModel> ObtenerPublicaciones();

        List<PublicacionApiModel> ObtenerPublicacionesPorUsuario(int idUsuario);

        List<PublicacionApiModel> ObtenerPublicacionesPorUsuarioReceptor(int idUsuario);

        Task<bool> AceptarOferta(int idPublicacion, int idUsuario);
    }
}
