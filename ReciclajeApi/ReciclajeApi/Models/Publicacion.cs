using System;

namespace ReciclajeApi{
    public class Publicacion{
        public int idPublicacion {get; set;}
        public int idUsuarioP {get; set;}
        public Usuario usuarioP {get; set;}
        public int nuDireccion {get; set;}
        public Direccion direccion {get; set;}
        public int idTipoResiduo {get; set;}
        public Tipo_Residuo tipoResiduo {get; set;}
        public int idCategoriaResiduo {get; set;}
        public Categoria_Residuo categoriaResiduo {get; set;}
        public int cantidad {get; set;}
        public string medida {get; set;}
        public DateTime fechaPublicacion {get; set;}
        public string estado {get; set;}
        public string DiasDisponibles {get; set;}
        public string HorarioDisponible {get; set;}
        public int idUsuarioR {get; set;}
        public Usuario usuarioR {get; set;}
        public DateTime FechaRetiro {get; set;}

    }
}