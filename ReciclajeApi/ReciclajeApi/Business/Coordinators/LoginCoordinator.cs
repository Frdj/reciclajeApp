using AutoMapper;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.ApiModels;
using System;

namespace ReciclajeApi.Business.Coordinators
{
    public class LoginCoordinator : ILoginCoordinator
    {
        private readonly IMapper mapper;

        private readonly IUsuarioCoordinator usuarioCoordinator;

        public LoginCoordinator(IMapper mapper, IUsuarioCoordinator usuarioCoordinator)
        {
            this.mapper = mapper;
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

            return 0;
        }
    }
}