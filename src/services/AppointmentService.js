const {Appointment}=require("../models");

class AppointmentService{
    async createAppointment(data){
        return await Appointment.create(data);
    }
    async getAppointments(){
        return await Appointment.findAll();
    }
    async getAppointmentById(id){
        return await Appointment.findByPk(id);
    }
    async updateAppointment(id,data){
        const target=await Appointment.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        return await target.update(data);
    }
    async deleteAppointment(id){
        const target=await Appointment.findByPk(id);
        if(!target){
            throw new Error("not found");
        }
        await target.destroy();
    }
}
module.exports=new AppointmentService();