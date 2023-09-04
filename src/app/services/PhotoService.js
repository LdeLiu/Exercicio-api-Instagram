class PhotoService{
    constructor(userRepository, photoRepository){
        this.userRepository = userRepository
        this.photoRepository = photoRepository
    }

    async create(id,data){
        const photoCreated = await this.photoRepository.create(data)
        const updatePhotoUser = await this.userRepository.updatePhoto(id, photoCreated._id)

        return photoCreated
    }
}

export {PhotoService}