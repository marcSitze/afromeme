import Account from '../models/Account';
import { AccountDTO } from '../dto/account.dto';
import { IAccountService } from '../interfaces/account/account.service.interface'

export default class AccountService implements IAccountService {
  constructor(){}
  createAccount = async (account: AccountDTO) => {
    const newAccount = new Account(account);
    return await newAccount.save();
  };
  getAccounts = async () => {
    return await Account.find({});
  };
  findOne = async (query: any) => {
    console.log('query: ', query);
    return await Account.findOne(query).populate("user", { password: 0, __v: 0 });
  };
  getAccountById = async (id: string) => {
    return await Account.findById(id).populate('user').select('-password');
  };
  // findAccountByQuery: async (query) => {
  //   return await Account.find(query).populate('user').select('-password');
  // },
  updateAccount = async (id: string, query: Partial<AccountDTO>) => {
    return await Account.findOneAndUpdate({_id: id}, query);
  };
}