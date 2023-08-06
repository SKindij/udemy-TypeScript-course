class Player {
    login:string;
    password:string;
    server:string;

    constructor(login: string, password: string, server: string) {
        this.login = login;
        this.password = password;
        this.server = server;
      }
}



const firstPlayer = new Player('Long Red', 'mypassword', 'Europe');
console.dir(firstPlayer);








//todo cd classes
//todo ts-node member-visibility.ts