import { Router } from "express";
import {MakeLogin} from '../facturies/MakeLogin.js'

const loginRouter = Router()
const controller = MakeLogin.getInstance()

loginRouter.post('/login', controller.singIn.bind(controller))

export {loginRouter}