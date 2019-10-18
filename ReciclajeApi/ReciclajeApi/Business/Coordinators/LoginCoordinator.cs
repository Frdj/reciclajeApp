using AutoMapper;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.IServices;
using ReciclajeApi.Business.Models.ApiModels;
using System;

namespace ReciclajeApi.Business.Coordinators
{
    public class LoginCoordinator : ILoginCoordinator
    {
        private readonly IMapper mapper;

        private readonly IUsuarioCoordinator usuarioCoordinator;

        private readonly ISecureService secureService;

        public LoginCoordinator(IMapper mapper, IUsuarioCoordinator usuarioCoordinator)
        {
            this.mapper = mapper;
            this.usuarioCoordinator = usuarioCoordinator;
        }

        public int Login(LoginApiModel login)
        {
            if (login == null)
            {
                throw new Exception();
            }

            bool usuarioValidado = usuarioCoordinator.ValidarUsuario(login.Email);

            if (!usuarioValidado)
            {
                throw new Exception();
            }

            bool passwordValida = secureService.ValidarPassword(login.Password);

            if (!passwordValida)
            {
                throw new Exception();
            }

            if (usuarioValidado && passwordValida)
            {
                var usuario = usuarioCoordinator.ObtenerUsuarioPorMail(login.Email);

                return usuario.IdUsuario;
            }

            throw new Exception();
        }
    }
}