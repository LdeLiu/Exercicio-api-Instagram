import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { Database } from './database/Database.js'
import { userRouter } from './routers/UserRouter.js'
import { imgRouter } from './routers/ImageRouter.js'
import { loginRouter } from './routers/LoginRouter.js'
import { PhotoRouter } from './routers/PhotoRouter.js'
import { PostRouter } from './routers/PostRouter.js'
import { likeRouter } from './routers/LikeRouter.js'
import { profileRouter } from './routers/ProfileRouter.js'
import { AuthMiddleware } from './app/middleware/AuthMiddleware.js'

Database.initialize()

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(loginRouter)

app.use(AuthMiddleware.handle)
app.use(PhotoRouter)
app.use(imgRouter)
app.use(PostRouter)
app.use(likeRouter)
app.use(profileRouter)

app.listen(process.env.PORT, () => console.log('server runnin at ' + process.env.PORT))