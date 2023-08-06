// Інтерфейси допомагають забезпечити контракт між класами. 
interface InEngine {
    model:string;
    caracity:number;

    startEngine: (time:Date) => string;
}

abstract class AbstractVehicle {
    model!:string;
    caracity!:number;   
    abstract startEngine: (time:Date) => string;
    stopEngine(time:Date):string {
        return 'Engine Stopped!'
    }
}

// Коли клас використовує implements інтерфейсу, 
// він повинен визначити всі властивості та методи, які описані у цьому інтерфейсі. 
class FirstVehicle implements InEngine {
    model!:string;
    caracity!:number;
    startEngine = (time:Date) => {
        return "Engine Started!"
    };

}

// у другому випадку давайте застосуємо абстрагування
class SecondVehicle extends AbstractVehicle {
    startEngine = (time:Date) => {
        return "Engine Started!"
    };
}
// new SecondVehicle().model | .caracity | .startEngine() | .stopEngine()


//todo cd classes
//todo ts-node abstractions.ts