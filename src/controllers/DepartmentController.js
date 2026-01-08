const {DepartmentService}=require("../services");

class DepartmentController{
    static async createDepartment(req,res){
        const department=await DepartmentService.createDepartment(req.body);
        res.status(201).json({success:true, data:department});
    }
    static async getDepartments(req,res){
        const departments=await DepartmentService.getDepartments();
        res.status(200).json({success:true, data:departments});
    }
    static async getDepartmentById(req,res){
        const department=await DepartmentService.getDepartmentById(req.params.id);
        res.status(200).json({success:true, data:department});
    }
    static async updateDepartment(req,res){
        const department=await DepartmentService.updateDepartment(req.params.id,req.body);
        res.status(200).json({success:true, data:department});
    }
    static async deleteDepartment(req,res){
        await DepartmentService.deleteDepartment(req.params.id);
        res.status(204).send();
    }
}
module.exports=DepartmentController;
