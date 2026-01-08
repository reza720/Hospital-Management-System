const {PatientController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",PatientController.createPatient);
router.get("/",PatientController.getPatients);
router.get("/:id",PatientController.getPatientById);
router.put("/:id", PatientController.updatePatient);
router.delete("/:id", PatientController.deletePatient);

module.exports=router;