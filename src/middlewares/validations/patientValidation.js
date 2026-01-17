const {body, validationResult}=require("express-validator");

const PatientValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("name only can have letters and space"),
        body("phone")
            .trim()
            .notEmpty().withMessage("phone number is required")
            .isNumeric().withMessage("phone number has to be numbers")
            .isLength({min:10,max:10}).withMessage("phone number has be 10 digits"),
        body("problem")
            .notEmpty().withMessage("problem is required")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=PatientValidation;