class BankAccount {
  private balance: number;
  protected isActive: boolean;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
    this.isActive = true;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }

  protected flagFraud(): void {
    console.log("Account flagged for review.");
  }
}

class BankManager extends BankAccount {
  constructor() {
    super(0); // Cannot change balance directly
  }

  reviewAccount(): void {
    this.flagFraud(); // ✅ Can call protected method
  }
}

const manager = new BankManager();
manager.reviewAccount(); // ✅ Works
manager.deposit(1000); // Error: 'deposit' is inherited, but balance is private and won't change meaningfully

// The following lines will give errors:
//console.log(manager.balance); //  Property 'balance' is private
//console.log(manager.isActive); //  Property 'isActive' is protected
//manager.flagFraud(); // Method 'flagFraud' is protected
