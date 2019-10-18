using ReciclajeApi.Business.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReciclajeApi.Business.Services
{
    public class SecureService : ISecureService
    {
        public bool ValidarPassword(string password)
        {
            return true;
        }
    }
}
