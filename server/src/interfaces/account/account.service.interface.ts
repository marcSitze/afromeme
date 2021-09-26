// import IUser from './user.interface';
import { AccountDTO } from '../../dto/account.dto';
import { IAccount } from './account.interface';

export interface IAccountService{
    createAccount(account: AccountDTO): Promise<IAccount | void>;
    getAccounts(): Promise<IAccount[] | void>;
    findOne(query: any): Promise<IAccount | void | any>;
    getAccountById(id: string): Promise<IAccount | void | any>;
}