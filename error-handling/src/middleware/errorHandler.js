const CustomError = require("./customError");

const errorHandler = (err ,req,res,next) => {
   if(err instanceof CustomError){
    return res.status(err.statusCode).json({
        success : false,
        message : err.message
    })
   }

   res.status(500).json({
      success: false,
      message : "Internal server Error"
   })
}

module.exports=errorHandler;