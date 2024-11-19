const passwordBox=document.getElementById("passwordHolder");
const length=12;
function createPassword(){
    let password="";
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const number="0123456789";
    const symbol="/?!@#$%&[}]";
    const allChars=upperCase+lowerCase+number+symbol;
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(password.length<length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];
    } 
    passwordBox.value=password;
}
function copy(){
    passwordBox.select();
    document.execCommand("copy");
}