// its about os 
//its a built in module in node 
const os= require('os')
//now we have access to alll property of this module 

const u= os.userInfo()
console.log(u)

//time of the syystem been running from
console.log(`the system up time is ${os.uptime()} seconds `)


// to print bunch of data 
const details={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
}
console.log(details)