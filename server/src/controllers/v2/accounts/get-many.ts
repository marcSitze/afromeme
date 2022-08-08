export function makeGetMany({ getAccounts, useController }: any) {
  return async function (httpReq: any) {
    console.log(httpReq.query);
    return useController(getAccounts, { data: httpReq.query });
  };
}
