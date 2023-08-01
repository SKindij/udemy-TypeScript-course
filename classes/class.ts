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

class ColoredBox extends Box {
  color:string;
    constructor (width:number, height:number, color:string) {
      super(width, height);
      this.color = color;
    }
}

const coloredBox = new ColoredBox(200, 150, 'red');
console.log(coloredBox);




// todo cd classes
//todo ts-node class.ts