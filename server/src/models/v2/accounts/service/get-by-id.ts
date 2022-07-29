export function makeGetById({ accountDb }: any) {
  return async (id: string) => {
    return accountDb.findById(id).populate("user").select("-password");
  };
}
