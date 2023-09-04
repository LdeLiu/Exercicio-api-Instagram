import {User} from '../domain/User.js'
import { UserRepository } from "../app/repositories/UserRepository.js";
import { LoginService } from '../app/services/LoginService.js';
import { LoginController } from '../app/controller/LoginController.js';


class MakeLogin{
    static getInstance(){
        const repository = new UserRepository(User)
        const service = new LoginService(repository)
        const controller = new LoginController(service)

        return controller
    }
}

export {MakeLogin}