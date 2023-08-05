interface InUser {
    login:string;
    password:string;
}
interface InValidation {
    valid:boolean;
    isValid: (data:string) => boolean;
}

class UserInForm implements InUser, InValidation {
   login!:string;
   password!:string; 
   valid!:boolean;
   
   isValid(login:string) {
    return login.length > 3;
   }
}


















// todo cd classes
//todo ts-node implements.ts