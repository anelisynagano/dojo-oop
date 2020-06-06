
class User {
    constructor (password){
        this.password = password;
        this.incorrectAttempts = 0;
    }
    login(userPassword){
        if (this.incorrectAttempts < 3) {
            // if password is correct, this.incorrectAttempts = 0 and return true
            // else this.incorrectAttempts++ and return false
            if (this.password == userPassword){
              this.incorrectAttempts = 0;
              console.log('Password correct');
              console.log(`We are reseting the counter ${this.incorrectAttempts}`)
              return true 
            } else {
              this.incorrectAttempts ++;
              console.log(`Wrong password, you still have ${3-this.incorrectAttempts} trials`);
              return false
            }
            
        }
        // else return false
        else {
            console.log("You have entered a wrong password more than 3 time. You are obviously not who you say you are so stop it. Really just stop it!")
            return false
        };
    }
}
        const userTest = new User('passworD123');

        console.log(userTest.login('pass'));
        console.log(userTest.login('passworD123'));


        // for (let counter = 0; counter <3 ; counter ++){
        //     console.log(`Initial counter = ${counter}`);
        //     if (userPassword != this.password){
        //         counter += 1;
        //         console.log(`If false counter = ${counter}`);
        //         if (counter >= 3){
        //             return false;
        //         }
        //     } else {
        //         // return false;
        
        //         console.log(`If true counter = ${counter}`);
                
        //         return true; 
        //     }
        // }
        

        
            // if password is wrong, add 1 to the count
            // if count = 3, return false
            // if password is successful, reset counter to 0

            
            // const password = this.password
          // if(enters 3 times false) {
            // return false
            // for(let i = 0; i< 3; i++){
            //   if (password)
            // }
           
            // return false; 
        
    // for Loop to check howmany times password is false in a row
    // for (let i = 0; i < 3; i++){

    // }
    






// OOP - Protection against brute force attacks

// 1- Create a class User
// 2- The constructor must take a password (no need for username in this exercise)
// 3- Implement an instance method login(password) (i.e: to be used like john.login('passworD123')
// 4- Return true if the password matches
// 5- Return false if the password is wrong
// 6- If the user submits a wrong password 3 times in a row the method will always return false (in real life it could be a good idea to send an email to the user asking to reset the password)
// 7- If the user logins successfully the number of failed attempts should be reset