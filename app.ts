import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
peopleAccount.deposit(100);
console.log(peopleAccount.getBalance());

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(100);
companyAccount.withdraw(110)
console.log(companyAccount.getBalance())

const specialAccount: SpecialAccount = new SpecialAccount('Andre', 3855);
specialAccount.deposit(100)
specialAccount.withdraw(110)

console.log(specialAccount.getBalance())