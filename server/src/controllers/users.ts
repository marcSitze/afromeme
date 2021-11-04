import { Request, Response } from 'express';
import { SuccessHandler, ErrorHandler } from '../common/response.handler';
import UserService from '../services/user.service';
import AccountService from '../services/account.service';
import { CreateUserDTO } from '../dto/user.dto';

import constants from '../common/constants';
import { verifyPassword, generateToken } from '../common/auth';

const { httpStatus } = constants;
const userService = new UserService();
const accountService = new AccountService();

export const createUser = async (req: Request, res: Response) => {
  const errors = [];

  const { username, email, phone, password }: CreateUserDTO = req.body;

  let user;

  try {
    // 1 check if user exists
    user = await userService.findOne({ email });

    if (user) {
      errors.push({ msg: "User already exists" });
     return ErrorHandler(res, httpStatus.BAD_REQUEST, errors);
    }
    if (!username) {
      errors.push({ msg: "Please enter the Username" });
    }
    if (!email) {
      errors.push({ msg: "Please enter the email" });
    }
    if (!password) {
      errors.push({ msg: "Please enter your password" });
    }

    if (errors.length > 0) {
      errors.push({msg: "please fill in all the required informations"})
      return ErrorHandler(res, httpStatus.BAD_REQUEST, errors);
    }

    user = {
      username,
      email,
      phone,
      password
    };
    // 2 Encrypt password
    const newAccount = await userService.createUser(user);
    await accountService.createAccount({ user: newAccount._id, posts: [] });

    console.log("User created");
    SuccessHandler(res, httpStatus.CREATED, {msg: 'User created successfully...'});
  } catch (err) {
    console.error(err);
    ErrorHandler(res, httpStatus.INTERNAL_SERVER_ERROR, `${err} - Server Error`)

  }
}

export const getUsers = async (req: Request, res: Response) => {
  // let searchOptions = {name: ''};
  if (req.query.search != null && req.query.search !== '') {
    // searchOptions.name = new RegExp(req.query.search, 'i');
  }
  try {
    // const users = await Users.find({});
    //    const users = await Users.find(searchOptions);
    const users = await userService.getUsers();
    SuccessHandler(res, httpStatus.OK, users);
  } catch (err) {
    console.error(err);
    ErrorHandler(res, httpStatus.INTERNAL_SERVER_ERROR, `${err} - Server Error`)
  }
}

export const getUserById = async (req: any, res: Response) => {

  try {
    const user = await userService.getUserById(req.params.id);
    // let videos = await Videos.find({}).sort({ publishDate: -1 });
    SuccessHandler(res, httpStatus.OK, { user });
  } catch (err) {
    console.error(err);
    ErrorHandler(res, httpStatus.INTERNAL_SERVER_ERROR, `${err} - Server Error`)
  }

}


export const updateUser = () => { }
// get User by query
export const getUser = () => { }


export const login = async (req: Request, res: Response) => {

  type loginDto = {
    email: string;
    password: string;
  };

  const { email, password }: loginDto = req.body;
  console.log('req.body: ', req.body);
  const errors = [];

  if (!email) {
    errors.push({ msg: "Please enter your email" });
  }
  if (!password) {
    errors.push({ msg: "Please enter your password" });
  }

  if (errors.length > 0) {
    return ErrorHandler(res, httpStatus.BAD_REQUEST, errors);
  }

  try {
    let user = await userService.findOne({ email });
    console.log('user: ', user);
    if (!user) {
      errors.push({ msg: "Invalid credidentials" });
      return ErrorHandler(res, httpStatus.BAD_REQUEST, errors);
    }

    const isMatch = await verifyPassword(password, user.password);
    console.log('isMatch: ', isMatch);
    if (!isMatch) {
      errors.push({ msg: "Invalid credidentials" });
      return ErrorHandler(res, httpStatus.BAD_REQUEST, errors);
    }
    const payload = {
      user: {
        id: user._id,
      },
    };

    // sign a user token
    const token = await generateToken(payload);

    console.log("User logged in");
    SuccessHandler(res, httpStatus.OK, { msg: "User loggedin successfully...", token_type: "Bearer token", token });
  } catch (err) {
    console.error(err);
    ErrorHandler(res, httpStatus.INTERNAL_SERVER_ERROR, `${err} - Server Error`)
  }
};
