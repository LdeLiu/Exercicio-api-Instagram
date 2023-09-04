import { Router } from "express";
import {MakeLike} from '../facturies/MakeLike.js'

const likeRouter = Router()
const controller = MakeLike.getInstance()

likeRouter.post('/likes/like', controller.like.bind(controller))
likeRouter.delete('/likes/dislike', controller.dislike.bind(controller))

export {likeRouter}