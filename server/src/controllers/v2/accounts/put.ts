export function makePut({ updateAccount, useController }: any) {
  return async function (httpReq: any) {
    return useController(updateAccount, { data: httpReq.body });
  };
}
