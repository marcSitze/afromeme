export function makeGetAccounts({ accountDb }: any) {
  return async (query: any) => {
    return accountDb
      .find(query)
      .populate("user", { password: 0, __v: 0 })
      .populate("posts");
  };
}
