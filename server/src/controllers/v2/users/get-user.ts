export function makeGetUser({ useController, findById }: any) {
  return (httpReq: any) => useController(findById, { data: httpReq.query });
}
