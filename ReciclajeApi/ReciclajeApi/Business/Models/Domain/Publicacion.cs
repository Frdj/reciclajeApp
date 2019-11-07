using System;

namespace ReciclajeApi.Business.Models.Domain
{
    public class Publicacion
    {
        public int IdPublicacion { get; set; }

        public int IdUsuarioP { get; set; }

        public int NuDireccion { get; set; }

        public DateTime FechaPublicacion { get; set; }

        public int Estado { get; set; }

        public string DiasDisponibles { get; set; }

        public string HorarioDisponible { get; set; }

        public int? IdUsuarioR { get; set; }

        public DateTime? FechaRetiro { get; set; }

        public int? IdMetodo {get; set;}
    }
}