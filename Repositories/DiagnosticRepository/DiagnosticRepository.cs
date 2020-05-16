using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProiectMDS.Contexts;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.DiagnosticRepository
{
    public class DiagnosticRepository : IDiagnosticRepository
    {
        public Context _context { get; set; }
        public DiagnosticRepository(Context context)
        {
            _context = context;
        }
        public Diagnostic Create(Diagnostic Diagnostic)
        {
            var result = _context.Add<Diagnostic>(Diagnostic);
            _context.SaveChanges();
            return result.Entity;
        }
        public Diagnostic Get(int Id)
        {
            return _context.Diagnostice
                .Include("Pacient")
                .Include("Doctor")
                .SingleOrDefault(x => x.DiagnosticId == Id);
        }

        public List<Diagnostic> GetAll()
        {
            return _context.Diagnostice
                .Include("Pacient")
                .Include("Doctor")
                .ToList();
        }
        public List<Diagnostic> GetDiagnosticePacient(int id)
        {
            return _context.Diagnostice
                .Where(p => p.PacientId == id)
                .Include("Pacient")
                .Include("Doctor")
                .ToList();
        }

        public Diagnostic Update(Diagnostic Diagnostic)
        {
            _context.Entry(Diagnostic).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return Diagnostic;
        }
        public Diagnostic Delete(Diagnostic Diagnostic)
        {
            var result = _context.Remove(Diagnostic);
            _context.SaveChanges();
            return result.Entity;
        }
    }
}
