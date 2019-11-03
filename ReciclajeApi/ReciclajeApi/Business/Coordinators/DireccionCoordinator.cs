using System;
using System.Collections.Generic;
using AutoMapper;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.ApiModels;
using ReciclajeApi.Persistance.IDao;

namespace ReciclajeApi.Business.Coordinators
{
    public class DireccionCoordinator : IDireccionCoordinator
    {
        private readonly IDireccionDao direccionDao;
        private readonly IUsuarioCoordinator usuarioCoordinator;
        private readonly IProvinciaCoordinator provinciaCoordinator;
        private readonly ILocalidadCoordinator localidadCoordinator;
        private readonly IMapper mapper;

        public DireccionCoordinator(IProvinciaCoordinator provinciaCoordinator, ILocalidadCoordinator localidadCoordinator, IUsuarioCoordinator usuarioCoordinator, IDireccionDao direccionDao, IMapper mapper)
        {
            this.localidadCoordinator = localidadCoordinator;
            this.provinciaCoordinator = provinciaCoordinator;
            this.usuarioCoordinator = usuarioCoordinator;
            this.direccionDao = direccionDao;
            this.mapper = mapper;
        }

        public DireccionApiModel ObtenerDireccion(int numeroDireccion, int idUsuario)
        {
            if (numeroDireccion < 1 || idUsuario < 1)
            {
                throw new Exception();
            }

            var result = direccionDao.ObtenerDireccion(numeroDireccion, idUsuario);


            if (result == null)
            {
                throw new Exception();
            }

            var direccion = mapper.Map<DireccionApiModel>(result);

            direccion.Usuario = usuarioCoordinator.ObtenerUsuario(result.IdUsuario);
            direccion.Localidad = localidadCoordinator.ObtenerLocalidad(result.IdLocalidad, result.IdProvincia);
            direccion.Provincia = provinciaCoordinator.ObtenerProvincia(result.IdProvincia);

            return direccion;
        }

        public List<DireccionApiModel> ObtenerDirecciones(int idUsuario)
        {
            if (idUsuario < 1)
            {
                throw new Exception();
            }

            var result = direccionDao.ObtenerDirecciones(idUsuario);


            if (result == null)
            {
                throw new Exception();
            }

            var direcciones = mapper.Map<List<DireccionApiModel>>(result);

            for(int i = 0;i < direcciones.Count; i++)
            {
                direcciones[i].Usuario = usuarioCoordinator.ObtenerUsuario(idUsuario);
                direcciones[i].Localidad = localidadCoordinator.ObtenerLocalidad(result[i].IdLocalidad, result[i].IdProvincia);
                direcciones[i].Provincia = provinciaCoordinator.ObtenerProvincia(result[i].IdProvincia);
            }

            return direcciones;
        }
    }
}