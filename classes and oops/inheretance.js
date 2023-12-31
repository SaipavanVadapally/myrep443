class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
} 

const teachercred= new Teacher("hitesh","hitesh@1234","1234")
teachercred.addCourse()
const teachercred1= new User("Raju")
teachercred1.logMe()
console.log(teachercred instanceof User)