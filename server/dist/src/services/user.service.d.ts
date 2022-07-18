import { CreateUserDTO } from '../dto/user.dto';
import { IUserService } from '../interfaces/users/user.service.interface';
export default class UserService implements IUserService {
    constructor();
    createUser: (user: CreateUserDTO) => Promise<import("../interfaces/models/UserDocument").UserDocument>;
    getUsers: () => Promise<import("../interfaces/models/UserDocument").UserDocument[]>;
    findOne: (query: any) => Promise<import("../interfaces/models/UserDocument").UserDocument | null>;
    getUserById: (id: string) => Promise<import("../interfaces/models/UserDocument").UserDocument | null>;
    updateUser: (id: string, query: any) => Promise<import("../interfaces/models/UserDocument").UserDocument | null>;
}
