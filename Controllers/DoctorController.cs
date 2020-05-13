using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProiectMDS.Models;
using ProiectMDS.Repositories.DoctorRepository;

namespace ProiectMDS.Contexts
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        public IDoctorRepository IDoctorRepository { get; set; }

        public DoctorController(IDoctorRepository repository)
        {
            IDoctorRepository = repository;
        }

        // GET: api/Doctor
        [HttpGet]
        public ActionResult<IEnumerable<Doctor>> Get()
        {
            return IDoctorRepository.GetAll();
        }

        // GET: api/Doctor/5
        [HttpGet("{id}")]
        public ActionResult<Doctor> Get(int id)
        {
            return IDoctorRepository.Get(id);
        }

        // POST: api/Doctor
        [HttpPost]
        public Doctor Post(DoctorDTO value)
        {
            Doctor model = new Doctor()
            {
                DoctorNume = value.DoctorNume,
                DoctorPrenume = value.DoctorPrenume,
                Specialitate = value.Specialitate,
                Varsta = value.Varsta
            };
            return IDoctorRepository.Create(model);
        }



        // PUT: api/Doctor/5
        [HttpPut("{id}")]
        public Doctor Put(int id, DoctorDTO value)
        {
            Doctor model = IDoctorRepository.Get(id);
            if (value.DoctorNume != null)
            {
                model.DoctorNume = value.DoctorNume;
            }

            if (value.DoctorPrenume != null)
            {
                model.DoctorPrenume = value.DoctorPrenume;
            }

            if (value.Specialitate != null)
            {
                model.Specialitate = value.Specialitate;
            }

            if (value.Varsta >= 0)
            {
                model.Varsta = value.Varsta;
            }

            return IDoctorRepository.Update(model);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Doctor Delete(int id)
        {
            Doctor model = IDoctorRepository.Get(id);
            return IDoctorRepository.Delete(model);
        }
    }
}