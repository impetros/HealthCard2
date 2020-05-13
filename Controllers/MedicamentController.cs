using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProiectMDS.Models;
using ProiectMDS.Repositories.MedicamentRepository;

namespace ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicamentController : ControllerBase
    {
        public IMedicamentRepository IMedicamentRepository { get; set; }

        public MedicamentController(IMedicamentRepository repository)
        {
            IMedicamentRepository = repository;
        }

        // GET: api/Medicament
        [HttpGet]
        public ActionResult<IEnumerable<Medicament>> Get()
        {
            return IMedicamentRepository.GetAll();
        }

        // GET: api/Medicament/5
        [HttpGet("{id}")]
        public ActionResult<Medicament> Get(int id)
        {
            return IMedicamentRepository.Get(id);
        }

        // POST: api/Medicament
        [HttpPost]
        public Medicament Post(MedicamentDTO value)
        {
            Medicament model = new Medicament()
            {
                Nume = value.Nume,
                Pret = value.Pret,
                CantitateDisponibila = value.CantitateDisponibila
            };
            return IMedicamentRepository.Create(model);
        }



        // PUT: api/Medicament/5
        [HttpPut("{id}")]
        public Medicament Put(int id, MedicamentDTO value)
        {
            Medicament model = IMedicamentRepository.Get(id);
            if(value.Nume != null)
            {
                model.Nume = value.Nume;
            }

            if (value.Pret >= 0)
            {
                model.Pret = value.Pret;
            }

            if (value.CantitateDisponibila >= 0)
            {
                model.CantitateDisponibila = value.CantitateDisponibila;
            }

            return IMedicamentRepository.Update(model);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Medicament Delete(int id)
        {
            Medicament model = IMedicamentRepository.Get(id);
            return IMedicamentRepository.Delete(model);
        }
    }
}