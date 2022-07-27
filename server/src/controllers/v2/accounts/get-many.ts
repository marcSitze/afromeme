export function makeGetMany({ accountService, useController }: any) {
  return async function (httpReq: any) {
    return useController(accountService.getAccounts, { data: httpReq.query });
  };
}
