export function makeCreateUser({ useController, createUser }: any) {
  return (httpReq: any) => useController(createUser, { data: httpReq.body });
}
