const sequelize=require("../config/database");
const Department=require("./Department");
const Doctor=require("./Doctor");
const Patient=require("./Patient");
const Appointment=require("./Appointment");
const { DECIMAL } = require("sequelize");
 
//Associations
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
