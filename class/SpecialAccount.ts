import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount{

    constructor(name:string, accountNumber:number){
        super(name, accountNumber);
    }

    deposit = (qtd: number):void => {
        if(this.validateStatus()){
            this.balance += qtd+10;
        }
    };
}