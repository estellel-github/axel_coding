class BankAccount {
  private _balance: number; //Encapsulation
  //name
  constructor() {
    this._balance = 0;
    //set name
  }

  deposit = (amount: number): void => {
    // Validate the data
    if (amount >= 0) {
      this._balance += amount;
    } else {
      console.log("The amount should be more than 0");
    }
  }

  withdraw = (amount: number): string => {
    if (amount > this._balance) {
      return "Not enough money in your account"
    }
    else if (amount <= 0) {
      return "The amount should be more than 0"
    }
    else {
      this._balance -= amount;
      return this._balance.toString();
    }
  }

  //get balance

  get balance(): number {
    return this._balance;
  }

  // set balance

  set balance(value: number) {
    if (value <= 0) {
      console.log("The value must be higher than 0.");
    }
    else {
      this._balance = value;
    }
  }

}

//set balance

const userOneBanckAccount = new BankAccount();

// Initial balance: 0
console.log(userOneBanckAccount.balance);

// Set balance to -15: invalid
userOneBanckAccount.balance = -15;

// Set balance to 1500: valid
userOneBanckAccount.balance = 1500;

// Deposit 2000
userOneBanckAccount.deposit(2000);

// Withdraw 3500
userOneBanckAccount.withdraw(3500);

// Withdraw 1000: invalid
console.log(userOneBanckAccount.withdraw(1000));

// Final balance
console.log(userOneBanckAccount.balance);