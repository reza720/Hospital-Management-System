const {AppointmentService}=require("../services");

class AppointmentController{
    static async createAppointment(req,res){
        const appointment=await AppointmentService.createAppointment(req.body);
        res.status(201).json({success:true, data:appointment});
    }
    static async getAppointments(req,res){
        const appointments=await AppointmentService.getAppointments();
        res.status(200).json({success:true, data:appointments});
    }
    static async getAppointmentById(req,res){
        const appointment=await AppointmentService.getAppointmentById(req.params.id);
        res.status(200).json({success:true, data:appointment});
    }
    static async updateAppointment(req,res){
        const appointment=await AppointmentService.updateAppointment(req.params.id,req.body);
        res.status(200).json({success:true, data:appointment});
    }
    static async deleteAppointment(req,res){
        await AppointmentService.deleteAppointment(req.params.id);
        res.status(204).send();
    }
}
module.exports=AppointmentController;