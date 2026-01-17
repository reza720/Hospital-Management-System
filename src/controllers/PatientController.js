const {PatientService}=require("../services");

class PatientController{
    static async createPatient(req,res,next){
        try{
            const patient=await PatientService.createPatient(req.body);
            res.status(201).json({success:true, data:patient});
        }
        catch(error){
            next(error);
        }
    }
    static async getPatients(req,res,next){
        try{
            const patients=await PatientService.getPatients();
            res.status(200).json({success:true, data:patients});
        }
        catch(error){
            next(error);
        }
    }
    static async getPatientById(req,res,next){
        try{
            const patient=await PatientService.getPatientById(req.params.id);
            res.status(200).json({success:true, data:patient});
        }
        catch(error){
            next(error);
        }
    }
    static async updatePatient(req,res,next){
        try{
            const patient=await PatientService.updatePatient(req.params.id,req.body);
            res.status(200).json({success:true, data:patient});
        }
        catch(error){
            next(error);
        }
    }
    static async deletePatient(req,res,next){
        try{
            await PatientService.deletePatient(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        };
    }
}
module.exports=PatientController;