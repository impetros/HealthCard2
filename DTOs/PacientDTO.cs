using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.Models
{
    public class PacientDTO
    {
        public int PacientId { get; set; }
        public string PacientNume { get; set; }
        public string PacientPrenume { get; set; }
        public int Varsta { get; set; }
        public string CNP { get; set; }
        public int Sex { get; set; }
    }
}
