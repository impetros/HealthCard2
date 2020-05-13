using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Models;
using Microsoft.EntityFrameworkCore;

namespace ProiectMDS.Contexts
{
    public class Context : DbContext
    {
        public DbSet<Pacient> Pacienti { get; set; }
        public DbSet<Doctor> Doctori { get; set; }
        public DbSet<Medicament> Medicamente { get; set; }
        public DbSet<Tratament> Tratamente { get; set; }
        public DbSet<Diagnostic> Diagnostice { get; set; }

        public static bool isMigration = true;
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (isMigration)
              {
                optionsBuilder.UseSqlServer(@"Server=.\;Database = DBProiectMDS;Trusted_Connection=True");
              }
        }
        public Context()
        {

        }
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
    
    }
}
