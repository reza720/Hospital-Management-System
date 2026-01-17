const {Department}=require("../models");

class DepartmentService{
    async createDepartment(data){
        return Department.create(data);
    }
    async getDepartments(){
        return Department.findAll();
    }
    async getDepartmentById(id){
        const target=await Department.findByPk(id);
        if(!target){
            const err=new Error("Department not found");
            err.statusCode=404;
            throw err;
        }
        return target;
    }
    async updateDepartment(id,data){
        const target=await this.getDepartmentById(id);
        await target.update(data);
        return target;
    }
    async deleteDepartment(id){
        const target=await this.getDepartmentById(id);
        await target.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new DepartmentService();

