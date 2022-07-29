export function makeUpdate({ userDb }: any) {
  return async (id: string, query: any) => {
    return userDb.findOneAndUpdate({ _id: id }, query);
  };
}
