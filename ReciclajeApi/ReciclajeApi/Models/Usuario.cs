using System;

namespace ReciclajeApi.Models {
    public class Usuario{
        public int idUsuario {get; set;}
        public string email {get; set;}
        public string password {get; set;}
        public string nombre {get; set;}
        public string apellido {get; set;}
        public DateTime fechaNacimiento {get; set;}
        public Object FotoDePerfil {get; set;}
        public int telefono {get; set;}

    }
}