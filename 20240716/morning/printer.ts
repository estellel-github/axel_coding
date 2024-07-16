// FROM SLIDES
/* class PrinterClass {
  doPrint(): void {
    console.log("doPrint() from Parent called...");
  }
}
class StringPrinter extends PrinterClass {
  doPrint(): void {
    super.doPrint();
    console.log("doPrint() is printing a string.....");
  }
}

var obj = new StringPrinter();
obj.doPrint() */

// FROM AHMAD LIVE CODING


class Printer {
  value: string;
  private _privateValue: number;
  protected _protectedValue: number; //TODO
  constructor(val: string) {
    this.value = val;
    this._privateValue = 20;
    this._protectedValue = 100;
  }
  doPrint() {
    console.log("Do print from Parent");
  }
}
class ChildPrinter extends Printer {

  doSomthing = () => {
    console.log("somthing");
  }

  doPrint() {
    //this overides the doPrint in parent
    super.doPrint(); //Do not use arrow function here Printer.doPrint()
    console.log(this._protectedValue);
    console.log("Do print from Child");
  }
}

const newObjChild = new ChildPrinter("abc");

newObjChild.doSomthing();

newObjChild.doPrint();

const newObjParent = new Printer("asdasd");