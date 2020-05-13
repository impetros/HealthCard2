using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Contexts;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.DoctorRepository
{
    public class DoctorRepository : IDoctorRepository
    {
        public Context _context { get; set; }
        public DoctorRepository(Context context)
        {
            _context = context;
        }
        public Doctor Create(Doctor Doctor)
        {
            var result = _context.Add<Doctor>(Doctor);
            _context.SaveChanges();
            return result.Entity;
        }
        public Doctor Get(int Id)
        {
            return _context.Doctori.SingleOrDefault(x => x.DoctorId == Id);
        }
        public List<Doctor> GetAll()
        {
            return _context.Doctori.ToList();
        }
        public Doctor Update(Doctor Doctor)
        {
            _context.Entry(Doctor).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Doctor;
        }
        public Doctor Delete(Doctor Doctor)
        {
            var result = _context.Remove(Doctor);
            _context.SaveChanges();
            return result.Entity;
        }
    }
}
