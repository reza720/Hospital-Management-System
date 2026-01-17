const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Department=sequelize.define("Department",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Department;
