interface InUser {
    login:string;
    password:string;
    token?:number;
}
interface InValidation {
    valid:boolean;
    isValid: (data:string) => boolean;
}

class UserInForm implements InUser, InValidation {
   login!:string;
   password!:string; 
   valid!:boolean;
   token!:number;

   isValid(login:string) {
    return login.length > 3;
   }
}

// practice work
console.log('-- practice work --');

enum TransferStatus {
	Pending = "pending",
	Rejected = "rejected",
	Completed = "completed",
}

enum ErrorMessages {
	NotFound = "Not found: 404",
	NotEnoughSpace = "Not enough space: 507",
	Forbidden = "Forbidden: 403",
}

interface ITransfer {
	path:string;
	data:string[];
	date?:Date;
	start: (p:string, d:string[]) => string;
	stop: (reason:string) => string;
}

interface TransferError {
	message:ErrorMessages;
}

// Клас повинен імплементувати ITransfer та TransferError
class SingleFileTransfer implements ITransfer, TransferError {
    path!:string;
    data!:string[];
    date?:Date|undefined;
    message!:ErrorMessages;
    transferStatus!:TransferStatus;

    constructor(status:TransferStatus) {
        this.transferStatus = status;
    }
  
    start(p:string, d:string[]) {
        return 'Transfer started'
    }
 
  // Необхідно створити метод, який перевіряє стан передачі даних
  checkTransferStatus = ():string => {
    return this.transferStatus;
  }

  // Необхідно створити метод, який зупинятиме передачу даних
  // і повертати рядок з причиною та датою зупинки
  stop = (reason:string) => {
    return `Transfer stopped, reason: ${reason}, Date: ${new Date().toLocaleString()}`
  };

  // Необхідно створити метод, який повертатиме рядок, 
  // що містить статус передачі та будь-яке повідомлення про помилку
  makeError = ():string => {
    return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`
  }
}


const transfer = new SingleFileTransfer(TransferStatus.Pending);
  console.log(transfer.checkTransferStatus());
  console.log(transfer.stop('Test'));
  console.log(transfer.makeError());

//todo cd classes
//todo ts-node implements.ts