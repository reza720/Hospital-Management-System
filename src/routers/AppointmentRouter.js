const {AppointmentController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",AppointmentController.createAppointment);
router.get("/",AppointmentController.getAppointments);
router.get("/:id",AppointmentController.getAppointmentById);
router.put("/:id",AppointmentController.updateAppointment);
router.delete("/:id",AppointmentController.deleteAppointment);


module.exports=router;