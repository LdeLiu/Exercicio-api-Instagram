import JWT from 'jsonwebtoken'
import { CommonError } from '../../utils/commonError.js'

class AuthMiddleware{
    static async handle(req,res,next){
        if(!req.headers.authorization){
            console.log('n tem token')
            return res.status(401).json(CommonError.build('Unauthorized', 401))
        }

        const [, token] = req.headers.authorization.split(' ')

        try {
            JWT.verify(token, process.env.SECRET_KEY)
        } catch (error) {
            return res.status(401).json(CommonError.build('Unauthorized', 401))
        }

        next()
    }
}

export {AuthMiddleware}