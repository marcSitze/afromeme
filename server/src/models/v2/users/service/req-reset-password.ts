export const makeRequestResetPassword = ({
  bcrypt,
  config,
  crypto,
  emailService,
  tokenDb,
  userDb,
}: any) => {
  return async (data: any) => {
    const { email } = data;

    if (!email) throw new Error("Please enter your email");

    const user = await userDb.findOne({ email });

    if (!user) throw new Error("Email does not exist");

    let token = await tokenDb.findOne({ userId: user._id });
    if (token) await token.deleteOne();

    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(config.auth.saltRounds));

    await tokenDb.create({
      userId: user._id,
      token: hash,
      createdAt: Date.now(),
    });

    const link = `${config.app.host}/api/users/auth/resetPassword?token=${resetToken}&id=${user._id}`;

    await emailService.newmailjet({
      subject: "Password Reset Request",
      text: "Click here to reset your account password please... \n" + link,
      to: user.email,
    });

    return { msg: "Check your mail to reset your password" };
  };
};
