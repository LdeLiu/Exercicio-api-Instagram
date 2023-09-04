import {User} from '../domain/User.js'
import { UserRepository } from "../app/repositories/UserRepository.js";
import { Photo } from '../domain/Photo.js'
import { PhotoRepository } from '../app/repositories/PhotoRepository.js';
import { PhotoService } from '../app/services/PhotoService.js';
import { PhotoController } from '../app/controller/PhotoController.js';


class MakePhoto{
    static getInstance(){
        const userRespository = new UserRepository(User)
        const photoRespository = new PhotoRepository(Photo)
        const service = new PhotoService(userRespository,photoRespository)
        const controller = new PhotoController(service)

        return controller
    }
}

export {MakePhoto}