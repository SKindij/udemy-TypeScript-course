// https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html
class Box {
  width!:number;
  height!:number;
  volume!:number|undefined;
  _content!:string|undefined;
    constructor(width:number, height:number, volume?:number, content?:string) {
      this.width = width;
      this.height = height;
      this.volume = volume;
      this._content = content;
    }
    calculateVolume():void {
      if (!this.volume) {
        this.volume = this.width * this.height;
        console.log(`Volume of Box = ${this.volume}`);
      } else {
        console.log(`Volume of Box = ${this.volume}`);
      }
    }

    checkBoxSize(transport:number|number[]):string {
      if(typeof transport === 'number') {
        return transport >= this.width ? 'Size is Ok' : 'Width is not Ok';
      } else {
        return transport.some(tr => tr >= this.width) ? 'Size is Ok' : 'Width is not Ok';
      }
    }

    get boxContent() {
      return this._content;
    }
    set boxContent(value) {
      this._content = value;
    }

}

const firstBox = new Box(340, 230);
  console.log(firstBox.calculateVolume());
  console.log(firstBox.checkBoxSize([240, 410, 190]));
  console.log(firstBox.checkBoxSize(240));
  console.log(firstBox.checkBoxSize(380));

class ColoredBox extends Box {
  color:string;
    constructor (width:number, height:number, color:string) {
      super(width, height);
      this.color = color;
    }
}

const coloredBox = new ColoredBox(200, 150, 'red');
  console.log(coloredBox.calculateVolume());
  console.log(coloredBox.boxContent = 'Test Items');
  console.log(coloredBox.boxContent);


// todo cd classes
//todo ts-node class.ts