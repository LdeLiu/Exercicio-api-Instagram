import {User} from '../domain/User.js'
import { UserRepository } from "../app/repositories/UserRepository.js";
import { UserService } from '../app/services/UserService.js';
import { UserController } from '../app/controller/UserController.js';

class MakeUser{
    static getInstance(){
        const respository = new UserRepository(User)
        const service = new UserService(respository)
        const controller = new UserController(service)

        return controller
    }
}

export {MakeUser}