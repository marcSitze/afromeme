export function makeFindOne({ userDb, sanitize }: any) {
  return (query: any) =>
    userDb.findOne(sanitize(query, { replace: { id: "_id" } }));
}
