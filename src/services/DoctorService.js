const {Doctor}=require("../models");

class DoctorService{
    async createDoctor(data){
        return Doctor.create(data);
    }
    async getDoctors(){
        return Doctor.findAll();
    }
    async getDoctorById(id){
        const target=await Doctor.findByPk(id);
        if(!target){
            const err=new Error("Doctor not found");
            err.statusCode=404;
            throw err;
        }
        return target;
    }
    async updateDoctor(id,data){
        const target=await this.getDoctorById(id);
        await target.update(data);
        return target;
    }
    async deleteDoctor(id){
        const target=await this.getDoctorById(id);
        await target.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new DoctorService();