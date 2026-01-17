const {DoctorController}=require("../controllers");
const {DoctorValidation}=require("../middlewares/validations");
const express=require("express");
const router=express.Router();

router.post("/",DoctorValidation.rules, DoctorValidation.errorHandler,DoctorController.createDoctor);
router.get("/",DoctorController.getDoctors);
router.get("/:id",DoctorController.getDoctorById);
router.put("/:id",DoctorValidation.rules, DoctorValidation.errorHandler,DoctorController.updateDoctor);
router.delete("/:id",DoctorController.deleteDoctor);

module.exports=router;