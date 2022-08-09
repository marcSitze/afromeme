export const makeRequestResetPassword = ({
  useController,
  requestResetPassword,
}: any) => {
  return (httpReq: any) =>
    useController(requestResetPassword, { data: httpReq.body });
};
