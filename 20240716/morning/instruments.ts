

class Instrument {
  name: string; // public, accessible everywhere
  private _price: number; // private, accessible only within class
  protected _tuning: string; // protected, accessible within class and derived classes

  constructor(name: string, price: number) {
    this.name = name;
    this._price = price;
    this._tuning = "standard";
  }

  play() {
    return console.log("Starting to play the instrument... ");
  }

  getPrice() { // public method to get private property
    return this._price;
  }

  getInstrumentDetails() { // public method to display all properties, public or not
    return console.log(`Instrument: ${this.name} - Price: ${this._price} - Tuning: ${this._price}`);
  }
}

class Guitar extends Instrument {
  constructor(name: string, price: number) {
    super(name, price);
  }

  tuneGuitar(newTuning: string) {
    this._tuning = newTuning;
    return console.log(`Tuning ${this.name} to ${this._tuning}`);
  }

  getTuning() {
    return console.log(`Current tuning for ${this.name}: ${this._tuning}`);
  }

  play() {
    super.play(); // Call the play method from the Instrument class
    return console.log(`Playing the instrument ${this.name} with ${this._tuning} tuning`);
  }  
}

const myGuitar = new Guitar("Fender Stratocaster", 1200);

myGuitar.getTuning();

myGuitar.tuneGuitar("drop D");

myGuitar.getTuning();

myGuitar.play();

const myPiano = new Instrument("Piano", 3000);

myPiano.getInstrumentDetails();

