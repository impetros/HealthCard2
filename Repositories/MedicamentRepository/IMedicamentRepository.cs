using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.MedicamentRepository
{
    public interface IMedicamentRepository
    {
        List<Medicament> GetAll();
        Medicament Get(int Id);
        Medicament Create(Medicament Medicament);
        Medicament Update(Medicament Medicament);
        Medicament Delete(Medicament Medicament);

    }
}
