enum Directions {
    Up = "UP",
    Right = "RIGHT",
    Down = "DOWN",
    Left = "LEFT", 
}

enum TimingFunc {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    LINEAR = 'linear'
}

function frame(elem:string, dir:Directions, tFunc:TimingFunc):void {
    if (dir === Directions.Up) {
        console.log('Move up!')
        console.log(tFunc)
    } else if (dir === Directions.Down) {
        console.log('Move down!')
        console.log(tFunc)
    }
}

frame("id", Directions.Up, TimingFunc.EASE);
frame("id", Directions.Down, TimingFunc.LINEAR);

//todo cd udemy-TypeScript-course
//todo cd training
//todo ts-node enum.ts
