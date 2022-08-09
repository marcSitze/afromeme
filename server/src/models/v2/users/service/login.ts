export const makeLogin = ({ generateToken, userDb, verifyPassword }: any) => {
  return async (data: any) => {
    const { email, password } = data;

    const errors = [];

    if (!email) errors.push({ msg: "Please enter your email" });

    if (!password) errors.push({ msg: "Please enter your password" });

    if (errors.length > 0) return { data: errors, success: false };

    const user = await userDb.findOne({ email });

    if (!user)
      return { data: [{ msg: "Invalid credidentials" }], success: false };

    const isMatch = await verifyPassword(password, user.password);

    if (!isMatch)
      return { data: [{ msg: "Invalid credidentials" }], success: false };

    const payload = { user: { id: user._id } };

    // sign a user token
    const token = await generateToken(payload);

    return {
      data: {
        msg: "User loggedin successfully...",
        token_type: "Bearer token",
        token,
      },
      success: true,
    };
  };
};
