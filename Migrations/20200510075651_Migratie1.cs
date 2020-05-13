using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProiectMDS.Migrations
{
    public partial class Migratie1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Doctori",
                columns: table => new
                {
                    DoctorId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DoctorNume = table.Column<string>(nullable: true),
                    DoctorPrenume = table.Column<string>(nullable: true),
                    Varsta = table.Column<int>(nullable: false),
                    Specialitate = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctori", x => x.DoctorId);
                });

            migrationBuilder.CreateTable(
                name: "Medicamente",
                columns: table => new
                {
                    MedicamentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nume = table.Column<string>(nullable: true),
                    Pret = table.Column<float>(nullable: false),
                    CantitateDisponibila = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medicamente", x => x.MedicamentId);
                });

            migrationBuilder.CreateTable(
                name: "Pacienti",
                columns: table => new
                {
                    PacientId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PacientNume = table.Column<string>(nullable: true),
                    PacientPrenume = table.Column<string>(nullable: true),
                    Varsta = table.Column<int>(nullable: false),
                    CNP = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pacienti", x => x.PacientId);
                });

            migrationBuilder.CreateTable(
                name: "Diagnostice",
                columns: table => new
                {
                    DiagnosticId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PacientId = table.Column<int>(nullable: false),
                    DoctorId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diagnostice", x => x.DiagnosticId);
                    table.ForeignKey(
                        name: "FK_Diagnostice_Doctori_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "Doctori",
                        principalColumn: "DoctorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Diagnostice_Pacienti_PacientId",
                        column: x => x.PacientId,
                        principalTable: "Pacienti",
                        principalColumn: "PacientId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tratamente",
                columns: table => new
                {
                    TratamentId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DiagnosticId = table.Column<int>(nullable: false),
                    MedicamentId = table.Column<int>(nullable: false),
                    Dozaj = table.Column<float>(nullable: false),
                    DataAdministrare = table.Column<string>(nullable: true),
                    DataTerminare = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tratamente", x => x.TratamentId);
                    table.ForeignKey(
                        name: "FK_Tratamente_Diagnostice_DiagnosticId",
                        column: x => x.DiagnosticId,
                        principalTable: "Diagnostice",
                        principalColumn: "DiagnosticId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tratamente_Medicamente_MedicamentId",
                        column: x => x.MedicamentId,
                        principalTable: "Medicamente",
                        principalColumn: "MedicamentId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Diagnostice_DoctorId",
                table: "Diagnostice",
                column: "DoctorId");

            migrationBuilder.CreateIndex(
                name: "IX_Diagnostice_PacientId",
                table: "Diagnostice",
                column: "PacientId");

            migrationBuilder.CreateIndex(
                name: "IX_Tratamente_DiagnosticId",
                table: "Tratamente",
                column: "DiagnosticId");

            migrationBuilder.CreateIndex(
                name: "IX_Tratamente_MedicamentId",
                table: "Tratamente",
                column: "MedicamentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tratamente");

            migrationBuilder.DropTable(
                name: "Diagnostice");

            migrationBuilder.DropTable(
                name: "Medicamente");

            migrationBuilder.DropTable(
                name: "Doctori");

            migrationBuilder.DropTable(
                name: "Pacienti");
        }
    }
}
