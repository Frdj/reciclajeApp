using AutoMapper;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.ApiModels;
using ReciclajeApi.Persistance.IDao;
using System;
using System.Collections.Generic;

namespace ReciclajeApi.Business.Coordinators
{
    public class InformacionCoordinator : IInformacionCoordinator
    {
        private readonly IInformacionDao informacionDao;
        private readonly IMapper mapper;

        public InformacionCoordinator(IInformacionDao informacionDao, IMapper mapper)
        {
            this.informacionDao = informacionDao;
            this.mapper = mapper;
        }

        public List<MaterialApiModel> ObtenerMateriales()
        {
            var result = informacionDao.ObtenerMateriales();

            if (result == null)
            {
                throw new Exception();
            }

            return mapper.Map<List<MaterialApiModel>>(result);
        }
        //public EstadoApiModel ObtenerEstado(int idEstado)
        //{
        //    if (idEstado < 1)
        //    {
        //        throw new Exception();
        //    }

        //    var result = estadoDao.ObtenerEstado(idEstado);

        //    if (result == null)
        //    {
        //        throw new Exception();
        //    }

        //    return mapper.Map<EstadoApiModel>(result);
        //}
    }
}