using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Contexts;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.PacientRepository
{
    public class PacientRepository : IPacientRepository
    {
        public Context _context { get; set; }
        public PacientRepository(Context context)
        {
            _context = context;
        }
        public Pacient Create(Pacient Pacient)
        {
            var result = _context.Add<Pacient>(Pacient);
            _context.SaveChanges();
            return result.Entity;
        }
        public Pacient Get(int Id)
        {
            return _context.Pacienti.SingleOrDefault(x => x.PacientId == Id);
        }
        public List<Pacient> GetAll()
        {
            return _context.Pacienti.ToList();
        }
        public Pacient Update(Pacient Pacient)
        {
            _context.Entry(Pacient).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Pacient;
        }
        public Pacient Delete(Pacient Pacient)
        {
            var result = _context.Remove(Pacient);
            _context.SaveChanges();
            return result.Entity;
        }
    }
}
