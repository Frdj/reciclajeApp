using System.Collections.Generic;
using ReciclajeApi.Business.Models.Domain;

namespace ReciclajeApi.Persistance.IDao
{
    public interface IInformacionDao
    {
        List<Material> ObtenerMateriales();

        List<Tip> ObtenerTip();
    }
}