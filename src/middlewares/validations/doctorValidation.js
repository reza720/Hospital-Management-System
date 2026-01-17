const {body,validationResult}=require("express-validator");;

const DoctorValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("name only can have letters and space"),
        body("email")
            .trim()
            .notEmpty().withMessage("email is required")
            .isEmail().withMessage("Valid email is requird"),
        body("phone")
            .trim()
            .notEmpty().withMessage("phone number is required")
            .isNumeric().withMessage("phone number has to be numbers")
            .isLength({min:10,max:10}).withMessage("phone number has to be 10 digits"),
        body("specialty")
            .trim()
            .notEmpty().withMessage("speciality is required")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("validation failed");
            err.statusCode=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=DoctorValidation;