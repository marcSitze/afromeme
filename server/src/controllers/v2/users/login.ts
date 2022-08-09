export const makeLogin = ({ useController, login }: any) => {
  return (httpReq: any) => useController(login, { data: httpReq.body });
};
