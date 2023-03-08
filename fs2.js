const { Console } = require('console')
const {readFile, writeFile}=require('fs')
readFile('./folder/first.txt','utf-8',(err, result)=>{
    if(err) {console.log(err)
    return 
    }
    const f=result 
    readFile('./folder/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const s=result
        writeFile('./folder/resfs2.txt',
        `here is result : ${f} , ${s}`,
        (err,result)=>{
            if(err){
             console.log(err);
             return   
            }
            console.log(result)
        })
        //appended there in resfs2.txt
    })  
} )
//will print buffer if we will not specify utf as argument in raedfile 

//difference between asynchronous and synchronous 


