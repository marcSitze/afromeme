export const makeResetPassword = ({ useController, resetPassword }: any) => {
  return (httpReq: any) => useController(resetPassword, { data: httpReq.body });
};
