class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getTransactions() {
        return this.transactions
    } 
  
    setTransactions(newTransaction: []) {
      this.Transactions = newTransaction
    }
  }
  
  }

  const antonio = new UserAccount ("055669784-44", "Antonio", 31)