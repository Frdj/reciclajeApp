using ReciclajeApi.Business.Models.Domain;

namespace ReciclajeApi.Persistance.IDao
{
    public interface IProvinciaDao
    {
        Provincia ObtenerProvincia(int idProvincia);

        bool ExisteProvincia(int idProvincia);
    }
}