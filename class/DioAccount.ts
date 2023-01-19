export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (qtd:number): void => {
    if(this.validateStatus()){
      this.balance += qtd;
    }
  }

  withdraw = (qtd:number): void => {
    if(this.validateStatus()){
      if(qtd <= this.balance){
        this.balance -= qtd;
      }
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
