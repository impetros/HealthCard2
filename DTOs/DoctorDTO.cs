using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.Models
{
    public class DoctorDTO
    {
        public int DoctorId { get; set; }
        public string DoctorNume { get; set; }
        public string DoctorPrenume { get; set; }
        public int Varsta { get; set; }
        public string Specialitate { get; set; }
    }
}
