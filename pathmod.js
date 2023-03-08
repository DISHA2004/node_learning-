const path=require('path')

console.log(path.sep)

const filepath= path.join('/folder','subf','testfile.txt')
console.log(filepath)
//simply joins with / 
//if trailing slash then remove this slash then joins ans returns same
console.log(path.basename(filepath))
//simply returns name  of the file at the address
const res=path.resolve(__dirname,'folder','subf','testfile.txt')
console.log(res)