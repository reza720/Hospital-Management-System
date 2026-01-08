const {DepartmentController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",DepartmentController.createDepartment);
router.get("/",DepartmentController.getDepartments);
router.get("/:id",DepartmentController.getDepartmentById);
router.put("/:id",DepartmentController.updateDepartment);
router.delete("/:id",DepartmentController.deleteDepartment);

module.exports=router;