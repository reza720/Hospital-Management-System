const {body, validationResult}=require("express-validator");

const AppointmentValidation={
    rules:[
        body("date")
            .isDate().withMessage("Valid date is required")
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
module.exports= AppointmentValidation;