using ReciclajeApi.Business.Models.ApiModels;

namespace ReciclajeApi.Business.ICoordinators
{
    public interface IUsuarioCoordinator
    {
        UsuarioApiModel ObtenerUsuario(int idUsuario);

        UsuarioApiModel ObtenerUsuarioPorMail(string email);

        bool ValidarUsuario(string email);
    }
}