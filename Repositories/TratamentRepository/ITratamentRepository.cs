using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.TratamentRepository
{
    public interface ITratamentRepository
    {
        List<Tratament> GetAll();
        Tratament Get(int Id);
        Tratament Create(Tratament Tratament);
        Tratament Update(Tratament Tratament);
        Tratament Delete(Tratament Tratament);

    }
}
