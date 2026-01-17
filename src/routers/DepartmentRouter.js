const {DepartmentController}=require("../controllers");
const {DepartmentValidation}=require("../middlewares/validations");
const express=require("express");
const router=express.Router();

router.post("/",DepartmentValidation.rules,DepartmentValidation.errorHandler,DepartmentController.createDepartment);
router.get("/",DepartmentController.getDepartments);
router.get("/:id",DepartmentController.getDepartmentById);
router.put("/:id",DepartmentValidation.rules,DepartmentValidation.errorHandler,DepartmentController.updateDepartment);
router.delete("/:id",DepartmentController.deleteDepartment);

module.exports=router;