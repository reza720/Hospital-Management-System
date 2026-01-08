const {Department}=require("../models");

class DepartmentService{
    async createDepartment(data){
        return await Department.create(data);
    }
    async getDepartments(){
        return await Department.findAll();
    }
    async getDepartmentById(id){
        return await Department.findByPk(id);
    }
    async updateDepartment(id,data){
        const target=await Department.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        return await target.update(data);
    }
    async deleteDepartment(id){
        const target=await Department.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        await target.destroy();
    }
}
module.exports=new DepartmentService();

