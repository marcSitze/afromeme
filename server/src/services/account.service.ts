const Account = require('../models/Account');

module.exports = {
  saveAccount: async (account) => {
    const newAccount = new Account(account);
    return await newAccount.save();
  },
  findAccount: async (query) => {
    console.log('query: ', query);
    return await Account.findOne(query).populate("user", { password: 0, __v: 0 });
  },
  findById: async (id) => {
    return await Account.findById(id).populate('user').select('-password');
  },
  // findAccountByQuery: async (query) => {
  //   return await Account.find(query).populate('user').select('-password');
  // },
  findAccounts: async () => {
    return await Account.find({});
  },
  updateAccount: async (id, query) => {
    return await Account.findOneAndUpdate(id, query);
  }
}