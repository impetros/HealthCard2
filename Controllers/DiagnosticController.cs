using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProiectMDS.Models;
using ProiectMDS.Repositories.DiagnosticRepository;
using ProiectMDS.Repositories.DoctorRepository;
using ProiectMDS.Repositories.PacientRepository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiagnosticController : ControllerBase
    {
        public IDiagnosticRepository IDiagnosticRepository { get; set; }
        public IPacientRepository IPacientRepository { get; set; }
        public IDoctorRepository IDoctorRepository { get; set; }

        public DiagnosticController(IDiagnosticRepository diagnosticRepository, IPacientRepository pacientRepository, IDoctorRepository doctorRepository)
        {
            IDiagnosticRepository = diagnosticRepository;
            IPacientRepository = pacientRepository;
            IDoctorRepository = doctorRepository;
        }

        // GET: api/Diagnostic
        [HttpGet]
        public ActionResult<IEnumerable<Diagnostic>> Get()
        {
            return IDiagnosticRepository.GetAll();
        }

        // GET: api/Diagnostic/5
        [HttpGet("{id}")]
        public ActionResult<Diagnostic> Get(int id)
        {
            return IDiagnosticRepository.Get(id);
        }

        [HttpGet("Pacient/{id}")]
        public ActionResult<IEnumerable<Diagnostic>> GetDiagnosticePacient(int id)
        {
            return IDiagnosticRepository.GetDiagnosticePacient(id);
        }

        // POST: api/Diagnostic
        [HttpPost]
        public Diagnostic Post(DiagnosticDTO value)
        {
            Diagnostic model = new Diagnostic()
            {
                PacientId = value.PacientId,
                DoctorId = value.DoctorId
            };
            return IDiagnosticRepository.Create(model);
        }



        // PUT: api/Diagnostic/5
        [HttpPut("{id}")]
        public Diagnostic Put(int id, DiagnosticDTO value)
        {
            Diagnostic model = IDiagnosticRepository.Get(id);
            if (value.PacientId != 0)
            {
                model.PacientId = value.PacientId;
            }

            if (value.DoctorId != 0)
            {
                model.DoctorId = value.DoctorId;
            }

            return IDiagnosticRepository.Update(model);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Diagnostic Delete(int id)
        {
            Diagnostic model = IDiagnosticRepository.Get(id);
            return IDiagnosticRepository.Delete(model);
        }
    }
}