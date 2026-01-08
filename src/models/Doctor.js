const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Doctor=sequelize.define("Doctor",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, validate:{
        is:/^[A-Za-z\s]+$/,
        notEmpty:true,
    }},
    email:{type:DataTypes.STRING, allowNull:false, unique:true, validate:{
        isEmail:true,
    }},
    phone:{type:DataTypes.STRING, allowNull:false, validate:{
        isNumeric:true,
        len:[10,10],
    }},
    specialty:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty:true,
    }},
    status:{type:DataTypes.ENUM("Active","Inactive","Left"), allowNull:false},
    departmentId:{type:DataTypes.INTEGER, allowNull:false},
},{
    timestamps:true
});
module.exports=Doctor;
