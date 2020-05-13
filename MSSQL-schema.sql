--connection string Server=localhost;Database=master;Trusted_Connection=True;
CREATE TABLE PACIENTI (
	pacientId INT PRIMARY KEY IDENTITY (1,1),
	pacientNume VARCHAR (50) NOT NULL,
	pacientPrenume VARCHAR (50) NOT NULL,
	varsta INT NOT NULL,
	cnp VARCHAR (10) NOT NULL,
);

CREATE TABLE DOCTORI (
	doctorId INT PRIMARY KEY IDENTITY (1,1),
	doctorNume VARCHAR (50) NOT NULL,
	doctorPrenume VARCHAR (50) NOT NULL,
	varsta INT NOT NULL,
	specialitate VARCHAR (50) NOT NULL,
);

CREATE TABLE DIAGNOSTICE (
	diagnosticId INT PRIMARY KEY IDENTITY (1,1),
	pacientId INT NOT NULL foreign key references PACIENTI(pacientId),
	doctorId INT NOT NULL foreign key references DOCTORI(doctorId)
);


CREATE TABLE MEDICAMENTE (
	medicamentId INT PRIMARY KEY IDENTITY (1,1),
	medicamentNume VARCHAR (50) NOT NULL,
	pret FLOAT NOT NULL,
	cantitateDisponibila FLOAT NOT NULL
);

CREATE TABLE TRATAMENTE (
	traamentId INT PRIMARY KEY IDENTITY (1,1),
	diagnosticId INT NOT NULL foreign key references DIAGNOSTICE(diagnosticId),
	medicamentId INT NOT NULL foreign key references MEDICAMENTE(medicamentId),
	dozaj FLOAT NOT NULL,
	dataAdministrare DATETIME,
	dataTerminare DATETIME
);
