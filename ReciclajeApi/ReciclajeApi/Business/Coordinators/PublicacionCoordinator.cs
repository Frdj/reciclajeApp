using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.Exceptions;
using ReciclajeApi.Persistance.IDao;
using System.Linq;

namespace ReciclajeApi.Business.Coordinators
{
    public class PublicacionCoordinator : IPublicacionCoordinator
    {
        private readonly IPublicacionDao publicacionDao;

        public PublicacionCoordinator(IPublicacionDao publicacionDao)
        {
            this.publicacionDao = publicacionDao;
        }

        public void ObtenerPublicaciones()
        {
            var publicaciones = publicacionDao.ObtenerPublicaciones();

            if (publicaciones == null || publicaciones.Any())
            {
                throw new PublicacionesNotFoundException();
            }

        }
    }
}
