using System.Collections.Generic;
using ReciclajeApi.Business.Models.ApiModels;

namespace ReciclajeApi.Business.ICoordinators
{
    public interface IInformacionCoordinator
    {
        List<MaterialApiModel> ObtenerMateriales();

        string ObtenerTip();
    }
}