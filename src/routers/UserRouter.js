import { Router } from "express"
import { MakeUser } from "../facturies/MakeUser.js"

const userRouter = Router()
const userController = MakeUser.getInstance()

userRouter.post('/users',userController.create.bind(userController))
userRouter.patch('/users/:id',userController.update.bind(userController))


export {userRouter}