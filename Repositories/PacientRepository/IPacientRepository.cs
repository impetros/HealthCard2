using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.PacientRepository
{
    public interface IPacientRepository
    {
        List<Pacient> GetAll();
        Pacient Get(int Id);
        Pacient Create(Pacient Pacient);
        Pacient Update(Pacient Pacient);
        Pacient Delete(Pacient Pacient);

    }
}
