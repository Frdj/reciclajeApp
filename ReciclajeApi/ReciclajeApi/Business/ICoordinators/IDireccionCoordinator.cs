using ReciclajeApi.Business.Models.ApiModels;
using System.Collections.Generic;

namespace ReciclajeApi.Business.ICoordinators
{
    public interface IDireccionCoordinator
    {
        DireccionApiModel ObtenerDireccion(int numeroDireccion, int idUsuario);

        List<DireccionApiModel> ObtenerDirecciones(int idUsuario);
    }
}