import { Router } from "express"
import { MakeProfile} from "../facturies/MakeProfile.js"
import { AuthMiddleware} from '../app/middleware/AuthMiddleware.js'

const profileRouter = Router()
const profileController = MakeProfile.getInstance()

profileRouter.get('/profiles/:id',profileController.findProfile.bind(profileController))


export {profileRouter}