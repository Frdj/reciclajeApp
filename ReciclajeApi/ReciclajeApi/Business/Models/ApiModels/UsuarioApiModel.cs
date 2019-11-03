﻿using System;

namespace ReciclajeApi.Business.Models.ApiModels
{
    public class UsuarioApiModel
    {
        public int IdUsuario { get; set; }

        public string Email { get; set; }

        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public DateTime FechaNacimiento { get; set; }

        public byte[] FotoDePerfil { get; set; }

        public int Telefono { get; set; }
    }
}