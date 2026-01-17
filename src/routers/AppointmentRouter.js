const {AppointmentController}=require("../controllers");
const {AppointmentValidation}=require("../middlewares/validations");
const express=require("express");
const router=express.Router();

router.post("/",AppointmentValidation.rules, AppointmentValidation.errorHandler,AppointmentController.createAppointment);
router.get("/",AppointmentController.getAppointments);
router.get("/:id",AppointmentController.getAppointmentById);
router.put("/:id",AppointmentValidation.rules, AppointmentValidation.errorHandler,AppointmentController.updateAppointment);
router.delete("/:id",AppointmentController.deleteAppointment);


module.exports=router;