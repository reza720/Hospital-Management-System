const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Patient=sequelize.define("Patient",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, validate:{
        is:/^[A-Za-z\s]+$/,
        notEmpty:true,
    }},
    phone:{type:DataTypes.STRING, allowNull:false, validate:{
        isNumeric:true,
        len:[10,10],
    }},
    problem:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty:true,
    }},
    status:{type:DataTypes.ENUM("Discharged", "Under Treatment"), allowNull:false},
    departmentId:{type:DataTypes.INTEGER, allowNull:false},
},{
    timestamps:true
});
module.exports=Patient;