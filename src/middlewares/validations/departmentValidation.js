const {body,validationResult}=require("express-validator");

const DepartmentValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation Failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=DepartmentValidation;