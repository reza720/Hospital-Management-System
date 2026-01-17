const {AppointmentService}=require("../services");

class AppointmentController{
    static async createAppointment(req,res,next){
        try{
            const appointment=await AppointmentService.createAppointment(req.body);
            res.status(201).json({success:true, data:appointment});
        }
        catch(error){
            next(error);
        }
    }
    static async getAppointments(req,res,next){
        try{
            const appointments=await AppointmentService.getAppointments();
            res.status(200).json({success:true, data:appointments});
        }
        catch(error){
            next(error);
        }
    }
    static async getAppointmentById(req,res,next){
        try{
            const appointment=await AppointmentService.getAppointmentById(req.params.id);
            res.status(200).json({success:true, data:appointment});
        }
        catch(error){
            next(error);
        }
    }
    static async updateAppointment(req,res,next){
        try{
            const appointment=await AppointmentService.updateAppointment(req.params.id,req.body);
            res.status(200).json({success:true, data:appointment});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteAppointment(req,res,next){
        try{
            await AppointmentService.deleteAppointment(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=AppointmentController;