export function makeFindOne({ accountDb }: any) {
  return async (query: any) => {
    return accountDb
      .findOne(query)
      .populate("posts")
      .populate("user", { password: 0, __v: 0 })
      .exec();
  };
}
