import { User } from '../models/Users';
import { CreateUserDTO } from '../dto/user.dto';
import { encryptPassword } from '../common/auth';
import { IUserService } from '../interfaces/users/user.service.interface';

export default class UserService implements IUserService {
  constructor(){}
  createUser = async (user: CreateUserDTO) => {
    user.password = await encryptPassword(user.password);
    let newUser = new User(user);
    return await newUser.save();
  };
  getUsers = async () => {
    return await User.find({}).select('-password');
  };
  findOne = async (query: any) => {
    return await User.findOne(query);
  };
  getUserById = async (id: string) => {
    return await User.findById(id).select('-password');;
  };
  // findOneByQuery: async (query) => {
  //   return await User.findOne(query);
  // },
  // findUserById: async (id) => {
  //   return await User.findById(id).select('-password');
  // },
  // findUserByQuery: async (query) => {
  //   return await User.find(query).select('-password');
  // },
  // findUsers: async () => {
  //   return await User.find({});
  // },
  // updateUser: async (id, query) => {
  //   return await User.findOneAndUpdate({ _id: id}, query);
  // }
}