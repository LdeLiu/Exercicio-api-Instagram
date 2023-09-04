import JWT from 'jsonwebtoken'
import {CommonError} from '../../utils/commonError.js'
import {Crypt} from '../../utils/crypt.js'

class LoginService{
    constructor(repository){
        this.repository = repository
    }

    async singIn(data){
        const userAreadyExists = await this.repository.findByEmail(data.email)
        if(!userAreadyExists){
            return CommonError.build('invalid credentials e', 401)
        }
        const passwordIsValid = Crypt.compare(data.password, userAreadyExists.password)
        if(!passwordIsValid){
             return CommonError.build('invalid credentials p', 401)
        }

        const payload = {...userAreadyExists}
        const secretKey = process.env.SECRET_KEY
        const options = {expiresIn: '15m'}

        const token = JWT.sign(payload, secretKey, options)

        return {token, userAreadyExists}

    }
}

export {LoginService}