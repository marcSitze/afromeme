export function makeGet({ findOne, useController }: any) {
  return async function (httpReq: any) {
    return useController(findOne, {
      data: { _id: httpReq.params.id },
    });
  };
}
