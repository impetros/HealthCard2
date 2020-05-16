using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProiectMDS.Controllers;
using ProiectMDS.Models;
using ProiectMDS.Contexts;
using ProiectMDS.Repositories.PacientRepository;
using ProiectMDS.Repositories.DiagnosticRepository;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientController : ControllerBase
    {
        public IPacientRepository IPacientRepository { get; set; }
        public IDiagnosticRepository IDiagnosticRepository { get; set; }

        public PacientController(IPacientRepository repository)
        {
            IPacientRepository = repository;
        }

        // GET: api/Pacient
        [HttpGet]
        public ActionResult<IEnumerable<Pacient>> Get()
        {
            return IPacientRepository.GetAll();
        }

        // GET: api/Pacient/5
        [HttpGet("{id}")]
        public ActionResult<Pacient> Get(int id)
        {
            return IPacientRepository.Get(id);
        }



        // POST: api/Pacient
        [HttpPost]
        public Pacient Post(PacientDTO value)
        {
            Pacient model = new Pacient()
            {
                PacientNume = value.PacientNume,
                PacientPrenume = value.PacientPrenume,
                CNP = value.CNP,
                Varsta = value.Varsta,
            };
            return IPacientRepository.Create(model);
        }



        // PUT: api/Pacient/5
        [HttpPut("{id}")]
        public Pacient Put(int id, PacientDTO value)
        {
            Pacient model = IPacientRepository.Get(id);
            if (value.PacientNume != null)
            {
                model.PacientNume = value.PacientNume;
            }

            if (value.PacientPrenume != null)
            {
                model.PacientPrenume = value.PacientPrenume;
            }

            if (value.CNP != null)
            {
                model.CNP = value.CNP;
            }

            if (value.Varsta >= 0)
            {
                model.Varsta = value.Varsta;
            }

            return IPacientRepository.Update(model);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Pacient Delete(int id)
        {
            Pacient model = IPacientRepository.Get(id);
            return IPacientRepository.Delete(model);
        }
    }
}