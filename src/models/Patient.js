const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Patient=sequelize.define("Patient",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
    problem:{type:DataTypes.STRING, allowNull:false},
    status:{type:DataTypes.ENUM("Discharged", "Under Treatment"), allowNull:false},
    departmentId:{type:DataTypes.INTEGER, allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Patient;