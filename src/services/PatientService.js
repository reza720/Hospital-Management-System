const {Patient}=require("../models");

class PatientService{
    async createPatient(data){
        return Patient.create(data);
    }
    async getPatients(){
        return Patient.findAll();
    }
    async getPatientById(id){
        const target=await Patient.findByPk(id);
        if(!target){
            const err=new Error("Patient not found");
            err.statusCode=404;
            throw err;
        }
        return target;
    }
    async updatePatient(id,data){
        const target=await this.getPatientById(id);
        await target.update(data);
        return target;
    }
    async deletePatient(id){
        const target=await this.getPatientById(id);
        await target.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new PatientService();