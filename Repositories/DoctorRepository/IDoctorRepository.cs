using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.DoctorRepository
{
    public interface IDoctorRepository
    {
        List<Doctor> GetAll();
        Doctor Get(int Id);
        Doctor Create(Doctor Doctor);
        Doctor Update(Doctor Doctor);
        Doctor Delete(Doctor Doctor);

    }
}
