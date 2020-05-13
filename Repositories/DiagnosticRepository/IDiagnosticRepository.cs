using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Models;

namespace ProiectMDS.Repositories.DiagnosticRepository
{
    public interface IDiagnosticRepository
    {
        List<Diagnostic> GetAll();
        Diagnostic Get(int Id);
        Diagnostic Create(Diagnostic Diagnostic);
        Diagnostic Update(Diagnostic Diagnostic);
        Diagnostic Delete(Diagnostic Diagnostic);

    }
}
