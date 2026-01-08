const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Appointment=sequelize.define("Appointment",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    doctorId:{type:DataTypes.INTEGER, allowNull:false},
    patientId:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false},
    status:{type:DataTypes.ENUM("Scheduled", "Completed", "Cancelled"),allowNull:false},
},{
    timestamps:true
});
module.exports=Appointment;