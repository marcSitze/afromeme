export function makeGetCurrentAccount({ findOne, useController }: any) {
  return async function (httpReq: any) {
    return useController(findOne, { data: { user: httpReq?.user?.id } });
  };
}
