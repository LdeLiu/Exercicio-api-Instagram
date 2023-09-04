import { Router } from "express";
import { MakePost } from '../facturies/MakePost.js'

const PostRouter = Router()
const controller = MakePost.getInstance()

PostRouter.post('/posts/:id', controller.create.bind(controller))
PostRouter.delete('/posts/:id', controller.delete.bind(controller))


export {PostRouter}