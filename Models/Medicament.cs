using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.Models
{
    public class Medicament
    {
        public int MedicamentId { get; set; }

        public string Nume { get; set; }

        public float Pret { get; set; }

        public float CantitateDisponibila { get; set; }
    }
}
