const {Appointment}=require("../models");

class AppointmentService{
    async createAppointment(data){
        return Appointment.create(data);
    }
    async getAppointments(){
        return Appointment.findAll();
    }
    async getAppointmentById(id){
        const target=await Appointment.findByPk(id);
        if(!target){
            const err=new Error("Appointment not found");
            err.statusCode=404;
            throw err;
        }
        return target;
    }
    async updateAppointment(id,data){
        const target=await this.getAppointmentById(id);
        await target.update(data);
        return target;
    }
    async deleteAppointment(id){
        const target=await this.getAppointmentById(id);
        await target.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new AppointmentService();