export function makeGetUsers({ userDb }: any) {
  return async () => {
    return userDb.find({}).select("-password").sort({ createdAt: -1 });
  };
}
