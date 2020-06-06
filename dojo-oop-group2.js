class User {
    constructor(password) {
        this.password = password
        this.wrongAttempts = 0
    }
    login(userPassword){
        if (this.wrongAttempts >= 2) { 
            this.wrongAttempts += 1
            console.log('You have exceeded the remaining attempts to login')
            return false;
        } else if (userPassword === this.password){
            this.wrongAttempts = 0
            console.log('login successful ', this.wrongAttempts)
            return true;
        } else {
            this.wrongAttempts += 1
            console.log(`Wrong password, you still have ${3 - this.wrongAttempts} trials`);
            return false
           
        }
          
    }
    
}
const newUser = new User("Dimi");
console.log(newUser.login("2"));
console.log(newUser.login("Dimi"));
console.log(newUser.login("2"));





// 1- Create a class User
// 2- The constructor must take a password (no need for username in this exercise)
// 3- Implement a method login(userPassword) (i.e: to be used like john.login('passworD123')
// 4- Return true if the password matches
// 5- Return false if the password is wrong
// 6- If the user submits a wrong password 3 times in a row the method will always return 
//false (in real life it could be a good idea to send an email to the user 
//asking to reset the password)
// 7- If the user logins successfully the number of failed attempts should be reset