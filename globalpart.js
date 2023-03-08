// no window in node bcz no browser 
//global variable concept works 
//require - function to use modules
//--dirname - path ti current directory 
//--filename - file  name 
//process - info about env where process is being executed

console.log(__dirname);

// work of setInterval

setInterval(()=>{
    console.log('hey there')
},500)
//would print int 500 times
//to stop ctrl + c

