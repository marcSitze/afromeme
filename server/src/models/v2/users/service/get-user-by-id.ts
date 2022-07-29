export function makeGetById({ userDb }: any) {
  return async (id: string) => {
    return userDb.findById(id).select("-password");
  };
}
