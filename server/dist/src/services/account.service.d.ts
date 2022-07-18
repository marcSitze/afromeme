import { AccountDTO } from "../dto/account.dto";
import { IAccountService } from "../interfaces/account/account.service.interface";
export default class AccountService implements IAccountService {
    constructor();
    createAccount: (account: AccountDTO) => Promise<import("../interfaces/models/AccountModel").AccountDocument>;
    getAccounts: (query: any) => Promise<import("../interfaces/models/AccountModel").AccountDocument[]>;
    findOne: (query: any) => Promise<import("../interfaces/models/AccountModel").AccountDocument | null>;
    getAccountById: (id: string) => Promise<import("../interfaces/models/AccountModel").AccountDocument | null>;
    updateAccount: (filter: Partial<AccountDTO>, query: Partial<AccountDTO>) => Promise<import("../interfaces/models/AccountModel").AccountDocument | null>;
}
