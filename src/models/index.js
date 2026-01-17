const sequelize=require("../config/database");
const Department=require("./department");
const Doctor=require("./doctor");
const Patient=require("./patient");
const Appointment=require("./appointment");
 
Department.hasMany(Doctor,{foreignKey:"departmentId"});
Doctor.belongsTo(Department,{foreignKey:"departmentId"});

Department.hasMany(Patient,{foreignKey:"departmentId"});
Patient.belongsTo(Department,{foreignKey:"departmentId"});

Doctor.hasMany(Appointment, {foreignKey:"doctorId"});
Appointment.belongsTo(Doctor,{foreignKey:"doctorId"});

Patient.hasMany(Appointment,{foreignKey:"patientId"});
Appointment.belongsTo(Patient,{foreignKey:"patientId"});

module.exports={
    sequelize,
    Department,
    Doctor,
    Patient,
    Appointment,
};
