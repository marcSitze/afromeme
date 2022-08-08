export function makeFindById({ userDb }: any) {
  return (id: string) => userDb.findById(id).select("-password");
}
