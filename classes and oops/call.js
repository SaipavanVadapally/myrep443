function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log("called");

}
function createUser(username,email,password){
    SetUsername.call(username)
    this.email=email
    this.password=password
}

const name1 = new createUser("pavan","pavan@123","4567")
console.log(name1);
