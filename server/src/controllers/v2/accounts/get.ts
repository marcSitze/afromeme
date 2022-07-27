export function makeGet({ accountService, useController }: any) {
  return async function (httpReq: any) {
    return useController(accountService.findOne, {
      data: { _id: httpReq.params.id },
    });
  };
}
