export function makeGetMany({ getAccounts, useController }: any) {
  return async function (httpReq: any) {
    return useController(getAccounts, { data: httpReq.query });
  };
}
