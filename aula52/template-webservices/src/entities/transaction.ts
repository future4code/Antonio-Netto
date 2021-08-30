type Transaction = {
    description: string,
    value: number,
    date: string
  }

  export class Transaction  {
    private description: string
    private value: number
    private date: string

    constructor(
        TransaDescription: string, 
        TransaValue: number, 
        TransaDate: string) {
        this.description = TransaDescription
        this.value = TransaValue
        this.date = TransaDate
    }

    getValue() {
        return this.value
    } 
  
    setValue(newValue: number) {
      this.value = newValue
    }
  }

  const newTransaction = new Transaction("Essa é uma transação.", 10000000, "25/4/2023")

