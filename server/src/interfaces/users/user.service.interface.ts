import IUser from './user.interface';
import { CreateUserDTO } from '../../dto/user.dto';

export interface IUserService{
    createUser(user: CreateUserDTO): Promise<IUser | void>;
    getUsers(): Promise<IUser[] | void>;
    findOne(query: any): Promise<IUser | void | any>;
    getUserById(id: string): Promise<IUser | void | any>;
}