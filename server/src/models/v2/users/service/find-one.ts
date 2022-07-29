export function makeFindOne({ userDb }: any) {
  return async (query: any) => {
    return userDb.findOne(query);
  };
}
