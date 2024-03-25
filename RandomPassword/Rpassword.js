const passwordboc=document.getElementById('password')
const length=12;
const upercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase='abcdefghijklmnopqrstuvwxyz'
const number='1234567890'
const symbole='@$%^&*()<>?=-'
const allchars=upercase +lowercase+number+symbole
function newpassword(){
let password=''
  password +=upercase [Math.floor(Math.random() *upercase.length)]
  password +=lowercase [Math.floor(Math.random() *lowercase.length)]
  password +=number [Math.floor(Math.random() *lowercase.length)]
  password +=symbole [Math.floor(Math.random() *symbole.length)]
 while(length >password.length){
    password +=allchars[Math.floor(Math.random() *allchars.length)]
 }
 passwordboc.value=password
}
function copypassword(){
  passwordboc.select()
  document.execCommand('copy')
}