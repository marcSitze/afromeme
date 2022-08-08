export function makeGetCurrentAccount({ findOne, useController }: any) {
  return async function (httpReq: any) {
    console.log("get current account:", httpReq.user);
    return useController(findOne, { data: { user: httpReq?.user?.id } });
  };
}
