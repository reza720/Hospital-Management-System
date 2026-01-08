const {DoctorController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",DoctorController.createDoctor);
router.get("/",DoctorController.getDoctors);
router.get("/:id",DoctorController.getDoctorById);
router.put("/:id",DoctorController.updateDoctor);
router.delete("/:id",DoctorController.deleteDoctor);

module.exports=router;