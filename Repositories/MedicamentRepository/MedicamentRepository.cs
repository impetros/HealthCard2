using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Contexts;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.MedicamentRepository
{
    public class MedicamentRepository : IMedicamentRepository
    {
        public Context _context { get; set; }
        public MedicamentRepository(Context context)
        {
            _context = context;
        }
        public Medicament Create(Medicament Medicament)
        {
            var result = _context.Add<Medicament>(Medicament);
            _context.SaveChanges();
            return result.Entity;
        }
        public Medicament Get(int Id)
        {
            return _context.Medicamente.SingleOrDefault(x => x.MedicamentId == Id);
        }
        public List<Medicament> GetAll()
        {
            return _context.Medicamente.ToList();
        }
        public Medicament Update(Medicament Medicament)
        {
            _context.Entry(Medicament).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Medicament;
        }
        public Medicament Delete(Medicament Medicament)
        {
            var result = _context.Remove(Medicament);
            _context.SaveChanges();
            return result.Entity;
        }
    }
}
