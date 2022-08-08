export function makeGetById({ useController, findById }: any) {
  return (httpReq: any) => useController(findById, { data: httpReq.params.id });
}
