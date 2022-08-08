export function makeGetUsers({ useController, find }: any) {
  return (httpReq: any) => useController(find, { data: httpReq.query });
}
