const {DoctorService}=require("../services");

class DoctorController{
    static async createDoctor(req,res,next){
        try{
            const doctor=await DoctorService.createDoctor(req.body);
            res.status(201).json({success:true,data:doctor}); 
        }
        catch(error){
            next(error);
        }
    }
    static async getDoctors(req,res,next){
        try{
            const doctor=await DoctorService.getDoctors();
            res.status(200).json({success:true, data:doctor});
        }
        catch(error){
            next(error);
        }
    }
    static async getDoctorById(req,res,next){
        try{
            const doctor=await DoctorService.getDoctorById(req.params.id);
            res.status(200).json({success:true, data:doctor});
        }
        catch(error){
            next(error);
        }
    }
    static async updateDoctor(req,res,next){
        try{
            const doctor=await DoctorService.updateDoctor(req.params.id,req.body);
            res.status(200).json({success:true, data:doctor});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteDoctor(req,res,next){
        try{
            await DoctorService.deleteDoctor(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=DoctorController;