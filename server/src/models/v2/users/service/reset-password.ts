export const makeResetPassword = ({
  bcrypt,
  config,
  emailService,
  tokenDb,
  userDb,
}: any) => {
  return async (data: any) => {
    const { userId, token, password } = data;

    if (!userId || !token || !password)
      throw new Error("userId, token, password are missing");

    let passwordResetToken = await tokenDb.findOne({ userId });

    if (!passwordResetToken)
      throw new Error("Invalid or expired password reset token");

    const isValid = await bcrypt.compare(token, passwordResetToken.token);

    if (!isValid) throw new Error("Invalid or expired password reset token");

    const hash = await bcrypt.hash(password, Number(config.auth.saltRounds));

    await userDb.updateUser(userId, { password: hash });

    const user = await userDb.findOne({ _id: userId });
    if (user) {
      await emailService.newmailjet({
        subject: "Password Reset Successfully",
        text: "Account password has been reset successfully... \n",
        to: user.email,
      });

      await passwordResetToken.deleteOne();
    }

    return "Password updated successfully";
  };
};
