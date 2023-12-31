const user={
    username: "Pavan",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log( this);

    }
}

// console.log(user.username);
// console.log(this);
function User(username, loginCount,isLoggedIn){
    this.username=username;
    this.loginCount= loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }
}
const userOne=new User("pavan",12,true)
const userTwo= new User("raj",11,false)
console.log(userOne);
console.log(userTwo);
