const fs = require('fs');
const path = require('path')


const logFilePath = path.join(process.cwd(),'logs.txt')

const activityLogger = (req,res,next) => {
    const timeStamp = new Date().toISOString();
    const logMessage = `[${timeStamp}] ${req.method} ${req.url}\n`
    console.log(logMessage)

    fs.appendFile(logFilePath , logMessage , (err) => {
        if(err){
            console.error("Error writing to log file",err)
        }
    })
    next()
}

module.exports = activityLogger