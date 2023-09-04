import { Router } from "express";
import {MakePhoto} from '../facturies/MakePhoto.js'
import {upload} from '../app/middleware/multerMiddleware.js'


const PhotoRouter = Router()
const controller = MakePhoto.getInstance()

PhotoRouter.post('/photo/:id',upload.single('file'), controller.create.bind(controller))

export {PhotoRouter}