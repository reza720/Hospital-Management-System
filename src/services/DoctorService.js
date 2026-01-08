const {Doctor}=require("../models");

class DoctorService{
    async createDoctor(data){
        return await Doctor.create(data);
    }
    async getDoctors(){
        return await Doctor.findAll();
    }
    async getDoctorById(id){
        return await Doctor.findByPk(id);
    }
    async updateDoctor(id,data){
        const target=await Doctor.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        return await target.update(data);
    }
    async deleteDoctor(id){
        const target=await Doctor.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        await target.destroy();
    }
}
module.exports=new DoctorService();