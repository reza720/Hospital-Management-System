const {PatientController}=require("../controllers");
const {PatientValidation}=require("../middlewares/validations");
const express=require("express");
const router=express.Router();

router.post("/",PatientValidation.rules, PatientValidation.errorHandler,PatientController.createPatient);
router.get("/",PatientController.getPatients);
router.get("/:id",PatientController.getPatientById);
router.put("/:id", PatientValidation.rules, PatientValidation.errorHandler,PatientController.updatePatient);
router.delete("/:id", PatientController.deletePatient);

module.exports=router;