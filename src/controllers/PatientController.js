const {PatientService}=require("../services");

class PatientController{
    static async createPatient(req,res){
        const patient=await PatientService.createPatient(req.body);
        res.status(201).json({success:true, data:patient});
    }
    static async getPatients(req,res){
        const patients=await PatientService.getPatients();
        res.status(200).json({success:true, data:patients});
    }
    static async getPatientById(req,res){
        const patient=await PatientService.getPatientById(req.params.id);
        res.status(200).json({success:true, data:patient});
    }
    static async updatePatient(req,res){
        const patient=await PatientService.updatePatient(req.params.id,req.body);
        res.status(200).json({success:true, data:patient});
    }
    static async deletePatient(req,res){
        await PatientService.deletePatient(req.params.id);
        res.status(204).send();
    }
}
module.exports=PatientController;