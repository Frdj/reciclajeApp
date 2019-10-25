using System.Collections.Generic;

namespace ReciclajeApi.Persistance.IDao
{
    public interface ITipDao{
        List<Tip> ObtenerTip ();
    }
}