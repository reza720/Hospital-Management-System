const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Doctor=sequelize.define("Doctor",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false, unique:true},
    phone:{type:DataTypes.STRING, allowNull:false},
    specialty:{type:DataTypes.STRING, allowNull:false},
    status:{type:DataTypes.ENUM("Active","Inactive","Left"), allowNull:false},
    departmentId:{type:DataTypes.INTEGER, allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Doctor;
