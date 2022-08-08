export function makeUpdateAccount({ accountDb, ApiError }: any) {
  return async ({ id, ...changes }: any) => {
    const account = await accountDb.findById(id);

    if (!account) throw new ApiError({ message: "User not found" });

    return accountDb.findOneAndUpdate(id, changes, { new: true });
  };
}
