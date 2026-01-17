const {DepartmentService}=require("../services");

class DepartmentController{
    static async createDepartment(req,res,next){
        try{
            const department=await DepartmentService.createDepartment(req.body);
            res.status(201).json({success:true, data:department});
        }
        catch(error){
            next(error);
        }
    }
    static async getDepartments(req,res,next){
        try{
            const departments=await DepartmentService.getDepartments();
            res.status(200).json({success:true, data:departments});
        }
        catch(error){
            next(error);
        }
    }
    static async getDepartmentById(req,res,next){
        try{
            const department=await DepartmentService.getDepartmentById(req.params.id);
            res.status(200).json({success:true, data:department});
        }
        catch(error){
            next(error);
        }
    }
    static async updateDepartment(req,res,next){
        try{
            const department=await DepartmentService.updateDepartment(req.params.id,req.body);
            res.status(200).json({success:true, data:department});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteDepartment(req,res,next){
        try{
            await DepartmentService.deleteDepartment(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=DepartmentController;
