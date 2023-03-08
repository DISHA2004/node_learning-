const {readFileSync , writeFileSync}=require('fs')
const f=readFileSync('./folder/first.txt','utf8')
const s=readFileSync('./folder/second.txt','utf8')

console.log(f,s);
//prints content of first .txt and then second.txt

writeFileSync('./folder/newmade.txt',`its made using fs fucntion writefilesync with ${f},${s}`)

writeFileSync('./folder/second.txt','heyy lets get it changes')
//on already made file it changes the content 

writeFileSync('./folder/second.txt','heyy lets get it changes',{
    flag:'a'
})
//will simply append
