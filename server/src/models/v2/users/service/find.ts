export function makeFind({ userDb, sanitize }: any) {
  return async (query: any) => {
    return userDb
      .find(sanitize(query, { replace: { id: "_id" } }))
      .select("-password")
      .sort({ createdAt: -1 });
  };
}
