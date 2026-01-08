const {DoctorService}=require("../services");

class DoctorController{
    static async createDoctor(req,res){
        const doctor=await DoctorService.createDoctor(req.body);
        res.status(201).json({success:true,data:doctor}); 
    }
    static async getDoctors(req,res){
        const doctor=await DoctorService.getDoctors();
        res.status(200).json({success:true, data:doctor});
    }
    static async getDoctorById(req,res){
        const doctor=await DoctorService.getDoctorById(req.params.id);
        res.status(200).json({success:true, data:doctor});
    }
    static async updateDoctor(req,res){
        const doctor=await DoctorService.updateDoctor(req.params.id,req.body);
        res.status(200).json({success:true, data:doctor});
    }
    static async deleteDoctor(req,res){
        await DoctorService.deleteDoctor(req.params.id);
        res.status(204).send();
    }
}
module.exports=DoctorController;