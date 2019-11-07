using System;

namespace ReciclajeApi.Business.Models.ApiModels{
    public class PublicacionRequestApiModel{
         public int IdPublicacion {get; set;}

        public int IdUsuarioP {get; set;}

        public int NuDireccion {get; set;}

        public MaterialApiModel[] Residuos {get; set;}

        public string Medida {get; set;}

        public int IdDetalle {get; set;}

        public DateTime FechaPublicacion {get; set;}

        public EstadoApiModel Estado {get; set;}

        public string DiasDisponibles {get; set;}

        public string HorarioDisponible {get; set;}

        public int UsuarioR {get; set;}

        public DateTime FechaRetiro {get; set;}

    }
}     