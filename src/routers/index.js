const express=require("express");
const router=express.Router();

const DepartmentRouter=require("./DepartmentRouter");
const DoctorRouter=require("./DoctorRouter");
const PatientRouter=require("./PatientRouter");
const AppointmentRouter=require("./AppointmentRouter");

router.use("/departments",DepartmentRouter);
router.use("/doctors",DoctorRouter);
router.use("/patients",PatientRouter);
router.use("/appointments",AppointmentRouter);

module.exports=router;