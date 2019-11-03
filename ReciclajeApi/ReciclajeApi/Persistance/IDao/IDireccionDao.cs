using ReciclajeApi.Business.Models.Domain;
using System.Collections.Generic;

namespace ReciclajeApi.Persistance.IDao
{
    public interface IDireccionDao
    {
        Direccion ObtenerDireccion(int numeroDireccion, int idUsuario);

        List<Direccion> ObtenerDirecciones(int idUsuario);
    }
}