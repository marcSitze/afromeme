import { AccountDTO } from "../../../../dto/account.dto";

export function makeCreateAccount({ accountDb }: any) {
  return async (account: AccountDTO) => {
    const newAccount = new accountDb(account);
    return newAccount.save();
  };
}
