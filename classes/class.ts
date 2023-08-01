// https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html

class Box {
  width!:number;
  height!:number;
    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }
}

const firstBox = new Box(340, 230);
console.log(firstBox);




// todo cd classes
//todo ts-node class.ts