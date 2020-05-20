using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProiectMDS.Models;
using ProiectMDS.Repositories.TratamentRepository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TratamentController : ControllerBase
    {
        public ITratamentRepository ITratamentRepository { get; set; }

        public TratamentController(ITratamentRepository repository)
        {
            ITratamentRepository = repository;
        }

        // GET: api/Tratament
        [HttpGet]
        public ActionResult<IEnumerable<Tratament>> Get()
        {
            return ITratamentRepository.GetAll();
        }

        // GET: api/Tratament/5
        [HttpGet("{id}")]
        public ActionResult<Tratament> Get(int id)
        {
            return ITratamentRepository.Get(id);
        }

        [HttpGet("Diagnostic/{id}")]
        public ActionResult<IEnumerable<Tratament>> GetByDiagnosticId(int id)
        {
            return ITratamentRepository.GetByDiagnosticId(id);
        }

        // POST: api/Tratament
        [HttpPost]
        public Tratament Post(TratamentDTO value)
        {
            Tratament model = new Tratament()
            {
                DiagnosticId = value.DiagnosticId,
                MedicamentId = value.MedicamentId,
                Dozaj = value.Dozaj,
                DataAdministrare = value.DataAdministrare,
                DataTerminare = value.DataTerminare
            };
            return ITratamentRepository.Create(model);
        }



        // PUT: api/Tratament/5
        [HttpPut("{id}")]
        public Tratament Put(int id, TratamentDTO value)
        {
            Tratament model = ITratamentRepository.Get(id);
            if (value.DiagnosticId != 0)
            {
                model.DiagnosticId = value.DiagnosticId;
            }

            if (value.MedicamentId != 0)
            {
                model.MedicamentId = value.MedicamentId;
            }

            if (value.Dozaj != 0)
            {
                model.Dozaj = value.Dozaj;
            }

            if (value.DataAdministrare != null)
            {
                model.DataAdministrare = value.DataAdministrare;
            }

            if (value.DataTerminare != null)
            {
                model.DataTerminare = value.DataTerminare;
            }

            return ITratamentRepository.Update(model);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Tratament Delete(int id)
        {
            Tratament model = ITratamentRepository.Get(id);
            return ITratamentRepository.Delete(model);
        }
    }
}