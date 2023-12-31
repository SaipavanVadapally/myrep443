// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const cred=new User("pavan","pav@123","4567")
// console.log(cred.encryptPassword());
// console.log(cred.changeUsername());

// Behind the scenes

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password

}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const cred2 = new User("pavan", "pavan@12345","4567")

console.log(cred2.encryptPassword());
console.log(cred2.changeUsername());