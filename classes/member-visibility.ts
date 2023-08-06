class Player {
  static game:string = 'War Frogs';
  private login:string;
  private _password:string;
  public server:string;
  protected consent:boolean;

    constructor(login:string, password:string, server:string, consent:boolean) {
        this.login = login;
        this._password = password;
        this.server = server;
        this.consent = consent;
      }
  // Метод get для звертання до приватного поля _password
    get password():string {
      return this._password;
    }  
  // Метод set для встановлення нового значення приватному полю _password 
    set password(newPass:string) {
      this._password = newPass;
    }

    static getGameName() {
      return Player.game;
    }
   // важливо слідкувати за this
    logIn(this:Player) {
      return `Player ${this.login} online!`
    }

    connect() {
      // do something
      return this;
    }
}

// Використання геттерів та сеттерів дозволяє забезпечити додаткові перевірки або логіку при отриманні та зміні значень властивостей.
// Наприклад, ти можеш додати перевірку довжини паролю в методі set password(newPass: string), 
// щоб переконатись, що пароль задовольняє певним вимогам, або зашифрувати пароль перед збереженням в _password.

class CompetitivePlayer extends Player {
  // опціональна властивість
  rank?:number;

  checkLogin() {
    return super.logIn();
  }

  isConsented():string {
    return this.consent ? 'Yes' : "No";
  }
}

console.log(Player.getGameName());

const firstPlayer = new Player('Long Red', 'mypassword', 'Europe', true);
  console.log(firstPlayer.logIn());
firstPlayer.password = 'anotherPassword'; 
  console.dir(firstPlayer.connect());

const secondPlayer = new CompetitivePlayer ('Silver Breez', 'sentFent', 'USA', false);
  secondPlayer.rank = 2;
  console.log(secondPlayer.checkLogin());
  console.dir(secondPlayer.connect());





//todo cd classes
//todo ts-node member-visibility.ts