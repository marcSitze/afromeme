export const makeLogin = ({
  ApiError,
  generateToken,
  userDb,
  verifyPassword,
}: any) => {
  return async (data: any) => {
    const { email, password } = data;

    const error = new ApiError({ message: "Validation Error" });

    if (!email) error.add("email", "Please enter your email");
    if (!password) error.add("password", "Please enter your password");

    if (error.isPayloadLoaded) throw error;

    const user = await userDb.findOne({ email });

    const InvalidCredentialsError = new ApiError({
      message: "Invalid credidentials", // credentials
    });

    if (!user) throw InvalidCredentialsError;

    const isMatch = await verifyPassword(password, user.password);

    if (!isMatch) throw InvalidCredentialsError;

    // sign a user token
    const token = await generateToken({ user: { id: user._id } });

    return {
      msg: "User loggedin successfully...",
      token_type: "Bearer token",
      token,
    };
  };
};
