const {Patient}=require("../models");

class PatientService{
    async createPatient(data){
        return await Patient.create(data);
    }
    async getPatients(){
        return await Patient.findAll();
    }
    async getPatientById(id){
        return await Patient.findByPk(id);
    }
    async updatePatient(id,data){
        const target=await Patient.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        return await target.update(data);
    }
    async deletePatient(id){
        const target=await Patient.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        await target.destroy();
    }
}
module.exports=new PatientService();