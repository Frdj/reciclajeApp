using System;

namespace ReciclajeApi{
    public class Publicacion{
        public int idPublicacion {get; set;}
        public int idUsuarioP {get; set;}
        public int nuDireccion {get; set;}
        public int idTipoResiduo {get; set;}
        public int idCategoriaResiduo {get; set;}
        public int cantidad {get; set;}
        public string medida {get; set;}
        public DateTime fechaPublicacion {get; set;}
        public string estado {get; set;}
        public string DiasDisponibles {get; set;}
        public string HorarioDisponible {get; set;}
        public int idUsuarioR {get; set;}
        public DateTime FechaRetiro {get; set;}

    }
}