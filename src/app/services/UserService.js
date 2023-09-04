import {CommonError} from '../../utils/commonError.js'
import { Crypt } from '../../utils/crypt.js'

class UserService{
    constructor(respository) {
        this.respository = respository
    }

    async create(data){
        const thisUserAreadyExists = await this.respository.findByEmail(data.email)
        if(thisUserAreadyExists){
            return CommonError.build("User already exists", 400)
        }

        const newUser = {
            ...data,
            password: Crypt.encrypt(data.password)
        }
        console.log(newUser)
        const result = await this.respository.create(newUser)
        return {result, status: 200}
    }

    async update(id , data){
        const thisUserAreadyExists = await this.respository.findById(id)
        if(!thisUserAreadyExists){
            return CommonError.build("User not found", 400)
        }
        let updatedUser = data
        if(updatedUser.password){
            updatedUser = {
                ...data,
                password: Crypt.encrypt(data.password) 
            }
        }
        const result = await this.respository.updateData(id,updatedUser)
        return {result, status: 200}
    }

}

export {UserService}